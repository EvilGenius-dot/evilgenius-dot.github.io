import{A as e,B as t,C as n,F as r,G as i,H as a,I as o,J as s,K as c,N as l,R as u,S as d,T as f,U as p,V as m,Y as h,_ as g,_t as _,b as v,c as y,d as b,ft as x,g as S,gt as C,ht as w,it as T,j as E,lt as D,m as O,mt as k,p as A,r as ee,t as j,ut as M,v as N,x as te,y as P}from"./_plugin-vue_export-helper-C21jn19j.js";import{i as ne,n as re,r as ie,t as ae}from"./terminal-DaECQ92P.js";import{t as oe}from"./check-DtFWptcr.js";import{A as se,C as ce,D as le,E as F,L as ue,M as de,O as fe,R as pe,S as I,T as me,W as he,_ as L,a as ge,b as _e,c as ve,d as R,f as ye,g as be,h as xe,i as Se,j as Ce,k as we,l as Te,m as Ee,n as z,o as B,p as De,r as Oe,s as V,t as H,u as ke,v as U,w as Ae,x as je,y as Me}from"./app-uDkfDeBP.js";function Ne(e){return typeof e==`string`?`'${e}'`:new Pe().serialize(e)}var Pe=function(){class e{#e=new Map;compare(e,t){let n=typeof e,r=typeof t;return n===`string`&&r===`string`?e.localeCompare(t):n===`number`&&r===`number`?e-t:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(t,!0))}serialize(e,t){if(e===null)return`null`;switch(typeof e){case`string`:return t?e:`'${e}'`;case`bigint`:return`${e}n`;case`object`:return this.$object(e);case`function`:return this.$function(e)}return String(e)}serializeObject(e){let t=Object.prototype.toString.call(e);if(t!==`[object Object]`)return this.serializeBuiltInType(t.length<10?`unknown:${t}`:t.slice(8,-1),e);let n=e.constructor,r=n===Object||n===void 0?``:n.name;if(r!==``&&globalThis[r]===n)return this.serializeBuiltInType(r,e);if(typeof e.toJSON==`function`){let t=e.toJSON();return r+(typeof t==`object`&&t?this.$object(t):`(${this.serialize(t)})`)}return this.serializeObjectEntries(r,Object.entries(e))}serializeBuiltInType(e,t){let n=this[`$`+e];if(n)return n.call(this,t);if(typeof t?.entries==`function`)return this.serializeObjectEntries(e,t.entries());throw Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,t){let n=Array.from(t).sort((e,t)=>this.compare(e[0],t[0])),r=`${e}{`;for(let e=0;e<n.length;e++){let[t,i]=n[e];r+=`${this.serialize(t,!0)}:${this.serialize(i)}`,e<n.length-1&&(r+=`,`)}return r+`}`}$object(e){let t=this.#e.get(e);return t===void 0&&(this.#e.set(e,`#${this.#e.size}`),t=this.serializeObject(e),this.#e.set(e,t)),t}$function(e){let t=Function.prototype.toString.call(e);return t.slice(-15)===`[native code] }`?`${e.name||``}()[native]`:`${e.name}(${e.length})${t.replace(/\s*\n\s*/g,``)}`}$Array(e){let t=`[`;for(let n=0;n<e.length;n++)t+=this.serialize(e[n]),n<e.length-1&&(t+=`,`);return t+`]`}$Date(e){try{return`Date(${e.toISOString()})`}catch{return`Date(null)`}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(`,`)}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((e,t)=>this.compare(e,t)))}`}$Map(e){return this.serializeObjectEntries(`Map`,e.entries())}}for(let t of[`Error`,`RegExp`,`URL`])e.prototype[`$`+t]=function(e){return`${t}(${e})`};for(let t of[`Int8Array`,`Uint8Array`,`Uint8ClampedArray`,`Int16Array`,`Uint16Array`,`Int32Array`,`Uint32Array`,`Float32Array`,`Float64Array`])e.prototype[`$`+t]=function(e){return`${t}[${e.join(`,`)}]`};for(let t of[`BigInt64Array`,`BigUint64Array`])e.prototype[`$`+t]=function(e){return`${t}[${e.join(`n,`)}${e.length>0?`n`:``}]`};return e}();function Fe(e,t){return e===t||Ne(e)===Ne(t)}function Ie(e,t=-1/0,n=1/0){return Math.min(n,Math.max(t,e))}function Le(e){return S(()=>M(e)?!!ce(e)?.closest(`form`):!0)}var Re=n({__name:`VisuallyHidden`,props:{feature:{type:String,required:!1,default:`focusable`},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){return(e,t)=>(u(),N(x(R),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature===`focusable`?`true`:void 0,"data-hidden":e.feature===`fully-hidden`?``:void 0,tabindex:e.feature===`fully-hidden`?`-1`:void 0,style:{position:`absolute`,border:0,width:`1px`,height:`1px`,padding:0,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`,wordWrap:`normal`,top:`-1px`,left:`-1px`}},{default:s(()=>[m(e.$slots,`default`)]),_:3},8,[`as`,`as-child`,`aria-hidden`,`data-hidden`,`tabindex`]))}});function ze(e){let t=I({nonce:T()});return S(()=>e?.value||t.nonce?.value)}var Be=[` `,`Enter`,`ArrowUp`,`ArrowDown`],W=[` `,`Enter`];function G(e,t,n){return e===void 0?!1:Array.isArray(e)?e.some(e=>K(e,t,n)):K(e,t,n)}function K(e,t,n){return e===void 0||t===void 0?!1:typeof e==`string`?e===t:typeof n==`function`?n(e,t):typeof n==`string`?e?.[n]===t?.[n]:Fe(e,t)}function Ve(e){return e==null||e===``||Array.isArray(e)&&e.length===0}var q={key:0,value:``},[J,Y]=se(`SelectRoot`),X=n({inheritAttrs:!1,__name:`SelectRoot`,props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1},defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1,default:void 0},by:{type:[String,Function],required:!1},dir:{type:String,required:!1},multiple:{type:Boolean,required:!1},autocomplete:{type:String,required:!1},disabled:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`update:modelValue`,`update:open`],setup(n,{emit:r}){let i=n,a=r,{required:o,disabled:c,multiple:l,dir:d}=D(i),f=me(i,`modelValue`,a,{defaultValue:i.defaultValue??(l.value?[]:void 0),passive:i.modelValue===void 0,deep:!0}),p=me(i,`open`,a,{defaultValue:i.defaultOpen,passive:i.open===void 0}),h=T(),g=T(),_=T({x:0,y:0}),y=S(()=>l.value&&Array.isArray(f.value)?f.value?.length===0:le(f.value));B({isProvider:!0});let b=_e(d),C=Le(h),w=T(new Set),E=S(()=>Array.from(w.value).map(e=>e.value).join(`;`));function O(e){if(l.value){let t=Array.isArray(f.value)?[...f.value]:[],n=t.findIndex(t=>K(t,e,i.by));n===-1?t.push(e):t.splice(n,1),f.value=[...t]}else f.value=e}function k(e){return Array.from(w.value).find(t=>G(e,t.value,i.by))}return Y({triggerElement:h,onTriggerChange:e=>{h.value=e},valueElement:g,onValueElementChange:e=>{g.value=e},contentId:``,modelValue:f,onValueChange:O,by:i.by,open:p,multiple:l,required:o,onOpenChange:e=>{p.value=e},dir:b,triggerPointerDownPosRef:_,disabled:c,isEmptyModelValue:y,optionsSet:w,onOptionAdd:e=>{let t=k(e.value);t&&w.value.delete(t),w.value.add(e)},onOptionRemove:e=>{let t=k(e.value);t&&w.value.delete(t)}}),(n,r)=>(u(),N(x(ge),null,{default:s(()=>[m(n.$slots,`default`,{modelValue:x(f),open:x(p)}),x(C)&&n.name?(u(),N(He,{key:E.value,"aria-hidden":`true`,tabindex:`-1`,multiple:x(l),required:x(o),name:n.name,autocomplete:n.autocomplete,disabled:x(c),value:x(f)},{default:s(()=>[x(le)(x(f))?(u(),v(`option`,q)):P(`v-if`,!0),(u(!0),v(A,null,t(Array.from(w.value),t=>(u(),v(`option`,e({key:t.value??``},{ref_for:!0},t),null,16))),128))]),_:1},8,[`multiple`,`required`,`name`,`autocomplete`,`disabled`,`value`])):P(`v-if`,!0)]),_:3}))}}),He=n({__name:`BubbleSelect`,props:{autocomplete:{type:String,required:!1},autofocus:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},form:{type:String,required:!1},multiple:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1},size:{type:Number,required:!1},value:{type:null,required:!1}},setup(t){let n=t,r=T(),a=J();i(()=>n.value,(e,t)=>{let n=window.HTMLSelectElement.prototype,i=Object.getOwnPropertyDescriptor(n,`value`).set;if(e!==t&&i&&r.value){let t=new Event(`change`,{bubbles:!0});i.call(r.value,e),r.value.dispatchEvent(t)}});function o(e){a.onValueChange(e.target.value)}return(t,i)=>(u(),N(x(Re),{"as-child":``},{default:s(()=>[g(`select`,e({ref_key:`selectElement`,ref:r},n,{onInput:o}),[m(t.$slots,`default`)],16)]),_:3}))}}),Ue=n({__name:`SelectPopperPosition`,props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1,default:`start`},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1,default:10},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){let n=L(t);return(t,r)=>(u(),N(x(Oe),e(x(n),{style:{boxSizing:`border-box`,"--reka-select-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-select-content-available-width":`var(--reka-popper-available-width)`,"--reka-select-content-available-height":`var(--reka-popper-available-height)`,"--reka-select-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-select-trigger-height":`var(--reka-popper-anchor-height)`}}),{default:s(()=>[m(t.$slots,`default`)]),_:3},16))}}),We={onViewportChange:()=>{},itemTextRefCallback:()=>{},itemRefCallback:()=>{}},[Z,Q]=se(`SelectContent`),Ge=n({__name:`SelectContentImpl`,props:{position:{type:String,required:!1,default:`item-aligned`},bodyLock:{type:Boolean,required:!1,default:!0},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1,default:`start`},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1,default:!0}},emits:[`closeAutoFocus`,`escapeKeyDown`,`pointerDownOutside`],setup(t,{emit:n}){let r=t,a=n,o=J();Me(),je(r.bodyLock);let{CollectionSlot:l,getItems:f}=B(),h=T();xe(h);let{search:g,handleTypeaheadSearch:_}=De(),v=T(),y=T(),C=T(),w=T(!1),E=T(!1),D=T(!1);function O(){y.value&&h.value&&ve([y.value,h.value])}i(w,()=>{O()});let{onOpenChange:k,triggerPointerDownPosRef:A}=o;c(e=>{if(!h.value)return;let t={x:0,y:0},n=e=>{t={x:Math.abs(Math.round(e.pageX)-(A.value?.x??0)),y:Math.abs(Math.round(e.pageY)-(A.value?.y??0))}},r=e=>{e.pointerType!==`touch`&&(t.x<=10&&t.y<=10?e.preventDefault():h.value?.contains(e.target)||k(!1),document.removeEventListener(`pointermove`,n),A.value=null)};A.value!==null&&(document.addEventListener(`pointermove`,n),document.addEventListener(`pointerup`,r,{capture:!0,once:!0})),e(()=>{document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r,{capture:!0})})});function ee(e){let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&_(e.key,f()),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=[...f().map(e=>e.ref)];if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>ve(t)),e.preventDefault()}}let j=L(S(()=>r.position===`popper`?r:{}).value);return Q({content:h,viewport:v,onViewportChange:e=>{v.value=e},itemRefCallback:(e,t,n)=>{let r=!E.value&&!n,i=G(o.modelValue.value,t,o.by);if(o.multiple.value){if(D.value)return;(i||r)&&(y.value=e,i&&(D.value=!0))}else (i||r)&&(y.value=e);r&&(E.value=!0)},selectedItem:y,selectedItemText:C,onItemLeave:()=>{h.value?.focus()},itemTextRefCallback:(e,t,n)=>{let r=!E.value&&!n;(G(o.modelValue.value,t,o.by)||r)&&(C.value=e)},focusSelectedItem:O,position:r.position,isPositioned:w,searchRef:g}),(t,n)=>(u(),N(x(l),null,{default:s(()=>[d(x(Te),{"as-child":``,onMountAutoFocus:n[6]||=b(()=>{},[`prevent`]),onUnmountAutoFocus:n[7]||=e=>{a(`closeAutoFocus`,e),!e.defaultPrevented&&(x(o).triggerElement.value?.focus({preventScroll:!0}),e.preventDefault())}},{default:s(()=>[d(x(ke),{"as-child":``,"disable-outside-pointer-events":t.disableOutsidePointerEvents,onFocusOutside:n[2]||=b(()=>{},[`prevent`]),onDismiss:n[3]||=e=>x(o).onOpenChange(!1),onEscapeKeyDown:n[4]||=e=>a(`escapeKeyDown`,e),onPointerDownOutside:n[5]||=e=>a(`pointerDownOutside`,e)},{default:s(()=>[(u(),N(p(t.position===`popper`?Ue:Je),e({...t.$attrs,...x(j)},{id:x(o).contentId,ref:e=>{if(!e)return;let t=x(ce)(e);t?.hasAttribute(`data-reka-popper-content-wrapper`)?h.value=t.firstElementChild:h.value=t},role:`listbox`,"data-state":x(o).open.value?`open`:`closed`,dir:x(o).dir.value,style:{display:`flex`,flexDirection:`column`,outline:`none`},onContextmenu:n[0]||=b(()=>{},[`prevent`]),onPlaced:n[1]||=e=>w.value=!0,onKeydown:ee}),{default:s(()=>[m(t.$slots,`default`)]),_:3},16,[`id`,`data-state`,`dir`,`onKeydown`]))]),_:3},8,[`disable-outside-pointer-events`])]),_:3})]),_:3}))}}),[Ke,qe]=se(`SelectItemAlignedPosition`),Je=n({inheritAttrs:!1,__name:`SelectItemAlignedPosition`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`placed`],setup(t,{emit:n}){let i=t,a=n,{getItems:o}=B(),c=J(),l=Z(),f=T(!1),p=T(!0),h=T(),{forwardRef:g,currentElement:_}=U(),{viewport:y,selectedItem:b,selectedItemText:S,focusSelectedItem:w}=l;function D(){if(c.triggerElement.value&&c.valueElement.value&&h.value&&_.value&&y?.value&&b?.value&&S?.value){let e=c.triggerElement.value.getBoundingClientRect(),t=_.value.getBoundingClientRect(),n=c.valueElement.value.getBoundingClientRect(),r=S.value.getBoundingClientRect();if(c.dir.value!==`rtl`){let i=r.left-t.left,a=n.left-i,o=e.left-a,s=e.width+o,c=Math.max(s,t.width),l=window.innerWidth-10,u=Ie(a,10,Math.max(10,l-c));h.value.style.minWidth=`${s}px`,h.value.style.left=`${u}px`}else{let i=t.right-r.right,a=window.innerWidth-n.right-i,o=window.innerWidth-e.right-a,s=e.width+o,c=Math.max(s,t.width),l=window.innerWidth-10,u=Ie(a,10,Math.max(10,l-c));h.value.style.minWidth=`${s}px`,h.value.style.right=`${u}px`}let i=o().map(e=>e.ref),s=window.innerHeight-20,l=y.value.scrollHeight,u=window.getComputedStyle(_.value),d=Number.parseInt(u.borderTopWidth,10),p=Number.parseInt(u.paddingTop,10),m=Number.parseInt(u.borderBottomWidth,10),g=Number.parseInt(u.paddingBottom,10),v=d+p+l+g+m,x=Math.min(b.value.offsetHeight*5,v),C=window.getComputedStyle(y.value),w=Number.parseInt(C.paddingTop,10),T=Number.parseInt(C.paddingBottom,10),E=e.top+e.height/2-10,D=s-E,O=b.value.offsetHeight/2,k=b.value.offsetTop+O,A=d+p+k,ee=v-A;if(A<=E){let e=b.value===i.at(-1);h.value.style.bottom=`0px`;let t=_.value.clientHeight-y.value.offsetTop-y.value.offsetHeight,n=A+Math.max(D,O+(e?T:0)+t+m);h.value.style.height=`${n}px`}else{let e=b.value===i[0];h.value.style.top=`0px`;let t=Math.max(E,d+y.value.offsetTop+(e?w:0)+O)+ee;h.value.style.height=`${t}px`,y.value.scrollTop=A-E+y.value.offsetTop}h.value.style.margin=`10px 0`,h.value.style.minHeight=`${x}px`,h.value.style.maxHeight=`${s}px`,a(`placed`),requestAnimationFrame(()=>f.value=!0)}}let O=T(``);r(async()=>{await E(),D(),_.value&&(O.value=window.getComputedStyle(_.value).zIndex)});function k(e){e&&p.value===!0&&(D(),w?.(),p.value=!1)}return Ae(c.triggerElement,()=>{D()}),qe({contentWrapper:h,shouldExpandOnScrollRef:f,onScrollButtonChange:k}),(t,n)=>(u(),v(`div`,{ref_key:`contentWrapperElement`,ref:h,style:C({display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:O.value})},[d(x(R),e({ref:x(g),style:{boxSizing:`border-box`,maxHeight:`100%`}},{...t.$attrs,...i}),{default:s(()=>[m(t.$slots,`default`)]),_:3},16)],4))}}),Ye=n({inheritAttrs:!1,__name:`SelectProvider`,props:{context:{type:Object,required:!0}},setup(e){return Y(e.context),Q(We),(e,t)=>m(e.$slots,`default`)}}),Xe={key:1},Ze=n({inheritAttrs:!1,__name:`SelectContent`,props:{forceMount:{type:Boolean,required:!1},position:{type:String,required:!1},bodyLock:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:[`closeAutoFocus`,`escapeKeyDown`,`pointerDownOutside`],setup(e,{emit:t}){let n=e,a=be(n,t),c=J(),l=T();r(()=>{l.value=new DocumentFragment});let p=T(),h=S(()=>n.forceMount||c.open.value),g=T(h.value),_;function y(){_&&=(clearTimeout(_),void 0)}return i(h,(e,t,n)=>{y(),_=setTimeout(()=>{g.value=h.value,_=void 0}),n(y)}),o(y),(e,t)=>h.value||g.value||p.value?.present?(u(),N(x(ye),{key:0,ref_key:`presenceRef`,ref:p,present:h.value},{default:s(()=>[d(Ge,w(f({...x(a),...e.$attrs})),{default:s(()=>[m(e.$slots,`default`)]),_:3},16)]),_:3},8,[`present`])):l.value?(u(),v(`div`,Xe,[(u(),N(O,{to:l.value},[d(Ye,{context:x(c)},{default:s(()=>[m(e.$slots,`default`)]),_:3},8,[`context`])],8,[`to`]))])):P(`v-if`,!0)}}),Qe=n({__name:`SelectIcon`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){return(e,t)=>(u(),N(x(R),{"aria-hidden":`true`,as:e.as,"as-child":e.asChild},{default:s(()=>[m(e.$slots,`default`,{},()=>[t[0]||=te(`▼`)])]),_:3},8,[`as`,`as-child`]))}}),[$e,et]=se(`SelectItem`),tt=n({__name:`SelectItem`,props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`select`],setup(e,{emit:t}){let n=e,i=t,{disabled:a}=D(n),o=J(),c=Z(),{forwardRef:l,currentElement:f}=U(),{CollectionItem:p}=B(),h=S(()=>G(o.modelValue?.value,n.value,o.by)),g=T(!1),_=T(n.textValue??``),v=Ee(void 0,`reka-select-item-text`);async function y(e){e.defaultPrevented||fe(`select.select`,C,{originalEvent:e,value:n.value})}async function C(e){await E(),i(`select`,e),!e.defaultPrevented&&(a.value||(o.onValueChange(n.value),o.multiple.value||o.onOpenChange(!1)))}async function w(e){await E(),!e.defaultPrevented&&(a.value?c.onItemLeave?.():e.currentTarget?.focus({preventScroll:!0}))}async function O(e){await E(),!e.defaultPrevented&&e.currentTarget===we()&&c.onItemLeave?.()}async function k(e){await E(),!e.defaultPrevented&&(c.searchRef?.value!==``&&e.key===` `||(W.includes(e.key)&&y(e),e.key===` `&&e.preventDefault()))}if(n.value===``)throw Error(`A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.`);return r(()=>{f.value&&c.itemRefCallback(f.value,n.value,n.disabled)}),et({value:n.value,disabled:a,textId:v,isSelected:h,onItemTextChange:e=>{_.value=((_.value||e?.textContent)??``).trim()}}),(e,t)=>(u(),N(x(p),{value:{textValue:_.value}},{default:s(()=>[d(x(R),{ref:x(l),role:`option`,"aria-labelledby":x(v),"data-highlighted":g.value?``:void 0,"aria-selected":h.value,"data-state":h.value?`checked`:`unchecked`,"aria-disabled":x(a)||void 0,"data-disabled":x(a)?``:void 0,tabindex:x(a)?void 0:-1,as:e.as,"as-child":e.asChild,onFocus:t[0]||=e=>g.value=!0,onBlur:t[1]||=e=>g.value=!1,onPointerup:y,onPointerdown:t[2]||=e=>{e.currentTarget.focus({preventScroll:!0})},onTouchend:t[3]||=b(()=>{},[`prevent`,`stop`]),onPointermove:w,onPointerleave:O,onKeydown:k},{default:s(()=>[m(e.$slots,`default`)]),_:3},8,[`aria-labelledby`,`data-highlighted`,`aria-selected`,`data-state`,`aria-disabled`,`data-disabled`,`tabindex`,`as`,`as-child`])]),_:3},8,[`value`]))}}),nt=n({__name:`SelectItemIndicator`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(t){let n=t,r=$e();return(t,i)=>x(r).isSelected.value?(u(),N(x(R),e({key:0,"aria-hidden":`true`},n),{default:s(()=>[m(t.$slots,`default`)]),_:3},16)):P(`v-if`,!0)}}),rt=n({inheritAttrs:!1,__name:`SelectItemText`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(t){let n=t,i=J(),a=Z(),c=$e(),{forwardRef:l,currentElement:d}=U(),f=S(()=>({value:c.value,disabled:c.disabled.value,textContent:d.value?.textContent??c.value?.toString()??``}));return r(()=>{d.value&&(c.onItemTextChange(d.value),a.itemTextRefCallback(d.value,c.value,c.disabled.value),i.onOptionAdd(f.value))}),o(()=>{i.onOptionRemove(f.value)}),(t,r)=>(u(),N(x(R),e({id:x(c).textId,ref:x(l)},{...n,...t.$attrs}),{default:s(()=>[m(t.$slots,`default`)]),_:3},16,[`id`]))}}),it=n({__name:`SelectPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let t=e;return(e,n)=>(u(),N(x(V),w(f(t)),{default:s(()=>[m(e.$slots,`default`)]),_:3},16))}}),at=n({__name:`SelectScrollButtonImpl`,emits:[`autoScroll`],setup(t,{emit:n}){let r=n,{getItems:i}=B(),a=Z(),o=T(null);function d(){o.value!==null&&(window.clearInterval(o.value),o.value=null)}c(()=>{i().map(e=>e.ref).find(e=>e===we())?.scrollIntoView({block:`nearest`})});function f(){o.value===null&&(o.value=window.setInterval(()=>{r(`autoScroll`)},50))}function p(){a.onItemLeave?.(),o.value===null&&(o.value=window.setInterval(()=>{r(`autoScroll`)},50))}return l(()=>d()),(t,n)=>(u(),N(x(R),e({"aria-hidden":`true`,style:{flexShrink:0}},t.$parent?.$props,{onPointerdown:f,onPointermove:p,onPointerleave:n[0]||=()=>{d()}}),{default:s(()=>[m(t.$slots,`default`)]),_:3},16))}}),ot=n({__name:`SelectScrollDownButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=Z(),n=t.position===`item-aligned`?Ke():void 0,{forwardRef:r,currentElement:a}=U(),o=T(!1);return c(e=>{if(t.viewport?.value&&t.isPositioned?.value){let n=t.viewport.value;function r(){let e=n.scrollHeight-n.clientHeight;o.value=Math.ceil(n.scrollTop)<e}r(),n.addEventListener(`scroll`,r),e(()=>n.removeEventListener(`scroll`,r))}}),i(a,()=>{a.value&&n?.onScrollButtonChange(a.value)}),(e,n)=>o.value?(u(),N(at,{key:0,ref:x(r),onAutoScroll:n[0]||=()=>{let{viewport:e,selectedItem:n}=x(t);e?.value&&n?.value&&(e.value.scrollTop=e.value.scrollTop+n.value.offsetHeight)}},{default:s(()=>[m(e.$slots,`default`)]),_:3},512)):P(`v-if`,!0)}}),st=n({__name:`SelectScrollUpButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=Z(),n=t.position===`item-aligned`?Ke():void 0,{forwardRef:r,currentElement:a}=U(),o=T(!1);return c(e=>{if(t.viewport?.value&&t.isPositioned?.value){let n=t.viewport.value;function r(){o.value=n.scrollTop>0}r(),n.addEventListener(`scroll`,r),e(()=>n.removeEventListener(`scroll`,r))}}),i(a,()=>{a.value&&n?.onScrollButtonChange(a.value)}),(e,n)=>o.value?(u(),N(at,{key:0,ref:x(r),onAutoScroll:n[0]||=()=>{let{viewport:e,selectedItem:n}=x(t);e?.value&&n?.value&&(e.value.scrollTop=e.value.scrollTop-n.value.offsetHeight)}},{default:s(()=>[m(e.$slots,`default`)]),_:3},512)):P(`v-if`,!0)}}),ct=n({__name:`SelectTrigger`,props:{disabled:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(e){let t=e,n=J(),{forwardRef:i,currentElement:a}=U(),o=S(()=>n.disabled?.value||t.disabled);n.contentId||=Ee(void 0,`reka-select-content`),r(()=>{n.onTriggerChange(a.value)});let{getItems:c}=B(),{search:l,handleTypeaheadSearch:f,resetTypeahead:p}=De();function h(){o.value||(n.onOpenChange(!0),p())}function g(e){h(),n.triggerPointerDownPosRef.value={x:Math.round(e.pageX),y:Math.round(e.pageY)}}return(e,t)=>(u(),N(x(Se),{"as-child":``,reference:e.reference},{default:s(()=>[d(x(R),{ref:x(i),role:`combobox`,type:e.as===`button`?`button`:void 0,"aria-controls":x(n).contentId,"aria-expanded":x(n).open.value||!1,"aria-required":x(n).required?.value,"aria-autocomplete":`none`,disabled:o.value,dir:x(n)?.dir.value,"data-state":x(n)?.open.value?`open`:`closed`,"data-disabled":o.value?``:void 0,"data-placeholder":x(Ve)(x(n).modelValue?.value)?``:void 0,"as-child":e.asChild,as:e.as,onClick:t[0]||=e=>{(e?.currentTarget)?.focus()},onPointerdown:t[1]||=e=>{if(e.pointerType===`touch`)return e.preventDefault();let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&(g(e),e.preventDefault())},onPointerup:t[2]||=b(e=>{e.pointerType===`touch`&&g(e)},[`prevent`]),onKeydown:t[3]||=e=>{let t=x(l)!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&t&&e.key===` `||(x(f)(e.key,x(c)()),x(Be).includes(e.key)&&(h(),e.preventDefault()))}},{default:s(()=>[m(e.$slots,`default`)]),_:3},8,[`type`,`aria-controls`,`aria-expanded`,`aria-required`,`disabled`,`dir`,`data-state`,`data-disabled`,`data-placeholder`,`as-child`,`as`])]),_:3},8,[`reference`]))}}),lt=n({__name:`SelectValue`,props:{placeholder:{type:String,required:!1,default:``},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){let t=e,{forwardRef:n,currentElement:i}=U(),a=J();r(()=>{a.valueElement=i});let o=S(()=>{let e=[],t=Array.from(a.optionsSet.value),n=e=>t.find(t=>G(e,t.value,a.by));return e=Array.isArray(a.modelValue.value)?a.modelValue.value.map(e=>n(e)?.textContent??``):[n(a.modelValue.value)?.textContent??``],e.filter(Boolean)}),c=S(()=>o.value.length?o.value.join(`, `):t.placeholder);return(e,r)=>(u(),N(x(R),{ref:x(n),as:e.as,"as-child":e.asChild,style:{pointerEvents:`none`},"data-placeholder":o.value.length?void 0:t.placeholder},{default:s(()=>[m(e.$slots,`default`,{selectedLabel:o.value,modelValue:x(a).modelValue.value},()=>[te(_(c.value),1)])]),_:3},8,[`as`,`as-child`,`data-placeholder`]))}}),ut=n({__name:`SelectViewport`,props:{nonce:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){let n=t,{nonce:i}=D(n),a=ze(i),o=Z(),c=o.position===`item-aligned`?Ke():void 0,{forwardRef:l,currentElement:f}=U();r(()=>{o?.onViewportChange(f.value)});let p=T(0);function h(e){let t=e.currentTarget,{shouldExpandOnScrollRef:n,contentWrapper:r}=c??{};if(n?.value&&r?.value){let e=Math.abs(p.value-t.scrollTop);if(e>0){let n=window.innerHeight-20,i=Number.parseFloat(r.value.style.minHeight),a=Number.parseFloat(r.value.style.height),o=Math.max(i,a);if(o<n){let i=o+e,a=Math.min(n,i),s=i-a;r.value.style.height=`${a}px`,r.value.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,r.value.style.justifyContent=`flex-end`)}}}p.value=t.scrollTop}return(t,r)=>(u(),v(A,null,[d(x(R),e({ref:x(l),"data-reka-select-viewport":``,role:`presentation`},{...t.$attrs,...n},{style:{position:`relative`,flex:1,overflow:`hidden auto`},onScroll:h}),{default:s(()=>[m(t.$slots,`default`)]),_:3},16),d(x(R),{as:`style`,nonce:x(a)},{default:s(()=>r[0]||=[te(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } `)]),_:1,__:[0]},8,[`nonce`])],64))}}),dt=z(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ft=z(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),pt=z(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),mt=z(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),ht=z(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),gt=z(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),_t=z(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),vt=z(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),yt=z(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),$=z(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),bt=z(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),xt=`/image/cligif.gif`,St=`/image/custom-ios-widget/preview.jpg`,Ct={__name:`Select`,props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1},by:{type:[String,Function],required:!1},dir:{type:String,required:!1},multiple:{type:Boolean,required:!1},autocomplete:{type:String,required:!1},disabled:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`update:modelValue`,`update:open`],setup(e,{emit:t}){let n=be(e,t);return(e,t)=>(u(),N(x(X),w(f(x(n))),{default:s(()=>[m(e.$slots,`default`)]),_:3},16))}},wt=Object.assign({inheritAttrs:!1},{__name:`SelectContent`,props:{forceMount:{type:Boolean,required:!1},position:{type:String,required:!1,default:`popper`},bodyLock:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},emits:[`closeAutoFocus`,`escapeKeyDown`,`pointerDownOutside`],setup(t,{emit:n}){let r=t,i=n,a=be(F(r,`class`),i);return(n,i)=>(u(),N(x(it),null,{default:s(()=>[d(x(Ze),e({...x(a),...n.$attrs},{class:x(H)(`relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,t.position===`popper`&&`data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,r.class)}),{default:s(()=>[d(x(Ot)),d(x(ut),{class:k(x(H)(`p-1`,t.position===`popper`&&`h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]`))},{default:s(()=>[m(n.$slots,`default`)]),_:3},8,[`class`]),d(x(Dt))]),_:3},16,[`class`])]),_:3}))}}),Tt={class:`absolute right-2 flex h-3.5 w-3.5 items-center justify-center`},Et={__name:`SelectItem`,props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let n=t,r=L(F(n,`class`));return(t,i)=>(u(),N(x(tt),e(x(r),{class:x(H)(`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,n.class)}),{default:s(()=>[g(`span`,Tt,[d(x(nt),null,{default:s(()=>[d(x(oe),{class:`h-4 w-4`})]),_:1})]),d(x(rt),null,{default:s(()=>[m(t.$slots,`default`)]),_:3})]),_:3},16,[`class`]))}},Dt={__name:`SelectScrollDownButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let n=t,r=L(F(n,`class`));return(t,i)=>(u(),N(x(ot),e(x(r),{class:x(H)(`flex cursor-default items-center justify-center py-1`,n.class)}),{default:s(()=>[m(t.$slots,`default`,{},()=>[d(x(ft))])]),_:3},16,[`class`]))}},Ot={__name:`SelectScrollUpButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let n=t,r=L(F(n,`class`));return(t,i)=>(u(),N(x(st),e(x(r),{class:x(H)(`flex cursor-default items-center justify-center py-1`,n.class)}),{default:s(()=>[m(t.$slots,`default`,{},()=>[d(x(pt))])]),_:3},16,[`class`]))}},kt={__name:`SelectTrigger`,props:{disabled:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let n=t,r=L(F(n,`class`));return(t,i)=>(u(),N(x(ct),e(x(r),{class:x(H)(`flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start`,n.class)}),{default:s(()=>[m(t.$slots,`default`),d(x(Qe),{"as-child":``},{default:s(()=>[d(x(ft),{class:`w-4 h-4 opacity-50 shrink-0`})]),_:1})]),_:3},16,[`class`]))}},At={__name:`SelectValue`,props:{placeholder:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=e;return(e,n)=>(u(),N(x(lt),w(f(t)),{default:s(()=>[m(e.$slots,`default`)]),_:3},16))}},jt=`// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
function drawChart(data, width, height, color) {
    let context = new DrawContext();
    context.size = new Size(width, height);
    context.opaque = false;
    context.respectScreenScale = true;

    if (!data || data.length < 2) data = [0, 0, 0, 0, 0];

    let max = Math.max(...data);
    let min = Math.min(...data);
    if (max === min) max = min + 1;

    let path = new Path();
    let step = width / (data.length - 1);
    
    // 【关键修改】添加 2px 的上下内边距，防止线条溢出
    let drawPadding = 2; 
    let usableHeight = height - (drawPadding * 2);

    for (let i = 0; i < data.length; i++) {
        let x = i * step;
        // 计算 y 时，将坐标映射到 usableHeight 并在顶部预留 drawPadding
        let y = height - ((data[i] - min) / (max - min) * usableHeight + drawPadding);
        
        if (i === 0) {
            path.move(new Point(x, y));
        } else {
            path.addLine(new Point(x, y));
        }
    }

    context.addPath(path);
    context.setStrokeColor(color);
    context.setLineWidth(2); // 线条宽度
    context.strokePath();

    return context.getImage();
}

const transHash = (hash, alg, rr) => {
    // rr为0，计算方式为btc类似协议
    // rr为1, 摇骰子抽水方式并且重复份额不计算id方式
    let res = hash;

    if (alg) {
        alg = alg.toLowerCase()
    }

    if (!res) {
        res = 0;
    } else {
        if (typeof(res) == 'string' && res.indexOf('"') > -1) {
            res = JSON.parse(res)
        }
        res = Number(res);
    }

    if (isNaN(res)) {
        res = 0
    }

    if (alg == 'ethhash' || alg == 'ethhash2d') {
        if (rr === 0) {
            let t = res * Math.pow(2, 32) / 1000000000000
            let p = t / 1000;
            let g = 1000 * t;
            let m = 1000 * g;
            let k = 1000 * m;

            if (p > 1) {
                res = p.toFixed(2) + 'P'
            } else if (t > 1) {
                res = t.toFixed(2) + 'T'
            } else if (g > 1) {
                res = g.toFixed(2) + 'G'
            } else if (m > 1) {
                res = m.toFixed(2) + 'M'
            } else if (k > 1) {
                res = k.toFixed(2) + 'K'
            } else {
                res = k.toFixed(2) + 'K'
            }

            return res
        } else {
            let m = res / 1000000;
            let g = m / 1000;
            let t = g / 1000;

            if (t > 1) {
                res = t.toFixed(2) + 'T'
            } else if (g > 1) {
                res = g.toFixed(2) + 'G'
            } else if (m > 1) {
                res = m.toFixed(2) + 'M'
            } else {
                res = m.toFixed(2) + 'M'
            }

            return res
        }
    } else if (alg == 'eth1hash') {
        let m = res / 1000000;
        let k = m * 1000;
        let g = m / 1000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'octopus') {
        let m = res / 1000000;
        let g = m / 1000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else {
            res = m.toFixed(2) + 'M'
        }

        return res
    } else if (alg == 'sha256' || alg == 'sha512256d' || alg == 'nexapow') {
        let t = res * Math.pow(2,32) / 1000000000000
        let e = t / (1000 * 1000);
        let p = t / 1000;
        let g = 1000 * t;
        let m = 1000 * g;
        let k = 1000 * m;

        if (e > 1) {
            res = e.toFixed(2) + 'E'
        } else if (p > 1) {
            res = p.toFixed(2) + 'P'
        } else if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'cuckatoo32') {
        let g = res * Math.pow(2, 32) / 100000000;
        let k = g / 1000;

        if (k > 1) {
            res = k.toFixed(2) + 'KGps'
        } else {
            res = g.toFixed(2) + 'Gps'
        }

        return res
        
    } else if (alg == 'kheavyhash' || alg == 'karlsenhash') {
        // let m = res * Math.pow(2, 12);
        let m = res * Math.pow(2, 12.06845);
        let g = m / 1000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else {
            res = m.toFixed(2) + 'M'
        }

        return res
    } else if (alg == 'scrypt') {
        let m = res * 64 / 1000;
        let g = m / 1000;
        let t = g / 1000;
        // let k = 1000 / m;
        let k = 0;

        if (m > 0) {
            k = 1000 / m;
        }

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'dynexsolve') {
        let kh = res / 1000;

        // if (kh) {
        //     res = kh.toFixed(2) + 'Kh'
        // } else {
        //     res = '0Kh'
        // }

        return kh.toFixed(2) + 'Kh';
    } else if (alg == 'blake2s' || alg == 'eaglesong') {
        // 因为eth双协议都转成了eth算力, 影响到了kda, 所以kda难度转换之后会转成btc的难度, 按照btc处理
        let t = res * Math.pow(2,32) / 1000000000000
        let p = t / 1000;
        let g = 1000 * t;
        let m = 1000 * g;
        let k = 1000 * m;

        if (p > 1) {
            res = p.toFixed(2) + 'P'
        } else if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'lbry') {
        // 经验值
        let t = res / 50000
        let p = t / 1000;
        let g = 1000 * t;
        let m = 1000 * g;
        let k = 1000 * m;

        if (p > 1) {
            res = p.toFixed(2) + 'P'
        } else if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'blake2b') {
        let t = res / 160
        let g = 1000 * t;
        let m = 1000 * g;
        let k = 1000 * m;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'equihash') {
        let bits = res * 480.9995403289804;
        let k = bits / 150000;
        let m = k / 1024;
        let g = m / 1024;

        if (g > 1) {
            res = g.toFixed(2) + 'GSol'
        } else if (m > 1) {
            res = m.toFixed(2) + 'MSol'
        } else if (k > 1) {
            res = k.toFixed(2) + 'KSol'
        } else {
            res = k.toFixed(2) + 'KSol'
        }


        return res
    } else if (alg == 'x11') {
        let t = res * Math.pow(2, 32) / 1000000000000
        let p = t / 1000;
        let g = 1000 * t;
        let m = 1000 * g;
        let k = 1000 * m;

        if (p > 1) {
            res = p.toFixed(2) + 'P'
        } else if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'progpow') {
        let m = res / 1000000;
        let g = m / 1000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else {
            res = m.toFixed(2) + 'M'
        }

        return res
    } else if (alg == 'blake3') {
        let g = res / 62499999.99999999
        let t = g / 1000;
        let p = t / 1000;
        let m = g * 1000;
        let k = m * 1000;

        if (p > 1) {
            res = p.toFixed(2) + 'P'
        } else if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'blake3s') {
        let g = res / 1000000000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else {
            res = g.toFixed(2) + 'G'
        }

        return res

    } else if (alg == 'randomx') {
        let k = res / 1000;
        let m = k / 1000;
        
        if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'ghostrider') {
        let h = res * 60000;
        let k = h / 1000;

        if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else if (h > 1) {
            res = h.toFixed(2) + 'H'
        } else {
            res = h.toFixed(2) + 'H'
        }

        return res
    } else if (alg == 'kawpow') {
        let m = res / 1000000;
        let g = m / 1000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else {
            res = m.toFixed(2) + 'M'
        }

        return res
    } else if (alg == 'kawpow2') {
        let t = res * Math.pow(2,32) / 1000000000000
        let p = t / 1000;
        let g = 1000 * t;
        let m = 1000 * g;
        let k = 1000 * m;

        if (p > 1) {
            res = p.toFixed(2) + 'P'
        } else if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = k.toFixed(2) + 'K'
        } else {
            res = k.toFixed(2) + 'K'
        }

        return res
    } else if (alg == 'autoykos2') {
        let g = res / 1000000000;
        let m = g * 1000;
        let k = m * 1000;
        let t = g / 1000;

        if (t > 1) {
            res = t.toFixed(2) + 'T'
        } else if (g > 1) {
            res = g.toFixed(2) + 'G'
        } else if (m > 1) {
            res = m.toFixed(2) + 'M'
        } else if (k > 1) {
            res = m.toFixed(2) + 'K'
        } else {
            res = m.toFixed(2) + 'K'
        }

        return res
    } else {
        return res.toFixed(2)
    }
}
// ====== 配置数据 ======
const chartWidth = 60;  // 折线图宽度
const chartHeight = 25; // 折线图高度
const renderCount = 5;

let coinBase = [];
let categoryList = [];

let headerData = [
    { title: "在线设备", value: 0 },
    { title: "待审核", value: 0 },
    { title: "客户端数量", value: 0 }
];

let coinsData = [
];

const CTL_TOKEN = "__CTL_TOKEN__";
const API_HOST = "https://client.d0gpool.com";

function drawCoinIcon(symbol) {
    let text = (symbol || "?").toString().slice(0, 3).toUpperCase();
    let context = new DrawContext();
    context.size = new Size(24, 24);
    context.opaque = false;
    context.respectScreenScale = true;

    context.setFillColor(new Color("#3A3A3C"));
    context.fillEllipse(new Rect(0, 0, 24, 24));
    context.setTextColor(Color.white());
    context.setFont(Font.boldSystemFont(text.length > 2 ? 8 : 10));
    if (context.setTextAlignedCenter) context.setTextAlignedCenter();
    context.drawTextInRect(text, new Rect(0, 7, 24, 10));

    return context.getImage();
}

async function loadImage(url, fallbackSymbol) {
    let req = new Request(url);
    try {
        return await req.loadImage();
    } catch (e) {
        console.error("图片加载失败：" + url + "，使用占位图标。" + e);
        return drawCoinIcon(fallbackSymbol);
    }
}

const getCategoryByCoin = (coin) => {
    for (let i = 0; i < coinBase.length; i++) {
        if (coin == coinBase[i].name) {
            let categoryID = coinBase[i].category_id;

            for (let q = 0; q < categoryList.length; q++) {
                if (categoryList[q].id == categoryID) {
                    return categoryList[q].name
                }
            }
        }
    }
}

// 获取算法列表
async function getCategoryList() {
    try {
        let req = new Request(\`\${API_HOST}/api/a/all\`);
        req.method = "GET";
        // 设置 Header
        req.headers = {
            "CTL": CTL_TOKEN,
            "Content-Type": "application/json"
        };
        
        let res = await req.loadJSON();
        
        categoryList = res;
        
        return res;
    } catch (e) {
        console.error("请求失败1：" + e);
        return null;
    }
}

// 获取所有币种基础配置信息
async function getCoinBase() {
    try {
        let req = new Request(\`\${API_HOST}/api/c/all\`);
        req.method = "GET";
        // 设置 Header
        req.headers = {
            "CTL": CTL_TOKEN,
            "Content-Type": "application/json"
        };
        
        let res = await req.loadJSON();
        
        coinBase = res;
        
        return res;
    } catch (e) {
        console.error("请求失败5：" + e);
        return null;
    }
}

// 取币种列表
async function getCoinList() {
    try {
        let req = new Request(\`\${API_HOST}/api/c/0/0/all\`);
        req.method = "GET";
        // 设置 Header
        req.headers = {
            "CTL": CTL_TOKEN,
            "Content-Type": "application/json"
        };
        
        let res = await req.loadJSON();

        coinsData = []
        
        headerData[0].value = res.a;
        headerData[2].value = res.b;

        let c = res.c;

        c.sort((a, b) => {
            return b[0] - a[0];
        });

        for (let i = 0; i < renderCount; i++) {
            coinsData.push({
                icon: \`https://client.d0gpool.com/img/icon-\${c[i][1].toLowerCase()}.png\`,
                name: c[i][1],
                devices: c[i][0],
                hashrate: "0",
                trend: [0,0,0,0,0]
            })
        }
        
        return res;
    } catch (e) {
        console.error("请求失败2：" + e);
        return null;
    }
}

// 取审核数量
async function getReviewLength() {
    try {
        let req = new Request(\`\${API_HOST}/api/review/0?page=1&size=30\`);
        req.method = "GET";
        // 设置 Header
        req.headers = {
            "CTL": CTL_TOKEN,
            "Content-Type": "application/json"
        };
        
        let res = await req.loadJSON();
        console.log(res)
        
        headerData[1].value = res.total;
        
        return res;
    } catch (e) {
        console.error("请求失败3：" + e);
        return null;
    }
}

// 获取指定币种算力
async function getHashByCoin(coin) {
    try {
        let req = new Request(\`\${API_HOST}/api/c/1/0/\${coin}/all\`);
        req.method = "GET";
        // 设置 Header
        req.headers = {
            "CTL": CTL_TOKEN,
            "Content-Type": "application/json"
        };
        
        let res = await req.loadJSON();
        
        return res;
    } catch (e) {
        console.error("请求失败4：" + e);
        return null;
    }
}

// 折线图数据太庞大了, 简化一下
const easyLine = (data) => {
    let res = []

    // 从 15 个点开始, 一般 15 个点之前数据还没聚合完, 结束至末尾之前的5个点，末尾也会存在没聚合完的情况
    // 且每4 个点绘制一次
    //for (let i = 15; i < data.length - 5; i += 4) {
        //res.push(data[i].thh)
    //}
    // 且每4 个点绘制一次
    for (let i = 0; i < data.length; i += 4) {
        res.push(data[i].thh)
    }
    return res
}

// 设置渲染列表中的哈希
async function getCoinHash() {
    let requestList = [];
    for (let i = 0; i < coinsData.length; i++) {
        requestList.push(getHashByCoin(coinsData[i].name))
    }

    const results = await Promise.all(requestList);
    
    results.forEach((res, i) => {
        coinsData[i].hashrate = transHash(res.h[0], getCategoryByCoin(coinsData[i].name), 1)
        coinsData[i].trend = easyLine(res.s)
        // for (let q = 0; q < res.s.length; q++) {
        //     coinsData[i].trend.push(Number(res.s[q].thh))
        // }
    })
}

const renderWidget = async () => {
    // ====== 创建组件 ======
    let widget = new ListWidget();
    widget.backgroundColor = new Color("#1A1A1A"); // 背景色

    // 顶层垂直 Stack
    let mainStack = widget.addStack();
    mainStack.layoutVertically();

    // ====== 顶部一行 ======
    let headerStack = mainStack.addStack();
    headerStack.layoutHorizontally();
    headerStack.centerAlignContent();
    headerStack.addSpacer(0); // 左贴边

    for (let i = 0; i < headerData.length; i++) {
        let item = headerData[i];

        let hStack = headerStack.addStack();
        hStack.layoutHorizontally();
        hStack.centerAlignContent();
        hStack.spacing = 4; // 值和标题间距

        let titleText = hStack.addText(item.title);
        titleText.textColor = Color.gray();
        titleText.font = Font.systemFont(12);

        let valueText = hStack.addText(item.value.toString());
        valueText.textColor = Color.white();
        valueText.font = Font.boldSystemFont(16);

        if (i < headerData.length - 1) {
            headerStack.addSpacer(); // 三项均匀分布
        }
    }

    headerStack.addSpacer(0); // 右贴边

    // ====== 顶部和列表之间的单独间距 ======
    mainStack.addSpacer(12); // 可单独调节顶部和列表间距

    // ====== 列表容器（独立 vertical stack） ======
    let listStack = mainStack.addStack();
    listStack.layoutVertically();
    listStack.spacing = 12; // 列表行之间间距，可独立调节

    // ====== 列表内容 ======
    for (let coin of coinsData) {
        let rowStack = listStack.addStack();
        rowStack.layoutHorizontally();
        rowStack.centerAlignContent();

        rowStack.backgroundColor = new Color("#2c2c2e", 0.6);
        rowStack.cornerRadius = 12;
        rowStack.setPadding(10, 12, 10, 12);

        // 1. 图标
        let iconImage = await loadImage(coin.icon, coin.name);
        let iconView = rowStack.addImage(iconImage);
        iconView.imageSize = new Size(24, 24);
        
        rowStack.addSpacer(10); // 固定间距

        // 2. 币种信息 (固定宽度)
        let nameStack = rowStack.addStack();
        nameStack.layoutVertically();
        nameStack.size = new Size(60, 0); 
        let nameText = nameStack.addText(coin.name);
        nameText.font = Font.boldSystemFont(14);
        nameText.textColor = Color.white();
        let deviceText = nameStack.addText(\`设备: \${coin.devices}\`);
        deviceText.font = Font.systemFont(10);
        deviceText.textColor = Color.gray();

        // 3. 【关键修改】唯一的弹性 Spacer，把后面的所有内容都推向右边
        rowStack.addSpacer(); 

        // --- 右侧数据区 (包含图表和算力) ---

        // 4. 折线图
        let chartImg = drawChart(coin.trend, chartWidth, chartHeight, new Color("#32D74B", 0.8));
        let chartView = rowStack.addImage(chartImg);
        chartView.imageSize = new Size(chartWidth, chartHeight);

        // 5. 【关键修改】图表和算力之间的间距，改为固定间距 (例如 10)
        rowStack.addSpacer(0); 

        // 6. 【关键修改】算力文字容器
        let hashStack = rowStack.addStack();
        // 既然图表已经在右边了，这个 Stack 的宽度可以根据需要设置，或者不设
        // 为了防止算力过长挤压图表，建议保留固定宽度，但不设置内部 spacer 靠右
        hashStack.size = new Size(70, 0); 
        hashStack.layoutHorizontally();
        hashStack.addSpacer();
        
        let hashText = hashStack.addText(coin.hashrate);
        hashText.font = Font.systemFont(14);
        hashText.textColor = Color.green();
        hashText.lineLimit = 1;
        // 使用普通的右对齐即可，因为 Stack 已经是紧贴右侧了
        hashText.rightAlignText(); 
    }

    // ====== 底部 Spacer 保证内容贴顶部 ======
    mainStack.addSpacer();

    return widget;
}


// ====== 显示组件 ======
await Promise.all([await getCoinBase(), await getCategoryList()]);

await getCoinList()
await getCoinHash()
await getReviewLength()
let widget = await renderWidget();

widget.refreshAfterDate = new Date(Date.now() + 15 * 60 * 1000);

Script.setWidget(widget);
Script.complete();
`,Mt={class:`download-hero`,"aria-labelledby":`download-title`},Nt={class:`download-hero-copy`},Pt={id:`download-title`},Ft={class:`hero-description`},It={key:0,class:`hero-actions`},Lt={key:1,class:`latest-version-badge latest-version-badge-app rustminerapp-status-badge`},Rt={key:3,class:`latest-version-badge latest-version-badge-widget`},zt=[`aria-label`],Bt={class:`cli-visual-frame`},Vt=[`alt`],Ht={class:`cli-visual-summary`},Ut={class:`widget-visual-stage`},Wt={class:`widget-phone-frame`},Gt=[`alt`],Kt={class:`widget-visual-summary`},qt={class:`rustminerapp-visual-stage`},Jt=[`src`,`alt`,`loading`,`fetchpriority`],Yt={class:`rustminerapp-visual-summary`},Xt={class:`poolnode-visual-stage`},Zt={class:`poolnode-phone poolnode-phone-primary`},Qt=[`src`,`alt`],$t={class:`poolnode-phone poolnode-phone-secondary`},en=[`src`,`alt`],tn={class:`poolnode-visual-summary`},nn={class:`rms-local-stack`},rn={class:`visual-kicker`},an={class:`rms-miner-grid`},on={class:`system-node rms-system-node`},sn={class:`rms-capabilities`},cn={class:`rms-tunnel`},ln={class:`target-node rms-target-node`},un={class:`server-ingress-stack`},dn={class:`visual-kicker`},fn={class:`server-ingress-grid`},pn={class:`miner-node server-ingress-node`},mn={class:`miner-node server-ingress-node`},hn={class:`miner-node server-ingress-node`},gn={class:`system-node server-system-node`},_n={class:`server-capabilities`},vn={class:`server-route-label`},yn={class:`server-target-grid`},bn={class:`target-node server-target-node`},xn={class:`target-node server-target-node`},Sn={key:0,class:`rustminerapp-download-section`,"aria-labelledby":`rustminerapp-download-title`},Cn={class:`rustminerapp-section-copy`},wn={id:`rustminerapp-download-title`},Tn={class:`rustminerapp-platform-grid`},En={class:`rustminerapp-platform-icon`},Dn={class:`rustminerapp-platform-state`},On={class:`rustminerapp-feature-grid`},kn={class:`rustminerapp-feature-icon`},An={key:1,class:`poolnode-download-section`,"aria-labelledby":`poolnode-download-title`},jn={class:`poolnode-section-copy`},Mn={id:`poolnode-download-title`},Nn={class:`poolnode-download-grid`},Pn={class:`poolnode-platform-heading`},Fn={class:`poolnode-platform-icon`},In={class:`poolnode-qr-wrap`},Ln=[`src`,`alt`],Rn={class:`poolnode-platform-note`},zn=[`href`],Bn={class:`poolnode-feature-grid`},Vn={class:`poolnode-feature-icon`},Hn={key:2,class:`cli-download-section`,"aria-labelledby":`cli-download-title`},Un={class:`cli-section-copy`},Wn={id:`cli-download-title`},Gn={class:`cli-install-layout`},Kn={class:`cli-status-panel cli-install-panel`},qn={class:`cli-status-heading`},Jn={class:`install-command cli-install-command`},Yn={class:`install-command-heading`},Xn={class:`cli-command-note`},Zn={class:`cli-status-panel cli-options-panel`},Qn={class:`cli-status-heading`},$n={class:`cli-option-list`},er={class:`cli-status-panel`},tr={class:`cli-status-heading`},nr=[`aria-label`],rr={class:`cli-feature-grid`},ir={class:`cli-feature-icon`},ar={key:3,class:`widget-download-section`,"aria-labelledby":`widget-download-title`},or={class:`widget-section-copy`},sr={id:`widget-download-title`},cr={class:`widget-download-layout`},lr={class:`widget-status-heading`},ur={class:`widget-token-field`},dr=[`placeholder`],fr={class:`widget-token-hint`},pr={key:0,class:`widget-token-message widget-token-error`,role:`alert`},mr={key:1,class:`widget-token-message widget-token-success`,"aria-live":`polite`},hr=[`disabled`],gr={class:`widget-security-panel`},_r={class:`widget-status-heading`},vr={class:`widget-security-list`},yr={class:`widget-feature-block`},br={class:`widget-section-copy`},xr={class:`widget-feature-grid`},Sr={class:`widget-feature-icon`},Cr={class:`widget-steps-block`},wr={class:`widget-section-copy`},Tr={class:`widget-steps-grid`},Er={class:`widget-step-index`},Dr={class:`finder-header`},Or={id:`download-finder-title`},kr=[`href`],Ar={class:`filter-grid`},jr={class:`filter-field filter-field-os`},Mr={class:`filter-field filter-field-arch`},Nr={key:0,class:`filter-field filter-field-version`},Pr={class:`method-hint`},Fr={key:0,class:`install-panel`,"aria-labelledby":`linux-install-title`},Ir={class:`install-header`},Lr={id:`linux-install-title`},Rr={class:`install-command-list`},zr={class:`install-command-heading`},Br=[`onClick`],Vr={class:`binary-panel`,"aria-labelledby":`binary-download-title`},Hr={class:`binary-header`},Ur={class:`binary-header-copy`},Wr={id:`binary-download-title`},Gr={key:0,class:`release-state`,"aria-live":`polite`},Kr={key:0},qr={key:1},Jr={key:2},Yr={key:1,class:`release-list`},Xr={class:`release-copy`},Zr=[`href`],Qr={key:5,class:`download-partners`,"aria-labelledby":`download-partners-title`},$r={class:`partners-copy`},ei={id:`download-partners-title`},ti=[`aria-label`],ni=[`href`],ri={class:`partner-logo-frame`},ii=[`src`,`alt`],ai={class:`partner-name`},oi=`https://github.com/EvilGenius-dot/RustMinerSystem/raw/refs/heads/main/APP/PoolNode/Android/PoolNode.apk`,si=`https://apps.apple.com/hk/app/poolnode/id6754824577`,ci=`EvilGenius-dot`,li=`main`,ui=`https://raw.githubusercontent.com/EvilGenius-dot/RustMinerSystem/main/origin.json`,di=j({__name:`DownloadView`,setup(e){let n=he(),{t:o}=ee(),c=S(()=>pe(n)),l=S(()=>n.meta?.downloadPage||Ce),f=S(()=>ue(l.value,c.value)),m=S(()=>l.value===`server`),C=S(()=>l.value===`rms`),w=S(()=>l.value===`mobile`),E=S(()=>l.value===`pool-node`),D=S(()=>l.value===`cli`),O=S(()=>l.value===`custom-ios-widget`),j=S(()=>w.value||E.value),M=S(()=>m.value||C.value),se=S(()=>M.value||w.value||E.value||D.value||O.value),ce=S(()=>m.value||C.value||j.value||D.value||O.value),le=S(()=>M.value||j.value||D.value||O.value),F=S(()=>M.value||E.value),fe=S(()=>C.value?`download.rms`:w.value?`download.rustMinerApp`:E.value?`download.poolNode`:D.value?`download.cli`:O.value?`download.customIosWidget`:`download.server`),I=(e,t)=>o(`${fe.value}.${e}`,t),me=S(()=>de(`installation`,c.value)),L=S(()=>de(`overview`,c.value,`rustminersystem-cli`)),ge=S(()=>[I(`visual.miners`),I(`visual.fieldProxy`),I(`visual.remoteNode`)]),_e=S(()=>[I(`visual.access`),I(`visual.allocation`),I(`visual.proxy`)]),ve=S(()=>[I(`visual.compression`),I(`visual.encryption`),I(`visual.connectionPool`)]),R=[{key:`vultr`,logo:`/image/partners/vultr.svg`,href:`https://www.vultr.com/`},{key:`aws`,logo:`/image/partners/aws.svg`,href:`https://aws.amazon.com/`},{key:`azure`,logo:`/image/partners/azure.svg`,href:`https://azure.microsoft.com/`},{key:`aliyun`,logo:`/image/partners/aliyun.svg`,href:`https://www.alibabacloud.com/`},{key:`cloudflare`,logo:`/image/partners/cloudflare.svg`,href:`https://www.cloudflare.com/`},{key:`github`,logo:`/image/partners/github.svg`,href:`https://github.com/EvilGenius-dot`}],ye=S(()=>[{src:`/image/rustminerapp1.png`,alt:I(`screens.dashboardAlt`),label:I(`screens.dashboard`)},{src:`/image/rustminerapp2.png`,alt:I(`screens.serversAlt`),label:I(`screens.servers`)},{src:`/image/rustminerapp3.png`,alt:I(`screens.systemAlt`),label:I(`screens.system`)},{src:`/image/rustminerapp4.png`,alt:I(`screens.workerAlt`),label:I(`screens.worker`)},{src:`/image/rustminerapp5.png`,alt:I(`screens.deviceAlt`),label:I(`screens.device`)}]),be=S(()=>[ye.value[0],ye.value[3],ye.value[4]].filter(Boolean).map((e,t)=>({...e,slot:[`primary`,`secondary`,`tertiary`][t]}))),xe=S(()=>[{id:`ios`,title:I(`platforms.ios.title`),status:I(`platforms.ios.status`),note:I(`platforms.ios.note`)},{id:`android`,title:I(`platforms.android.title`),status:I(`platforms.android.status`),note:I(`platforms.android.note`)}]),Se=S(()=>[{icon:vt,title:I(`features.proxy.title`),text:I(`features.proxy.text`)},{icon:mt,title:I(`features.worker.title`),text:I(`features.worker.text`)},{icon:$,title:I(`features.system.title`),text:I(`features.system.text`)}]),we=S(()=>[{src:`/image/poolnode/overview.jpg`,alt:I(`screens.overviewAlt`),label:I(`screens.overview`)},{src:`/image/poolnode/hashrate.jpg`,alt:I(`screens.hashrateAlt`),label:I(`screens.hashrate`)},{src:`/image/poolnode/workers.jpg`,alt:I(`screens.workersAlt`),label:I(`screens.workers`)},{src:`/image/poolnode/assets.jpg`,alt:I(`screens.assetsAlt`),label:I(`screens.assets`)}]),Te=S(()=>[{icon:vt,title:I(`features.node.title`),text:I(`features.node.text`)},{icon:mt,title:I(`features.worker.title`),text:I(`features.worker.text`)},{icon:$,title:I(`features.asset.title`),text:I(`features.asset.text`)}]),Ee=S(()=>[I(`command.line1`),I(`command.line2`),I(`command.line3`),I(`command.line4`)]),z=S(()=>({id:`cli-install-main-script`,label:I(`install.commandLabel`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)`})),B=S(()=>[{key:I(`script.options.install.key`),text:I(`script.options.install.text`)},{key:I(`script.options.uninstall.key`),text:I(`script.options.uninstall.text`)},{key:I(`script.options.web.key`),text:I(`script.options.web.text`)},{key:I(`script.options.status.key`),text:I(`script.options.status.text`)}]),De=S(()=>[{icon:ae,title:I(`features.terminal.title`),text:I(`features.terminal.text`)},{icon:$,title:I(`features.security.title`),text:I(`features.security.text`)},{icon:yt,title:I(`features.operations.title`),text:I(`features.operations.text`)}]),Oe=T(``),V=T(``),H=T(``),ke=T(!1),U=S(()=>[I(`privacy.items.local`),I(`privacy.items.rotate`),I(`privacy.items.network`)]),Ae=[`scriptable`,`token`,`download`,`import`,`widget`],je=S(()=>Ae.map((e,t)=>({key:e,number:`${t+1}`.padStart(2,`0`),title:I(`steps.items.${e}.title`),text:I(`steps.items.${e}.text`)}))),Me=S(()=>[{icon:yt,title:I(`features.items.overview.title`),text:I(`features.items.overview.text`)},{icon:mt,title:I(`features.items.coins.title`),text:I(`features.items.coins.text`)},{icon:$,title:I(`features.items.refresh.title`),text:I(`features.items.refresh.text`)}]),Ne=S(()=>C.value?`RMS`:`RustMinerSystem`),Pe=S(()=>`https://api.github.com/repos/${ci}/${Ne.value}/contents`),Fe=S(()=>`https://github.com/${ci}/${Ne.value}`),Ie=[`windows`,`linux`],Le={x86:`x86_64-musl`,aarch64:`aarch64-musl`,arm:`arm-musleabi`,armhf:`arm-musleabihf`,armv7:`armv7-musleabi`,armv7hf:`armv7-musleabihf`,"windows-gui":`windows-gui`,"windows-cli":`windows-no-gui`},Re=[`x86`,`aarch64`,`arm`,`armhf`,`armv7`,`armv7hf`],ze=S(()=>C.value?Object.values(Le):Ie),Be=new Set([`md`,`txt`,`json`,`yml`,`yaml`,`sh`,`ps1`]),W=T(`linux`),G=T(`x86`),K=T(``),Ve=T([]),q=T(``),J=T(!1),Y=T(``),X=T({rustminer:`4.6.7`,rms:`3.1.10`,poolNodeAndroid:`1.0.1`,poolNodeIos:`1.0.1`}),He=T(!1),Ue=T(!1),We=e=>e?/^v/i.test(e)?e:`v${e}`:``,Z=S(()=>C.value?X.value.rms:X.value.rustminer),Q=S(()=>We(Z.value)),Ge=S(()=>Q.value?o(`download.latestVersion`,{version:Q.value}):Ue.value?o(`download.latestVersionLoading`):o(`download.latestVersionError`)),Ke=S(()=>{let e=We(X.value.poolNodeAndroid),t=We(X.value.poolNodeIos);return!e&&!t?``:o(`download.poolNode.latestRelease`,{android:e||o(`download.latestVersionPending`),ios:t||o(`download.latestVersionPending`)})}),qe=S(()=>Ke.value?Ke.value:Ue.value?o(`download.latestVersionLoading`):o(`download.latestVersionError`)),Je=S(()=>[{id:`android`,title:I(`platforms.android.title`),versionLabel:o(`download.latestVersion`,{version:We(X.value.poolNodeAndroid)||o(`download.latestVersionPending`)}),note:I(`platforms.android.note`),buttonLabel:I(`platforms.android.button`),href:oi,qr:`/image/poolnode/android-qr.png`,qrAlt:I(`platforms.android.qrAlt`)},{id:`ios`,title:I(`platforms.ios.title`),versionLabel:o(`download.latestVersion`,{version:We(X.value.poolNodeIos)||o(`download.latestVersionPending`)}),note:I(`platforms.ios.note`),buttonLabel:I(`platforms.ios.button`),href:si,qr:`/image/poolnode/ios-qr.png`,qrAlt:I(`platforms.ios.qrAlt`)}]),Ye=S(()=>[{value:`linux`,label:I(`os.linux`)},{value:`windows`,label:I(`os.windows`)}]),Xe=S(()=>C.value?{linux:Re.map(e=>({value:e,label:I(`arch.${e}`)})),windows:[{value:`windows-gui`,label:I(`arch.windowsGui`)},{value:`windows-cli`,label:I(`arch.windowsCli`)}]}:{linux:[{value:`x86`,label:I(`arch.x86`)},{value:`arm`,label:I(`arch.arm`)},{value:`armv7`,label:I(`arch.armv7`)}],windows:[{value:`x86`,label:I(`arch.x86`)}]}),Ze=S(()=>Xe.value[W.value]||Xe.value.linux),Qe=S(()=>Ye.value.find(e=>e.value===W.value)?.label||W.value),$e=S(()=>Ze.value.find(e=>e.value===G.value)?.label||G.value),et=S(()=>Ve.value.filter(e=>e.os===W.value&&e.arch===G.value)),tt=S(()=>[...new Set(et.value.map(e=>e.version))].filter(Boolean).sort(_i).reverse()),nt=S(()=>C.value?Q.value||o(`download.latestVersionPending`):K.value||I(`versionPending`)),rt=S(()=>C.value?et.value:et.value.filter(e=>e.version===K.value)),it=S(()=>({x86:[{id:`server-linux-x86-primary`,label:I(`install.line1`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)`},{id:`server-linux-x86-mirror`,label:I(`install.line2`),command:`bash <(curl -s -L -k https://rustminersystem.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)`}],arm:[{id:`server-linux-arm`,label:I(`install.arm`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/arm-install.sh)`}],armv7:[{id:`server-linux-armv7`,label:I(`install.armv7`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/armv7-install.sh)`}]})),at=S(()=>({linux:[{id:`rms-linux-primary`,label:I(`install.line1`),command:`bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)`},{id:`rms-linux-mirror`,label:I(`install.line2`),command:`bash <(curl -s -L -k https://rustminersystem.com/install.sh)`}]})),ot=S(()=>C.value?at.value[W.value]||[]:!m.value||W.value!==`linux`?[]:it.value[G.value]||[]),st=S(()=>ot.value.length?`methodHint.linux`:`methodHint.standalone`),ct=S(()=>{let e=C.value?Le[G.value]||`x86_64-musl`:Ie.includes(W.value)?W.value:`linux`;return{label:I(`openDirectory`,{directory:C.value?$e.value:Qe.value}),href:`${Fe.value}/tree/${li}/${e}`}}),lt=(e,t)=>{let n=`${e.path}/${e.name}`.toLowerCase();return/(^|[/._-])armv?7l?($|[/._-])/.test(n)||/(^|[/._-])(arm32|armhf)($|[/._-])/.test(n)?`armv7`:/(^|[/._-])(aarch64|arm64|arm)($|[/._-])/.test(n)?`arm`:(/(^|[/._-])(x86_64|amd64|x64|x86|i386|i686)($|[/._-])/.test(n),`x86`)},ut=e=>{if(C.value)return I(`version.rms3`);let t=e.match(/(?:^|[-_.v/])(\d+(?:[-_.]\d+){1,3})(?:\D|$)/i);return t?`v${t[1].replace(/[-_]/g,`.`)}`:I(`unknownVersion`)},ft=e=>{let t=e.toLowerCase().split(`.`);return t.length>1?t.at(-1):``},pt=e=>{if(e.type!==`file`)return!1;let t=ft(e.name);return!Be.has(t)},Tt=e=>{if(C.value)return Dt(e);let t=e.path.startsWith(`windows/`)?`windows`:`linux`,n=e.download_url||`https://raw.githubusercontent.com/${ci}/${Ne.value}/${li}/${e.path}`;return{arch:lt(e,t),downloadUrl:n,htmlUrl:e.html_url,name:e.name,os:t,path:e.path,size:e.size||0,version:ut(`${e.path}/${e.name}`)}},Dt=e=>{let t=e.path.split(`/`)[0],n=Object.entries(Le).find(([,e])=>e===t)?.[0]||`x86`,r=t.startsWith(`windows`)?`windows`:`linux`;return{arch:n,downloadUrl:e.download_url||`https://raw.githubusercontent.com/${ci}/${Ne.value}/${li}/${e.path}`,htmlUrl:e.html_url,name:e.name,os:r,path:e.path,size:e.size||0,version:I(`version.rms3`)}},Ot=e=>C.value&&Q.value||e.version,di=async()=>{if(!(!F.value||Ue.value)){Ue.value=!0,He.value=!1;try{let e=await fetch(ui,{cache:`no-store`,headers:{Accept:`application/json`}});if(!e.ok)throw Error(`Unable to read origin.json`);let t=await e.json();X.value={rustminer:typeof t.version==`string`?t.version:X.value.rustminer,rms:typeof t.RMS==`string`?t.RMS:typeof t.rms==`string`?t.rms:X.value.rms,poolNodeAndroid:typeof t.PoolNodeAndroidVersion==`string`?t.PoolNodeAndroidVersion:X.value.poolNodeAndroid,poolNodeIos:typeof t.PoolNodeIosVersion==`string`?t.PoolNodeIosVersion:X.value.poolNodeIos}}catch{He.value=!0}finally{Ue.value=!1}}},fi=async e=>{let t=new AbortController,n=window.setTimeout(()=>t.abort(),8e3);try{let n=await fetch(`${Pe.value}/${e}?ref=${li}`,{cache:`no-store`,headers:{Accept:`application/vnd.github+json`},signal:t.signal});if(!n.ok)throw Error(I(`fetchError`));let r=await n.json();if(!Array.isArray(r))return[];let i=r.filter(e=>e.type===`dir`),a=r.filter(pt),o=await Promise.all(i.map(e=>fi(e.path)));return[...a,...o.flat()]}catch(e){throw e instanceof DOMException&&e.name===`AbortError`?Error(I(`fetchError`)):e}finally{window.clearTimeout(n)}},pi=async()=>{if(M.value){J.value=!0,q.value=``;try{let e=(await Promise.allSettled(ze.value.map(e=>fi(e)))).flatMap(e=>e.status===`fulfilled`?e.value:[]);if(!e.length)throw Error(I(`fetchError`));Ve.value=e.map(Tt).sort((e,t)=>t.size-e.size)}catch(e){Ve.value=[],q.value=e instanceof Error?e.message:I(`fetchError`)}finally{J.value=!1}}},mi=async e=>{try{await window.navigator.clipboard.writeText(e.command),Y.value=e.id,window.setTimeout(()=>{Y.value===e.id&&(Y.value=``)},1800)}catch{Y.value=``}},hi=e=>jt.replace(/const CTL_TOKEN\s*=\s*["'][^"']*["'];/,`const CTL_TOKEN = ${JSON.stringify(e)};`),gi=()=>{let e=Oe.value.trim();if(V.value=``,H.value=``,!e){V.value=I(`token.errorRequired`);return}if(/\s/.test(e)){V.value=I(`token.errorWhitespace`);return}ke.value=!0;try{let t=hi(e),n=new Blob([t],{type:`text/javascript;charset=utf-8`}),r=window.URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=I(`token.fileName`),document.body.append(i),i.click(),i.remove(),window.URL.revokeObjectURL(r),H.value=I(`token.success`)}finally{ke.value=!1}};function _i(e,t){let n=e.match(/\d+/g)?.map(Number)||[0],r=t.match(/\d+/g)?.map(Number)||[0],i=Math.max(n.length,r.length);for(let e=0;e<i;e+=1){let t=(n[e]||0)-(r[e]||0);if(t)return t}return e.localeCompare(t)}i(W,()=>{let e=Ze.value.map(e=>e.value);e.includes(G.value)||(G.value=e[0]||`x86`)}),i(tt,e=>{e.includes(K.value)||(K.value=e[0]||``)},{immediate:!0});let vi=()=>typeof window<`u`&&window.navigator.userAgent.toLowerCase().includes(`windows`)?`windows`:`linux`;return i(l,()=>{Ve.value=[],q.value=``,Y.value=``,V.value=``,H.value=``,K.value=``,W.value=vi(),G.value=Ze.value.map(e=>e.value)[0]||`x86`,F.value&&di(),M.value&&pi()}),r(()=>{W.value=vi(),di(),pi()}),(e,n)=>{let r=a(`RouterLink`);return u(),v(`main`,{id:`main-content`,class:k([`download-page`,{"download-page-app":j.value,"download-page-rustminerapp":w.value,"download-page-cli":D.value,"download-page-widget":O.value}])},[g(`div`,{class:k([`download-shell`,{"download-shell-app":j.value}])},[g(`article`,Mt,[g(`div`,Nt,[g(`h1`,Pt,_(f.value.heading||f.value.title),1),g(`p`,Ft,_(f.value.description),1),le.value?(u(),v(`div`,It,[!w.value&&!D.value&&!O.value?(u(),N(r,{key:0,to:me.value,class:`guide-link`},{default:s(()=>[d(x(dt),{"aria-hidden":`true`}),g(`span`,null,_(x(o)(`download.installGuideLink`)),1)]),_:1},8,[`to`])):P(``,!0),w.value?(u(),v(`span`,Lt,[d(x(_t),{"aria-hidden":`true`}),g(`span`,null,_(I(`comingSoonBadge`)),1)])):P(``,!0),D.value?(u(),N(r,{key:2,to:L.value,class:`latest-version-badge latest-version-badge-cli cli-doc-link`},{default:s(()=>[d(x(dt),{"aria-hidden":`true`}),g(`span`,null,_(I(`docLink`)),1)]),_:1},8,[`to`])):P(``,!0),O.value?(u(),v(`span`,Rt,[d(x(_t),{"aria-hidden":`true`}),g(`span`,null,_(I(`statusBadge`)),1)])):P(``,!0),M.value?(u(),v(`span`,{key:4,class:k([`latest-version-badge`,{"latest-version-badge-error":He.value&&!Q.value}])},[d(x(ne),{"aria-hidden":`true`}),g(`span`,null,_(Ge.value),1)],2)):P(``,!0),E.value?(u(),v(`span`,{key:5,class:k([`latest-version-badge latest-version-badge-app`,{"latest-version-badge-error":He.value&&!Ke.value}])},[d(x(ne),{"aria-hidden":`true`}),g(`span`,null,_(qe.value),1)],2)):P(``,!0)])):P(``,!0)]),ce.value?(u(),v(`div`,{key:0,class:k([`download-hero-visual`,{"download-hero-visual-rms":C.value,"download-hero-visual-server":m.value,"download-hero-visual-app":j.value,"download-hero-visual-rustminerapp":w.value,"download-hero-visual-cli":D.value,"download-hero-visual-widget":O.value}]),role:`img`,"aria-label":I(`visual.label`)},[D.value?(u(),v(A,{key:0},[g(`figure`,Bt,[g(`img`,{src:xt,alt:I(`visual.alt`),decoding:`async`,fetchpriority:`high`},null,8,Vt)]),g(`div`,Ht,[g(`span`,null,_(I(`visual.badge`)),1),g(`strong`,null,_(I(`visual.title`)),1),g(`p`,null,_(I(`visual.description`)),1)])],64)):O.value?(u(),v(A,{key:1},[g(`div`,Ut,[g(`figure`,Wt,[g(`img`,{src:St,alt:I(`visual.alt`),decoding:`async`,fetchpriority:`high`},null,8,Gt)])]),g(`div`,Kt,[g(`span`,null,_(I(`visual.badge`)),1),g(`strong`,null,_(I(`visual.title`)),1),g(`p`,null,_(I(`visual.description`)),1)])],64)):w.value?(u(),v(A,{key:2},[g(`div`,qt,[(u(!0),v(A,null,t(be.value,e=>(u(),v(`figure`,{key:e.src,class:k([`rustminerapp-phone`,`rustminerapp-phone-${e.slot}`])},[g(`img`,{src:e.src,alt:e.alt,loading:e.slot===`primary`?void 0:`lazy`,fetchpriority:e.slot===`primary`?`high`:void 0,decoding:`async`},null,8,Jt)],2))),128))]),g(`div`,Yt,[g(`span`,null,_(I(`visual.badge`)),1),g(`strong`,null,_(I(`visual.title`)),1),g(`p`,null,_(I(`visual.description`)),1)])],64)):E.value?(u(),v(A,{key:3},[g(`div`,Xt,[g(`figure`,Zt,[g(`img`,{src:we.value[0].src,alt:we.value[0].alt,decoding:`async`,fetchpriority:`high`},null,8,Qt)]),g(`figure`,$t,[g(`img`,{src:we.value[1].src,alt:we.value[1].alt,loading:`lazy`,decoding:`async`},null,8,en)])]),g(`div`,tn,[g(`span`,null,_(I(`visual.badge`)),1),g(`strong`,null,_(I(`visual.title`)),1),g(`p`,null,_(I(`visual.description`)),1)])],64)):C.value?(u(),v(A,{key:4},[g(`div`,nn,[g(`span`,rn,_(I(`visual.localLabel`)),1),g(`div`,an,[(u(!0),v(A,null,t(ge.value,e=>(u(),v(`div`,{key:e,class:`miner-node rms-miner-node`},[d(x(mt),{"aria-hidden":`true`}),g(`span`,null,_(e),1)]))),128))])]),n[5]||=g(`div`,{class:`rms-flow-line`,"aria-hidden":`true`},[g(`span`),g(`span`),g(`span`)],-1),g(`div`,on,[d(x($),{"aria-hidden":`true`}),g(`strong`,null,_(I(`visual.system`)),1),g(`span`,null,_(I(`visual.systemHint`)),1),g(`div`,sn,[(u(!0),v(A,null,t(ve.value,e=>(u(),v(`span`,{key:e},_(e),1))),128))])]),g(`div`,cn,[g(`span`,null,_(I(`visual.tunnelLabel`)),1)]),g(`div`,ln,[d(x(yt),{"aria-hidden":`true`}),g(`span`,null,_(I(`visual.target`)),1)])],64)):(u(),v(A,{key:5},[g(`div`,un,[g(`span`,dn,_(I(`visual.localLabel`)),1),g(`div`,fn,[g(`div`,pn,[d(x(mt),{"aria-hidden":`true`}),g(`span`,null,_(I(`visual.miners`)),1)]),g(`div`,mn,[d(x(vt),{"aria-hidden":`true`}),g(`span`,null,_(I(`visual.fieldProxy`)),1)]),g(`div`,hn,[d(x($),{"aria-hidden":`true`}),g(`span`,null,_(I(`visual.remoteNode`)),1)])])]),n[6]||=g(`div`,{class:`server-flow-line`,"aria-hidden":`true`},[g(`span`),g(`span`),g(`span`)],-1),g(`div`,gn,[d(x(yt),{"aria-hidden":`true`}),g(`strong`,null,_(I(`visual.system`)),1),g(`span`,null,_(I(`visual.systemHint`)),1),g(`div`,_n,[(u(!0),v(A,null,t(_e.value,e=>(u(),v(`span`,{key:e},_(e),1))),128))])]),g(`div`,vn,[g(`span`,null,_(I(`visual.routeLabel`)),1)]),g(`div`,yn,[g(`div`,bn,[d(x(gt),{"aria-hidden":`true`}),g(`span`,null,_(I(`visual.thirdPartyTarget`)),1)]),g(`div`,xn,[d(x(yt),{"aria-hidden":`true`}),g(`span`,null,_(I(`visual.poolNodeTarget`)),1)])])],64))],10,zt)):P(``,!0)]),w.value?(u(),v(`section`,Sn,[g(`div`,Cn,[g(`span`,null,_(I(`downloadKicker`)),1),g(`h2`,wn,_(I(`downloadTitle`)),1),g(`p`,null,_(I(`downloadDescription`)),1)]),g(`div`,Tn,[(u(!0),v(A,null,t(xe.value,e=>(u(),v(`article`,{key:e.id,class:`rustminerapp-platform-card`},[g(`span`,En,[d(x(bt),{"aria-hidden":`true`})]),g(`div`,null,[g(`h3`,null,_(e.title),1),g(`p`,null,_(e.note),1)]),g(`span`,Dn,_(e.status),1)]))),128))]),g(`div`,On,[(u(!0),v(A,null,t(Se.value,e=>(u(),v(`article`,{key:e.title,class:`rustminerapp-feature-card`},[g(`span`,kn,[(u(),N(p(e.icon),{"aria-hidden":`true`}))]),g(`div`,null,[g(`h3`,null,_(e.title),1),g(`p`,null,_(e.text),1)])]))),128))])])):P(``,!0),E.value?(u(),v(`section`,An,[g(`div`,jn,[g(`span`,null,_(I(`downloadKicker`)),1),g(`h2`,Mn,_(I(`downloadTitle`)),1),g(`p`,null,_(I(`downloadDescription`)),1)]),g(`div`,Nn,[(u(!0),v(A,null,t(Je.value,e=>(u(),v(`article`,{key:e.id,class:`poolnode-platform-card`},[g(`div`,Pn,[g(`span`,Fn,[d(x(bt),{"aria-hidden":`true`})]),g(`div`,null,[g(`h3`,null,_(e.title),1),g(`p`,null,_(e.versionLabel),1)])]),g(`div`,In,[g(`img`,{src:e.qr,alt:e.qrAlt,loading:`lazy`,decoding:`async`},null,8,Ln)]),g(`p`,Rn,_(e.note),1),g(`a`,{href:e.href,class:`poolnode-store-link`,target:`_blank`,rel:`noopener noreferrer`},[d(x(re),{"aria-hidden":`true`}),g(`span`,null,_(e.buttonLabel),1)],8,zn)]))),128))]),g(`div`,Bn,[(u(!0),v(A,null,t(Te.value,e=>(u(),v(`article`,{key:e.title,class:`poolnode-feature-card`},[g(`span`,Vn,[(u(),N(p(e.icon),{"aria-hidden":`true`}))]),g(`div`,null,[g(`h3`,null,_(e.title),1),g(`p`,null,_(e.text),1)])]))),128))])])):P(``,!0),D.value?(u(),v(`section`,Hn,[g(`div`,Un,[g(`span`,null,_(I(`downloadKicker`)),1),g(`h2`,Wn,_(I(`downloadTitle`)),1),g(`p`,null,_(I(`downloadDescription`)),1)]),g(`div`,Gn,[g(`div`,Kn,[g(`div`,qn,[d(x(ae),{"aria-hidden":`true`}),g(`div`,null,[g(`h3`,null,_(I(`status.title`)),1),g(`p`,null,_(I(`status.description`)),1)])]),g(`article`,Jn,[g(`div`,Yn,[g(`span`,null,_(z.value.label),1),g(`button`,{type:`button`,class:`copy-button`,onClick:n[0]||=e=>mi(z.value)},[Y.value===z.value.id?(u(),N(x(oe),{key:0,"aria-hidden":`true`})):(u(),N(x(ie),{key:1,"aria-hidden":`true`})),g(`span`,null,_(Y.value===z.value.id?I(`install.copied`):I(`install.copy`)),1)])]),g(`pre`,null,[g(`code`,null,_(z.value.command),1)])]),g(`p`,Xn,_(I(`install.note`)),1)]),g(`div`,Zn,[g(`div`,Qn,[d(x(yt),{"aria-hidden":`true`}),g(`div`,null,[g(`h3`,null,_(I(`script.title`)),1),g(`p`,null,_(I(`script.description`)),1)])]),g(`ul`,$n,[(u(!0),v(A,null,t(B.value,e=>(u(),v(`li`,{key:e.key},[g(`strong`,null,_(e.key),1),g(`span`,null,_(e.text),1)]))),128))])])]),g(`div`,er,[g(`div`,tr,[d(x(ae),{"aria-hidden":`true`}),g(`div`,null,[g(`h3`,null,_(I(`command.title`)),1),g(`p`,null,_(I(`command.description`)),1)])]),g(`div`,{class:`cli-command-preview`,"aria-label":I(`command.ariaLabel`)},[(u(!0),v(A,null,t(Ee.value,e=>(u(),v(`span`,{key:e},_(e),1))),128))],8,nr)]),g(`div`,rr,[(u(!0),v(A,null,t(De.value,e=>(u(),v(`article`,{key:e.title,class:`cli-feature-card`},[g(`span`,ir,[(u(),N(p(e.icon),{"aria-hidden":`true`}))]),g(`div`,null,[g(`h3`,null,_(e.title),1),g(`p`,null,_(e.text),1)])]))),128))])])):P(``,!0),O.value?(u(),v(`section`,ar,[g(`div`,or,[g(`span`,null,_(I(`downloadKicker`)),1),g(`h2`,sr,_(I(`downloadTitle`)),1),g(`p`,null,_(I(`downloadDescription`)),1)]),g(`div`,cr,[g(`form`,{class:`widget-token-panel`,onSubmit:b(gi,[`prevent`])},[g(`div`,lr,[d(x(re),{"aria-hidden":`true`}),g(`div`,null,[g(`h3`,null,_(I(`token.title`)),1),g(`p`,null,_(I(`token.description`)),1)])]),g(`label`,ur,[g(`span`,null,_(I(`token.label`)),1),h(g(`input`,{"onUpdate:modelValue":n[1]||=e=>Oe.value=e,type:`text`,autocomplete:`off`,autocapitalize:`off`,spellcheck:`false`,placeholder:I(`token.placeholder`)},null,8,dr),[[y,Oe.value]])]),g(`p`,fr,_(I(`token.hint`)),1),V.value?(u(),v(`p`,pr,_(V.value),1)):H.value?(u(),v(`p`,mr,_(H.value),1)):P(``,!0),g(`button`,{class:`widget-download-button`,type:`submit`,disabled:ke.value},[d(x(re),{"aria-hidden":`true`}),g(`span`,null,_(ke.value?I(`token.generating`):I(`token.submit`)),1)],8,hr)],32),g(`aside`,gr,[g(`div`,_r,[d(x($),{"aria-hidden":`true`}),g(`div`,null,[g(`h3`,null,_(I(`privacy.title`)),1),g(`p`,null,_(I(`privacy.description`)),1)])]),g(`ul`,vr,[(u(!0),v(A,null,t(U.value,e=>(u(),v(`li`,{key:e},_(e),1))),128))])])]),g(`div`,yr,[g(`div`,br,[g(`span`,null,_(I(`downloadKicker`)),1),g(`h2`,null,_(I(`features.title`)),1),g(`p`,null,_(I(`features.description`)),1)]),g(`div`,xr,[(u(!0),v(A,null,t(Me.value,e=>(u(),v(`article`,{key:e.title,class:`widget-feature-card`},[g(`span`,Sr,[(u(),N(p(e.icon),{"aria-hidden":`true`}))]),g(`div`,null,[g(`h3`,null,_(e.title),1),g(`p`,null,_(e.text),1)])]))),128))])]),g(`div`,Cr,[g(`div`,wr,[g(`span`,null,_(I(`downloadKicker`)),1),g(`h2`,null,_(I(`steps.title`)),1),g(`p`,null,_(I(`steps.description`)),1)]),g(`div`,Tr,[(u(!0),v(A,null,t(je.value,e=>(u(),v(`article`,{key:e.key,class:`widget-step-card`},[g(`span`,Er,_(e.number),1),g(`h3`,null,_(e.title),1),g(`p`,null,_(e.text),1)]))),128))])])])):P(``,!0),M.value?(u(),v(`section`,{key:4,class:k([`download-finder`,{"download-finder-rms":C.value}]),"aria-labelledby":`download-finder-title`},[g(`div`,Dr,[g(`div`,null,[g(`h2`,Or,_(I(`finderTitle`)),1),g(`p`,null,_(I(`selectionSummary`,{os:Qe.value,arch:$e.value,version:nt.value})),1)]),g(`a`,{href:ct.value.href,class:`directory-link finder-directory-link`,target:`_blank`,rel:`noopener noreferrer`},[d(x(ht),{"aria-hidden":`true`}),g(`span`,null,_(ct.value.label),1)],8,kr)]),g(`div`,Ar,[g(`label`,jr,[g(`span`,null,_(I(`osLabel`)),1),d(x(Ct),{modelValue:W.value,"onUpdate:modelValue":n[2]||=e=>W.value=e},{default:s(()=>[d(x(kt),{class:`filter-trigger`},{default:s(()=>[d(x(At))]),_:1}),d(x(wt),{class:`download-select-content`},{default:s(()=>[(u(!0),v(A,null,t(Ye.value,e=>(u(),N(x(Et),{key:e.value,class:`download-select-item`,value:e.value},{default:s(()=>[te(_(e.label),1)]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`modelValue`])]),g(`label`,Mr,[g(`span`,null,_(I(`archLabel`)),1),d(x(Ct),{modelValue:G.value,"onUpdate:modelValue":n[3]||=e=>G.value=e},{default:s(()=>[d(x(kt),{class:`filter-trigger`},{default:s(()=>[d(x(At))]),_:1}),d(x(wt),{class:`download-select-content`},{default:s(()=>[(u(!0),v(A,null,t(Ze.value,e=>(u(),N(x(Et),{key:e.value,class:`download-select-item`,value:e.value},{default:s(()=>[te(_(e.label),1)]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`modelValue`])]),C.value?P(``,!0):(u(),v(`label`,Nr,[g(`span`,null,_(I(`versionLabel`)),1),d(x(Ct),{modelValue:K.value,"onUpdate:modelValue":n[4]||=e=>K.value=e,disabled:!tt.value.length},{default:s(()=>[d(x(kt),{class:`filter-trigger`},{default:s(()=>[d(x(At),{placeholder:I(`versionPending`)},null,8,[`placeholder`])]),_:1}),d(x(wt),{class:`download-select-content`},{default:s(()=>[(u(!0),v(A,null,t(tt.value,e=>(u(),N(x(Et),{key:e,class:`download-select-item`,value:e},{default:s(()=>[te(_(e),1)]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`modelValue`,`disabled`])]))]),g(`div`,Pr,[d(x(_t),{"aria-hidden":`true`}),g(`p`,null,_(I(st.value)),1)]),ot.value.length?(u(),v(`div`,Fr,[g(`div`,Ir,[d(x(ae),{"aria-hidden":`true`}),g(`div`,null,[g(`h3`,Lr,_(I(`install.title`)),1),g(`p`,null,_(I(`install.description`,{arch:$e.value})),1)])]),g(`div`,Rr,[(u(!0),v(A,null,t(ot.value,e=>(u(),v(`article`,{key:e.id,class:`install-command`},[g(`div`,zr,[g(`span`,null,_(e.label),1),g(`button`,{type:`button`,class:`copy-button`,onClick:t=>mi(e)},[Y.value===e.id?(u(),N(x(oe),{key:0,"aria-hidden":`true`})):(u(),N(x(ie),{key:1,"aria-hidden":`true`})),g(`span`,null,_(Y.value===e.id?I(`install.copied`):I(`install.copy`)),1)],8,Br)]),g(`pre`,null,[g(`code`,null,_(e.command),1)])]))),128))])])):P(``,!0),g(`div`,Vr,[g(`div`,Hr,[d(x(re),{"aria-hidden":`true`}),g(`div`,Ur,[g(`h3`,Wr,_(I(`binary.title`)),1),g(`p`,null,_(I(`binary.description`)),1)])]),J.value||q.value||!rt.value.length?(u(),v(`div`,Gr,[J.value?(u(),v(`p`,Kr,_(I(`loading`)),1)):q.value?(u(),v(`p`,qr,_(q.value),1)):rt.value.length?P(``,!0):(u(),v(`p`,Jr,_(I(`empty`)),1))])):P(``,!0),rt.value.length?(u(),v(`div`,Yr,[(u(!0),v(A,null,t(rt.value,e=>(u(),v(`article`,{key:e.path,class:`release-row`},[g(`div`,Xr,[g(`span`,null,_(Ot(e)),1),g(`h3`,null,_(e.name),1),g(`p`,null,_(e.path),1)]),g(`a`,{href:e.downloadUrl,class:`download-link`,target:`_blank`,rel:`noopener noreferrer`},[d(x(re),{"aria-hidden":`true`}),g(`span`,null,_(I(`download`)),1)],8,Zr)]))),128))])):P(``,!0)])],2)):P(``,!0),se.value?(u(),v(`section`,Qr,[g(`div`,$r,[g(`span`,null,_(x(o)(`download.partners.kicker`)),1),g(`h2`,ei,_(x(o)(`download.partners.title`)),1),g(`p`,null,_(x(o)(`download.partners.description`)),1)]),g(`div`,{class:`partner-grid`,"aria-label":x(o)(`download.partners.ariaLabel`)},[(u(),v(A,null,t(R,e=>g(`a`,{key:e.key,href:e.href,class:`partner-card`,target:`_blank`,rel:`noopener noreferrer`},[g(`span`,ri,[g(`img`,{src:e.logo,alt:x(o)(`download.partners.items.${e.key}`),class:`partner-logo`,loading:`lazy`,decoding:`async`},null,8,ii)]),g(`span`,ai,_(x(o)(`download.partners.items.${e.key}`)),1)],8,ni)),64))],8,ti)])):P(``,!0)],2)],2)}}},[[`__scopeId`,`data-v-6f7b64da`]]);export{di as default};