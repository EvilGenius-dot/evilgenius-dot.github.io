import { i as docPath, l as getDownloadPageMeta, n as _plugin_vue_export_helper_default, r as DEFAULT_DOWNLOAD_PAGE, t as cn, u as getRouteLocale } from "../main.mjs";
import { Fragment, computed, createBlock, createTextVNode, createVNode, mergeProps, onMounted, openBlock, ref, renderList, renderSlot, resolveComponent, resolveDynamicComponent, toDisplayString, unref, useSSRContext, watch, withCtx } from "vue";
import { useRoute } from "vue-router";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, useForwardProps, useForwardPropsEmits } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
import { BadgeCheck, BookOpen, Check, ChevronDown, ChevronUp, Clipboard, Cpu, Download, ExternalLink, GitBranch, Info, Network, Server, ShieldCheck, Smartphone, Terminal } from "lucide-vue-next";
//#region src/components/ui/select/Select.vue
var _sfc_main$11 = {
	__name: "Select",
	__ssrInlineRender: true,
	props: {
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		by: {
			type: [String, Function],
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		autocomplete: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue", "update:open"],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectRoot), mergeProps(unref(forwarded), _attrs), {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/Select.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectContent.vue
var _sfc_main$10 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
	__name: "SelectContent",
	__ssrInlineRender: true,
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		position: {
			type: String,
			required: false,
			default: "popper"
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
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
		disableOutsidePointerEvents: {
			type: Boolean,
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
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectPortal), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(SelectContent), mergeProps({
						...unref(forwarded),
						..._ctx.$attrs
					}, { class: unref(cn)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", props.class) }), {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent, _scopeId));
								_push(ssrRenderComponent(unref(SelectViewport), { class: unref(cn)("p-1", __props.position === "popper" && "h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]") }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "default")];
									}),
									_: 3
								}, _parent, _scopeId));
								_push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent, _scopeId));
							} else return [
								createVNode(unref(_sfc_main$4)),
								createVNode(unref(SelectViewport), { class: unref(cn)("p-1", __props.position === "popper" && "h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]") }, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
									_: 3
								}, 8, ["class"]),
								createVNode(unref(_sfc_main$5))
							];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(SelectContent), mergeProps({
						...unref(forwarded),
						..._ctx.$attrs
					}, { class: unref(cn)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", props.class) }), {
						default: withCtx(() => [
							createVNode(unref(_sfc_main$4)),
							createVNode(unref(SelectViewport), { class: unref(cn)("p-1", __props.position === "popper" && "h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]") }, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
								_: 3
							}, 8, ["class"]),
							createVNode(unref(_sfc_main$5))
						]),
						_: 3
					}, 16, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectContent.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectGroup.vue
