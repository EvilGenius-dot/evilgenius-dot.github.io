import { n as _plugin_vue_export_helper_default } from "../main.mjs";
import { computed, createVNode, mergeProps, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { ArrowUpRight, Github, MessageCircle, Send } from "lucide-vue-next";
//#region src/views/AboutView.vue
var _sfc_main = {
	__name: "AboutView",
	__ssrInlineRender: true,
	setup(__props) {
		const { t } = useI18n();
		const splitHighlightedText = (text, highlightText) => {
			const startIndex = highlightText ? text.indexOf(highlightText) : -1;
			if (startIndex === -1) return [{
				key: "text",
				text,
				highlighted: false
			}];
			return [
				{
					key: "before",
					text: text.slice(0, startIndex),
					highlighted: false
				},
				{
					key: "highlight",
					text: text.slice(startIndex, startIndex + highlightText.length),
					highlighted: true
				},
				{
					key: "after",
					text: text.slice(startIndex + highlightText.length),
					highlighted: false
				}
			].filter((part) => part.text.length > 0);
		};
		const rateCards = computed(() => [{
			label: t("about.rates.proxy.label"),
			title: t("about.rates.proxy.title"),
			value: t("about.rates.proxy.value"),
			textParts: splitHighlightedText(t("about.rates.proxy.text"), t("about.rates.proxy.textHighlight")),
			highlight: true
		}, {
			label: t("about.rates.poolNode.label"),
			title: t("about.rates.poolNode.title"),
			value: t("about.rates.poolNode.value"),
			textParts: splitHighlightedText(t("about.rates.poolNode.text")),
			highlight: false
		}]);
		const legalItems = computed(() => Array.from({ length: 11 }, (_, index) => {
			const itemIndex = index + 1;
			return {
				index: String(itemIndex).padStart(2, "0"),
				text: t(`about.legal.items.${itemIndex}`)
			};
		}));
		const communityLinks = computed(() => [
			{
				label: t("footer.github"),
				href: "https://github.com/evilgenius-dot",
				icon: Github
			},
			{
				label: t("footer.telegram"),
				href: "https://t.me/rustkt",
				icon: Send
			},
			{
				label: t("footer.telegramEnglish"),
				href: "https://t.me/rustkt/55515",
				icon: Send
			},
			{
				label: t("footer.telegramRussian"),
				href: "https://t.me/rustkt/55517",
				icon: Send
			},
			{
				label: t("footer.discord"),
				href: "https://discord.com/invite/xpjRnv8wpX",
				icon: MessageCircle
			}
		]);
		const providerDefinitions = [
			{
				key: "vultr",
				logo: "/image/partners/vultr.svg",
				href: "https://www.vultr.com/"
			},
			{
				key: "aws",
				logo: "/image/partners/aws.svg",
				href: "https://aws.amazon.com/"
			},
			{
				key: "azure",
				logo: "/image/partners/azure.svg",
				href: "https://azure.microsoft.com/"
			},
			{
				key: "aliyun",
				logo: "/image/partners/aliyun.svg",
				href: "https://www.alibabacloud.com/"
			},
			{
				key: "cloudflare",
				logo: "/image/partners/cloudflare.svg",
				href: "https://www.cloudflare.com/"
			},
			{
				key: "github",
				logo: "/image/partners/github.svg",
				href: "https://github.com/EvilGenius-dot"
			}
		];
		const providers = computed(() => providerDefinitions.map((provider) => ({
			...provider,
			label: t(`download.partners.items.${provider.key}`)
		})));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({
				id: "main-content",
				class: "about-page"
			}, _attrs))} data-v-0d81e36d><section class="hero-section" aria-labelledby="about-title" data-v-0d81e36d><div class="hero-copy" data-v-0d81e36d><p class="eyebrow" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.eyebrow"))}</p><h1 id="about-title" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.title"))}</h1><p class="hero-description" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.description"))}</p></div><div class="rate-panel" aria-labelledby="rates-title" data-v-0d81e36d><p class="eyebrow" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.rates.eyebrow"))}</p><h2 id="rates-title" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.rates.title"))}</h2><div class="rate-grid" data-v-0d81e36d><!--[-->`);
			ssrRenderList(rateCards.value, (rate) => {
				_push(`<article class="${ssrRenderClass({ "highlighted-rate": rate.highlight })}" data-v-0d81e36d><span class="rate-label" data-v-0d81e36d>${ssrInterpolate(rate.label)}</span><strong data-v-0d81e36d>${ssrInterpolate(rate.value)}</strong><p data-v-0d81e36d><!--[-->`);
				ssrRenderList(rate.textParts, (part) => {
					_push(`<span class="${ssrRenderClass({ "rate-text-highlight": part.highlighted })}" data-v-0d81e36d>${ssrInterpolate(part.text)}</span>`);
				});
				_push(`<!--]--></p></article>`);
			});
			_push(`<!--]--></div></div></section><section class="content-section" aria-labelledby="legal-title" data-v-0d81e36d><div class="section-heading" data-v-0d81e36d><p class="eyebrow" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.legal.eyebrow"))}</p><h2 id="legal-title" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.legal.title"))}</h2><p data-v-0d81e36d>${ssrInterpolate(unref(t)("about.legal.description"))}</p></div><div class="legal-list" data-v-0d81e36d><!--[-->`);
			ssrRenderList(legalItems.value, (item) => {
				_push(`<article data-v-0d81e36d><span data-v-0d81e36d>${ssrInterpolate(item.index)}</span><p data-v-0d81e36d>${ssrInterpolate(item.text)}</p></article>`);
			});
			_push(`<!--]--></div></section><section class="content-section split-section" data-v-0d81e36d><div class="community-panel" aria-labelledby="community-title" data-v-0d81e36d><div class="section-heading" data-v-0d81e36d><p class="eyebrow" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.community.eyebrow"))}</p><h2 id="community-title" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.community.title"))}</h2><p data-v-0d81e36d>${ssrInterpolate(unref(t)("about.community.description"))}</p></div><div class="community-grid" data-v-0d81e36d><!--[-->`);
			ssrRenderList(communityLinks.value, (item) => {
				_push(`<a${ssrRenderAttr("href", item.href)} class="link-card" target="_blank" rel="noopener noreferrer" data-v-0d81e36d>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
					class: "link-icon",
					"aria-hidden": "true"
				}, null), _parent);
				_push(`<span data-v-0d81e36d>${ssrInterpolate(item.label)}</span>`);
				_push(ssrRenderComponent(unref(ArrowUpRight), {
					class: "arrow-icon",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`</a>`);
			});
			_push(`<!--]--></div></div><div class="providers-panel" aria-labelledby="providers-title" data-v-0d81e36d><div class="section-heading" data-v-0d81e36d><p class="eyebrow" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.providers.eyebrow"))}</p><h2 id="providers-title" data-v-0d81e36d>${ssrInterpolate(unref(t)("about.providers.title"))}</h2><p data-v-0d81e36d>${ssrInterpolate(unref(t)("about.providers.description"))}</p></div><div class="provider-grid"${ssrRenderAttr("aria-label", unref(t)("about.providers.ariaLabel"))} data-v-0d81e36d><!--[-->`);
			ssrRenderList(providers.value, (provider) => {
				_push(`<a${ssrRenderAttr("href", provider.href)} class="provider-card" target="_blank" rel="noopener noreferrer" data-v-0d81e36d><img${ssrRenderAttr("src", provider.logo)}${ssrRenderAttr("alt", provider.label)} loading="lazy" decoding="async" data-v-0d81e36d><span data-v-0d81e36d>${ssrInterpolate(provider.label)}</span></a>`);
			});
			_push(`<!--]--></div></div></section></main>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AboutView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AboutView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-0d81e36d"]]);
//#endregion
export { AboutView_default as default };
