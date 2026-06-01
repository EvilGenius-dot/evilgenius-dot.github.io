import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { access, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, isAbsolute, join, normalize } from "node:path";
import { pathToFileURL } from "node:url";

const repoRoot = new URL("..", import.meta.url).pathname;
const docsRoot = join(repoRoot, "src/docs");
const configPath = join(repoRoot, "scripts/docs-config.mjs");
const publicRoot = join(repoRoot, "public");
const publishedRoot = join(repoRoot, "..");
const defaultPort = 5199;
const categoryTitles = {
    en: "Getting Started",
    zh: "开始使用",
    ru: "Начало работы",
};

const getPort = () => {
    const portIndex = process.argv.indexOf("--port");
    const rawPort =
        portIndex === -1 ? process.env.PORT : process.argv[portIndex + 1];

    return Number(rawPort || defaultPort);
};

const loadConfig = async () => {
    const url = `${pathToFileURL(configPath).href}?t=${Date.now()}`;

    return import(url);
};

const parseFrontmatter = (source, filePath = "markdown") => {
    if (!source.startsWith("---\n")) {
        throw new Error(`${filePath} is missing frontmatter`);
    }

    const closingIndex = source.indexOf("\n---", 4);

    if (closingIndex === -1) {
        throw new Error(`${filePath} has an unterminated frontmatter block`);
    }

    const raw = source.slice(4, closingIndex).trim();
    const body = source.slice(closingIndex + 4).replace(/^\r?\n/, "");
    const data = {};

    for (const line of raw.split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        const separatorIndex = trimmed.indexOf(":");

        if (separatorIndex === -1) {
            throw new Error(
                `${filePath} has invalid frontmatter line: ${line}`,
            );
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        let value = trimmed.slice(separatorIndex + 1).trim();

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }

        data[key] = ["order", "categoryOrder"].includes(key)
            ? Number(value)
            : value;
    }

    return { data, body };
};

const normalizeLineValue = (value = "") =>
    String(value).replace(/\r?\n/g, " ").trim();

const renderMarkdownFile = (common, localized) => {
    const slug = common.slug ? common.slug : '""';
    const frontmatter = [
        "---",
        `id: ${normalizeLineValue(common.id)}`,
        `slug: ${slug}`,
        `title: ${normalizeLineValue(localized.title)}`,
        `navTitle: ${normalizeLineValue(localized.navTitle || localized.title)}`,
        `description: ${normalizeLineValue(localized.description)}`,
        `category: ${normalizeLineValue(common.category || "getting-started")}`,
        `categoryTitle: ${normalizeLineValue(
            localized.categoryTitle || common.category || "Getting Started",
        )}`,
        `categoryOrder: ${Number(common.categoryOrder || 1)}`,
        `order: ${Number(common.order || 1)}`,
        "---",
        "",
    ].join("\n");

    return `${frontmatter}${String(localized.body || "").trim()}\n`;
};

const slugify = (value = "") =>
    String(value)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

const toCamelId = (slug = "") =>
    slug.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());

const toTitle = (slug = "") =>
    slug
        .split("-")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

const docDir = (locale, collectionSlug) =>
    join(docsRoot, locale, collectionSlug, "guide");

const readMaybeFile = async (filePath, encoding = "utf8") => {
    try {
        return await readFile(filePath, encoding);
    } catch (error) {
        if (["EISDIR", "ENOENT"].includes(error.code)) return null;
        throw error;
    }
};

const ensureExists = async (filePath) => {
    await access(filePath);
};

const loadPagesForCollection = async (config, collection) => {
    const defaultDir = docDir(config.DEFAULT_LOCALE, collection.slug);

    if (!existsSync(defaultDir)) {
        return [];
    }

    const files = (await readdir(defaultDir))
        .filter((file) => file.endsWith(".md"))
        .sort();

    const pages = [];

    for (const file of files) {
        const localized = {};
        let common = null;

        for (const locale of config.SUPPORTED_LOCALES) {
            const filePath = join(docDir(locale, collection.slug), file);
            const source = await readMaybeFile(filePath);

            if (!source) {
                localized[locale] = {
                    title: "",
                    navTitle: "",
                    description: "",
                    categoryTitle: "",
                    body: "",
                    missing: true,
                };
                continue;
            }

            const { data, body } = parseFrontmatter(source, filePath);

            if (locale === config.DEFAULT_LOCALE) {
                common = {
                    id: data.id,
                    slug: data.slug || "",
                    file,
                    category: data.category || "getting-started",
                    categoryOrder: data.categoryOrder ?? 1,
                    order: data.order ?? 1,
                };
            }

            localized[locale] = {
                title: data.title || "",
                navTitle: data.navTitle || data.title || "",
                description: data.description || "",
                categoryTitle: data.categoryTitle || "",
                body,
            };
        }

        pages.push({
            common,
            localized,
        });
    }

    return pages.sort((a, b) => {
        const categoryOrderA = a.common?.categoryOrder ?? 1;
        const categoryOrderB = b.common?.categoryOrder ?? 1;

        if (categoryOrderA !== categoryOrderB) {
            return categoryOrderA - categoryOrderB;
        }

        return (a.common?.order ?? 1) - (b.common?.order ?? 1);
    });
};

const getCollectionCategories = (config, collection, pages) => {
    const categoriesById = new Map();

    for (const category of config.DOC_CATEGORY_PRESETS || []) {
        if (category.collection !== collection.id) continue;

        categoriesById.set(category.id, {
            id: category.id,
            order: Number(category.order || 1),
            titleByLocale: Object.fromEntries(
                config.SUPPORTED_LOCALES.map((locale) => [
                    locale,
                    category.meta?.[locale]?.title || toTitle(category.id),
                ]),
            ),
        });
    }

    for (const page of pages) {
        const id = page.common?.category || "getting-started";
        const existing = categoriesById.get(id);
        const titleByLocale = Object.fromEntries(
            config.SUPPORTED_LOCALES.map((locale) => [
                locale,
                existing?.titleByLocale?.[locale] ||
                    page.localized[locale]?.categoryTitle ||
                    toTitle(id),
            ]),
        );

        categoriesById.set(id, {
            id,
            order: existing?.order ?? page.common?.categoryOrder ?? 1,
            titleByLocale,
        });
    }

    return [...categoriesById.values()].sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return a.id.localeCompare(b.id);
    });
};

const loadState = async () => {
    const config = await loadConfig();
    const collections = [];

    for (const collection of [...config.DOC_COLLECTIONS].sort(
        (a, b) => a.order - b.order,
    )) {
        const pages = await loadPagesForCollection(config, collection);
        const categories = getCollectionCategories(config, collection, pages);

        collections.push({
            ...collection,
            pages,
            categories,
        });
    }

    return {
        defaultLocale: config.DEFAULT_LOCALE,
        supportedLocales: config.SUPPORTED_LOCALES,
        collections,
    };
};

