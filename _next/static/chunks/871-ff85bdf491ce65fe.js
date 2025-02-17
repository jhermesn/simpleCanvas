"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{7401:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:d="",children:c,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...i,width:n,height:n,stroke:t,strokeWidth:s?24*Number(a)/Number(n):a,className:l("lucide",d),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),s=(e,r)=>{let t=(0,o.forwardRef)((t,i)=>{let{className:s,...d}=t;return(0,o.createElement)(a,{ref:i,iconNode:r,className:l("lucide-".concat(n(e)),s),...d})});return t.displayName="".concat(e),t}},3565:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},257:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]])},4085:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]])},872:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},2921:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]])},1406:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]])},5686:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},3243:(e,r,t)=>{t.d(r,{A:()=>o});let o=(0,t(7401).A)("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]])},8068:(e,r,t)=>{t.d(r,{s:()=>i,t:()=>l});var o=t(2115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function i(...e){return o.useCallback(l(...e),e)}},2252:(e,r,t)=>{t.d(r,{Q6:()=>V,bL:()=>H,zi:()=>K,CC:()=>T});var o=t(2115);function n(e,[r,t]){return Math.min(t,Math.max(r,e))}function l(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}var i=t(8068),a=t(5155);function s(e,r=[]){let t=[],n=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return n.scopeName=e,[function(r,n){let l=o.createContext(n),i=t.length;t=[...t,n];let s=r=>{let{scope:t,children:n,...s}=r,d=t?.[e]?.[i]||l,c=o.useMemo(()=>s,Object.values(s));return(0,a.jsx)(d.Provider,{value:c,children:n})};return s.displayName=r+"Provider",[s,function(t,a){let s=a?.[e]?.[i]||l,d=o.useContext(s);if(d)return d;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(n,...r)]}function d(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}var c=o.createContext(void 0),u=globalThis?.document?o.useLayoutEffect:()=>{};t(7650);var p=t(2317),f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,l=o?p.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(l,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),m=["PageUp","PageDown"],b=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],h={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},g="Slider",[v,y,w]=function(e){let r=e+"CollectionProvider",[t,n]=s(r),[l,d]=t(r,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:r,children:t}=e,n=o.useRef(null),i=o.useRef(new Map).current;return(0,a.jsx)(l,{scope:r,itemMap:i,collectionRef:n,children:t})};c.displayName=r;let u=e+"CollectionSlot",f=o.forwardRef((e,r)=>{let{scope:t,children:o}=e,n=d(u,t),l=(0,i.s)(r,n.collectionRef);return(0,a.jsx)(p.DX,{ref:l,children:o})});f.displayName=u;let m=e+"CollectionItemSlot",b="data-radix-collection-item",h=o.forwardRef((e,r)=>{let{scope:t,children:n,...l}=e,s=o.useRef(null),c=(0,i.s)(r,s),u=d(m,t);return o.useEffect(()=>(u.itemMap.set(s,{ref:s,...l}),()=>void u.itemMap.delete(s))),(0,a.jsx)(p.DX,{[b]:"",ref:c,children:n})});return h.displayName=m,[{Provider:c,Slot:f,ItemSlot:h},function(r){let t=d(e+"CollectionConsumer",r);return o.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(b,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},n]}(g),[x,k]=s(g,[w]),[S,z]=x(g),j=o.forwardRef((e,r)=>{let{name:t,min:i=0,max:s=100,step:c=1,orientation:u="horizontal",disabled:p=!1,minStepsBetweenThumbs:f=0,defaultValue:h=[i],value:g,onValueChange:y=()=>{},onValueCommit:w=()=>{},inverted:x=!1,form:k,...z}=e,j=o.useRef(new Set),R=o.useRef(0),M="horizontal"===u?C:A,[E=[],P]=function({prop:e,defaultProp:r,onChange:t=()=>{}}){let[n,l]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[n]=t,l=o.useRef(n),i=d(r);return o.useEffect(()=>{l.current!==n&&(i(n),l.current=n)},[n,l,i]),t}({defaultProp:r,onChange:t}),i=void 0!==e,a=i?e:n,s=d(t);return[a,o.useCallback(r=>{if(i){let t="function"==typeof r?r(e):r;t!==e&&s(t)}else l(r)},[i,e,l,s])]}({prop:g,defaultProp:h,onChange:e=>{var r;null===(r=[...j.current][R.current])||void 0===r||r.focus(),y(e)}}),N=o.useRef(E);function D(e,r){let{commit:t}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit:!1},o=(String(c).split(".")[1]||"").length,l=n(function(e,r){let t=Math.pow(10,r);return Math.round(e*t)/t}(Math.round((e-i)/c)*c+i,o),[i,s]);P(function(){var e,o;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,o=[...e];return o[t]=r,o.sort((e,r)=>e-r)}(n,l,r);if(e=i,!(!((o=f*c)>0)||Math.min(...e.slice(0,-1).map((r,t)=>e[t+1]-r))>=o))return n;{R.current=i.indexOf(l);let e=String(i)!==String(n);return e&&t&&w(i),e?i:n}})}return(0,a.jsx)(S,{scope:e.__scopeSlider,name:t,disabled:p,min:i,max:s,valueIndexToChangeRef:R,thumbs:j.current,values:E,orientation:u,form:k,children:(0,a.jsx)(v.Provider,{scope:e.__scopeSlider,children:(0,a.jsx)(v.Slot,{scope:e.__scopeSlider,children:(0,a.jsx)(M,{"aria-disabled":p,"data-disabled":p?"":void 0,...z,ref:r,onPointerDown:l(z.onPointerDown,()=>{p||(N.current=E)}),min:i,max:s,inverted:x,onSlideStart:p?void 0:function(e){let r=function(e,r){if(1===e.length)return 0;let t=e.map(e=>Math.abs(e-r)),o=Math.min(...t);return t.indexOf(o)}(E,e);D(e,r)},onSlideMove:p?void 0:function(e){D(e,R.current)},onSlideEnd:p?void 0:function(){let e=N.current[R.current];E[R.current]!==e&&w(E)},onHomeKeyDown:()=>!p&&D(i,0,{commit:!0}),onEndKeyDown:()=>!p&&D(s,E.length-1,{commit:!0}),onStepKeyDown:e=>{let{event:r,direction:t}=e;if(!p){let e=m.includes(r.key)||r.shiftKey&&b.includes(r.key),o=R.current;D(E[o]+c*(e?10:1)*t,o,{commit:!0})}}})})})})});j.displayName=g;var[R,M]=x(g,{startEdge:"left",endEdge:"right",size:"width",direction:1}),C=o.forwardRef((e,r)=>{let{min:t,max:n,dir:l,inverted:s,onSlideStart:d,onSlideMove:u,onSlideEnd:p,onStepKeyDown:f,...m}=e,[b,g]=o.useState(null),v=(0,i.s)(r,e=>g(e)),y=o.useRef(void 0),w=function(e){let r=o.useContext(c);return e||r||"ltr"}(l),x="ltr"===w,k=x&&!s||!x&&s;function S(e){let r=y.current||b.getBoundingClientRect(),o=G([0,r.width],k?[t,n]:[n,t]);return y.current=r,o(e-r.left)}return(0,a.jsx)(R,{scope:e.__scopeSlider,startEdge:k?"left":"right",endEdge:k?"right":"left",direction:k?1:-1,size:"width",children:(0,a.jsx)(E,{dir:w,"data-orientation":"horizontal",...m,ref:v,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let r=S(e.clientX);null==d||d(r)},onSlideMove:e=>{let r=S(e.clientX);null==u||u(r)},onSlideEnd:()=>{y.current=void 0,null==p||p()},onStepKeyDown:e=>{let r=h[k?"from-left":"from-right"].includes(e.key);null==f||f({event:e,direction:r?-1:1})}})})}),A=o.forwardRef((e,r)=>{let{min:t,max:n,inverted:l,onSlideStart:s,onSlideMove:d,onSlideEnd:c,onStepKeyDown:u,...p}=e,f=o.useRef(null),m=(0,i.s)(r,f),b=o.useRef(void 0),g=!l;function v(e){let r=b.current||f.current.getBoundingClientRect(),o=G([0,r.height],g?[n,t]:[t,n]);return b.current=r,o(e-r.top)}return(0,a.jsx)(R,{scope:e.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:(0,a.jsx)(E,{"data-orientation":"vertical",...p,ref:m,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let r=v(e.clientY);null==s||s(r)},onSlideMove:e=>{let r=v(e.clientY);null==d||d(r)},onSlideEnd:()=>{b.current=void 0,null==c||c()},onStepKeyDown:e=>{let r=h[g?"from-bottom":"from-top"].includes(e.key);null==u||u({event:e,direction:r?-1:1})}})})}),E=o.forwardRef((e,r)=>{let{__scopeSlider:t,onSlideStart:o,onSlideMove:n,onSlideEnd:i,onHomeKeyDown:s,onEndKeyDown:d,onStepKeyDown:c,...u}=e,p=z(g,t);return(0,a.jsx)(f.span,{...u,ref:r,onKeyDown:l(e.onKeyDown,e=>{"Home"===e.key?(s(e),e.preventDefault()):"End"===e.key?(d(e),e.preventDefault()):m.concat(b).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:l(e.onPointerDown,e=>{let r=e.target;r.setPointerCapture(e.pointerId),e.preventDefault(),p.thumbs.has(r)?r.focus():o(e)}),onPointerMove:l(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&n(e)}),onPointerUp:l(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&(r.releasePointerCapture(e.pointerId),i(e))})})}),P="SliderTrack",N=o.forwardRef((e,r)=>{let{__scopeSlider:t,...o}=e,n=z(P,t);return(0,a.jsx)(f.span,{"data-disabled":n.disabled?"":void 0,"data-orientation":n.orientation,...o,ref:r})});N.displayName=P;var D="SliderRange",_=o.forwardRef((e,r)=>{let{__scopeSlider:t,...n}=e,l=z(D,t),s=M(D,t),d=o.useRef(null),c=(0,i.s)(r,d),u=l.values.length,p=l.values.map(e=>W(e,l.min,l.max)),m=u>1?Math.min(...p):0,b=100-Math.max(...p);return(0,a.jsx)(f.span,{"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0,...n,ref:c,style:{...e.style,[s.startEdge]:m+"%",[s.endEdge]:b+"%"}})});_.displayName=D;var O="SliderThumb",$=o.forwardRef((e,r)=>{let t=y(e.__scopeSlider),[n,l]=o.useState(null),s=(0,i.s)(r,e=>l(e)),d=o.useMemo(()=>n?t().findIndex(e=>e.ref.current===n):-1,[t,n]);return(0,a.jsx)(I,{...e,ref:s,index:d})}),I=o.forwardRef((e,r)=>{let{__scopeSlider:t,index:n,name:s,...d}=e,c=z(O,t),p=M(O,t),[m,b]=o.useState(null),h=(0,i.s)(r,e=>b(e)),g=!m||c.form||!!m.closest("form"),y=function(e){let[r,t]=o.useState(void 0);return u(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let r=new ResizeObserver(r=>{let o,n;if(!Array.isArray(r)||!r.length)return;let l=r[0];if("borderBoxSize"in l){let e=l.borderBoxSize,r=Array.isArray(e)?e[0]:e;o=r.inlineSize,n=r.blockSize}else o=e.offsetWidth,n=e.offsetHeight;t({width:o,height:n})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}t(void 0)},[e]),r}(m),w=c.values[n],x=void 0===w?0:W(w,c.min,c.max),k=function(e,r){return r>2?"Value ".concat(e+1," of ").concat(r):2===r?["Minimum","Maximum"][e]:void 0}(n,c.values.length),S=null==y?void 0:y[p.size],j=S?function(e,r,t){let o=e/2,n=G([0,50],[0,o]);return(o-n(r)*t)*t}(S,x,p.direction):0;return o.useEffect(()=>{if(m)return c.thumbs.add(m),()=>{c.thumbs.delete(m)}},[m,c.thumbs]),(0,a.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[p.startEdge]:"calc(".concat(x,"% + ").concat(j,"px)")},children:[(0,a.jsx)(v.ItemSlot,{scope:e.__scopeSlider,children:(0,a.jsx)(f.span,{role:"slider","aria-label":e["aria-label"]||k,"aria-valuemin":c.min,"aria-valuenow":w,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...d,ref:h,style:void 0===w?{display:"none"}:e.style,onFocus:l(e.onFocus,()=>{c.valueIndexToChangeRef.current=n})})}),g&&(0,a.jsx)(L,{name:null!=s?s:c.name?c.name+(c.values.length>1?"[]":""):void 0,form:c.form,value:w},n)]})});$.displayName=O;var L=e=>{let{value:r,...t}=e,n=o.useRef(null),l=function(e){let r=o.useRef({value:e,previous:e});return o.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}(r);return o.useEffect(()=>{let e=n.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(l!==r&&t){let o=new Event("input",{bubbles:!0});t.call(e,r),e.dispatchEvent(o)}},[l,r]),(0,a.jsx)("input",{style:{display:"none"},...t,ref:n,defaultValue:r})};function W(e,r,t){return n(100/(t-r)*(e-r),[0,100])}function G(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}var H=j,T=N,V=_,K=$},2317:(e,r,t)=>{t.d(r,{DX:()=>i});var o=t(2115),n=t(8068),l=t(5155),i=o.forwardRef((e,r)=>{let{children:t,...n}=e,i=o.Children.toArray(t),s=i.find(d);if(s){let e=s.props.children,t=i.map(r=>r!==s?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(a,{...n,ref:r,children:t})});i.displayName="Slot";var a=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t),i=function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props);return t.type!==o.Fragment&&(i.ref=r?(0,n.t)(r,e):e),o.cloneElement(t,i)}return o.Children.count(t)>1?o.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===s}},1027:(e,r,t)=>{t.d(r,{F:()=>i});var o=t(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,i=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:a}=r,s=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],o=null==a?void 0:a[e];if(null===r)return null;let l=n(r)||n(o);return i[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,s,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...d}[r]):({...a,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},3463:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},9795:(e,r,t)=>{t.d(r,{QP:()=>F});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{s(t,o,e,r)}),o},s=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){s(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{s(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,i=e=>{let t;let i=[],a=0,s=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(o||e.slice(d,d+l)===r)){i.push(e.slice(s,d)),s=d+l;continue}if("/"===c){t=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===i.length?e:e.substring(s),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:i,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:t&&t>s?t-s:void 0}};return t?e=>t({className:e,parseClassName:i}):i},m=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},b=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),h=/\s+/,g=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],i=e.trim().split(h),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:s,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?c.substring(0,u):c);if(!f){if(!p||!(f=o(c))){a=r+(a.length>0?" "+a:a);continue}p=!1}let b=m(s).join(":"),h=d?b+"!":b,g=h+f;if(l.includes(g))continue;l.push(g);let v=n(f,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(h+r)}a=r+(a.length>0?" "+a:a)}return a};function v(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,S=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,R=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,M=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>P(e)||S.has(e)||k.test(e),E=e=>K(e,"length",X),P=e=>!!e&&!Number.isNaN(Number(e)),N=e=>K(e,"number",P),D=e=>!!e&&Number.isInteger(Number(e)),_=e=>e.endsWith("%")&&P(e.slice(0,-1)),O=e=>x.test(e),$=e=>z.test(e),I=new Set(["length","size","percentage"]),L=e=>K(e,I,B),W=e=>K(e,"position",B),G=new Set(["image","url"]),H=e=>K(e,G,q),T=e=>K(e,"",U),V=()=>!0,K=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},X=e=>j.test(e)&&!R.test(e),B=()=>!1,U=e=>M.test(e),q=e=>C.test(e);Symbol.toStringTag;let F=function(e,...r){let t,o,n;let l=function(a){return o=(t=b(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=i,i(a)};function i(e){let r=o(e);if(r)return r;let l=g(e,t);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),i=w("borderSpacing"),a=w("borderWidth"),s=w("contrast"),d=w("grayscale"),c=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),m=w("gradientColorStopPositions"),b=w("inset"),h=w("margin"),g=w("opacity"),v=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),S=w("skew"),z=w("space"),j=w("translate"),R=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",O,r],I=()=>[O,r],G=()=>["",A,E],K=()=>["auto",P,O],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],F=()=>["","0",O],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[P,O];return{cacheSize:500,separator:":",theme:{colors:[V],spacing:[A,E],blur:["none","",$,O],brightness:Q(),borderColor:[e],borderRadius:["none","","full",$,O],borderSpacing:I(),borderWidth:G(),contrast:Q(),grayscale:F(),hueRotate:Q(),invert:F(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[_,E],inset:C(),margin:C(),opacity:Q(),padding:I(),saturate:Q(),scale:Q(),sepia:F(),skew:Q(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[$]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),O]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",D,O]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",D,O]}],"grid-cols":[{"grid-cols":[V]}],"col-start-end":[{col:["auto",{span:["full",D,O]},O]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[V]}],"row-start-end":[{row:["auto",{span:[D,O]},O]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,r]}],"min-w":[{"min-w":[O,r,"min","max","fit"]}],"max-w":[{"max-w":[O,r,"none","full","min","max","fit","prose",{screen:[$]},$]}],h:[{h:[O,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,r,"auto","min","max","fit"]}],"font-size":[{text:["base",$,E]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",N]}],"font-family":[{font:[V]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",P,N]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,E]}],"underline-offset":[{"underline-offset":["auto",A,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",L]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},H]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[A,O]}],"outline-w":[{outline:[A,E]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[A,E]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",$,T]}],"shadow-color":[{shadow:[V]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",$,O]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[D,O]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,E,N]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);