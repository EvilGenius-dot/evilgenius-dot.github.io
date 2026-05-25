import MarkdownIt from "markdown-it";

const slugify = (value) =>
    value
        .trim()
        .toLowerCase()
        .replace(/[`~!@#$%^&*()+=|{}[\]:;"'<>,.?/\\]/g, "")
        .replace(/\s+/g, "-");

const markdown = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
});

const defaultHeadingOpen =
    markdown.renderer.rules.heading_open ||
    ((tokens, idx, options, env, self) =>
        self.renderToken(tokens, idx, options));

markdown.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const nextToken = tokens[idx + 1];
    const title = nextToken?.content || "";
    const id = slugify(title);

    if (id) {
        tokens[idx].attrSet("id", id);
    }

    return defaultHeadingOpen(tokens, idx, options, env, self);
};

export const renderMarkdown = (source = "") => markdown.render(source);

export const extractHeadings = (source = "") =>
    source
        .split("\n")
        .map((line) => {
            const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());

            if (!match) {
                return null;
            }

            return {
                id: slugify(match[2]),
                level: match[1].length,
                title: match[2],
            };
        })
        .filter(Boolean);
