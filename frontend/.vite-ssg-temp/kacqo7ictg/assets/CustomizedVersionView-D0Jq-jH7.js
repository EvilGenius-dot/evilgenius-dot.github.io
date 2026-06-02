import { n as _plugin_vue_export_helper_default } from "../main.mjs";
import { computed, createVNode, markRaw, mergeProps, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { Check, CloudCog, Gauge, LayoutDashboard, Palette, RadioTower, SlidersHorizontal, X } from "lucide-vue-next";
//#region ../../../../../image/clientreview.png
var clientreview_default = "/image/clientreview.png";
//#endregion
//#region src/views/CustomizedVersionView.vue
var contactHref = "https://t.me/rustkt";
var _sfc_main = {
	__name: "CustomizedVersionView",
	__ssrInlineRender: true,
	setup(__props) {
		const { t, te } = useI18n();
		const metrics = computed(() => [
			{
				label: t("customized.hero.metrics.editions.label"),
				value: t("customized.hero.metrics.editions.value")
			},
			{
				label: t("customized.hero.metrics.fee.label"),
				value: t("customized.hero.metrics.fee.value")
			},
			{
				label: t("customized.hero.metrics.hosting.label"),
				value: t("customized.hero.metrics.hosting.value")
			}
		]);
		const points = computed(() => [
			{
				icon: markRaw(LayoutDashboard),
				title: t("customized.points.dashboard.title"),
				text: t("customized.points.dashboard.text")
			},
			{
				icon: markRaw(SlidersHorizontal),
				title: t("customized.points.fee.title"),
				text: t("customized.points.fee.text")
			},
			{
				icon: markRaw(Palette),
				title: t("customized.points.branding.title"),
				text: t("customized.points.branding.text")
			},
			{
				icon: markRaw(CloudCog),
				title: t("customized.points.hosting.title"),
				text: t("customized.points.hosting.text")
			},
			{
				icon: markRaw(Gauge),
				title: t("customized.points.client.title"),
				text: t("customized.points.client.text")
			},
			{
				icon: markRaw(RadioTower),
				title: t("customized.points.rms.title"),
				text: t("customized.points.rms.text")
			}
		]);
		const featureKeys = [
			"admin",
			"customManagement",
			"name",
			"footer",
			"logo",
			"noMinerLimit",
			"officialClientStyle",
			"hosting",
			"client",
			"rms"
		];
		const tierDefinitions = [
			{
				id: "free",
				featured: false,
				included: [
					"admin",
					"name",
					"footer",
					"logo"
				]
			},
			{
				id: "basic",
				featured: true,
				included: [
					"admin",
					"customManagement",
					"name",
					"footer",
					"logo",
					"noMinerLimit",
					"officialClientStyle",
					"hosting"
				]
			},
			{
				id: "advanced",
				featured: false,
				included: [
					"admin",
					"customManagement",
					"name",
					"footer",
					"logo",
					"noMinerLimit",
					"officialClientStyle",
					"hosting",
					"client",
					"rms"
				]
			}
		];
		const getFeatureText = (featureKey, tierId) => {
			const tierTextKey = `customized.features.${featureKey}.tiers.${tierId}`;
			return te(tierTextKey) ? t(tierTextKey) : t(`customized.features.${featureKey}.text`);
		};
		const getPlanFeatures = (tier) => {
			const features = featureKeys.map((key) => ({
				title: t(`customized.features.${key}.title`),
				text: getFeatureText(key, tier.id),
				included: tier.included.includes(key)
			}));
			return [...features.filter((feature) => feature.included), ...features.filter((feature) => !feature.included)];
		};
		const plans = computed(() => tierDefinitions.map((tier) => ({
			id: tier.id,
			featured: tier.featured,
			name: t(`customized.plans.tiers.${tier.id}.name`),
			badge: t(`customized.plans.tiers.${tier.id}.badge`),
			description: t(`customized.plans.tiers.${tier.id}.description`),
			price: t(`customized.plans.tiers.${tier.id}.price`),
			period: t(`customized.plans.tiers.${tier.id}.period`),
			cta: t(`customized.plans.tiers.${tier.id}.cta`),
			features: getPlanFeatures(tier)
		})));
		const deliverySteps = computed(() => [
			{
				index: "01",
				title: t("customized.delivery.steps.scope.title"),
				text: t("customized.delivery.steps.scope.text")
			},
			{
				index: "02",
				title: t("customized.delivery.steps.package.title"),
				text: t("customized.delivery.steps.package.text")
			},
			{
				index: "03",
				title: t("customized.delivery.steps.operate.title"),
				text: t("customized.delivery.steps.operate.text")
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({
				id: "main-content",
				class: "customized-page"
			}, _attrs))} data-v-ab671a2d><section class="hero-section" aria-labelledby="customized-title" data-v-ab671a2d><div class="hero-copy" data-v-ab671a2d><p class="eyebrow" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.eyebrow"))}</p><h1 id="customized-title" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.title"))}</h1><p class="hero-description" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.description"))}</p><div class="hero-actions" data-v-ab671a2d><a${ssrRenderAttr("href", contactHref)} class="primary-action" target="_blank" rel="noopener noreferrer" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.hero.primaryCta"))}</a><a href="#customized-plans" class="secondary-action" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.hero.secondaryCta"))}</a></div><dl class="hero-metrics" data-v-ab671a2d><!--[-->`);
			ssrRenderList(metrics.value, (metric) => {
				_push(`<div data-v-ab671a2d><dt data-v-ab671a2d>${ssrInterpolate(metric.label)}</dt><dd data-v-ab671a2d>${ssrInterpolate(metric.value)}</dd></div>`);
			});
			_push(`<!--]--></dl></div><figure class="dashboard-preview"${ssrRenderAttr("aria-label", unref(t)("customized.hero.previewLabel"))} data-v-ab671a2d><div class="preview-window" data-v-ab671a2d><img${ssrRenderAttr("src", clientreview_default)}${ssrRenderAttr("alt", unref(t)("customized.hero.previewAlt"))} class="preview-image" loading="eager" decoding="async" data-v-ab671a2d></div><figcaption class="preview-caption" data-v-ab671a2d><span data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.hero.previewBadge"))}</span><p data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.hero.previewCaption"))}</p></figcaption></figure></section><section class="content-section" aria-labelledby="capabilities-title" data-v-ab671a2d><div class="section-heading" data-v-ab671a2d><p class="eyebrow" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.pointsEyebrow"))}</p><h2 id="capabilities-title" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.pointsTitle"))}</h2><p data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.pointsDescription"))}</p></div><div class="capability-grid" data-v-ab671a2d><!--[-->`);
			ssrRenderList(points.value, (point) => {
				_push(`<article class="capability-card" data-v-ab671a2d>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(point.icon), {
					class: "capability-icon",
					"aria-hidden": "true"
				}, null), _parent);
				_push(`<h3 data-v-ab671a2d>${ssrInterpolate(point.title)}</h3><p data-v-ab671a2d>${ssrInterpolate(point.text)}</p></article>`);
			});
			_push(`<!--]--></div></section><section id="customized-plans" class="plans-section" aria-labelledby="plans-title" data-v-ab671a2d><div class="section-heading centered" data-v-ab671a2d><p class="eyebrow" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.plans.eyebrow"))}</p><h2 id="plans-title" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.plans.title"))}</h2><p data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.plans.description"))}</p></div><div class="plan-grid" data-v-ab671a2d><!--[-->`);
			ssrRenderList(plans.value, (plan) => {
				_push(`<article class="${ssrRenderClass([{ "is-featured": plan.featured }, "plan-card"])}" data-v-ab671a2d><div class="plan-heading" data-v-ab671a2d><span class="plan-badge" data-v-ab671a2d>${ssrInterpolate(plan.badge)}</span><h3 data-v-ab671a2d>${ssrInterpolate(plan.name)}</h3><p data-v-ab671a2d>${ssrInterpolate(plan.description)}</p></div><div class="plan-price" data-v-ab671a2d><strong data-v-ab671a2d>${ssrInterpolate(plan.price)}</strong><span data-v-ab671a2d>${ssrInterpolate(plan.period)}</span></div><a${ssrRenderAttr("href", contactHref)} class="plan-cta" target="_blank" rel="noopener noreferrer" data-v-ab671a2d>${ssrInterpolate(plan.cta)}</a><ul class="plan-features" data-v-ab671a2d><!--[-->`);
				ssrRenderList(plan.features, (feature) => {
					_push(`<li class="${ssrRenderClass({ "is-muted": !feature.included })}" data-v-ab671a2d>`);
					if (feature.included) _push(ssrRenderComponent(unref(Check), {
						class: "feature-status is-included",
						"aria-hidden": "true"
					}, null, _parent));
					else _push(ssrRenderComponent(unref(X), {
						class: "feature-status is-excluded",
						"aria-hidden": "true"
					}, null, _parent));
					_push(`<span class="sr-only" data-v-ab671a2d>${ssrInterpolate(feature.included ? unref(t)("customized.plans.included") : unref(t)("customized.plans.excluded"))}</span><span data-v-ab671a2d><strong data-v-ab671a2d>${ssrInterpolate(feature.title)}</strong><small data-v-ab671a2d>${ssrInterpolate(feature.text)}</small></span></li>`);
				});
				_push(`<!--]--></ul></article>`);
			});
			_push(`<!--]--></div></section><section class="delivery-section" aria-labelledby="delivery-title" data-v-ab671a2d><div class="delivery-panel" data-v-ab671a2d><div class="delivery-copy" data-v-ab671a2d><p class="eyebrow" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.delivery.eyebrow"))}</p><h2 id="delivery-title" data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.delivery.title"))}</h2><p data-v-ab671a2d>${ssrInterpolate(unref(t)("customized.delivery.description"))}</p></div><div class="delivery-list" data-v-ab671a2d><!--[-->`);
			ssrRenderList(deliverySteps.value, (step) => {
				_push(`<article data-v-ab671a2d><span data-v-ab671a2d>${ssrInterpolate(step.index)}</span><div data-v-ab671a2d><h3 data-v-ab671a2d>${ssrInterpolate(step.title)}</h3><p data-v-ab671a2d>${ssrInterpolate(step.text)}</p></div></article>`);
			});
			_push(`<!--]--></div></div></section></main>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/CustomizedVersionView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CustomizedVersionView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-ab671a2d"]]);
//#endregion
export { CustomizedVersionView_default as default };