const validateCommon = (common) => {
    if (!common.id) throw new Error("文章 id 不能为空");
    if (!common.category) throw new Error("类目 category 不能为空");
    if (!Number.isFinite(Number(common.categoryOrder))) {
        throw new Error("categoryOrder 必须是数字");
    }
    if (!Number.isFinite(Number(common.order))) {
        throw new Error("order 必须是数字");
    }
};

const getTargetFile = async ({ collection, originalFile, common }) => {
    if (originalFile) return originalFile;

    const normalizedSlug = common.slug || "overview";
    const file = `${String(Number(common.order || 1)).padStart(
        2,
        "0",
    )}-${normalizedSlug}.md`;
    const defaultFilePath = join(docDir("en", collection.slug), file);

    if (existsSync(defaultFilePath)) {
        throw new Error(`${file} 已存在，请调整 order 或 slug`);
    }

    return file;
};

const writePage = async (payload) => {
    const config = await loadConfig();
    const collection = config.DOC_COLLECTIONS.find(
        (item) => item.id === payload.collection,
    );

    if (!collection) {
        throw new Error(`找不到文档集：${payload.collection}`);
    }

    const common = {
        id: normalizeLineValue(payload.common?.id),
        slug: slugify(payload.common?.slug || ""),
        category: slugify(payload.common?.category || "getting-started"),
        categoryOrder: Number(payload.common?.categoryOrder || 1),
        order: Number(payload.common?.order || 1),
    };
    validateCommon(common);

    const file = await getTargetFile({
        collection,
        originalFile: payload.originalFile,
        common,
    });

    for (const locale of config.SUPPORTED_LOCALES) {
        const localized = payload.localized?.[locale];

        if (!localized?.title) {
            throw new Error(`${locale} title 不能为空`);
        }
        if (!localized?.description) {
            throw new Error(`${locale} description 不能为空`);
        }
        if (!localized?.body) {
            throw new Error(`${locale} 正文不能为空`);
        }

        const targetDir = docDir(locale, collection.slug);

        await mkdir(targetDir, { recursive: true });
        await writeFile(
            join(targetDir, file),
            renderMarkdownFile(common, localized),
        );
    }

    const log = await runDocsGenerate();

    return {
        file,
        log,
    };
};

const renderCollectionsBlock = (collections) =>
    `export const DOC_COLLECTIONS = ${JSON.stringify(collections, null, 4)};\n\nexport const DEFAULT_DOC_COLLECTION`;

const updateCollectionsConfig = async (collections) => {
    const source = await readFile(configPath, "utf8");
    const nextSource = source.replace(
        /export const DOC_COLLECTIONS = \[[\s\S]*?\];\n\nexport const DEFAULT_DOC_COLLECTION/,
        renderCollectionsBlock(collections),
    );

    if (nextSource === source) {
        throw new Error(
            "无法更新 DOC_COLLECTIONS，请检查 docs-config.mjs 格式",
        );
    }

    await writeFile(configPath, nextSource);
};

const renderCategoryPresetsBlock = (categories) =>
    `export const DOC_CATEGORY_PRESETS = ${JSON.stringify(categories, null, 4)};\n\n`;

const updateCategoryPresetsConfig = async (categories) => {
    const source = await readFile(configPath, "utf8");
    const categoryBlockPattern =
        /export const DOC_CATEGORY_PRESETS = \[[\s\S]*?\];\n\n/;
    const nextSource = categoryBlockPattern.test(source)
        ? source.replace(categoryBlockPattern, renderCategoryPresetsBlock(categories))
        : source.replace(
              /export const DEFAULT_DOC_COLLECTION/,
              `${renderCategoryPresetsBlock(categories)}export const DEFAULT_DOC_COLLECTION`,
          );

    if (nextSource === source) {
        throw new Error(
            "无法更新 DOC_CATEGORY_PRESETS，请检查 docs-config.mjs 格式",
        );
    }

    await writeFile(configPath, nextSource);
};

const createCategory = async (payload) => {
    const config = await loadConfig();
    const collection = config.DOC_COLLECTIONS.find(
        (item) => item.id === payload.collection,
    );
    const id = slugify(payload.id || "");
    const order = Number(payload.order || 1);

    if (!collection) {
        throw new Error(`找不到文档集：${payload.collection}`);
    }
    if (!id) throw new Error("分类 id 不能为空");
    if (!Number.isFinite(order)) throw new Error("分类 order 必须是数字");

    const pages = await loadPagesForCollection(config, collection);
    const existingCategories = getCollectionCategories(
        config,
        collection,
        pages,
    );

    if (existingCategories.some((category) => category.id === id)) {
        throw new Error("分类 id 已存在");
    }

    const titleByLocale = Object.fromEntries(
        config.SUPPORTED_LOCALES.map((locale) => {
            const localeMeta = payload.meta?.[locale] || {};

            return [locale, normalizeLineValue(localeMeta.title || toTitle(id))];
        }),
    );
    const meta = Object.fromEntries(
        config.SUPPORTED_LOCALES.map((locale) => [
            locale,
            {
                title: titleByLocale[locale],
            },
        ]),
    );
    const collectionOrder = (collectionId) =>
        config.DOC_COLLECTIONS.find((item) => item.id === collectionId)
            ?.order ?? 1;
    const nextCategoryPresets = [
        ...(config.DOC_CATEGORY_PRESETS || []),
        {
            collection: collection.id,
            id,
            order,
            meta,
        },
    ].sort((a, b) => {
        const collectionDelta =
            collectionOrder(a.collection) - collectionOrder(b.collection);

        if (collectionDelta !== 0) return collectionDelta;
        if (a.order !== b.order) return a.order - b.order;
        return a.id.localeCompare(b.id);
    });

    await updateCategoryPresetsConfig(nextCategoryPresets);
    const log = await runDocsGenerate();

    return {
        category: {
            id,
            order,
            titleByLocale,
        },
        log,
    };
};

