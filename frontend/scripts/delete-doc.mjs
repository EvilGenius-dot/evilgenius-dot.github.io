import { existsSync } from "node:fs";
import { unlink } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join } from "node:path";
import { DEFAULT_DOC_COLLECTION, SUPPORTED_LOCALES } from "./docs-config.mjs";
import {
    docsRoot,
    listDefaultDocs,
    resolveDocCollection,
} from "./docs-utils.mjs";

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const collectionIndex = args.indexOf("--collection");
const rawCollection =
    collectionIndex === -1
        ? DEFAULT_DOC_COLLECTION
        : args[collectionIndex + 1] || DEFAULT_DOC_COLLECTION;
const rawTarget = args.find(
    (arg, index) =>
        arg !== "--dry-run" &&
        arg !== "--collection" &&
        index !== collectionIndex + 1,
);

if (!rawTarget) {
    console.error('Usage: npm run docs:delete -- "my-topic"');
    console.error(
        'Preview only: npm run docs:delete -- "my-topic" --collection rms --dry-run',
    );
    process.exit(1);
}

const collection = resolveDocCollection(rawCollection);
const slugifiedTarget = rawTarget
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const docs = await listDefaultDocs(collection.id);
const targetDoc = docs.find((doc) => {
    const fileWithoutExtension = doc.file.replace(/\.md$/, "");
    const fileSlug = fileWithoutExtension.replace(/^\d+-/, "");

    return (
        [doc.id, doc.slug, doc.file, fileWithoutExtension, fileSlug].includes(
            rawTarget,
        ) || doc.slug === slugifiedTarget
    );
});

if (!targetDoc) {
    console.error(`Could not find a document matching "${rawTarget}".`);
    console.error(
        `Available documents: ${docs
            .map((doc) => `${doc.id} (${doc.slug || doc.file})`)
            .join(", ")}`,
    );
    process.exit(1);
}

const filePaths = SUPPORTED_LOCALES.map((locale) =>
    join(docsRoot, locale, collection.slug, "guide", targetDoc.file),
);
const missingFiles = filePaths.filter((filePath) => !existsSync(filePath));

if (missingFiles.length > 0) {
    console.error("Delete aborted because some localized files are missing:");

    for (const filePath of missingFiles) {
        console.error(`- ${filePath}`);
    }

    process.exit(1);
}

console.log(
    `${isDryRun ? "Would delete" : "Deleting"} ${collection.id} document "${targetDoc.id}" (${targetDoc.slug || targetDoc.file}):`,
);

for (const filePath of filePaths) {
    console.log(`- ${filePath}`);
}

if (isDryRun) {
    console.log("Dry run complete. No files were deleted.");
    process.exit(0);
}

for (const filePath of filePaths) {
    await unlink(filePath);
}

const generate = spawn(process.execPath, ["scripts/generate-docs.mjs"], {
    stdio: "inherit",
});

const exitCode = await new Promise((resolve) => {
    generate.on("close", resolve);
});

if (exitCode !== 0) {
    console.error(
        "Deleted markdown files, but docs metadata generation failed.",
    );
    process.exit(exitCode);
}

console.log(`Deleted ${targetDoc.file} for ${SUPPORTED_LOCALES.join(", ")}.`);
