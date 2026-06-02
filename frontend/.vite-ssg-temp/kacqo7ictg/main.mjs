import { walkResolver } from "unhead/utils";
import { Fragment, computed, createBlock, createCommentVNode, createSSRApp, createTextVNode, createVNode, defineComponent, getCurrentInstance, hasInjectionContext, inject, isRef, mergeProps, nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, openBlock, ref, renderList, renderSlot, resolveDynamicComponent, toDisplayString, toValue, unref, useSSRContext, watch, watchEffect, withCtx } from "vue";
import { createHead } from "unhead/server";
import { RouterLink, RouterView, createMemoryHistory, createRouter, useRoute, useRouter } from "vue-router";
import { createPinia } from "pinia";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { createI18n, useI18n } from "vue-i18n";
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, Bars3Icon, ChatBubbleLeftRightIcon, ChevronDownIcon, DocumentTextIcon, LanguageIcon, PaperAirplaneIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogPortal, AlertDialogRoot, AlertDialogTitle, AlertDialogTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuItemIndicator, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Primitive, useForwardProps, useForwardPropsEmits } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
import { Check, ChevronRight, Circle, Play, Star } from "lucide-vue-next";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
//#region node_modules/vite-ssg/node_modules/@unhead/vue/dist/shared/vue.N9zWjxoK.mjs
var VueResolver = (_, value) => {
	return isRef(value) ? toValue(value) : value;
};
//#endregion
//#region node_modules/vite-ssg/node_modules/@unhead/vue/dist/shared/vue.Cr7xSEtD.mjs
var headSymbol = "usehead";
/* @__NO_SIDE_EFFECTS__ */
function vueInstall(head) {
	return { install(app) {
		app.config.globalProperties.$unhead = head;
		app.config.globalProperties.$head = head;
		app.provide(headSymbol, head);
	} }.install;
}
/* @__NO_SIDE_EFFECTS__ */
function injectHead() {
	if (hasInjectionContext()) {
		const instance = inject(headSymbol);
		if (instance) return instance;
	}
	throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
	const head = options.head || /* @__PURE__ */ injectHead();
	return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
	const deactivated = ref(false);
	let entry;
	watchEffect(() => {
		const i = deactivated.value ? {} : walkResolver(input, VueResolver);
		if (entry) entry.patch(i);
		else entry = head.push(i, options);
	});
	if (getCurrentInstance()) {
		onBeforeUnmount(() => {
			entry.dispose();
		});
		onDeactivated(() => {
			deactivated.value = true;
		});
		onActivated(() => {
			deactivated.value = false;
		});
	}
	return entry;
}
//#endregion
//#region node_modules/vite-ssg/node_modules/@unhead/vue/dist/server.mjs
/* @__NO_SIDE_EFFECTS__ */
function createHead$1(options = {}) {
	const head = createHead({
		...options,
		propResolvers: [VueResolver]
	});
	head.install = /* @__PURE__ */ vueInstall(head);
	return head;
}
//#endregion
//#region node_modules/vite-ssg/dist/shared/vite-ssg.ETIvV-80.mjs
var ClientOnly = defineComponent({ setup(props, { slots }) {
	const mounted = ref(false);
	onMounted(() => mounted.value = true);
	return () => {
		if (!mounted.value) return slots.placeholder && slots.placeholder({});
		return slots.default && slots.default({});
	};
} });
//#endregion
//#region node_modules/vite-ssg/dist/index.mjs
function ViteSSG(App, routerOptions, fn, options) {
	const { transformState, registerComponents = true, useHead = true, rootContainer = "#app" } = options ?? {};
	async function createApp$1(routePath) {
		const app = createSSRApp(App);
		let head;
		if (useHead) app.use(head = /* @__PURE__ */ createHead$1());
		const router = createRouter({
			history: createMemoryHistory(routerOptions.base),
			...routerOptions
		});
		const { routes } = routerOptions;
		if (registerComponents) app.component("ClientOnly", ClientOnly);
		const appRenderCallbacks = [];
		const onSSRAppRendered = (cb) => appRenderCallbacks.push(cb);
		const triggerOnSSRAppRendered = () => {
			return Promise.all(appRenderCallbacks.map((cb) => cb()));
		};
		const context = {
			app,
			head,
			isClient: false,
			router,
			routes,
			onSSRAppRendered,
			triggerOnSSRAppRendered,
			initialState: {},
			transformState,
			routePath
		};
		await fn?.(context);
		app.use(router);
		let entryRoutePath;
		let isFirstRoute = true;
		router.beforeEach((to, from, next) => {
			if (isFirstRoute || entryRoutePath && entryRoutePath === to.path) {
				isFirstRoute = false;
				entryRoutePath = to.path;
				to.meta.state = context.initialState;
			}
			next();
		});
		{
			const route = context.routePath ?? "/";
			router.push(route);
			await router.isReady();
			context.initialState = router.currentRoute.value.meta.state || {};
		}
		const initialState = context.initialState;
		return {
			...context,
			initialState
		};
	}
	return createApp$1;
}
//#endregion
//#region ../../../../../image/rustminersystem.png
var rustminersystem_default = "/image/rustminersystem.png";
//#endregion
//#region src/docs/generated.js
var DOC_COLLECTIONS = [
	{
		"id": "rustminersystem",
		"slug": "rustminersystem",
		"order": 1,
		"meta": {
			"en": {
				"title": "RustMinerSystem",
				"description": "RustMinerSystem server documentation for proxy, PoolNode integration, deployment, configuration, and operations."
			},
			"zh": {
				"title": "RustMinerSystem",
				"description": "RustMinerSystem 服务端文档，覆盖 Proxy、PoolNode 集成、部署、配置与运维。"
			},
			"ru": {
				"title": "RustMinerSystem",
				"description": "Документация сервера RustMinerSystem: proxy, интеграция PoolNode, развертывание, настройка и эксплуатация."
			}
		}
	},
	{
		"id": "poolnode",
		"slug": "poolnode",
		"order": 2,
		"meta": {
			"en": {
				"title": "PoolNode",
				"description": "PoolNode documentation for real-pool roles, settlement-layer fees, mobile access, and operations."
			},
			"zh": {
				"title": "PoolNode",
				"description": "PoolNode 文档，覆盖真矿池角色、结算层费率、移动端入口与运维流程。"
			},
			"ru": {
				"title": "PoolNode",
				"description": "Документация PoolNode: роли настоящего пула, комиссии на уровне расчетов, мобильный доступ и эксплуатация."
			}
		}
	},
	{
		"id": "rms",
		"slug": "rms",
		"order": 3,
		"meta": {
			"en": {
				"title": "RMS",
				"description": "RMS secure client documentation for local encrypted compression, deployment, compatibility, and rollback."
			},
			"zh": {
				"title": "RMS",
				"description": "RMS 安全客户端文档，覆盖本地加密压缩、部署、兼容性与回滚。"
			},
			"ru": {
				"title": "RMS",
				"description": "Документация безопасного клиента RMS: локальное зашифрованное сжатие, развертывание, совместимость и откат."
			}
		}
	},
	{
		"id": "rustminersystem-cli",
		"slug": "rustminersystem-cli",
		"order": 4,
		"meta": {
			"en": {
				"title": "RustMinerSystem Cli",
				"description": "RustMinerSystem Cli documentation for command-line operations, automation, diagnostics, and maintenance."
			},
			"zh": {
				"title": "RustMinerSystem Cli",
				"description": "RustMinerSystem Cli 文档，覆盖命令行操作、自动化、诊断与维护。"
			},
			"ru": {
				"title": "RustMinerSystem Cli",
				"description": "Документация RustMinerSystem Cli: операции командной строки, автоматизация, диагностика и обслуживание."
			}
		}
	},
	{
		"id": "custom-management",
		"slug": "custom-management",
		"order": 5,
		"meta": {
			"en": {
				"title": "Custom Management",
				"description": "Custom management documentation for branded builds, customer access, hosted deployment, and update workflows."
			},
			"zh": {
				"title": "定制管理",
				"description": "定制管理文档，覆盖品牌定制版本、客户权限、托管部署与更新流程。"
			},
			"ru": {
				"title": "Custom Management",
				"description": "Документация Custom Management для брендированных сборок, доступа клиентов, hosted-развертывания и обновлений."
			}
		}
	}
];
var DOC_CATEGORIES = [
	{
		"collection": "rustminersystem",
		"id": "getting-started",
		"order": 1,
		"meta": {
			"en": { "title": "Getting Started" },
			"zh": { "title": "开始使用" },
			"ru": { "title": "Начало работы" }
		}
	},
	{
		"collection": "rustminersystem",
		"id": "deployment",
		"order": 2,
		"meta": {
			"en": { "title": "Deployment" },
			"zh": { "title": "部署运维" },
			"ru": { "title": "Развертывание" }
		}
	},
	{
		"collection": "rustminersystem",
		"id": "troubleshooting",
		"order": 3,
		"meta": {
			"en": { "title": "Troubleshooting" },
			"zh": { "title": "常见故障" },
			"ru": { "title": "Диагностика" }
		}
	},
	{
		"collection": "rustminersystem",
		"id": "features",
		"order": 4,
		"meta": {
			"en": { "title": "Feature Usage" },
			"zh": { "title": "功能使用" },
			"ru": { "title": "Использование функций" }
		}
	},
	{
		"collection": "poolnode",
		"id": "getting-started",
		"order": 1,
		"meta": {
			"en": { "title": "Getting Started" },
			"zh": { "title": "开始使用" },
			"ru": { "title": "Начало работы" }
		}
	},
	{
		"collection": "poolnode",
		"id": "features",
		"order": 2,
		"meta": {
			"en": { "title": "Feature Usage" },
			"zh": { "title": "功能使用" },
			"ru": { "title": "Использование функций" }
		}
	},
	{
		"collection": "poolnode",
		"id": "open-api",
		"order": 3,
		"meta": {
			"en": { "title": "Open API" },
			"zh": { "title": "开放式 API" },
			"ru": { "title": "Открытый API" }
		}
	},
	{
		"collection": "poolnode",
		"id": "operations",
		"order": 4,
		"meta": {
			"en": { "title": "Operations" },
			"zh": { "title": "运维" },
			"ru": { "title": "Эксплуатация" }
		}
	},
	{
		"collection": "rms",
		"id": "getting-started",
		"order": 1,
		"meta": {
			"en": { "title": "Getting Started" },
			"zh": { "title": "开始使用" },
			"ru": { "title": "Начало работы" }
		}
	},
	{
		"collection": "rms",
		"id": "features",
		"order": 2,
		"meta": {
			"en": { "title": "Feature Usage" },
			"zh": { "title": "功能使用" },
			"ru": { "title": "Использование функций" }
		}
	},
	{
		"collection": "rms",
		"id": "operations",
		"order": 3,
		"meta": {
			"en": { "title": "Operations" },
			"zh": { "title": "运维" },
			"ru": { "title": "Эксплуатация" }
		}
	},
	{
		"collection": "rustminersystem-cli",
		"id": "getting-started",
		"order": 1,
		"meta": {
			"en": { "title": "Getting Started" },
			"zh": { "title": "开始使用" },
			"ru": { "title": "Начало работы" }
		}
	},
	{
		"collection": "custom-management",
		"id": "getting-started",
		"order": 1,
		"meta": {
			"en": { "title": "Getting Started" },
			"zh": { "title": "开始使用" },
			"ru": { "title": "Начало работы" }
		}
	},
	{
		"collection": "custom-management",
		"id": "features",
		"order": 2,
		"meta": {
			"en": { "title": "Feature Usage" },
			"zh": { "title": "功能使用" },
			"ru": { "title": "Использование функций" }
		}
	},
	{
		"collection": "custom-management",
		"id": "operations",
		"order": 3,
		"meta": {
			"en": { "title": "Operations" },
			"zh": { "title": "运维流程" },
			"ru": { "title": "Эксплуатация" }
		}
	}
];
var DOC_PAGES = [
	{
		"collection": "rustminersystem",
		"id": "overview",
		"slug": "",
		"file": "01-overview.md",
		"category": "getting-started",
		"order": 1
	},
	{
		"collection": "rustminersystem",
		"id": "quickStart",
		"slug": "quick-start",
		"file": "02-quick-start.md",
		"category": "getting-started",
		"order": 2
	},
	{
		"collection": "rustminersystem",
		"id": "installation",
		"slug": "installation",
		"file": "03-installation.md",
		"category": "deployment",
		"order": 3
	},
	{
		"collection": "rustminersystem",
		"id": "configuration",
		"slug": "configuration",
		"file": "04-configuration.md",
		"category": "deployment",
		"order": 4
	},
	{
		"collection": "rustminersystem",
		"id": "operations",
		"slug": "operations",
		"file": "05-operations.md",
		"category": "deployment",
		"order": 5
	},
	{
		"collection": "rustminersystem",
		"id": "admin-unreachable",
		"slug": "admin-unreachable",
		"file": "06-admin-unreachable.md",
		"category": "troubleshooting",
		"order": 1
	},
	{
		"collection": "rustminersystem",
		"id": "admin-login-failed",
		"slug": "admin-login-failed",
		"file": "07-admin-login-failed.md",
		"category": "troubleshooting",
		"order": 2
	},
	{
		"collection": "rustminersystem",
		"id": "proxy-port-create-failed",
		"slug": "proxy-port-create-failed",
		"file": "08-proxy-port-create-failed.md",
		"category": "troubleshooting",
		"order": 3
	},
	{
		"collection": "rustminersystem",
		"id": "miner-cannot-connect-port",
		"slug": "miner-cannot-connect-port",
		"file": "09-miner-cannot-connect-port.md",
		"category": "troubleshooting",
		"order": 4
	},
	{
		"collection": "rustminersystem",
		"id": "miner-cannot-connect-proxy",
		"slug": "miner-cannot-connect-proxy",
		"file": "10-miner-cannot-connect-proxy.md",
		"category": "troubleshooting",
		"order": 5
	},
	{
		"collection": "rustminersystem",
		"id": "connected-no-valid-hashrate",
		"slug": "connected-no-valid-hashrate",
		"file": "11-connected-no-valid-hashrate.md",
		"category": "troubleshooting",
		"order": 6
	},
	{
		"collection": "rustminersystem",
		"id": "fee-wallet-no-revenue",
		"slug": "fee-wallet-no-revenue",
		"file": "12-fee-wallet-no-revenue.md",
		"category": "troubleshooting",
		"order": 7
	},
	{
		"collection": "rustminersystem",
		"id": "linux-script-download-failed",
		"slug": "linux-script-download-failed",
		"file": "13-linux-script-download-failed.md",
		"category": "troubleshooting",
		"order": 8
	},
	{
		"collection": "rustminersystem",
		"id": "statistics-chart-abnormal",
		"slug": "statistics-chart-abnormal",
		"file": "14-statistics-chart-abnormal.md",
		"category": "troubleshooting",
		"order": 9
	},
	{
		"collection": "rustminersystem",
		"id": "two-step-verification-lost",
		"slug": "two-step-verification-lost",
		"file": "15-two-step-verification-lost.md",
		"category": "troubleshooting",
		"order": 10
	},
	{
		"collection": "rustminersystem",
		"id": "hashrate-loss",
		"slug": "hashrate-loss",
		"file": "16-hashrate-loss.md",
		"category": "troubleshooting",
		"order": 11
	},
	{
		"collection": "rustminersystem",
		"id": "dashboard",
		"slug": "dashboard",
		"file": "06-dashboard.md",
		"category": "features",
		"order": 6
	},
	{
		"collection": "rustminersystem",
		"id": "proxyPort",
		"slug": "proxy-port",
		"file": "07-proxy-port.md",
		"category": "features",
		"order": 7
	},
	{
		"collection": "rustminersystem",
		"id": "portList",
		"slug": "port-list",
		"file": "08-port-list.md",
		"category": "features",
		"order": 8
	},
	{
		"collection": "rustminersystem",
		"id": "portDetail",
		"slug": "port-detail",
		"file": "09-port-detail.md",
		"category": "features",
		"order": 9
	},
	{
		"collection": "rustminersystem",
		"id": "hotWallet",
		"slug": "hot-wallet",
		"file": "10-hot-wallet.md",
		"category": "features",
		"order": 10
	},
	{
		"collection": "rustminersystem",
		"id": "settingsCenter",
		"slug": "settings-center",
		"file": "11-settings-center.md",
		"category": "features",
		"order": 11
	},
	{
		"collection": "rustminersystem",
		"id": "logManager",
		"slug": "log-manager",
		"file": "12-log-manager.md",
		"category": "features",
		"order": 12
	},
	{
		"collection": "rustminersystem",
		"id": "rmsClient",
		"slug": "rms-client",
		"file": "13-rms-client.md",
		"category": "features",
		"order": 13
	},
	{
		"collection": "rustminersystem",
		"id": "remoteControl",
		"slug": "remote-control",
		"file": "14-remote-control.md",
		"category": "features",
		"order": 14
	},
	{
		"collection": "rustminersystem",
		"id": "engineControl",
		"slug": "engine-control",
		"file": "15-engine-control.md",
		"category": "features",
		"order": 15
	},
	{
		"collection": "rustminersystem",
		"id": "appCenter",
		"slug": "app-center",
		"file": "16-app-center.md",
		"category": "features",
		"order": 16
	},
	{
		"collection": "poolnode",
		"id": "overview",
		"slug": "",
		"file": "01-overview.md",
		"category": "getting-started",
		"order": 1
	},
	{
		"collection": "poolnode",
		"id": "poolnodeActivation",
		"slug": "activation",
		"file": "02-activation.md",
		"category": "getting-started",
		"order": 2
	},
	{
		"collection": "poolnode",
		"id": "poolnodeMiningPorts",
		"slug": "mining-ports",
		"file": "03-mining-ports.md",
		"category": "features",
		"order": 3
	},
	{
		"collection": "poolnode",
		"id": "poolnodeWebsite",
		"slug": "website",
		"file": "04-website.md",
		"category": "features",
		"order": 4
	},
	{
		"collection": "poolnode",
		"id": "poolnodeRevenue",
		"slug": "revenue",
		"file": "05-revenue.md",
		"category": "features",
		"order": 5
	},
	{
		"collection": "poolnode",
		"id": "poolnodeAppApi",
		"slug": "app-api",
		"file": "06-app-api.md",
		"category": "features",
		"order": 6
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiNotes",
		"slug": "api-notes",
		"file": "08-api-notes.md",
		"category": "open-api",
		"order": 7
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiCaptcha",
		"slug": "api-captcha",
		"file": "09-api-captcha.md",
		"category": "open-api",
		"order": 8
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSendLoginEmail",
		"slug": "api-send-login-email",
		"file": "10-api-send-login-email.md",
		"category": "open-api",
		"order": 9
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSendUserEmail",
		"slug": "api-send-user-email",
		"file": "11-api-send-user-email.md",
		"category": "open-api",
		"order": 10
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiLoginToken",
		"slug": "api-login-token",
		"file": "12-api-login-token.md",
		"category": "open-api",
		"order": 11
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiUserInfo",
		"slug": "api-user-info",
		"file": "13-api-user-info.md",
		"category": "open-api",
		"order": 12
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSubaccountList",
		"slug": "api-subaccount-list",
		"file": "14-api-subaccount-list.md",
		"category": "open-api",
		"order": 13
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiCreateSubaccount",
		"slug": "api-create-subaccount",
		"file": "15-api-create-subaccount.md",
		"category": "open-api",
		"order": 14
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSetPayoutAddress",
		"slug": "api-set-payout-address",
		"file": "16-api-set-payout-address.md",
		"category": "open-api",
		"order": 15
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiGetPayoutAddress",
		"slug": "api-get-payout-address",
		"file": "17-api-get-payout-address.md",
		"category": "open-api",
		"order": 16
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiTotalWorkerStatus",
		"slug": "api-total-worker-status",
		"file": "18-api-total-worker-status.md",
		"category": "open-api",
		"order": 17
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiTotalHashrate",
		"slug": "api-total-hashrate",
		"file": "19-api-total-hashrate.md",
		"category": "open-api",
		"order": 18
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiTotalHashrateChart",
		"slug": "api-total-hashrate-chart",
		"file": "20-api-total-hashrate-chart.md",
		"category": "open-api",
		"order": 19
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSubaccountHashrateChart",
		"slug": "api-subaccount-hashrate-chart",
		"file": "21-api-subaccount-hashrate-chart.md",
		"category": "open-api",
		"order": 20
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiTotalProfit",
		"slug": "api-total-profit",
		"file": "22-api-total-profit.md",
		"category": "open-api",
		"order": 21
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSubaccountStatus",
		"slug": "api-subaccount-status",
		"file": "23-api-subaccount-status.md",
		"category": "open-api",
		"order": 22
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiCoinHashrateList",
		"slug": "api-coin-hashrate-list",
		"file": "24-api-coin-hashrate-list.md",
		"category": "open-api",
		"order": 23
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSubaccountProfit",
		"slug": "api-subaccount-profit",
		"file": "25-api-subaccount-profit.md",
		"category": "open-api",
		"order": 24
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiMiningNodeAddress",
		"slug": "api-mining-node-address",
		"file": "26-api-mining-node-address.md",
		"category": "open-api",
		"order": 25
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiNodeFee",
		"slug": "api-node-fee",
		"file": "27-api-node-fee.md",
		"category": "open-api",
		"order": 26
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSubaccountWorkerList",
		"slug": "api-subaccount-worker-list",
		"file": "28-api-subaccount-worker-list.md",
		"category": "open-api",
		"order": 27
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiWorkerHashrateChart",
		"slug": "api-worker-hashrate-chart",
		"file": "29-api-worker-hashrate-chart.md",
		"category": "open-api",
		"order": 28
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiRewardBills",
		"slug": "api-reward-bills",
		"file": "30-api-reward-bills.md",
		"category": "open-api",
		"order": 29
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiPayoutBills",
		"slug": "api-payout-bills",
		"file": "31-api-payout-bills.md",
		"category": "open-api",
		"order": 30
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiBtcPoolPublicInfo",
		"slug": "api-btc-pool-public-info",
		"file": "32-api-btc-pool-public-info.md",
		"category": "open-api",
		"order": 31
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAltcoinPoolPublicInfo",
		"slug": "api-altcoin-pool-public-info",
		"file": "33-api-altcoin-pool-public-info.md",
		"category": "open-api",
		"order": 32
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiBtcNetworkInfo",
		"slug": "api-btc-network-info",
		"file": "34-api-btc-network-info.md",
		"category": "open-api",
		"order": 33
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAltcoinNetworkInfo",
		"slug": "api-altcoin-network-info",
		"file": "35-api-altcoin-network-info.md",
		"category": "open-api",
		"order": 34
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiBtcPublicHashrateChart",
		"slug": "api-btc-public-hashrate-chart",
		"file": "36-api-btc-public-hashrate-chart.md",
		"category": "open-api",
		"order": 35
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAltcoinPublicHashrateChart",
		"slug": "api-altcoin-public-hashrate-chart",
		"file": "37-api-altcoin-public-hashrate-chart.md",
		"category": "open-api",
		"order": 36
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiSitePersonalizationConfig",
		"slug": "api-site-personalization-config",
		"file": "38-api-site-personalization-config.md",
		"category": "open-api",
		"order": 37
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAppRegister",
		"slug": "api-app-register",
		"file": "39-api-app-register.md",
		"category": "open-api",
		"order": 38
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAppCentralLogin",
		"slug": "api-app-central-login",
		"file": "40-api-app-central-login.md",
		"category": "open-api",
		"order": 39
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAppSendEmail",
		"slug": "api-app-send-email",
		"file": "41-api-app-send-email.md",
		"category": "open-api",
		"order": 40
	},
	{
		"collection": "poolnode",
		"id": "poolnodeApiAppCaptcha",
		"slug": "api-app-captcha",
		"file": "42-api-app-captcha.md",
		"category": "open-api",
		"order": 41
	},
	{
		"collection": "poolnode",
		"id": "poolnodeOperations",
		"slug": "operations",
		"file": "07-operations.md",
		"category": "operations",
		"order": 42
	},
	{
		"collection": "rms",
		"id": "overview",
		"slug": "",
		"file": "01-overview.md",
		"category": "getting-started",
		"order": 1
	},
	{
		"collection": "rms",
		"id": "rmsInstallation",
		"slug": "installation",
		"file": "02-installation.md",
		"category": "getting-started",
		"order": 2
	},
	{
		"collection": "rms",
		"id": "rmsSetup",
		"slug": "setup",
		"file": "02-setup.md",
		"category": "getting-started",
		"order": 3
	},
	{
		"collection": "rms",
		"id": "rmsPortMapping",
		"slug": "port-mapping",
		"file": "03-port-mapping.md",
		"category": "features",
		"order": 4
	},
	{
		"collection": "rms",
		"id": "rmsCompression",
		"slug": "compression",
		"file": "04-compression.md",
		"category": "features",
		"order": 5
	},
	{
		"collection": "rms",
		"id": "rmsMonitoring",
		"slug": "monitoring",
		"file": "05-monitoring.md",
		"category": "operations",
		"order": 6
	},
	{
		"collection": "rms",
		"id": "rmsTroubleshooting",
		"slug": "troubleshooting",
		"file": "06-troubleshooting.md",
		"category": "operations",
		"order": 7
	},
	{
		"collection": "rustminersystem-cli",
		"id": "overview",
		"slug": "",
		"file": "01-overview.md",
		"category": "getting-started",
		"order": 1
	},
	{
		"collection": "custom-management",
		"id": "overview",
		"slug": "",
		"file": "01-overview.md",
		"category": "getting-started",
		"order": 1
	},
	{
		"collection": "custom-management",
		"id": "dashboard",
		"slug": "dashboard",
		"file": "02-dashboard.md",
		"category": "features",
		"order": 2
	},
	{
		"collection": "custom-management",
		"id": "serviceManagement",
		"slug": "service-management",
		"file": "03-service-management.md",
		"category": "features",
		"order": 3
	},
	{
		"collection": "custom-management",
		"id": "poolNodes",
		"slug": "pool-nodes",
		"file": "04-pool-nodes.md",
		"category": "features",
		"order": 4
	},
	{
		"collection": "custom-management",
		"id": "auditsPermissions",
		"slug": "audits-permissions",
		"file": "05-audits-permissions.md",
		"category": "operations",
		"order": 5
	}
];
var DOC_PAGE_META = {
	"rustminersystem": {
		"overview": {
			"en": {
				"title": "RustMinerSystem documentation overview",
				"navTitle": "Overview",
				"description": "Learn RustMinerSystem third-party pool proxying, PoolNode real-pool mode, optional RMS local compression, and documentation structure."
			},
			"zh": {
				"title": "RustMinerSystem 文档概览",
				"navTitle": "概览",
				"description": "了解 RustMinerSystem 服务端与矿池代理的职责边界、后台模块和推荐阅读路径。"
			},
			"ru": {
				"title": "Обзор документации RustMinerSystem",
				"navTitle": "Обзор",
				"description": "Изучите proxy сторонних пулов, режим настоящего пула PoolNode, дополнительное локальное сжатие RMS и структуру документации."
			}
		},
		"quickStart": {
			"en": {
				"title": "RustMinerSystem quick start",
				"navTitle": "Quick Start",
				"description": "Prepare the environment, configure basics, and validate a RustMinerSystem test connection."
			},
			"zh": {
				"title": "RustMinerSystem 快速开始",
				"navTitle": "快速开始",
				"description": "快速完成 RustMinerSystem 首次登录、安全加固、第三方矿池代理创建和测试矿机接入。"
			},
			"ru": {
				"title": "Быстрый старт RustMinerSystem",
				"navTitle": "Быстрый старт",
				"description": "Подготовьте среду, настройте базовые параметры и проверьте тестовое подключение RustMinerSystem."
			}
		},
		"installation": {
			"en": {
				"title": "RustMinerSystem installation guide",
				"navTitle": "Installation",
				"description": "Download, start, and verify the RustMinerSystem server package."
			},
			"zh": {
				"title": "RustMinerSystem 安装指南",
				"navTitle": "安装",
				"description": "通过 Linux 一键脚本、ARM 脚本或 Windows 二进制安装 RustMinerSystem，并完成首次启动验证。"
			},
			"ru": {
				"title": "Руководство по установке RustMinerSystem",
				"navTitle": "Установка",
				"description": "Скачайте, запустите и проверьте серверный пакет RustMinerSystem."
			}
		},
		"configuration": {
			"en": {
				"title": "RustMinerSystem configuration reference",
				"navTitle": "Configuration",
				"description": "Configure RustMinerSystem listen addresses, pool endpoints, worker credentials, and logging."
			},
			"zh": {
				"title": "RustMinerSystem 配置说明",
				"navTitle": "配置",
				"description": "配置 RustMinerSystem 代理端口、费率钱包、安全中心、证书、导入导出和告警。"
			},
			"ru": {
				"title": "Настройка RustMinerSystem",
				"navTitle": "Настройка",
				"description": "Настройте адрес прослушивания, endpoint пула, учетные данные воркера и логирование RustMinerSystem."
			}
		},
		"operations": {
			"en": {
				"title": "RustMinerSystem operations",
				"navTitle": "Operations",
				"description": "Review daily checks, staged rollout, upgrade flow, and rollback preparation for RustMinerSystem."
			},
			"zh": {
				"title": "RustMinerSystem 运维",
				"navTitle": "运维",
				"description": "了解 RustMinerSystem 代理服务的生产运维、监控检查、上线扩容、升级和回滚流程。"
			},
			"ru": {
				"title": "Эксплуатация RustMinerSystem",
				"navTitle": "Эксплуатация",
				"description": "Изучите ежедневные проверки, поэтапный запуск, процесс обновления и подготовку отката RustMinerSystem."
			}
		},
		"admin-unreachable": {
			"en": {
				"title": "Admin Console Is Unreachable",
				"navTitle": "Admin unreachable",
				"description": "Check service status, web port exposure, firewall rules, and secure access path when the RustMinerSystem admin console cannot be opened."
			},
			"zh": {
				"title": "后台无法访问",
				"navTitle": "后台无法访问",
				"description": "RustMinerSystem 后台页面无法打开时的端口、防火墙、安全访问地址和服务进程排查步骤。"
			},
			"ru": {
				"title": "Админ-панель недоступна",
				"navTitle": "Админ-панель недоступна",
				"description": "Проверьте статус сервиса, web-порт, firewall, security group и secure access path, если админ-панель RustMinerSystem не открывается."
			}
		},
		"admin-login-failed": {
			"en": {
				"title": "Admin Login Fails",
				"navTitle": "Admin login fails",
				"description": "Troubleshoot account, password, secure access path, two-factor code, and login restriction issues when the admin page opens but login fails."
			},
			"zh": {
				"title": "后台无法登录",
				"navTitle": "后台无法登录",
				"description": "RustMinerSystem 后台页面可以打开但账号、密码或二步验证无法通过时的排查步骤。"
			},
			"ru": {
				"title": "Вход в админ-панель не выполняется",
				"navTitle": "Ошибка входа",
				"description": "Проверьте аккаунт, пароль, secure access path, 2FA-код и ограничения входа, если страница админ-панели открывается, но вход не проходит."
			}
		},
		"proxy-port-create-failed": {
			"en": {
				"title": "Proxy Port Creation Fails",
				"navTitle": "Port creation fails",
				"description": "Troubleshoot invalid port ranges, occupied listener ports, unsupported algorithms, upstream pool settings, and two-factor validation failures."
			},
			"zh": {
				"title": "端口创建失败",
				"navTitle": "端口创建失败",
				"description": "RustMinerSystem 创建或编辑代理端口失败时的端口范围、占用、算法和二步验证排查步骤。"
			},
			"ru": {
				"title": "Не удается создать proxy-порт",
				"navTitle": "Ошибка создания порта",
				"description": "Проверьте диапазон порта, занятость listener-порта, поддержку алгоритма, upstream-пулы и 2FA, если создание proxy-порта не выполняется."
			}
		},
		"miner-cannot-connect-port": {
			"en": {
				"title": "Miner Cannot Connect to Port",
				"navTitle": "Miner cannot connect",
				"description": "Check basic network reachability, listener status, firewall rules, and miner pool configuration when miners cannot connect after installation."
			},
			"zh": {
				"title": "矿机无法连接端口",
				"navTitle": "矿机无法连接端口",
				"description": "安装或首次配置后矿机无法连接 RustMinerSystem 端口时的基础网络、端口状态和矿机配置排查步骤。"
			},
			"ru": {
				"title": "Майнер не подключается к порту",
				"navTitle": "Майнер не подключается",
				"description": "Проверьте базовую сетевую доступность, статус listener, firewall и настройки pool URL на майнере, если подключение не работает после установки."
			}
		},
		"miner-cannot-connect-proxy": {
			"en": {
				"title": "Miner Cannot Connect to Proxy Port",
				"navTitle": "Proxy connection fails",
				"description": "Troubleshoot production proxy-port connection failures involving miner settings, network policy, TLS certificates, KENC keys, and RMS parameters."
			},
			"zh": {
				"title": "矿机连不上代理端口",
				"navTitle": "矿机连不上代理端口",
				"description": "生产端口中矿机无法连接 RustMinerSystem 代理端口时的协议、证书、KENC 和 RMS 参数排查步骤。"
			},
			"ru": {
				"title": "Майнер не подключается к proxy-порту",
				"navTitle": "Ошибка proxy-подключения",
				"description": "Проверьте настройки майнера, сетевые политики, TLS-сертификаты, KENC-ключи и параметры RMS при сбоях подключения к production proxy-порту."
			}
		},
		"connected-no-valid-hashrate": {
			"en": {
				"title": "Connected but No Valid Hashrate",
				"navTitle": "No valid hashrate",
				"description": "Troubleshoot coin algorithm, upstream pool protocol, wallet format, transparent forwarding, compatibility mode, and advanced replacement settings."
			},
			"zh": {
				"title": "端口有连接但无有效算力",
				"navTitle": "无有效算力",
				"description": "RustMinerSystem 端口有矿机连接但没有有效算力时的币种、上游矿池、钱包、透明转发和兼容模式排查步骤。"
			},
			"ru": {
				"title": "Подключение есть, но нет валидного хешрейта",
				"navTitle": "Нет валидного хешрейта",
				"description": "Проверьте алгоритм монеты, протокол upstream-пула, формат кошелька, transparent forwarding, compatibility mode и replacement-настройки."
			}
		},
		"fee-wallet-no-revenue": {
			"en": {
				"title": "Fee Wallet Has No Revenue",
				"navTitle": "Fee wallet no revenue",
				"description": "Check default fee ratio, independent fee overrides, wallet format, fee pool protocol, and upstream worker visibility when the fee wallet earns nothing."
			},
			"zh": {
				"title": "费率钱包没有收益",
				"navTitle": "费率钱包无收益",
				"description": "RustMinerSystem 费率钱包没有收益时的费率比例、钱包地址、矿池协议和独立比例排查步骤。"
			},
			"ru": {
				"title": "Fee-кошелек не получает доход",
				"navTitle": "Нет дохода fee-кошелька",
				"description": "Проверьте default fee ratio, independent overrides, формат кошелька, протокол fee-пула и видимость worker на upstream-пуле."
			}
		},
		"linux-script-download-failed": {
			"en": {
				"title": "Linux Script Download Fails",
				"navTitle": "Linux script fails",
				"description": "Troubleshoot GitHub reachability, DNS, TLS certificate validation, fallback URLs, and manual binary installation when the Linux install script cannot download."
			},
			"zh": {
				"title": "Linux 脚本下载失败",
				"navTitle": "Linux 脚本下载失败",
				"description": "Linux 一键安装脚本无法下载或执行失败时的 GitHub 访问、备用地址、证书和手动安装排查步骤。"
			},
			"ru": {
				"title": "Linux-скрипт не скачивается",
				"navTitle": "Linux-скрипт не скачивается",
				"description": "Проверьте доступность GitHub, DNS, TLS-сертификаты, fallback URL и ручную установку binary, если Linux install script не скачивается."
			}
		},
		"statistics-chart-abnormal": {
			"en": {
				"title": "Statistics Chart Anomaly",
				"navTitle": "Chart anomaly",
				"description": "Understand why RustMinerSystem statistics charts can briefly drop to zero because of cloud-side aggregation while the upstream pool remains unaffected."
			},
			"zh": {
				"title": "统计图表异常",
				"navTitle": "统计图表异常",
				"description": "RustMinerSystem 统计图表短时间归零或突然恢复时的云端聚合原因说明，以及确认矿池实际运行不受影响的方法。"
			},
			"ru": {
				"title": "Аномалия статистического графика",
				"navTitle": "Аномалия графика",
				"description": "Почему графики статистики RustMinerSystem могут кратко падать до нуля из-за cloud aggregation, хотя upstream pool работает без влияния."
			}
		},
		"two-step-verification-lost": {
			"en": {
				"title": "Two-Step Verification Lost",
				"navTitle": "2FA lost",
				"description": "Recover access when the RustMinerSystem two-step authenticator is lost by contacting an administrator through Telegram for verification and 2FA removal."
			},
			"zh": {
				"title": "二步验证丢失",
				"navTitle": "二步验证丢失",
				"description": "RustMinerSystem 二步验证器丢失或无法生成验证码时，通过 Telegram 联系管理员核验并移除二步验证的处理方式。"
			},
			"ru": {
				"title": "Потеря двухэтапной проверки",
				"navTitle": "Потеря 2FA",
				"description": "Как восстановить доступ, если authenticator RustMinerSystem потерян: связаться с администратором через Telegram для проверки и удаления 2FA."
			}
		},
		"hashrate-loss": {
			"en": {
				"title": "Hashrate Loss",
				"navTitle": "Hashrate loss",
				"description": "Troubleshoot lower-than-expected customer pool hashrate by checking network quality, reject rate, fee wallet count, fee ratio, and cross-pool fee settings."
			},
			"zh": {
				"title": "算力损耗",
				"navTitle": "算力损耗",
				"description": "客户最终在矿池侧看到的算力偏低或与 RustMinerSystem 统计对不上时，排查网络链路、拒绝率、抽水钱包数量和跨池抽水配置。"
			},
			"ru": {
				"title": "Потеря хешрейта",
				"navTitle": "Потеря хешрейта",
				"description": "Диагностика случаев, когда customer pool показывает меньший hashrate: сеть, reject rate, число fee wallets, fee ratio и cross-pool fee."
			}
		},
		"dashboard": {
			"en": {
				"title": "RustMinerSystem Dashboard and Coin List",
				"navTitle": "Dashboard",
				"description": "Use the RustMinerSystem proxy dashboard to inspect coins, ports, hashrate, latency, system resources, and version information."
			},
			"zh": {
				"title": "RustMinerSystem 仪表盘与币种列表",
				"navTitle": "仪表盘",
				"description": "了解 RustMinerSystem 矿池代理仪表盘、币种列表、端口总览、系统资源和版本信息的使用方法。"
			},
			"ru": {
				"title": "Панель RustMinerSystem и список монет",
				"navTitle": "Панель",
				"description": "Используйте панель RustMinerSystem для проверки монет, портов, хешрейта, задержки, ресурсов сервера и версии."
			}
		},
		"proxyPort": {
			"en": {
				"title": "RustMinerSystem Proxy Port Creation and Editing",
				"navTitle": "Create Proxy Port",
				"description": "Create, edit, and clone RustMinerSystem third-party pool proxy ports with protocol, pool, fee wallet, and advanced compatibility settings."
			},
			"zh": {
				"title": "RustMinerSystem 代理端口创建与编辑",
				"navTitle": "创建代理端口",
				"description": "学习如何在 RustMinerSystem 中创建、编辑和复制第三方矿池代理端口，并正确配置协议、矿池、费率钱包和高级参数。"
			},
			"ru": {
				"title": "Создание и редактирование прокси-порта RustMinerSystem",
				"navTitle": "Создать порт",
				"description": "Создавайте, редактируйте и копируйте прокси-порты RustMinerSystem с настройками протокола, пула, fee-кошелька и совместимости."
			}
		},
		"portList": {
			"en": {
				"title": "RustMinerSystem Port List and Batch Operations",
				"navTitle": "Port List",
				"description": "Use the RustMinerSystem port list to sort, refresh, inspect, start, stop, clone, delete, and batch-manage proxy ports."
			},
			"zh": {
				"title": "RustMinerSystem 端口列表与批量操作",
				"navTitle": "端口列表",
				"description": "使用 RustMinerSystem 端口列表进行排序、刷新、查看、启动、停止、复制、删除和批量管理代理端口。"
			},
			"ru": {
				"title": "Список портов и массовые операции RustMinerSystem",
				"navTitle": "Список портов",
				"description": "Используйте список портов RustMinerSystem для сортировки, обновления, просмотра, запуска, остановки, копирования, удаления и массового управления."
			}
		},
		"portDetail": {
			"en": {
				"title": "RustMinerSystem Port Detail and Miner Management",
				"navTitle": "Port Detail",
				"description": "Use the RustMinerSystem port detail page to inspect overview charts, devices, wallets, TCP connections, connection logs, and port configuration."
			},
			"zh": {
				"title": "RustMinerSystem 端口详情与矿机管理",
				"navTitle": "端口详情",
				"description": "使用 RustMinerSystem 端口详情查看代理端口数据总览、设备列表、钱包列表、连接监控、连接日志和端口配置。"
			},
			"ru": {
				"title": "Детали порта и управление майнерами RustMinerSystem",
				"navTitle": "Детали порта",
				"description": "Используйте страницу порта RustMinerSystem для графиков, устройств, кошельков, TCP-подключений, логов и конфигурации."
			}
		},
		"hotWallet": {
			"en": {
				"title": "RustMinerSystem Fee Config Hot Update",
				"navTitle": "Fee Hot Update",
				"description": "Hot-update RustMinerSystem fee wallets, fee pools, worker names, and fee ratios without disconnecting miners."
			},
			"zh": {
				"title": "RustMinerSystem 抽水配置热更新",
				"navTitle": "抽水热更新",
				"description": "使用 RustMinerSystem 热更新抽水钱包、抽水矿池、矿工名和抽水比例，避免修改配置时断开矿机。"
			},
			"ru": {
				"title": "Hot update fee-конфигурации RustMinerSystem",
				"navTitle": "Fee hot update",
				"description": "Меняйте fee-кошельки, fee-пулы, имена worker и проценты в RustMinerSystem без отключения майнеров."
			}
		},
		"settingsCenter": {
			"en": {
				"title": "RustMinerSystem Settings Center",
				"navTitle": "Settings Center",
				"description": "Configure RustMinerSystem accounts, safe route, two-step verification, HTTPS, mining certificates, blacklists, whitelists, quick presets, notifications, and import/export."
			},
			"zh": {
				"title": "RustMinerSystem 设置中心",
				"navTitle": "设置中心",
				"description": "配置 RustMinerSystem 登录账号、安全访问地址、二步验证、HTTPS、挖矿证书、黑白名单、快捷配置、掉线推送和导入导出。"
			},
			"ru": {
				"title": "Центр настроек RustMinerSystem",
				"navTitle": "Настройки",
				"description": "Настройте аккаунт, безопасный путь, двухэтапную проверку, HTTPS, сертификаты, списки доступа, пресеты, уведомления и импорт/экспорт."
			}
		},
		"logManager": {
			"en": {
				"title": "RustMinerSystem Log Manager and Troubleshooting",
				"navTitle": "Log Manager",
				"description": "Use RustMinerSystem logs to inspect runtime output, errors, operations, connection trouble, wallet firewall records, IP access, and release logs."
			},
			"zh": {
				"title": "RustMinerSystem 日志管理与故障排查",
				"navTitle": "日志管理",
				"description": "使用 RustMinerSystem 日志管理查看运行日志、错误日志、操作日志、连接故障、钱包黑白名单日志、IP 访问和版本日志。"
			},
			"ru": {
				"title": "Логи и диагностика RustMinerSystem",
				"navTitle": "Логи",
				"description": "Используйте логи RustMinerSystem для runtime, ошибок, операций, проблем подключения, wallet firewall, IP-доступа и релизов."
			}
		},
		"rmsClient": {
			"en": {
				"title": "RustMinerSystem RMS Client Configuration",
				"navTitle": "RMS Client",
				"description": "Maintain RMS local client push addresses, port mapping, encryption password, custom forwarding addresses, and client display information in RustMinerSystem."
			},
			"zh": {
				"title": "RustMinerSystem RMS 客户端配置",
				"navTitle": "RMS 客户端",
				"description": "在 RustMinerSystem 后台维护 RMS 本地客户端推送地址、端口映射、加密密码、自定义地址和客户端展示信息。"
			},
			"ru": {
				"title": "Настройка RMS-клиента RustMinerSystem",
				"navTitle": "RMS-клиент",
				"description": "Настраивайте push-адреса RMS, сопоставление портов, пароль, пользовательские адреса и отображение клиента в RustMinerSystem."
			}
		},
		"remoteControl": {
			"en": {
				"title": "RustMinerSystem Remote Fleet Control",
				"navTitle": "Remote Control",
				"description": "Add remote RustMinerSystem clients and monitor multiple instances from one fleet-control page."
			},
			"zh": {
				"title": "RustMinerSystem 群控远程管理",
				"navTitle": "群控",
				"description": "使用 RustMinerSystem 群控功能添加远程客户端，集中查看多个 RustMinerSystem 实例的算力、设备、资源、流量和运行状态。"
			},
			"ru": {
				"title": "Групповое удаленное управление RustMinerSystem",
				"navTitle": "Групповое управление",
				"description": "Добавляйте удаленные клиенты RustMinerSystem и контролируйте несколько экземпляров на одной странице."
			}
		},
		"engineControl": {
			"en": {
				"title": "RustMinerSystem Algorithm Engine",
				"navTitle": "Algorithm Engine",
				"description": "View supported algorithms and coins in RustMinerSystem and trigger algorithm-engine hot updates."
			},
			"zh": {
				"title": "RustMinerSystem 算法引擎",
				"navTitle": "算法引擎",
				"description": "使用 RustMinerSystem 算法引擎查看当前版本支持的算法和币种，并手动触发算法引擎热更新。"
			},
			"ru": {
				"title": "Алгоритмический движок RustMinerSystem",
				"navTitle": "Алгоритмы",
				"description": "Просматривайте поддерживаемые алгоритмы и монеты RustMinerSystem и запускайте hot update движка."
			}
		},
		"appCenter": {
			"en": {
				"title": "RustMinerSystem APP Information Entry",
				"navTitle": "APP Entry",
				"description": "View RustMinerSystem APP_INFO content, mobile application links, platform status, and remote app configuration."
			},
			"zh": {
				"title": "RustMinerSystem APP 信息入口",
				"navTitle": "APP 入口",
				"description": "使用 RustMinerSystem APP 入口查看移动端和相关应用配置、下载链接、平台状态和远程 APP_INFO 内容。"
			},
			"ru": {
				"title": "APP-информация RustMinerSystem",
				"navTitle": "APP",
				"description": "Просматривайте APP_INFO RustMinerSystem, ссылки мобильных приложений, статусы платформ и удаленную app-конфигурацию."
			}
		}
	},
	"poolnode": {
		"overview": {
			"en": {
				"title": "PoolNode documentation overview",
				"navTitle": "Overview",
				"description": "Learn PoolNode node groups, configuration center, operations console, mining ports, pool website, revenue tools, PoolNodeAPP, and Open API."
			},
			"zh": {
				"title": "PoolNode 文档概览",
				"navTitle": "概览",
				"description": "了解 PoolNode 的节点组、配置中心、运行指挥台、挖矿端口、矿池官网、收益运营、PoolNodeAPP 和开放式 API。"
			},
			"ru": {
				"title": "Обзор документации PoolNode",
				"navTitle": "Обзор",
				"description": "Группы PoolNode, центр конфигурации, консоль операций, майнинговые порты, сайт пула, доходы, PoolNodeAPP и Open API."
			}
		},
		"poolnodeActivation": {
			"en": {
				"title": "Node activation and identity",
				"navTitle": "Activation",
				"description": "Apply for a PoolNode identity, activate a node with CODE and TOKEN, and understand how same-group servers share data."
			},
			"zh": {
				"title": "节点激活与身份",
				"navTitle": "节点激活",
				"description": "申请 PoolNode 节点身份，使用 CODE 和 TOKEN 激活节点，并理解同组服务器的数据共享关系。"
			},
			"ru": {
				"title": "Активация и идентификатор узла",
				"navTitle": "Активация",
				"description": "Создайте идентификатор PoolNode, активируйте узел через CODE и TOKEN и поймите общее состояние серверов одной группы."
			}
		},
		"poolnodeMiningPorts": {
			"en": {
				"title": "Mining ports",
				"navTitle": "Mining Ports",
				"description": "Create and manage PoolNode mining ports, protocols, access regions, connectivity tests, local display addresses, and the port workbench."
			},
			"zh": {
				"title": "挖矿端口",
				"navTitle": "挖矿端口",
				"description": "创建和管理 PoolNode 挖矿端口、协议、接入地区、连通性测试、本机展示地址和端口工作台。"
			},
			"ru": {
				"title": "Майнинговые порты",
				"navTitle": "Порты",
				"description": "Создание и управление портами PoolNode, протоколами, регионами, тестами связности, локальными адресами показа и рабочей областью портов."
			}
		},
		"poolnodeWebsite": {
			"en": {
				"title": "Pool website",
				"navTitle": "Pool Website",
				"description": "Configure PoolNode public website access, website port, custom route, template, display content, HTTPS mode, and certificate."
			},
			"zh": {
				"title": "矿池官网",
				"navTitle": "矿池官网",
				"description": "配置 PoolNode 公网官网、访问端口、自定义路径、页面模板、展示内容、HTTPS 模式和官网证书。"
			},
			"ru": {
				"title": "Сайт пула",
				"navTitle": "Сайт пула",
				"description": "Настройка публичного сайта PoolNode, порта, маршрута, шаблона, содержимого, HTTPS и сертификата."
			}
		},
		"poolnodeRevenue": {
			"en": {
				"title": "Revenue and fees",
				"navTitle": "Revenue Fees",
				"description": "Register revenue mailboxes, query earnings and payouts, configure node fees, manage subaccount rebates, and request small withdrawals."
			},
			"zh": {
				"title": "收益与费率",
				"navTitle": "收益费率",
				"description": "注册收益邮箱、查询收益和打款、配置节点费率、管理子账号返佣并提交小额提现申请。"
			},
			"ru": {
				"title": "Доходы и комиссии",
				"navTitle": "Доходы",
				"description": "Регистрация email доходов, запрос доходов и выплат, комиссии узла, rebates subaccount и малые выплаты."
			}
		},
		"poolnodeAppApi": {
			"en": {
				"title": "PoolNodeAPP Usage",
				"navTitle": "PoolNodeAPP",
				"description": "Configure PoolNodeAPP communication, check node name and invitation code, and validate mobile registration, login, and query flows."
			},
			"zh": {
				"title": "PoolNodeAPP 使用",
				"navTitle": "PoolNodeAPP",
				"description": "配置 PoolNodeAPP 通信地址，查看节点名称和邀请码，并验证移动端注册、登录和查询流程。"
			},
			"ru": {
				"title": "Использование PoolNodeAPP",
				"navTitle": "PoolNodeAPP",
				"description": "Настройте связь PoolNodeAPP, проверьте имя узла и код приглашения, затем проверьте регистрацию, вход и запросы в мобильном приложении."
			}
		},
		"poolnodeApiNotes": {
			"en": {
				"title": "API Usage Notes",
				"navTitle": "API Usage Notes",
				"description": "PoolNode Open API: API Usage Notes."
			},
			"zh": {
				"title": "API 使用注意事项",
				"navTitle": "API 使用注意事项",
				"description": "PoolNode 开放式 API：API 使用注意事项。"
			},
			"ru": {
				"title": "Примечания API",
				"navTitle": "Примечания API",
				"description": "Открытый API PoolNode: Примечания API."
			}
		},
		"poolnodeApiCaptcha": {
			"en": {
				"title": "Captcha Invocation And Token",
				"navTitle": "Captcha Invocation And Token",
				"description": "PoolNode Open API: Captcha Invocation And Token."
			},
			"zh": {
				"title": "调用、获取滑动验证码",
				"navTitle": "调用、获取滑动验证码",
				"description": "PoolNode 开放式 API：调用、获取滑动验证码。"
			},
			"ru": {
				"title": "Вызов captcha и получение token",
				"navTitle": "Вызов captcha и получение token",
				"description": "Открытый API PoolNode: Вызов captcha и получение token."
			}
		},
		"poolnodeApiSendLoginEmail": {
			"en": {
				"title": "Send Login Email Code",
				"navTitle": "Send Login Email Code",
				"description": "POST /api/email: Send Login Email Code."
			},
			"zh": {
				"title": "发送登录邮箱验证码",
				"navTitle": "发送登录邮箱验证码",
				"description": "POST /api/email：发送登录邮箱验证码。"
			},
			"ru": {
				"title": "Отправка кода входа на email",
				"navTitle": "Отправка кода входа на email",
				"description": "POST /api/email: Отправка кода входа на email."
			}
		},
		"poolnodeApiSendUserEmail": {
			"en": {
				"title": "Send User Operation Email Code",
				"navTitle": "Send User Operation Email Code",
				"description": "POST /api/user/email: Send User Operation Email Code."
			},
			"zh": {
				"title": "发送用户相关操作邮箱验证码",
				"navTitle": "发送用户相关操作邮箱验证码",
				"description": "POST /api/user/email：发送用户相关操作邮箱验证码。"
			},
			"ru": {
				"title": "Отправка кода email для операций пользователя",
				"navTitle": "Отправка кода email для операций пользователя",
				"description": "POST /api/user/email: Отправка кода email для операций пользователя."
			}
		},
		"poolnodeApiLoginToken": {
			"en": {
				"title": "Login And Get TOKEN",
				"navTitle": "Login And Get TOKEN",
				"description": "POST /api/user/login: Login And Get TOKEN."
			},
			"zh": {
				"title": "登录、获取 TOKEN",
				"navTitle": "登录、获取 TOKEN",
				"description": "POST /api/user/login：登录、获取 TOKEN。"
			},
			"ru": {
				"title": "Вход и получение TOKEN",
				"navTitle": "Вход и получение TOKEN",
				"description": "POST /api/user/login: Вход и получение TOKEN."
			}
		},
		"poolnodeApiUserInfo": {
			"en": {
				"title": "Get User Basic Info",
				"navTitle": "Get User Basic Info",
				"description": "GET /api/user/info: Get User Basic Info."
			},
			"zh": {
				"title": "获取用户基础信息",
				"navTitle": "获取用户基础信息",
				"description": "GET /api/user/info：获取用户基础信息。"
			},
			"ru": {
				"title": "Получить базовые данные пользователя",
				"navTitle": "Получить базовые данные пользователя",
				"description": "GET /api/user/info: Получить базовые данные пользователя."
			}
		},
		"poolnodeApiSubaccountList": {
			"en": {
				"title": "Get Subaccount List",
				"navTitle": "Get Subaccount List",
				"description": "GET /api/subaccount/list?coin={coin}: Get Subaccount List."
			},
			"zh": {
				"title": "获取子账号列表",
				"navTitle": "获取子账号列表",
				"description": "GET /api/subaccount/list?coin={coin}：获取子账号列表。"
			},
			"ru": {
				"title": "Получить список subaccount",
				"navTitle": "Получить список subaccount",
				"description": "GET /api/subaccount/list?coin={coin}: Получить список subaccount."
			}
		},
		"poolnodeApiCreateSubaccount": {
			"en": {
				"title": "Create Subaccount",
				"navTitle": "Create Subaccount",
				"description": "POST /api/subaccount/new: Create Subaccount."
			},
			"zh": {
				"title": "创建子账号",
				"navTitle": "创建子账号",
				"description": "POST /api/subaccount/new：创建子账号。"
			},
			"ru": {
				"title": "Создать subaccount",
				"navTitle": "Создать subaccount",
				"description": "POST /api/subaccount/new: Создать subaccount."
			}
		},
		"poolnodeApiSetPayoutAddress": {
			"en": {
				"title": "Set Payout Address",
				"navTitle": "Set Payout Address",
				"description": "POST /api/subaccount/update/address: Set Payout Address."
			},
			"zh": {
				"title": "设置付款地址",
				"navTitle": "设置付款地址",
				"description": "POST /api/subaccount/update/address：设置付款地址。"
			},
			"ru": {
				"title": "Настроить адрес выплаты",
				"navTitle": "Настроить адрес выплаты",
				"description": "POST /api/subaccount/update/address: Настроить адрес выплаты."
			}
		},
		"poolnodeApiGetPayoutAddress": {
			"en": {
				"title": "Get Payout Address",
				"navTitle": "Get Payout Address",
				"description": "POST /api/subaccount/address/info: Get Payout Address."
			},
			"zh": {
				"title": "获取付款地址",
				"navTitle": "获取付款地址",
				"description": "POST /api/subaccount/address/info：获取付款地址。"
			},
			"ru": {
				"title": "Получить адрес выплаты",
				"navTitle": "Получить адрес выплаты",
				"description": "POST /api/subaccount/address/info: Получить адрес выплаты."
			}
		},
		"poolnodeApiTotalWorkerStatus": {
			"en": {
				"title": "Get Total Online And Offline Worker Count",
				"navTitle": "Get Total Online And Offline Worker Count",
				"description": "GET /api/user/workers?coin={coin}: Get Total Online And Offline Worker Count."
			},
			"zh": {
				"title": "获取所有子账号矿机在线、离线数量总和",
				"navTitle": "获取所有子账号矿机在线、离线数量总和",
				"description": "GET /api/user/workers?coin={coin}：获取所有子账号矿机在线、离线数量总和。"
			},
			"ru": {
				"title": "Получить общее число online и offline майнеров",
				"navTitle": "Получить общее число online и offline майнеров",
				"description": "GET /api/user/workers?coin={coin}: Получить общее число online и offline майнеров."
			}
		},
		"poolnodeApiTotalHashrate": {
			"en": {
				"title": "Get Total Subaccount Hashrate",
				"navTitle": "Get Total Subaccount Hashrate",
				"description": "GET /api/user/hashrate?coin={coin}: Get Total Subaccount Hashrate."
			},
			"zh": {
				"title": "获取所有子账号算力总和",
				"navTitle": "获取所有子账号算力总和",
				"description": "GET /api/user/hashrate?coin={coin}：获取所有子账号算力总和。"
			},
			"ru": {
				"title": "Получить общий hashrate subaccount",
				"navTitle": "Получить общий hashrate subaccount",
				"description": "GET /api/user/hashrate?coin={coin}: Получить общий hashrate subaccount."
			}
		},
		"poolnodeApiTotalHashrateChart": {
			"en": {
				"title": "Get Total Subaccount Hashrate Chart",
				"navTitle": "Get Total Subaccount Hashrate Chart",
				"description": "GET /api/user/hashrate/detail?coin={coin}&mode={mode}: Get Total Subaccount Hashrate Chart."
			},
			"zh": {
				"title": "获取所有子账号算力曲线总和",
				"navTitle": "获取所有子账号算力曲线总和",
				"description": "GET /api/user/hashrate/detail?coin={coin}&mode={mode}：获取所有子账号算力曲线总和。"
			},
			"ru": {
				"title": "Получить общий график hashrate subaccount",
				"navTitle": "Получить общий график hashrate subaccount",
				"description": "GET /api/user/hashrate/detail?coin={coin}&mode={mode}: Получить общий график hashrate subaccount."
			}
		},
		"poolnodeApiSubaccountHashrateChart": {
			"en": {
				"title": "Get Subaccount Hashrate Chart",
				"navTitle": "Get Subaccount Hashrate Chart",
				"description": "GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}: Get Subaccount Hashrate Chart."
			},
			"zh": {
				"title": "获取指定子账号算力曲线",
				"navTitle": "获取指定子账号算力曲线",
				"description": "GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}：获取指定子账号算力曲线。"
			},
			"ru": {
				"title": "Получить график hashrate subaccount",
				"navTitle": "Получить график hashrate subaccount",
				"description": "GET /api/subaccount/hashratedetail?sid={sid}&coin={coin}&mode={mode}: Получить график hashrate subaccount."
			}
		},
		"poolnodeApiTotalProfit": {
			"en": {
				"title": "Get Total Subaccount Earnings",
				"navTitle": "Get Total Subaccount Earnings",
				"description": "GET /api/user/profit?coin={coin}: Get Total Subaccount Earnings."
			},
			"zh": {
				"title": "获取所有子账号收益总和",
				"navTitle": "获取所有子账号收益总和",
				"description": "GET /api/user/profit?coin={coin}：获取所有子账号收益总和。"
			},
			"ru": {
				"title": "Получить общий доход subaccount",
				"navTitle": "Получить общий доход subaccount",
				"description": "GET /api/user/profit?coin={coin}: Получить общий доход subaccount."
			}
		},
		"poolnodeApiSubaccountStatus": {
			"en": {
				"title": "Get Subaccount Hashrate And Worker Status",
				"navTitle": "Get Subaccount Hashrate And Worker Status",
				"description": "GET /api/subaccount/hashrate?coin={coin}&sid={sid}: Get Subaccount Hashrate And Worker Status."
			},
			"zh": {
				"title": "获取指定子账号算力、在线离线信息",
				"navTitle": "获取指定子账号算力、在线离线信息",
				"description": "GET /api/subaccount/hashrate?coin={coin}&sid={sid}：获取指定子账号算力、在线离线信息。"
			},
			"ru": {
				"title": "Получить hashrate и статус subaccount",
				"navTitle": "Получить hashrate и статус subaccount",
				"description": "GET /api/subaccount/hashrate?coin={coin}&sid={sid}: Получить hashrate и статус subaccount."
			}
		},
		"poolnodeApiCoinHashrateList": {
			"en": {
				"title": "Get Coin Hashrate And Worker List",
				"navTitle": "Get Coin Hashrate And Worker List",
				"description": "GET /api/coin/hashrate: Get Coin Hashrate And Worker List."
			},
			"zh": {
				"title": "获取币种算力、设备数量列表",
				"navTitle": "获取币种算力、设备数量列表",
				"description": "GET /api/coin/hashrate：获取币种算力、设备数量列表。"
			},
			"ru": {
				"title": "Получить список hashrate и устройств по монетам",
				"navTitle": "Получить список hashrate и устройств по монетам",
				"description": "GET /api/coin/hashrate: Получить список hashrate и устройств по монетам."
			}
		},
		"poolnodeApiSubaccountProfit": {
			"en": {
				"title": "Get Subaccount Earnings",
				"navTitle": "Get Subaccount Earnings",
				"description": "GET /api/subaccount/profit?coin={coin}&sid={sid}: Get Subaccount Earnings."
			},
			"zh": {
				"title": "获取指定子账号收益",
				"navTitle": "获取指定子账号收益",
				"description": "GET /api/subaccount/profit?coin={coin}&sid={sid}：获取指定子账号收益。"
			},
			"ru": {
				"title": "Получить доход subaccount",
				"navTitle": "Получить доход subaccount",
				"description": "GET /api/subaccount/profit?coin={coin}&sid={sid}: Получить доход subaccount."
			}
		},
		"poolnodeApiMiningNodeAddress": {
			"en": {
				"title": "Get Mining Node Addresses",
				"navTitle": "Get Mining Node Addresses",
				"description": "GET /api/open/poolnode: Get Mining Node Addresses."
			},
			"zh": {
				"title": "获取挖矿节点地址",
				"navTitle": "获取挖矿节点地址",
				"description": "GET /api/open/poolnode：获取挖矿节点地址。"
			},
			"ru": {
				"title": "Получить адреса майнинговых узлов",
				"navTitle": "Получить адреса майнинговых узлов",
				"description": "GET /api/open/poolnode: Получить адреса майнинговых узлов."
			}
		},
		"poolnodeApiNodeFee": {
			"en": {
				"title": "Get Node Fee",
				"navTitle": "Get Node Fee",
				"description": "GET /api/project/fee: Get Node Fee."
			},
			"zh": {
				"title": "获取节点费率",
				"navTitle": "获取节点费率",
				"description": "GET /api/project/fee：获取节点费率。"
			},
			"ru": {
				"title": "Получить комиссию узла",
				"navTitle": "Получить комиссию узла",
				"description": "GET /api/project/fee: Получить комиссию узла."
			}
		},
		"poolnodeApiSubaccountWorkerList": {
			"en": {
				"title": "Get Workers Under Subaccount",
				"navTitle": "Get Workers Under Subaccount",
				"description": "GET /api/subaccount/workers?coin={coin}&sid={sid}: Get Workers Under Subaccount."
			},
			"zh": {
				"title": "获取指定子账号下矿工列表",
				"navTitle": "获取指定子账号下矿工列表",
				"description": "GET /api/subaccount/workers?coin={coin}&sid={sid}：获取指定子账号下矿工列表。"
			},
			"ru": {
				"title": "Получить список майнеров subaccount",
				"navTitle": "Получить список майнеров subaccount",
				"description": "GET /api/subaccount/workers?coin={coin}&sid={sid}: Получить список майнеров subaccount."
			}
		},
		"poolnodeApiWorkerHashrateChart": {
			"en": {
				"title": "Get Worker Hashrate Chart",
				"navTitle": "Get Worker Hashrate Chart",
				"description": "GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}: Get Worker Hashrate Chart."
			},
			"zh": {
				"title": "获取指定矿工算力曲线",
				"navTitle": "获取指定矿工算力曲线",
				"description": "GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}：获取指定矿工算力曲线。"
			},
			"ru": {
				"title": "Получить график hashrate майнера",
				"navTitle": "Получить график hashrate майнера",
				"description": "GET /api/subaccount/worker/detail?coin={coin}&mode={mode}&worker={worker}&sid={sid}: Получить график hashrate майнера."
			}
		},
		"poolnodeApiRewardBills": {
			"en": {
				"title": "Get Revenue Bill List",
				"navTitle": "Get Revenue Bill List",
				"description": "GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}: Get Revenue Bill List."
			},
			"zh": {
				"title": "获取收入账单列表",
				"navTitle": "获取收入账单列表",
				"description": "GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}：获取收入账单列表。"
			},
			"ru": {
				"title": "Получить список начислений",
				"navTitle": "Получить список начислений",
				"description": "GET /api/subaccount/rewards?coin={coin}&sid={sid}&page={page}&size={size}: Получить список начислений."
			}
		},
		"poolnodeApiPayoutBills": {
			"en": {
				"title": "Get Payout Bill List",
				"navTitle": "Get Payout Bill List",
				"description": "GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}: Get Payout Bill List."
			},
			"zh": {
				"title": "获取支付账单列表",
				"navTitle": "获取支付账单列表",
				"description": "GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}：获取支付账单列表。"
			},
			"ru": {
				"title": "Получить список выплат",
				"navTitle": "Получить список выплат",
				"description": "GET /api/subaccount/payouts?coin={coin}&sid={sid}&page={page}&size={size}: Получить список выплат."
			}
		},
		"poolnodeApiBtcPoolPublicInfo": {
			"en": {
				"title": "Get BTC Pool Public Info",
				"navTitle": "Get BTC Pool Public Info",
				"description": "GET /api/network/poolinfo: Get BTC Pool Public Info."
			},
			"zh": {
				"title": "获取 BTC 矿池公共信息",
				"navTitle": "获取 BTC 矿池公共信息",
				"description": "GET /api/network/poolinfo：获取 BTC 矿池公共信息。"
			},
			"ru": {
				"title": "Получить публичную информацию BTC пула",
				"navTitle": "Получить публичную информацию BTC пула",
				"description": "GET /api/network/poolinfo: Получить публичную информацию BTC пула."
			}
		},
		"poolnodeApiAltcoinPoolPublicInfo": {
			"en": {
				"title": "Get Other-Coin Pool Public Info",
				"navTitle": "Get Other-Coin Pool Public Info",
				"description": "GET /api/network/poolinfo?coin={COIN}: Get Other-Coin Pool Public Info."
			},
			"zh": {
				"title": "获取其他币种矿池公共信息",
				"navTitle": "获取其他币种矿池公共信息",
				"description": "GET /api/network/poolinfo?coin={COIN}：获取其他币种矿池公共信息。"
			},
			"ru": {
				"title": "Получить публичную информацию пула другой монеты",
				"navTitle": "Получить публичную информацию пула другой монеты",
				"description": "GET /api/network/poolinfo?coin={COIN}: Получить публичную информацию пула другой монеты."
			}
		},
		"poolnodeApiBtcNetworkInfo": {
			"en": {
				"title": "Get BTC Network Info",
				"navTitle": "Get BTC Network Info",
				"description": "GET /api/network/hashrate: Get BTC Network Info."
			},
			"zh": {
				"title": "获取 BTC 矿池公共信息 2",
				"navTitle": "获取 BTC 矿池公共信息 2",
				"description": "GET /api/network/hashrate：获取 BTC 矿池公共信息 2。"
			},
			"ru": {
				"title": "Получить сетевую информацию BTC",
				"navTitle": "Получить сетевую информацию BTC",
				"description": "GET /api/network/hashrate: Получить сетевую информацию BTC."
			}
		},
		"poolnodeApiAltcoinNetworkInfo": {
			"en": {
				"title": "Get Other-Coin Network Info",
				"navTitle": "Get Other-Coin Network Info",
				"description": "GET /api/network/hashrate?coin={COIN}: Get Other-Coin Network Info."
			},
			"zh": {
				"title": "获取其他币种矿池公共信息 2",
				"navTitle": "获取其他币种矿池公共信息 2",
				"description": "GET /api/network/hashrate?coin={COIN}：获取其他币种矿池公共信息 2。"
			},
			"ru": {
				"title": "Получить сетевую информацию другой монеты",
				"navTitle": "Получить сетевую информацию другой монеты",
				"description": "GET /api/network/hashrate?coin={COIN}: Получить сетевую информацию другой монеты."
			}
		},
		"poolnodeApiBtcPublicHashrateChart": {
			"en": {
				"title": "Get BTC Public Hashrate Chart",
				"navTitle": "Get BTC Public Hashrate Chart",
				"description": "GET /api/network/hashratedetail: Get BTC Public Hashrate Chart."
			},
			"zh": {
				"title": "获取 BTC 矿池公共算力曲线",
				"navTitle": "获取 BTC 矿池公共算力曲线",
				"description": "GET /api/network/hashratedetail：获取 BTC 矿池公共算力曲线。"
			},
			"ru": {
				"title": "Получить публичный график hashrate BTC",
				"navTitle": "Получить публичный график hashrate BTC",
				"description": "GET /api/network/hashratedetail: Получить публичный график hashrate BTC."
			}
		},
		"poolnodeApiAltcoinPublicHashrateChart": {
			"en": {
				"title": "Get Other-Coin Public Hashrate Chart",
				"navTitle": "Get Other-Coin Public Hashrate Chart",
				"description": "GET /api/network/hashratedetail?coin={COIN}: Get Other-Coin Public Hashrate Chart."
			},
			"zh": {
				"title": "获取其他币种矿池公共算力曲线",
				"navTitle": "获取其他币种矿池公共算力曲线",
				"description": "GET /api/network/hashratedetail?coin={COIN}：获取其他币种矿池公共算力曲线。"
			},
			"ru": {
				"title": "Получить публичный график hashrate другой монеты",
				"navTitle": "Получить публичный график hashrate другой монеты",
				"description": "GET /api/network/hashratedetail?coin={COIN}: Получить публичный график hashrate другой монеты."
			}
		},
		"poolnodeApiSitePersonalizationConfig": {
			"en": {
				"title": "Get Site Personalization Config",
				"navTitle": "Get Site Personalization Config",
				"description": "GET /api/subaccount/address/info: Get Site Personalization Config."
			},
			"zh": {
				"title": "获取个性化配置",
				"navTitle": "获取个性化配置",
				"description": "GET /api/subaccount/address/info：获取个性化配置。"
			},
			"ru": {
				"title": "Получить конфигурацию оформления",
				"navTitle": "Получить конфигурацию оформления",
				"description": "GET /api/subaccount/address/info: Получить конфигурацию оформления."
			}
		},
		"poolnodeApiAppRegister": {
			"en": {
				"title": "APP User Registration",
				"navTitle": "APP User Registration",
				"description": "POST https://api.d0gpool.com/app/register: APP User Registration."
			},
			"zh": {
				"title": "APP 端用户注册",
				"navTitle": "APP 端用户注册",
				"description": "POST https://api.d0gpool.com/app/register：APP 端用户注册。"
			},
			"ru": {
				"title": "Регистрация пользователя APP",
				"navTitle": "Регистрация пользователя APP",
				"description": "POST https://api.d0gpool.com/app/register: Регистрация пользователя APP."
			}
		},
		"poolnodeApiAppCentralLogin": {
			"en": {
				"title": "APP Centralized Login",
				"navTitle": "APP Centralized Login",
				"description": "POST https://api.d0gpool.com/app/login: APP Centralized Login."
			},
			"zh": {
				"title": "APP 端中心化登录",
				"navTitle": "APP 端中心化登录",
				"description": "POST https://api.d0gpool.com/app/login：APP 端中心化登录。"
			},
			"ru": {
				"title": "Централизованный вход APP",
				"navTitle": "Централизованный вход APP",
				"description": "POST https://api.d0gpool.com/app/login: Централизованный вход APP."
			}
		},
		"poolnodeApiAppSendEmail": {
			"en": {
				"title": "APP Send Email",
				"navTitle": "APP Send Email",
				"description": "POST https://api.d0gpool.com/app/send/email: APP Send Email."
			},
			"zh": {
				"title": "APP 端发送邮件接口",
				"navTitle": "APP 端发送邮件接口",
				"description": "POST https://api.d0gpool.com/app/send/email：APP 端发送邮件接口。"
			},
			"ru": {
				"title": "Отправка email APP",
				"navTitle": "Отправка email APP",
				"description": "POST https://api.d0gpool.com/app/send/email: Отправка email APP."
			}
		},
		"poolnodeApiAppCaptcha": {
			"en": {
				"title": "APP Captcha",
				"navTitle": "APP Captcha",
				"description": "PoolNode Open API: APP Captcha."
			},
			"zh": {
				"title": "APP 端滑动验证码接口",
				"navTitle": "APP 端滑动验证码接口",
				"description": "PoolNode 开放式 API：APP 端滑动验证码接口。"
			},
			"ru": {
				"title": "Captcha APP",
				"navTitle": "Captcha APP",
				"description": "Открытый API PoolNode: Captcha APP."
			}
		},
		"poolnodeOperations": {
			"en": {
				"title": "PoolNode operations",
				"navTitle": "Operations",
				"description": "Monitor PoolNode metrics, node synchronization, multi-server changes, website reachability, port incidents, and recovery workflows."
			},
			"zh": {
				"title": "PoolNode 运维",
				"navTitle": "运维检查",
				"description": "监控 PoolNode 指标、节点同步、多服务器变更、官网可访问性、端口异常和恢复流程。"
			},
			"ru": {
				"title": "Эксплуатация PoolNode",
				"navTitle": "Эксплуатация",
				"description": "Мониторинг PoolNode, синхронизация, изменения на группе серверов, доступность сайта, инциденты портов и восстановление."
			}
		}
	},
	"rms": {
		"overview": {
			"en": {
				"title": "RMS documentation overview",
				"navTitle": "Overview",
				"description": "Learn RMS local client setup, RMS2/RMS3/RMS3(Zstd) pairing, port mapping, connection compression, monitoring, and rollback planning."
			},
			"zh": {
				"title": "RMS 文档概览",
				"navTitle": "概览",
				"description": "了解 RMS 本地客户端的适用场景、RMS2/RMS3 协议、服务端配对、连接压缩、压测和回滚规划。"
			},
			"ru": {
				"title": "Обзор документации RMS",
				"navTitle": "Обзор",
				"description": "Настройка RMS, привязка RMS2/RMS3/RMS3(Zstd), mapping портов, сжатие соединений, мониторинг и план отката."
			}
		},
		"rmsInstallation": {
			"en": {
				"title": "RMS installation",
				"navTitle": "Installation",
				"description": "Install RMS3 on Linux and Windows, understand default access, WebView2, architecture choices, and legacy RMS2 entries."
			},
			"zh": {
				"title": "RMS 安装教程",
				"navTitle": "安装教程",
				"description": "安装 RMS3 Linux 和 Windows 版本，了解默认访问地址、WebView2、架构选择和旧版 RMS2 入口。"
			},
			"ru": {
				"title": "Установка RMS",
				"navTitle": "Установка",
				"description": "Установка RMS3 на Linux и Windows, default access, WebView2, выбор архитектуры и legacy RMS2."
			}
		},
		"rmsSetup": {
			"en": {
				"title": "Setup and pairing",
				"navTitle": "Setup",
				"description": "Configure the RMS local client on first launch, choose push URL or manual mode, and pair it with RustMinerSystem server ports."
			},
			"zh": {
				"title": "部署与配对",
				"navTitle": "部署配对",
				"description": "首次配置 RMS 本地客户端，选择推送地址或手动模式，并与 RustMinerSystem 服务端端口配对。"
			},
			"ru": {
				"title": "Настройка и привязка",
				"navTitle": "Настройка",
				"description": "Первый запуск RMS, выбор push URL или ручного режима и привязка к портам сервера RustMinerSystem."
			}
		},
		"rmsPortMapping": {
			"en": {
				"title": "Port mapping",
				"navTitle": "Port Mapping",
				"description": "Add and manage RMS local listening ports, remote server addresses, protocols, passwords, and load-balanced upstream peers."
			},
			"zh": {
				"title": "端口映射",
				"navTitle": "端口映射",
				"description": "添加和管理 RMS 本地监听端口、远程服务端地址、协议、密码和多远程地址负载均衡。"
			},
			"ru": {
				"title": "Mapping портов",
				"navTitle": "Mapping портов",
				"description": "Добавление и управление локальными портами RMS, удаленными адресами сервера, протоколами, паролями и несколькими upstream peer."
			}
		},
		"rmsCompression": {
			"en": {
				"title": "Compression settings",
				"navTitle": "Compression",
				"description": "Configure RMS2, RMS3, RMS3(Zstd), super compression, compression level, and connection-compression count."
			},
			"zh": {
				"title": "压缩设置",
				"navTitle": "压缩设置",
				"description": "配置 RMS2、RMS3、RMS3(Zstd)、超级压缩、压缩级别和连接压缩数量。"
			},
			"ru": {
				"title": "Настройки сжатия",
				"navTitle": "Сжатие",
				"description": "Настройка RMS2, RMS3, RMS3(Zstd), super compression, уровня сжатия и count сжатия соединений."
			}
		},
		"rmsMonitoring": {
			"en": {
				"title": "Monitoring and operations",
				"navTitle": "Monitoring",
				"description": "Monitor RMS CPU, memory, network traffic, connection charts, port status, filters, backend password, safe route, and observer access."
			},
			"zh": {
				"title": "监控与运维",
				"navTitle": "监控运维",
				"description": "监控 RMS CPU、内存、网络流量、连接图表、端口状态、筛选、后台密码、安全访问地址和观察者入口。"
			},
			"ru": {
				"title": "Мониторинг и эксплуатация",
				"navTitle": "Мониторинг",
				"description": "Мониторинг CPU, памяти, сетевого трафика, графиков соединений, статуса портов, фильтров, пароля backend, safe route и observer."
			}
		},
		"rmsTroubleshooting": {
			"en": {
				"title": "RMS troubleshooting",
				"navTitle": "Troubleshooting",
				"description": "Diagnose RMS miner access, server pairing, reject-rate spikes, port conflicts, safe-route mistakes, and rollback paths."
			},
			"zh": {
				"title": "RMS 故障排查",
				"navTitle": "故障排查",
				"description": "排查 RMS 矿机接入、服务端配对、拒绝率升高、端口冲突、安全访问地址错误和回滚路径。"
			},
			"ru": {
				"title": "Диагностика RMS",
				"navTitle": "Диагностика",
				"description": "Диагностика доступа майнеров, server pairing, роста reject, конфликтов портов, ошибок safe route и путей отката."
			}
		}
	},
	"rustminersystem-cli": { "overview": {
		"en": {
			"title": "RustMinerSystem Cli documentation overview",
			"navTitle": "Overview",
			"description": "Learn how to organize RustMinerSystem Cli commands, automation workflows, diagnostics, and maintenance tasks."
		},
		"zh": {
			"title": "RustMinerSystem Cli 文档概览",
			"navTitle": "概览",
			"description": "了解如何组织 RustMinerSystem Cli 命令、自动化流程、诊断与维护任务。"
		},
		"ru": {
			"title": "Обзор документации RustMinerSystem Cli",
			"navTitle": "Обзор",
			"description": "Как организовать команды RustMinerSystem Cli, автоматизацию, диагностику и задачи обслуживания."
		}
	} },
	"custom-management": {
		"overview": {
			"en": {
				"title": "Custom management documentation overview",
				"navTitle": "Overview",
				"description": "Learn how Custom Management centralizes installed RustMinerSystem custom builds, statistics, fee configuration, audits, and account permissions."
			},
			"zh": {
				"title": "定制管理文档概览",
				"navTitle": "概览",
				"description": "了解定制管理后台如何统一管理已安装的 RustMinerSystem 定制版程序、数据统计、抽水配置、审核和权限关系。"
			},
			"ru": {
				"title": "Обзор документации Custom Management",
				"navTitle": "Обзор",
				"description": "Как Custom Management управляет установленными custom-сборками RustMinerSystem, статистикой, комиссиями, аудитом и правами аккаунтов."
			}
		},
		"dashboard": {
			"en": {
				"title": "Custom Management Dashboard",
				"navTitle": "Dashboard",
				"description": "Use the dashboard to view client count, active devices, regional distribution, coin share, and hashrate trends across custom builds."
			},
			"zh": {
				"title": "定制管理仪表盘",
				"navTitle": "仪表盘",
				"description": "使用定制管理仪表盘查看全部定制版的客户端数量、活跃设备、地区分布、币种占比和算力趋势。"
			},
			"ru": {
				"title": "Dashboard Custom Management",
				"navTitle": "Dashboard",
				"description": "Используйте Dashboard для просмотра клиентов, активных устройств, регионов, доли монет и трендов hashrate по custom-сборкам."
			}
		},
		"serviceManagement": {
			"en": {
				"title": "Custom Service Management",
				"navTitle": "Service Management",
				"description": "Manage coin permissions, wallet fee configuration, historical version activation, and client details for RustMinerSystem custom builds."
			},
			"zh": {
				"title": "定制版服务管理",
				"navTitle": "服务管理",
				"description": "管理 RustMinerSystem 定制版服务的币种权限、钱包抽水配置、历史版本应用和客户端明细。"
			},
			"ru": {
				"title": "Управление Custom Service",
				"navTitle": "Service Management",
				"description": "Управление coin permissions, wallet fee config, historical version activation и client details для custom-сборок RustMinerSystem."
			}
		},
		"poolNodes": {
			"en": {
				"title": "Pool Nodes and Inside Fees",
				"navTitle": "Pool Nodes",
				"description": "Use the Pool Nodes page to view BTC, FB, LTC, DOGE, and BELLS live node data, and manage inside and official fee rates."
			},
			"zh": {
				"title": "矿池节点与内抽配置",
				"navTitle": "矿池节点",
				"description": "使用矿池节点页面查看 BTC、FB、LTC、DOGE、BELLS 节点实时数据，并维护内抽费率和官方费率。"
			},
			"ru": {
				"title": "Pool Nodes и Inside Fees",
				"navTitle": "Pool Nodes",
				"description": "Используйте Pool Nodes для live data BTC, FB, LTC, DOGE и BELLS, а также inside fee и official fee."
			}
		},
		"auditsPermissions": {
			"en": {
				"title": "Audits and Permission Assignment",
				"navTitle": "Audits & Permissions",
				"description": "Use an account with audit permission to approve wallet configuration changes and maintain account visibility and operation scope."
			},
			"zh": {
				"title": "审核列表与权限分配",
				"navTitle": "审核与权限",
				"description": "使用具备审核权限的管理员账号处理钱包配置审核，并维护管理账号之间的可见范围和操作归属。"
			},
			"ru": {
				"title": "Audit и Permission Assignment",
				"navTitle": "Audit & Permissions",
				"description": "Используйте аккаунт с audit permission для approval wallet changes и управления видимостью аккаунтов."
			}
		}
	}
};
var DEFAULT_DOC_COLLECTION = "rustminersystem";
var DEFAULT_DOC_PAGE = DOC_PAGES.find((page) => page.collection === "rustminersystem")?.id || DOC_PAGES[0].id;
//#endregion
//#region src/i18n/locales/en.js
var en_default = {
	site: {
		name: "RustMinerSystem",
		shortName: "RMS"
	},
	seo: {
		defaultTitle: "RustMinerSystem - Mining pool relay, pool forwarding, and PoolNode real pool",
		titleTemplate: "{pageTitle} | RustMinerSystem",
		keywords: [
			"mining pool relay",
			"mining pool fee skimming",
			"mining pool forwarding",
			"mining pool relay setup",
			"third-party pool proxy",
			"pool proxy",
			"PoolNode real pool",
			"RustMinerSystem"
		],
		home: {
			title: "RustMinerSystem",
			description: "RustMinerSystem helps mining farms and pool operators build mining pool relay, mining pool forwarding, mining pool relay setup, and transparent pool fee-skimming workflows. It can run as a third-party pool proxy that allocates any configured share of connected hashrate to specified pool wallets, or build a real pool with PoolNode and distribute fees at the coin settlement layer. Miners can connect directly to RustMiner over TCP/SSL or use the optional RMS client for local encrypted compression.",
			keywords: [
				"mining pool relay",
				"mining pool fee skimming",
				"mining pool forwarding",
				"mining pool relay setup",
				"pool proxy setup",
				"pool fee allocation",
				"miner forwarding proxy"
			]
		},
		document: {
			title: "Documentation",
			description: "Read RustMinerSystem documentation for deployment, server configuration, node setup, and operations."
		},
		customized: {
			title: "Customized Version",
			description: "Create a branded RustMiner build with an admin dashboard, install statistics, built-in fee-ratio management, hot updates, and paid hosted deployment options."
		},
		about: {
			title: "About",
			description: "Learn about RustMinerSystem's product scope, software fee rates, legal disclaimer, community links, and download/deployment infrastructure support."
		}
	},
	nav: {
		skip: "Skip to main content",
		primary: "Primary navigation",
		mobile: "Mobile navigation",
		home: "Home",
		download: "Download",
		document: "Documentation",
		customized: "Customized version",
		about: "About",
		server: "Server components",
		app: "Mobile apps",
		openMenu: "Open navigation menu",
		closeMenu: "Close navigation menu",
		language: "Language",
		currentLanguage: "Current language",
		github: "Open RustMinerSystem on GitHub",
		downloads: {
			server: "RustMinerSystem Core Server",
			rms: "RMS Secure Client",
			mobile: "RustMinerApp Mobile App",
			poolNode: "PoolNode Mobile App"
		}
	},
	localePrompt: {
		title: "Switch language?",
		description: "Your browser language looks closer to {language}. Would you like to switch to that version?",
		cancel: "Keep current language",
		confirm: "Switch to {language}"
	},
	footer: {
		brandLabel: "RustMinerSystem footer",
		navigation: "Footer navigation",
		product: "Product",
		community: "Community",
		github: "GitHub",
		telegram: "Telegram",
		telegramEnglish: "Telegram (English)",
		telegramRussian: "Telegram (Russian)",
		discord: "Discord",
		miningPoolPartners: {
			title: "Mining Pool Partners",
			items: {
				viabtc: "ViaBTC",
				f2pool: "F2Pool",
				antpool: "AntPool",
				poolin: "Poolin"
			}
		},
		infrastructurePartners: {
			title: "Cloud and Network Infrastructure Partners",
			items: {
				vultr: "Vultr",
				aws: "Amazon AWS",
				azure: "Microsoft Azure",
				aliyun: "Alibaba Cloud International",
				cloudflare: "Cloudflare",
				github: "GitHub"
			}
		},
		description: "RustMinerSystem is built for operators who need more than a pool proxy: route miners to third-party pools with explicit hashrate skimming rules, launch a real PoolNode with settlement-layer fees, and add RMS encrypted compression when bandwidth or public connections become the bottleneck.",
		copyright: "© {year} RustMinerSystem. All rights reserved."
	},
	home: {
		eyebrow: "Third-party pool proxy and PoolNode real-pool system",
		title: "RustMinerSystem",
		description: "RustMinerSystem covers two core paths. It can act as a proxy for third-party mining pools and allocate any configured share of connected miner hashrate to specified third-party pool wallets. It can also use PoolNode to build a real self-owned mining pool, where configured fees are distributed directly at the coin settlement layer. For miner access, sites can connect directly to RustMiner over traditional TCP/SSL; RMS is also available as an optional companion tool for sites that want lower bandwidth usage and fewer public connections through a local encrypted compression link.",
		primaryCta: "View downloads",
		secondaryCta: "Read docs",
		secondaryCtaNote: "Deployment, configuration, and operations",
		poolLinksLabel: "Third-party mining pool website links",
		partnerNote: "RustMinerSystem is honored to be supported by these and more partners.",
		preview: {
			label: "RustMinerSystem software dashboard preview",
			imageAlt: "RustMinerSystem mining proxy operations animated preview",
			playLabel: "Play demo video",
			minersLabel: "Third-party pool proxy",
			minersValue: "Allocation active",
			networkLabel: "Optional RMS compression",
			networkValue: "128:1 links",
			profitLabel: "PoolNode real pool",
			profitValue: "Settlement-layer fees"
		},
		featuresTitle: "Third-party pool proxy, PoolNode, and optional RMS tooling",
		features: {
			deployment: {
				title: "Third-party pool proxy",
				text: "Use RustMiner as the access proxy for third-party pools and as a mining pool relay or forwarding layer, then allocate any share of connected miner hashrate to specified pool wallets or worker names."
			},
			operations: {
				title: "PoolNode real pool",
				text: "Build your own real mining pool with PoolNode, and distribute configured fees at the coin settlement layer instead of only at the forwarding layer."
			},
			localization: {
				title: "Optional RMS local compression tool",
				text: "When a site needs network optimization, RMS can run locally so miners connect to RustMiner through an encrypted compressed link, reducing data volume and public connection count. Sites can also connect directly without RMS."
			}
		},
		searchIntents: {
			title: "Built for real mining pool relay, forwarding, and fee-allocation needs",
			description: "These crawlable page sections help search engines understand that RustMinerSystem covers mining pool relay, mining pool fee skimming, mining pool forwarding, and mining pool relay setup use cases.",
			items: {
				relay: {
					term: "Mining pool relay",
					title: "One access layer for miners and third-party pools",
					text: "Connect miners to RustMiner first, then route traffic to third-party pools such as ViaBTC, F2Pool, and AntPool while managing ports, wallets, and network lines centrally."
				},
				fee: {
					term: "Mining pool fee skimming",
					title: "Transparent fee and hashrate-share allocation",
					text: "Use configured ratios for software fees, partner shares, or operating fees, with hashrate directed to specified pool wallets for easier records and audits."
				},
				forwarding: {
					term: "Mining pool forwarding",
					title: "Forwarding rules for multiple pools and wallets",
					text: "Route connected hashrate to different third-party pool addresses, wallets, or worker names by site, miner group, or wallet target."
				},
				setup: {
					term: "Mining pool relay setup",
					title: "Deployment, configuration, and operations",
					text: "Deploy locally or on cloud servers, create ports, configure pool targets, add optional RMS compression, and monitor runtime status from the documentation workflow."
				}
			}
		},
		global: {
			title: "Run locally, manage hashrate allocation from the cloud",
			description: "RustMinerSystem can run on-site at a mining facility or on a cloud server that connects sites across countries and regions. In proxy mode, it allocates any configured share of connected hashrate to third-party pool wallets by site, miner group, or wallet target. In PoolNode mode, it helps build a real pool and applies fee distribution at the coin settlement layer.",
			sites: {
				local: {
					region: "Local site",
					title: "Nearby miner access",
					text: "Handle proxy forwarding, device groups, and hashrate allocation policies inside the mining facility with less public exposure."
				},
				remote: {
					region: "Cloud node",
					title: "Unified regional console",
					text: "Manage multiple sites from cloud servers and adjust proxy targets, wallet targets, and link policies by region."
				},
				multi: {
					region: "Multi-site ops",
					title: "Multi-wallet allocation",
					text: "Create independent hashrate shares and third-party pool wallet targets for miners, teams, or partners."
				}
			},
			visual: {
				coreLabel: "Scheduling core",
				coreTitle: "Hashrate allocation engine",
				coreText: "Coordinates miner access, optional RMS compression, third-party pool wallet allocation, and PoolNode settlement-layer fees.",
				secure: "Local encrypt",
				compress: "Data compress",
				route: "Allocation"
			},
			targets: {
				proxy: {
					type: "Proxy",
					title: "Third-party pool proxy",
					text: "Allocate any share of connected miner hashrate to specified third-party pool wallets."
				},
				poolNode: {
					type: "Node",
					title: "PoolNode real pool",
					text: "Build a real self-owned pool and distribute configured fees at the coin settlement layer."
				},
				pool: {
					type: "Wallet",
					title: "Specified pool wallet",
					text: "Route any configured hashrate share to the matching third-party pool address, wallet, or worker name."
				}
			},
			metrics: {
				operations: "Flexible local deployment and cloud access",
				regionsValue: "Allocation",
				regions: "Manage by site, miner group, or wallet target",
				clientValue: "Optional RMS",
				client: "Compress data volume and public links when needed"
			}
		},
		loadingBadge: "...",
		unavailableBadge: "N/A",
		latestRelease: "Latest Release",
		latestReleaseLoading: "Checking release",
		latestReleaseError: "Release unavailable",
		latestReleaseAria: "RustMinerSystem {version} Latest Release",
		latestReleaseLoadingAria: "Checking the latest RustMinerSystem release",
		latestReleaseErrorAria: "Unable to load the latest RustMinerSystem release",
		githubStars: "GitHub Stars",
		githubStarsLoading: "Checking stars",
		githubStarsError: "Stars unavailable",
		githubStarsAria: "EvilGenius-dot/RustMinerSystem has {count} GitHub stars",
		githubStarsLoadingAria: "Checking GitHub stars for EvilGenius-dot/RustMinerSystem",
		githubStarsErrorAria: "Unable to load GitHub stars for EvilGenius-dot/RustMinerSystem"
	},
	download: {
		eyebrow: "Download",
		installGuideLink: "Read usage guide",
		latestVersion: "Latest Release {version}",
		latestVersionLoading: "Latest Release",
		latestVersionError: "Latest Release unavailable",
		latestVersionPending: "Latest Release",
		partners: {
			kicker: "Ecosystem support",
			title: "Infrastructure for downloads and deployment",
			description: "RustMinerSystem works with cloud services, network infrastructure, and code hosting platforms to support reliable downloads, deployments, and global access.",
			ariaLabel: "RustMinerSystem partner list",
			items: {
				vultr: "Vultr",
				aws: "Amazon AWS",
				azure: "Microsoft Azure",
				aliyun: "Alibaba Cloud International",
				cloudflare: "Cloudflare",
				github: "GitHub"
			}
		},
		pages: {
			server: {
				title: "RustMinerSystem Core Server Download",
				heading: "RustMinerSystem Core Server",
				description: "Prepare the server program for mining access, third-party pool proxying, and PoolNode deployments. Choose the right system, architecture, and version, then install with a command or deploy a standalone file manually."
			},
			rms: {
				title: "RMS Secure Client Download",
				heading: "RMS Secure Client",
				description: "RMS is the local secure client for tunneling, data compression, encryption, and public connection compression. Choose the system, architecture, or Windows variant, then install with a command or deploy a standalone file manually."
			},
			mobile: {
				title: "RustMinerApp Download",
				heading: "RustMinerApp",
				description: "RustMinerApp is the mobile operations console for RustMinerSystem, designed for checking pool proxy, PoolNode, server status, ports, wallets, and worker hashrate data. The app is not live yet, so this page currently presents interface previews and platform status."
			},
			"pool-node": {
				title: "PoolNode Mobile App Download",
				heading: "PoolNode Mobile App",
				description: "PoolNode Mobile App is the end-user mobile app for pool nodes built on RustMinerSystem, giving pool users a mobile entry for earnings, hashrate, workers, and asset records."
			}
		},
		rustMinerApp: {
			comingSoonBadge: "App not live yet",
			downloadKicker: "Mobile app preview",
			downloadTitle: "RustMinerApp is being prepared for release",
			downloadDescription: "This page is open first as a preview. Install packages, store links, and QR codes will be added after the public release. The screenshots below come from the mobile interface in preparation and show the main pool proxy and pool-node management views.",
			visual: {
				label: "Preview of RustMinerApp pool proxy, pool node, and worker detail screens",
				badge: "RustMinerApp mobile console",
				title: "RustMinerSystem operations from your phone",
				description: "Check ports, servers, system load, live hashrate, worker details, and wallet data from a phone whenever you need to confirm pool proxy or pool-node status."
			},
			platforms: {
				ios: {
					title: "iOS",
					status: "Coming soon",
					note: "The App Store link is being prepared and will be placed here after release."
				},
				android: {
					title: "Android",
					status: "Coming soon",
					note: "The APK package is being prepared. The download link and QR code will be placed here after release."
				}
			},
			features: {
				proxy: {
					title: "Pool proxy overview",
					text: "View BTC live hashrate, online devices, port status, and TCP, TLS/SSL, RMS access types."
				},
				worker: {
					title: "Worker and hashrate details",
					text: "Open a port or device to inspect 24-hour hashrate curves, wallets, efficiency, uptime, and rejected shares."
				},
				system: {
					title: "Server status",
					text: "Review server lists, system load, CPU, disk, memory, program version, and runtime."
				}
			},
			screens: {
				ariaLabel: "RustMinerApp interface preview screenshots",
				dashboard: "Pool proxy overview",
				dashboardAlt: "RustMinerApp screenshot showing pool proxy overview and port list",
				servers: "Server list",
				serversAlt: "RustMinerApp screenshot showing server list",
				system: "System information",
				systemAlt: "RustMinerApp screenshot showing system information and server load",
				worker: "Worker list",
				workerAlt: "RustMinerApp screenshot showing worker list and 24-hour hashrate",
				device: "Device details",
				deviceAlt: "RustMinerApp screenshot showing device details, wallet, and hashrate statistics"
			}
		},
		server: {
			finderTitle: "Choose a server build",
			selectionSummary: "Get RustMinerSystem {version} for {os} {arch}",
			refresh: "Refresh list",
			osLabel: "Operating system",
			archLabel: "Architecture",
			versionLabel: "Version",
			versionPending: "Detecting version",
			unknownVersion: "Unknown version",
			loading: "Reading the windows and linux directories from the GitHub repository.",
			empty: "No downloadable files match the selected filters.",
			fetchError: "Unable to read the GitHub file list right now. Try again later or open the repository directory.",
			download: "Download",
			openDirectory: "Open {directory} standalone files on GitHub",
			methodHint: {
				linux: "Two installation methods are available below: beginners should start with the Linux command installer and follow the terminal prompts; standalone files are for users who want to configure startup, auto-start, and process supervision themselves.",
				standalone: "This platform provides standalone files: after downloading, start the program manually and configure auto-start or process supervision yourself."
			},
			binary: {
				title: "Standalone file download",
				description: "For users familiar with deployment: download the standalone file, start it manually, then configure process supervision for your environment."
			},
			os: {
				linux: "Linux",
				windows: "Windows"
			},
			arch: {
				x86: "x86",
				arm: "ARM",
				armv7: "ARMv7"
			},
			visual: {
				label: "Diagram of miners connecting to RustMinerSystem",
				localLabel: "Miner access paths",
				miners: "Miner fleet",
				fieldProxy: "TCP / SSL direct",
				remoteNode: "Optional RMS access",
				system: "RustMinerSystem",
				systemHint: "Unified access, hashrate allocation, and proxying",
				access: "Unified access",
				allocation: "Hashrate allocation",
				proxy: "Pool proxy",
				routeLabel: "Route by configuration",
				thirdPartyTarget: "Third-party pool Proxy",
				poolNodeTarget: "PoolNode real pool",
				target: "Third-party pool / PoolNode"
			},
			install: {
				title: "Install with Linux command",
				description: "Copy the command for {arch} into your server terminal, then follow the prompts to complete installation.",
				line1: "Line 1",
				line2: "Line 2",
				arm: "ARM",
				armv7: "ARMv7",
				copy: "Copy",
				copied: "Copied"
			}
		},
		rms: {
			finderTitle: "Choose an RMS client",
			selectionSummary: "Get RMS {version} for {os} {arch}",
			osLabel: "Operating system",
			archLabel: "Architecture / type",
			versionLabel: "Version",
			versionPending: "Detecting version",
			unknownVersion: "Unknown version",
			loading: "Reading RMS client directories from the GitHub repository.",
			empty: "No downloadable files match the selected filters.",
			fetchError: "Unable to read the GitHub file list right now. Try again later or open the repository directory.",
			download: "Download",
			openDirectory: "Open {directory} standalone files on GitHub",
			version: { rms3: "RMS3" },
			methodHint: {
				linux: "Two installation methods are available below: beginners should start with the RMS3 command installer and follow the terminal prompts; standalone files are for users who want to configure startup and process supervision themselves.",
				standalone: "This platform provides standalone files: after downloading, start the program manually and configure auto-start or process supervision yourself. If the Windows GUI shows a blank screen, install WebView2 from the same directory."
			},
			binary: {
				title: "RMS standalone file download",
				description: "For users familiar with deployment: download the matching standalone file, start RMS manually, then configure process supervision for your environment."
			},
			os: {
				linux: "Linux",
				windows: "Windows"
			},
			arch: {
				x86: "x86_64",
				aarch64: "ARM64 / aarch64",
				arm: "ARM",
				armhf: "ARMHF",
				armv7: "ARMv7",
				armv7hf: "ARMv7HF",
				windowsGui: "Windows GUI",
				windowsCli: "Windows CLI"
			},
			visual: {
				label: "Diagram of miners connecting to RustMiner through the RMS secure client",
				localLabel: "Local site access",
				miners: "Miner fleet",
				fieldProxy: "Site local network",
				remoteNode: "Access device / router",
				system: "RMS Secure Client",
				systemHint: "Local compression, encryption, and connection pooling",
				compression: "Traffic compression",
				encryption: "Encrypted tunnel",
				connectionPool: "Connection pooling",
				tunnelLabel: "Compressed encrypted link",
				target: "RustMiner host server"
			},
			install: {
				title: "Install RMS with command",
				description: "Copy the command for {arch} into the device terminal, then follow the prompts to complete installation.",
				line1: "Line 1",
				line2: "Line 2",
				copy: "Copy",
				copied: "Copied"
			}
		},
		poolNode: {
			latestRelease: "Latest Release Android {android} / iOS {ios}",
			downloadKicker: "Mobile downloads",
			downloadTitle: "Choose the installer for your phone",
			downloadDescription: "Android users can download the APK directly. iOS users should install from the App Store with a Hong Kong or US Apple ID.",
			visual: {
				label: "Preview of PoolNode Mobile App earnings, hashrate, and worker screens",
				badge: "PoolNode Mobile App",
				title: "End-user app for pool nodes",
				description: "Let pool users check node earnings, hashrate trends, worker status, and asset records in a familiar mining-pool app experience."
			},
			platforms: {
				android: {
					title: "Android APK",
					note: "Scan the QR code or use the button to download the APK. If Android blocks unknown sources, follow the system prompt to allow this installation.",
					button: "Download Android APK",
					qrAlt: "QR code for downloading the PoolNode Android APK"
				},
				ios: {
					title: "iOS App Store",
					note: "Scan the QR code or use the button to open the App Store. The current iOS app requires a Hong Kong or US Apple ID.",
					button: "Open App Store",
					qrAlt: "QR code for opening the PoolNode iOS App Store page"
				}
			},
			features: {
				node: {
					title: "Node earnings dashboard",
					text: "Bring coin earnings, estimated fiat value, and pool-node data into one mobile view."
				},
				worker: {
					title: "Workers and hashrate",
					text: "Check 10-minute hashrate, 24-hour hashrate, online status, and rejection rate to spot abnormal workers."
				},
				asset: {
					title: "Assets and records",
					text: "Review income records, payout records, and payout address binding from the phone."
				}
			},
			screens: {
				overview: "Earnings overview",
				overviewAlt: "PoolNode Mobile App screenshot showing earnings overview and pool-node list",
				hashrate: "Hashrate details",
				hashrateAlt: "PoolNode Mobile App screenshot showing BTC hashrate details",
				workers: "Worker list",
				workersAlt: "PoolNode Mobile App screenshot showing worker list and online status",
				assets: "Asset records",
				assetsAlt: "PoolNode Mobile App screenshot showing asset and income records"
			}
		}
	},
	document: {
		eyebrow: "Documentation",
		title: "Deploy and operate RustMinerSystem",
		description: "This page gives crawlers and users a stable documentation entry point for installation, configuration, and operations.",
		tocTitle: "Contents",
		navigationTitle: "Documentation",
		onThisPage: "On this page",
		readingTime: "Reading time",
		readingTimeValue: "{minutes} min read",
		previousPage: "Previous",
		nextPage: "Next",
		sections: {
			install: {
				title: "Installation",
				text: "Prepare the server package, configure runtime settings, then verify the node before joining production workloads."
			},
			configure: {
				title: "Configuration",
				text: "Keep pool endpoints, worker credentials, logging, and update channels documented in one canonical location."
			},
			operate: {
				title: "Operations",
				text: "Monitor release notes, restart policies, and recovery procedures before upgrading production nodes."
			}
		}
	},
	customized: {
		eyebrow: "Custom RustMiner builds",
		title: "Create your own branded RustMiner version",
		description: "Customers can create free or paid custom RustMiner builds to promote their own branded version. Every customizer receives an admin dashboard for install statistics, built-in fee-ratio management, and hot updates for fee configuration changes.",
		hero: {
			primaryCta: "Request customization",
			secondaryCta: "View plans",
			previewLabel: "Custom admin dashboard preview",
			previewTitle: "Customized RustMiner Dashboard",
			previewAlt: "Preview of the custom RustMiner admin dashboard statistics",
			previewBadge: "Master dashboard",
			previewCaption: "The RustMinerSystem custom-edition master dashboard centralizes install statistics, client counts, active devices, hashrate trends, and built-in fee configuration so customizers can keep operating their promoted version.",
			metrics: {
				editions: {
					label: "Available editions",
					value: "Free / Paid"
				},
				fee: {
					label: "Fee settings",
					value: "Hot updates"
				},
				hosting: {
					label: "Program hosting",
					value: "Paid plans"
				}
			}
		},
		pointsEyebrow: "Core capabilities",
		pointsTitle: "Built for branding, promotion, and operations",
		pointsDescription: "A custom version is more than a renamed package. It gives customizers a practical operating loop for promotion, statistics, built-in fee strategy, deployment, and updates.",
		points: {
			dashboard: {
				title: "Admin dashboard",
				text: "Customizers can view statistics from installed RustMiner clients and understand real usage after promotion."
			},
			fee: {
				title: "Built-in fee-ratio management",
				text: "Configure your own built-in fee ratio at any time. Changes support hot updates without repackaging."
			},
			branding: {
				title: "Brand customization",
				text: "Change the software name, footer information, and logo so the custom RustMiner matches your promotion channel."
			},
			hosting: {
				title: "One-click deployment and hosting",
				text: "Paid editions include remote install scripts and hosted programs that update whenever a release or custom update is published."
			},
			client: {
				title: "Deep client page customization",
				text: "The advanced edition supports deeper client UI customization around your own workflow, beyond simple branding changes."
			},
			rms: {
				title: "Custom RMS",
				text: "The advanced edition can customize RMS companion capabilities for teams that need a complete branded access path."
			}
		},
		plans: {
			eyebrow: "Plans",
			title: "Choose the right custom edition for your promotion stage",
			description: "The free edition covers branding and the admin dashboard. The basic paid edition adds hosted deployment. The advanced edition is for long-term projects that need deep client pages and custom RMS.",
			included: "Included",
			excluded: "Not included",
			tiers: {
				free: {
					name: "Free custom edition",
					badge: "Start free",
					description: "Good for testing promotion with the admin dashboard and essential brand changes.",
					price: "0 USD",
					period: "Free request",
					cta: "Request free edition"
				},
				basic: {
					name: "Basic paid edition",
					badge: "Hosted deployment",
					description: "For promoters who want remote install scripts and hosted program updates maintained for them.",
					price: "88 USD",
					period: "/ month",
					cta: "Start basic"
				},
				advanced: {
					name: "Advanced paid edition",
					badge: "Deep customization",
					description: "For teams that need custom client pages, custom RMS, and a long-term branded product path.",
					price: "18888 USD",
					period: "/ lifetime",
					cta: "Discuss advanced"
				}
			}
		},
		features: {
			noMinerLimit: {
				title: "No miner-count limit",
				tiers: {
					free: "Free edition requires >1000 miners",
					basic: "No miner-count requirement",
					advanced: "No miner-count requirement"
				}
			},
			admin: {
				title: "Admin dashboard",
				text: "View custom build install and runtime statistics."
			},
			customManagement: {
				title: "Multiple builds and permission management",
				tiers: {
					free: "Limited to one custom build per person. The dashboard manages only your own build and cannot manage other custom permissions.",
					basic: "Create multiple custom builds and manage other custom permissions.",
					advanced: "Create multiple custom builds and manage other custom permissions."
				}
			},
			name: {
				title: "Change software name",
				text: "Rename RustMiner as your branded edition."
			},
			footer: {
				title: "Change footer information",
				text: "Replace footer content and promotion details."
			},
			logo: {
				title: "Change logo",
				text: "Use your own icon and visual assets."
			},
			officialClientStyle: {
				title: "Optional official client style",
				tiers: {
					free: "Only the legacy client style is available",
					basic: "Official client style is available",
					advanced: "Official client style is available"
				}
			},
			hosting: {
				title: "One-click deployment and hosting",
				text: "Includes remote install scripts and hosted program updates for releases and custom updates."
			},
			client: {
				title: "Deep client page customization",
				text: "Customize client pages around your promotion or workflow."
			},
			rms: {
				title: "Custom RMS",
				text: "Customize the companion RMS client capabilities."
			}
		},
		delivery: {
			eyebrow: "Delivery flow",
			title: "Start with branding, then expand into hosting and deeper capabilities",
			description: "The page separates brand information, admin access, hosted deployment, and deep client capabilities so customers can understand the plan differences quickly.",
			steps: {
				scope: {
					title: "Confirm brand assets",
					text: "Collect the software name, logo, footer information, and promotion content for the custom build."
				},
				package: {
					title: "Generate the custom build",
					text: "Package the custom RustMiner build and enable the matching admin dashboard access."
				},
				operate: {
					title: "Configure fees and operate",
					text: "Use the dashboard to view install statistics, adjust the built-in fee ratio, and hot-update the configuration."
				}
			}
		}
	},
	about: {
		eyebrow: "About",
		title: "About RustMinerSystem",
		description: "RustMinerSystem is software for miner, mining farm, and mining pool operations. It covers traditional pool proxying, self-hosted pool nodes, optional RMS access, downloads, deployment, and multilingual operations entry points.",
		rates: {
			eyebrow: "Software fee rates",
			title: "Transparent software service rates",
			proxy: {
				label: "Traditional pool proxy",
				title: "Traditional pool proxy",
				value: "2‰",
				text: "A 2 per mille software fee on connected hashrate for third-party mining pool proxy scenarios.",
				textHighlight: "2 per mille"
			},
			poolNode: {
				label: "Self-hosted pool node",
				title: "Self-hosted pool node",
				value: "1%",
				text: "Self-hosted pool nodes use a 1% software fee rate for PoolNode real-pool operations."
			}
		},
		legal: {
			eyebrow: "Disclaimer",
			title: "Confirm the legal requirements in your jurisdiction before use",
			description: "These terms describe RustMinerSystem's scope, user responsibilities, and restricted regions. Using the product means you understand and accept these statements.",
			items: {
				1: "RustMinerSystem is governed by Hong Kong law. Legal requirements in different countries or regions may restrict this type of product and service.",
				2: "Therefore, the product, the service, and certain features may be unavailable or restricted in certain jurisdictions, regions, or for certain users.",
				3: "This product is not a VPN product, because it cannot enable users in disallowed regions to access prohibited content.",
				4: "This product is miner and mining farm management software. It does not obtain miner data through improper means. Every connected device requires the device owner to actively set the miner connection address, ensuring customers using the program have informed consent.",
				5: "You are not included on any terrorist organization or terrorist personnel list, including lists set out in United Nations Security Council resolutions.",
				6: "You have not been restricted or prohibited from using this program by any administrative or law-enforcement agency in any country or region.",
				7: "You are not a resident of Cuba, Iran, North Korea, Syria, or any other country or region subject to sanctions enforced by relevant governments or international organizations.",
				8: "You are not a resident of a country or region that restricts or prohibits digital-currency-related activities, including but not limited to mainland China.",
				9: "Your use of the services provided by this program complies with the laws, regulations, and policies of your country or region.",
				10: "You agree that if your use of the services becomes illegal due to the laws, regulations, policies, or any other applicable law of your country or region, you will independently bear the relevant legal risks and liabilities, and unconditionally and irrevocably waive any right of recourse against this program.",
				11: "You should understand and comply with local laws and regulations. If you use this product, you are deemed to accept the above license and statements. Legal issues caused by your use of this product are unrelated to the product itself."
			}
		},
		community: {
			eyebrow: "Community",
			title: "Community and support channels",
			description: "Follow project updates, release news, deployment discussions, and support conversations through GitHub, Telegram, and Discord."
		},
		providers: {
			eyebrow: "Service providers",
			title: "Infrastructure for downloads and deployment",
			description: "RustMinerSystem relies on cloud services, network infrastructure, and code hosting platforms to provide stable downloads, deployments, and access for users worldwide.",
			ariaLabel: "RustMinerSystem service provider list"
		}
	}
};
//#endregion
//#region src/i18n/locales/zh.js
var zh_default = {
	site: {
		name: "RustMinerSystem",
		shortName: "RMS"
	},
	seo: {
		defaultTitle: "RustMinerSystem - 矿池中转、矿池转发与 PoolNode 真矿池系统",
		titleTemplate: "{pageTitle} | RustMinerSystem",
		keywords: [
			"矿池中转",
			"矿池抽水",
			"矿池转发",
			"矿池中转搭建",
			"第三方矿池代理",
			"矿池 Proxy",
			"PoolNode 真矿池",
			"RustMinerSystem"
		],
		home: {
			title: "RustMinerSystem",
			description: "RustMinerSystem 面向矿场和矿池运营方，支持矿池中转、矿池转发、矿池中转搭建和透明矿池抽水费率分配：可作为第三方矿池 Proxy 将接入算力按任意比例分配到指定矿池钱包，也可通过 PoolNode 搭建真正矿池并在虚拟币结算层分配费率；矿机可通过传统 TCP/SSL 直连 RustMiner，也可配套 RMS 客户端进行本地加密压缩接入。",
			keywords: [
				"矿池中转",
				"矿池抽水",
				"矿池转发",
				"矿池中转搭建",
				"矿池代理搭建",
				"矿池费率分配",
				"矿机转发代理"
			]
		},
		document: {
			title: "文档",
			description: "阅读 RustMinerSystem 文档，了解部署、服务器配置、节点设置与运维流程。"
		},
		customized: {
			title: "定制版本",
			description: "制作用于推广的定制版 RustMiner，配套管理后台、安装统计、内抽比例配置、热更新与付费托管部署能力。"
		},
		about: {
			title: "关于",
			description: "了解 RustMinerSystem 的产品定位、软件费率、法律免责声明、社区入口与下载部署基础设施支持。"
		}
	},
	nav: {
		skip: "跳转到主要内容",
		primary: "主导航",
		mobile: "移动端导航",
		home: "首页",
		download: "下载",
		document: "文档",
		customized: "定制版本",
		about: "关于",
		server: "服务端组件",
		app: "移动应用",
		openMenu: "打开导航菜单",
		closeMenu: "关闭导航菜单",
		language: "语言",
		currentLanguage: "当前语言",
		github: "在 GitHub 打开 RustMinerSystem",
		downloads: {
			server: "RustMinerSystem 核心服务端",
			rms: "RMS 安全客户端",
			mobile: "RustMinerApp 移动应用",
			poolNode: "PoolNode 移动应用"
		}
	},
	localePrompt: {
		title: "切换语言？",
		description: "检测到你的浏览器语言更接近 {language}，是否切换到这个语言版本？",
		cancel: "保持当前语言",
		confirm: "切换到 {language}"
	},
	footer: {
		brandLabel: "RustMinerSystem 页脚",
		navigation: "页脚导航",
		product: "产品",
		community: "社区",
		github: "GitHub",
		telegram: "Telegram",
		telegramEnglish: "Telegram（英文）",
		telegramRussian: "Telegram（俄语）",
		discord: "Discord",
		miningPoolPartners: {
			title: "矿池合作伙伴",
			items: {
				viabtc: "ViaBTC",
				f2pool: "F2Pool",
				antpool: "AntPool",
				poolin: "Poolin"
			}
		},
		infrastructurePartners: {
			title: "全球云与网络基础设施合作商",
			items: {
				vultr: "Vultr",
				aws: "亚马逊 AWS",
				azure: "微软云 Azure",
				aliyun: "阿里云国际",
				cloudflare: "Cloudflare",
				github: "GitHub"
			}
		},
		description: "RustMinerSystem 不只是矿池代理入口：它能把矿机接入第三方矿池并按策略完成收益与费率分配，也能通过 PoolNode 搭建真正的自有矿池，在结算层管理费率；当带宽和公网连接成为瓶颈时，可叠加 RMS 加密压缩链路，把部署、分配和运维收拢到同一套系统。",
		copyright: "© {year} RustMinerSystem. 保留所有权利。"
	},
	home: {
		eyebrow: "第三方矿池 Proxy 与 PoolNode 真矿池系统",
		title: "RustMinerSystem",
		description: "RustMinerSystem 同时覆盖两条核心链路：可作为第三方矿池的 Proxy，从接入矿机算力中按任意比例分配到指定第三方矿池钱包；也可通过 PoolNode 搭建真正的自有矿池，让设定费率直接在虚拟币结算层面完成分配。在矿机接入上，不仅可以通过传统 TCP/SSL 直连 RustMiner；RMS 也是可选配套工具，适合需要减少带宽占用和公网连接数的矿场，用本地加密压缩链路把矿机接入 RustMiner。",
		primaryCta: "获取RustMinerSystem",
		secondaryCta: "阅读文档",
		secondaryCtaNote: "部署、配置与运维说明",
		poolLinksLabel: "第三方矿池官网链接",
		partnerNote: "RustMinerSystem 很荣幸得到上述及更多合作伙伴的支持。",
		preview: {
			label: "RustMinerSystem 软件首页预览",
			imageAlt: "RustMinerSystem 矿场代理运维动态演示",
			playLabel: "播放演示视频",
			minersLabel: "第三方矿池 Proxy",
			minersValue: "算力分配运行中",
			networkLabel: "RMS 可选压缩",
			networkValue: "连接压缩 128:1",
			profitLabel: "PoolNode 真矿池",
			profitValue: "结算层分配"
		},
		featuresTitle: "围绕第三方矿池 Proxy、PoolNode 与可选 RMS 工具",
		features: {
			deployment: {
				title: "第三方矿池 Proxy",
				text: "RustMiner 可作为第三方矿池的接入代理，用于矿池中转与矿池转发，将任意比例的矿机算力分配到指定第三方矿池钱包或矿工名。"
			},
			operations: {
				title: "PoolNode 真矿池",
				text: "通过 PoolNode 搭建自己的真实矿池，设定费率直接在虚拟币结算层面分配，而不是停留在转发层。"
			},
			localization: {
				title: "RMS 可选本地压缩工具",
				text: "需要优化网络时，可在矿场本地部署 RMS，让矿机通过加密压缩链路接入 RustMiner，减少数据体积和公网连接数；不使用 RMS 也可以直接接入 RustMiner。"
			}
		},
		searchIntents: {
			title: "面向矿池中转、转发与费率分配的真实场景",
			description: "这些词会以可读正文形式出现在页面中，帮助搜索引擎理解 RustMinerSystem 覆盖的矿池中转、矿池抽水、矿池转发和矿池中转搭建需求。",
			items: {
				relay: {
					term: "矿池中转",
					title: "矿机接入第三方矿池的统一入口",
					text: "把矿场矿机先接入 RustMiner，再由系统按配置连接 ViaBTC、F2Pool、AntPool 等第三方矿池，方便统一管理端口、钱包和线路。"
				},
				fee: {
					term: "矿池抽水",
					title: "透明费率与算力份额分配",
					text: "用于软件费、合作分成或运营费率场景，可按设定比例将算力分配到指定矿池钱包，便于记录和审计。"
				},
				forwarding: {
					term: "矿池转发",
					title: "多矿池、多钱包的转发策略",
					text: "根据场地、矿机分组或钱包目标，把接入算力转发到不同第三方矿池地址、钱包或矿工名。"
				},
				setup: {
					term: "矿池中转搭建",
					title: "从部署到运维的完整链路",
					text: "支持本地服务器或云服务器部署，结合文档完成端口创建、矿池目标配置、RMS 可选压缩和运行监控。"
				}
			}
		},
		global: {
			title: "本地部署、云端统一管理算力分配",
			description: "RustMinerSystem 可部署在矿场本地，也可放在云服务器集中接入多国多地区场地。Proxy 模式下，系统按场地、矿机分组或钱包目标把接入算力按任意比例分配到第三方矿池；PoolNode 模式下，系统用于搭建真实矿池，并在虚拟币结算层面执行费率分配。",
			sites: {
				local: {
					region: "本地场地",
					title: "矿机就近接入",
					text: "在矿场内完成代理转发、设备分组和算力分配策略下发，减少公网暴露。"
				},
				remote: {
					region: "云端节点",
					title: "跨地区统一后台",
					text: "云服务器集中管理多个场地，按区域调整 Proxy 目标、钱包目标和链路策略。"
				},
				multi: {
					region: "多场地运营",
					title: "多钱包分配策略",
					text: "为不同矿工、团队或合作方配置独立算力份额和第三方矿池钱包目标。"
				}
			},
			visual: {
				coreLabel: "调度核心",
				coreTitle: "算力分配引擎",
				coreText: "统一处理矿机接入、可选 RMS 压缩、第三方矿池钱包分配与 PoolNode 结算层费率。",
				secure: "本地加密",
				compress: "体积压缩",
				route: "算力分配"
			},
			targets: {
				proxy: {
					type: "代理",
					title: "第三方矿池 Proxy",
					text: "把接入矿机算力按任意比例分配到指定第三方矿池钱包。"
				},
				poolNode: {
					type: "节点",
					title: "PoolNode 真矿池",
					text: "搭建自有真实矿池，并让设定费率在虚拟币结算层面分配。"
				},
				pool: {
					type: "收益",
					title: "指定矿池钱包",
					text: "按配置将任意比例算力导向对应第三方矿池地址、钱包或矿工名。"
				}
			},
			metrics: {
				operations: "本地部署与云端接入灵活切换",
				regionsValue: "分配策略",
				regions: "按场地、矿机分组或钱包目标统一管理",
				clientValue: "可选 RMS",
				client: "按需压缩数据体积与公网连接数"
			}
		},
		loadingBadge: "...",
		unavailableBadge: "N/A",
		latestRelease: "Latest Release",
		latestReleaseLoading: "获取版本中",
		latestReleaseError: "版本获取失败",
		latestReleaseAria: "RustMinerSystem {version} 最新发布版本",
		latestReleaseLoadingAria: "正在获取 RustMinerSystem 最新发布版本",
		latestReleaseErrorAria: "无法获取 RustMinerSystem 最新发布版本",
		githubStars: "GitHub Stars",
		githubStarsLoading: "获取 Stars 中",
		githubStarsError: "Stars 获取失败",
		githubStarsAria: "EvilGenius-dot/RustMinerSystem 有 {count} 个 GitHub Stars",
		githubStarsLoadingAria: "正在获取 EvilGenius-dot/RustMinerSystem 的 GitHub Stars",
		githubStarsErrorAria: "无法获取 EvilGenius-dot/RustMinerSystem 的 GitHub Stars"
	},
	download: {
		eyebrow: "下载",
		installGuideLink: "阅读使用教程",
		latestVersion: "Latest Release {version}",
		latestVersionLoading: "Latest Release",
		latestVersionError: "Latest Release unavailable",
		latestVersionPending: "Latest Release",
		partners: {
			kicker: "生态支持",
			title: "下载与部署基础设施支持",
			description: "RustMinerSystem 结合云服务、网络基础设施与代码托管平台，为全球用户提供稳定的下载、部署与访问体验。",
			ariaLabel: "RustMinerSystem 合作伙伴列表",
			items: {
				vultr: "Vultr",
				aws: "亚马逊 AWS",
				azure: "微软云 Azure",
				aliyun: "阿里云国际",
				cloudflare: "Cloudflare",
				github: "GitHub"
			}
		},
		pages: {
			server: {
				title: "RustMinerSystem 核心服务端下载",
				heading: "RustMinerSystem 核心服务端",
				description: "为矿场接入、第三方矿池 Proxy 与 PoolNode 部署准备服务端程序。选择合适的系统、架构和版本后，可以使用命令安装，也可以下载独立文件手动部署。"
			},
			rms: {
				title: "RMS 安全客户端下载",
				heading: "RMS 安全客户端",
				description: "RMS 是部署在矿场本地的安全客户端，用于本地隧道、数据压缩、加密与公网连接数压缩。选择系统、架构或 Windows 版本后，可使用命令安装，也可以下载独立文件手动部署。"
			},
			mobile: {
				title: "RustMinerApp 下载",
				heading: "RustMinerApp",
				description: "RustMinerApp 是面向 RustMinerSystem 运维的移动端控制台，用于查看矿池代理、矿池节点、服务器状态、端口、钱包和矿工算力数据。应用暂未正式上线，页面先展示界面预览与平台状态。"
			},
			"pool-node": {
				title: "PoolNode 移动应用下载",
				heading: "PoolNode 移动应用",
				description: "PoolNode 移动应用是基于 RustMinerSystem 搭建的矿池节点用户终端，为矿池用户提供收益、算力、矿工与资产数据的移动端入口。"
			}
		},
		rustMinerApp: {
			comingSoonBadge: "应用暂未上线",
			downloadKicker: "移动应用预览",
			downloadTitle: "RustMinerApp 正在准备上线",
			downloadDescription: "当前先开放页面预览，安装包、商店链接和二维码会在正式发布后补齐。页面中的截图来自正在准备的移动端界面，用于展示矿池代理与矿池节点的主要管理视图。",
			visual: {
				label: "RustMinerApp 矿池代理、矿池节点与矿工详情界面预览",
				badge: "RustMinerApp 移动控制台",
				title: "把 RustMinerSystem 运维带到手机上",
				description: "从手机查看端口、服务器、系统负载、实时算力、矿工详情和钱包数据，适合随时确认矿池代理与矿池节点状态。"
			},
			platforms: {
				ios: {
					title: "iOS",
					status: "暂未上线",
					note: "App Store 链接准备中，正式发布后会在这里放置下载入口。"
				},
				android: {
					title: "Android",
					status: "暂未上线",
					note: "APK 安装包准备中，正式发布后会在这里放置下载入口与二维码。"
				}
			},
			features: {
				proxy: {
					title: "矿池代理总览",
					text: "查看 BTC 实时算力、在线设备、端口状态和 TCP、TLS/SSL、RMS 等接入类型。"
				},
				worker: {
					title: "矿工与算力详情",
					text: "进入单个端口或设备，查看 24 小时算力曲线、钱包、效率、在线时长和拒绝份额。"
				},
				system: {
					title: "服务器状态",
					text: "查看服务器列表、系统负载、CPU、硬盘、内存、程序版本和运行时长。"
				}
			},
			screens: {
				ariaLabel: "RustMinerApp 界面预览截图",
				dashboard: "矿池代理总览",
				dashboardAlt: "RustMinerApp 矿池代理总览和端口列表截图",
				servers: "服务器列表",
				serversAlt: "RustMinerApp 服务器列表截图",
				system: "系统信息",
				systemAlt: "RustMinerApp 系统信息和服务器负载截图",
				worker: "矿工列表",
				workerAlt: "RustMinerApp 矿工列表和 24 小时算力截图",
				device: "设备详情",
				deviceAlt: "RustMinerApp 设备详情、钱包和算力统计截图"
			}
		},
		server: {
			finderTitle: "选择服务端构建",
			selectionSummary: "获得适用于 {os} {arch} 的 RustMinerSystem {version}",
			refresh: "刷新列表",
			osLabel: "操作系统",
			archLabel: "架构",
			versionLabel: "版本",
			versionPending: "正在识别版本",
			unknownVersion: "未知版本",
			loading: "正在从 GitHub 仓库读取 windows 与 linux 目录。",
			empty: "当前筛选条件下没有可下载文件。",
			fetchError: "暂时无法读取 GitHub 文件列表，请稍后重试或打开仓库目录下载。",
			download: "下载",
			openDirectory: "在 GitHub 中打开 {directory} 独立文件",
			methodHint: {
				linux: "下方提供两种安装方式：新手建议优先使用 Linux 命令安装，按终端提示完成；独立文件下载适合需要自行配置启动、开机自启和进程守护的用户。",
				standalone: "当前平台提供独立文件下载：下载后需要手动启动程序，并自行配置开机自启或进程守护。"
			},
			binary: {
				title: "独立文件下载",
				description: "适合熟悉部署的用户：下载独立文件后，需要手动启动程序，并根据生产环境自行设置进程守护。"
			},
			os: {
				linux: "Linux",
				windows: "Windows"
			},
			arch: {
				x86: "x86",
				arm: "ARM",
				armv7: "ARMv7"
			},
			visual: {
				label: "矿机接入 RustMinerSystem 的示意图",
				localLabel: "矿机接入方式",
				miners: "矿机集群",
				fieldProxy: "TCP / SSL 直连",
				remoteNode: "RMS 可选接入",
				system: "RustMinerSystem",
				systemHint: "统一接入、算力分配与代理",
				access: "统一接入",
				allocation: "算力分配",
				proxy: "矿池代理",
				routeLabel: "按配置分流",
				thirdPartyTarget: "第三方矿池 Proxy",
				poolNodeTarget: "PoolNode 真矿池",
				target: "第三方矿池 / PoolNode"
			},
			install: {
				title: "Linux 命令安装",
				description: "复制适用于 {arch} 的命令到服务器终端执行，并根据终端提示完成安装。",
				line1: "线路 1",
				line2: "线路 2",
				arm: "ARM",
				armv7: "ARMv7",
				copy: "复制",
				copied: "已复制"
			}
		},
		rms: {
			finderTitle: "选择 RMS 客户端",
			selectionSummary: "获得适用于 {os} {arch} 的 RMS {version}",
			osLabel: "操作系统",
			archLabel: "架构 / 类型",
			versionLabel: "版本",
			versionPending: "正在识别版本",
			unknownVersion: "未知版本",
			loading: "正在从 GitHub 仓库读取 RMS 客户端目录。",
			empty: "当前筛选条件下没有可下载文件。",
			fetchError: "暂时无法读取 GitHub 文件列表，请稍后重试或打开仓库目录下载。",
			download: "下载",
			openDirectory: "在 GitHub 中打开 {directory} 独立文件",
			version: { rms3: "RMS3" },
			methodHint: {
				linux: "下方提供两种安装方式：新手建议优先使用 RMS3 命令安装，按终端提示完成；独立文件下载适合需要自行配置启动和进程守护的用户。",
				standalone: "当前平台提供独立文件下载：下载后需要手动启动程序，并自行配置开机自启或进程守护。Windows 图形界面版本如遇白屏，请安装同目录的 WebView2。"
			},
			binary: {
				title: "RMS 独立文件下载",
				description: "适合熟悉部署的用户：下载对应系统和架构的独立文件后，需要手动启动 RMS，并根据生产环境自行设置进程守护。"
			},
			os: {
				linux: "Linux",
				windows: "Windows"
			},
			arch: {
				x86: "x86_64",
				aarch64: "ARM64 / aarch64",
				arm: "ARM",
				armhf: "ARMHF",
				armv7: "ARMv7",
				armv7hf: "ARMv7HF",
				windowsGui: "Windows 图形界面",
				windowsCli: "Windows 命令行"
			},
			visual: {
				label: "矿机通过 RMS 安全客户端接入 RustMiner 的示意图",
				localLabel: "矿场本地接入",
				miners: "矿机集群",
				fieldProxy: "矿场本地网络",
				remoteNode: "接入设备 / 路由器",
				system: "RMS 安全客户端",
				systemHint: "本地压缩、加密与连接收敛",
				compression: "压缩流量",
				encryption: "加密隧道",
				connectionPool: "连接收敛",
				tunnelLabel: "压缩加密链路",
				target: "RustMiner 所在服务器"
			},
			install: {
				title: "RMS 命令安装",
				description: "复制适用于 {arch} 的命令到设备终端执行，并根据终端提示完成安装。",
				line1: "线路 1",
				line2: "线路 2",
				copy: "复制",
				copied: "已复制"
			}
		},
		poolNode: {
			latestRelease: "Latest Release Android {android} / iOS {ios}",
			downloadKicker: "移动端下载",
			downloadTitle: "选择适合手机系统的安装方式",
			downloadDescription: "Android 用户可以直接下载 APK 安装包；iOS 用户通过 App Store 下载，安装前请确认使用港区或美区 Apple ID。",
			visual: {
				label: "PoolNode 移动应用收益、算力与矿工界面预览",
				badge: "PoolNode 移动应用",
				title: "矿池节点用户终端",
				description: "让终端用户像使用传统矿池移动应用一样查看节点收益、算力走势、矿工在线状态和资产记录。"
			},
			platforms: {
				android: {
					title: "Android APK",
					note: "扫码或点击按钮下载 APK。安装时如果系统提示未知来源，请根据手机安全提示允许本次安装。",
					button: "下载 Android APK",
					qrAlt: "PoolNode Android APK 下载二维码"
				},
				ios: {
					title: "iOS App Store",
					note: "扫码或点击按钮跳转 App Store。当前 iOS 版本需要使用港区或美区 Apple ID 获取。",
					button: "前往 App Store",
					qrAlt: "PoolNode iOS App Store 下载二维码"
				}
			},
			features: {
				node: {
					title: "节点收益看板",
					text: "聚合币种收益、预计法币价值和矿池节点数据，让用户快速掌握账户状态。"
				},
				worker: {
					title: "矿工与算力",
					text: "查看 10 分钟算力、24 小时算力、在线离线状态和拒绝率，方便定位异常矿工。"
				},
				asset: {
					title: "资产与记录",
					text: "移动端查看收入记录、支付记录和支付地址绑定，降低终端用户查询成本。"
				}
			},
			screens: {
				overview: "收益总览",
				overviewAlt: "PoolNode 移动应用收益总览和矿池节点列表截图",
				hashrate: "算力详情",
				hashrateAlt: "PoolNode 移动应用 BTC 算力详情截图",
				workers: "矿工列表",
				workersAlt: "PoolNode 移动应用矿工列表和在线状态截图",
				assets: "资产记录",
				assetsAlt: "PoolNode 移动应用资产和收入记录截图"
			}
		}
	},
	document: {
		eyebrow: "文档",
		title: "部署与运维 RustMinerSystem",
		description: "该页面为用户和搜索引擎提供安装、配置与运维说明的稳定入口。",
		tocTitle: "文档目录",
		navigationTitle: "文档",
		onThisPage: "本页内容",
		readingTime: "阅读时间",
		readingTimeValue: "约 {minutes} 分钟",
		previousPage: "上一篇",
		nextPage: "下一篇",
		sections: {
			install: {
				title: "安装",
				text: "准备服务端包，配置运行参数，并在加入生产负载前完成节点验证。"
			},
			configure: {
				title: "配置",
				text: "把矿池端点、矿工凭据、日志与更新通道记录在统一的权威位置。"
			},
			operate: {
				title: "运维",
				text: "升级生产节点前，先确认发布说明、重启策略与恢复流程。"
			}
		}
	},
	customized: {
		eyebrow: "定制版 RustMiner",
		title: "制作属于你的 RustMiner 定制版本",
		description: "客户可以免费或付费制作定制版 RustMiner，用自己的品牌名称、LOGO 和页面信息推广客户端。每个定制者都会获得管理后台，用于查看安装统计、管理内置抽水比例，并支持比例配置热更新。",
		hero: {
			primaryCta: "联系定制",
			secondaryCta: "查看版本方案",
			previewLabel: "定制版管理后台预览",
			previewTitle: "Customized RustMiner Dashboard",
			previewAlt: "定制版 RustMiner 管理后台统计数据预览",
			previewBadge: "总控后台",
			previewCaption: "RustMinerSystem 定制版总控后台用于集中查看安装统计、客户端数量、活跃设备、算力走势与内抽配置，帮助定制者持续管理自己的推广版本。",
			metrics: {
				editions: {
					label: "可选版本",
					value: "免费 / 付费"
				},
				fee: {
					label: "内抽配置",
					value: "比例热更新"
				},
				hosting: {
					label: "程序托管",
					value: "付费版支持"
				}
			}
		},
		pointsEyebrow: "核心能力",
		pointsTitle: "从品牌推广到后台运营都能覆盖",
		pointsDescription: "定制版不是简单改名打包，而是围绕推广、统计、内抽策略和部署更新建立一套可持续运营的工具链。",
		points: {
			dashboard: {
				title: "管理后台",
				text: "定制者可查看别人安装的 RustMiner 统计信息，掌握客户端推广后的真实使用情况。"
			},
			fee: {
				title: "内抽比例管理",
				text: "可随时配置自己的内置抽水比例，配置变更支持热更新，不需要重新发包。"
			},
			branding: {
				title: "品牌信息定制",
				text: "支持修改软件名称、底部信息和 LOGO，让定制版 RustMiner 更适合你的推广入口。"
			},
			hosting: {
				title: "一键部署与程序托管",
				text: "付费版包含远程安装脚本和托管程序，发布或更新后远程程序同步更新，省去自己维护部署脚本。"
			},
			client: {
				title: "客户端页面深度定制",
				text: "高级版支持按你的业务流程进一步定制客户端页面，而不只停留在基础品牌替换。"
			},
			rms: {
				title: "定制 RMS",
				text: "高级版可定制 RMS 配套能力，适合需要完整品牌链路和更深接入形态的团队。"
			}
		},
		plans: {
			eyebrow: "版本方案",
			title: "选择适合推广阶段的定制版本",
			description: "免费版覆盖基础品牌替换和后台能力；基础付费版加入部署托管；高级付费版面向需要深度客户端页面和定制 RMS 的长期项目。",
			included: "支持",
			excluded: "不支持",
			tiers: {
				free: {
					name: "免费定制版",
					badge: "免费起步",
					description: "适合先验证定制版推广效果，保留管理后台和基础品牌修改。",
					price: "0 USD",
					period: "免费申请",
					cta: "申请免费定制"
				},
				basic: {
					name: "基础付费版",
					badge: "托管部署",
					description: "适合希望省去远程安装脚本和程序托管维护成本的推广者。",
					price: "88 USD",
					period: "/ 月",
					cta: "开通基础版"
				},
				advanced: {
					name: "高级付费版",
					badge: "深度定制",
					description: "适合需要深度客户端页面、定制 RMS 和长期完整品牌链路的团队。",
					price: "18888 USD",
					period: "/ 永久",
					cta: "咨询高级定制"
				}
			}
		},
		features: {
			noMinerLimit: {
				title: "无矿机数量限制",
				tiers: {
					free: "免费版需要 >1000 台矿机",
					basic: "不需要矿机数量限制",
					advanced: "不需要矿机数量限制"
				}
			},
			admin: {
				title: "管理后台",
				text: "查看定制版安装和运行统计以及热更新内抽。"
			},
			customManagement: {
				title: "多套定制与权限管理",
				tiers: {
					free: "仅限 1 人创建 1 套定制，后台只管理自己的版本，无法管理其他定制权限。",
					basic: "可创建多套定制，并可管理其他定制权限。",
					advanced: "可创建多套定制，并可管理其他定制权限。"
				}
			},
			name: {
				title: "修改软件名称",
				text: "将 RustMiner 命名为你的品牌版本。"
			},
			footer: {
				title: "修改底部信息",
				text: "替换底部展示内容和推广信息。"
			},
			logo: {
				title: "修改 LOGO",
				text: "使用自己的图标和视觉资产。"
			},
			officialClientStyle: {
				title: "可选官方版客户端样式",
				tiers: {
					free: "仅支持旧版客户端样式",
					basic: "可使用官方版客户端样式",
					advanced: "可使用官方版客户端样式"
				}
			},
			hosting: {
				title: "一键部署、程序托管",
				text: "包含远程安装脚本，发布及更新会同步远程托管程序。"
			},
			client: {
				title: "深度定制化客户端页面",
				text: "按推广或业务流程定制客户端界面。"
			},
			rms: {
				title: "定制 RMS",
				text: "定制配套 RMS 客户端能力。"
			}
		},
		delivery: {
			eyebrow: "交付流程",
			title: "先完成基础定制，再按版本扩展部署和深度能力",
			description: "页面将定制范围拆成品牌信息、后台权限、托管部署和深度客户端能力，方便客户快速理解每个版本的差异。",
			steps: {
				scope: {
					title: "确认品牌资料",
					text: "收集软件名称、LOGO、底部信息以及需要展示的推广内容。"
				},
				package: {
					title: "生成定制版本",
					text: "完成定制版 RustMiner 打包，并开通对应的管理后台权限。"
				},
				operate: {
					title: "配置内抽并运营",
					text: "在后台查看安装统计，调整内置抽水比例，并通过热更新下发配置。"
				}
			}
		}
	},
	about: {
		eyebrow: "关于",
		title: "关于 RustMinerSystem",
		description: "RustMinerSystem 是面向矿机、矿场与矿池运营场景的软件系统，覆盖传统矿池代理、自建矿池节点、可选 RMS 接入、下载部署和多语言运维入口。",
		rates: {
			eyebrow: "软件费率",
			title: "透明的软件服务费率",
			proxy: {
				label: "传统矿池代理",
				title: "传统矿池代理",
				value: "2‰",
				text: "按接入算力收取千分之 2 的软件费率，用于第三方矿池 Proxy 场景。",
				textHighlight: "千分之 2"
			},
			poolNode: {
				label: "自建矿池节点",
				title: "自建矿池节点",
				value: "1%",
				text: "自建矿池节点按 1% 的软件费率执行，适用于 PoolNode 真矿池节点运营场景。"
			}
		},
		legal: {
			eyebrow: "免责声明",
			title: "使用前请确认你所在地区的法律要求",
			description: "以下条款用于说明 RustMinerSystem 的适用范围、用户责任与限制地区。使用本产品代表你理解并接受这些声明。",
			items: {
				1: "RustMinerSystem 受香港法律监管。不同国家或地区的法律要求可能会限制此类产品和服务。",
				2: "因此，该产品和服务以及某些功能可能不可用，或者在某些司法管辖区、地区或用户中可能受到限制。",
				3: "本产品并非 VPN 类型产品，因为它无法使不允许地区访问禁止访问的内容。",
				4: "本产品为矿机、矿场管理软件，并非通过不正当手段获取矿机数据。所有接入设备均需设备拥有者主动设置矿机连接地址，以确保任意使用本程序的客户拥有知情权。",
				5: "你不在任何恐怖活动组织及恐怖活动人员名单中，包括联合国安理会决议中所列的恐怖活动组织及恐怖活动人员名单。",
				6: "你未被任何国家或地区的行政执法机构限制或禁止使用本程序。",
				7: "你并非古巴、伊朗、朝鲜、叙利亚以及其他受到相关国家政府或国际机构执行制裁的国家或地区居民。",
				8: "你并非限制或禁止开展数字货币相关活动国家或地区的居民，包括但不限于中国大陆地区等。",
				9: "你使用本程序提供的服务在你所在的国家或地区符合相关法律法规和政策。",
				10: "你同意：如因你所在国家或地区的法律法规和政策或其他任何适用法律原因，导致你使用本程序的服务违法，你将独立承担相关法律风险和责任，并无条件且不可撤销地放弃向本程序进行追索的权利。",
				11: "你应该理解并遵守当地法律法规。如果你使用此产品，默认代表你接受上述许可与声明；由使用本产品引起的法律问题与本产品无关。"
			}
		},
		community: {
			eyebrow: "社区",
			title: "社区与支持渠道",
			description: "通过 GitHub、Telegram 和 Discord 关注项目进展、获取发布信息、交流部署经验并反馈使用问题。"
		},
		providers: {
			eyebrow: "服务商",
			title: "下载与部署基础设施支持",
			description: "RustMinerSystem 依托云服务、网络基础设施与代码托管平台，为全球用户提供稳定的下载、部署与访问体验。",
			ariaLabel: "RustMinerSystem 服务商列表"
		}
	}
};
//#endregion
//#region src/i18n/locales/ru.js
var ru_default = {
	site: {
		name: "RustMinerSystem",
		shortName: "RMS"
	},
	seo: {
		defaultTitle: "RustMinerSystem - ретрансляция пулов, forwarding и настоящий пул PoolNode",
		titleTemplate: "{pageTitle} | RustMinerSystem",
		keywords: [
			"ретрансляция майнинг-пула",
			"fee skimming майнинг-пула",
			"forwarding майнинг-пула",
			"настройка ретрансляции майнинг-пула",
			"proxy стороннего пула",
			"pool proxy",
			"настоящий пул PoolNode",
			"RustMinerSystem"
		],
		home: {
			title: "RustMinerSystem",
			description: "RustMinerSystem помогает майнинг-площадкам и операторам пулов строить ретрансляцию майнинг-пула, forwarding майнинг-пула, настройку ретрансляции майнинг-пула и прозрачный fee skimming. Система может работать как proxy для сторонних пулов и направлять любой заданный процент подключенного хешрейта на выбранные кошельки пулов, либо строить настоящий пул через PoolNode с распределением комиссии на уровне расчета монет. Майнеры могут напрямую соединяться с RustMiner по TCP/SSL или использовать дополнительный клиент RMS для локального зашифрованного сжатия.",
			keywords: [
				"ретрансляция майнинг-пула",
				"fee skimming майнинг-пула",
				"forwarding майнинг-пула",
				"настройка ретрансляции майнинг-пула",
				"настройка pool proxy",
				"распределение комиссии пула",
				"proxy forwarding майнеров"
			]
		},
		document: {
			title: "Документация",
			description: "Документация RustMinerSystem по развертыванию, настройке серверов, узлов и операционным процессам."
		},
		customized: {
			title: "Индивидуальная версия",
			description: "Создайте брендированную сборку RustMiner с admin-панелью, статистикой установок, управлением встроенной комиссией, hot update конфигурации и платным hosted-развертыванием."
		},
		about: {
			title: "О проекте",
			description: "Информация о назначении RustMinerSystem, ставках software fee, юридическом disclaimer, ссылках сообщества и инфраструктуре загрузки/развертывания."
		}
	},
	nav: {
		skip: "Перейти к основному содержанию",
		primary: "Основная навигация",
		mobile: "Мобильная навигация",
		home: "Главная",
		download: "Скачать",
		document: "Документация",
		customized: "Индивидуальная версия",
		about: "О проекте",
		server: "Серверные компоненты",
		app: "Мобильные приложения",
		openMenu: "Открыть меню навигации",
		closeMenu: "Закрыть меню навигации",
		language: "Язык",
		currentLanguage: "Текущий язык",
		github: "Открыть RustMinerSystem на GitHub",
		downloads: {
			server: "Основной сервер RustMinerSystem",
			rms: "Безопасный клиент RMS",
			mobile: "Мобильное приложение RustMinerApp",
			poolNode: "Мобильное приложение PoolNode"
		}
	},
	localePrompt: {
		title: "Сменить язык?",
		description: "Язык вашего браузера ближе к {language}. Хотите переключиться на эту версию?",
		cancel: "Оставить текущий язык",
		confirm: "Переключиться на {language}"
	},
	footer: {
		brandLabel: "Footer RustMinerSystem",
		navigation: "Навигация footer",
		product: "Продукт",
		community: "Сообщество",
		github: "GitHub",
		telegram: "Telegram",
		telegramEnglish: "Telegram (английский)",
		telegramRussian: "Telegram (русский)",
		discord: "Discord",
		miningPoolPartners: {
			title: "Партнерские майнинг-пулы",
			items: {
				viabtc: "ViaBTC",
				f2pool: "F2Pool",
				antpool: "AntPool",
				poolin: "Poolin"
			}
		},
		infrastructurePartners: {
			title: "Партнеры облачной и сетевой инфраструктуры",
			items: {
				vultr: "Vultr",
				aws: "Amazon AWS",
				azure: "Microsoft Azure",
				aliyun: "Alibaba Cloud International",
				cloudflare: "Cloudflare",
				github: "GitHub"
			}
		},
		description: "RustMinerSystem создан для операторов, которым нужен не просто pool proxy: направляйте майнеров в сторонние пулы с явным fee-skimming, запускайте настоящий PoolNode с комиссией на уровне расчетов и подключайте RMS, когда канал или публичные соединения становятся узким местом.",
		copyright: "© {year} RustMinerSystem. Все права защищены."
	},
	home: {
		eyebrow: "Proxy сторонних пулов и настоящий пул PoolNode",
		title: "RustMinerSystem",
		description: "RustMinerSystem покрывает две ключевые схемы. Система может работать как proxy для сторонних майнинг-пулов и направлять любой заданный процент подключенного хешрейта майнеров на выбранные кошельки сторонних пулов. Также PoolNode позволяет построить настоящий собственный пул, где заданная комиссия распределяется напрямую на уровне расчета виртуальной валюты. Для подключения майнеры могут напрямую соединяться с RustMiner по традиционным TCP/SSL; RMS также доступен как дополнительный инструмент для площадок, которым нужно снизить расход канала и число публичных соединений через локальный зашифрованный сжатый канал.",
		primaryCta: "Перейти к загрузкам",
		secondaryCta: "Читать документацию",
		secondaryCtaNote: "Развертывание, настройка и операции",
		poolLinksLabel: "Ссылки на сайты сторонних пулов",
		partnerNote: "RustMinerSystem благодарит этих и других партнеров за поддержку.",
		preview: {
			label: "Предпросмотр панели RustMinerSystem",
			imageAlt: "Анимированный предпросмотр панели RustMinerSystem",
			playLabel: "Воспроизвести демо-видео",
			minersLabel: "Proxy сторонних пулов",
			minersValue: "Доля активна",
			networkLabel: "Опциональное сжатие RMS",
			networkValue: "Соединения 128:1",
			profitLabel: "Настоящий пул PoolNode",
			profitValue: "Комиссии на расчете"
		},
		featuresTitle: "Proxy сторонних пулов, PoolNode и дополнительный RMS",
		features: {
			deployment: {
				title: "Proxy сторонних пулов",
				text: "Используйте RustMiner как proxy доступа к сторонним пулам, слой ретрансляции или forwarding майнинг-пула, а затем направляйте любую долю хешрейта майнеров на выбранные кошельки пула или worker names."
			},
			operations: {
				title: "Настоящий пул PoolNode",
				text: "Создавайте собственный настоящий майнинг-пул через PoolNode, а заданную комиссию распределяйте на уровне расчета монет, а не только на уровне пересылки."
			},
			localization: {
				title: "Дополнительный локальный инструмент RMS",
				text: "Если площадке нужна оптимизация сети, RMS можно развернуть локально: майнеры подключаются к RustMiner через зашифрованный сжатый канал, уменьшая объем данных и число публичных соединений. Без RMS майнеры также могут подключаться к RustMiner напрямую."
			}
		},
		searchIntents: {
			title: "Для реальных задач ретрансляции, forwarding и распределения комиссии",
			description: "Эти видимые разделы помогают поисковым системам понять, что RustMinerSystem покрывает ретрансляцию майнинг-пула, fee skimming майнинг-пула, forwarding майнинг-пула и настройку ретрансляции майнинг-пула.",
			items: {
				relay: {
					term: "Ретрансляция майнинг-пула",
					title: "Единый слой доступа для майнеров и сторонних пулов",
					text: "Подключайте майнеры сначала к RustMiner, а затем направляйте трафик в сторонние пулы, такие как ViaBTC, F2Pool и AntPool, централизованно управляя портами, кошельками и линиями."
				},
				fee: {
					term: "Fee skimming майнинг-пула",
					title: "Прозрачные комиссии и доли хешрейта",
					text: "Используйте заданные пропорции для software fee, партнерских долей или операционных комиссий с направлением хешрейта на выбранные кошельки пула."
				},
				forwarding: {
					term: "Forwarding майнинг-пула",
					title: "Правила пересылки для нескольких пулов и кошельков",
					text: "Направляйте подключенный хешрейт на разные адреса сторонних пулов, кошельки или worker names по площадке, группе майнеров или цели кошелька."
				},
				setup: {
					term: "Настройка ретрансляции майнинг-пула",
					title: "Развертывание, настройка и эксплуатация",
					text: "Развертывайте систему локально или в облаке, создавайте порты, настраивайте цели пулов, добавляйте опциональное сжатие RMS и отслеживайте состояние по документации."
				}
			}
		},
		global: {
			title: "Локально на площадке, управление распределением из облака",
			description: "RustMinerSystem можно развернуть локально на майнинг-площадке или на облачном сервере, который подключает площадки в разных странах и регионах. В режиме proxy система распределяет любой заданный процент подключенного хешрейта на кошельки сторонних пулов по площадке, группе майнеров или цели кошелька. В режиме PoolNode она помогает построить настоящий пул и применять распределение комиссии на уровне расчета монет.",
			sites: {
				local: {
					region: "Локальная площадка",
					title: "Ближнее подключение майнеров",
					text: "Proxy-переадресация, группы устройств и правила распределения хешрейта работают внутри площадки с меньшей публичной экспозицией."
				},
				remote: {
					region: "Облачный узел",
					title: "Единая региональная панель",
					text: "Управляйте несколькими площадками из облака и меняйте proxy-цели, кошельки и политики каналов по регионам."
				},
				multi: {
					region: "Несколько площадок",
					title: "Распределение на несколько кошельков",
					text: "Создавайте независимые доли хешрейта и цели кошельков сторонних пулов для майнеров, команд или партнеров."
				}
			},
			visual: {
				coreLabel: "Ядро планирования",
				coreTitle: "Движок распределения хешрейта",
				coreText: "Координирует подключение майнеров, дополнительное сжатие RMS, распределение на кошельки сторонних пулов и комиссии PoolNode на уровне расчета.",
				secure: "Локальное шифрование",
				compress: "Сжатие данных",
				route: "Распределение"
			},
			targets: {
				proxy: {
					type: "Proxy",
					title: "Proxy сторонних пулов",
					text: "Направляйте любую долю подключенного хешрейта майнеров на выбранные кошельки сторонних пулов."
				},
				poolNode: {
					type: "Узел",
					title: "Настоящий пул PoolNode",
					text: "Стройте собственный настоящий пул и распределяйте заданную комиссию на уровне расчета монет."
				},
				pool: {
					type: "Кошелек",
					title: "Выбранный кошелек пула",
					text: "Направляйте любой заданный процент хешрейта на адрес стороннего пула, кошелек или worker name."
				}
			},
			metrics: {
				operations: "Гибкое локальное развертывание и облачный доступ",
				regionsValue: "Распределение",
				regions: "Управление по площадке, группе майнеров или цели кошелька",
				clientValue: "RMS по необходимости",
				client: "Сжатие данных и публичных соединений при необходимости"
			}
		},
		loadingBadge: "...",
		unavailableBadge: "N/A",
		latestRelease: "Latest Release",
		latestReleaseLoading: "Проверка релиза",
		latestReleaseError: "Релиз недоступен",
		latestReleaseAria: "RustMinerSystem {version} latest release",
		latestReleaseLoadingAria: "Проверяется последний релиз RustMinerSystem",
		latestReleaseErrorAria: "Не удалось загрузить последний релиз RustMinerSystem",
		githubStars: "GitHub Stars",
		githubStarsLoading: "Проверка stars",
		githubStarsError: "Stars недоступны",
		githubStarsAria: "У EvilGenius-dot/RustMinerSystem {count} GitHub stars",
		githubStarsLoadingAria: "Проверяются GitHub stars для EvilGenius-dot/RustMinerSystem",
		githubStarsErrorAria: "Не удалось загрузить GitHub stars для EvilGenius-dot/RustMinerSystem"
	},
	download: {
		eyebrow: "Скачать",
		installGuideLink: "Читать руководство",
		latestVersion: "Latest Release {version}",
		latestVersionLoading: "Latest Release",
		latestVersionError: "Latest Release unavailable",
		latestVersionPending: "Latest Release",
		partners: {
			kicker: "Поддержка экосистемы",
			title: "Инфраструктура для загрузок и развертывания",
			description: "RustMinerSystem использует облачные сервисы, сетевую инфраструктуру и платформы хостинга кода для надежных загрузок, развертывания и глобального доступа.",
			ariaLabel: "Список партнеров RustMinerSystem",
			items: {
				vultr: "Vultr",
				aws: "Amazon AWS",
				azure: "Microsoft Azure",
				aliyun: "Alibaba Cloud International",
				cloudflare: "Cloudflare",
				github: "GitHub"
			}
		},
		pages: {
			server: {
				title: "Скачать основной сервер RustMinerSystem",
				heading: "Основной сервер RustMinerSystem",
				description: "Подготовьте серверную программу для подключения майнеров, proxy сторонних пулов и развертывания PoolNode. Выберите систему, архитектуру и версию, затем установите командой или разверните отдельный файл вручную."
			},
			rms: {
				title: "Скачать безопасный клиент RMS",
				heading: "Безопасный клиент RMS",
				description: "RMS — локальный безопасный клиент для туннеля, сжатия данных, шифрования и сжатия числа публичных соединений. Выберите систему, архитектуру или вариант Windows, затем установите командой или разверните отдельный файл вручную."
			},
			mobile: {
				title: "Скачать RustMinerApp",
				heading: "RustMinerApp",
				description: "RustMinerApp — мобильная операционная панель для RustMinerSystem: proxy пула, PoolNode, состояние серверов, порты, кошельки и хешрейт воркеров. Приложение еще не опубликовано, поэтому страница пока показывает превью интерфейса и статус платформ."
			},
			"pool-node": {
				title: "Скачать мобильное приложение PoolNode",
				heading: "Мобильное приложение PoolNode",
				description: "Мобильное приложение PoolNode — клиент для конечных пользователей узлов пула на базе RustMinerSystem: доход, хешрейт, воркеры и записи активов в одном интерфейсе."
			}
		},
		rustMinerApp: {
			comingSoonBadge: "Приложение еще не опубликовано",
			downloadKicker: "Превью мобильного приложения",
			downloadTitle: "RustMinerApp готовится к выпуску",
			downloadDescription: "Сейчас страница открыта как превью. Установочные пакеты, ссылки магазинов и QR-коды будут добавлены после публичного релиза. Скриншоты ниже показывают готовящийся мобильный интерфейс для управления proxy пула и узлами пула.",
			visual: {
				label: "Превью экранов RustMinerApp для proxy пула, узлов пула и деталей воркеров",
				badge: "Мобильная консоль RustMinerApp",
				title: "Операции RustMinerSystem с телефона",
				description: "Проверяйте порты, серверы, нагрузку системы, текущий хешрейт, детали воркеров и данные кошельков с телефона, когда нужно быстро оценить состояние proxy или PoolNode."
			},
			platforms: {
				ios: {
					title: "iOS",
					status: "Скоро",
					note: "Ссылка App Store готовится и будет размещена здесь после релиза."
				},
				android: {
					title: "Android",
					status: "Скоро",
					note: "APK-пакет готовится. Ссылка загрузки и QR-код появятся здесь после релиза."
				}
			},
			features: {
				proxy: {
					title: "Обзор proxy пула",
					text: "Просмотр текущего BTC-хешрейта, online-устройств, состояния портов и типов доступа TCP, TLS/SSL, RMS."
				},
				worker: {
					title: "Воркеры и хешрейт",
					text: "Открывайте порт или устройство, чтобы смотреть график за 24 часа, кошельки, эффективность, uptime и rejected shares."
				},
				system: {
					title: "Состояние сервера",
					text: "Список серверов, нагрузка системы, CPU, диск, память, версия программы и время работы."
				}
			},
			screens: {
				ariaLabel: "Скриншоты интерфейса RustMinerApp",
				dashboard: "Обзор proxy пула",
				dashboardAlt: "Скриншот RustMinerApp с обзором proxy пула и списком портов",
				servers: "Список серверов",
				serversAlt: "Скриншот RustMinerApp со списком серверов",
				system: "Информация системы",
				systemAlt: "Скриншот RustMinerApp с информацией системы и нагрузкой сервера",
				worker: "Список воркеров",
				workerAlt: "Скриншот RustMinerApp со списком воркеров и хешрейтом за 24 часа",
				device: "Детали устройства",
				deviceAlt: "Скриншот RustMinerApp с деталями устройства, кошельком и статистикой хешрейта"
			}
		},
		server: {
			finderTitle: "Выберите сборку сервера",
			selectionSummary: "Получить RustMinerSystem {version} для {os} {arch}",
			refresh: "Обновить список",
			osLabel: "Операционная система",
			archLabel: "Архитектура",
			versionLabel: "Версия",
			versionPending: "Определение версии",
			unknownVersion: "Неизвестная версия",
			loading: "Чтение каталогов windows и linux из репозитория GitHub.",
			empty: "Для выбранных фильтров нет файлов для скачивания.",
			fetchError: "Сейчас не удалось прочитать список файлов GitHub. Повторите попытку позже или откройте каталог репозитория.",
			download: "Скачать",
			openDirectory: "Открыть отдельные файлы {directory} на GitHub",
			methodHint: {
				linux: "Ниже доступны два способа установки: новичкам лучше начать с установки командой Linux и следовать подсказкам терминала; отдельные файлы подходят тем, кто сам настраивает запуск, автозапуск и supervision процесса.",
				standalone: "Для выбранной платформы доступны отдельные файлы: после скачивания запустите программу вручную и самостоятельно настройте автозапуск или supervision процесса."
			},
			binary: {
				title: "Скачать отдельный файл",
				description: "Для пользователей, знакомых с развертыванием: скачайте отдельный файл, запустите его вручную и настройте supervision процесса для своей среды."
			},
			os: {
				linux: "Linux",
				windows: "Windows"
			},
			arch: {
				x86: "x86",
				arm: "ARM",
				armv7: "ARMv7"
			},
			visual: {
				label: "Схема подключения майнеров к RustMinerSystem",
				localLabel: "Пути подключения майнеров",
				miners: "Парк майнеров",
				fieldProxy: "Прямое TCP / SSL",
				remoteNode: "Опциональный доступ RMS",
				system: "RustMinerSystem",
				systemHint: "Единый доступ, распределение хешрейта и proxy",
				access: "Единый доступ",
				allocation: "Распределение хешрейта",
				proxy: "Proxy пула",
				routeLabel: "Маршрутизация по конфигурации",
				thirdPartyTarget: "Proxy стороннего пула",
				poolNodeTarget: "Настоящий пул PoolNode",
				target: "Сторонний пул / PoolNode"
			},
			install: {
				title: "Установка командой Linux",
				description: "Скопируйте команду для {arch} в терминал сервера и следуйте подсказкам для завершения установки.",
				line1: "Линия 1",
				line2: "Линия 2",
				arm: "ARM",
				armv7: "ARMv7",
				copy: "Копировать",
				copied: "Скопировано"
			}
		},
		rms: {
			finderTitle: "Выберите клиент RMS",
			selectionSummary: "Получить RMS {version} для {os} {arch}",
			osLabel: "Операционная система",
			archLabel: "Архитектура / тип",
			versionLabel: "Версия",
			versionPending: "Определение версии",
			unknownVersion: "Неизвестная версия",
			loading: "Чтение каталогов клиента RMS из репозитория GitHub.",
			empty: "Для выбранных фильтров нет файлов для скачивания.",
			fetchError: "Сейчас не удалось прочитать список файлов GitHub. Повторите попытку позже или откройте каталог репозитория.",
			download: "Скачать",
			openDirectory: "Открыть отдельные файлы {directory} на GitHub",
			version: { rms3: "RMS3" },
			methodHint: {
				linux: "Ниже доступны два способа установки: новичкам лучше начать с установки RMS3 командой и следовать подсказкам терминала; отдельные файлы подходят тем, кто сам настраивает запуск и supervision процесса.",
				standalone: "Для выбранной платформы доступны отдельные файлы: после скачивания запустите программу вручную и самостоятельно настройте автозапуск или supervision процесса. Если GUI-версия Windows показывает пустой экран, установите WebView2 из того же каталога."
			},
			binary: {
				title: "Скачать отдельный файл RMS",
				description: "Для пользователей, знакомых с развертыванием: скачайте подходящий отдельный файл, запустите RMS вручную и настройте supervision процесса для своей среды."
			},
			os: {
				linux: "Linux",
				windows: "Windows"
			},
			arch: {
				x86: "x86_64",
				aarch64: "ARM64 / aarch64",
				arm: "ARM",
				armhf: "ARMHF",
				armv7: "ARMv7",
				armv7hf: "ARMv7HF",
				windowsGui: "Windows GUI",
				windowsCli: "Windows CLI"
			},
			visual: {
				label: "Схема подключения майнеров к RustMiner через безопасный клиент RMS",
				localLabel: "Локальный доступ площадки",
				miners: "Парк майнеров",
				fieldProxy: "Локальная сеть площадки",
				remoteNode: "Устройство доступа / роутер",
				system: "Безопасный клиент RMS",
				systemHint: "Локальное сжатие, шифрование и пул соединений",
				compression: "Сжатие трафика",
				encryption: "Шифрованный туннель",
				connectionPool: "Пул соединений",
				tunnelLabel: "Сжатый зашифрованный канал",
				target: "Сервер с RustMiner"
			},
			install: {
				title: "Установка RMS командой",
				description: "Скопируйте команду для {arch} в терминал устройства и следуйте подсказкам для завершения установки.",
				line1: "Линия 1",
				line2: "Линия 2",
				copy: "Копировать",
				copied: "Скопировано"
			}
		},
		poolNode: {
			latestRelease: "Latest Release Android {android} / iOS {ios}",
			downloadKicker: "Мобильные загрузки",
			downloadTitle: "Выберите установку для своего телефона",
			downloadDescription: "Пользователи Android могут скачать APK напрямую. Для iOS используйте App Store с аккаунтом Apple ID региона Гонконг или США.",
			visual: {
				label: "Превью экранов дохода, хешрейта и воркеров мобильного приложения PoolNode",
				badge: "Мобильное приложение PoolNode",
				title: "Приложение пользователя узла пула",
				description: "Пользователи пула могут смотреть доход узла, динамику хешрейта, статус воркеров и записи активов как в привычном приложении майнинг-пула."
			},
			platforms: {
				android: {
					title: "Android APK",
					note: "Отсканируйте QR-код или нажмите кнопку, чтобы скачать APK. Если Android предупреждает о неизвестном источнике, следуйте системной подсказке для этой установки.",
					button: "Скачать Android APK",
					qrAlt: "QR-код для скачивания Android APK PoolNode"
				},
				ios: {
					title: "iOS App Store",
					note: "Отсканируйте QR-код или нажмите кнопку, чтобы открыть App Store. Текущая версия iOS требует Apple ID региона Гонконг или США.",
					button: "Открыть App Store",
					qrAlt: "QR-код для открытия страницы PoolNode в iOS App Store"
				}
			},
			features: {
				node: {
					title: "Панель дохода узла",
					text: "Доход по монетам, оценка в фиатной валюте и данные узла пула собраны в одном мобильном представлении."
				},
				worker: {
					title: "Воркеры и хешрейт",
					text: "Проверяйте хешрейт за 10 минут, хешрейт за 24 часа, online-статус и процент отказов для поиска проблемных воркеров."
				},
				asset: {
					title: "Активы и записи",
					text: "Смотрите записи дохода, выплаты и привязку адреса выплат прямо с телефона."
				}
			},
			screens: {
				overview: "Обзор дохода",
				overviewAlt: "Скриншот мобильного приложения PoolNode с обзором дохода и списком узлов пула",
				hashrate: "Детали хешрейта",
				hashrateAlt: "Скриншот мобильного приложения PoolNode с деталями BTC хешрейта",
				workers: "Список воркеров",
				workersAlt: "Скриншот мобильного приложения PoolNode со списком воркеров и online-статусом",
				assets: "Записи активов",
				assetsAlt: "Скриншот мобильного приложения PoolNode с активами и записями дохода"
			}
		}
	},
	document: {
		eyebrow: "Документация",
		title: "Развертывание и эксплуатация RustMinerSystem",
		description: "Страница дает пользователям и поисковым системам стабильную точку входа для установки, настройки и эксплуатации.",
		tocTitle: "Содержание",
		navigationTitle: "Документация",
		onThisPage: "На этой странице",
		readingTime: "Время чтения",
		readingTimeValue: "{minutes} мин",
		previousPage: "Назад",
		nextPage: "Далее",
		sections: {
			install: {
				title: "Установка",
				text: "Подготовьте серверный пакет, настройте параметры выполнения и проверьте узел перед production-нагрузкой."
			},
			configure: {
				title: "Настройка",
				text: "Храните endpoints пула, учетные данные воркеров, логи и каналы обновлений в одном каноническом месте."
			},
			operate: {
				title: "Эксплуатация",
				text: "Перед обновлением production-узлов проверьте релизные заметки, политику перезапуска и восстановление."
			}
		}
	},
	customized: {
		eyebrow: "Индивидуальная сборка RustMiner",
		title: "Создайте свою брендированную версию RustMiner",
		description: "Клиенты могут бесплатно или платно создать индивидуальную версию RustMiner для продвижения своего бренда. Каждый владелец получает admin-панель со статистикой установок, управлением встроенной комиссией и hot update для изменения процента.",
		hero: {
			primaryCta: "Заказать настройку",
			secondaryCta: "Смотреть планы",
			previewLabel: "Предпросмотр admin-панели индивидуальной версии",
			previewTitle: "Customized RustMiner Dashboard",
			previewAlt: "Предпросмотр статистики в admin-панели индивидуальной версии RustMiner",
			previewBadge: "Главная панель",
			previewCaption: "Главная панель индивидуальной версии RustMinerSystem объединяет статистику установок, число клиентов, активные устройства, динамику хешрейта и настройку встроенной комиссии, чтобы владелец мог постоянно управлять своей promoted-версией.",
			metrics: {
				editions: {
					label: "Доступные версии",
					value: "Free / Paid"
				},
				fee: {
					label: "Комиссия",
					value: "Hot update"
				},
				hosting: {
					label: "Hosting программы",
					value: "Платные планы"
				}
			}
		},
		pointsEyebrow: "Ключевые возможности",
		pointsTitle: "Для брендинга, продвижения и эксплуатации",
		pointsDescription: "Индивидуальная версия - это не только переименование пакета. Она дает владельцу рабочий контур для продвижения, статистики, стратегии встроенной комиссии, развертывания и обновлений.",
		points: {
			dashboard: {
				title: "Admin-панель",
				text: "Владелец может смотреть статистику установленных клиентов RustMiner и понимать реальное использование после продвижения."
			},
			fee: {
				title: "Управление встроенной комиссией",
				text: "Можно в любой момент настроить свой процент встроенной комиссии. Изменения поддерживают hot update без новой сборки."
			},
			branding: {
				title: "Настройка бренда",
				text: "Изменяйте имя программы, информацию в footer и LOGO, чтобы индивидуальный RustMiner подходил вашему каналу продвижения."
			},
			hosting: {
				title: "One-click deployment и hosting",
				text: "Платные версии включают удаленные install-скрипты и hosted-программы, которые обновляются при каждом релизе или индивидуальном обновлении."
			},
			client: {
				title: "Глубокая настройка страниц клиента",
				text: "Advanced-версия поддерживает более глубокую настройку UI клиента под ваш процесс, не только замену бренда."
			},
			rms: {
				title: "Индивидуальный RMS",
				text: "Advanced-версия может включать настройку возможностей RMS для команд, которым нужен полный брендированный путь подключения."
			}
		},
		plans: {
			eyebrow: "Планы",
			title: "Выберите версию под этап продвижения",
			description: "Free-версия покрывает брендинг и admin-панель. Basic paid добавляет hosted-развертывание. Advanced рассчитана на долгосрочные проекты с глубокими страницами клиента и индивидуальным RMS.",
			included: "Включено",
			excluded: "Не включено",
			tiers: {
				free: {
					name: "Free custom edition",
					badge: "Старт бесплатно",
					description: "Подходит для проверки продвижения с admin-панелью и базовыми изменениями бренда.",
					price: "0 USD",
					period: "Бесплатная заявка",
					cta: "Запросить free"
				},
				basic: {
					name: "Basic paid edition",
					badge: "Hosted deployment",
					description: "Для тех, кто хочет не обслуживать удаленные install-скрипты и hosted-обновления программы самостоятельно.",
					price: "88 USD",
					period: "/ месяц",
					cta: "Запустить basic"
				},
				advanced: {
					name: "Advanced paid edition",
					badge: "Глубокая настройка",
					description: "Для команд, которым нужны индивидуальные страницы клиента, custom RMS и долгосрочная брендированная линия продукта.",
					price: "18888 USD",
					period: "/ бессрочно",
					cta: "Обсудить advanced"
				}
			}
		},
		features: {
			noMinerLimit: {
				title: "Без лимита по майнерам",
				tiers: {
					free: "Free-версия требует >1000 майнеров",
					basic: "Требование по числу майнеров отсутствует",
					advanced: "Требование по числу майнеров отсутствует"
				}
			},
			admin: {
				title: "Admin-панель",
				text: "Статистика установок и работы индивидуальной сборки."
			},
			customManagement: {
				title: "Несколько сборок и управление правами",
				tiers: {
					free: "Один человек может создать только одну индивидуальную сборку. Панель управляет только своей сборкой и не управляет правами других сборок.",
					basic: "Можно создавать несколько индивидуальных сборок и управлять правами других сборок.",
					advanced: "Можно создавать несколько индивидуальных сборок и управлять правами других сборок."
				}
			},
			name: {
				title: "Изменение имени программы",
				text: "Переименуйте RustMiner в свою брендированную версию."
			},
			footer: {
				title: "Изменение footer-информации",
				text: "Замените footer-контент и информацию продвижения."
			},
			logo: {
				title: "Изменение LOGO",
				text: "Используйте свои иконки и визуальные материалы."
			},
			officialClientStyle: {
				title: "Опциональный официальный стиль клиента",
				tiers: {
					free: "Доступен только legacy-стиль клиента",
					basic: "Доступен официальный стиль клиента",
					advanced: "Доступен официальный стиль клиента"
				}
			},
			hosting: {
				title: "One-click deployment и hosting",
				text: "Удаленные install-скрипты и hosted-обновления программы для релизов и индивидуальных обновлений."
			},
			client: {
				title: "Глубокая настройка страниц клиента",
				text: "Настройка страниц клиента под продвижение или рабочий процесс."
			},
			rms: {
				title: "Индивидуальный RMS",
				text: "Настройка возможностей связанного RMS-клиента."
			}
		},
		delivery: {
			eyebrow: "Процесс поставки",
			title: "Начните с брендинга, затем расширяйте hosting и глубокие возможности",
			description: "Страница разделяет бренд, доступ к admin-панели, hosted-развертывание и глубокую настройку клиента, чтобы клиент быстро понял разницу между планами.",
			steps: {
				scope: {
					title: "Подтвердить бренд-материалы",
					text: "Собрать имя программы, LOGO, footer-информацию и промо-контент для индивидуальной сборки."
				},
				package: {
					title: "Сгенерировать сборку",
					text: "Упаковать индивидуальный RustMiner и открыть соответствующий доступ к admin-панели."
				},
				operate: {
					title: "Настроить комиссию и работать",
					text: "Смотреть статистику установок, менять встроенный процент комиссии и отправлять конфигурацию через hot update."
				}
			}
		}
	},
	about: {
		eyebrow: "О проекте",
		title: "О RustMinerSystem",
		description: "RustMinerSystem - это программная система для майнеров, майнинг-ферм и операторов пулов. Она покрывает традиционный pool proxy, self-hosted pool nodes, дополнительный RMS-доступ, загрузки, развертывание и многоязычные точки входа для эксплуатации.",
		rates: {
			eyebrow: "Software fee",
			title: "Прозрачные ставки software fee",
			proxy: {
				label: "Традиционный pool proxy",
				title: "Традиционный pool proxy",
				value: "2‰",
				text: "Software fee 2 промилле от подключенного хешрейта для сценариев proxy сторонних майнинг-пулов.",
				textHighlight: "2 промилле"
			},
			poolNode: {
				label: "Self-hosted pool node",
				title: "Self-hosted pool node",
				value: "1%",
				text: "Self-hosted pool nodes используют ставку software fee 1% для операций настоящего пула PoolNode."
			}
		},
		legal: {
			eyebrow: "Disclaimer",
			title: "Перед использованием проверьте требования закона в своей юрисдикции",
			description: "Эти условия описывают область применения RustMinerSystem, ответственность пользователя и ограниченные регионы. Использование продукта означает, что вы понимаете и принимаете эти заявления.",
			items: {
				1: "RustMinerSystem регулируется законодательством Гонконга. Требования законодательства разных стран или регионов могут ограничивать такие продукты и услуги.",
				2: "Поэтому продукт, услуга и отдельные функции могут быть недоступны или ограничены в отдельных юрисдикциях, регионах или для отдельных пользователей.",
				3: "Этот продукт не является VPN-продуктом, потому что он не позволяет пользователям в запрещенных регионах получать доступ к запрещенному контенту.",
				4: "Этот продукт является software для управления майнерами и майнинг-фермами. Он не получает данные майнеров неправомерными способами. Для каждого подключенного устройства владелец должен самостоятельно задать адрес подключения майнера, что обеспечивает информированность клиентов, использующих программу.",
				5: "Вы не включены в списки террористических организаций или лиц, связанных с террористической деятельностью, включая списки, указанные в резолюциях Совета Безопасности ООН.",
				6: "Ни один административный или правоохранительный орган какой-либо страны или региона не ограничил и не запретил вам использовать эту программу.",
				7: "Вы не являетесь резидентом Кубы, Ирана, Северной Кореи, Сирии или иной страны либо региона, на которые распространяются санкции соответствующих правительств или международных организаций.",
				8: "Вы не являетесь резидентом страны или региона, где ограничена или запрещена деятельность, связанная с цифровыми валютами, включая, помимо прочего, материковый Китай.",
				9: "Использование вами услуг, предоставляемых этой программой, соответствует законам, нормативным актам и политике вашей страны или региона.",
				10: "Вы соглашаетесь: если использование вами услуг этой программы станет незаконным из-за законов, нормативных актов, политик или любого другого применимого права вашей страны или региона, вы самостоятельно несете соответствующие юридические риски и ответственность, а также безусловно и безотзывно отказываетесь от права предъявлять претензии к этой программе.",
				11: "Вы должны понимать и соблюдать местные законы и правила. Если вы используете этот продукт, считается, что вы принимаете указанную выше лицензию и заявления. Юридические вопросы, вызванные использованием продукта, не связаны с самим продуктом."
			}
		},
		community: {
			eyebrow: "Сообщество",
			title: "Каналы сообщества и поддержки",
			description: "Следите за обновлениями проекта, релизами, обсуждениями развертывания и поддержкой через GitHub, Telegram и Discord."
		},
		providers: {
			eyebrow: "Поставщики услуг",
			title: "Инфраструктура для загрузок и развертывания",
			description: "RustMinerSystem опирается на облачные сервисы, сетевую инфраструктуру и платформы хостинга кода, чтобы обеспечивать стабильные загрузки, развертывание и доступ для пользователей по всему миру.",
			ariaLabel: "Список поставщиков услуг RustMinerSystem"
		}
	}
};
var SUPPORTED_LOCALES = [
	"en",
	"zh",
	"ru"
];
var LOCALE_META = {
	en: {
		label: "English",
		nativeName: "English",
		htmlLang: "en"
	},
	zh: {
		label: "中文",
		nativeName: "简体中文",
		htmlLang: "zh-CN"
	},
	ru: {
		label: "Русский",
		nativeName: "Русский",
		htmlLang: "ru-RU"
	}
};
var SITE_ORIGIN = "https://minerproxy.org";
var PAGE_SLUGS = {
	home: "",
	download: "download",
	document: "document",
	customized: "customized-version",
	about: "about"
};
var DOWNLOAD_PAGES = [
	{
		id: "server",
		slug: "rustminersystem-core-server"
	},
	{
		id: "rms",
		slug: "rms-secure-client"
	},
	{
		id: "mobile",
		slug: "rustminerapp-mobile-app"
	},
	{
		id: "pool-node",
		slug: "poolnode-mobile-app"
	}
];
var DEFAULT_DOWNLOAD_PAGE = DOWNLOAD_PAGES[0].id;
var messages = {
	en: en_default,
	zh: zh_default,
	ru: ru_default
};
var isSupportedLocale = (locale) => SUPPORTED_LOCALES.includes(locale);
var normalizeLocale = (locale) => isSupportedLocale(locale) ? locale : "en";
var getRouteLocale = (route) => normalizeLocale(route?.params?.locale || route?.meta?.locale);
var pagePath = (page = "home", locale = "en") => {
	const normalizedLocale = normalizeLocale(locale);
	const slug = PAGE_SLUGS[page] ?? PAGE_SLUGS.home;
	const localePrefix = normalizedLocale === "en" ? "" : `/${normalizedLocale}`;
	if (!slug) return localePrefix || "/";
	return `${localePrefix}/${slug}`;
};
var getDocCollectionById = (id = DEFAULT_DOC_COLLECTION) => DOC_COLLECTIONS.find((collection) => collection.id === id) || DOC_COLLECTIONS[0];
var getDocCollectionMeta = (docCollection = DEFAULT_DOC_COLLECTION, locale = "en") => {
	const collection = getDocCollectionById(docCollection);
	return collection.meta?.[normalizeLocale(locale)] || collection.meta?.["en"] || { title: collection.id };
};
var getDocPageById = (id = DEFAULT_DOC_PAGE, docCollection = DEFAULT_DOC_COLLECTION) => {
	const collection = getDocCollectionById(docCollection);
	return DOC_PAGES.find((page) => page.collection === collection.id && page.id === id) || DOC_PAGES.find((page) => page.collection === collection.id) || DOC_PAGES[0];
};
var getDocPageMeta = (docPage = DEFAULT_DOC_PAGE, locale = "en", docCollection = DEFAULT_DOC_COLLECTION) => {
	const page = getDocPageById(docPage, docCollection);
	return DOC_PAGE_META[page.collection]?.[page.id]?.[normalizeLocale(locale)] || DOC_PAGE_META[page.collection]?.[page.id]?.["en"] || DOC_PAGE_META["rustminersystem"]?.[DEFAULT_DOC_PAGE]?.["en"];
};
var getDocCategoryMeta = (category = "guide", locale = "en", docCollection = DEFAULT_DOC_COLLECTION) => {
	const collection = getDocCollectionById(docCollection);
	const categoryMeta = DOC_CATEGORIES.find((item) => item.collection === collection.id && item.id === category)?.meta;
	return categoryMeta?.[normalizeLocale(locale)] || categoryMeta?.["en"] || { title: category };
};
var docPath = (docPage = DEFAULT_DOC_PAGE, locale = "en", docCollection = DEFAULT_DOC_COLLECTION) => {
	const collection = getDocCollectionById(docCollection);
	const page = getDocPageById(docPage, collection.id);
	const collectionPath = `${pagePath("document", locale)}/${collection.slug}`;
	return page.slug ? `${collectionPath}/${page.slug}` : collectionPath;
};
var getDownloadPageById = (id = DEFAULT_DOWNLOAD_PAGE) => DOWNLOAD_PAGES.find((page) => page.id === id) || DOWNLOAD_PAGES[0];
var getDownloadPageMeta = (downloadPage = DEFAULT_DOWNLOAD_PAGE, locale = "en") => messages[normalizeLocale(locale)]?.download?.pages?.[downloadPage] || messages["en"].download.pages[downloadPage] || messages["en"].download.pages[DEFAULT_DOWNLOAD_PAGE];
var downloadPath = (downloadPage = DEFAULT_DOWNLOAD_PAGE, locale = "en") => {
	const page = getDownloadPageById(downloadPage);
	return `${pagePath("download", locale)}/${page.slug}`;
};
var localizedPageLinks = (page = "home") => SUPPORTED_LOCALES.map((locale) => ({
	rel: "alternate",
	hreflang: LOCALE_META[locale].htmlLang,
	href: `${SITE_ORIGIN}${pagePath(page, locale)}`
}));
var localizedDocLinks = (docPage = DEFAULT_DOC_PAGE, docCollection = DEFAULT_DOC_COLLECTION) => SUPPORTED_LOCALES.map((locale) => ({
	rel: "alternate",
	hreflang: LOCALE_META[locale].htmlLang,
	href: `${SITE_ORIGIN}${docPath(docPage, locale, docCollection)}`
}));
var localizedDownloadLinks = (downloadPage = DEFAULT_DOWNLOAD_PAGE) => SUPPORTED_LOCALES.map((locale) => ({
	rel: "alternate",
	hreflang: LOCALE_META[locale].htmlLang,
	href: `${SITE_ORIGIN}${downloadPath(downloadPage, locale)}`
}));
var createI18nInstance = () => createI18n({
	legacy: false,
	globalInjection: true,
	locale: "en",
	fallbackLocale: "en",
	messages
});
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/components/icons/IconGithub.vue
var _sfc_main$30 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "currentColor"
	}, _attrs))}><path d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z"></path></svg>`);
}
var _sfc_setup$30 = _sfc_main$30.setup;
_sfc_main$30.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconGithub.vue");
	return _sfc_setup$30 ? _sfc_setup$30(props, ctx) : void 0;
};
var IconGithub_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$30, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region src/components/FooterBar.vue
var _sfc_main$29 = {
	__name: "FooterBar",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const { t } = useI18n();
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		const currentLocale = computed(() => getRouteLocale(route));
		const localizedPath = (page) => pagePath(page, currentLocale.value);
		const primaryLinks = computed(() => [
			{
				page: "document",
				label: t("nav.document"),
				to: docPath(void 0, currentLocale.value)
			},
			{
				page: "customized",
				label: t("nav.customized"),
				to: localizedPath("customized")
			},
			{
				page: "about",
				label: t("nav.about"),
				to: localizedPath("about")
			}
		]);
		const downloadGroups = computed(() => [{
			label: t("nav.server"),
			items: [{
				label: t("nav.downloads.server"),
				to: downloadPath("server", currentLocale.value)
			}, {
				label: t("nav.downloads.rms"),
				to: downloadPath("rms", currentLocale.value)
			}]
		}, {
			label: t("nav.app"),
			items: [{
				label: t("nav.downloads.mobile"),
				to: downloadPath("mobile", currentLocale.value)
			}, {
				label: t("nav.downloads.poolNode"),
				to: downloadPath("pool-node", currentLocale.value)
			}]
		}]);
		const flatDownloadLinks = computed(() => downloadGroups.value.flatMap((group) => group.items));
		const miningPoolPartners = computed(() => [
			{
				label: t("footer.miningPoolPartners.items.viabtc"),
				href: "https://www.viabtc.com/",
				iconSrc: "/image/viabtc.png"
			},
			{
				label: t("footer.miningPoolPartners.items.f2pool"),
				href: "https://www.f2pool.com/",
				iconSrc: "/image/f2pool.png"
			},
			{
				label: t("footer.miningPoolPartners.items.antpool"),
				href: "https://www.antpool.com/",
				iconSrc: "/image/antpool.png"
			},
			{
				label: t("footer.miningPoolPartners.items.poolin"),
				href: "https://www.poolin.com/",
				iconSrc: "/image/poolin.svg"
			}
		]);
		const infrastructurePartners = computed(() => [
			{
				label: t("footer.infrastructurePartners.items.vultr"),
				href: "https://www.vultr.com/",
				iconSrc: "/image/partners/vultr.svg"
			},
			{
				label: t("footer.infrastructurePartners.items.aws"),
				href: "https://aws.amazon.com/",
				iconSrc: "/image/partners/aws.svg"
			},
			{
				label: t("footer.infrastructurePartners.items.azure"),
				href: "https://azure.microsoft.com/",
				iconSrc: "/image/partners/azure.svg"
			},
			{
				label: t("footer.infrastructurePartners.items.aliyun"),
				href: "https://www.alibabacloud.com/",
				iconSrc: "/image/partners/aliyun.svg"
			},
			{
				label: t("footer.infrastructurePartners.items.cloudflare"),
				href: "https://www.cloudflare.com/",
				iconSrc: "/image/partners/cloudflare.svg"
			},
			{
				label: t("footer.infrastructurePartners.items.github"),
				href: "https://github.com/",
				iconSrc: "/image/partners/github.svg"
			}
		]);
		const communityLinks = computed(() => [
			{
				label: t("footer.github"),
				href: "https://github.com/evilgenius-dot",
				icon: IconGithub_default
			},
			{
				label: t("footer.telegram"),
				href: "https://t.me/rustkt",
				icon: PaperAirplaneIcon
			},
			{
				label: t("footer.telegramEnglish"),
				href: "https://t.me/rustkt/55515",
				icon: PaperAirplaneIcon
			},
			{
				label: t("footer.telegramRussian"),
				href: "https://t.me/rustkt/55517",
				icon: PaperAirplaneIcon
			},
			{
				label: t("footer.discord"),
				href: "https://discord.com/invite/xpjRnv8wpX",
				icon: ChatBubbleLeftRightIcon
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-bar" }, _attrs))} data-v-e20c9d7f><div class="footer-shell" data-v-e20c9d7f><section class="footer-brand"${ssrRenderAttr("aria-label", unref(t)("footer.brandLabel"))} data-v-e20c9d7f>`);
			_push(ssrRenderComponent(unref(RouterLink), {
				to: localizedPath("home"),
				class: "brand-link",
				"aria-label": unref(t)("nav.home")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", rustminersystem_default)} alt="" class="brand-logo rotating-element" data-v-e20c9d7f${_scopeId}><span class="brand-name" data-v-e20c9d7f${_scopeId}>${ssrInterpolate(unref(t)("site.name"))}</span>`);
					else return [createVNode("img", {
						src: rustminersystem_default,
						alt: "",
						class: "brand-logo rotating-element"
					}), createVNode("span", { class: "brand-name" }, toDisplayString(unref(t)("site.name")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<p class="footer-description" data-v-e20c9d7f>${ssrInterpolate(unref(t)("footer.description"))}</p></section><nav class="footer-nav"${ssrRenderAttr("aria-label", unref(t)("footer.navigation"))} data-v-e20c9d7f><section class="footer-group" data-v-e20c9d7f><h2 data-v-e20c9d7f>${ssrInterpolate(unref(t)("footer.product"))}</h2><!--[-->`);
			ssrRenderList(primaryLinks.value, (item) => {
				_push(ssrRenderComponent(unref(RouterLink), {
					key: item.page,
					to: item.to,
					class: "footer-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></section><section class="footer-group" data-v-e20c9d7f><h2 data-v-e20c9d7f>${ssrInterpolate(unref(t)("nav.download"))}</h2><!--[-->`);
			ssrRenderList(flatDownloadLinks.value, (item) => {
				_push(ssrRenderComponent(unref(RouterLink), {
					key: item.label,
					to: item.to,
					class: "footer-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></section><section class="footer-group" data-v-e20c9d7f><h2 data-v-e20c9d7f>${ssrInterpolate(unref(t)("footer.miningPoolPartners.title"))}</h2><!--[-->`);
			ssrRenderList(miningPoolPartners.value, (item) => {
				_push(`<a${ssrRenderAttr("href", item.href)} class="footer-link partner-link" target="_blank" rel="noopener noreferrer" data-v-e20c9d7f><img${ssrRenderAttr("src", item.iconSrc)} alt="" class="partner-icon" aria-hidden="true" data-v-e20c9d7f><span data-v-e20c9d7f>${ssrInterpolate(item.label)}</span></a>`);
			});
			_push(`<!--]--></section><section class="footer-group" data-v-e20c9d7f><h2 data-v-e20c9d7f>${ssrInterpolate(unref(t)("footer.infrastructurePartners.title"))}</h2><!--[-->`);
			ssrRenderList(infrastructurePartners.value, (item) => {
				_push(`<a${ssrRenderAttr("href", item.href)} class="footer-link partner-link" target="_blank" rel="noopener noreferrer" data-v-e20c9d7f><img${ssrRenderAttr("src", item.iconSrc)} alt="" class="partner-icon" aria-hidden="true" data-v-e20c9d7f><span data-v-e20c9d7f>${ssrInterpolate(item.label)}</span></a>`);
			});
			_push(`<!--]--></section><section class="footer-group" data-v-e20c9d7f><h2 data-v-e20c9d7f>${ssrInterpolate(unref(t)("footer.community"))}</h2><!--[-->`);
			ssrRenderList(communityLinks.value, (item) => {
				_push(`<a${ssrRenderAttr("href", item.href)} class="footer-link external-link" target="_blank" rel="noopener noreferrer" data-v-e20c9d7f>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
					class: "icon-sm",
					"aria-hidden": "true"
				}, null), _parent);
				_push(`<span data-v-e20c9d7f>${ssrInterpolate(item.label)}</span>`);
				_push(ssrRenderComponent(unref(ArrowTopRightOnSquareIcon), {
					class: "icon-xs",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`</a>`);
			});
			_push(`<!--]--></section></nav></div><div class="footer-bottom" data-v-e20c9d7f><p data-v-e20c9d7f>${ssrInterpolate(unref(t)("footer.copyright", { year: unref(currentYear) }))}</p></div></footer>`);
		};
	}
};
var _sfc_setup$29 = _sfc_main$29.setup;
_sfc_main$29.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FooterBar.vue");
	return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
var FooterBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$29, [["__scopeId", "data-v-e20c9d7f"]]);
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenu.vue
var _sfc_main$28 = {
	__name: "DropdownMenu",
	__ssrInlineRender: true,
	props: {
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		modal: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$28 = _sfc_main$28.setup;
_sfc_main$28.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenu.vue");
	return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
//#endregion
//#region src/lib/utils.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue
var _sfc_main$27 = {
	__name: "DropdownMenuCheckboxItem",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: [Boolean, String],
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	emits: ["select", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuCheckboxItem), mergeProps(unref(forwarded), { class: unref(cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4" }, null, _parent, _scopeId));
								else return [createVNode(unref(Check), { class: "w-4 h-4" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</span>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [createVNode(unref(DropdownMenuItemIndicator), null, {
						default: withCtx(() => [createVNode(unref(Check), { class: "w-4 h-4" })]),
						_: 1
					})]), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$27 = _sfc_main$27.setup;
_sfc_main$27.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue");
	return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuContent.vue
var _sfc_main$26 = {
	__name: "DropdownMenuContent",
	__ssrInlineRender: true,
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false,
			default: 4
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), { class: unref(cn)("bg-[#0d121c] border-[#2c3437] z-50 min-w-32 overflow-hidden rounded-md border p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class) }), {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
							else return [renderSlot(_ctx.$slots, "default")];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), { class: unref(cn)("bg-[#0d121c] border-[#2c3437] z-50 min-w-32 overflow-hidden rounded-md border p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class) }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$26 = _sfc_main$26.setup;
_sfc_main$26.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuContent.vue");
	return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuGroup.vue
var _sfc_main$25 = {
	__name: "DropdownMenuGroup",
	__ssrInlineRender: true,
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuGroup), mergeProps(props, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuGroup.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuItem.vue
var _sfc_main$24 = {
	__name: "DropdownMenuItem",
	__ssrInlineRender: true,
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		},
		inset: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), { class: unref(cn)("focus:bg-[#417e38] cursor-pointer", "relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", __props.inset && "pl-8", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuItem.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuLabel.vue
var _sfc_main$23 = {
	__name: "DropdownMenuLabel",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		},
		inset: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps(unref(forwardedProps), { class: unref(cn)("px-2 py-1.5 text-sm font-semibold", __props.inset && "pl-8", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuLabel.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue
var _sfc_main$22 = {
	__name: "DropdownMenuRadioGroup",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRadioGroup), mergeProps(unref(forwarded), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuRadioItem.vue
var _sfc_main$21 = {
	__name: "DropdownMenuRadioItem",
	__ssrInlineRender: true,
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRadioItem), mergeProps(unref(forwarded), { class: unref(cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(Circle), { class: "h-4 w-4 fill-current" }, null, _parent, _scopeId));
								else return [createVNode(unref(Circle), { class: "h-4 w-4 fill-current" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</span>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					} else return [createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [createVNode(unref(DropdownMenuItemIndicator), null, {
						default: withCtx(() => [createVNode(unref(Circle), { class: "h-4 w-4 fill-current" })]),
						_: 1
					})]), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuRadioItem.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuSeparator.vue
var _sfc_main$20 = {
	__name: "DropdownMenuSeparator",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps(unref(delegatedProps), { class: unref(cn)("-mx-1 my-1 h-px bg-muted", props.class) }, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuSeparator.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuShortcut.vue
var _sfc_main$19 = {
	__name: "DropdownMenuShortcut",
	__ssrInlineRender: true,
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${ssrRenderAttrs(mergeProps({ class: unref(cn)("ml-auto text-xs tracking-widest opacity-60", props.class) }, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
};
var _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuShortcut.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuSub.vue
var _sfc_main$18 = {
	__name: "DropdownMenuSub",
	__ssrInlineRender: true,
	props: {
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSub), mergeProps(unref(forwarded), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuSub.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuSubContent.vue
var _sfc_main$17 = {
	__name: "DropdownMenuSubContent",
	__ssrInlineRender: true,
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSubContent), mergeProps(unref(forwarded), { class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuSubContent.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue
var _sfc_main$16 = {
	__name: "DropdownMenuSubTrigger",
	__ssrInlineRender: true,
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuSubTrigger), mergeProps(unref(forwardedProps), { class: unref(cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto h-4 w-4" }, null, _parent, _scopeId));
					} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(ChevronRight), { class: "ml-auto h-4 w-4" })];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/dropdown-menu/DropdownMenuTrigger.vue
var _sfc_main$15 = {
	__name: "DropdownMenuTrigger",
	__ssrInlineRender: true,
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const forwardedProps = useForwardProps(__props);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dropdown-menu/DropdownMenuTrigger.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
//#endregion
//#region src/components/DocSearchButton.vue
var _sfc_main$14 = {
	__name: "DocSearchButton",
	__ssrInlineRender: true,
	setup(__props) {
		const container = ref(null);
		const docsearchConfig = {
			appId: "MFAGEF2P8F",
			indexName: "RustMinerSystem Documents",
			apiKey: "0ecc1b54035668f7eee14915d2359aaf",
			placeholder: "Search RustMinerSystem docs",
			translations: {
				button: {
					buttonText: "Start typing...",
					buttonAriaLabel: "Search documentation"
				},
				modal: {
					searchBox: {
						placeholderText: "Search RustMinerSystem docs",
						searchInputLabel: "Search documentation"
					},
					startScreen: {
						recentSearchesTitle: "Recent searches",
						noRecentSearchesText: "No recent searches"
					},
					noResultsScreen: {
						noResultsText: "No results for",
						suggestedQueryText: "Try searching for",
						reportMissingResultsText: "No match in the current index.",
						reportMissingResultsLinkText: "Report missing results"
					}
				}
			}
		};
		onMounted(async () => {
			if (!container.value) return;
			const { default: docsearch } = await import("@docsearch/js");
			docsearch({
				container: container.value,
				...docsearchConfig
			});
		});
		onBeforeUnmount(() => {
			if (container.value) container.value.innerHTML = "";
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				id: "docsearch",
				ref_key: "container",
				ref: container,
				class: "docsearch-mount"
			}, _attrs))} data-v-ae3850ed></div>`);
		};
	}
};
var _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DocSearchButton.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var DocSearchButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$14, [["__scopeId", "data-v-ae3850ed"]]);
//#endregion
//#region src/components/HeaderBar.vue
var _sfc_main$13 = {
	__name: "HeaderBar",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const { t } = useI18n();
		const isOpen = ref(false);
		const currentLocale = computed(() => getRouteLocale(route));
		const currentLanguage = computed(() => LOCALE_META[currentLocale.value]);
		const languages = computed(() => SUPPORTED_LOCALES.map((locale) => ({
			locale,
			...LOCALE_META[locale]
		})));
		const localizedPath = (page) => pagePath(page, currentLocale.value);
		const primaryLinks = computed(() => [{
			page: "customized",
			label: t("nav.customized"),
			to: localizedPath("customized")
		}, {
			page: "about",
			label: t("nav.about"),
			to: localizedPath("about")
		}]);
		const documentLinks = computed(() => DOC_COLLECTIONS.map((collection) => ({
			collection: collection.id,
			label: getDocCollectionMeta(collection.id, currentLocale.value).title,
			to: docPath(void 0, currentLocale.value, collection.id)
		})));
		const downloadGroups = computed(() => [{
			label: t("nav.server"),
			items: [{
				label: t("nav.downloads.server"),
				to: downloadPath("server", currentLocale.value)
			}, {
				label: t("nav.downloads.rms"),
				to: downloadPath("rms", currentLocale.value)
			}]
		}, {
			label: t("nav.app"),
			items: [{
				label: t("nav.downloads.mobile"),
				to: downloadPath("mobile", currentLocale.value)
			}, {
				label: t("nav.downloads.poolNode"),
				to: downloadPath("pool-node", currentLocale.value)
			}]
		}]);
		const flatDownloadLinks = computed(() => downloadGroups.value.flatMap((group) => group.items));
		const isActivePage = (page) => route.meta?.page === page;
		const isActiveDocCollection = (docCollection) => route.meta?.page === "document" && route.meta?.docCollection === docCollection;
		const closeMenu = () => {
			isOpen.value = false;
		};
		const switchLocale = (nextLocale) => {
			const page = route.meta?.page || "home";
			const path = page === "document" ? docPath(route.meta?.docPage, nextLocale, route.meta?.docCollection) : page === "download" ? downloadPath(route.meta?.downloadPage, nextLocale) : pagePath(page, nextLocale);
			closeMenu();
			router.push({
				path,
				hash: route.hash,
				query: route.query
			});
		};
		watch(() => route.fullPath, () => closeMenu());
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(mergeProps({ class: "header-bar" }, _attrs))} data-v-4e77a30d><a class="skip-link" href="#main-content" data-v-4e77a30d>${ssrInterpolate(unref(t)("nav.skip"))}</a><div class="header-shell" data-v-4e77a30d>`);
			_push(ssrRenderComponent(unref(RouterLink), {
				to: localizedPath("home"),
				class: "brand-link",
				"aria-label": unref(t)("nav.home")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", rustminersystem_default)} alt="" class="brand-logo rotating-element" data-v-4e77a30d${_scopeId}><span class="brand-name" data-v-4e77a30d${_scopeId}>${ssrInterpolate(unref(t)("site.name"))}</span>`);
					else return [createVNode("img", {
						src: rustminersystem_default,
						alt: "",
						class: "brand-logo rotating-element"
					}), createVNode("span", { class: "brand-name" }, toDisplayString(unref(t)("site.name")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="desktop-nav"${ssrRenderAttr("aria-label", unref(t)("nav.primary"))} data-v-4e77a30d><ul class="desktop-nav-list" data-v-4e77a30d><li data-v-4e77a30d>`);
			_push(ssrRenderComponent(unref(_sfc_main$28), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(_sfc_main$15), {
							class: "nav-link nav-trigger",
							"aria-label": unref(t)("nav.download")
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ArrowDownTrayIcon), {
										class: "icon-sm",
										"aria-hidden": "true"
									}, null, _parent, _scopeId));
									_push(`<span data-v-4e77a30d${_scopeId}>${ssrInterpolate(unref(t)("nav.download"))}</span>`);
									_push(ssrRenderComponent(unref(ChevronDownIcon), {
										class: "icon-xs",
										"aria-hidden": "true"
									}, null, _parent, _scopeId));
								} else return [
									createVNode(unref(ArrowDownTrayIcon), {
										class: "icon-sm",
										"aria-hidden": "true"
									}),
									createVNode("span", null, toDisplayString(unref(t)("nav.download")), 1),
									createVNode(unref(ChevronDownIcon), {
										class: "icon-xs",
										"aria-hidden": "true"
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(_sfc_main$26), {
							align: "start",
							class: "download-menu"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									ssrRenderList(downloadGroups.value, (group, index) => {
										_push(`<!--[-->`);
										_push(ssrRenderComponent(unref(_sfc_main$23), null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${ssrInterpolate(group.label)}`);
												else return [createTextVNode(toDisplayString(group.label), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
										_push(`<!--[-->`);
										ssrRenderList(group.items, (item) => {
											_push(ssrRenderComponent(unref(_sfc_main$24), {
												key: item.label,
												"as-child": ""
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(RouterLink), {
														to: item.to,
														class: "dropdown-link"
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(item.label)}`);
															else return [createTextVNode(toDisplayString(item.label), 1)];
														}),
														_: 2
													}, _parent, _scopeId));
													else return [createVNode(unref(RouterLink), {
														to: item.to,
														class: "dropdown-link"
													}, {
														default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
														_: 2
													}, 1032, ["to"])];
												}),
												_: 2
											}, _parent, _scopeId));
										});
										_push(`<!--]-->`);
										if (index < downloadGroups.value.length - 1) _push(ssrRenderComponent(unref(_sfc_main$20), null, null, _parent, _scopeId));
										else _push(`<!---->`);
										_push(`<!--]-->`);
									});
									_push(`<!--]-->`);
								} else return [(openBlock(true), createBlock(Fragment, null, renderList(downloadGroups.value, (group, index) => {
									return openBlock(), createBlock(Fragment, { key: group.label }, [
										createVNode(unref(_sfc_main$23), null, {
											default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
											_: 2
										}, 1024),
										(openBlock(true), createBlock(Fragment, null, renderList(group.items, (item) => {
											return openBlock(), createBlock(unref(_sfc_main$24), {
												key: item.label,
												"as-child": ""
											}, {
												default: withCtx(() => [createVNode(unref(RouterLink), {
													to: item.to,
													class: "dropdown-link"
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
													_: 2
												}, 1032, ["to"])]),
												_: 2
											}, 1024);
										}), 128)),
										index < downloadGroups.value.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$20), { key: 0 })) : createCommentVNode("", true)
									], 64);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(_sfc_main$15), {
						class: "nav-link nav-trigger",
						"aria-label": unref(t)("nav.download")
					}, {
						default: withCtx(() => [
							createVNode(unref(ArrowDownTrayIcon), {
								class: "icon-sm",
								"aria-hidden": "true"
							}),
							createVNode("span", null, toDisplayString(unref(t)("nav.download")), 1),
							createVNode(unref(ChevronDownIcon), {
								class: "icon-xs",
								"aria-hidden": "true"
							})
						]),
						_: 1
					}, 8, ["aria-label"]), createVNode(unref(_sfc_main$26), {
						align: "start",
						class: "download-menu"
					}, {
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(downloadGroups.value, (group, index) => {
							return openBlock(), createBlock(Fragment, { key: group.label }, [
								createVNode(unref(_sfc_main$23), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
									_: 2
								}, 1024),
								(openBlock(true), createBlock(Fragment, null, renderList(group.items, (item) => {
									return openBlock(), createBlock(unref(_sfc_main$24), {
										key: item.label,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(unref(RouterLink), {
											to: item.to,
											class: "dropdown-link"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
											_: 2
										}, 1032, ["to"])]),
										_: 2
									}, 1024);
								}), 128)),
								index < downloadGroups.value.length - 1 ? (openBlock(), createBlock(unref(_sfc_main$20), { key: 0 })) : createCommentVNode("", true)
							], 64);
						}), 128))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-4e77a30d>`);
			_push(ssrRenderComponent(unref(_sfc_main$28), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(_sfc_main$15), {
							class: [
								"nav-link",
								"nav-trigger",
								{ "is-active": isActivePage("document") }
							],
							"aria-label": unref(t)("nav.document")
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(DocumentTextIcon), {
										class: "icon-sm",
										"aria-hidden": "true"
									}, null, _parent, _scopeId));
									_push(`<span data-v-4e77a30d${_scopeId}>${ssrInterpolate(unref(t)("nav.document"))}</span>`);
									_push(ssrRenderComponent(unref(ChevronDownIcon), {
										class: "icon-xs",
										"aria-hidden": "true"
									}, null, _parent, _scopeId));
								} else return [
									createVNode(unref(DocumentTextIcon), {
										class: "icon-sm",
										"aria-hidden": "true"
									}),
									createVNode("span", null, toDisplayString(unref(t)("nav.document")), 1),
									createVNode(unref(ChevronDownIcon), {
										class: "icon-xs",
										"aria-hidden": "true"
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(_sfc_main$26), {
							align: "start",
							class: "docs-menu"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									ssrRenderList(documentLinks.value, (item) => {
										_push(ssrRenderComponent(unref(_sfc_main$24), {
											key: item.collection,
											"as-child": ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(RouterLink), {
													to: item.to,
													class: "dropdown-link"
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(item.label)}`);
														else return [createTextVNode(toDisplayString(item.label), 1)];
													}),
													_: 2
												}, _parent, _scopeId));
												else return [createVNode(unref(RouterLink), {
													to: item.to,
													class: "dropdown-link"
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
													_: 2
												}, 1032, ["to"])];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [(openBlock(true), createBlock(Fragment, null, renderList(documentLinks.value, (item) => {
									return openBlock(), createBlock(unref(_sfc_main$24), {
										key: item.collection,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(unref(RouterLink), {
											to: item.to,
											class: "dropdown-link"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
											_: 2
										}, 1032, ["to"])]),
										_: 2
									}, 1024);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(_sfc_main$15), {
						class: [
							"nav-link",
							"nav-trigger",
							{ "is-active": isActivePage("document") }
						],
						"aria-label": unref(t)("nav.document")
					}, {
						default: withCtx(() => [
							createVNode(unref(DocumentTextIcon), {
								class: "icon-sm",
								"aria-hidden": "true"
							}),
							createVNode("span", null, toDisplayString(unref(t)("nav.document")), 1),
							createVNode(unref(ChevronDownIcon), {
								class: "icon-xs",
								"aria-hidden": "true"
							})
						]),
						_: 1
					}, 8, ["class", "aria-label"]), createVNode(unref(_sfc_main$26), {
						align: "start",
						class: "docs-menu"
					}, {
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(documentLinks.value, (item) => {
							return openBlock(), createBlock(unref(_sfc_main$24), {
								key: item.collection,
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(unref(RouterLink), {
									to: item.to,
									class: "dropdown-link"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
									_: 2
								}, 1032, ["to"])]),
								_: 2
							}, 1024);
						}), 128))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</li><!--[-->`);
			ssrRenderList(primaryLinks.value, (item) => {
				_push(`<li data-v-4e77a30d>`);
				_push(ssrRenderComponent(unref(RouterLink), {
					to: item.to,
					class: ["nav-link", { "is-active": isActivePage(item.page) }],
					"aria-current": isActivePage(item.page) ? "page" : void 0
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></nav><div class="header-actions" data-v-4e77a30d>`);
			_push(ssrRenderComponent(DocSearchButton_default, null, null, _parent));
			_push(ssrRenderComponent(unref(_sfc_main$28), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(_sfc_main$15), {
							class: "language-trigger",
							"aria-label": unref(t)("nav.language")
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(LanguageIcon), {
										class: "icon-md",
										"aria-hidden": "true"
									}, null, _parent, _scopeId));
									_push(`<span class="language-label" data-v-4e77a30d${_scopeId}>${ssrInterpolate(currentLanguage.value.nativeName)}</span>`);
									_push(ssrRenderComponent(unref(ChevronDownIcon), {
										class: "icon-xs",
										"aria-hidden": "true"
									}, null, _parent, _scopeId));
								} else return [
									createVNode(unref(LanguageIcon), {
										class: "icon-md",
										"aria-hidden": "true"
									}),
									createVNode("span", { class: "language-label" }, toDisplayString(currentLanguage.value.nativeName), 1),
									createVNode(unref(ChevronDownIcon), {
										class: "icon-xs",
										"aria-hidden": "true"
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(_sfc_main$26), {
							align: "end",
							class: "language-menu"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(_sfc_main$23), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(unref(t)("nav.currentLanguage"))}`);
											else return [createTextVNode(toDisplayString(unref(t)("nav.currentLanguage")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`<!--[-->`);
									ssrRenderList(languages.value, (language) => {
										_push(ssrRenderComponent(unref(_sfc_main$24), {
											key: language.locale,
											class: "language-option",
											onClick: ($event) => switchLocale(language.locale)
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(`<span data-v-4e77a30d${_scopeId}>${ssrInterpolate(language.nativeName)}</span>`);
													if (language.locale === currentLocale.value) _push(`<span class="language-check" data-v-4e77a30d${_scopeId}>✓</span>`);
													else _push(`<!---->`);
												} else return [createVNode("span", null, toDisplayString(language.nativeName), 1), language.locale === currentLocale.value ? (openBlock(), createBlock("span", {
													key: 0,
													class: "language-check"
												}, "✓")) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [createVNode(unref(_sfc_main$23), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("nav.currentLanguage")), 1)]),
									_: 1
								}), (openBlock(true), createBlock(Fragment, null, renderList(languages.value, (language) => {
									return openBlock(), createBlock(unref(_sfc_main$24), {
										key: language.locale,
										class: "language-option",
										onClick: ($event) => switchLocale(language.locale)
									}, {
										default: withCtx(() => [createVNode("span", null, toDisplayString(language.nativeName), 1), language.locale === currentLocale.value ? (openBlock(), createBlock("span", {
											key: 0,
											class: "language-check"
										}, "✓")) : createCommentVNode("", true)]),
										_: 2
									}, 1032, ["onClick"]);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(_sfc_main$15), {
						class: "language-trigger",
						"aria-label": unref(t)("nav.language")
					}, {
						default: withCtx(() => [
							createVNode(unref(LanguageIcon), {
								class: "icon-md",
								"aria-hidden": "true"
							}),
							createVNode("span", { class: "language-label" }, toDisplayString(currentLanguage.value.nativeName), 1),
							createVNode(unref(ChevronDownIcon), {
								class: "icon-xs",
								"aria-hidden": "true"
							})
						]),
						_: 1
					}, 8, ["aria-label"]), createVNode(unref(_sfc_main$26), {
						align: "end",
						class: "language-menu"
					}, {
						default: withCtx(() => [createVNode(unref(_sfc_main$23), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("nav.currentLanguage")), 1)]),
							_: 1
						}), (openBlock(true), createBlock(Fragment, null, renderList(languages.value, (language) => {
							return openBlock(), createBlock(unref(_sfc_main$24), {
								key: language.locale,
								class: "language-option",
								onClick: ($event) => switchLocale(language.locale)
							}, {
								default: withCtx(() => [createVNode("span", null, toDisplayString(language.nativeName), 1), language.locale === currentLocale.value ? (openBlock(), createBlock("span", {
									key: 0,
									class: "language-check"
								}, "✓")) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["onClick"]);
						}), 128))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`<a href="https://github.com/evilgenius-dot" class="icon-link" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", unref(t)("nav.github"))} data-v-4e77a30d>`);
			_push(ssrRenderComponent(IconGithub_default, {
				class: "icon-md",
				"aria-hidden": "true"
			}, null, _parent));
			_push(`</a><button type="button" class="mobile-toggle"${ssrRenderAttr("aria-expanded", isOpen.value.toString())} aria-controls="mobile-menu"${ssrRenderAttr("aria-label", isOpen.value ? unref(t)("nav.closeMenu") : unref(t)("nav.openMenu"))} data-v-4e77a30d>`);
			if (!isOpen.value) _push(ssrRenderComponent(unref(Bars3Icon), {
				class: "icon-lg",
				"aria-hidden": "true"
			}, null, _parent));
			else _push(ssrRenderComponent(unref(XMarkIcon), {
				class: "icon-lg",
				"aria-hidden": "true"
			}, null, _parent));
			_push(`</button></div></div><nav id="mobile-menu" class="mobile-nav"${ssrRenderAttr("aria-label", unref(t)("nav.mobile"))} style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" data-v-4e77a30d><ul class="mobile-nav-list" data-v-4e77a30d><li class="mobile-document-group" data-v-4e77a30d><p data-v-4e77a30d>${ssrInterpolate(unref(t)("nav.document"))}</p><!--[-->`);
			ssrRenderList(documentLinks.value, (item) => {
				_push(ssrRenderComponent(unref(RouterLink), {
					key: item.collection,
					to: item.to,
					class: "mobile-document-link",
					"aria-current": isActiveDocCollection(item.collection) ? "page" : void 0,
					onClick: closeMenu
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></li><!--[-->`);
			ssrRenderList(primaryLinks.value, (item) => {
				_push(`<li data-v-4e77a30d>`);
				_push(ssrRenderComponent(unref(RouterLink), {
					to: item.to,
					class: "mobile-nav-link",
					"aria-current": isActivePage(item.page) ? "page" : void 0,
					onClick: closeMenu
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--><li class="mobile-download-group" data-v-4e77a30d><p data-v-4e77a30d>${ssrInterpolate(unref(t)("nav.download"))}</p><!--[-->`);
			ssrRenderList(flatDownloadLinks.value, (item) => {
				_push(ssrRenderComponent(unref(RouterLink), {
					key: item.label,
					to: item.to,
					class: "mobile-download-link",
					onClick: closeMenu
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.label)}`);
						else return [createTextVNode(toDisplayString(item.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></li><li class="mobile-language-group" data-v-4e77a30d><!--[-->`);
			ssrRenderList(languages.value, (language) => {
				_push(`<button type="button" class="${ssrRenderClass([{ "is-active": language.locale === currentLocale.value }, "mobile-language-button"])}" data-v-4e77a30d>${ssrInterpolate(language.nativeName)}</button>`);
			});
			_push(`<!--]--></li></ul></nav></header>`);
		};
	}
};
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HeaderBar.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var HeaderBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$13, [["__scopeId", "data-v-4e77a30d"]]);
//#endregion
//#region src/components/ui/alert-dialog/AlertDialog.vue
var _sfc_main$12 = {
	__name: "AlertDialog",
	__ssrInlineRender: true,
	props: {
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogRoot), mergeProps(unref(forwarded), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialog.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/button/Button.vue
var _sfc_main$11 = {
	__name: "Button",
	__ssrInlineRender: true,
	props: {
		variant: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: __props.as,
				"as-child": __props.asChild,
				class: unref(cn)(unref(buttonVariants)({
					variant: __props.variant,
					size: __props.size
				}), props.class)
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/button/Button.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/button/index.js
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogAction.vue
var _sfc_main$10 = {
	__name: "AlertDialogAction",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogAction), mergeProps(unref(delegatedProps), { class: unref(cn)(unref(buttonVariants)(), props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogAction.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogCancel.vue
var _sfc_main$9 = {
	__name: "AlertDialogCancel",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogCancel), mergeProps(unref(delegatedProps), { class: unref(cn)(unref(buttonVariants)({ variant: "outline" }), "mt-2 sm:mt-0", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogCancel.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogContent.vue
var _sfc_main$8 = {
	__name: "AlertDialogContent",
	__ssrInlineRender: true,
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(AlertDialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent, _scopeId));
						_push(ssrRenderComponent(unref(AlertDialogContent), mergeProps(unref(forwarded), { class: unref(cn)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", props.class) }), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent, _scopeId));
					} else return [createVNode(unref(AlertDialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), createVNode(unref(AlertDialogContent), mergeProps(unref(forwarded), { class: unref(cn)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", props.class) }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogContent.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogDescription.vue
var _sfc_main$7 = {
	__name: "AlertDialogDescription",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogDescription), mergeProps(unref(delegatedProps), { class: unref(cn)("text-sm text-muted-foreground", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogDescription.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogFooter.vue
var _sfc_main$6 = {
	__name: "AlertDialogFooter",
	__ssrInlineRender: true,
	props: { class: {
		type: [
			Boolean,
			null,
			String,
			Object,
			Array
		],
		required: false,
		skipCheck: true
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: unref(cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", props.class) }, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogFooter.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogHeader.vue
var _sfc_main$5 = {
	__name: "AlertDialogHeader",
	__ssrInlineRender: true,
	props: { class: {
		type: [
			Boolean,
			null,
			String,
			Object,
			Array
		],
		required: false,
		skipCheck: true
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: unref(cn)("flex flex-col gap-y-2 text-center sm:text-left", props.class) }, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogHeader.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogTitle.vue
var _sfc_main$4 = {
	__name: "AlertDialogTitle",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			required: false,
			skipCheck: true
		}
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogTitle), mergeProps(unref(delegatedProps), { class: unref(cn)("text-lg font-semibold", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogTitle.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/alert-dialog/AlertDialogTrigger.vue
var _sfc_main$3 = {
	__name: "AlertDialogTrigger",
	__ssrInlineRender: true,
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(AlertDialogTrigger), mergeProps(props, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/alert-dialog/AlertDialogTrigger.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region src/components/LocaleSuggestionDialog.vue
var STORAGE_KEY = "rms-locale-suggestion-shown";
var _sfc_main$2 = {
	__name: "LocaleSuggestionDialog",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const { t } = useI18n();
		const isOpen = ref(false);
		const suggestedLocale = ref(null);
		const currentLocale = computed(() => getRouteLocale(route));
		const suggestedLanguageName = computed(() => LOCALE_META[suggestedLocale.value]?.nativeName || "");
		const normalizeBrowserLocale = (language = "") => {
			const normalizedLanguage = language.toLowerCase();
			if (normalizedLanguage.startsWith("zh")) return "zh";
			if (normalizedLanguage.startsWith("ru")) return "ru";
			if (normalizedLanguage.startsWith("en")) return "en";
			return null;
		};
		const getPreferredLocale = () => {
			return [...navigator.languages || [], navigator.language].filter(Boolean).map((language) => normalizeBrowserLocale(language)).find((locale) => SUPPORTED_LOCALES.includes(locale));
		};
		const hasPrompted = () => {
			try {
				return sessionStorage.getItem(STORAGE_KEY) === "true";
			} catch {
				return false;
			}
		};
		const markSuggestionHandled = () => {
			try {
				sessionStorage.setItem(STORAGE_KEY, "true");
			} catch {}
		};
		const getLocalizedCurrentPath = (nextLocale) => {
			const page = route.meta?.page || "home";
			if (page === "document") return docPath(route.meta?.docPage || DEFAULT_DOC_PAGE, nextLocale, route.meta?.docCollection || "rustminersystem");
			if (page === "download") return downloadPath(route.meta?.downloadPage || DEFAULT_DOWNLOAD_PAGE, nextLocale);
			return pagePath(page, nextLocale);
		};
		const dismissSuggestion = () => {
			markSuggestionHandled();
			isOpen.value = false;
		};
		const confirmSwitch = () => {
			if (!suggestedLocale.value) {
				dismissSuggestion();
				return;
			}
			markSuggestionHandled();
			isOpen.value = false;
			router.push({
				path: getLocalizedCurrentPath(suggestedLocale.value),
				hash: route.hash,
				query: route.query
			});
		};
		const handleOpenChange = (nextOpen) => {
			isOpen.value = nextOpen;
			if (!nextOpen && suggestedLocale.value) markSuggestionHandled();
		};
		onMounted(() => {
			const preferredLocale = getPreferredLocale();
			if (!preferredLocale || preferredLocale === currentLocale.value || hasPrompted()) return;
			suggestedLocale.value = preferredLocale;
			isOpen.value = true;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(_sfc_main$12), mergeProps({
				open: isOpen.value,
				"onUpdate:open": handleOpenChange
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(_sfc_main$8), { class: "locale-suggestion-dialog" }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(_sfc_main$5), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(ssrRenderComponent(unref(_sfc_main$4), null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(unref(t)("localePrompt.title"))}`);
													else return [createTextVNode(toDisplayString(unref(t)("localePrompt.title")), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
											_push(ssrRenderComponent(unref(_sfc_main$7), null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(unref(t)("localePrompt.description", { language: suggestedLanguageName.value }))}`);
													else return [createTextVNode(toDisplayString(unref(t)("localePrompt.description", { language: suggestedLanguageName.value })), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
										} else return [createVNode(unref(_sfc_main$4), null, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.title")), 1)]),
											_: 1
										}), createVNode(unref(_sfc_main$7), null, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.description", { language: suggestedLanguageName.value })), 1)]),
											_: 1
										})];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(unref(_sfc_main$6), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(ssrRenderComponent(unref(_sfc_main$9), {
												class: "locale-cancel",
												onClick: dismissSuggestion
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(unref(t)("localePrompt.cancel"))}`);
													else return [createTextVNode(toDisplayString(unref(t)("localePrompt.cancel")), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
											_push(ssrRenderComponent(unref(_sfc_main$10), {
												class: "locale-action",
												onClick: confirmSwitch
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(unref(t)("localePrompt.confirm", { language: suggestedLanguageName.value }))}`);
													else return [createTextVNode(toDisplayString(unref(t)("localePrompt.confirm", { language: suggestedLanguageName.value })), 1)];
												}),
												_: 1
											}, _parent, _scopeId));
										} else return [createVNode(unref(_sfc_main$9), {
											class: "locale-cancel",
											onClick: dismissSuggestion
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.cancel")), 1)]),
											_: 1
										}), createVNode(unref(_sfc_main$10), {
											class: "locale-action",
											onClick: confirmSwitch
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.confirm", { language: suggestedLanguageName.value })), 1)]),
											_: 1
										})];
									}),
									_: 1
								}, _parent, _scopeId));
							} else return [createVNode(unref(_sfc_main$5), null, {
								default: withCtx(() => [createVNode(unref(_sfc_main$4), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.title")), 1)]),
									_: 1
								}), createVNode(unref(_sfc_main$7), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.description", { language: suggestedLanguageName.value })), 1)]),
									_: 1
								})]),
								_: 1
							}), createVNode(unref(_sfc_main$6), null, {
								default: withCtx(() => [createVNode(unref(_sfc_main$9), {
									class: "locale-cancel",
									onClick: dismissSuggestion
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.cancel")), 1)]),
									_: 1
								}), createVNode(unref(_sfc_main$10), {
									class: "locale-action",
									onClick: confirmSwitch
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.confirm", { language: suggestedLanguageName.value })), 1)]),
									_: 1
								})]),
								_: 1
							})];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(_sfc_main$8), { class: "locale-suggestion-dialog" }, {
						default: withCtx(() => [createVNode(unref(_sfc_main$5), null, {
							default: withCtx(() => [createVNode(unref(_sfc_main$4), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.title")), 1)]),
								_: 1
							}), createVNode(unref(_sfc_main$7), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.description", { language: suggestedLanguageName.value })), 1)]),
								_: 1
							})]),
							_: 1
						}), createVNode(unref(_sfc_main$6), null, {
							default: withCtx(() => [createVNode(unref(_sfc_main$9), {
								class: "locale-cancel",
								onClick: dismissSuggestion
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.cancel")), 1)]),
								_: 1
							}), createVNode(unref(_sfc_main$10), {
								class: "locale-action",
								onClick: confirmSwitch
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("localePrompt.confirm", { language: suggestedLanguageName.value })), 1)]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/LocaleSuggestionDialog.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var LocaleSuggestionDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["__scopeId", "data-v-2dd4ea1f"]]);
//#endregion
//#region src/App.vue
var _sfc_main$1 = {
	__name: "App",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const { locale, t } = useI18n();
		const currentLocale = computed(() => getRouteLocale(route));
		const currentPage = computed(() => route.meta?.page || "home");
		const currentDocCollection = computed(() => route.meta?.docCollection || "rustminersystem");
		const currentDocPage = computed(() => route.meta?.docPage || DEFAULT_DOC_PAGE);
		const currentDownloadPage = computed(() => route.meta?.downloadPage || DEFAULT_DOWNLOAD_PAGE);
		watch(currentLocale, (nextLocale) => {
			locale.value = nextLocale;
		}, { immediate: true });
		const canonicalHref = computed(() => currentPage.value === "document" ? `${SITE_ORIGIN}${docPath(currentDocPage.value, currentLocale.value, currentDocCollection.value)}` : currentPage.value === "download" ? `${SITE_ORIGIN}${downloadPath(currentDownloadPage.value, currentLocale.value)}` : `${SITE_ORIGIN}${pagePath(currentPage.value, currentLocale.value)}`);
		const pageTitle = computed(() => currentPage.value === "document" ? getDocPageMeta(currentDocPage.value, currentLocale.value, currentDocCollection.value).title : currentPage.value === "download" ? getDownloadPageMeta(currentDownloadPage.value, currentLocale.value).title : t(`seo.${currentPage.value}.title`));
		const pageDescription = computed(() => currentPage.value === "document" ? getDocPageMeta(currentDocPage.value, currentLocale.value, currentDocCollection.value).description : currentPage.value === "download" ? getDownloadPageMeta(currentDownloadPage.value, currentLocale.value).description : t(`seo.${currentPage.value}.description`));
		const localizedSeo = computed(() => messages[currentLocale.value]?.seo || messages["en"].seo);
		const pageKeywordList = computed(() => {
			const defaultKeywords = localizedSeo.value.keywords || [];
			const routeKeywords = currentPage.value === "document" ? getDocPageMeta(currentDocPage.value, currentLocale.value, currentDocCollection.value).keywords : currentPage.value === "download" ? getDownloadPageMeta(currentDownloadPage.value, currentLocale.value).keywords : localizedSeo.value[currentPage.value]?.keywords;
			return [...new Set([...routeKeywords || [], ...defaultKeywords])].filter(Boolean);
		});
		const pageKeywords = computed(() => pageKeywordList.value.join(", "));
		const fullTitle = computed(() => currentPage.value === "home" ? t("seo.defaultTitle") : `${pageTitle.value} | ${t("site.name")}`);
		const toJsonScript = (value) => JSON.stringify(value).replace(/</g, "\\u003C");
		const structuredData = computed(() => toJsonScript({
			"@context": "https://schema.org",
			"@type": "WebPage",
			name: fullTitle.value,
			url: canonicalHref.value,
			description: pageDescription.value,
			inLanguage: LOCALE_META[currentLocale.value].htmlLang,
			keywords: pageKeywordList.value,
			about: pageKeywordList.value.map((keyword) => ({
				"@type": "Thing",
				name: keyword
			})),
			isPartOf: {
				"@type": "WebSite",
				name: t("site.name"),
				url: SITE_ORIGIN,
				availableLanguage: Object.values(LOCALE_META).map(({ htmlLang }) => htmlLang)
			},
			mainEntity: currentPage.value === "home" ? {
				"@type": "SoftwareApplication",
				name: t("site.name"),
				applicationCategory: "BusinessApplication",
				operatingSystem: "Linux, Web",
				description: pageDescription.value
			} : void 0
		}));
		useHead(computed(() => ({
			htmlAttrs: { lang: LOCALE_META[currentLocale.value].htmlLang },
			title: fullTitle.value,
			meta: [
				{
					name: "description",
					content: pageDescription.value
				},
				{
					name: "keywords",
					content: pageKeywords.value
				},
				{
					property: "og:title",
					content: fullTitle.value
				},
				{
					property: "og:description",
					content: pageDescription.value
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: canonicalHref.value
				},
				{
					name: "twitter:card",
					content: "summary"
				}
			],
			script: [{
				type: "application/ld+json",
				innerHTML: structuredData.value
			}],
			link: [
				{
					rel: "canonical",
					href: canonicalHref.value
				},
				...currentPage.value === "document" ? localizedDocLinks(currentDocPage.value, currentDocCollection.value) : currentPage.value === "download" ? localizedDownloadLinks(currentDownloadPage.value) : localizedPageLinks(currentPage.value),
				{
					rel: "alternate",
					hreflang: "x-default",
					href: currentPage.value === "document" ? `${SITE_ORIGIN}${docPath(currentDocPage.value, "en", currentDocCollection.value)}` : currentPage.value === "download" ? `${SITE_ORIGIN}${downloadPath(currentDownloadPage.value, "en")}` : `${SITE_ORIGIN}${pagePath(currentPage.value, "en")}`
				}
			]
		})));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "app-shell" }, _attrs))} data-v-0fe31637>`);
			_push(ssrRenderComponent(HeaderBar_default, null, null, _parent));
			_push(ssrRenderComponent(unref(RouterView), null, null, _parent));
			_push(ssrRenderComponent(FooterBar_default, null, null, _parent));
			_push(ssrRenderComponent(LocaleSuggestionDialog_default, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var App_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-0fe31637"]]);
//#endregion
//#region ../../../../../image/rust.mp4
var rust_default = "/image/rust.mp4";
//#endregion
//#region src/views/HomeView.vue
var releaseInfoUrl = "https://raw.githubusercontent.com/EvilGenius-dot/RustMinerSystem/refs/heads/main/origin.json";
var repositoryApiUrl = "https://api.github.com/repos/EvilGenius-dot/RustMinerSystem";
var repositoryHref = "https://github.com/EvilGenius-dot/RustMinerSystem";
var releaseHref = "https://github.com/EvilGenius-dot/RustMinerSystem/releases/latest";
var _sfc_main = {
	__name: "HomeView",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const { t } = useI18n();
		const currentLocale = computed(() => getRouteLocale(route));
		const primaryDownloadPath = computed(() => downloadPath("server", currentLocale.value));
		const primaryDocumentPath = computed(() => docPath(void 0, currentLocale.value));
		const releaseVersion = ref("");
		const releaseStatus = ref("loading");
		const githubStars = ref(null);
		const githubStarsStatus = ref("loading");
		const previewVideo = ref(null);
		const showPreviewPlayButton = ref(false);
		const formattedReleaseVersion = computed(() => {
			const version = releaseVersion.value.trim();
			return version.startsWith("v") ? version : `v${version}`;
		});
		const releaseBadgeText = computed(() => {
			if (releaseStatus.value === "loading") return t("home.loadingBadge");
			if (releaseStatus.value === "error") return t("home.unavailableBadge");
			return formattedReleaseVersion.value;
		});
		const releaseMessage = computed(() => {
			if (releaseStatus.value === "loading") return t("home.latestReleaseLoading");
			if (releaseStatus.value === "error") return t("home.latestReleaseError");
			return t("home.latestRelease");
		});
		const releaseAriaLabel = computed(() => {
			if (releaseStatus.value === "loading") return t("home.latestReleaseLoadingAria");
			if (releaseStatus.value === "error") return t("home.latestReleaseErrorAria");
			return t("home.latestReleaseAria", { version: formattedReleaseVersion.value });
		});
		const formattedGithubStars = computed(() => {
			if (!Number.isFinite(githubStars.value)) return "";
			return new Intl.NumberFormat(localeToIntlLocale(currentLocale.value), {
				maximumFractionDigits: 1,
				notation: githubStars.value >= 1e4 ? "compact" : "standard"
			}).format(githubStars.value);
		});
		const githubStarsBadgeText = computed(() => {
			if (githubStarsStatus.value === "loading") return t("home.loadingBadge");
			if (githubStarsStatus.value === "error") return t("home.unavailableBadge");
			return formattedGithubStars.value;
		});
		const githubStarsMessage = computed(() => {
			if (githubStarsStatus.value === "loading") return t("home.githubStarsLoading");
			if (githubStarsStatus.value === "error") return t("home.githubStarsError");
			return t("home.githubStars");
		});
		const githubStarsAriaLabel = computed(() => {
			if (githubStarsStatus.value === "loading") return t("home.githubStarsLoadingAria");
			if (githubStarsStatus.value === "error") return t("home.githubStarsErrorAria");
			return t("home.githubStarsAria", { count: formattedGithubStars.value });
		});
		const localeToIntlLocale = (locale) => ({
			en: "en-US",
			zh: "zh-CN",
			ru: "ru-RU"
		})[locale] ?? "en-US";
		const fetchJson = async (url) => {
			const controller = new AbortController();
			const timeoutId = window.setTimeout(() => controller.abort(), 6e3);
			try {
				const response = await fetch(url, {
					cache: "no-store",
					signal: controller.signal
				});
				if (!response.ok) throw new Error(`Request failed with ${response.status}`);
				return await response.json();
			} finally {
				window.clearTimeout(timeoutId);
			}
		};
		const loadReleaseVersion = async () => {
			releaseStatus.value = "loading";
			try {
				const version = (await fetchJson(releaseInfoUrl))?.version;
				if (typeof version !== "string" || !version.trim()) throw new Error("Missing version field");
				releaseVersion.value = version;
				releaseStatus.value = "ready";
			} catch {
				releaseStatus.value = "error";
			}
		};
		const loadGithubStars = async () => {
			githubStarsStatus.value = "loading";
			try {
				const stars = (await fetchJson(repositoryApiUrl))?.stargazers_count;
				if (!Number.isFinite(stars)) throw new Error("Missing stargazers_count field");
				githubStars.value = stars;
				githubStarsStatus.value = "ready";
			} catch {
				githubStarsStatus.value = "error";
			}
		};
		const playPreviewVideo = async () => {
			const video = previewVideo.value;
			if (!video) return;
			try {
				video.muted = true;
				await video.play();
				showPreviewPlayButton.value = false;
			} catch {
				showPreviewPlayButton.value = true;
			}
		};
		onMounted(async () => {
			await nextTick();
			playPreviewVideo();
			await Promise.all([loadReleaseVersion(), loadGithubStars()]);
		});
		const features = computed(() => [
			{
				title: t("home.features.deployment.title"),
				text: t("home.features.deployment.text")
			},
			{
				title: t("home.features.operations.title"),
				text: t("home.features.operations.text")
			},
			{
				title: t("home.features.localization.title"),
				text: t("home.features.localization.text")
			}
		]);
		const searchIntentItems = computed(() => [
			"relay",
			"fee",
			"forwarding",
			"setup"
		].map((id) => ({
			term: t(`home.searchIntents.items.${id}.term`),
			title: t(`home.searchIntents.items.${id}.title`),
			text: t(`home.searchIntents.items.${id}.text`)
		})));
		const deploymentSites = computed(() => [
			{
				region: t("home.global.sites.local.region"),
				title: t("home.global.sites.local.title"),
				text: t("home.global.sites.local.text")
			},
			{
				region: t("home.global.sites.remote.region"),
				title: t("home.global.sites.remote.title"),
				text: t("home.global.sites.remote.text")
			},
			{
				region: t("home.global.sites.multi.region"),
				title: t("home.global.sites.multi.title"),
				text: t("home.global.sites.multi.text")
			}
		]);
		const deploymentTargets = computed(() => [
			{
				type: t("home.global.targets.proxy.type"),
				title: t("home.global.targets.proxy.title"),
				text: t("home.global.targets.proxy.text")
			},
			{
				type: t("home.global.targets.poolNode.type"),
				title: t("home.global.targets.poolNode.title"),
				text: t("home.global.targets.poolNode.text")
			},
			{
				type: t("home.global.targets.pool.type"),
				title: t("home.global.targets.pool.title"),
				text: t("home.global.targets.pool.text")
			}
		]);
		const globalMetrics = computed(() => [
			{
				value: "24/7",
				label: t("home.global.metrics.operations")
			},
			{
				value: t("home.global.metrics.regionsValue"),
				label: t("home.global.metrics.regions")
			},
			{
				value: t("home.global.metrics.clientValue"),
				label: t("home.global.metrics.client")
			}
		]);
		const partnerPools = [
			{
				name: "ViaBTC",
				href: "https://www.viabtc.com/",
				logo: "/image/viabtc.png",
				className: "",
				logoClass: "is-viabtc"
			},
			{
				name: "F2Pool",
				href: "https://www.f2pool.com/",
				logo: "/image/f2pool.png",
				className: "",
				logoClass: "is-f2pool"
			},
			{
				name: "ANTPOOL",
				href: "https://www.antpool.com/",
				logo: "/image/antpool.png",
				className: "",
				logoClass: "is-antpool"
			},
			{
				name: "Poolin",
				href: "https://www.poolin.com/",
				logo: "/image/poolin.svg",
				className: "",
				logoClass: "is-poolin"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({
				id: "main-content",
				class: "home-page"
			}, _attrs))} data-v-03433150><div class="bg-container" data-v-03433150><section class="hero-section" aria-labelledby="home-title" data-v-03433150><div class="hero-copy" data-v-03433150><p class="eyebrow" data-v-03433150>${ssrInterpolate(unref(t)("home.eyebrow"))}</p><h1 id="home-title" data-v-03433150>${ssrInterpolate(unref(t)("home.title"))}</h1><p class="hero-description" data-v-03433150>${ssrInterpolate(unref(t)("home.description"))}</p><div class="hero-actions" data-v-03433150>`);
			_push(ssrRenderComponent(unref(RouterLink), {
				to: primaryDownloadPath.value,
				class: "primary-action"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(t)("home.primaryCta"))}`);
					else return [createTextVNode(toDisplayString(unref(t)("home.primaryCta")), 1)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(RouterLink), {
				to: primaryDocumentPath.value,
				class: "secondary-action"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span data-v-03433150${_scopeId}>${ssrInterpolate(unref(t)("home.secondaryCta"))}</span><small data-v-03433150${_scopeId}>${ssrInterpolate(unref(t)("home.secondaryCtaNote"))}</small>`);
					else return [createVNode("span", null, toDisplayString(unref(t)("home.secondaryCta")), 1), createVNode("small", null, toDisplayString(unref(t)("home.secondaryCtaNote")), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="pool-links"${ssrRenderAttr("aria-label", unref(t)("home.poolLinksLabel"))} data-v-03433150><!--[-->`);
			ssrRenderList(partnerPools, (pool) => {
				_push(`<a${ssrRenderAttr("href", pool.href)} class="${ssrRenderClass([pool.className, "pool-link"])}" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", pool.name)}${ssrRenderAttr("title", pool.name)} data-v-03433150><img${ssrRenderAttr("src", pool.logo)}${ssrRenderAttr("alt", pool.name)} class="${ssrRenderClass([pool.logoClass, "pool-logo"])}" loading="lazy" decoding="async" data-v-03433150></a>`);
			});
			_push(`<!--]--></div><div class="partner-note" data-v-03433150><span data-v-03433150>${ssrInterpolate(unref(t)("home.partnerNote"))}</span></div></div><section class="product-preview"${ssrRenderAttr("aria-label", unref(t)("home.preview.label"))} data-v-03433150><div class="preview-frame" data-v-03433150><div class="preview-shell" data-v-03433150><div class="preview-toolbar" aria-hidden="true" data-v-03433150><span data-v-03433150></span><span data-v-03433150></span><span data-v-03433150></span><strong data-v-03433150>RustMinerSystem</strong></div><video${ssrRenderAttr("src", rust_default)}${ssrRenderAttr("aria-label", unref(t)("home.preview.imageAlt"))} class="preview-video" autoplay muted loop playsinline preload="auto" data-v-03433150></video><div class="preview-shade" aria-hidden="true" data-v-03433150></div>`);
			if (showPreviewPlayButton.value) {
				_push(`<button type="button" class="preview-play-button"${ssrRenderAttr("aria-label", unref(t)("home.preview.playLabel"))}${ssrRenderAttr("title", unref(t)("home.preview.playLabel"))} data-v-03433150>`);
				_push(ssrRenderComponent(unref(Play), { "aria-hidden": "true" }, null, _parent));
				_push(`</button>`);
			} else _push(`<!---->`);
			_push(`</div></div><div class="preview-meta-pills" data-v-03433150><a${ssrRenderAttr("href", releaseHref)} class="meta-pill release-pill"${ssrRenderAttr("data-state", releaseStatus.value)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", releaseAriaLabel.value)} data-v-03433150><span class="meta-badge release-badge" data-v-03433150>${ssrInterpolate(releaseBadgeText.value)}</span><span class="meta-message" data-v-03433150>${ssrInterpolate(releaseMessage.value)}</span></a><a${ssrRenderAttr("href", repositoryHref)} class="meta-pill github-stars-pill"${ssrRenderAttr("data-state", githubStarsStatus.value)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", githubStarsAriaLabel.value)}${ssrRenderAttr("title", githubStarsMessage.value)} data-v-03433150>`);
			_push(ssrRenderComponent(IconGithub_default, {
				class: "github-stars-mark",
				"aria-hidden": "true"
			}, null, _parent));
			_push(`<span class="github-stars-name" data-v-03433150>GitHub</span><span class="github-stars-count" data-v-03433150>`);
			_push(ssrRenderComponent(unref(Star), {
				class: "github-stars-star",
				"aria-hidden": "true"
			}, null, _parent));
			_push(`<span data-v-03433150>${ssrInterpolate(githubStarsBadgeText.value)}</span></span></a></div></section></section><section class="content-section" aria-labelledby="features-title" data-v-03433150><h2 id="features-title" data-v-03433150>${ssrInterpolate(unref(t)("home.featuresTitle"))}</h2><div class="feature-grid" data-v-03433150><!--[-->`);
			ssrRenderList(features.value, (feature) => {
				_push(`<article class="info-card" data-v-03433150><h3 data-v-03433150>${ssrInterpolate(feature.title)}</h3><p data-v-03433150>${ssrInterpolate(feature.text)}</p></article>`);
			});
			_push(`<!--]--></div></section><section class="content-section search-section" aria-labelledby="search-intents-title" data-v-03433150><div class="section-heading" data-v-03433150><h2 id="search-intents-title" data-v-03433150>${ssrInterpolate(unref(t)("home.searchIntents.title"))}</h2><p data-v-03433150>${ssrInterpolate(unref(t)("home.searchIntents.description"))}</p></div><div class="search-intent-grid" data-v-03433150><!--[-->`);
			ssrRenderList(searchIntentItems.value, (item) => {
				_push(`<article class="search-intent-card" data-v-03433150><span data-v-03433150>${ssrInterpolate(item.term)}</span><h3 data-v-03433150>${ssrInterpolate(item.title)}</h3><p data-v-03433150>${ssrInterpolate(item.text)}</p></article>`);
			});
			_push(`<!--]--></div></section><section class="content-section global-section" aria-labelledby="global-title" data-v-03433150><h2 id="global-title" data-v-03433150>${ssrInterpolate(unref(t)("home.global.title"))}</h2><p class="global-description" data-v-03433150>${ssrInterpolate(unref(t)("home.global.description"))}</p><div class="deployment-panel" data-v-03433150><div class="deployment-column" data-v-03433150><!--[-->`);
			ssrRenderList(deploymentSites.value, (site) => {
				_push(`<article class="deployment-card site-card" data-v-03433150><span data-v-03433150>${ssrInterpolate(site.region)}</span><strong data-v-03433150>${ssrInterpolate(site.title)}</strong><p data-v-03433150>${ssrInterpolate(site.text)}</p></article>`);
			});
			_push(`<!--]--></div><div class="deployment-core" aria-hidden="true" data-v-03433150><span class="core-label" data-v-03433150>${ssrInterpolate(unref(t)("home.global.visual.coreLabel"))}</span><h3 data-v-03433150>${ssrInterpolate(unref(t)("home.global.visual.coreTitle"))}</h3><p data-v-03433150>${ssrInterpolate(unref(t)("home.global.visual.coreText"))}</p><div class="core-pills" data-v-03433150><span data-v-03433150>${ssrInterpolate(unref(t)("home.global.visual.secure"))}</span><span data-v-03433150>${ssrInterpolate(unref(t)("home.global.visual.compress"))}</span><span data-v-03433150>${ssrInterpolate(unref(t)("home.global.visual.route"))}</span></div></div><div class="deployment-column" data-v-03433150><!--[-->`);
			ssrRenderList(deploymentTargets.value, (target) => {
				_push(`<article class="deployment-card target-card" data-v-03433150><span data-v-03433150>${ssrInterpolate(target.type)}</span><strong data-v-03433150>${ssrInterpolate(target.title)}</strong><p data-v-03433150>${ssrInterpolate(target.text)}</p></article>`);
			});
			_push(`<!--]--></div><div class="global-metrics" data-v-03433150><!--[-->`);
			ssrRenderList(globalMetrics.value, (metric) => {
				_push(`<article class="global-metric" data-v-03433150><strong data-v-03433150>${ssrInterpolate(metric.value)}</strong><span data-v-03433150>${ssrInterpolate(metric.label)}</span></article>`);
			});
			_push(`<!--]--></div></div></section></div></main>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region src/router/index.js
var pageComponents = {
	home: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-03433150"]]),
	download: () => import("./assets/DownloadView-B113YdZI.js"),
	document: () => import("./assets/DocumentView-1nvfw0Ck.js"),
	customized: () => import("./assets/CustomizedVersionView-D0Jq-jH7.js"),
	about: () => import("./assets/AboutView-pvY40-vi.js")
};
var createLocalizedPageRoutes = () => Object.keys(PAGE_SLUGS).filter((page) => page !== "document" && page !== "download").flatMap((page) => SUPPORTED_LOCALES.map((locale) => ({
	path: pagePath(page, locale),
	name: locale === "en" ? page : `${locale}-${page}`,
	component: pageComponents[page],
	meta: {
		page,
		locale
	}
})));
var createLocalizedDocumentRoutes = () => [
	...SUPPORTED_LOCALES.map((locale) => ({
		path: pagePath("document", locale),
		redirect: docPath(DEFAULT_DOC_PAGE, locale, DEFAULT_DOC_COLLECTION)
	})),
	...DOC_PAGES.filter((docPage) => docPage.collection === "rustminersystem" && docPage.slug).flatMap((docPage) => SUPPORTED_LOCALES.map((locale) => ({
		path: `${pagePath("document", locale)}/${docPage.slug}`,
		redirect: docPath(docPage.id, locale, DEFAULT_DOC_COLLECTION)
	}))),
	...DOC_PAGES.flatMap((docPage) => SUPPORTED_LOCALES.map((locale) => ({
		path: docPath(docPage.id, locale, docPage.collection),
		name: locale === "en" ? `document-${docPage.collection}-${docPage.id}` : `${locale}-document-${docPage.collection}-${docPage.id}`,
		component: pageComponents.document,
		meta: {
			page: "document",
			docCollection: docPage.collection,
			docPage: docPage.id,
			locale
		}
	})))
];
var createLocalizedDownloadRoutes = () => [...SUPPORTED_LOCALES.map((locale) => ({
	path: pagePath("download", locale),
	redirect: downloadPath(DEFAULT_DOWNLOAD_PAGE, locale)
})), ...DOWNLOAD_PAGES.flatMap((downloadPage) => SUPPORTED_LOCALES.map((locale) => ({
	path: downloadPath(downloadPage.id, locale),
	name: locale === "en" ? `download-${downloadPage.id}` : `${locale}-download-${downloadPage.id}`,
	component: pageComponents.download,
	meta: {
		page: "download",
		downloadPage: downloadPage.id,
		locale
	}
})))];
var routes = [
	...createLocalizedPageRoutes(),
	...createLocalizedDownloadRoutes(),
	...createLocalizedDocumentRoutes()
];
createRouter({
	history: createMemoryHistory(),
	routes
});
//#endregion
//#region src/main.js
var createApp = ViteSSG(App_default, { routes }, ({ app, router, isClient, initialState }) => {
	const pinia = createPinia();
	const i18n = createI18nInstance();
	app.use(pinia);
	app.use(i18n);
	router.beforeEach((to) => {
		i18n.global.locale.value = getRouteLocale(to);
	});
	if (isClient) {
		if (initialState.pinia) pinia.state.value = initialState.pinia;
	}
});
//#endregion
export { getDocCategoryMeta as a, getDocPageMeta as c, createApp, DEFAULT_DOC_COLLECTION as d, DEFAULT_DOC_PAGE as f, docPath as i, getDownloadPageMeta as l, DOC_PAGES as m, _plugin_vue_export_helper_default as n, getDocCollectionById as o, DOC_CATEGORIES as p, DEFAULT_DOWNLOAD_PAGE as r, getDocPageById as s, cn as t, getRouteLocale as u };