const createCollection = async (payload) => {
    const config = await loadConfig();
    const id = slugify(payload.id || payload.slug || "");
    const slug = slugify(payload.slug || id);
    const order = Number(payload.order || config.DOC_COLLECTIONS.length + 1);

    if (!id) throw new Error("文档集 id 不能为空");
    if (!slug) throw new Error("文档集 slug 不能为空");
    if (!Number.isFinite(order)) throw new Error("文档集 order 必须是数字");

    if (
        config.DOC_COLLECTIONS.some(
            (collection) => collection.id === id || collection.slug === slug,
        )
    ) {
        throw new Error("文档集 id 或 slug 已存在");
    }

    const meta = Object.fromEntries(
        config.SUPPORTED_LOCALES.map((locale) => {
            const localeMeta = payload.meta?.[locale] || {};
            const title = normalizeLineValue(localeMeta.title || toTitle(slug));
            const description = normalizeLineValue(
                localeMeta.description || `${title} documentation.`,
            );

            return [
                locale,
                {
                    title,
                    description,
                },
            ];
        }),
    );
    const nextCollections = [
        ...config.DOC_COLLECTIONS,
        {
            id,
            slug,
            order,
            meta,
        },
    ].sort((a, b) => a.order - b.order);

    await updateCollectionsConfig(nextCollections);

    for (const locale of config.SUPPORTED_LOCALES) {
        const targetDir = docDir(locale, slug);
        const title =
            locale === "zh"
                ? `${meta[locale].title}文档概览`
                : `${meta[locale].title} documentation overview`;
        const bodyTitle =
            locale === "zh"
                ? `${meta[locale].title}文档`
                : `${meta[locale].title} Documentation`;

        await mkdir(targetDir, { recursive: true });
        await writeFile(
            join(targetDir, "01-overview.md"),
            renderMarkdownFile(
                {
                    id: "overview",
                    slug: "",
                    category: "getting-started",
                    categoryOrder: 1,
                    order: 1,
                },
                {
                    title,
                    navTitle: locale === "zh" ? "概览" : "Overview",
                    description: meta[locale].description,
                    categoryTitle: categoryTitles[locale] || categoryTitles.en,
                    body: `# ${bodyTitle}\n\nTODO: 补充这个文档集的概览内容。\n`,
                },
            ),
        );
    }

    const log = await runDocsGenerate();

    return {
        collection: id,
        file: "01-overview.md",
        log,
    };
};

const runDocsGenerate = () =>
    new Promise((resolve, reject) => {
        const child = spawn(process.execPath, ["scripts/generate-docs.mjs"], {
            cwd: repoRoot,
        });
        let output = "";

        child.stdout.on("data", (chunk) => {
            output += chunk.toString();
        });
        child.stderr.on("data", (chunk) => {
            output += chunk.toString();
        });
        child.on("error", reject);
        child.on("close", (code) => {
            if (code === 0) {
                resolve(output.trim());
                return;
            }

            reject(new Error(output || `docs:generate failed with ${code}`));
        });
    });

const send = (response, status, body, headers = {}) => {
    response.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        ...headers,
    });
    response.end(JSON.stringify(body));
};

const sendHtml = (response) => {
    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
    });
    response.end(appHtml);
};

const staticContentTypes = {
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml; charset=utf-8",
    ".webp": "image/webp",
};

const staticPathPrefixes = ["/image/", "/images/", "/assets/", "/favicon.ico"];

const isStaticRequest = (pathname) =>
    staticPathPrefixes.some((prefix) =>
        prefix.endsWith("/") ? pathname.startsWith(prefix) : pathname === prefix,
    );

const resolveStaticAsset = async (pathname) => {
    let relativePath;

    try {
        relativePath = decodeURIComponent(pathname).replace(/^\/+/, "");
    } catch {
        return null;
    }

    const safeRelativePath = normalize(relativePath);

    if (
        isAbsolute(safeRelativePath) ||
        safeRelativePath === ".." ||
        safeRelativePath.startsWith("../")
    ) {
        return null;
    }

    for (const root of [publicRoot, publishedRoot]) {
        const filePath = join(root, safeRelativePath);
        const source = await readMaybeFile(filePath, null);

        if (source !== null) {
            return {
                filePath,
                source,
            };
        }
    }

    return null;
};

const sendStaticAsset = async (response, pathname) => {
    const asset = await resolveStaticAsset(pathname);

    if (!asset) {
        response.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8",
        });
        response.end("Static asset not found");
        return true;
    }

    response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type":
            staticContentTypes[extname(asset.filePath).toLowerCase()] ||
            "application/octet-stream",
    });
    response.end(asset.source);
    return true;
};

const readJsonBody = (request) =>
    new Promise((resolve, reject) => {
        let body = "";

        request.on("data", (chunk) => {
            body += chunk.toString();
        });
        request.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
        request.on("error", reject);
    });

const handleApi = async (request, response, pathname) => {
    if (request.method === "GET" && pathname === "/api/state") {
        send(response, 200, await loadState());
        return;
    }

    if (request.method === "POST" && pathname === "/api/page") {
        send(response, 200, {
            ok: true,
            ...(await writePage(await readJsonBody(request))),
        });
        return;
    }

    if (request.method === "POST" && pathname === "/api/category") {
        send(response, 200, {
            ok: true,
            ...(await createCategory(await readJsonBody(request))),
        });
        return;
    }

    if (request.method === "POST" && pathname === "/api/collection") {
        send(response, 200, {
            ok: true,
            ...(await createCollection(await readJsonBody(request))),
        });
        return;
    }

    send(response, 404, {
        error: "Not found",
    });
};

const server = createServer(async (request, response) => {
    try {
        const url = new URL(request.url, `http://${request.headers.host}`);

        if (url.pathname.startsWith("/api/")) {
            await handleApi(request, response, url.pathname);
            return;
        }

        if (request.method === "GET" && isStaticRequest(url.pathname)) {
            await sendStaticAsset(response, url.pathname);
            return;
        }

        if (request.method === "GET") {
            await ensureExists(configPath);
            sendHtml(response);
            return;
        }

        send(response, 405, {
            error: "Method not allowed",
        });
    } catch (error) {
        send(response, 500, {
            error: error.message,
        });
    }
});

