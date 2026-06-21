import{C as e,E as t,H as n,I as r,K as i,L as a,M as o,P as s,S as c,U as l,V as u,W as d,X as f,Y as p,_ as m,_t as h,at as g,b as _,dt as v,f as y,gt as b,h as x,ht as S,j as C,l as w,m as T,pt as E,q as D,r as O,t as k,ut as A,v as j,vt as M,w as N,x as P,y as F,z as I}from"./_plugin-vue_export-helper-DcZtxPd-.js";import{i as ee,n as te,r as ne,t as re}from"./terminal-Q--LTi4a.js";import{t as ie}from"./check-BjdsHoxR.js";import{A as ae,C as oe,D as se,E as ce,L as le,M as ue,O as de,R as fe,S as L,T as pe,W as me,_ as R,a as he,b as ge,c as _e,d as z,f as ve,g as ye,h as be,i as xe,j as Se,k as Ce,l as we,m as Te,n as B,o as V,p as Ee,r as De,s as H,t as U,u as Oe,v as W,w as ke,x as Ae,y as je}from"./app-Bw2TRqwR.js";function Me(e){return typeof e==`string`?`'${e}'`:new Ne().serialize(e)}var Ne=function(){class e{#e=new Map;compare(e,t){let n=typeof e,r=typeof t;return n===`string`&&r===`string`?e.localeCompare(t):n===`number`&&r===`number`?e-t:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(t,!0))}serialize(e,t){if(e===null)return`null`;switch(typeof e){case`string`:return t?e:`'${e}'`;case`bigint`:return`${e}n`;case`object`:return this.$object(e);case`function`:return this.$function(e)}return String(e)}serializeObject(e){let t=Object.prototype.toString.call(e);if(t!==`[object Object]`)return this.serializeBuiltInType(t.length<10?`unknown:${t}`:t.slice(8,-1),e);let n=e.constructor,r=n===Object||n===void 0?``:n.name;if(r!==``&&globalThis[r]===n)return this.serializeBuiltInType(r,e);if(typeof e.toJSON==`function`){let t=e.toJSON();return r+(typeof t==`object`&&t?this.$object(t):`(${this.serialize(t)})`)}return this.serializeObjectEntries(r,Object.entries(e))}serializeBuiltInType(e,t){let n=this[`$`+e];if(n)return n.call(this,t);if(typeof t?.entries==`function`)return this.serializeObjectEntries(e,t.entries());throw Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,t){let n=Array.from(t).sort((e,t)=>this.compare(e[0],t[0])),r=`${e}{`;for(let e=0;e<n.length;e++){let[t,i]=n[e];r+=`${this.serialize(t,!0)}:${this.serialize(i)}`,e<n.length-1&&(r+=`,`)}return r+`}`}$object(e){let t=this.#e.get(e);return t===void 0&&(this.#e.set(e,`#${this.#e.size}`),t=this.serializeObject(e),this.#e.set(e,t)),t}$function(e){let t=Function.prototype.toString.call(e);return t.slice(-15)===`[native code] }`?`${e.name||``}()[native]`:`${e.name}(${e.length})${t.replace(/\s*\n\s*/g,``)}`}$Array(e){let t=`[`;for(let n=0;n<e.length;n++)t+=this.serialize(e[n]),n<e.length-1&&(t+=`,`);return t+`]`}$Date(e){try{return`Date(${e.toISOString()})`}catch{return`Date(null)`}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(`,`)}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((e,t)=>this.compare(e,t)))}`}$Map(e){return this.serializeObjectEntries(`Map`,e.entries())}}for(let t of[`Error`,`RegExp`,`URL`])e.prototype[`$`+t]=function(e){return`${t}(${e})`};for(let t of[`Int8Array`,`Uint8Array`,`Uint8ClampedArray`,`Int16Array`,`Uint16Array`,`Int32Array`,`Uint32Array`,`Float32Array`,`Float64Array`])e.prototype[`$`+t]=function(e){return`${t}[${e.join(`,`)}]`};for(let t of[`BigInt64Array`,`BigUint64Array`])e.prototype[`$`+t]=function(e){return`${t}[${e.join(`n,`)}${e.length>0?`n`:``}]`};return e}();function Pe(e,t){return e===t||Me(e)===Me(t)}function Fe(e,t=-1/0,n=1/0){return Math.min(n,Math.max(t,e))}function Ie(e){return m(()=>v(e)?!!oe(e)?.closest(`form`):!0)}var Le=N({__name:`VisuallyHidden`,props:{feature:{type:String,required:!1,default:`focusable`},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){return(e,t)=>(I(),F(E(z),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature===`focusable`?`true`:void 0,"data-hidden":e.feature===`fully-hidden`?``:void 0,tabindex:e.feature===`fully-hidden`?`-1`:void 0,style:{position:`absolute`,border:0,width:`1px`,height:`1px`,padding:0,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`,wordWrap:`normal`,top:`-1px`,left:`-1px`}},{default:p(()=>[n(e.$slots,`default`)]),_:3},8,[`as`,`as-child`,`aria-hidden`,`data-hidden`,`tabindex`]))}});function Re(e){let t=L({nonce:g()});return m(()=>e?.value||t.nonce?.value)}var ze=[` `,`Enter`,`ArrowUp`,`ArrowDown`],G=[` `,`Enter`];function K(e,t,n){return e===void 0?!1:Array.isArray(e)?e.some(e=>q(e,t,n)):q(e,t,n)}function q(e,t,n){return e===void 0||t===void 0?!1:typeof e==`string`?e===t:typeof n==`function`?n(e,t):typeof n==`string`?e?.[n]===t?.[n]:Pe(e,t)}function Be(e){return e==null||e===``||Array.isArray(e)&&e.length===0}var J={key:0,value:``},[Y,X]=ae(`SelectRoot`),Z=N({inheritAttrs:!1,__name:`SelectRoot`,props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1},defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1,default:void 0},by:{type:[String,Function],required:!1},dir:{type:String,required:!1},multiple:{type:Boolean,required:!1},autocomplete:{type:String,required:!1},disabled:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`update:modelValue`,`update:open`],setup(e,{emit:t}){let r=e,i=t,{required:a,disabled:o,multiple:s,dir:c}=A(r),l=pe(r,`modelValue`,i,{defaultValue:r.defaultValue??(s.value?[]:void 0),passive:r.modelValue===void 0,deep:!0}),d=pe(r,`open`,i,{defaultValue:r.defaultOpen,passive:r.open===void 0}),f=g(),h=g(),v=g({x:0,y:0}),y=m(()=>s.value&&Array.isArray(l.value)?l.value?.length===0:se(l.value));V({isProvider:!0});let b=ge(c),x=Ie(f),S=g(new Set),w=m(()=>Array.from(S.value).map(e=>e.value).join(`;`));function D(e){if(s.value){let t=Array.isArray(l.value)?[...l.value]:[],n=t.findIndex(t=>q(t,e,r.by));n===-1?t.push(e):t.splice(n,1),l.value=[...t]}else l.value=e}function O(e){return Array.from(S.value).find(t=>K(e,t.value,r.by))}return X({triggerElement:f,onTriggerChange:e=>{f.value=e},valueElement:h,onValueElementChange:e=>{h.value=e},contentId:``,modelValue:l,onValueChange:D,by:r.by,open:d,multiple:s,required:a,onOpenChange:e=>{d.value=e},dir:b,triggerPointerDownPosRef:v,disabled:o,isEmptyModelValue:y,optionsSet:S,onOptionAdd:e=>{let t=O(e.value);t&&S.value.delete(t),S.value.add(e)},onOptionRemove:e=>{let t=O(e.value);t&&S.value.delete(t)}}),(e,t)=>(I(),F(E(he),null,{default:p(()=>[n(e.$slots,`default`,{modelValue:E(l),open:E(d)}),E(x)&&e.name?(I(),F(Ve,{key:w.value,"aria-hidden":`true`,tabindex:`-1`,multiple:E(s),required:E(a),name:e.name,autocomplete:e.autocomplete,disabled:E(o),value:E(l)},{default:p(()=>[E(se)(E(l))?(I(),P(`option`,J)):_(`v-if`,!0),(I(!0),P(T,null,u(Array.from(S.value),e=>(I(),P(`option`,C({key:e.value??``},{ref_for:!0},e),null,16))),128))]),_:1},8,[`multiple`,`required`,`name`,`autocomplete`,`disabled`,`value`])):_(`v-if`,!0)]),_:3}))}}),Ve=N({__name:`BubbleSelect`,props:{autocomplete:{type:String,required:!1},autofocus:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},form:{type:String,required:!1},multiple:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1},size:{type:Number,required:!1},value:{type:null,required:!1}},setup(e){let t=e,r=g(),a=Y();i(()=>t.value,(e,t)=>{let n=window.HTMLSelectElement.prototype,i=Object.getOwnPropertyDescriptor(n,`value`).set;if(e!==t&&i&&r.value){let t=new Event(`change`,{bubbles:!0});i.call(r.value,e),r.value.dispatchEvent(t)}});function o(e){a.onValueChange(e.target.value)}return(e,i)=>(I(),F(E(Le),{"as-child":``},{default:p(()=>[j(`select`,C({ref_key:`selectElement`,ref:r},t,{onInput:o}),[n(e.$slots,`default`)],16)]),_:3}))}}),He=N({__name:`SelectPopperPosition`,props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1,default:`start`},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1,default:10},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=R(e);return(e,r)=>(I(),F(E(De),C(E(t),{style:{boxSizing:`border-box`,"--reka-select-content-transform-origin":`var(--reka-popper-transform-origin)`,"--reka-select-content-available-width":`var(--reka-popper-available-width)`,"--reka-select-content-available-height":`var(--reka-popper-available-height)`,"--reka-select-trigger-width":`var(--reka-popper-anchor-width)`,"--reka-select-trigger-height":`var(--reka-popper-anchor-height)`}}),{default:p(()=>[n(e.$slots,`default`)]),_:3},16))}}),Ue={onViewportChange:()=>{},itemTextRefCallback:()=>{},itemRefCallback:()=>{}},[Q,We]=ae(`SelectContent`),Ge=N({__name:`SelectContentImpl`,props:{position:{type:String,required:!1,default:`item-aligned`},bodyLock:{type:Boolean,required:!1,default:!0},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1,default:`start`},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1,default:!0}},emits:[`closeAutoFocus`,`escapeKeyDown`,`pointerDownOutside`],setup(t,{emit:r}){let a=t,o=r,s=Y();je(),Ae(a.bodyLock);let{CollectionSlot:c,getItems:l}=V(),u=g();be(u);let{search:f,handleTypeaheadSearch:h}=Ee(),_=g(),v=g(),b=g(),x=g(!1),S=g(!1),w=g(!1);function T(){v.value&&u.value&&_e([v.value,u.value])}i(x,()=>{T()});let{onOpenChange:O,triggerPointerDownPosRef:k}=s;D(e=>{if(!u.value)return;let t={x:0,y:0},n=e=>{t={x:Math.abs(Math.round(e.pageX)-(k.value?.x??0)),y:Math.abs(Math.round(e.pageY)-(k.value?.y??0))}},r=e=>{e.pointerType!==`touch`&&(t.x<=10&&t.y<=10?e.preventDefault():u.value?.contains(e.target)||O(!1),document.removeEventListener(`pointermove`,n),k.value=null)};k.value!==null&&(document.addEventListener(`pointermove`,n),document.addEventListener(`pointerup`,r,{capture:!0,once:!0})),e(()=>{document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r,{capture:!0})})});function A(e){let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&h(e.key,l()),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=[...l().map(e=>e.ref)];if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>_e(t)),e.preventDefault()}}let j=R(m(()=>a.position===`popper`?a:{}).value);return We({content:u,viewport:_,onViewportChange:e=>{_.value=e},itemRefCallback:(e,t,n)=>{let r=!S.value&&!n,i=K(s.modelValue.value,t,s.by);if(s.multiple.value){if(w.value)return;(i||r)&&(v.value=e,i&&(w.value=!0))}else (i||r)&&(v.value=e);r&&(S.value=!0)},selectedItem:v,selectedItemText:b,onItemLeave:()=>{u.value?.focus()},itemTextRefCallback:(e,t,n)=>{let r=!S.value&&!n;(K(s.modelValue.value,t,s.by)||r)&&(b.value=e)},focusSelectedItem:T,position:a.position,isPositioned:x,searchRef:f}),(t,r)=>(I(),F(E(c),null,{default:p(()=>[e(E(we),{"as-child":``,onMountAutoFocus:r[6]||=y(()=>{},[`prevent`]),onUnmountAutoFocus:r[7]||=e=>{o(`closeAutoFocus`,e),!e.defaultPrevented&&(E(s).triggerElement.value?.focus({preventScroll:!0}),e.preventDefault())}},{default:p(()=>[e(E(Oe),{"as-child":``,"disable-outside-pointer-events":t.disableOutsidePointerEvents,onFocusOutside:r[2]||=y(()=>{},[`prevent`]),onDismiss:r[3]||=e=>E(s).onOpenChange(!1),onEscapeKeyDown:r[4]||=e=>o(`escapeKeyDown`,e),onPointerDownOutside:r[5]||=e=>o(`pointerDownOutside`,e)},{default:p(()=>[(I(),F(d(t.position===`popper`?He:Je),C({...t.$attrs,...E(j)},{id:E(s).contentId,ref:e=>{if(!e)return;let t=E(oe)(e);t?.hasAttribute(`data-reka-popper-content-wrapper`)?u.value=t.firstElementChild:u.value=t},role:`listbox`,"data-state":E(s).open.value?`open`:`closed`,dir:E(s).dir.value,style:{display:`flex`,flexDirection:`column`,outline:`none`},onContextmenu:r[0]||=y(()=>{},[`prevent`]),onPlaced:r[1]||=e=>x.value=!0,onKeydown:A}),{default:p(()=>[n(t.$slots,`default`)]),_:3},16,[`id`,`data-state`,`dir`,`onKeydown`]))]),_:3},8,[`disable-outside-pointer-events`])]),_:3})]),_:3}))}}),[Ke,qe]=ae(`SelectItemAlignedPosition`),Je=N({inheritAttrs:!1,__name:`SelectItemAlignedPosition`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`placed`],setup(t,{emit:i}){let a=t,s=i,{getItems:c}=V(),l=Y(),u=Q(),d=g(!1),f=g(!0),m=g(),{forwardRef:_,currentElement:v}=W(),{viewport:y,selectedItem:b,selectedItemText:x,focusSelectedItem:S}=u;function w(){if(l.triggerElement.value&&l.valueElement.value&&m.value&&v.value&&y?.value&&b?.value&&x?.value){let e=l.triggerElement.value.getBoundingClientRect(),t=v.value.getBoundingClientRect(),n=l.valueElement.value.getBoundingClientRect(),r=x.value.getBoundingClientRect();if(l.dir.value!==`rtl`){let i=r.left-t.left,a=n.left-i,o=e.left-a,s=e.width+o,c=Math.max(s,t.width),l=window.innerWidth-10,u=Fe(a,10,Math.max(10,l-c));m.value.style.minWidth=`${s}px`,m.value.style.left=`${u}px`}else{let i=t.right-r.right,a=window.innerWidth-n.right-i,o=window.innerWidth-e.right-a,s=e.width+o,c=Math.max(s,t.width),l=window.innerWidth-10,u=Fe(a,10,Math.max(10,l-c));m.value.style.minWidth=`${s}px`,m.value.style.right=`${u}px`}let i=c().map(e=>e.ref),a=window.innerHeight-20,o=y.value.scrollHeight,u=window.getComputedStyle(v.value),f=Number.parseInt(u.borderTopWidth,10),p=Number.parseInt(u.paddingTop,10),h=Number.parseInt(u.borderBottomWidth,10),g=Number.parseInt(u.paddingBottom,10),_=f+p+o+g+h,S=Math.min(b.value.offsetHeight*5,_),C=window.getComputedStyle(y.value),w=Number.parseInt(C.paddingTop,10),T=Number.parseInt(C.paddingBottom,10),E=e.top+e.height/2-10,D=a-E,O=b.value.offsetHeight/2,k=b.value.offsetTop+O,A=f+p+k,j=_-A;if(A<=E){let e=b.value===i.at(-1);m.value.style.bottom=`0px`;let t=v.value.clientHeight-y.value.offsetTop-y.value.offsetHeight,n=A+Math.max(D,O+(e?T:0)+t+h);m.value.style.height=`${n}px`}else{let e=b.value===i[0];m.value.style.top=`0px`;let t=Math.max(E,f+y.value.offsetTop+(e?w:0)+O)+j;m.value.style.height=`${t}px`,y.value.scrollTop=A-E+y.value.offsetTop}m.value.style.margin=`10px 0`,m.value.style.minHeight=`${S}px`,m.value.style.maxHeight=`${a}px`,s(`placed`),requestAnimationFrame(()=>d.value=!0)}}let T=g(``);r(async()=>{await o(),w(),v.value&&(T.value=window.getComputedStyle(v.value).zIndex)});function D(e){e&&f.value===!0&&(w(),S?.(),f.value=!1)}return ke(l.triggerElement,()=>{w()}),qe({contentWrapper:m,shouldExpandOnScrollRef:d,onScrollButtonChange:D}),(t,r)=>(I(),P(`div`,{ref_key:`contentWrapperElement`,ref:m,style:h({display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:T.value})},[e(E(z),C({ref:E(_),style:{boxSizing:`border-box`,maxHeight:`100%`}},{...t.$attrs,...a}),{default:p(()=>[n(t.$slots,`default`)]),_:3},16)],4))}}),Ye=N({inheritAttrs:!1,__name:`SelectProvider`,props:{context:{type:Object,required:!0}},setup(e){return X(e.context),We(Ue),(e,t)=>n(e.$slots,`default`)}}),Xe={key:1},Ze=N({inheritAttrs:!1,__name:`SelectContent`,props:{forceMount:{type:Boolean,required:!1},position:{type:String,required:!1},bodyLock:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:[`closeAutoFocus`,`escapeKeyDown`,`pointerDownOutside`],setup(o,{emit:s}){let c=o,l=ye(c,s),u=Y(),d=g();r(()=>{d.value=new DocumentFragment});let f=g(),h=m(()=>c.forceMount||u.open.value),v=g(h.value),y;function S(){y&&=(clearTimeout(y),void 0)}return i(h,(e,t,n)=>{S(),y=setTimeout(()=>{v.value=h.value,y=void 0}),n(S)}),a(S),(r,i)=>h.value||v.value||f.value?.present?(I(),F(E(ve),{key:0,ref_key:`presenceRef`,ref:f,present:h.value},{default:p(()=>[e(Ge,b(t({...E(l),...r.$attrs})),{default:p(()=>[n(r.$slots,`default`)]),_:3},16)]),_:3},8,[`present`])):d.value?(I(),P(`div`,Xe,[(I(),F(x,{to:d.value},[e(Ye,{context:E(u)},{default:p(()=>[n(r.$slots,`default`)]),_:3},8,[`context`])],8,[`to`]))])):_(`v-if`,!0)}}),Qe=N({__name:`SelectIcon`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){return(e,t)=>(I(),F(E(z),{"aria-hidden":`true`,as:e.as,"as-child":e.asChild},{default:p(()=>[n(e.$slots,`default`,{},()=>[t[0]||=c(`▼`)])]),_:3},8,[`as`,`as-child`]))}}),[$e,et]=ae(`SelectItem`),tt=N({__name:`SelectItem`,props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:[`select`],setup(t,{emit:i}){let a=t,s=i,{disabled:c}=A(a),l=Y(),u=Q(),{forwardRef:d,currentElement:f}=W(),{CollectionItem:h}=V(),_=m(()=>K(l.modelValue?.value,a.value,l.by)),v=g(!1),b=g(a.textValue??``),x=Te(void 0,`reka-select-item-text`);async function S(e){e.defaultPrevented||de(`select.select`,C,{originalEvent:e,value:a.value})}async function C(e){await o(),s(`select`,e),!e.defaultPrevented&&(c.value||(l.onValueChange(a.value),l.multiple.value||l.onOpenChange(!1)))}async function w(e){await o(),!e.defaultPrevented&&(c.value?u.onItemLeave?.():e.currentTarget?.focus({preventScroll:!0}))}async function T(e){await o(),!e.defaultPrevented&&e.currentTarget===Ce()&&u.onItemLeave?.()}async function D(e){await o(),!e.defaultPrevented&&(u.searchRef?.value!==``&&e.key===` `||(G.includes(e.key)&&S(e),e.key===` `&&e.preventDefault()))}if(a.value===``)throw Error(`A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.`);return r(()=>{f.value&&u.itemRefCallback(f.value,a.value,a.disabled)}),et({value:a.value,disabled:c,textId:x,isSelected:_,onItemTextChange:e=>{b.value=((b.value||e?.textContent)??``).trim()}}),(t,r)=>(I(),F(E(h),{value:{textValue:b.value}},{default:p(()=>[e(E(z),{ref:E(d),role:`option`,"aria-labelledby":E(x),"data-highlighted":v.value?``:void 0,"aria-selected":_.value,"data-state":_.value?`checked`:`unchecked`,"aria-disabled":E(c)||void 0,"data-disabled":E(c)?``:void 0,tabindex:E(c)?void 0:-1,as:t.as,"as-child":t.asChild,onFocus:r[0]||=e=>v.value=!0,onBlur:r[1]||=e=>v.value=!1,onPointerup:S,onPointerdown:r[2]||=e=>{e.currentTarget.focus({preventScroll:!0})},onTouchend:r[3]||=y(()=>{},[`prevent`,`stop`]),onPointermove:w,onPointerleave:T,onKeydown:D},{default:p(()=>[n(t.$slots,`default`)]),_:3},8,[`aria-labelledby`,`data-highlighted`,`aria-selected`,`data-state`,`aria-disabled`,`data-disabled`,`tabindex`,`as`,`as-child`])]),_:3},8,[`value`]))}}),nt=N({__name:`SelectItemIndicator`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){let t=e,r=$e();return(e,i)=>E(r).isSelected.value?(I(),F(E(z),C({key:0,"aria-hidden":`true`},t),{default:p(()=>[n(e.$slots,`default`)]),_:3},16)):_(`v-if`,!0)}}),rt=N({inheritAttrs:!1,__name:`SelectItemText`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){let t=e,i=Y(),o=Q(),s=$e(),{forwardRef:c,currentElement:l}=W(),u=m(()=>({value:s.value,disabled:s.disabled.value,textContent:l.value?.textContent??s.value?.toString()??``}));return r(()=>{l.value&&(s.onItemTextChange(l.value),o.itemTextRefCallback(l.value,s.value,s.disabled.value),i.onOptionAdd(u.value))}),a(()=>{i.onOptionRemove(u.value)}),(e,r)=>(I(),F(E(z),C({id:E(s).textId,ref:E(c)},{...t,...e.$attrs}),{default:p(()=>[n(e.$slots,`default`)]),_:3},16,[`id`]))}}),it=N({__name:`SelectPortal`,props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){let r=e;return(e,i)=>(I(),F(E(H),b(t(r)),{default:p(()=>[n(e.$slots,`default`)]),_:3},16))}}),at=N({__name:`SelectScrollButtonImpl`,emits:[`autoScroll`],setup(e,{emit:t}){let r=t,{getItems:i}=V(),a=Q(),o=g(null);function c(){o.value!==null&&(window.clearInterval(o.value),o.value=null)}D(()=>{i().map(e=>e.ref).find(e=>e===Ce())?.scrollIntoView({block:`nearest`})});function l(){o.value===null&&(o.value=window.setInterval(()=>{r(`autoScroll`)},50))}function u(){a.onItemLeave?.(),o.value===null&&(o.value=window.setInterval(()=>{r(`autoScroll`)},50))}return s(()=>c()),(e,t)=>(I(),F(E(z),C({"aria-hidden":`true`,style:{flexShrink:0}},e.$parent?.$props,{onPointerdown:l,onPointermove:u,onPointerleave:t[0]||=()=>{c()}}),{default:p(()=>[n(e.$slots,`default`)]),_:3},16))}}),ot=N({__name:`SelectScrollDownButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=Q(),r=t.position===`item-aligned`?Ke():void 0,{forwardRef:a,currentElement:o}=W(),s=g(!1);return D(e=>{if(t.viewport?.value&&t.isPositioned?.value){let n=t.viewport.value;function r(){let e=n.scrollHeight-n.clientHeight;s.value=Math.ceil(n.scrollTop)<e}r(),n.addEventListener(`scroll`,r),e(()=>n.removeEventListener(`scroll`,r))}}),i(o,()=>{o.value&&r?.onScrollButtonChange(o.value)}),(e,r)=>s.value?(I(),F(at,{key:0,ref:E(a),onAutoScroll:r[0]||=()=>{let{viewport:e,selectedItem:n}=E(t);e?.value&&n?.value&&(e.value.scrollTop=e.value.scrollTop+n.value.offsetHeight)}},{default:p(()=>[n(e.$slots,`default`)]),_:3},512)):_(`v-if`,!0)}}),st=N({__name:`SelectScrollUpButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let t=Q(),r=t.position===`item-aligned`?Ke():void 0,{forwardRef:a,currentElement:o}=W(),s=g(!1);return D(e=>{if(t.viewport?.value&&t.isPositioned?.value){let n=t.viewport.value;function r(){s.value=n.scrollTop>0}r(),n.addEventListener(`scroll`,r),e(()=>n.removeEventListener(`scroll`,r))}}),i(o,()=>{o.value&&r?.onScrollButtonChange(o.value)}),(e,r)=>s.value?(I(),F(at,{key:0,ref:E(a),onAutoScroll:r[0]||=()=>{let{viewport:e,selectedItem:n}=E(t);e?.value&&n?.value&&(e.value.scrollTop=e.value.scrollTop-n.value.offsetHeight)}},{default:p(()=>[n(e.$slots,`default`)]),_:3},512)):_(`v-if`,!0)}}),ct=N({__name:`SelectTrigger`,props:{disabled:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`button`}},setup(t){let i=t,a=Y(),{forwardRef:o,currentElement:s}=W(),c=m(()=>a.disabled?.value||i.disabled);a.contentId||=Te(void 0,`reka-select-content`),r(()=>{a.onTriggerChange(s.value)});let{getItems:l}=V(),{search:u,handleTypeaheadSearch:d,resetTypeahead:f}=Ee();function h(){c.value||(a.onOpenChange(!0),f())}function g(e){h(),a.triggerPointerDownPosRef.value={x:Math.round(e.pageX),y:Math.round(e.pageY)}}return(t,r)=>(I(),F(E(xe),{"as-child":``,reference:t.reference},{default:p(()=>[e(E(z),{ref:E(o),role:`combobox`,type:t.as===`button`?`button`:void 0,"aria-controls":E(a).contentId,"aria-expanded":E(a).open.value||!1,"aria-required":E(a).required?.value,"aria-autocomplete":`none`,disabled:c.value,dir:E(a)?.dir.value,"data-state":E(a)?.open.value?`open`:`closed`,"data-disabled":c.value?``:void 0,"data-placeholder":E(Be)(E(a).modelValue?.value)?``:void 0,"as-child":t.asChild,as:t.as,onClick:r[0]||=e=>{(e?.currentTarget)?.focus()},onPointerdown:r[1]||=e=>{if(e.pointerType===`touch`)return e.preventDefault();let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&(g(e),e.preventDefault())},onPointerup:r[2]||=y(e=>{e.pointerType===`touch`&&g(e)},[`prevent`]),onKeydown:r[3]||=e=>{let t=E(u)!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&t&&e.key===` `||(E(d)(e.key,E(l)()),E(ze).includes(e.key)&&(h(),e.preventDefault()))}},{default:p(()=>[n(t.$slots,`default`)]),_:3},8,[`type`,`aria-controls`,`aria-expanded`,`aria-required`,`disabled`,`dir`,`data-state`,`data-disabled`,`data-placeholder`,`as-child`,`as`])]),_:3},8,[`reference`]))}}),lt=N({__name:`SelectValue`,props:{placeholder:{type:String,required:!1,default:``},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:`span`}},setup(e){let t=e,{forwardRef:i,currentElement:a}=W(),o=Y();r(()=>{o.valueElement=a});let s=m(()=>{let e=[],t=Array.from(o.optionsSet.value),n=e=>t.find(t=>K(e,t.value,o.by));return e=Array.isArray(o.modelValue.value)?o.modelValue.value.map(e=>n(e)?.textContent??``):[n(o.modelValue.value)?.textContent??``],e.filter(Boolean)}),l=m(()=>s.value.length?s.value.join(`, `):t.placeholder);return(e,r)=>(I(),F(E(z),{ref:E(i),as:e.as,"as-child":e.asChild,style:{pointerEvents:`none`},"data-placeholder":s.value.length?void 0:t.placeholder},{default:p(()=>[n(e.$slots,`default`,{selectedLabel:s.value,modelValue:E(o).modelValue.value},()=>[c(M(l.value),1)])]),_:3},8,[`as`,`as-child`,`data-placeholder`]))}}),ut=N({__name:`SelectViewport`,props:{nonce:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){let i=t,{nonce:a}=A(i),o=Re(a),s=Q(),l=s.position===`item-aligned`?Ke():void 0,{forwardRef:u,currentElement:d}=W();r(()=>{s?.onViewportChange(d.value)});let f=g(0);function m(e){let t=e.currentTarget,{shouldExpandOnScrollRef:n,contentWrapper:r}=l??{};if(n?.value&&r?.value){let e=Math.abs(f.value-t.scrollTop);if(e>0){let n=window.innerHeight-20,i=Number.parseFloat(r.value.style.minHeight),a=Number.parseFloat(r.value.style.height),o=Math.max(i,a);if(o<n){let i=o+e,a=Math.min(n,i),s=i-a;r.value.style.height=`${a}px`,r.value.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,r.value.style.justifyContent=`flex-end`)}}}f.value=t.scrollTop}return(t,r)=>(I(),P(T,null,[e(E(z),C({ref:E(u),"data-reka-select-viewport":``,role:`presentation`},{...t.$attrs,...i},{style:{position:`relative`,flex:1,overflow:`hidden auto`},onScroll:m}),{default:p(()=>[n(t.$slots,`default`)]),_:3},16),e(E(z),{as:`style`,nonce:E(o)},{default:p(()=>r[0]||=[c(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } `)]),_:1,__:[0]},8,[`nonce`])],64))}}),dt=B(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ft=B(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),pt=B(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),mt=B(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),ht=B(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),gt=B(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),_t=B(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),vt=B(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),yt=B(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),$=B(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),bt=B(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),xt=`/image/cligif.gif`,St=`/image/custom-ios-widget/preview.jpg`,Ct={__name:`Select`,props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1},by:{type:[String,Function],required:!1},dir:{type:String,required:!1},multiple:{type:Boolean,required:!1},autocomplete:{type:String,required:!1},disabled:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:[`update:modelValue`,`update:open`],setup(e,{emit:r}){let i=ye(e,r);return(e,r)=>(I(),F(E(Z),b(t(E(i))),{default:p(()=>[n(e.$slots,`default`)]),_:3},16))}},wt=Object.assign({inheritAttrs:!1},{__name:`SelectContent`,props:{forceMount:{type:Boolean,required:!1},position:{type:String,required:!1,default:`popper`},bodyLock:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},emits:[`closeAutoFocus`,`escapeKeyDown`,`pointerDownOutside`],setup(t,{emit:r}){let i=t,a=r,o=ye(ce(i,`class`),a);return(r,a)=>(I(),F(E(it),null,{default:p(()=>[e(E(Ze),C({...E(o),...r.$attrs},{class:E(U)(`relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,t.position===`popper`&&`data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,i.class)}),{default:p(()=>[e(E(Ot)),e(E(ut),{class:S(E(U)(`p-1`,t.position===`popper`&&`h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]`))},{default:p(()=>[n(r.$slots,`default`)]),_:3},8,[`class`]),e(E(Dt))]),_:3},16,[`class`])]),_:3}))}}),Tt={class:`absolute right-2 flex h-3.5 w-3.5 items-center justify-center`},Et={__name:`SelectItem`,props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let r=t,i=R(ce(r,`class`));return(t,a)=>(I(),F(E(tt),C(E(i),{class:E(U)(`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,r.class)}),{default:p(()=>[j(`span`,Tt,[e(E(nt),null,{default:p(()=>[e(E(ie),{class:`h-4 w-4`})]),_:1})]),e(E(rt),null,{default:p(()=>[n(t.$slots,`default`)]),_:3})]),_:3},16,[`class`]))}},Dt={__name:`SelectScrollDownButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let r=t,i=R(ce(r,`class`));return(t,a)=>(I(),F(E(ot),C(E(i),{class:E(U)(`flex cursor-default items-center justify-center py-1`,r.class)}),{default:p(()=>[n(t.$slots,`default`,{},()=>[e(E(ft))])]),_:3},16,[`class`]))}},Ot={__name:`SelectScrollUpButton`,props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let r=t,i=R(ce(r,`class`));return(t,a)=>(I(),F(E(st),C(E(i),{class:E(U)(`flex cursor-default items-center justify-center py-1`,r.class)}),{default:p(()=>[n(t.$slots,`default`,{},()=>[e(E(pt))])]),_:3},16,[`class`]))}},kt={__name:`SelectTrigger`,props:{disabled:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:[Boolean,null,String,Object,Array],required:!1,skipCheck:!0}},setup(t){let r=t,i=R(ce(r,`class`));return(t,a)=>(I(),F(E(ct),C(E(i),{class:E(U)(`flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start`,r.class)}),{default:p(()=>[n(t.$slots,`default`),e(E(Qe),{"as-child":``},{default:p(()=>[e(E(ft),{class:`w-4 h-4 opacity-50 shrink-0`})]),_:1})]),_:3},16,[`class`]))}},At={__name:`SelectValue`,props:{placeholder:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){let r=e;return(e,i)=>(I(),F(E(lt),b(t(r)),{default:p(()=>[n(e.$slots,`default`)]),_:3},16))}},jt=`// Variables used by Scriptable.
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
`,Mt={class:`download-hero`,"aria-labelledby":`download-title`},Nt={class:`download-hero-copy`},Pt={id:`download-title`},Ft={class:`hero-description`},It={key:0,class:`hero-actions`},Lt={key:1,class:`latest-version-badge latest-version-badge-app rustminerapp-status-badge`},Rt={key:3,class:`latest-version-badge latest-version-badge-widget`},zt=[`aria-label`],Bt={class:`cli-visual-frame`},Vt=[`alt`],Ht={class:`cli-visual-summary`},Ut={class:`widget-visual-stage`},Wt={class:`widget-phone-frame`},Gt=[`alt`],Kt={class:`widget-visual-summary`},qt={class:`rustminerapp-visual-stage`},Jt=[`src`,`alt`,`loading`,`fetchpriority`],Yt={class:`rustminerapp-visual-summary`},Xt={class:`poolnode-visual-stage`},Zt={class:`poolnode-phone poolnode-phone-primary`},Qt=[`src`,`alt`],$t={class:`poolnode-phone poolnode-phone-secondary`},en=[`src`,`alt`],tn={class:`poolnode-visual-summary`},nn={class:`rms-local-stack`},rn={class:`visual-kicker`},an={class:`rms-miner-grid`},on={class:`system-node rms-system-node`},sn={class:`rms-capabilities`},cn={class:`rms-tunnel`},ln={class:`target-node rms-target-node`},un={class:`server-ingress-stack`},dn={class:`visual-kicker`},fn={class:`server-ingress-grid`},pn={class:`miner-node server-ingress-node`},mn={class:`miner-node server-ingress-node`},hn={class:`miner-node server-ingress-node`},gn={class:`system-node server-system-node`},_n={class:`server-capabilities`},vn={class:`server-route-label`},yn={class:`server-target-grid`},bn={class:`target-node server-target-node`},xn={class:`target-node server-target-node`},Sn={key:0,class:`rustminerapp-download-section`,"aria-labelledby":`rustminerapp-download-title`},Cn={class:`rustminerapp-section-copy`},wn={id:`rustminerapp-download-title`},Tn={class:`rustminerapp-platform-grid`},En={class:`rustminerapp-platform-icon`},Dn={class:`rustminerapp-platform-state`},On={class:`rustminerapp-feature-grid`},kn={class:`rustminerapp-feature-icon`},An={key:1,class:`poolnode-download-section`,"aria-labelledby":`poolnode-download-title`},jn={class:`poolnode-section-copy`},Mn={id:`poolnode-download-title`},Nn={class:`poolnode-download-grid`},Pn={class:`poolnode-platform-heading`},Fn={class:`poolnode-platform-icon`},In={class:`poolnode-qr-wrap`},Ln=[`src`,`alt`],Rn={class:`poolnode-platform-note`},zn=[`href`],Bn={class:`poolnode-feature-grid`},Vn={class:`poolnode-feature-icon`},Hn={key:2,class:`cli-download-section`,"aria-labelledby":`cli-download-title`},Un={class:`cli-section-copy`},Wn={id:`cli-download-title`},Gn={class:`cli-install-layout`},Kn={class:`cli-status-panel cli-install-panel`},qn={class:`cli-status-heading`},Jn={class:`install-command cli-install-command`},Yn={class:`install-command-heading`},Xn={class:`cli-command-note`},Zn={class:`cli-status-panel cli-options-panel`},Qn={class:`cli-status-heading`},$n={class:`cli-option-list`},er={class:`cli-status-panel`},tr={class:`cli-status-heading`},nr=[`aria-label`],rr={class:`cli-feature-grid`},ir={class:`cli-feature-icon`},ar={key:3,class:`widget-download-section`,"aria-labelledby":`widget-download-title`},or={class:`widget-section-copy`},sr={id:`widget-download-title`},cr={class:`widget-download-layout`},lr={class:`widget-status-heading`},ur={class:`widget-token-field`},dr=[`placeholder`],fr={class:`widget-token-hint`},pr={key:0,class:`widget-token-message widget-token-error`,role:`alert`},mr={key:1,class:`widget-token-message widget-token-success`,"aria-live":`polite`},hr=[`disabled`],gr={class:`widget-security-panel`},_r={class:`widget-status-heading`},vr={class:`widget-security-list`},yr={class:`widget-feature-block`},br={class:`widget-section-copy`},xr={class:`widget-feature-grid`},Sr={class:`widget-feature-icon`},Cr={class:`widget-steps-block`},wr={class:`widget-section-copy`},Tr={class:`widget-steps-grid`},Er={class:`widget-step-index`},Dr={class:`finder-header`},Or={id:`download-finder-title`},kr=[`href`],Ar={class:`filter-grid`},jr={class:`filter-field filter-field-os`},Mr={class:`filter-field filter-field-arch`},Nr={key:0,class:`filter-field filter-field-version`},Pr={class:`method-hint`},Fr={key:0,class:`install-panel`,"aria-labelledby":`linux-install-title`},Ir={class:`install-header`},Lr={id:`linux-install-title`},Rr={class:`install-command-list`},zr={class:`install-command-heading`},Br=[`onClick`],Vr={class:`binary-panel`,"aria-labelledby":`binary-download-title`},Hr={class:`binary-header`},Ur={class:`binary-header-copy`},Wr={id:`binary-download-title`},Gr={key:0,class:`release-state`,"aria-live":`polite`},Kr={key:0},qr={key:1},Jr={key:2},Yr={key:1,class:`release-list`},Xr={class:`release-copy`},Zr=[`href`],Qr={key:5,class:`download-partners`,"aria-labelledby":`download-partners-title`},$r={class:`partners-copy`},ei={id:`download-partners-title`},ti=[`aria-label`],ni=[`href`],ri={class:`partner-logo-frame`},ii=[`src`,`alt`],ai={class:`partner-name`},oi=`https://github.com/EvilGenius-dot/RustMinerSystem/raw/refs/heads/main/APP/PoolNode/Android/PoolNode.apk`,si=`https://apps.apple.com/hk/app/poolnode/id6754824577`,ci=`EvilGenius-dot`,li=`main`,ui=`https://raw.githubusercontent.com/EvilGenius-dot/RustMinerSystem/main/origin.json`,di=k({__name:`DownloadView`,setup(t){let n=me(),{t:a}=O(),o=m(()=>fe(n)),s=m(()=>n.meta?.downloadPage||Se),h=m(()=>le(s.value,o.value)),v=m(()=>s.value===`server`),b=m(()=>s.value===`rms`),x=m(()=>s.value===`mobile`),C=m(()=>s.value===`pool-node`),D=m(()=>s.value===`cli`),k=m(()=>s.value===`custom-ios-widget`),A=m(()=>x.value||C.value),N=m(()=>v.value||b.value),ae=m(()=>N.value||x.value||C.value||D.value||k.value),oe=m(()=>v.value||b.value||A.value||D.value||k.value),se=m(()=>N.value||A.value||D.value||k.value),ce=m(()=>N.value||C.value),de=m(()=>b.value?`download.rms`:x.value?`download.rustMinerApp`:C.value?`download.poolNode`:D.value?`download.cli`:k.value?`download.customIosWidget`:`download.server`),L=(e,t)=>a(`${de.value}.${e}`,t),pe=m(()=>ue(`installation`,o.value)),R=m(()=>ue(`overview`,o.value,`rustminersystem-cli`)),he=m(()=>[L(`visual.miners`),L(`visual.fieldProxy`),L(`visual.remoteNode`)]),ge=m(()=>[L(`visual.access`),L(`visual.allocation`),L(`visual.proxy`)]),_e=m(()=>[L(`visual.compression`),L(`visual.encryption`),L(`visual.connectionPool`)]),z=[{key:`vultr`,logo:`/image/partners/vultr.svg`,href:`https://www.vultr.com/`},{key:`aws`,logo:`/image/partners/aws.svg`,href:`https://aws.amazon.com/`},{key:`azure`,logo:`/image/partners/azure.svg`,href:`https://azure.microsoft.com/`},{key:`aliyun`,logo:`/image/partners/aliyun.svg`,href:`https://www.alibabacloud.com/`},{key:`cloudflare`,logo:`/image/partners/cloudflare.svg`,href:`https://www.cloudflare.com/`},{key:`github`,logo:`/image/partners/github.svg`,href:`https://github.com/EvilGenius-dot`}],ve=m(()=>[{src:`/image/rustminerapp1.png`,alt:L(`screens.dashboardAlt`),label:L(`screens.dashboard`)},{src:`/image/rustminerapp2.png`,alt:L(`screens.serversAlt`),label:L(`screens.servers`)},{src:`/image/rustminerapp3.png`,alt:L(`screens.systemAlt`),label:L(`screens.system`)},{src:`/image/rustminerapp4.png`,alt:L(`screens.workerAlt`),label:L(`screens.worker`)},{src:`/image/rustminerapp5.png`,alt:L(`screens.deviceAlt`),label:L(`screens.device`)}]),ye=m(()=>[ve.value[0],ve.value[3],ve.value[4]].filter(Boolean).map((e,t)=>({...e,slot:[`primary`,`secondary`,`tertiary`][t]}))),be=m(()=>[{id:`ios`,title:L(`platforms.ios.title`),status:L(`platforms.ios.status`),note:L(`platforms.ios.note`)},{id:`android`,title:L(`platforms.android.title`),status:L(`platforms.android.status`),note:L(`platforms.android.note`)}]),xe=m(()=>[{icon:vt,title:L(`features.proxy.title`),text:L(`features.proxy.text`)},{icon:mt,title:L(`features.worker.title`),text:L(`features.worker.text`)},{icon:$,title:L(`features.system.title`),text:L(`features.system.text`)}]),Ce=m(()=>[{src:`/image/poolnode/overview.jpg`,alt:L(`screens.overviewAlt`),label:L(`screens.overview`)},{src:`/image/poolnode/hashrate.jpg`,alt:L(`screens.hashrateAlt`),label:L(`screens.hashrate`)},{src:`/image/poolnode/workers.jpg`,alt:L(`screens.workersAlt`),label:L(`screens.workers`)},{src:`/image/poolnode/assets.jpg`,alt:L(`screens.assetsAlt`),label:L(`screens.assets`)}]),we=m(()=>[{icon:vt,title:L(`features.node.title`),text:L(`features.node.text`)},{icon:mt,title:L(`features.worker.title`),text:L(`features.worker.text`)},{icon:$,title:L(`features.asset.title`),text:L(`features.asset.text`)}]),Te=m(()=>[L(`command.line1`),L(`command.line2`),L(`command.line3`),L(`command.line4`)]),B=m(()=>({id:`cli-install-main-script`,label:L(`install.commandLabel`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)`})),V=m(()=>[{key:L(`script.options.install.key`),text:L(`script.options.install.text`)},{key:L(`script.options.uninstall.key`),text:L(`script.options.uninstall.text`)},{key:L(`script.options.web.key`),text:L(`script.options.web.text`)},{key:L(`script.options.status.key`),text:L(`script.options.status.text`)}]),Ee=m(()=>[{icon:re,title:L(`features.terminal.title`),text:L(`features.terminal.text`)},{icon:$,title:L(`features.security.title`),text:L(`features.security.text`)},{icon:yt,title:L(`features.operations.title`),text:L(`features.operations.text`)}]),De=g(``),H=g(``),U=g(``),Oe=g(!1),W=m(()=>[L(`privacy.items.local`),L(`privacy.items.rotate`),L(`privacy.items.network`)]),ke=[`scriptable`,`token`,`download`,`import`,`widget`],Ae=m(()=>ke.map((e,t)=>({key:e,number:`${t+1}`.padStart(2,`0`),title:L(`steps.items.${e}.title`),text:L(`steps.items.${e}.text`)}))),je=m(()=>[{icon:yt,title:L(`features.items.overview.title`),text:L(`features.items.overview.text`)},{icon:mt,title:L(`features.items.coins.title`),text:L(`features.items.coins.text`)},{icon:$,title:L(`features.items.refresh.title`),text:L(`features.items.refresh.text`)}]),Me=m(()=>b.value?`RMS`:`RustMinerSystem`),Ne=m(()=>`https://api.github.com/repos/${ci}/${Me.value}/contents`),Pe=m(()=>`https://github.com/${ci}/${Me.value}`),Fe=[`windows`,`linux`],Ie={x86:`x86_64-musl`,aarch64:`aarch64-musl`,arm:`arm-musleabi`,armhf:`arm-musleabihf`,armv7:`armv7-musleabi`,armv7hf:`armv7-musleabihf`,"windows-gui":`windows-gui`,"windows-cli":`windows-no-gui`},Le=[`x86`,`aarch64`,`arm`,`armhf`,`armv7`,`armv7hf`],Re=m(()=>b.value?Object.values(Ie):Fe),ze=new Set([`md`,`txt`,`json`,`yml`,`yaml`,`sh`,`ps1`]),G=g(`linux`),K=g(`x86`),q=g(``),Be=g([]),J=g(``),Y=g(!1),X=g(``),Z=g({rustminer:`4.6.7`,rms:`3.1.10`,poolNodeAndroid:`1.0.1`,poolNodeIos:`1.0.1`}),Ve=g(!1),He=g(!1),Ue=e=>e?/^v/i.test(e)?e:`v${e}`:``,Q=m(()=>b.value?Z.value.rms:Z.value.rustminer),We=m(()=>Ue(Q.value)),Ge=m(()=>We.value?a(`download.latestVersion`,{version:We.value}):He.value?a(`download.latestVersionLoading`):a(`download.latestVersionError`)),Ke=m(()=>{let e=Ue(Z.value.poolNodeAndroid),t=Ue(Z.value.poolNodeIos);return!e&&!t?``:a(`download.poolNode.latestRelease`,{android:e||a(`download.latestVersionPending`),ios:t||a(`download.latestVersionPending`)})}),qe=m(()=>Ke.value?Ke.value:He.value?a(`download.latestVersionLoading`):a(`download.latestVersionError`)),Je=m(()=>[{id:`android`,title:L(`platforms.android.title`),versionLabel:a(`download.latestVersion`,{version:Ue(Z.value.poolNodeAndroid)||a(`download.latestVersionPending`)}),note:L(`platforms.android.note`),buttonLabel:L(`platforms.android.button`),href:oi,qr:`/image/poolnode/android-qr.png`,qrAlt:L(`platforms.android.qrAlt`)},{id:`ios`,title:L(`platforms.ios.title`),versionLabel:a(`download.latestVersion`,{version:Ue(Z.value.poolNodeIos)||a(`download.latestVersionPending`)}),note:L(`platforms.ios.note`),buttonLabel:L(`platforms.ios.button`),href:si,qr:`/image/poolnode/ios-qr.png`,qrAlt:L(`platforms.ios.qrAlt`)}]),Ye=m(()=>[{value:`linux`,label:L(`os.linux`)},{value:`windows`,label:L(`os.windows`)}]),Xe=m(()=>b.value?{linux:Le.map(e=>({value:e,label:L(`arch.${e}`)})),windows:[{value:`windows-gui`,label:L(`arch.windowsGui`)},{value:`windows-cli`,label:L(`arch.windowsCli`)}]}:{linux:[{value:`x86`,label:L(`arch.x86`)},{value:`arm`,label:L(`arch.arm`)},{value:`armv7`,label:L(`arch.armv7`)}],windows:[{value:`x86`,label:L(`arch.x86`)}]}),Ze=m(()=>Xe.value[G.value]||Xe.value.linux),Qe=m(()=>Ye.value.find(e=>e.value===G.value)?.label||G.value),$e=m(()=>Ze.value.find(e=>e.value===K.value)?.label||K.value),et=m(()=>Be.value.filter(e=>e.os===G.value&&e.arch===K.value)),tt=m(()=>[...new Set(et.value.map(e=>e.version))].filter(Boolean).sort(_i).reverse()),nt=m(()=>b.value?We.value||a(`download.latestVersionPending`):q.value||L(`versionPending`)),rt=m(()=>b.value?et.value:et.value.filter(e=>e.version===q.value)),it=m(()=>({x86:[{id:`server-linux-x86-primary`,label:L(`install.line1`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)`},{id:`server-linux-x86-mirror`,label:L(`install.line2`),command:`bash <(curl -s -L -k https://rustminersystem.com/EvilGenius-dot/RustMinerSystem/raw/main/install.sh)`}],arm:[{id:`server-linux-arm`,label:L(`install.arm`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/arm-install.sh)`}],armv7:[{id:`server-linux-armv7`,label:L(`install.armv7`),command:`bash <(curl -s -L https://github.com/EvilGenius-dot/RustMinerSystem/raw/main/armv7-install.sh)`}]})),at=m(()=>({linux:[{id:`rms-linux-primary`,label:L(`install.line1`),command:`bash <(curl -s -L https://raw.githubusercontent.com/EvilGenius-dot/RMS/main/install.sh)`},{id:`rms-linux-mirror`,label:L(`install.line2`),command:`bash <(curl -s -L -k https://rustminersystem.com/install.sh)`}]})),ot=m(()=>b.value?at.value[G.value]||[]:!v.value||G.value!==`linux`?[]:it.value[K.value]||[]),st=m(()=>ot.value.length?`methodHint.linux`:`methodHint.standalone`),ct=m(()=>{let e=b.value?Ie[K.value]||`x86_64-musl`:Fe.includes(G.value)?G.value:`linux`;return{label:L(`openDirectory`,{directory:b.value?$e.value:Qe.value}),href:`${Pe.value}/tree/${li}/${e}`}}),lt=(e,t)=>{let n=`${e.path}/${e.name}`.toLowerCase();return/(^|[/._-])armv?7l?($|[/._-])/.test(n)||/(^|[/._-])(arm32|armhf)($|[/._-])/.test(n)?`armv7`:/(^|[/._-])(aarch64|arm64|arm)($|[/._-])/.test(n)?`arm`:(/(^|[/._-])(x86_64|amd64|x64|x86|i386|i686)($|[/._-])/.test(n),`x86`)},ut=e=>{if(b.value)return L(`version.rms3`);let t=e.match(/(?:^|[-_.v/])(\d+(?:[-_.]\d+){1,3})(?:\D|$)/i);return t?`v${t[1].replace(/[-_]/g,`.`)}`:L(`unknownVersion`)},ft=e=>{let t=e.toLowerCase().split(`.`);return t.length>1?t.at(-1):``},pt=e=>{if(e.type!==`file`)return!1;let t=ft(e.name);return!ze.has(t)},Tt=e=>{if(b.value)return Dt(e);let t=e.path.startsWith(`windows/`)?`windows`:`linux`,n=e.download_url||`https://raw.githubusercontent.com/${ci}/${Me.value}/${li}/${e.path}`;return{arch:lt(e,t),downloadUrl:n,htmlUrl:e.html_url,name:e.name,os:t,path:e.path,size:e.size||0,version:ut(`${e.path}/${e.name}`)}},Dt=e=>{let t=e.path.split(`/`)[0],n=Object.entries(Ie).find(([,e])=>e===t)?.[0]||`x86`,r=t.startsWith(`windows`)?`windows`:`linux`;return{arch:n,downloadUrl:e.download_url||`https://raw.githubusercontent.com/${ci}/${Me.value}/${li}/${e.path}`,htmlUrl:e.html_url,name:e.name,os:r,path:e.path,size:e.size||0,version:L(`version.rms3`)}},Ot=e=>b.value&&We.value||e.version,di=async()=>{if(!(!ce.value||He.value)){He.value=!0,Ve.value=!1;try{let e=await fetch(ui,{cache:`no-store`,headers:{Accept:`application/json`}});if(!e.ok)throw Error(`Unable to read origin.json`);let t=await e.json();Z.value={rustminer:typeof t.version==`string`?t.version:Z.value.rustminer,rms:typeof t.RMS==`string`?t.RMS:typeof t.rms==`string`?t.rms:Z.value.rms,poolNodeAndroid:typeof t.PoolNodeAndroidVersion==`string`?t.PoolNodeAndroidVersion:Z.value.poolNodeAndroid,poolNodeIos:typeof t.PoolNodeIosVersion==`string`?t.PoolNodeIosVersion:Z.value.poolNodeIos}}catch{Ve.value=!0}finally{He.value=!1}}},fi=async e=>{let t=new AbortController,n=window.setTimeout(()=>t.abort(),8e3);try{let n=await fetch(`${Ne.value}/${e}?ref=${li}`,{cache:`no-store`,headers:{Accept:`application/vnd.github+json`},signal:t.signal});if(!n.ok)throw Error(L(`fetchError`));let r=await n.json();if(!Array.isArray(r))return[];let i=r.filter(e=>e.type===`dir`),a=r.filter(pt),o=await Promise.all(i.map(e=>fi(e.path)));return[...a,...o.flat()]}catch(e){throw e instanceof DOMException&&e.name===`AbortError`?Error(L(`fetchError`)):e}finally{window.clearTimeout(n)}},pi=async()=>{if(N.value){Y.value=!0,J.value=``;try{let e=(await Promise.allSettled(Re.value.map(e=>fi(e)))).flatMap(e=>e.status===`fulfilled`?e.value:[]);if(!e.length)throw Error(L(`fetchError`));Be.value=e.map(Tt).sort((e,t)=>t.size-e.size)}catch(e){Be.value=[],J.value=e instanceof Error?e.message:L(`fetchError`)}finally{Y.value=!1}}},mi=async e=>{try{await window.navigator.clipboard.writeText(e.command),X.value=e.id,window.setTimeout(()=>{X.value===e.id&&(X.value=``)},1800)}catch{X.value=``}},hi=e=>jt.replace(/const CTL_TOKEN\s*=\s*["'][^"']*["'];/,`const CTL_TOKEN = ${JSON.stringify(e)};`),gi=()=>{let e=De.value.trim();if(H.value=``,U.value=``,!e){H.value=L(`token.errorRequired`);return}if(/\s/.test(e)){H.value=L(`token.errorWhitespace`);return}Oe.value=!0;try{let t=hi(e),n=new Blob([t],{type:`text/javascript;charset=utf-8`}),r=window.URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=L(`token.fileName`),document.body.append(i),i.click(),i.remove(),window.URL.revokeObjectURL(r),U.value=L(`token.success`)}finally{Oe.value=!1}};function _i(e,t){let n=e.match(/\d+/g)?.map(Number)||[0],r=t.match(/\d+/g)?.map(Number)||[0],i=Math.max(n.length,r.length);for(let e=0;e<i;e+=1){let t=(n[e]||0)-(r[e]||0);if(t)return t}return e.localeCompare(t)}i(G,()=>{let e=Ze.value.map(e=>e.value);e.includes(K.value)||(K.value=e[0]||`x86`)}),i(tt,e=>{e.includes(q.value)||(q.value=e[0]||``)},{immediate:!0});let vi=()=>typeof window<`u`&&window.navigator.userAgent.toLowerCase().includes(`windows`)?`windows`:`linux`;return i(s,()=>{Be.value=[],J.value=``,X.value=``,H.value=``,U.value=``,q.value=``,G.value=vi(),K.value=Ze.value.map(e=>e.value)[0]||`x86`,ce.value&&di(),N.value&&pi()}),r(()=>{G.value=vi(),di(),pi()}),(t,n)=>{let r=l(`RouterLink`);return I(),P(`main`,{id:`main-content`,class:S([`download-page`,{"download-page-app":A.value,"download-page-rustminerapp":x.value,"download-page-cli":D.value,"download-page-widget":k.value}])},[j(`div`,{class:S([`download-shell`,{"download-shell-app":A.value}])},[j(`article`,Mt,[j(`div`,Nt,[j(`h1`,Pt,M(h.value.heading||h.value.title),1),j(`p`,Ft,M(h.value.description),1),se.value?(I(),P(`div`,It,[!x.value&&!D.value&&!k.value?(I(),F(r,{key:0,to:pe.value,class:`guide-link`},{default:p(()=>[e(E(dt),{"aria-hidden":`true`}),j(`span`,null,M(E(a)(`download.installGuideLink`)),1)]),_:1},8,[`to`])):_(``,!0),x.value?(I(),P(`span`,Lt,[e(E(_t),{"aria-hidden":`true`}),j(`span`,null,M(L(`comingSoonBadge`)),1)])):_(``,!0),D.value?(I(),F(r,{key:2,to:R.value,class:`latest-version-badge latest-version-badge-cli cli-doc-link`},{default:p(()=>[e(E(dt),{"aria-hidden":`true`}),j(`span`,null,M(L(`docLink`)),1)]),_:1},8,[`to`])):_(``,!0),k.value?(I(),P(`span`,Rt,[e(E(_t),{"aria-hidden":`true`}),j(`span`,null,M(L(`statusBadge`)),1)])):_(``,!0),N.value?(I(),P(`span`,{key:4,class:S([`latest-version-badge`,{"latest-version-badge-error":Ve.value&&!We.value}])},[e(E(ee),{"aria-hidden":`true`}),j(`span`,null,M(Ge.value),1)],2)):_(``,!0),C.value?(I(),P(`span`,{key:5,class:S([`latest-version-badge latest-version-badge-app`,{"latest-version-badge-error":Ve.value&&!Ke.value}])},[e(E(ee),{"aria-hidden":`true`}),j(`span`,null,M(qe.value),1)],2)):_(``,!0)])):_(``,!0)]),oe.value?(I(),P(`div`,{key:0,class:S([`download-hero-visual`,{"download-hero-visual-rms":b.value,"download-hero-visual-server":v.value,"download-hero-visual-app":A.value,"download-hero-visual-rustminerapp":x.value,"download-hero-visual-cli":D.value,"download-hero-visual-widget":k.value}]),role:`img`,"aria-label":L(`visual.label`)},[D.value?(I(),P(T,{key:0},[j(`figure`,Bt,[j(`img`,{src:xt,alt:L(`visual.alt`),decoding:`async`,fetchpriority:`high`},null,8,Vt)]),j(`div`,Ht,[j(`span`,null,M(L(`visual.badge`)),1),j(`strong`,null,M(L(`visual.title`)),1),j(`p`,null,M(L(`visual.description`)),1)])],64)):k.value?(I(),P(T,{key:1},[j(`div`,Ut,[j(`figure`,Wt,[j(`img`,{src:St,alt:L(`visual.alt`),decoding:`async`,fetchpriority:`high`},null,8,Gt)])]),j(`div`,Kt,[j(`span`,null,M(L(`visual.badge`)),1),j(`strong`,null,M(L(`visual.title`)),1),j(`p`,null,M(L(`visual.description`)),1)])],64)):x.value?(I(),P(T,{key:2},[j(`div`,qt,[(I(!0),P(T,null,u(ye.value,e=>(I(),P(`figure`,{key:e.src,class:S([`rustminerapp-phone`,`rustminerapp-phone-${e.slot}`])},[j(`img`,{src:e.src,alt:e.alt,loading:e.slot===`primary`?void 0:`lazy`,fetchpriority:e.slot===`primary`?`high`:void 0,decoding:`async`},null,8,Jt)],2))),128))]),j(`div`,Yt,[j(`span`,null,M(L(`visual.badge`)),1),j(`strong`,null,M(L(`visual.title`)),1),j(`p`,null,M(L(`visual.description`)),1)])],64)):C.value?(I(),P(T,{key:3},[j(`div`,Xt,[j(`figure`,Zt,[j(`img`,{src:Ce.value[0].src,alt:Ce.value[0].alt,decoding:`async`,fetchpriority:`high`},null,8,Qt)]),j(`figure`,$t,[j(`img`,{src:Ce.value[1].src,alt:Ce.value[1].alt,loading:`lazy`,decoding:`async`},null,8,en)])]),j(`div`,tn,[j(`span`,null,M(L(`visual.badge`)),1),j(`strong`,null,M(L(`visual.title`)),1),j(`p`,null,M(L(`visual.description`)),1)])],64)):b.value?(I(),P(T,{key:4},[j(`div`,nn,[j(`span`,rn,M(L(`visual.localLabel`)),1),j(`div`,an,[(I(!0),P(T,null,u(he.value,t=>(I(),P(`div`,{key:t,class:`miner-node rms-miner-node`},[e(E(mt),{"aria-hidden":`true`}),j(`span`,null,M(t),1)]))),128))])]),n[5]||=j(`div`,{class:`rms-flow-line`,"aria-hidden":`true`},[j(`span`),j(`span`),j(`span`)],-1),j(`div`,on,[e(E($),{"aria-hidden":`true`}),j(`strong`,null,M(L(`visual.system`)),1),j(`span`,null,M(L(`visual.systemHint`)),1),j(`div`,sn,[(I(!0),P(T,null,u(_e.value,e=>(I(),P(`span`,{key:e},M(e),1))),128))])]),j(`div`,cn,[j(`span`,null,M(L(`visual.tunnelLabel`)),1)]),j(`div`,ln,[e(E(yt),{"aria-hidden":`true`}),j(`span`,null,M(L(`visual.target`)),1)])],64)):(I(),P(T,{key:5},[j(`div`,un,[j(`span`,dn,M(L(`visual.localLabel`)),1),j(`div`,fn,[j(`div`,pn,[e(E(mt),{"aria-hidden":`true`}),j(`span`,null,M(L(`visual.miners`)),1)]),j(`div`,mn,[e(E(vt),{"aria-hidden":`true`}),j(`span`,null,M(L(`visual.fieldProxy`)),1)]),j(`div`,hn,[e(E($),{"aria-hidden":`true`}),j(`span`,null,M(L(`visual.remoteNode`)),1)])])]),n[6]||=j(`div`,{class:`server-flow-line`,"aria-hidden":`true`},[j(`span`),j(`span`),j(`span`)],-1),j(`div`,gn,[e(E(yt),{"aria-hidden":`true`}),j(`strong`,null,M(L(`visual.system`)),1),j(`span`,null,M(L(`visual.systemHint`)),1),j(`div`,_n,[(I(!0),P(T,null,u(ge.value,e=>(I(),P(`span`,{key:e},M(e),1))),128))])]),j(`div`,vn,[j(`span`,null,M(L(`visual.routeLabel`)),1)]),j(`div`,yn,[j(`div`,bn,[e(E(gt),{"aria-hidden":`true`}),j(`span`,null,M(L(`visual.thirdPartyTarget`)),1)]),j(`div`,xn,[e(E(yt),{"aria-hidden":`true`}),j(`span`,null,M(L(`visual.poolNodeTarget`)),1)])])],64))],10,zt)):_(``,!0)]),x.value?(I(),P(`section`,Sn,[j(`div`,Cn,[j(`span`,null,M(L(`downloadKicker`)),1),j(`h2`,wn,M(L(`downloadTitle`)),1),j(`p`,null,M(L(`downloadDescription`)),1)]),j(`div`,Tn,[(I(!0),P(T,null,u(be.value,t=>(I(),P(`article`,{key:t.id,class:`rustminerapp-platform-card`},[j(`span`,En,[e(E(bt),{"aria-hidden":`true`})]),j(`div`,null,[j(`h3`,null,M(t.title),1),j(`p`,null,M(t.note),1)]),j(`span`,Dn,M(t.status),1)]))),128))]),j(`div`,On,[(I(!0),P(T,null,u(xe.value,e=>(I(),P(`article`,{key:e.title,class:`rustminerapp-feature-card`},[j(`span`,kn,[(I(),F(d(e.icon),{"aria-hidden":`true`}))]),j(`div`,null,[j(`h3`,null,M(e.title),1),j(`p`,null,M(e.text),1)])]))),128))])])):_(``,!0),C.value?(I(),P(`section`,An,[j(`div`,jn,[j(`span`,null,M(L(`downloadKicker`)),1),j(`h2`,Mn,M(L(`downloadTitle`)),1),j(`p`,null,M(L(`downloadDescription`)),1)]),j(`div`,Nn,[(I(!0),P(T,null,u(Je.value,t=>(I(),P(`article`,{key:t.id,class:`poolnode-platform-card`},[j(`div`,Pn,[j(`span`,Fn,[e(E(bt),{"aria-hidden":`true`})]),j(`div`,null,[j(`h3`,null,M(t.title),1),j(`p`,null,M(t.versionLabel),1)])]),j(`div`,In,[j(`img`,{src:t.qr,alt:t.qrAlt,loading:`lazy`,decoding:`async`},null,8,Ln)]),j(`p`,Rn,M(t.note),1),j(`a`,{href:t.href,class:`poolnode-store-link`,target:`_blank`,rel:`noopener noreferrer`},[e(E(te),{"aria-hidden":`true`}),j(`span`,null,M(t.buttonLabel),1)],8,zn)]))),128))]),j(`div`,Bn,[(I(!0),P(T,null,u(we.value,e=>(I(),P(`article`,{key:e.title,class:`poolnode-feature-card`},[j(`span`,Vn,[(I(),F(d(e.icon),{"aria-hidden":`true`}))]),j(`div`,null,[j(`h3`,null,M(e.title),1),j(`p`,null,M(e.text),1)])]))),128))])])):_(``,!0),D.value?(I(),P(`section`,Hn,[j(`div`,Un,[j(`span`,null,M(L(`downloadKicker`)),1),j(`h2`,Wn,M(L(`downloadTitle`)),1),j(`p`,null,M(L(`downloadDescription`)),1)]),j(`div`,Gn,[j(`div`,Kn,[j(`div`,qn,[e(E(re),{"aria-hidden":`true`}),j(`div`,null,[j(`h3`,null,M(L(`status.title`)),1),j(`p`,null,M(L(`status.description`)),1)])]),j(`article`,Jn,[j(`div`,Yn,[j(`span`,null,M(B.value.label),1),j(`button`,{type:`button`,class:`copy-button`,onClick:n[0]||=e=>mi(B.value)},[X.value===B.value.id?(I(),F(E(ie),{key:0,"aria-hidden":`true`})):(I(),F(E(ne),{key:1,"aria-hidden":`true`})),j(`span`,null,M(X.value===B.value.id?L(`install.copied`):L(`install.copy`)),1)])]),j(`pre`,null,[j(`code`,null,M(B.value.command),1)])]),j(`p`,Xn,M(L(`install.note`)),1)]),j(`div`,Zn,[j(`div`,Qn,[e(E(yt),{"aria-hidden":`true`}),j(`div`,null,[j(`h3`,null,M(L(`script.title`)),1),j(`p`,null,M(L(`script.description`)),1)])]),j(`ul`,$n,[(I(!0),P(T,null,u(V.value,e=>(I(),P(`li`,{key:e.key},[j(`strong`,null,M(e.key),1),j(`span`,null,M(e.text),1)]))),128))])])]),j(`div`,er,[j(`div`,tr,[e(E(re),{"aria-hidden":`true`}),j(`div`,null,[j(`h3`,null,M(L(`command.title`)),1),j(`p`,null,M(L(`command.description`)),1)])]),j(`div`,{class:`cli-command-preview`,"aria-label":L(`command.ariaLabel`)},[(I(!0),P(T,null,u(Te.value,e=>(I(),P(`span`,{key:e},M(e),1))),128))],8,nr)]),j(`div`,rr,[(I(!0),P(T,null,u(Ee.value,e=>(I(),P(`article`,{key:e.title,class:`cli-feature-card`},[j(`span`,ir,[(I(),F(d(e.icon),{"aria-hidden":`true`}))]),j(`div`,null,[j(`h3`,null,M(e.title),1),j(`p`,null,M(e.text),1)])]))),128))])])):_(``,!0),k.value?(I(),P(`section`,ar,[j(`div`,or,[j(`span`,null,M(L(`downloadKicker`)),1),j(`h2`,sr,M(L(`downloadTitle`)),1),j(`p`,null,M(L(`downloadDescription`)),1)]),j(`div`,cr,[j(`form`,{class:`widget-token-panel`,onSubmit:y(gi,[`prevent`])},[j(`div`,lr,[e(E(te),{"aria-hidden":`true`}),j(`div`,null,[j(`h3`,null,M(L(`token.title`)),1),j(`p`,null,M(L(`token.description`)),1)])]),j(`label`,ur,[j(`span`,null,M(L(`token.label`)),1),f(j(`input`,{"onUpdate:modelValue":n[1]||=e=>De.value=e,type:`text`,autocomplete:`off`,autocapitalize:`off`,spellcheck:`false`,placeholder:L(`token.placeholder`)},null,8,dr),[[w,De.value]])]),j(`p`,fr,M(L(`token.hint`)),1),H.value?(I(),P(`p`,pr,M(H.value),1)):U.value?(I(),P(`p`,mr,M(U.value),1)):_(``,!0),j(`button`,{class:`widget-download-button`,type:`submit`,disabled:Oe.value},[e(E(te),{"aria-hidden":`true`}),j(`span`,null,M(Oe.value?L(`token.generating`):L(`token.submit`)),1)],8,hr)],32),j(`aside`,gr,[j(`div`,_r,[e(E($),{"aria-hidden":`true`}),j(`div`,null,[j(`h3`,null,M(L(`privacy.title`)),1),j(`p`,null,M(L(`privacy.description`)),1)])]),j(`ul`,vr,[(I(!0),P(T,null,u(W.value,e=>(I(),P(`li`,{key:e},M(e),1))),128))])])]),j(`div`,yr,[j(`div`,br,[j(`span`,null,M(L(`downloadKicker`)),1),j(`h2`,null,M(L(`features.title`)),1),j(`p`,null,M(L(`features.description`)),1)]),j(`div`,xr,[(I(!0),P(T,null,u(je.value,e=>(I(),P(`article`,{key:e.title,class:`widget-feature-card`},[j(`span`,Sr,[(I(),F(d(e.icon),{"aria-hidden":`true`}))]),j(`div`,null,[j(`h3`,null,M(e.title),1),j(`p`,null,M(e.text),1)])]))),128))])]),j(`div`,Cr,[j(`div`,wr,[j(`span`,null,M(L(`downloadKicker`)),1),j(`h2`,null,M(L(`steps.title`)),1),j(`p`,null,M(L(`steps.description`)),1)]),j(`div`,Tr,[(I(!0),P(T,null,u(Ae.value,e=>(I(),P(`article`,{key:e.key,class:`widget-step-card`},[j(`span`,Er,M(e.number),1),j(`h3`,null,M(e.title),1),j(`p`,null,M(e.text),1)]))),128))])])])):_(``,!0),N.value?(I(),P(`section`,{key:4,class:S([`download-finder`,{"download-finder-rms":b.value}]),"aria-labelledby":`download-finder-title`},[j(`div`,Dr,[j(`div`,null,[j(`h2`,Or,M(L(`finderTitle`)),1),j(`p`,null,M(L(`selectionSummary`,{os:Qe.value,arch:$e.value,version:nt.value})),1)]),j(`a`,{href:ct.value.href,class:`directory-link finder-directory-link`,target:`_blank`,rel:`noopener noreferrer`},[e(E(ht),{"aria-hidden":`true`}),j(`span`,null,M(ct.value.label),1)],8,kr)]),j(`div`,Ar,[j(`label`,jr,[j(`span`,null,M(L(`osLabel`)),1),e(E(Ct),{modelValue:G.value,"onUpdate:modelValue":n[2]||=e=>G.value=e},{default:p(()=>[e(E(kt),{class:`filter-trigger`},{default:p(()=>[e(E(At))]),_:1}),e(E(wt),{class:`download-select-content`},{default:p(()=>[(I(!0),P(T,null,u(Ye.value,e=>(I(),F(E(Et),{key:e.value,class:`download-select-item`,value:e.value},{default:p(()=>[c(M(e.label),1)]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`modelValue`])]),j(`label`,Mr,[j(`span`,null,M(L(`archLabel`)),1),e(E(Ct),{modelValue:K.value,"onUpdate:modelValue":n[3]||=e=>K.value=e},{default:p(()=>[e(E(kt),{class:`filter-trigger`},{default:p(()=>[e(E(At))]),_:1}),e(E(wt),{class:`download-select-content`},{default:p(()=>[(I(!0),P(T,null,u(Ze.value,e=>(I(),F(E(Et),{key:e.value,class:`download-select-item`,value:e.value},{default:p(()=>[c(M(e.label),1)]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`modelValue`])]),b.value?_(``,!0):(I(),P(`label`,Nr,[j(`span`,null,M(L(`versionLabel`)),1),e(E(Ct),{modelValue:q.value,"onUpdate:modelValue":n[4]||=e=>q.value=e,disabled:!tt.value.length},{default:p(()=>[e(E(kt),{class:`filter-trigger`},{default:p(()=>[e(E(At),{placeholder:L(`versionPending`)},null,8,[`placeholder`])]),_:1}),e(E(wt),{class:`download-select-content`},{default:p(()=>[(I(!0),P(T,null,u(tt.value,e=>(I(),F(E(Et),{key:e,class:`download-select-item`,value:e},{default:p(()=>[c(M(e),1)]),_:2},1032,[`value`]))),128))]),_:1})]),_:1},8,[`modelValue`,`disabled`])]))]),j(`div`,Pr,[e(E(_t),{"aria-hidden":`true`}),j(`p`,null,M(L(st.value)),1)]),ot.value.length?(I(),P(`div`,Fr,[j(`div`,Ir,[e(E(re),{"aria-hidden":`true`}),j(`div`,null,[j(`h3`,Lr,M(L(`install.title`)),1),j(`p`,null,M(L(`install.description`,{arch:$e.value})),1)])]),j(`div`,Rr,[(I(!0),P(T,null,u(ot.value,e=>(I(),P(`article`,{key:e.id,class:`install-command`},[j(`div`,zr,[j(`span`,null,M(e.label),1),j(`button`,{type:`button`,class:`copy-button`,onClick:t=>mi(e)},[X.value===e.id?(I(),F(E(ie),{key:0,"aria-hidden":`true`})):(I(),F(E(ne),{key:1,"aria-hidden":`true`})),j(`span`,null,M(X.value===e.id?L(`install.copied`):L(`install.copy`)),1)],8,Br)]),j(`pre`,null,[j(`code`,null,M(e.command),1)])]))),128))])])):_(``,!0),j(`div`,Vr,[j(`div`,Hr,[e(E(te),{"aria-hidden":`true`}),j(`div`,Ur,[j(`h3`,Wr,M(L(`binary.title`)),1),j(`p`,null,M(L(`binary.description`)),1)])]),Y.value||J.value||!rt.value.length?(I(),P(`div`,Gr,[Y.value?(I(),P(`p`,Kr,M(L(`loading`)),1)):J.value?(I(),P(`p`,qr,M(J.value),1)):rt.value.length?_(``,!0):(I(),P(`p`,Jr,M(L(`empty`)),1))])):_(``,!0),rt.value.length?(I(),P(`div`,Yr,[(I(!0),P(T,null,u(rt.value,t=>(I(),P(`article`,{key:t.path,class:`release-row`},[j(`div`,Xr,[j(`span`,null,M(Ot(t)),1),j(`h3`,null,M(t.name),1),j(`p`,null,M(t.path),1)]),j(`a`,{href:t.downloadUrl,class:`download-link`,target:`_blank`,rel:`noopener noreferrer`},[e(E(te),{"aria-hidden":`true`}),j(`span`,null,M(L(`download`)),1)],8,Zr)]))),128))])):_(``,!0)])],2)):_(``,!0),ae.value?(I(),P(`section`,Qr,[j(`div`,$r,[j(`span`,null,M(E(a)(`download.partners.kicker`)),1),j(`h2`,ei,M(E(a)(`download.partners.title`)),1),j(`p`,null,M(E(a)(`download.partners.description`)),1)]),j(`div`,{class:`partner-grid`,"aria-label":E(a)(`download.partners.ariaLabel`)},[(I(),P(T,null,u(z,e=>j(`a`,{key:e.key,href:e.href,class:`partner-card`,target:`_blank`,rel:`noopener noreferrer`},[j(`span`,ri,[j(`img`,{src:e.logo,alt:E(a)(`download.partners.items.${e.key}`),class:`partner-logo`,loading:`lazy`,decoding:`async`},null,8,ii)]),j(`span`,ai,M(E(a)(`download.partners.items.${e.key}`)),1)],8,ni)),64))],8,ti)])):_(``,!0)],2)],2)}}},[[`__scopeId`,`data-v-71101313`]]);export{di as default};