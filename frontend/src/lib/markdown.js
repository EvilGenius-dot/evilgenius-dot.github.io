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

const videoSourcePattern = /\.(mp4|webm|ogg)(?:[?#].*)?$/i;

const defaultHeadingOpen =
    markdown.renderer.rules.heading_open ||
    ((tokens, idx, options, env, self) =>
        self.renderToken(tokens, idx, options));

const defaultImage =
    markdown.renderer.rules.image ||
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

markdown.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src") || "";

    if (!videoSourcePattern.test(src)) {
        return defaultImage(tokens, idx, options, env, self);
    }

    const label =
        self.renderInlineAsText?.(token.children || [], options, env) ||
        token.content;
    const altIndex = token.attrIndex("alt");

    if (altIndex >= 0) {
        token.attrs.splice(altIndex, 1);
    }

    token.attrSet("aria-label", label);
    token.attrSet("autoplay", "");
    token.attrSet("controls", "");
    token.attrSet("loop", "");
    token.attrSet("muted", "");
    token.attrSet("playsinline", "");
    token.attrSet("preload", "metadata");

    return `<video${self.renderAttrs(token)}></video>`;
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