const appHtml = `<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>文档管理器</title>
    <style>
        :root {
            color-scheme: dark;
            --bg: #0d121c;
            --panel: #111827;
            --panel-soft: #172033;
            --border: #2c3437;
            --text: #f8fafc;
            --muted: #94a3b8;
            --accent: #417e38;
            --accent-strong: #5fb653;
            --danger: #ef4444;
        }
        * { box-sizing: border-box; }
        body {
            background: var(--bg);
            color: var(--text);
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            margin: 0;
        }
        button, input, textarea, select {
            font: inherit;
        }
        button {
            align-items: center;
            background: var(--accent);
            border: 0;
            border-radius: 8px;
            color: white;
            cursor: pointer;
            display: inline-flex;
            font-weight: 700;
            justify-content: center;
            min-height: 2.5rem;
            padding: 0 0.9rem;
        }
        button.secondary {
            background: #263143;
            color: var(--text);
        }
        button.ghost {
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text);
        }
        button.compact {
            font-size: 0.78rem;
            min-height: 2rem;
            padding: 0 0.65rem;
        }
        button:disabled {
            cursor: not-allowed;
            opacity: 0.55;
        }
        input, textarea, select {
            background: #0b1020;
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text);
            min-width: 0;
            padding: 0.65rem 0.75rem;
            width: 100%;
        }
        textarea {
            line-height: 1.55;
            min-height: 32rem;
            resize: vertical;
        }
        label {
            color: var(--muted);
            display: grid;
            font-size: 0.82rem;
            gap: 0.35rem;
        }
        .preview-field {
            color: var(--muted);
            display: grid;
            font-size: 0.82rem;
            gap: 0.35rem;
            min-width: 0;
        }
        .app {
            display: grid;
            grid-template-columns: 240px minmax(0, 1fr);
            min-height: 100vh;
        }
        .sidebar {
            align-content: start;
            border-right: 1px solid var(--border);
            display: grid;
            gap: 0.75rem;
            grid-template-rows: auto auto auto auto;
            max-height: 100vh;
            overflow: auto;
            padding: 0.75rem;
        }
        .brand h1 {
            font-size: 1.05rem;
            margin: 0 0 0.25rem;
        }
        .brand p,
        .hint,
        .status {
            color: var(--muted);
            font-size: 0.86rem;
            line-height: 1.5;
            margin: 0;
        }
        .page-list {
            background: rgba(17, 24, 39, 0.6);
            border: 1px solid var(--border);
            border-radius: 8px;
            display: grid;
            gap: 0.5rem;
            max-height: min(42rem, calc(100vh - 15rem));
            overflow: auto;
            padding: 0.5rem;
        }
        .page-category {
            display: grid;
            gap: 0.25rem;
            min-width: 0;
        }
        .page-category + .page-category {
            border-top: 1px solid rgba(148, 163, 184, 0.18);
            padding-top: 0.5rem;
        }
        .page-category-header {
            align-items: center;
            color: var(--muted);
            display: flex;
            font-size: 0.72rem;
            font-weight: 800;
            gap: 0.4rem;
            justify-content: space-between;
            letter-spacing: 0;
            padding: 0 0.35rem;
            text-transform: uppercase;
        }
        .page-category-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .page-category-count,
        .page-category-empty {
            color: #64748b;
            font-size: 0.72rem;
            font-weight: 600;
        }
        .page-item {
            background: transparent;
            border: 1px solid transparent;
            color: var(--text);
            display: grid;
            gap: 0.2rem;
            font-size: 0.9rem;
            height: auto;
            justify-content: stretch;
            min-height: 0;
            padding: 0.5rem 0.6rem;
            text-align: left;
        }
        .page-item.active {
            background: rgba(65, 126, 56, 0.22);
            border-color: rgba(95, 182, 83, 0.55);
        }
        .page-item small {
            color: var(--muted);
            font-size: 0.74rem;
            font-weight: 500;
        }
        .main {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            min-width: 0;
        }
        .toolbar {
            align-items: center;
            border-bottom: 1px solid var(--border);
            display: flex;
            gap: 0.75rem;
            justify-content: space-between;
            padding: 1rem 1.25rem;
        }
        .toolbar h2 {
            font-size: 1rem;
            margin: 0;
        }
        .toolbar-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .editor {
            display: grid;
            gap: 1rem;
            overflow: auto;
            padding: 1.25rem;
        }
        .panel {
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 8px;
            display: grid;
            gap: 1rem;
            padding: 1rem;
        }
        .grid {
            display: grid;
            gap: 0.75rem;
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .grid.three {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .tabs {
            display: flex;
            gap: 0.4rem;
        }
        .tab {
            background: #263143;
        }
        .tab.active {
            background: var(--accent);
        }
        .locale-grid {
            display: grid;
            gap: 0.75rem;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
        .locale-grid .wide {
            grid-column: 1 / -1;
        }
        .markdown-workspace {
            display: grid;
            gap: 0.75rem;
            grid-column: 1 / -1;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
        .markdown-workspace textarea,
        .markdown-preview {
            min-height: 36rem;
        }
        .markdown-editor-field {
            align-content: start;
            display: grid;
            gap: 0.45rem;
            grid-template-rows: auto minmax(0, 1fr);
            min-width: 0;
        }
        .markdown-editor-header {
            align-items: center;
            color: var(--muted);
            display: flex;
            font-size: 0.82rem;
            gap: 0.5rem;
            justify-content: space-between;
            min-height: 2rem;
        }
        .markdown-preview {
            background: #0b1020;
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text);
            line-height: 1.7;
            overflow: auto;
            padding: 1rem;
        }
        .markdown-preview > :first-child {
            margin-top: 0;
        }
        .markdown-preview > :last-child {
            margin-bottom: 0;
        }
        .markdown-preview h1,
        .markdown-preview h2,
        .markdown-preview h3 {
            color: var(--text);
            line-height: 1.25;
            margin: 1.4rem 0 0.75rem;
        }
        .markdown-preview h1 {
            font-size: 1.55rem;
        }
        .markdown-preview h2 {
            border-top: 1px solid rgba(148, 163, 184, 0.18);
            font-size: 1.25rem;
            padding-top: 1rem;
        }
        .markdown-preview h3 {
            font-size: 1.05rem;
        }
        .markdown-preview p,
        .markdown-preview ul,
        .markdown-preview ol,
        .markdown-preview blockquote,
        .markdown-preview pre {
            margin: 0 0 1rem;
        }
        .markdown-preview ul,
        .markdown-preview ol {
            padding-left: 1.25rem;
        }
        .markdown-preview blockquote {
            border-left: 3px solid var(--accent-strong);
            color: var(--muted);
            margin-left: 0;
            padding-left: 0.875rem;
        }
        .markdown-preview pre {
            background: rgb(2 6 23 / 80%);
            border: 1px solid rgba(148, 163, 184, 0.18);
            border-radius: 8px;
            overflow-x: auto;
            padding: 0.875rem;
        }
        .markdown-preview code {
            background: rgb(15 23 42 / 85%);
            border: 1px solid rgba(148, 163, 184, 0.16);
            border-radius: 5px;
            padding: 0.08rem 0.25rem;
        }
        .markdown-preview pre code {
            background: transparent;
            border: 0;
            padding: 0;
        }
        .markdown-preview a {
            color: var(--accent-strong);
        }
        .markdown-preview img {
            border: 1px solid rgba(148, 163, 184, 0.18);
            border-radius: 8px;
            display: block;
            height: auto;
            margin: 0 0 1rem;
            max-width: 100%;
        }
        .markdown-preview table {
            border-collapse: collapse;
            display: block;
            margin: 0 0 1rem;
            overflow-x: auto;
            width: 100%;
        }
        .markdown-preview th,
        .markdown-preview td {
            border: 1px solid rgba(148, 163, 184, 0.24);
            padding: 0.55rem 0.65rem;
            text-align: left;
            vertical-align: top;
        }
        .markdown-preview th {
            background: rgb(15 23 42 / 85%);
            color: var(--text);
            font-weight: 800;
        }
        .collection-form,
        .category-form {
            display: none;
        }
        .collection-form.open,
        .category-form.open {
            display: grid;
        }
        .error {
            color: var(--danger);
        }
        .success {
            color: var(--accent-strong);
        }
        @media (max-width: 980px) {
            .app {
                grid-template-columns: 1fr;
            }
            .sidebar {
                border-bottom: 1px solid var(--border);
                border-right: 0;
            }
            .grid,
            .grid.three,
            .locale-grid,
            .markdown-workspace {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div id="app" class="app">
        <aside class="sidebar">
            <section class="brand">
                <h1>文档管理器</h1>
                <p>可视化维护文档集、类目和文章。保存后会写入 Markdown 并自动执行 docs:generate。</p>
            </section>
            <section class="panel">
                <label>文档集
                    <select id="collectionSelect"></select>
                </label>
                <button id="newPageButton" type="button">新增文章</button>
                <button id="toggleCategoryButton" type="button" class="secondary">新增分类</button>
                <button id="toggleCollectionButton" type="button" class="secondary">新增同级文档</button>
            </section>
            <section id="pageList" class="page-list"></section>
            <section id="categoryForm" class="panel category-form">
                <strong>新增分类</strong>
                <p class="hint">分类会写入当前文档集配置，文章保存时可直接从 category 下拉框选择。</p>
                <label>分类 ID
                    <input id="newCategoryId" placeholder="advanced">
                </label>
                <label>排序
                    <input id="newCategoryOrder" type="number" min="1">
                </label>
                <label>中文标题
                    <input id="newCategoryZhTitle" placeholder="高级配置">
                </label>
                <label>英文标题
                    <input id="newCategoryEnTitle" placeholder="Advanced">
                </label>
                <label>俄语标题
                    <input id="newCategoryRuTitle" placeholder="Advanced">
                </label>
                <button id="createCategoryButton" type="button">创建分类</button>
            </section>
            <section id="collectionForm" class="panel collection-form">
                <strong>新增同级文档</strong>
                <p class="hint">会新增顶部“文档”下拉菜单里的一级入口，并自动创建三种语言的概览页。</p>
                <label>ID
                    <input id="newCollectionId" placeholder="custom-management">
                </label>
                <label>URL slug
                    <input id="newCollectionSlug" placeholder="custom-management">
                </label>
                <label>排序
                    <input id="newCollectionOrder" type="number" min="1">
                </label>
                <label>中文名称
                    <input id="newCollectionZhTitle" placeholder="定制管理">
                </label>
                <label>中文 SEO 描述
                    <input id="newCollectionZhDescription" placeholder="定制管理文档，覆盖...">
                </label>
                <label>英文名称
                    <input id="newCollectionEnTitle" placeholder="Custom Management">
                </label>
                <label>英文 SEO 描述
                    <input id="newCollectionEnDescription" placeholder="Custom management documentation.">
                </label>
                <label>俄语名称
                    <input id="newCollectionRuTitle" placeholder="Custom Management">
                </label>
                <label>俄语 SEO 描述
                    <input id="newCollectionRuDescription" placeholder="Документация Custom Management.">
                </label>
                <button id="createCollectionButton" type="button">创建文档集</button>
            </section>
        </aside>
        <main class="main">
            <header class="toolbar">
                <div>
                    <h2 id="editorTitle">加载中</h2>
                    <p id="editorHint" class="hint">category 从已有分类中选择；需要新分类时先在左侧创建。</p>
                </div>
                <div class="toolbar-actions">
                    <button id="reloadButton" type="button" class="ghost">重新载入</button>
                    <button id="saveButton" type="button">保存文章</button>
                </div>
            </header>
            <section id="editor" class="editor"></section>
        </main>
    </div>
    <script>
        const state = {
            data: null,
            activeCollection: "",
            activeFile: "",
            activeLocale: "zh",
            draft: null,
            isNew: false,
        };

        const $ = (selector) => document.querySelector(selector);
        const api = async (path, options = {}) => {
            const response = await fetch(path, {
                headers: { "Content-Type": "application/json" },
                ...options,
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "请求失败");
            return data;
        };
        const slugify = (value = "") => String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const toCamelId = (slug = "") => slug.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
        const localeName = (locale) => ({ en: "English", zh: "简体中文", ru: "Русский" }[locale] || locale);
        const setStatus = (message, type = "") => {
            $("#editorHint").textContent = message;
            $("#editorHint").className = "hint " + type;
        };
        const currentCollection = () => state.data.collections.find((item) => item.id === state.activeCollection);
        const currentPage = () => currentCollection()?.pages.find((page) => page.common.file === state.activeFile);
        const clonePage = (page) => JSON.parse(JSON.stringify(page));
        const findCategory = (categoryId) => currentCollection()?.categories.find((category) => category.id === categoryId);
        const categoryTitle = (category, locale) => category?.titleByLocale?.[locale] || category?.id || "";
        const nextCategoryOrder = () => Math.max(0, ...(currentCollection()?.categories || []).map((category) => Number(category.order || 0))) + 1;

        function getCategoryOptions(draft) {
            const categories = [...(currentCollection()?.categories || [])];

            if (draft?.common?.category && !categories.some((category) => category.id === draft.common.category)) {
                categories.push({
                    id: draft.common.category,
                    order: Number(draft.common.categoryOrder || 1),
                    titleByLocale: Object.fromEntries(state.data.supportedLocales.map((locale) => [
                        locale,
                        draft.localized?.[locale]?.categoryTitle || draft.common.category,
                    ])),
                });
            }

            return categories.sort((a, b) => {
                if (a.order !== b.order) return a.order - b.order;
                return a.id.localeCompare(b.id);
            });
        }

        function applyCategoryToDraft(categoryId) {
            if (!state.draft) return;
            const category = findCategory(categoryId);

            if (!category) return;

            state.draft.common.category = category.id;
            state.draft.common.categoryOrder = Number(category.order || 1);

            for (const locale of state.data.supportedLocales) {
                state.draft.localized[locale] = {
                    ...(state.draft.localized[locale] || {}),
                    categoryTitle: categoryTitle(category, locale),
                };
            }
        }

        async function loadState(selectCollection, selectFile) {
            state.data = await api("/api/state");
            state.activeCollection = selectCollection || state.activeCollection || state.data.collections[0]?.id || "";
            const collection = currentCollection() || state.data.collections[0];
            state.activeCollection = collection?.id || "";
            state.activeFile = selectFile || collection?.pages[0]?.common.file || "";
            state.draft = state.activeFile ? clonePage(currentPage()) : null;
            state.isNew = false;
            render();
        }

        function makeNewPage() {
            const collection = currentCollection();
            const nextOrder = Math.max(0, ...collection.pages.map((page) => Number(page.common.order || 0))) + 1;
            const category = collection.categories[0]?.id || "getting-started";
            const categoryOrder = collection.categories[0]?.order || 1;
            const categoryTitleByLocale = collection.categories[0]?.titleByLocale || {};
            state.isNew = true;
            state.activeFile = "";
            state.draft = {
                common: {
                    id: "newPage",
                    slug: "new-page",
                    file: "",
                    category,
                    categoryOrder,
                    order: nextOrder,
                },
                localized: Object.fromEntries(state.data.supportedLocales.map((locale) => [
                    locale,
                    {
                        title: locale === "zh" ? "新文章标题" : "New Page",
                        navTitle: locale === "zh" ? "新文章" : "New Page",
                        description: locale === "zh" ? "补充这篇文章的 SEO 描述。" : "Write a concise SEO description.",
                        categoryTitle: categoryTitleByLocale[locale] || category,
                        body: locale === "zh" ? "# 新文章\\n\\n在这里编写正文。\\n" : "# New Page\\n\\nWrite the content here.\\n",
                    },
                ])),
            };
            render();
        }

        function render() {
            renderCollections();
            renderPages();
            renderEditor();
        }

        function renderCollections() {
            $("#collectionSelect").innerHTML = state.data.collections.map((collection) => {
                const label = collection.meta.zh?.title || collection.meta.en?.title || collection.id;
                return "<option value=\\"" + collection.id + "\\">" + label + "</option>";
            }).join("");
            $("#collectionSelect").value = state.activeCollection;
            $("#newCollectionOrder").value = state.data.collections.length + 1;
            $("#newCategoryOrder").value = nextCategoryOrder();
        }

        function renderPages() {
            const collection = currentCollection();
            const pagesByCategory = collection.pages.reduce((groups, page) => {
                const category = page.common.category || "getting-started";

                return {
                    ...groups,
                    [category]: [...(groups[category] || []), page],
                };
            }, {});
            const categories = getCategoryOptions(state.draft);
            const newCategory = state.isNew ? state.draft?.common.category : "";

            $("#pageList").innerHTML = categories.map((category) => {
                const pages = pagesByCategory[category.id] || [];
                const newPageCount = newCategory === category.id ? 1 : 0;
                const count = pages.length + newPageCount;
                const header = "<div class=\\"page-category-header\\"><span class=\\"page-category-title\\">" + escapeHtml(categoryTitle(category, "zh") || category.id) + "</span><span class=\\"page-category-count\\">" + count + " 篇</span></div>";
                const pageItems = pages.map((page) => {
                    const zh = page.localized.zh || {};
                    const active = page.common.file === state.activeFile && !state.isNew ? " active" : "";

                    return "<button type=\\"button\\" class=\\"page-item" + active + "\\" data-file=\\"" + escapeHtml(page.common.file) + "\\"><span>" + escapeHtml(zh.navTitle || zh.title || page.common.id) + "</span><small>" + escapeHtml(page.common.slug || "首页") + "</small></button>";
                });

                if (newCategory === category.id) {
                    pageItems.push("<button type=\\"button\\" class=\\"page-item active\\" data-new=\\"true\\"><span>" + escapeHtml(state.draft.localized.zh?.navTitle || state.draft.localized.zh?.title || "新文章") + "</span><small>未保存 / " + escapeHtml(state.draft.common.slug || "首页") + "</small></button>");
                }

                if (!pageItems.length) {
                    pageItems.push("<p class=\\"page-category-empty\\">暂无文章</p>");
                }

                return "<section class=\\"page-category\\">" + header + pageItems.join("") + "</section>";
            }).join("");
        }

        function renderEditor() {
            const draft = state.draft;
            if (!draft) {
                $("#editorTitle").textContent = "暂无文章";
                $("#editor").innerHTML = "<section class=\\"panel\\">请先新增文章。</section>";
                return;
            }

            const pageTitle = draft.localized.zh?.title || draft.localized.en?.title || draft.common.id;
            $("#editorTitle").textContent = state.isNew ? "新增文章" : pageTitle;
            $("#editor").innerHTML = [
                renderCommonFields(draft),
                renderLocaleFields(draft),
            ].join("");
        }

        function renderCommonFields(draft) {
            const options = getCategoryOptions(draft).map((category) => {
                const label = (category.titleByLocale.zh || category.titleByLocale.en || category.id) + " (" + category.id + ")";
                return "<option value=\\"" + escapeHtml(category.id) + "\\" " + (category.id === draft.common.category ? "selected" : "") + ">" + escapeHtml(label) + "</option>";
            }).join("");
            return "<section class=\\"panel\\"><strong>公共字段</strong><p class=\\"hint\\">这些字段所有语言共用。slug 控制 URL；category 从当前文档集的分类中选择。</p><div class=\\"grid\\"><label>ID<input id=\\"fieldId\\" value=\\"" + escapeHtml(draft.common.id) + "\\"></label><label>URL slug<input id=\\"fieldSlug\\" value=\\"" + escapeHtml(draft.common.slug) + "\\" placeholder=\\"overview 页面留空\\"></label><label>category<select id=\\"fieldCategory\\">" + options + "</select></label><label>categoryOrder<input id=\\"fieldCategoryOrder\\" type=\\"number\\" value=\\"" + Number(draft.common.categoryOrder || 1) + "\\" readonly></label><label>order<input id=\\"fieldOrder\\" type=\\"number\\" value=\\"" + Number(draft.common.order || 1) + "\\"></label><label>文件名<input value=\\"" + escapeHtml(draft.common.file || "保存时自动生成") + "\\" disabled></label></div></section>";
        }

        function renderLocaleFields(draft) {
            const locale = state.activeLocale;
            const localized = draft.localized[locale] || {};
            const tabs = "<div class=\\"tabs\\">" + state.data.supportedLocales.map((item) => "<button type=\\"button\\" class=\\"tab " + (item === locale ? "active" : "") + "\\" data-locale=\\"" + item + "\\">" + localeName(item) + "</button>").join("") + "</div>";
            return "<section class=\\"panel\\">" + tabs + "<div class=\\"locale-grid\\"><label>SEO 标题 title<input id=\\"fieldTitle\\" value=\\"" + escapeHtml(localized.title || "") + "\\"></label><label>侧边栏标题 navTitle<input id=\\"fieldNavTitle\\" value=\\"" + escapeHtml(localized.navTitle || "") + "\\"></label><label class=\\"wide\\">SEO 描述 description<input id=\\"fieldDescription\\" value=\\"" + escapeHtml(localized.description || "") + "\\"></label><label>类目标题 categoryTitle<input id=\\"fieldCategoryTitle\\" value=\\"" + escapeHtml(localized.categoryTitle || "") + "\\" readonly></label><div class=\\"markdown-workspace\\"><div class=\\"markdown-editor-field\\"><div class=\\"markdown-editor-header\\"><span>Markdown 正文</span><button id=\\"insertImageButton\\" type=\\"button\\" class=\\"ghost compact\\">插入图片</button></div><textarea id=\\"fieldBody\\">" + escapeHtml(localized.body || "") + "</textarea></div><div class=\\"preview-field\\"><span>Markdown 预览</span><div id=\\"markdownPreview\\" class=\\"markdown-preview\\">" + renderMarkdownPreview(localized.body || "") + "</div></div></div></div></section>";
        }

        function escapeHtml(value = "") {
            return String(value)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;");
        }

        function renderInlineMarkdown(value = "") {
            return escapeHtml(value)
                .replace(/!\\[([^\\]]*)\\]\\(([^\\s)]+)\\)/g, "<img src=\\"$2\\" alt=\\"$1\\">")
                .replace(/\\[([^\\]]+)\\]\\(([^\\s)]+)\\)/g, "<a href=\\"$2\\" target=\\"_blank\\" rel=\\"noreferrer\\">$1</a>")
                .replace(/\\*\\*([^*]+)\\*\\*/g, "<strong>$1</strong>")
                .replace(/\`([^\`]+)\`/g, "<code>$1</code>")
                .replace(/\\*([^*]+)\\*/g, "<em>$1</em>");
        }

        function splitTableRow(row = "") {
            return row
                .trim()
                .replace(/^\\|/, "")
                .replace(/\\|$/, "")
                .split("|")
                .map((cell) => cell.trim());
        }

        function isTableSeparator(row = "") {
            const cells = splitTableRow(row);

            return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
        }

        function renderMarkdownTable(headers, rows) {
            const head = "<thead><tr>" + headers.map((cell) => "<th>" + renderInlineMarkdown(cell) + "</th>").join("") + "</tr></thead>";
            const body = rows.length
                ? "<tbody>" + rows.map((row) => "<tr>" + headers.map((_, index) => "<td>" + renderInlineMarkdown(row[index] || "") + "</td>").join("") + "</tr>").join("") + "</tbody>"
                : "";

            return "<table>" + head + body + "</table>";
        }

        function renderMarkdownPreview(source = "") {
            const lines = String(source).replace(/\\r\\n/g, "\\n").split("\\n");
            const html = [];
            let paragraph = [];
            let listType = "";
            let codeLines = [];
            let inCodeBlock = false;

            const closeParagraph = () => {
                if (!paragraph.length) return;
                html.push("<p>" + renderInlineMarkdown(paragraph.join(" ")) + "</p>");
                paragraph = [];
            };
            const closeList = () => {
                if (!listType) return;
                html.push("</" + listType + ">");
                listType = "";
            };
            const ensureList = (type) => {
                closeParagraph();
                if (listType === type) return;
                closeList();
                listType = type;
                html.push("<" + listType + ">");
            };

            for (let index = 0; index < lines.length; index += 1) {
                const line = lines[index];
                const trimmed = line.trim();

                if (trimmed.startsWith("\`\`\`")) {
                    if (inCodeBlock) {
                        html.push("<pre><code>" + escapeHtml(codeLines.join("\\n")) + "</code></pre>");
                        codeLines = [];
                        inCodeBlock = false;
                        continue;
                    }

                    closeParagraph();
                    closeList();
                    inCodeBlock = true;
                    continue;
                }

                if (inCodeBlock) {
                    codeLines.push(line);
                    continue;
                }

                if (!trimmed) {
                    closeParagraph();
                    closeList();
                    continue;
                }

                if (trimmed.includes("|") && isTableSeparator(lines[index + 1] || "")) {
                    closeParagraph();
                    closeList();

                    const headers = splitTableRow(trimmed);
                    const rows = [];

                    index += 2;
                    while (index < lines.length) {
                        const row = lines[index].trim();

                        if (!row || !row.includes("|")) break;

                        rows.push(splitTableRow(row));
                        index += 1;
                    }
                    index -= 1;

                    html.push(renderMarkdownTable(headers, rows));
                    continue;
                }

                const heading = trimmed.match(/^(#{1,3})\\s+(.+)$/);
                if (heading) {
                    closeParagraph();
                    closeList();
                    const level = heading[1].length;
                    html.push("<h" + level + ">" + renderInlineMarkdown(heading[2]) + "</h" + level + ">");
                    continue;
                }

                const quote = trimmed.match(/^>\\s*(.+)$/);
                if (quote) {
                    closeParagraph();
                    closeList();
                    html.push("<blockquote>" + renderInlineMarkdown(quote[1]) + "</blockquote>");
                    continue;
                }

                const unordered = trimmed.match(/^[-*]\\s+(.+)$/);
                if (unordered) {
                    ensureList("ul");
                    html.push("<li>" + renderInlineMarkdown(unordered[1]) + "</li>");
                    continue;
                }

                const ordered = trimmed.match(/^\\d+\\.\\s+(.+)$/);
                if (ordered) {
                    ensureList("ol");
                    html.push("<li>" + renderInlineMarkdown(ordered[1]) + "</li>");
                    continue;
                }

                closeList();
                paragraph.push(trimmed);
            }

            if (inCodeBlock) {
                html.push("<pre><code>" + escapeHtml(codeLines.join("\\n")) + "</code></pre>");
            }
            closeParagraph();
            closeList();

            return html.join("") || "<p class=\\"page-category-empty\\">暂无预览内容</p>";
        }

        function updateMarkdownPreview() {
            const preview = $("#markdownPreview");
            if (!preview) return;

            preview.innerHTML = renderMarkdownPreview($("#fieldBody")?.value || "");
        }

        function insertAtCursor(textarea, text) {
            const start = textarea.selectionStart ?? textarea.value.length;
            const end = textarea.selectionEnd ?? textarea.value.length;
            const before = textarea.value.slice(0, start);
            const after = textarea.value.slice(end);
            const prefix = before && !before.endsWith("\\n") ? "\\n\\n" : "";
            const suffix = after && !after.startsWith("\\n") ? "\\n\\n" : "";
            const nextValue = before + prefix + text + suffix + after;
            const cursor = (before + prefix + text).length;

            textarea.value = nextValue;
            textarea.focus();
            textarea.setSelectionRange(cursor, cursor);
            textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }

        function insertImageMarkdown() {
            const textarea = $("#fieldBody");
            if (!textarea) return;

            const url = window.prompt("图片地址 URL 或站内路径，例如 /images/docs/example.png");
            if (!url) return;

            const alt = window.prompt("图片描述", "图片") || "图片";
            insertAtCursor(textarea, "![" + alt.trim() + "](" + url.trim() + ")");
        }

        function syncDraftFromEditor() {
            if (!state.draft) return;
            const locale = state.activeLocale;
            state.draft.common.id = $("#fieldId")?.value.trim() || "";
            state.draft.common.slug = slugify($("#fieldSlug")?.value || "");
            state.draft.common.category = $("#fieldCategory")?.value || "getting-started";
            state.draft.common.categoryOrder = Number($("#fieldCategoryOrder")?.value || 1);
            state.draft.common.order = Number($("#fieldOrder")?.value || 1);
            state.draft.localized[locale] = {
                title: $("#fieldTitle")?.value.trim() || "",
                navTitle: $("#fieldNavTitle")?.value.trim() || "",
                description: $("#fieldDescription")?.value.trim() || "",
                categoryTitle: $("#fieldCategoryTitle")?.value.trim() || "",
                body: $("#fieldBody")?.value || "",
            };
            applyCategoryToDraft(state.draft.common.category);
        }

        async function savePage() {
            syncDraftFromEditor();
            $("#saveButton").disabled = true;
            setStatus("正在保存并重新生成元数据...");
            try {
                const result = await api("/api/page", {
                    method: "POST",
                    body: JSON.stringify({
                        collection: state.activeCollection,
                        originalFile: state.isNew ? "" : state.draft.common.file,
                        common: state.draft.common,
                        localized: state.draft.localized,
                    }),
                });
                await loadState(state.activeCollection, result.file);
                setStatus("保存成功，元数据已生成。", "success");
            } catch (error) {
                setStatus(error.message, "error");
            } finally {
                $("#saveButton").disabled = false;
            }
        }

        async function createCollection() {
            const id = slugify($("#newCollectionId").value || $("#newCollectionSlug").value);
            const slug = slugify($("#newCollectionSlug").value || id);
            $("#createCollectionButton").disabled = true;
            setStatus("正在创建文档集...");
            try {
                const result = await api("/api/collection", {
                    method: "POST",
                    body: JSON.stringify({
                        id,
                        slug,
                        order: Number($("#newCollectionOrder").value || state.data.collections.length + 1),
                        meta: {
                            zh: {
                                title: $("#newCollectionZhTitle").value.trim(),
                                description: $("#newCollectionZhDescription").value.trim(),
                            },
                            en: {
                                title: $("#newCollectionEnTitle").value.trim(),
                                description: $("#newCollectionEnDescription").value.trim(),
                            },
                            ru: {
                                title: $("#newCollectionRuTitle").value.trim(),
                                description: $("#newCollectionRuDescription").value.trim(),
                            },
                        },
                    }),
                });
                $("#collectionForm").classList.remove("open");
                await loadState(result.collection, result.file);
                setStatus("文档集创建成功。", "success");
            } catch (error) {
                setStatus(error.message, "error");
            } finally {
                $("#createCollectionButton").disabled = false;
            }
        }

        async function createCategory() {
            syncDraftFromEditor();
            const preservedDraft = state.draft ? clonePage(state.draft) : null;
            const wasNew = state.isNew;
            const activeFile = state.activeFile;
            const id = slugify($("#newCategoryId").value || $("#newCategoryEnTitle").value || $("#newCategoryZhTitle").value) || "new-category";
            $("#createCategoryButton").disabled = true;
            setStatus("正在创建分类...");
            try {
                const result = await api("/api/category", {
                    method: "POST",
                    body: JSON.stringify({
                        collection: state.activeCollection,
                        id,
                        order: Number($("#newCategoryOrder").value || nextCategoryOrder()),
                        meta: {
                            zh: {
                                title: $("#newCategoryZhTitle").value.trim(),
                            },
                            en: {
                                title: $("#newCategoryEnTitle").value.trim(),
                            },
                            ru: {
                                title: $("#newCategoryRuTitle").value.trim(),
                            },
                        },
                    }),
                });
                await loadState(state.activeCollection, activeFile);
                if (preservedDraft) {
                    state.draft = preservedDraft;
                    state.isNew = wasNew;
                    state.activeFile = activeFile;
                }
                $("#categoryForm").classList.remove("open");
                $("#newCategoryId").value = "";
                $("#newCategoryZhTitle").value = "";
                $("#newCategoryEnTitle").value = "";
                $("#newCategoryRuTitle").value = "";
                applyCategoryToDraft(result.category.id);
                render();
                setStatus("分类创建成功，已选中该分类。", "success");
            } catch (error) {
                setStatus(error.message, "error");
            } finally {
                $("#createCategoryButton").disabled = false;
            }
        }

        document.addEventListener("input", (event) => {
            if (event.target.id === "fieldSlug" && state.isNew) {
                $("#fieldId").value = toCamelId(slugify(event.target.value));
            }
            if (event.target.id === "newCategoryEnTitle" && !$("#newCategoryId").value) {
                $("#newCategoryId").value = slugify(event.target.value);
            }
            if (event.target.id === "newCollectionZhTitle" && !$("#newCollectionId").value) {
                const fallback = slugify(event.target.value) || "new-doc";
                $("#newCollectionId").value = fallback;
                $("#newCollectionSlug").value = fallback;
            }
            if (event.target.closest("#editor")) syncDraftFromEditor();
            if (event.target.id === "fieldBody") updateMarkdownPreview();
        });
        document.addEventListener("change", (event) => {
            if (event.target.id === "fieldCategory") {
                syncDraftFromEditor();
                applyCategoryToDraft(event.target.value);
                renderEditor();
            }
        });
        document.addEventListener("click", async (event) => {
            const imageButton = event.target.closest("#insertImageButton");
            const pageButton = event.target.closest(".page-item");
            const localeButton = event.target.closest(".tab");
            if (imageButton) {
                event.preventDefault();
                syncDraftFromEditor();
                insertImageMarkdown();
                return;
            }
            if (pageButton) {
                syncDraftFromEditor();
                if (pageButton.dataset.new === "true") return;
                state.isNew = false;
                state.activeFile = pageButton.dataset.file;
                state.draft = clonePage(currentPage());
                render();
            }
            if (localeButton) {
                syncDraftFromEditor();
                state.activeLocale = localeButton.dataset.locale;
                renderEditor();
            }
        });
        $("#collectionSelect").addEventListener("change", (event) => {
            state.activeCollection = event.target.value;
            state.activeFile = currentCollection().pages[0]?.common.file || "";
            state.draft = state.activeFile ? clonePage(currentPage()) : null;
            state.isNew = false;
            render();
        });
        $("#newPageButton").addEventListener("click", makeNewPage);
        $("#saveButton").addEventListener("click", savePage);
        $("#reloadButton").addEventListener("click", () => loadState(state.activeCollection, state.activeFile));
        $("#toggleCategoryButton").addEventListener("click", () => $("#categoryForm").classList.toggle("open"));
        $("#toggleCollectionButton").addEventListener("click", () => $("#collectionForm").classList.toggle("open"));
        $("#createCategoryButton").addEventListener("click", createCategory);
        $("#createCollectionButton").addEventListener("click", createCollection);
        loadState().catch((error) => setStatus(error.message, "error"));
    </script>
</body>
</html>`;

server.listen(getPort(), "127.0.0.1", () => {
    const address = server.address();
    const port = typeof address === "object" ? address.port : getPort();

    console.log(`Docs manager running at http://localhost:${port}`);
});