var _sfc_main$9 = {
	__name: "SelectGroup",
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
			_push(ssrRenderComponent(unref(SelectGroup), mergeProps({ class: unref(cn)("p-1 w-full", props.class) }, unref(delegatedProps), _attrs), {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectGroup.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectItem.vue
var _sfc_main$8 = {
	__name: "SelectItem",
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
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectItem), mergeProps(unref(forwardedProps), { class: unref(cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(SelectItemIndicator), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent, _scopeId));
								else return [createVNode(unref(Check), { class: "h-4 w-4" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</span>`);
						_push(ssrRenderComponent(unref(SelectItemText), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent, _scopeId));
					} else return [createVNode("span", { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, [createVNode(unref(SelectItemIndicator), null, {
						default: withCtx(() => [createVNode(unref(Check), { class: "h-4 w-4" })]),
						_: 1
					})]), createVNode(unref(SelectItemText), null, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectItem.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectItemText.vue
var _sfc_main$7 = {
	__name: "SelectItemText",
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
			_push(ssrRenderComponent(unref(SelectItemText), mergeProps(props, _attrs), {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectItemText.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectLabel.vue
var _sfc_main$6 = {
	__name: "SelectLabel",
	__ssrInlineRender: true,
	props: {
		for: {
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectLabel), mergeProps({ class: unref(cn)("px-2 py-1.5 text-sm font-semibold", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectLabel.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectScrollDownButton.vue
var _sfc_main$5 = {
	__name: "SelectScrollDownButton",
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
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectScrollDownButton), mergeProps(unref(forwardedProps), { class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
						_push(ssrRenderComponent(unref(ChevronDown), null, null, _parent, _scopeId));
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(ChevronDown))])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectScrollDownButton.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectScrollUpButton.vue
var _sfc_main$4 = {
	__name: "SelectScrollUpButton",
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
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectScrollUpButton), mergeProps(unref(forwardedProps), { class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
						_push(ssrRenderComponent(unref(ChevronUp), null, null, _parent, _scopeId));
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(ChevronUp))])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectScrollUpButton.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectSeparator.vue
var _sfc_main$3 = {
	__name: "SelectSeparator",
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
			_push(ssrRenderComponent(unref(SelectSeparator), mergeProps(unref(delegatedProps), { class: unref(cn)("-mx-1 my-1 h-px bg-muted", props.class) }, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectSeparator.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectTrigger.vue
var _sfc_main$2 = {
	__name: "SelectTrigger",
	__ssrInlineRender: true,
	props: {
		disabled: {
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
	setup(__props) {
		const props = __props;
		const forwardedProps = useForwardProps(reactiveOmit(props, "class"));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectTrigger), mergeProps(unref(forwardedProps), { class: unref(cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start", props.class) }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(ssrRenderComponent(unref(SelectIcon), { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 opacity-50 shrink-0" }, null, _parent, _scopeId));
								else return [createVNode(unref(ChevronDown), { class: "w-4 h-4 opacity-50 shrink-0" })];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [renderSlot(_ctx.$slots, "default"), createVNode(unref(SelectIcon), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(ChevronDown), { class: "w-4 h-4 opacity-50 shrink-0" })]),
						_: 1
					})];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectTrigger.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region src/components/ui/select/SelectValue.vue
var _sfc_main$1 = {
	__name: "SelectValue",
	__ssrInlineRender: true,
	props: {
		placeholder: {
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
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectValue), mergeProps(props, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/select/SelectValue.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region src/views/DownloadView.vue
var poolNodeAndroidDownloadUrl = "https://github.com/EvilGenius-dot/RustMinerSystem/raw/refs/heads/main/APP/PoolNode/Android/PoolNode.apk";
var poolNodeIosDownloadUrl = "https://apps.apple.com/hk/app/poolnode/id6754824577";
var repositoryOwner = "EvilGenius-dot";
var repositoryBranch = "main";
var originManifestUrl = "https://raw.githubusercontent.com/EvilGenius-dot/RustMinerSystem/main/origin.json";
var _sfc_main = {
	__name: "DownloadView",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const { t } = useI18n();
		const currentLocale = computed(() => getRouteLocale(route));
		const currentDownloadPage = computed(() => route.meta?.downloadPage || DEFAULT_DOWNLOAD_PAGE);
		const pageMeta = computed(() => getDownloadPageMeta(currentDownloadPage.value, currentLocale.value));
		const isServerDownloadPage = computed(() => currentDownloadPage.value === "server");
		const isRmsDownloadPage = computed(() => currentDownloadPage.value === "rms");
		const isRustMinerAppDownloadPage = computed(() => currentDownloadPage.value === "mobile");
		const isPoolNodeDownloadPage = computed(() => currentDownloadPage.value === "pool-node");
		const isMobileAppDownloadPage = computed(() => isRustMinerAppDownloadPage.value || isPoolNodeDownloadPage.value);
		const hasDownloadFinder = computed(() => isServerDownloadPage.value || isRmsDownloadPage.value);
		const hasHeroVisual = computed(() => isServerDownloadPage.value || isRmsDownloadPage.value || isMobileAppDownloadPage.value);
		const hasHeroActions = computed(() => hasDownloadFinder.value || isMobileAppDownloadPage.value);
		const hasLatestVersionLookup = computed(() => hasDownloadFinder.value || isPoolNodeDownloadPage.value);
		const downloadTranslationKey = computed(() => {
			if (isRmsDownloadPage.value) return "download.rms";
			if (isRustMinerAppDownloadPage.value) return "download.rustMinerApp";
			if (isPoolNodeDownloadPage.value) return "download.poolNode";
			return "download.server";
		});
		const downloadText = (key, params) => t(`${downloadTranslationKey.value}.${key}`, params);
		const installationGuidePath = computed(() => docPath("installation", currentLocale.value));
		const heroVisualSources = computed(() => [
			downloadText("visual.miners"),
			downloadText("visual.fieldProxy"),
			downloadText("visual.remoteNode")
		]);
		const serverVisualCapabilities = computed(() => [
			downloadText("visual.access"),
			downloadText("visual.allocation"),
			downloadText("visual.proxy")
		]);
		const rmsVisualCapabilities = computed(() => [
			downloadText("visual.compression"),
			downloadText("visual.encryption"),
			downloadText("visual.connectionPool")
		]);
		const partnerLinks = [
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
		const rustMinerAppScreenshots = computed(() => [
			{
				src: "/image/rustminerapp1.png",
				alt: downloadText("screens.dashboardAlt"),
				label: downloadText("screens.dashboard")
			},
			{
				src: "/image/rustminerapp2.png",
				alt: downloadText("screens.serversAlt"),
				label: downloadText("screens.servers")
			},
			{
				src: "/image/rustminerapp3.png",
				alt: downloadText("screens.systemAlt"),
				label: downloadText("screens.system")
			},
			{
				src: "/image/rustminerapp4.png",
				alt: downloadText("screens.workerAlt"),
				label: downloadText("screens.worker")
			},
			{
				src: "/image/rustminerapp5.png",
				alt: downloadText("screens.deviceAlt"),
				label: downloadText("screens.device")
			}
		]);
		const rustMinerAppHeroScreens = computed(() => [
			rustMinerAppScreenshots.value[0],
			rustMinerAppScreenshots.value[3],
			rustMinerAppScreenshots.value[4]
		].filter(Boolean).map((screen, index) => ({
			...screen,
			slot: [
				"primary",
				"secondary",
				"tertiary"
			][index]
		})));
		const rustMinerAppPlatformStatuses = computed(() => [{
			id: "ios",
			title: downloadText("platforms.ios.title"),
			status: downloadText("platforms.ios.status"),
			note: downloadText("platforms.ios.note")
		}, {
			id: "android",
			title: downloadText("platforms.android.title"),
			status: downloadText("platforms.android.status"),
			note: downloadText("platforms.android.note")
		}]);
		const rustMinerAppFeatures = computed(() => [
			{
				icon: Network,
				title: downloadText("features.proxy.title"),
				text: downloadText("features.proxy.text")
			},
			{
				icon: Cpu,
				title: downloadText("features.worker.title"),
				text: downloadText("features.worker.text")
			},
			{
				icon: ShieldCheck,
				title: downloadText("features.system.title"),
				text: downloadText("features.system.text")
			}
		]);
		const poolNodeScreenshots = computed(() => [
			{
				src: "/image/poolnode/overview.jpg",
				alt: downloadText("screens.overviewAlt"),
				label: downloadText("screens.overview")
			},
			{
				src: "/image/poolnode/hashrate.jpg",
				alt: downloadText("screens.hashrateAlt"),
				label: downloadText("screens.hashrate")
			},
			{
				src: "/image/poolnode/workers.jpg",
				alt: downloadText("screens.workersAlt"),
				label: downloadText("screens.workers")
			},
			{
				src: "/image/poolnode/assets.jpg",
				alt: downloadText("screens.assetsAlt"),
				label: downloadText("screens.assets")
			}
		]);
		const poolNodeFeatures = computed(() => [
			{
				icon: Network,
				title: downloadText("features.node.title"),
				text: downloadText("features.node.text")
			},
			{
				icon: Cpu,
				title: downloadText("features.worker.title"),
				text: downloadText("features.worker.text")
			},
			{
				icon: ShieldCheck,
				title: downloadText("features.asset.title"),
				text: downloadText("features.asset.text")
			}
		]);
		const activeRepositoryName = computed(() => isRmsDownloadPage.value ? "RMS" : "RustMinerSystem");
		const repositoryContentsApi = computed(() => `https://api.github.com/repos/${repositoryOwner}/${activeRepositoryName.value}/contents`);
		const repositoryRootUrl = computed(() => `https://github.com/${repositoryOwner}/${activeRepositoryName.value}`);
		const serverBinaryDirectories = ["windows", "linux"];
		const rmsBinaryDirectoryByArch = {
			x86: "x86_64-musl",
			aarch64: "aarch64-musl",
			arm: "arm-musleabi",
			armhf: "arm-musleabihf",
			armv7: "armv7-musleabi",
			armv7hf: "armv7-musleabihf",
			"windows-gui": "windows-gui",
			"windows-cli": "windows-no-gui"
		};
		const rmsLinuxArchOptions = [
			"x86",
			"aarch64",
			"arm",
			"armhf",
			"armv7",
			"armv7hf"
		];
		const binaryDirectories = computed(() => isRmsDownloadPage.value ? Object.values(rmsBinaryDirectoryByArch) : serverBinaryDirectories);
		const skippedFileExtensions = new Set([
			"md",
			"txt",
			"json",
			"yml",
			"yaml",
			"sh",
			"ps1"
		]);
		const selectedOs = ref("linux");
		const selectedArch = ref("x86");
		const selectedVersion = ref("");
		const releaseFiles = ref([]);
		const releaseError = ref("");
		const isLoadingReleases = ref(false);
		const copiedCommandId = ref("");
		const latestVersions = ref({
			rustminer: "4.6.7",
			rms: "3.1.10",
			poolNodeAndroid: "1.0.1",
			poolNodeIos: "1.0.1"
		});
		const latestVersionError = ref(false);
		const isLoadingLatestVersions = ref(false);
		const formatVersion = (version) => {
			if (!version) return "";
			return /^v/i.test(version) ? version : `v${version}`;
		};
		const currentLatestVersion = computed(() => isRmsDownloadPage.value ? latestVersions.value.rms : latestVersions.value.rustminer);
		const formattedLatestVersion = computed(() => formatVersion(currentLatestVersion.value));
		const latestVersionBadgeText = computed(() => {
			if (formattedLatestVersion.value) return t("download.latestVersion", { version: formattedLatestVersion.value });
			return isLoadingLatestVersions.value ? t("download.latestVersionLoading") : t("download.latestVersionError");
		});
		const poolNodeLatestReleaseText = computed(() => {
			const androidVersion = formatVersion(latestVersions.value.poolNodeAndroid);
			const iosVersion = formatVersion(latestVersions.value.poolNodeIos);
			if (!androidVersion && !iosVersion) return "";
			return t("download.poolNode.latestRelease", {
				android: androidVersion || t("download.latestVersionPending"),
				ios: iosVersion || t("download.latestVersionPending")
			});
		});
		const poolNodeLatestReleaseBadgeText = computed(() => {
			if (poolNodeLatestReleaseText.value) return poolNodeLatestReleaseText.value;
			return isLoadingLatestVersions.value ? t("download.latestVersionLoading") : t("download.latestVersionError");
		});
		const poolNodeDownloadOptions = computed(() => [{
			id: "android",
			title: downloadText("platforms.android.title"),
			versionLabel: t("download.latestVersion", { version: formatVersion(latestVersions.value.poolNodeAndroid) || t("download.latestVersionPending") }),
			note: downloadText("platforms.android.note"),
			buttonLabel: downloadText("platforms.android.button"),
			href: poolNodeAndroidDownloadUrl,
			qr: "/image/poolnode/android-qr.png",
			qrAlt: downloadText("platforms.android.qrAlt")
		}, {
			id: "ios",
			title: downloadText("platforms.ios.title"),
			versionLabel: t("download.latestVersion", { version: formatVersion(latestVersions.value.poolNodeIos) || t("download.latestVersionPending") }),
			note: downloadText("platforms.ios.note"),
			buttonLabel: downloadText("platforms.ios.button"),
			href: poolNodeIosDownloadUrl,
			qr: "/image/poolnode/ios-qr.png",
			qrAlt: downloadText("platforms.ios.qrAlt")
		}]);
		const osOptions = computed(() => [{
			value: "linux",
			label: downloadText("os.linux")
		}, {
			value: "windows",
			label: downloadText("os.windows")
		}]);
		const archOptions = computed(() => {
			if (isRmsDownloadPage.value) return {
				linux: rmsLinuxArchOptions.map((arch) => ({
					value: arch,
					label: downloadText(`arch.${arch}`)
				})),
				windows: [{
					value: "windows-gui",
					label: downloadText("arch.windowsGui")
				}, {
					value: "windows-cli",
					label: downloadText("arch.windowsCli")
				}]
			};
			return {
				linux: [
					{
						value: "x86",
						label: downloadText("arch.x86")
					},
					{
						value: "arm",
						label: downloadText("arch.arm")
					},
					{
						value: "armv7",
						label: downloadText("arch.armv7")
					}
				],
				windows: [{
					value: "x86",
					label: downloadText("arch.x86")
				}]
			};
		});
		const availableArchOptions = computed(() => archOptions.value[selectedOs.value] || archOptions.value.linux);
		const selectedOsLabel = computed(() => osOptions.value.find((option) => option.value === selectedOs.value)?.label || selectedOs.value);
		const selectedArchLabel = computed(() => availableArchOptions.value.find((option) => option.value === selectedArch.value)?.label || selectedArch.value);
		const filesForSelectedPlatform = computed(() => releaseFiles.value.filter((file) => file.os === selectedOs.value && file.arch === selectedArch.value));
		const availableVersions = computed(() => [...new Set(filesForSelectedPlatform.value.map((file) => file.version))].filter(Boolean).sort(compareVersions).reverse());
		const selectedVersionLabel = computed(() => isRmsDownloadPage.value ? formattedLatestVersion.value || t("download.latestVersionPending") : selectedVersion.value || downloadText("versionPending"));
		const filteredReleaseFiles = computed(() => {
			if (isRmsDownloadPage.value) return filesForSelectedPlatform.value;
			return filesForSelectedPlatform.value.filter((file) => file.version === selectedVersion.value);
		});
		const serverInstallCommands = computed(() => ({
			x86: [{
				id: "server-linux-x86-primary",
				label: downloadText("install.line1"),
				command: "bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)"
			}, {
				id: "server-linux-x86-mirror",
				label: downloadText("install.line2"),
				command: "bash <(curl -s -L -k https://rustminersystem.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)"
			}],
			arm: [{
				id: "server-linux-arm",
				label: downloadText("install.arm"),
				command: "bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/arm-install.sh)"
			}],
			armv7: [{
				id: "server-linux-armv7",
				label: downloadText("install.armv7"),
				command: "bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/armv7-install.sh)"
			}]
		}));
		const rmsInstallCommands = computed(() => ({ linux: [{
			id: "rms-linux-primary",
			label: downloadText("install.line1"),
			command: "bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)"
		}, {
			id: "rms-linux-mirror",
			label: downloadText("install.line2"),
			command: "bash <(curl -s -L -k https://rustminersystem.com/install.sh)"
		}] }));
		const visibleInstallCommands = computed(() => {
			if (isRmsDownloadPage.value) return rmsInstallCommands.value[selectedOs.value] || [];
			if (!isServerDownloadPage.value || selectedOs.value !== "linux") return [];
			return serverInstallCommands.value[selectedArch.value] || [];
		});
		const activeMethodHintKey = computed(() => visibleInstallCommands.value.length ? "methodHint.linux" : "methodHint.standalone");
		const currentRepositoryDirectory = computed(() => {
			const directory = isRmsDownloadPage.value ? rmsBinaryDirectoryByArch[selectedArch.value] || "x86_64-musl" : serverBinaryDirectories.includes(selectedOs.value) ? selectedOs.value : "linux";
			return {
				label: downloadText("openDirectory", { directory: isRmsDownloadPage.value ? selectedArchLabel.value : selectedOsLabel.value }),
				href: `${repositoryRootUrl.value}/tree/${repositoryBranch}/${directory}`
			};
		});
		const inferArch = (entry, os) => {
			const normalizedPath = `${entry.path}/${entry.name}`.toLowerCase();
			if (/(^|[/._-])armv?7l?($|[/._-])/.test(normalizedPath) || /(^|[/._-])(arm32|armhf)($|[/._-])/.test(normalizedPath)) return "armv7";
			if (/(^|[/._-])(aarch64|arm64|arm)($|[/._-])/.test(normalizedPath)) return "arm";
			if (/(^|[/._-])(x86_64|amd64|x64|x86|i386|i686)($|[/._-])/.test(normalizedPath)) return "x86";
			if (os === "windows") return "x86";
			return "x86";
		};
		const extractVersion = (path) => {
			if (isRmsDownloadPage.value) return downloadText("version.rms3");
			const match = path.match(/(?:^|[-_.v/])(\d+(?:[-_.]\d+){1,3})(?:\D|$)/i);
			if (!match) return downloadText("unknownVersion");
			return `v${match[1].replace(/[-_]/g, ".")}`;
		};
		const getFileExtension = (name) => {
			const segments = name.toLowerCase().split(".");
			return segments.length > 1 ? segments.at(-1) : "";
		};
		const isBinaryCandidate = (entry) => {
			if (entry.type !== "file") return false;
			const extension = getFileExtension(entry.name);
			return !skippedFileExtensions.has(extension);
		};
		const normalizeReleaseFile = (entry) => {
			if (isRmsDownloadPage.value) return normalizeRmsReleaseFile(entry);
			const os = entry.path.startsWith("windows/") ? "windows" : "linux";
			const downloadUrl = entry.download_url || `https://raw.githubusercontent.com/${repositoryOwner}/${activeRepositoryName.value}/${repositoryBranch}/${entry.path}`;
			return {
				arch: inferArch(entry, os),
				downloadUrl,
				htmlUrl: entry.html_url,
				name: entry.name,
				os,
				path: entry.path,
				size: entry.size || 0,
				version: extractVersion(`${entry.path}/${entry.name}`)
			};
		};
		const normalizeRmsReleaseFile = (entry) => {
			const rootDirectory = entry.path.split("/")[0];
			const arch = Object.entries(rmsBinaryDirectoryByArch).find(([, directory]) => directory === rootDirectory)?.[0] || "x86";
			const os = rootDirectory.startsWith("windows") ? "windows" : "linux";
			return {
				arch,
				downloadUrl: entry.download_url || `https://raw.githubusercontent.com/${repositoryOwner}/${activeRepositoryName.value}/${repositoryBranch}/${entry.path}`,
				htmlUrl: entry.html_url,
				name: entry.name,
				os,
				path: entry.path,
				size: entry.size || 0,
				version: downloadText("version.rms3")
			};
		};
		const getReleaseVersionLabel = (file) => isRmsDownloadPage.value ? formattedLatestVersion.value || file.version : file.version;
		const loadLatestVersions = async () => {
			if (!hasLatestVersionLookup.value || isLoadingLatestVersions.value) return;
			isLoadingLatestVersions.value = true;
			latestVersionError.value = false;
			try {
				const response = await fetch(originManifestUrl, {
					cache: "no-store",
					headers: { Accept: "application/json" }
				});
				if (!response.ok) throw new Error("Unable to read origin.json");
				const manifest = await response.json();
				latestVersions.value = {
					rustminer: typeof manifest.version === "string" ? manifest.version : latestVersions.value.rustminer,
					rms: typeof manifest.RMS === "string" ? manifest.RMS : typeof manifest.rms === "string" ? manifest.rms : latestVersions.value.rms,
					poolNodeAndroid: typeof manifest.PoolNodeAndroidVersion === "string" ? manifest.PoolNodeAndroidVersion : latestVersions.value.poolNodeAndroid,
					poolNodeIos: typeof manifest.PoolNodeIosVersion === "string" ? manifest.PoolNodeIosVersion : latestVersions.value.poolNodeIos
				};
			} catch {
				latestVersionError.value = true;
			} finally {
				isLoadingLatestVersions.value = false;
			}
		};
		const fetchDirectory = async (directory) => {
			const controller = new AbortController();
			const timeoutId = window.setTimeout(() => controller.abort(), 8e3);
			try {
				const response = await fetch(`${repositoryContentsApi.value}/${directory}?ref=${repositoryBranch}`, {
					cache: "no-store",
					headers: { Accept: "application/vnd.github+json" },
					signal: controller.signal
				});
				if (!response.ok) throw new Error(downloadText("fetchError"));
				const entries = await response.json();
				if (!Array.isArray(entries)) return [];
				const childDirectories = entries.filter((entry) => entry.type === "dir");
				const childFiles = entries.filter(isBinaryCandidate);
				const nestedFiles = await Promise.all(childDirectories.map((entry) => fetchDirectory(entry.path)));
				return [...childFiles, ...nestedFiles.flat()];
			} catch (error) {
				if (error instanceof DOMException && error.name === "AbortError") throw new Error(downloadText("fetchError"));
				throw error;
			} finally {
				window.clearTimeout(timeoutId);
			}
		};
		const loadReleaseFiles = async () => {
			if (!hasDownloadFinder.value) return;
			isLoadingReleases.value = true;
			releaseError.value = "";
			try {
				const directoryFiles = (await Promise.allSettled(binaryDirectories.value.map((directory) => fetchDirectory(directory)))).flatMap((result) => result.status === "fulfilled" ? result.value : []);
				if (!directoryFiles.length) throw new Error(downloadText("fetchError"));
				releaseFiles.value = directoryFiles.map(normalizeReleaseFile).sort((first, second) => second.size - first.size);
			} catch (error) {
				releaseFiles.value = [];
				releaseError.value = error instanceof Error ? error.message : downloadText("fetchError");
			} finally {
				isLoadingReleases.value = false;
			}
		};
		function compareVersions(first, second) {
			const firstParts = first.match(/\d+/g)?.map(Number) || [0];
			const secondParts = second.match(/\d+/g)?.map(Number) || [0];
			const partCount = Math.max(firstParts.length, secondParts.length);
			for (let index = 0; index < partCount; index += 1) {
				const difference = (firstParts[index] || 0) - (secondParts[index] || 0);
				if (difference) return difference;
			}
			return first.localeCompare(second);
		}
		watch(selectedOs, () => {
			const archValues = availableArchOptions.value.map((option) => option.value);
			if (!archValues.includes(selectedArch.value)) selectedArch.value = archValues[0] || "x86";
		});
		watch(availableVersions, (versions) => {
			if (!versions.includes(selectedVersion.value)) selectedVersion.value = versions[0] || "";
		}, { immediate: true });
		const getPreferredOs = () => typeof window !== "undefined" && window.navigator.userAgent.toLowerCase().includes("windows") ? "windows" : "linux";
		watch(currentDownloadPage, () => {
			releaseFiles.value = [];
			releaseError.value = "";
			copiedCommandId.value = "";
			selectedVersion.value = "";
			selectedOs.value = getPreferredOs();
			selectedArch.value = availableArchOptions.value.map((option) => option.value)[0] || "x86";
			if (hasLatestVersionLookup.value) loadLatestVersions();
			if (hasDownloadFinder.value) loadReleaseFiles();
		});
		onMounted(() => {
			selectedOs.value = getPreferredOs();
			loadLatestVersions();
			loadReleaseFiles();
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			_push(`<main${ssrRenderAttrs(mergeProps({
				id: "main-content",
				class: ["download-page", {
					"download-page-app": isMobileAppDownloadPage.value,
					"download-page-rustminerapp": isRustMinerAppDownloadPage.value
				}]
			}, _attrs))} data-v-18de0a21><div class="${ssrRenderClass([{ "download-shell-app": isMobileAppDownloadPage.value }, "download-shell"])}" data-v-18de0a21><article class="download-hero" aria-labelledby="download-title" data-v-18de0a21><div class="download-hero-copy" data-v-18de0a21><h1 id="download-title" data-v-18de0a21>${ssrInterpolate(pageMeta.value.heading || pageMeta.value.title)}</h1><p class="hero-description" data-v-18de0a21>${ssrInterpolate(pageMeta.value.description)}</p>`);
			if (hasHeroActions.value) {
				_push(`<div class="hero-actions" data-v-18de0a21>`);
				if (!isRustMinerAppDownloadPage.value) _push(ssrRenderComponent(_component_RouterLink, {
					to: installationGuidePath.value,
					class: "guide-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(BookOpen), { "aria-hidden": "true" }, null, _parent, _scopeId));
							_push(`<span data-v-18de0a21${_scopeId}>${ssrInterpolate(unref(t)("download.installGuideLink"))}</span>`);
						} else return [createVNode(unref(BookOpen), { "aria-hidden": "true" }), createVNode("span", null, toDisplayString(unref(t)("download.installGuideLink")), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				if (isRustMinerAppDownloadPage.value) {
					_push(`<span class="latest-version-badge latest-version-badge-app rustminerapp-status-badge" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Info), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("comingSoonBadge"))}</span></span>`);
				} else _push(`<!---->`);
				if (hasDownloadFinder.value) {
					_push(`<span class="${ssrRenderClass([{ "latest-version-badge-error": latestVersionError.value && !formattedLatestVersion.value }, "latest-version-badge"])}" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(BadgeCheck), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(latestVersionBadgeText.value)}</span></span>`);
				} else _push(`<!---->`);
				if (isPoolNodeDownloadPage.value) {
					_push(`<span class="${ssrRenderClass([{ "latest-version-badge-error": latestVersionError.value && !poolNodeLatestReleaseText.value }, "latest-version-badge latest-version-badge-app"])}" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(BadgeCheck), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(poolNodeLatestReleaseBadgeText.value)}</span></span>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
			if (hasHeroVisual.value) {
				_push(`<div class="${ssrRenderClass([{
					"download-hero-visual-rms": isRmsDownloadPage.value,
					"download-hero-visual-server": isServerDownloadPage.value,
					"download-hero-visual-app": isMobileAppDownloadPage.value,
					"download-hero-visual-rustminerapp": isRustMinerAppDownloadPage.value
				}, "download-hero-visual"])}" role="img"${ssrRenderAttr("aria-label", downloadText("visual.label"))} data-v-18de0a21>`);
				if (isRustMinerAppDownloadPage.value) {
					_push(`<!--[--><div class="rustminerapp-visual-stage" data-v-18de0a21><!--[-->`);
					ssrRenderList(rustMinerAppHeroScreens.value, (screen) => {
						_push(`<figure class="${ssrRenderClass([`rustminerapp-phone-${screen.slot}`, "rustminerapp-phone"])}" data-v-18de0a21><img${ssrRenderAttr("src", screen.src)}${ssrRenderAttr("alt", screen.alt)}${ssrRenderAttr("loading", screen.slot === "primary" ? void 0 : "lazy")}${ssrRenderAttr("fetchpriority", screen.slot === "primary" ? "high" : void 0)} decoding="async" data-v-18de0a21></figure>`);
					});
					_push(`<!--]--></div><div class="rustminerapp-visual-summary" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("visual.badge"))}</span><strong data-v-18de0a21>${ssrInterpolate(downloadText("visual.title"))}</strong><p data-v-18de0a21>${ssrInterpolate(downloadText("visual.description"))}</p></div><!--]-->`);
				} else if (isPoolNodeDownloadPage.value) _push(`<!--[--><div class="poolnode-visual-stage" data-v-18de0a21><figure class="poolnode-phone poolnode-phone-primary" data-v-18de0a21><img${ssrRenderAttr("src", poolNodeScreenshots.value[0].src)}${ssrRenderAttr("alt", poolNodeScreenshots.value[0].alt)} decoding="async" fetchpriority="high" data-v-18de0a21></figure><figure class="poolnode-phone poolnode-phone-secondary" data-v-18de0a21><img${ssrRenderAttr("src", poolNodeScreenshots.value[1].src)}${ssrRenderAttr("alt", poolNodeScreenshots.value[1].alt)} loading="lazy" decoding="async" data-v-18de0a21></figure></div><div class="poolnode-visual-summary" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("visual.badge"))}</span><strong data-v-18de0a21>${ssrInterpolate(downloadText("visual.title"))}</strong><p data-v-18de0a21>${ssrInterpolate(downloadText("visual.description"))}</p></div><!--]-->`);
				else if (isRmsDownloadPage.value) {
					_push(`<!--[--><div class="rms-local-stack" data-v-18de0a21><span class="visual-kicker" data-v-18de0a21>${ssrInterpolate(downloadText("visual.localLabel"))}</span><div class="rms-miner-grid" data-v-18de0a21><!--[-->`);
					ssrRenderList(heroVisualSources.value, (miner) => {
						_push(`<div class="miner-node rms-miner-node" data-v-18de0a21>`);
						_push(ssrRenderComponent(unref(Cpu), { "aria-hidden": "true" }, null, _parent));
						_push(`<span data-v-18de0a21>${ssrInterpolate(miner)}</span></div>`);
					});
					_push(`<!--]--></div></div><div class="rms-flow-line" aria-hidden="true" data-v-18de0a21><span data-v-18de0a21></span><span data-v-18de0a21></span><span data-v-18de0a21></span></div><div class="system-node rms-system-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(ShieldCheck), { "aria-hidden": "true" }, null, _parent));
					_push(`<strong data-v-18de0a21>${ssrInterpolate(downloadText("visual.system"))}</strong><span data-v-18de0a21>${ssrInterpolate(downloadText("visual.systemHint"))}</span><div class="rms-capabilities" data-v-18de0a21><!--[-->`);
					ssrRenderList(rmsVisualCapabilities.value, (capability) => {
						_push(`<span data-v-18de0a21>${ssrInterpolate(capability)}</span>`);
					});
					_push(`<!--]--></div></div><div class="rms-tunnel" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("visual.tunnelLabel"))}</span></div><div class="target-node rms-target-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Server), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("visual.target"))}</span></div><!--]-->`);
				} else {
					_push(`<!--[--><div class="server-ingress-stack" data-v-18de0a21><span class="visual-kicker" data-v-18de0a21>${ssrInterpolate(downloadText("visual.localLabel"))}</span><div class="server-ingress-grid" data-v-18de0a21><div class="miner-node server-ingress-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Cpu), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("visual.miners"))}</span></div><div class="miner-node server-ingress-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Network), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("visual.fieldProxy"))}</span></div><div class="miner-node server-ingress-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(ShieldCheck), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("visual.remoteNode"))}</span></div></div></div><div class="server-flow-line" aria-hidden="true" data-v-18de0a21><span data-v-18de0a21></span><span data-v-18de0a21></span><span data-v-18de0a21></span></div><div class="system-node server-system-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Server), { "aria-hidden": "true" }, null, _parent));
					_push(`<strong data-v-18de0a21>${ssrInterpolate(downloadText("visual.system"))}</strong><span data-v-18de0a21>${ssrInterpolate(downloadText("visual.systemHint"))}</span><div class="server-capabilities" data-v-18de0a21><!--[-->`);
					ssrRenderList(serverVisualCapabilities.value, (capability) => {
						_push(`<span data-v-18de0a21>${ssrInterpolate(capability)}</span>`);
					});
					_push(`<!--]--></div></div><div class="server-route-label" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("visual.routeLabel"))}</span></div><div class="server-target-grid" data-v-18de0a21><div class="target-node server-target-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(GitBranch), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("visual.thirdPartyTarget"))}</span></div><div class="target-node server-target-node" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Server), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("visual.poolNodeTarget"))}</span></div></div><!--]-->`);
				}
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</article>`);
			if (isRustMinerAppDownloadPage.value) {
				_push(`<section class="rustminerapp-download-section" aria-labelledby="rustminerapp-download-title" data-v-18de0a21><div class="rustminerapp-section-copy" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("downloadKicker"))}</span><h2 id="rustminerapp-download-title" data-v-18de0a21>${ssrInterpolate(downloadText("downloadTitle"))}</h2><p data-v-18de0a21>${ssrInterpolate(downloadText("downloadDescription"))}</p></div><div class="rustminerapp-platform-grid" data-v-18de0a21><!--[-->`);
				ssrRenderList(rustMinerAppPlatformStatuses.value, (platform) => {
					_push(`<article class="rustminerapp-platform-card" data-v-18de0a21><span class="rustminerapp-platform-icon" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Smartphone), { "aria-hidden": "true" }, null, _parent));
					_push(`</span><div data-v-18de0a21><h3 data-v-18de0a21>${ssrInterpolate(platform.title)}</h3><p data-v-18de0a21>${ssrInterpolate(platform.note)}</p></div><span class="rustminerapp-platform-state" data-v-18de0a21>${ssrInterpolate(platform.status)}</span></article>`);
				});
				_push(`<!--]--></div><div class="rustminerapp-feature-grid" data-v-18de0a21><!--[-->`);
				ssrRenderList(rustMinerAppFeatures.value, (feature) => {
					_push(`<article class="rustminerapp-feature-card" data-v-18de0a21><span class="rustminerapp-feature-icon" data-v-18de0a21>`);
					ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), { "aria-hidden": "true" }, null), _parent);
					_push(`</span><div data-v-18de0a21><h3 data-v-18de0a21>${ssrInterpolate(feature.title)}</h3><p data-v-18de0a21>${ssrInterpolate(feature.text)}</p></div></article>`);
				});
				_push(`<!--]--></div></section>`);
			} else _push(`<!---->`);
			if (isPoolNodeDownloadPage.value) {
				_push(`<section class="poolnode-download-section" aria-labelledby="poolnode-download-title" data-v-18de0a21><div class="poolnode-section-copy" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("downloadKicker"))}</span><h2 id="poolnode-download-title" data-v-18de0a21>${ssrInterpolate(downloadText("downloadTitle"))}</h2><p data-v-18de0a21>${ssrInterpolate(downloadText("downloadDescription"))}</p></div><div class="poolnode-download-grid" data-v-18de0a21><!--[-->`);
				ssrRenderList(poolNodeDownloadOptions.value, (option) => {
					_push(`<article class="poolnode-platform-card" data-v-18de0a21><div class="poolnode-platform-heading" data-v-18de0a21><span class="poolnode-platform-icon" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Smartphone), { "aria-hidden": "true" }, null, _parent));
					_push(`</span><div data-v-18de0a21><h3 data-v-18de0a21>${ssrInterpolate(option.title)}</h3><p data-v-18de0a21>${ssrInterpolate(option.versionLabel)}</p></div></div><div class="poolnode-qr-wrap" data-v-18de0a21><img${ssrRenderAttr("src", option.qr)}${ssrRenderAttr("alt", option.qrAlt)} loading="lazy" decoding="async" data-v-18de0a21></div><p class="poolnode-platform-note" data-v-18de0a21>${ssrInterpolate(option.note)}</p><a${ssrRenderAttr("href", option.href)} class="poolnode-store-link" target="_blank" rel="noopener noreferrer" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Download), { "aria-hidden": "true" }, null, _parent));
					_push(`<span data-v-18de0a21>${ssrInterpolate(option.buttonLabel)}</span></a></article>`);
				});
				_push(`<!--]--></div><div class="poolnode-feature-grid" data-v-18de0a21><!--[-->`);
				ssrRenderList(poolNodeFeatures.value, (feature) => {
					_push(`<article class="poolnode-feature-card" data-v-18de0a21><span class="poolnode-feature-icon" data-v-18de0a21>`);
					ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), { "aria-hidden": "true" }, null), _parent);
					_push(`</span><div data-v-18de0a21><h3 data-v-18de0a21>${ssrInterpolate(feature.title)}</h3><p data-v-18de0a21>${ssrInterpolate(feature.text)}</p></div></article>`);
				});
				_push(`<!--]--></div></section>`);
			} else _push(`<!---->`);
			if (hasDownloadFinder.value) {
				_push(`<section class="${ssrRenderClass([{ "download-finder-rms": isRmsDownloadPage.value }, "download-finder"])}" aria-labelledby="download-finder-title" data-v-18de0a21><div class="finder-header" data-v-18de0a21><div data-v-18de0a21><h2 id="download-finder-title" data-v-18de0a21>${ssrInterpolate(downloadText("finderTitle"))}</h2><p data-v-18de0a21>${ssrInterpolate(downloadText("selectionSummary", {
					os: selectedOsLabel.value,
					arch: selectedArchLabel.value,
					version: selectedVersionLabel.value
				}))}</p></div><a${ssrRenderAttr("href", currentRepositoryDirectory.value.href)} class="directory-link finder-directory-link" target="_blank" rel="noopener noreferrer" data-v-18de0a21>`);
				_push(ssrRenderComponent(unref(ExternalLink), { "aria-hidden": "true" }, null, _parent));
				_push(`<span data-v-18de0a21>${ssrInterpolate(currentRepositoryDirectory.value.label)}</span></a></div><div class="filter-grid" data-v-18de0a21><label class="filter-field filter-field-os" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("osLabel"))}</span>`);
				_push(ssrRenderComponent(unref(_sfc_main$11), {
					modelValue: selectedOs.value,
					"onUpdate:modelValue": ($event) => selectedOs.value = $event
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(_sfc_main$2), { class: "filter-trigger" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent, _scopeId));
									else return [createVNode(unref(_sfc_main$1))];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(unref(_sfc_main$10), { class: "download-select-content" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<!--[-->`);
										ssrRenderList(osOptions.value, (option) => {
											_push(ssrRenderComponent(unref(_sfc_main$8), {
												key: option.value,
												class: "download-select-item",
												value: option.value
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(option.label)}`);
													else return [createTextVNode(toDisplayString(option.label), 1)];
												}),
												_: 2
											}, _parent, _scopeId));
										});
										_push(`<!--]-->`);
									} else return [(openBlock(true), createBlock(Fragment, null, renderList(osOptions.value, (option) => {
										return openBlock(), createBlock(unref(_sfc_main$8), {
											key: option.value,
											class: "download-select-item",
											value: option.value
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
											_: 2
										}, 1032, ["value"]);
									}), 128))];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [createVNode(unref(_sfc_main$2), { class: "filter-trigger" }, {
							default: withCtx(() => [createVNode(unref(_sfc_main$1))]),
							_: 1
						}), createVNode(unref(_sfc_main$10), { class: "download-select-content" }, {
							default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(osOptions.value, (option) => {
								return openBlock(), createBlock(unref(_sfc_main$8), {
									key: option.value,
									class: "download-select-item",
									value: option.value
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
									_: 2
								}, 1032, ["value"]);
							}), 128))]),
							_: 1
						})];
					}),
					_: 1
				}, _parent));
				_push(`</label><label class="filter-field filter-field-arch" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("archLabel"))}</span>`);
				_push(ssrRenderComponent(unref(_sfc_main$11), {
					modelValue: selectedArch.value,
					"onUpdate:modelValue": ($event) => selectedArch.value = $event
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(_sfc_main$2), { class: "filter-trigger" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent, _scopeId));
									else return [createVNode(unref(_sfc_main$1))];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(unref(_sfc_main$10), { class: "download-select-content" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<!--[-->`);
										ssrRenderList(availableArchOptions.value, (option) => {
											_push(ssrRenderComponent(unref(_sfc_main$8), {
												key: option.value,
												class: "download-select-item",
												value: option.value
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(`${ssrInterpolate(option.label)}`);
													else return [createTextVNode(toDisplayString(option.label), 1)];
												}),
												_: 2
											}, _parent, _scopeId));
										});
										_push(`<!--]-->`);
									} else return [(openBlock(true), createBlock(Fragment, null, renderList(availableArchOptions.value, (option) => {
										return openBlock(), createBlock(unref(_sfc_main$8), {
											key: option.value,
											class: "download-select-item",
											value: option.value
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
											_: 2
										}, 1032, ["value"]);
									}), 128))];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [createVNode(unref(_sfc_main$2), { class: "filter-trigger" }, {
							default: withCtx(() => [createVNode(unref(_sfc_main$1))]),
							_: 1
						}), createVNode(unref(_sfc_main$10), { class: "download-select-content" }, {
							default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(availableArchOptions.value, (option) => {
								return openBlock(), createBlock(unref(_sfc_main$8), {
									key: option.value,
									class: "download-select-item",
									value: option.value
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
									_: 2
								}, 1032, ["value"]);
							}), 128))]),
							_: 1
						})];
					}),
					_: 1
				}, _parent));
				_push(`</label>`);
				if (!isRmsDownloadPage.value) {
					_push(`<label class="filter-field filter-field-version" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(downloadText("versionLabel"))}</span>`);
					_push(ssrRenderComponent(unref(_sfc_main$11), {
						modelValue: selectedVersion.value,
						"onUpdate:modelValue": ($event) => selectedVersion.value = $event,
						disabled: !availableVersions.value.length
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(_sfc_main$2), { class: "filter-trigger" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(_sfc_main$1), { placeholder: downloadText("versionPending") }, null, _parent, _scopeId));
										else return [createVNode(unref(_sfc_main$1), { placeholder: downloadText("versionPending") }, null, 8, ["placeholder"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(unref(_sfc_main$10), { class: "download-select-content" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<!--[-->`);
											ssrRenderList(availableVersions.value, (version) => {
												_push(ssrRenderComponent(unref(_sfc_main$8), {
													key: version,
													class: "download-select-item",
													value: version
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(version)}`);
														else return [createTextVNode(toDisplayString(version), 1)];
													}),
													_: 2
												}, _parent, _scopeId));
											});
											_push(`<!--]-->`);
										} else return [(openBlock(true), createBlock(Fragment, null, renderList(availableVersions.value, (version) => {
											return openBlock(), createBlock(unref(_sfc_main$8), {
												key: version,
												class: "download-select-item",
												value: version
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(version), 1)]),
												_: 2
											}, 1032, ["value"]);
										}), 128))];
									}),
									_: 1
								}, _parent, _scopeId));
							} else return [createVNode(unref(_sfc_main$2), { class: "filter-trigger" }, {
								default: withCtx(() => [createVNode(unref(_sfc_main$1), { placeholder: downloadText("versionPending") }, null, 8, ["placeholder"])]),
								_: 1
							}), createVNode(unref(_sfc_main$10), { class: "download-select-content" }, {
								default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(availableVersions.value, (version) => {
									return openBlock(), createBlock(unref(_sfc_main$8), {
										key: version,
										class: "download-select-item",
										value: version
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(version), 1)]),
										_: 2
									}, 1032, ["value"]);
								}), 128))]),
								_: 1
							})];
						}),
						_: 1
					}, _parent));
					_push(`</label>`);
				} else _push(`<!---->`);
				_push(`</div><div class="method-hint" data-v-18de0a21>`);
				_push(ssrRenderComponent(unref(Info), { "aria-hidden": "true" }, null, _parent));
				_push(`<p data-v-18de0a21>${ssrInterpolate(downloadText(activeMethodHintKey.value))}</p></div>`);
				if (visibleInstallCommands.value.length) {
					_push(`<div class="install-panel" aria-labelledby="linux-install-title" data-v-18de0a21><div class="install-header" data-v-18de0a21>`);
					_push(ssrRenderComponent(unref(Terminal), { "aria-hidden": "true" }, null, _parent));
					_push(`<div data-v-18de0a21><h3 id="linux-install-title" data-v-18de0a21>${ssrInterpolate(downloadText("install.title"))}</h3><p data-v-18de0a21>${ssrInterpolate(downloadText("install.description", { arch: selectedArchLabel.value }))}</p></div></div><div class="install-command-list" data-v-18de0a21><!--[-->`);
					ssrRenderList(visibleInstallCommands.value, (command) => {
						_push(`<article class="install-command" data-v-18de0a21><div class="install-command-heading" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(command.label)}</span><button type="button" class="copy-button" data-v-18de0a21>`);
						if (copiedCommandId.value === command.id) _push(ssrRenderComponent(unref(Check), { "aria-hidden": "true" }, null, _parent));
						else _push(ssrRenderComponent(unref(Clipboard), { "aria-hidden": "true" }, null, _parent));
						_push(`<span data-v-18de0a21>${ssrInterpolate(copiedCommandId.value === command.id ? downloadText("install.copied") : downloadText("install.copy"))}</span></button></div><pre data-v-18de0a21><code data-v-18de0a21>${ssrInterpolate(command.command)}</code></pre></article>`);
					});
					_push(`<!--]--></div></div>`);
				} else _push(`<!---->`);
				_push(`<div class="binary-panel" aria-labelledby="binary-download-title" data-v-18de0a21><div class="binary-header" data-v-18de0a21>`);
				_push(ssrRenderComponent(unref(Download), { "aria-hidden": "true" }, null, _parent));
				_push(`<div class="binary-header-copy" data-v-18de0a21><h3 id="binary-download-title" data-v-18de0a21>${ssrInterpolate(downloadText("binary.title"))}</h3><p data-v-18de0a21>${ssrInterpolate(downloadText("binary.description"))}</p></div></div>`);
				if (isLoadingReleases.value || releaseError.value || !filteredReleaseFiles.value.length) {
					_push(`<div class="release-state" aria-live="polite" data-v-18de0a21>`);
					if (isLoadingReleases.value) _push(`<p data-v-18de0a21>${ssrInterpolate(downloadText("loading"))}</p>`);
					else if (releaseError.value) _push(`<p data-v-18de0a21>${ssrInterpolate(releaseError.value)}</p>`);
					else if (!filteredReleaseFiles.value.length) _push(`<p data-v-18de0a21>${ssrInterpolate(downloadText("empty"))}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				if (filteredReleaseFiles.value.length) {
					_push(`<div class="release-list" data-v-18de0a21><!--[-->`);
					ssrRenderList(filteredReleaseFiles.value, (file) => {
						_push(`<article class="release-row" data-v-18de0a21><div class="release-copy" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(getReleaseVersionLabel(file))}</span><h3 data-v-18de0a21>${ssrInterpolate(file.name)}</h3><p data-v-18de0a21>${ssrInterpolate(file.path)}</p></div><a${ssrRenderAttr("href", file.downloadUrl)} class="download-link" target="_blank" rel="noopener noreferrer" data-v-18de0a21>`);
						_push(ssrRenderComponent(unref(Download), { "aria-hidden": "true" }, null, _parent));
						_push(`<span data-v-18de0a21>${ssrInterpolate(downloadText("download"))}</span></a></article>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div></section>`);
			} else _push(`<!---->`);
			if (hasDownloadFinder.value || isRustMinerAppDownloadPage.value) {
				_push(`<section class="download-partners" aria-labelledby="download-partners-title" data-v-18de0a21><div class="partners-copy" data-v-18de0a21><span data-v-18de0a21>${ssrInterpolate(unref(t)("download.partners.kicker"))}</span><h2 id="download-partners-title" data-v-18de0a21>${ssrInterpolate(unref(t)("download.partners.title"))}</h2><p data-v-18de0a21>${ssrInterpolate(unref(t)("download.partners.description"))}</p></div><div class="partner-grid"${ssrRenderAttr("aria-label", unref(t)("download.partners.ariaLabel"))} data-v-18de0a21><!--[-->`);
				ssrRenderList(partnerLinks, (partner) => {
					_push(`<a${ssrRenderAttr("href", partner.href)} class="partner-card" target="_blank" rel="noopener noreferrer" data-v-18de0a21><span class="partner-logo-frame" data-v-18de0a21><img${ssrRenderAttr("src", partner.logo)}${ssrRenderAttr("alt", unref(t)(`download.partners.items.${partner.key}`))} class="partner-logo" loading="lazy" decoding="async" data-v-18de0a21></span><span class="partner-name" data-v-18de0a21>${ssrInterpolate(unref(t)(`download.partners.items.${partner.key}`))}</span></a>`);
				});
				_push(`<!--]--></div></section>`);
			} else _push(`<!---->`);
			_push(`</div></main>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/DownloadView.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var DownloadView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-18de0a21"]]);
//#endregion
export { DownloadView_default as default };
