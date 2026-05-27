import { cp, readdir, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const frontendDirectory = resolve(scriptDirectory, "..");
const distDirectory = join(frontendDirectory, "dist");
const publishDirectory = resolve(frontendDirectory, "..");
const ignoredEntries = new Set([".DS_Store", ".vite"]);
const protectedEntries = new Set([".git", "frontend"]);

const isInside = (parent, child) => {
    const path = relative(parent, child);

    return path && !path.startsWith("..") && !path.startsWith("/");
};

const assertSafeTarget = async () => {
    const distStats = await stat(distDirectory);

    if (!distStats.isDirectory()) {
        throw new Error(`Build output is not a directory: ${distDirectory}`);
    }

    await stat(join(distDirectory, "index.html"));

    if (publishDirectory === frontendDirectory) {
        throw new Error("Publish directory must not be the frontend directory.");
    }

    if (isInside(distDirectory, publishDirectory)) {
        throw new Error("Publish directory must not be inside dist.");
    }
};

await assertSafeTarget();

const distEntries = await readdir(distDirectory, { withFileTypes: true });
const publishEntries = distEntries.filter(
    (entry) =>
        !ignoredEntries.has(entry.name) && !protectedEntries.has(entry.name),
);

for (const entry of publishEntries) {
    const from = join(distDirectory, entry.name);
    const to = join(publishDirectory, entry.name);

    await rm(to, { force: true, recursive: true });
    await cp(from, to, { recursive: true });
}

await writeFile(
    join(publishDirectory, ".nojekyll"),
    "Disable GitHub Pages Jekyll processing for Vite assets.\n",
);

console.log(
    `Published ${publishEntries.length} build entries from frontend/dist to ${publishDirectory}`,
);
