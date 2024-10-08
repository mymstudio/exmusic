!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).sober=t()}(this,function(){"use strict";const c=new CSSStyleSheet;c.replaceSync(":host{ user-select: none;-webkit-user-select: none }");var e=a=>{const o=new CSSStyleSheet;o.replaceSync(a.style??"");var e=[];const r={};for(const s in a.props){var t=s.toLowerCase();e.push(t),r[t]=s}const l=new Map;class i extends HTMLElement{static observedAttributes=e;static define(e){customElements.define(e,this)}constructor(){super();var e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=[c,o],e.innerHTML=a.template??"";const i={...a.props},s=a.setup?.apply(this,[e]);for(const n in a.props)Object.defineProperty(this,n,{get:()=>i[n],set:e=>{e=((e,t)=>{if(void 0===e)return t;if("string"==typeof t)return String(e);if("number"==typeof t)return Number(e);if("boolean"==typeof t)return"boolean"==typeof e?e:"true"===e;throw new TypeError})(e,a.props[n]);if(e!==i[n]){if(!0===a.syncProps||a.syncProps?.includes(n)){var t=n.toLowerCase(),o=this.getAttribute(t),r=String(e);if(e===a.props?.[n]&&null!==o)return void this.removeAttribute(t);if(e!==a.props?.[n]&&o!==r)return void this.setAttribute(t,r)}i[n]=e,s?.watches?.[n]?.(e)}}});for(const t in s?.expose)Object.defineProperty(this,t,{get:()=>s?.expose[t]});l.set(this,s)}connectedCallback(){l.get(this)?.mounted?.()}disconnectedCallback(){l.get(this)?.unmounted?.()}adoptedCallback(){l.get(this)?.adopted?.()}attributeChangedCallback(e,t,o){this[r[e]]=o??void 0}}return i};class t extends e({style:`
    :host{
      display: flex;
      height: 64px;
      background: var(--s-color-surface-container, #f0edf1);
      align-items: center;
      position: relative;
      padding: 0 8px;
    }
    ::slotted([slot=navigation]){
      margin-left: 4px;
      flex-shrink: 0;
    }
    ::slotted([slot=logo]){
      margin-left: 12px;
      height: 32px;
      fill: var(--s-color-on-surface-variant, #46464f);
      flex-shrink: 0;
    }
    ::slotted([slot=headline]){
      font-size: 1.375rem;
      font-weight: 400;
      overflow: hidden;
      text-transform: capitalize;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0 12px;
      color: var(--s-color-on-surface, #1c1b1f);
    }
    ::slotted([slot=action]){
      margin: 0 4px;
      flex-shrink: 0;
    }
    .view{
      flex-grow: 1;
      min-width: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }
    ::slotted(s-search){
      background: var(--s-color-surface, #fffbff);
    }
    ::slotted(s-appbar){
      height: 100%;
      width: 100%;
      max-width: 1280px;
      background: none;
      margin: 0 auto;
      padding: 0;
    }
    @media(max-width: 840px){
      :host{
        height: 56px;
      }
    }
    `,template:`
    <slot name="start"></slot>
    <slot name="navigation"></slot>
    <slot name="logo"></slot>
    <slot name="headline"></slot>
    <div class="view" part="view">
      <slot></slot>
    </div>
    <slot name="action"></slot>
    <slot name="end"></slot>
    `,props:{}}){}t.define("s-appbar");class o extends e({style:`
    :host{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 18px;
      height: 18px;
      background: var(--s-color-error, #ba1a1a);
      color: var(--s-color-on-error, #ffffff);
      border-radius: 18px;
      padding: 0 3px;
      font-size: .625rem;
      box-sizing: border-box;
      vertical-align: middle;
    }
    :host(:empty){
      width: 8px;
      height: 8px;
      min-width: auto;
      padding: 0;
    }
    `,template:"<slot></slot>",props:{}}){}o.define("s-badge");const r=matchMedia("(pointer:coarse)"),d=(r.addEventListener("change",({matches:e})=>d.touched=e),{touched:r.matches,addEventListener:e=>r.addEventListener("change",()=>e(d.touched))}),i=document.createElement("div"),p=(i.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none"),e=>{e.appendChild(i);var t=i.getBoundingClientRect();return e.removeChild(i),{left:t.left,top:t.top,width:t.width,height:t.height}});const h=e=>{const t=()=>{e(),document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t)};document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t)};class s extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
      position: relative;
      cursor: pointer;
    }
    :host([attached=true]){
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-radius: inherit;
    }
    .container{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      pointer-events: none;
      overflow: hidden;
      border-radius: inherit;
    }
    .animation {
      background: var(--ripple-color, currentColor);
      border-radius: 50%;
      transition: opacity .8s;
      opacity: var(--ripple-opacity, .24);
      width: var(--size);
      height: var(--size);
      position: absolute;
      transform: translate(-50%, -50%) scale(0);
      left: var(--x);
      top: var(--y);
      box-shadow: 0 0 64px 0 var(--ripple-color, currentColor);
      filter: blur(12px);
    }
    .container::before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: inherit;
      background: var(--ripple-color, currentColor);
      filter: opacity(0) blur(12px);
      transition: filter .12s;
      will-change: filter;
    }
    .container.hover::before{
      filter: opacity(.12);
    }
    `,template:`
    <slot></slot>
    <div class="container" part="container"></div>
    `,props:{centered:!1,attached:!1},syncProps:["attached"],setup(e){const c=e.querySelector(".container"),t=()=>!d.touched&&c.classList.add("hover"),o=()=>!d.touched&&c.classList.remove("hover"),i=(e,t)=>{const o=document.createElement("div");o.className="animation";var{offsetWidth:r,offsetHeight:i}=c;let s=Math.sqrt(r*r+i*i);var n,a,l={x:"50%",y:"50%"},i=(this.centered||({left:n,top:a}=c.getBoundingClientRect(),n=e.clientX-n,e=e.clientY-a,a=i/2,i=r/2,r=2*(Math.abs(a-e)+a),a=2*(Math.abs(i-n)+i),s=Math.sqrt(r*r+a*a),l.x=n+"px",l.y=e+"px"),o.setAttribute("style",`--size: ${s}px;--x: ${l.x};--y: ${l.y};`),()=>o.isConnected&&c.removeChild(o)),r=(o.addEventListener("transitionend",i,{once:!0}),o.addEventListener("transitioncancel",i,{once:!0}),()=>o.style.opacity="0");if(c.appendChild(o),o.animate([{transform:"translate(-50%, -50%) scale(0)"},{transform:"translate(-50%, -50%) scale(1)"}],{duration:800,fill:"forwards",easing:"cubic-bezier(.2, .9, .1, .9)"}),!t)return h(r);window.getComputedStyle(o).top,r()},r=e=>{if("mouse"===e.pointerType)return i(e);let t=!1;const o=()=>clearTimeout(r),r=setTimeout(()=>{i(e,t),document.removeEventListener("pointermove",o)},80);h(()=>t=!0),document.addEventListener("pointermove",o,{once:!0})},s=e=>{0===e.button&&r(e)};let n=this;const a=()=>{(n=this.attached?this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode:this)?.addEventListener("mouseover",t),n?.addEventListener("mouseleave",o),n?.addEventListener("wheel",o,{passive:!0}),n?.addEventListener("pointerdown",s)},l=()=>{n?.removeEventListener("mouseover",t),n?.removeEventListener("mouseleave",o),n?.removeEventListener("wheel",o),n?.removeEventListener("pointerdown",s)};return{mounted:a,unmounted:l,watches:{attached:()=>{l(),a()}}}}}){}s.define("s-ripple");class n extends e({style:`
    :host{
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: inline-flex;
      vertical-align: middle;
      border-radius: 20px;
      padding: 0 24px;
      height: 40px;
      text-transform: capitalize;
      position: relative;
      cursor: pointer;
      font-size: .875rem;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      background: var(--s-color-primary, #5256a9);
      color: var(--s-color-on-primary, #ffffff);
      transition: box-shadow .12s;
      overflow: hidden;
    }
    :host([disabled=true]){
      pointer-events: none !important;
      background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
      color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
    }
    :host([type=elevated]){
      background: var(--s-color-surface-container-low, #f6f2f7);
      color: var(--s-color-primary, #5256a9);
      box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
    }
    :host([type=elevated][disabled=true]){
      box-shadow: none !important;
    }
    :host([type=filled-tonal]){
      background: var(--s-color-secondary-container, #e2e0f9);
      color: var(--s-color-on-secondary-container, #191a2c);
    }
    :host([type=outlined]){
      border: solid 1px var(--s-color-outline, #777680);
      background: none;
      color: var(--s-color-primary, #5256a9);
    }
    :host([type=outlined][disabled=true]){
      background: none !important;
      border-color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
    }
    :host([type=text]){
      background: none;
      color: var(--s-color-primary, #5256a9);
      padding: 0 16px;
    }
    :host([type=text][disabled=true]){
      background: none !important;
    }
    .ripple{
      border-radius: 0;
    }
    ::slotted(*){
      color: inherit;
      width: 18px;
      height: 18px;
    }
    ::slotted(s-icon[slot=start]){
      margin: 0 4px 0 -8px;
    }
    ::slotted(s-icon[slot=end]){
      margin: 0 -8px 0 4px;
    }
    ::slotted(s-circular-progress[slot=start]){
      margin: 0 8px 0 -8px;
    }
    ::slotted(s-circular-progress[slot=end]){
      margin: 0 -8px 0 8px;
    }
    :host([type=text]) ::slotted(s-icon[slot=start]){
      margin: 0 4px 0 -4px;
    }
    :host([type=text]) ::slotted(s-icon[slot=end]){
      margin: 0 -4px 0 4px;
    }
    @media (pointer: coarse){
      :host([type=elevated]:active){
        box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
      }
      :host(:active){
        box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
      }
      :host([type=filled-tonal]:active),
      :host([type=outlined]:active),
      :host([type=text]:active){
        box-shadow: none;
      }
    }
    @media (pointer: fine){
      :host([type=elevated]:hover){
        box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
      }
      :host(:hover){
        box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
      }
      :host([type=filled-tonal]:hover),
      :host([type=outlined]:hover),
      :host([type=text]:hover){
        box-shadow: none;
      }
    }
    `,template:`
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
    `,props:{disabled:!1,type:"filled"},syncProps:!0}){}n.define("s-button");class a extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
      background: var(--s-color-surface-container-low, #f6f2f7);
      box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .1));
      border-radius: 12px;
      position: relative;
      font-size: .875rem;
      box-sizing: border-box;
      max-width: 280px;
      color: var(--s-color-on-surface, #1c1b1f);
      overflow: hidden;
    }
    :host([type=filled]){
      background: var(--s-color-surface-container-highest, #e5e1e6);
      box-shadow: none;
    }
    :host([type=outlined]){
      background: var(--s-color-surface, #fffbff);
      border: solid 1px var(--s-color-outline-variant, #c7c5d0);
      box-shadow: none;
    }
    :host([clickable=true]){
      cursor: pointer;
      transition: box-shadow .12s;
    }
    :host([clickable=true]) .ripple{
      display: block;
    }
    .action{
      display: flex;
      justify-content: flex-end;
    }
    .ripple{
      display: none;
      border-radius: 0;
    }
    ::slotted([slot=image]){
      display: block;
      height: 128px;
      background: var(--s-color-surface-container-high, #eae7ec);
    }
    ::slotted([slot=headline]){
      font-size: 1.5rem;
      line-height: 1.6;
      margin: 16px 16px 0 16px;
    }
    ::slotted([slot=subhead]){
      font-size: 1rem;
      line-height: 1.6;
      margin: 4px 16px;
    }
    ::slotted([slot=text]){
      line-height: 1.6;
      margin: 8px 16px;
      color: var(--s-color-on-surface-variant, #46464f);
    }
    ::slotted(s-button[slot=action]){
      margin: 16px 4px;
    }
    ::slotted(s-button[slot=action]:last-of-type){
      margin-right: 16px;
    }
    @media (pointer: fine){
      :host([clickable=true][type=filled]:hover),
      :host([clickable=true][type=outlined]:hover){
        box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .1));
      }
      :host([clickable=true]:hover){
        box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
      }
    }
    `,template:`
    <slot name="start"></slot>
    <slot name="image"></slot>
    <slot name="headline"></slot>
    <slot name="subhead"></slot>
    <slot name="text"></slot>
    <slot></slot>
    <div class="action" part="action">
      <slot name="action"></slot>
    </div>
    <slot name="end"></slot>
    <s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
    `,props:{type:"elevated",clickable:!1},syncProps:!0,setup(e){e.querySelector("slot[name=action]").addEventListener("pointerdown",e=>e.stopPropagation())}}){}a.define("s-card");class l extends e({style:`
    :host{
      display: block;
      height: 280px;
      background: var(--s-color-surface-container-low, #f6f2f7);
      border-radius: 8px;
      position: relative;
      color: var(--s-color-primary, #5256a9);
      overflow: hidden;
      max-width: 480px;
    }
    .container{
      display: flex;
      justify-content: flex-start;
      height: 100%;
      transition: transform .24s;
    }
    .dot{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .dot>.item{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--s-color-secondary-container, #e2e0f9);
      flex-shrink: 0;
      margin: 16px 4px;
      cursor: pointer;
      pointer-events: auto;
    }
    .dot>.checked{
      background: currentColor;
      opacity: 1;
    }
    ::slotted(*){
      display: block;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    `,template:`
    <div class="container" part="container">
      <slot></slot>
    </div>
    <div class="dot" part="dot-container"></div>
    `,props:{duration:4e3},setup(e){const t=e.querySelector(".container"),s=e.querySelector(".dot"),n=e.querySelector("slot");let a=0,l=0,o=0;const r=()=>{t.style.transform=`translateX(-${100*a}%)`,s.querySelector(".checked")?.classList.remove("checked"),s.children[a]?.classList.add("checked")},c=()=>{clearInterval(o),r(),0!==l&&(o=setInterval(()=>{var e=a+1;a=e===l?0:e,r()},this.duration))};return n.addEventListener("slotchange",()=>{s.innerHTML="";var e=n.assignedElements(),t=document.createDocumentFragment();for(const r in e){var o=document.createElement("div");const i=Number(r);o.className=0===i?"item checked":"item",o.setAttribute("part","dot"),o.addEventListener("click",()=>{a=i,c()}),t.appendChild(o)}l=e.length,s.appendChild(t),a=0,c()}),{mounted:c,unmounted:()=>clearInterval(o),watches:{duration:c}}}}){}l.define("s-carousel");const v={indeterminate:"M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",uncheck:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z",checked:"m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"};var f=`
    <svg class="icon color" viewBox="0 -960 960 960">
      <path d="${v.uncheck}"></path>
    </svg>
    <s-ripple class="color" attached="true" part="ripple"></s-ripple>
    `;class u extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      width: 40px;
      aspect-ratio: 1;
      border-radius: 50%;
      color: var(--s-color-primary, #5256a9);
    }
    :host([disabled=true]){
      pointer-events: none !important;
    }
    .icon{
      width: 60%;
      height: 60%;
      fill: currentColor;
    }
    .color{
      color: var(--s-color-on-surface-variant, #46464f);
    }
    :host([checked=true]) .color,
    :host([indeterminate=true]) .color{
      color: currentColor;
    }
    :host([disabled=true]) .color{
      color: color-mix(in srgb ,var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
    }
    `,template:f,props:{disabled:!1,checked:!1,indeterminate:!1},syncProps:!0,setup(e){const t=e.querySelector("path");return this.addEventListener("click",()=>{if(this.indeterminate)return this.indeterminate=!1;this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{watches:{indeterminate:e=>t.setAttribute("d",e?v.indeterminate:this.checked?v.checked:v.uncheck),checked:e=>!this.indeterminate&&t.setAttribute("d",e?v.checked:v.uncheck)}}}}){}u.define("s-checkbox");class m extends e({style:`
    :host{
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      padding: 0 16px;
      height: 32px;
      border: solid 1px var(--s-color-color-outline, #777680);
      border-radius: 8px;
      box-sizing: border-box;
      white-space: nowrap;
      font-size: .875rem;
      position: relative;
      cursor: pointer;
      overflow: hidden;
    }
    :host([type=elevated]){
      border: none;
      box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
    }
    :host([type=filled-tonal]){
      background: var(--s-color-secondary-container, #e2e0f9);
      color: var(--s-color-on-surface-variant, #46464f);
      border: none;
    }
    .ripple{
      display: none;
      border-radius: 0;
    }
    :host([clickable=true]) .ripple{
      display: block;
    }
    ::slotted(*){
      width: 18px;
      height: 18px;
    }
    ::slotted([slot=start]){
      margin: 0 8px 0 -8px;
    }
    ::slotted([slot=end]){
      margin: 0 -8px 0 8px;
    }
    ::slotted(s-icon-button[slot=action]){
      margin: 0 -12px 0 8px;
      width: 24px;
      height: 24px;
      padding: 3px;
      flex-shrink: 0;
    }
    `,template:`
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <slot name="action"></slot>
    <s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
    `,props:{type:"outlined",clickable:!1},syncProps:!0,setup(e){e.querySelector("slot[name=action]").addEventListener("pointerdown",e=>e.stopPropagation())}}){}m.define("s-chip");const x=44*Math.PI;f=`
    <div class="container known">
      <svg viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${x}px;">
        <circle class="track block" cx="24" cy="24" r="22" style="stroke-width: 4px" />
        <circle class="indicator block" cx="24" cy="24" r="22" style="stroke-dashoffset: ${x}px;stroke-width: 4px" />
      </svg>
    </div>
    <div class="container unknown">
      <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${x}px;">
        <circle transform="rotate(-90, 24, 24)" cx="24" cy="24" r=" 22" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: 4px"></circle>
      </svg>
    </div>
    `;class g extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
      position: relative;
      width: 48px;
      aspect-ratio: 1;
      color: var(--s-color-primary, #5256a9);
    }
    :host([animated=true]) .known .block{
      transition: stroke-dashoffset .24s, transform .24s;
    }
    :host([indeterminate=true]) .known,
    .unknown{
      display: none;
    }
    :host([indeterminate=true]) .unknown,
    .known{
      display: block;
    }
    .container{
      width: 100%;
      height: 100%;
      border-radius: inherit;
      position: relative;
    }
    svg{
      height: inherit;
      width: inherit;
      stroke: currentColor;
    }
    circle{
      stroke-linecap: round;
      fill: none;
      stroke-dasharray: var(--dasharray);
    }
    .track{
      stroke: var(--s-color-secondary-container, #e2e0f9);
    }
    @keyframes stroke{
      0% { stroke-dashoffset: var(--dasharray) }
      50% { stroke-dashoffset: calc(var(--dasharray) / 4) }
      100% { stroke-dashoffset: var(--dasharray) }
    }
    @keyframes stroke-rotate{
      0% { transform: rotate(0deg) }
      12.5% { transform: rotate(0deg) }
      25% {transform: rotate(270deg)}
      37.5% {transform: rotate(270deg)}
      50% {transform: rotate(540deg)}
      62.5% {transform: rotate(540deg)}
      75% {transform: rotate(810deg)}
      87.5% {transform: rotate(810deg)}
      100% { transform: rotate(1080deg) }
      100% { transform: rotate(1080deg) }
    }
    @keyframes rotate{
      0% { transform: rotate(0deg) }
      100% { transform: rotate(360deg) }
    }
    .unknown{
      animation: rotate 1568ms linear infinite;
    }
    `,template:f,props:{indeterminate:!1,animated:!1,max:100,value:0},syncProps:["indeterminate","animated"],setup(e){const r=e.querySelector(".known .track"),i=e.querySelector(".known .indicator");e=()=>{var e=Math.min(this.value,this.max)/this.max*100,t=x-x*(e/100),o=e/100*360;r.style.strokeDashoffset=`${0==e?0:Math.min(16+x-t,x)}px`,r.setAttribute("transform",`rotate(${20+o}, 24, 24)`),i.style.strokeDashoffset=t+"px"};return{watches:{max:e,value:e}}}}){}g.define("s-circular-progress");class b extends e({style:`
    :host{
      display: block;
      overflow: auto;
    }
    @media (pointer: fine){
      :host::-webkit-scrollbar{
        width: 6px;
        height: 6px;
        background: transparent;
      }
      :host::-webkit-scrollbar-thumb{
        background: var(--s-color-outline-variant, #c7c5d0);
        border-radius: 3px;
      }
      @supports not selector(::-webkit-scrollbar){
        :host{
          scrollbar-color: var(--s-color-outline-variant, #c7c5d0) transparent;
        }
      }
    }
    `,template:"<slot></slot>",props:{}}){}b.define("s-scroll-view");class y extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
    }
    .wrapper{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: var(--z-index, 2);
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .scrim{
      background: var(--s-color-scrim, #000000);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: opacity(0);
      transition: filter .24s, backdrop-filter .24s;
      pointer-events: none;
    }
    .wrapper.show .scrim{
      filter: opacity(.8);
      backdrop-filter: blur(12px);
      pointer-events: auto;
    }
    .container{
      max-width: calc(100% - 48px);
      max-height: calc(100% - 48px);
      width: 520px;
      height: calc-size(auto);
      background: var(--s-color-surface-container-highest, #e5e1e6);
      position: relative;
      border-radius: 28px;
      box-shadow: var(--s-elevation-level5, 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12));
      display: flex;
      flex-direction: column;
      overflow: hidden;
      visibility: hidden;
      transition: width .24s, height .24s, border-radius .24s;
    }
    .wrapper.show .container{
      pointer-events: auto;
      visibility: visible;
    }
    :host([size=full]) .container{
      width: 100%;
      height: 100%;
      border-radius: 0;
      max-width: none;
      max-height: none;
    }
    ::slotted([slot=headline]){
      padding: 24px 24px 0 24px;
      font-size: 1.5rem;
      line-height: 1.6;
      font-weight: 600;
      color: var(--s-color-on-surface, #1c1b1f);
      flex-shrink: 0;
    }
    .text{
      user-select: text;
      -webkit-user-select: text;
      flex-grow: 1;
    }
    ::slotted([slot=text]){
      margin: 16px 24px;
      line-height: 1.6;
    }
    .action{
      display: flex;
      justify-content: flex-end;
      padding: 0 14px;
      flex-shrink: 0;
    }
    ::slotted(s-button[slot=action]){
      min-width: 72px;
      margin: 20px 2px;
    }
    :host([size=full]) ::slotted([slot=text]),
    :host([size=full]) ::slotted(:not([slot])){
      max-width: none;
    }
    ::slotted(*){
      --z-index: calc(var(--z-index, 2) + 1);
    }
    `,template:`
    <slot name="trigger"></slot>
    <div class="wrapper" part="wrapper">
      <div class="scrim" part="scrim"></div>
      <div class="container" part="container">
        <slot name="headline"></slot>
        <s-scroll-view class="text" part="view">
          <slot></slot>
          <slot name="text"></slot>
        </s-scroll-view>
        <div class="action" part="action">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
    `,props:{size:"basic"},syncProps:["size"],setup(t){var e=t.querySelector("slot[name=trigger]");const o=t.querySelector(".wrapper"),r=t.querySelector(".container"),i=t.querySelector(".scrim");var s=t.querySelector("slot[name=action]"),n=()=>{var e=p(t);0===e.top&&0===e.left||(e=`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-e.top}px;left: ${0-e.left}px`,i.setAttribute("style",e),o.setAttribute("style",e)),o.classList.add("show"),r.animate([{transform:"scale(.9)",filter:"opacity(0)",visibility:"visible"},{transform:"scale(1)",filter:"opacity(1)",visibility:"visible"}],{duration:240}).addEventListener("finish",()=>this.dispatchEvent(new Event("showed"))),this.dispatchEvent(new Event("show"))},a=()=>{o.classList.remove("show"),r.animate([{transform:"scale(1)",filter:"opacity(1)",visibility:"visible"},{transform:"scale(.9)",filter:"opacity(0)",visibility:"visible"}],{duration:240}).addEventListener("finish",()=>this.dispatchEvent(new Event("dismissed"))),this.dispatchEvent(new Event("dismiss"))};return e.addEventListener("click",n),i.addEventListener("click",a),s.addEventListener("click",a),{expose:{show:n,dismiss:a}}}}){static show=e=>{let t=document.body;const o=new y;var r=document.body.firstElementChild;if(r&&"S-PAGE"===r.tagName&&(t=r),"string"==typeof e){var r=document.createElement("div");r.slot="text",r.textContent=e,o.appendChild(r)}else{e.root&&(t=e.root),e.headline&&((r=document.createElement("div")).slot="headline",r.textContent=e.headline,o.appendChild(r)),e.text&&((r=document.createElement("div")).slot="text",r.textContent=e.text,o.appendChild(r)),e.view&&("function"==typeof e.view?e.view(o):o.appendChild(e.view));for(const s of e.actions??[]){var i=document.createElement("s-button");i.slot="action",i.type="text",i.textContent=s.text,s.click&&i.addEventListener("click",s.click),o.appendChild(i)}}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()}}y.define("s-dialog");class w extends e({style:`
    :host{
      display: block;
      height: 1px;
      background: var(--s-color-outline-variant, #c7c5d0);
      margin: 0 16px;
    }
    `,template:"<slot></slot>",props:{}}){}w.define("s-divider");class k extends e({style:`
    :host{
      display: block;
      height: 100%;
    }
    .container{
      display: flex;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    .scrim{
      background: var(--s-color-scrim, #000000);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: opacity(0);
      transition: filter .24s, backdrop-filter .24s;
      pointer-events: none;
    }
    .start,
    .end{
      min-width: 0;
      height: 100%;
      width: 0;
      overflow: hidden;
      flex-shrink: 0;
    }
    .show-start>.start,
    .show-end>.end{
      width: auto;
    }
    .start{
      order: -1;
    }
    ::slotted(:not([slot])){
      flex-grow: 1;
      min-width: 0;
    }
    ::slotted([slot=start]),
    ::slotted([slot=end]){
      width: 280px;
      display: flow-root;
      flex-shrink: 0;
      background: var(--s-color-surface-container-low, #f6f2f7);
      border-color: var(--s-color-surface-container-high, #eae7ec);
      border-width: 1px;
      height: 100%;
      box-sizing: border-box;
      position: relative;
      white-space: nowrap;
    }
    ::slotted([slot=start]){
      border-right-style: solid;
    }
    ::slotted([slot=end]){
      border-left-style: solid;
    }
    .folded>.start,
    .folded>.end{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      visibility: hidden;
      display: flex;
    }
    .folded>.end{
      justify-content: flex-end;
    }
    .folded ::slotted([slot=start]),
    .folded ::slotted([slot=end]){
      pointer-events: auto;
      max-width: 75%;
      border-style: none;
      box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
      white-space: normal;
    }
    .folded.show-fold-start>.scrim,
    .folded.show-fold-end>.scrim{
      filter: opacity(.8);
      backdrop-filter: blur(12px);
      pointer-events: auto;
    }
    .folded.show-fold-start>.start,
    .folded.show-fold-end>.end{
      visibility: visible;
    }
    `,template:`
    <div class="container show-start show-end" part="container">
      <slot></slot>
      <div class="scrim" part="scrim"></div>
      <div class="start" part="start">
        <slot name="start"></slot>
      </div>
      <div class="end" part="end">
        <slot name="end"></slot>
      </div>
    </div>
    `,props:{fold:840},setup(e){const i=e.querySelector(".container");var t=e.querySelector(".scrim");const s={start:e.querySelector(".start"),end:e.querySelector(".end"),startSlot:e.querySelector("slot[name=start]"),endSlot:e.querySelector("slot[name=end]")},n={start:null,end:null},a=240,r=(e="start",t)=>{var t=void 0===t?i.classList.contains("folded"):t,o=t?"show-fold-"+e:"show-"+e;i.classList.contains(o)||(i.classList.add(o),o=n[e]?.offsetWidth??0,t=t?[{transform:`translateX(${"start"===e?-1*o:o}px)`},{transform:"translateX(0px)"}]:[{width:0},{width:o+"px"}],s[e].animate(t,{duration:a}))},l=(e="start",t)=>{var o,t=void 0===t?i.classList.contains("folded"):t,r=t?"show-fold-"+e:"show-"+e;i.classList.contains(r)&&(o=n[e]?.offsetWidth??0,i.classList.remove(r),r=t?[{transform:"translateX(0px)",visibility:"visible"},{transform:`translateX(${"start"===e?-1*o:o}px)`,visibility:"visible"}]:[{width:o+"px"},{width:0}],s[e].animate(r,{duration:a}))};return new ResizeObserver(()=>this.offsetWidth<this.fold?i.classList.add("folded"):i.classList.remove("folded")).observe(this),t.addEventListener("click",()=>{l("start"),l("end")}),s.startSlot.addEventListener("slotchange",()=>n.start=s.startSlot.assignedElements()[0]),s.endSlot.addEventListener("slotchange",()=>n.end=s.endSlot.assignedElements()[0]),{expose:{show:r,dismiss:l,toggle:(e="start",t)=>{var o=(void 0===t?i.classList.contains("folded"):t)?"show-fold-"+e:"show-"+e;(i.classList.contains(o)?l:r)(e,t)}}}}}){}k.define("s-drawer");class A extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
      text-align: start;
    }
    .wrapper{
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      overflow: hidden;
    }
    .scrim{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .show .scrim{
      pointer-events: auto;
    }
    .container{
      position: absolute;
      pointer-events: none;
      white-space: nowrap;
      opacity: 0;
    }
    .show .container{
      pointer-events: auto;
      opacity: 1;
    }
    ::slotted(*:not([slot])){
      border-radius: 8px;
       box-shadow: 0px 8px 40px 4px rgba(100, 100, 111, 0.16);
      max-height: 100vh;
    backdrop-filter: blur(24px);
       margin-top: 30px;
    background-color: #ffffff52;
    
      
    }
    `,template:`
    <div id="trigger" part="trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="wrapper" part="wrapper">
      <div class="scrim" part="scrim"></div>
      <div class="container" part="container">
        <slot></slot>
      </div>
    </div>
    `,props:{showAlign:"center"},setup(e){const s=e.querySelector("#trigger"),n=e.querySelector(".wrapper");var t=e.querySelector(".scrim");const a=e.querySelector(".container"),r=(t,o,r)=>{if(this.isConnected&&!n.classList.contains("show")){var i=p(e),i=(0===i.top&&0===i.left||n.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-i.top}px;left: ${0-i.left}px`),{top:0,left:0,origin:[]});if("number"==typeof t&&o&&(i.top=o,i.left=t,i.origin=r?r.split(" "):["left","top"],t+a.offsetWidth>innerWidth&&(i.left=t-a.offsetWidth,i.origin[0]="right"),o+a.offsetHeight>innerHeight)&&(i.top=o-a.offsetHeight,i.origin[1]="bottom"),void 0===t||t instanceof HTMLElement){r=(t||s).getBoundingClientRect(),o=a.offsetWidth,t=a.offsetHeight;i.origin=["center","top"],i.top=r.y+r.height,i.left=r.x-(o-r.width)/2;let e={left:{value:r.x,origin:"left"},right:{value:r.x+r.width-o,origin:"right"},top:{value:r.top-t,origin:"bottom"}};"left"===this.showAlign&&(i.origin[0]="right",i.left=r.x-o,i.top=r.y,e={left:{value:r.x+r.width,origin:"left"},right:{value:i.left,origin:i.origin[0]},top:{value:r.y+r.height-t,origin:"bottom"}}),"right"===this.showAlign&&(i.origin[0]="left",i.left=r.x+r.width,i.top=r.y,e={left:{value:i.left,origin:i.origin[0]},right:{value:r.x-o,origin:"right"},top:{value:r.y+r.height-t,origin:"bottom"}}),i.left<0&&(i.origin[0]=e.left.origin,i.left=e.left.value),i.left+o>innerWidth&&(i.origin[0]=e.right.origin,i.left=Math.max(e.right.value,0)),i.top+t>innerHeight&&(i.origin[1]=e.top.origin,i.top=Math.max(e.top.value,0))}a.style.transformOrigin=i.origin.join(" "),a.style.top=i.top+"px",a.style.left=i.left+"px",n.classList.add("show"),a.animate([{transform:"scale(.9)",opacity:0},{transform:"scale(1)",opacity:1}],{duration:120}),this.dispatchEvent(new Event("show"))}},i=()=>{this.isConnected&&n.classList.contains("show")&&(n.classList.remove("show"),a.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.9)",opacity:0}],{duration:120}),this.dispatchEvent(new Event("dismiss")))};return s.addEventListener("click",()=>r()),t.addEventListener("pointerdown",i),{expose:{show:r,dismiss:i,toggle:(e,t,o)=>{this.isConnected&&(n.classList.contains("show")?i():r(e,t,o))}},mounted:()=>addEventListener("resize",i),unmounted:()=>removeEventListener("resize",i)}}}){}A.define("s-popup");class _ extends e({style:`
    :host{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      aspect-ratio: 1;
      width: 56px;
      border-radius: 28px;
      background: var(--s-color-primary-container, #e1e0ff);
      color: var(--s-color-on-primary-container, #090764);
      transition: box-shadow .12s;
      font-size: .875rem;
      font-weight: 500;
      white-space: nowrap;
      line-height: 1;
      text-transform: capitalize;
      box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
    }
    :host([size=small]){
      width: 48px;
      border-radius: 24px;
    }
    :host([extended=true]){
      padding: 0 16px;
      aspect-ratio: auto;
      width: auto;
      height: 48px;
      border-radius: 24px;
    }
    ::slotted(s-icon){
      color: inherit;
    }
    ::slotted(s-icon[slot=start]){
      margin: 0 8px 0 0;
    }
    ::slotted(s-icon[slot=end]){
      margin: 0 0 0 8px;
    }
    @media (pointer: coarse){
      :host(:active){
        box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
      }
    }
    @media (pointer: fine){
      :host(:hover){
        box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
      }
    }
    `,template:`
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <s-ripple attached="true" part="ripple"></s-ripple>
    `,props:{size:"medium",extended:!1},syncProps:!0}){}_.define("s-fab");class N extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 50%;
      width: 40px;
      aspect-ratio: 1;
      color: var(--s-color-on-surface-variant, #46464f);
      position: relative;
      box-sizing: border-box;
    }
    :host([disabled=true]){
      pointer-events: none !important;
      color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
    }
    :host([type=filled]){
      background: var(--s-color-primary, #5256a9);
      color: var(--s-color-on-primary, #ffffff);
    }
    :host([type=filled][disabled=true]){
      background: color-mix(in srgb ,var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
    }
    :host([type=filled]) ::slotted(s-badge[slot=badge]){
      outline: solid 2px currentColor;
    }
    :host([type=filled-tonal]){
      background: var(--s-color-secondary-container, #e2e0f9);
      color: var(--s-color-on-secondary-container, #191a2c);
    }
    :host([type=filled-tonal][disabled=true]){
      background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
    }
    :host([type=outlined]){
      border: solid 1px var(--s-color-outline, #777680)
    }
    :host([type=outlined][disabled=true]){
      border-color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f)) !important;
    }
    .ripple{
      border-radius: inherit;
    }
    .badge{
      position: absolute;
      top: -4px;
      right: -4px;
      width: 50%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ::slotted(:not([slot=badge])){
      color: inherit;
    }
    `,template:`
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
    <div class="badge">
      <slot name="badge"></slot>
    </div>
    `,props:{disabled:!1,type:"standard"},syncProps:!0}){}N.define("s-icon-button");const E={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"};f=`
    <slot>
      <svg viewBox="0 -960 960 960">
        <path d="${E.none}"></path>
      </svg>
    </slot>
    `;class B extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      width: 24px;
      aspect-ratio: 1;
      color: var(--s-color-on-surface-variant, #46464f);
      fill: currentColor;
      box-sizing: border-box;
    }
    svg{
      width: 100%;
      height: 100%;
    }
    ::slotted(*){
      width: 100%;
      height: 100%;
    }
    `,template:f,props:{type:"none"},syncProps:["type"],setup(e){const o=e.querySelector("path");return{watches:{type:e=>{let t=E[e];"object"==typeof t?(o.setAttribute("transform",`rotate(${t.angle} 480 -480)`),t=E[t.name]):o.removeAttribute("transform"),o.setAttribute("d",t)}}}}}){}B.define("s-icon");class O extends e({style:`
    :host{
      display: block;
      height: 4px;
      color: var(--s-color-primary, #5256a9);
      border-radius: 2px;
      overflow: hidden;
    }
    :host([animated=true]) .known>.block{
      transition: transform .24s;
    }
    :host([indeterminate=true]) .known,
    .unknown{
      display: none;
    }
    :host([indeterminate=true]) .unknown,
    .known{
      display: flex;
    }
    .container{
      height: 100%;
      border-radius: inherit;
      position: relative;
    }
    .block{
      position: absolute;
      height: 100%;
      border-radius: inherit;
      width: 100%;
      left: 0;
      top: 0;
    }
    .track{
      background: var(--s-color-secondary-container, #e2e0f9);
    }
    .indicator{
      background: currentColor;
    }
    .indicator-dot{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      aspect-ratio: 1;
      background: currentColor;
      border-radius: inherit;
    }
    @keyframes unknown{
      0%{
        transform: translateX(0);
      }
      100%{
        transform: translateX(150%);
      }
    }
    .unknown{
      justify-content: flex-end;
      gap: 4px;
      animation: unknown 2s linear infinite;
    }
    .unknown .block{
      position: static;
      flex-grow: 1;
      width: 100%;
      flex-shrink: 0;
    }
    .unknown .indicator{
      width: 50%;
    }
    `,template:`
    <div class="container known" part="container">
      <div class="track block" style="transform: translateX(0%)" part="track"></div>
      <div class="indicator-dot" part="indicator-dot"></div>
      <div class="indicator block" style="transform: translateX(-100%)" part="indicator"></div>
    </div>
    <div class="container unknown" part="container">
      <div class="track block" part="track"></div>
      <div class="indicator block" part="indicator"></div>
      <div class="track block" part="indicator"></div>
    </div>
    `,props:{indeterminate:!1,animated:!1,max:100,value:0},syncProps:["indeterminate","animated"],setup(e){const t=e.querySelector(".known>.track"),o=e.querySelector(".known>.indicator");e=()=>{var e=Math.min(this.value,this.max)/this.max*100;t.style.transform=`translateX(calc(${e}% + ${0==e?0:4}px))`,o.style.transform=`translateX(${e-100}%)`};return{watches:{max:e,value:e}}}}){}O.define("s-linear-progress");class q extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
      font-size: .875rem;
      color: var(--s-color-on-surface, #1c1b1f);
    }
    .popup{
      display: block;
    }
    .container{
      padding: 8px 0;
      min-height: auto;
      box-sizing: border-box;
    }
    ::slotted(s-popup-menu){
      display: block;
    }
    ::slotted(s-popup-menu[group=start]){
      border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
      margin-top: 8px;
      padding-top: 8px;
    }
    ::slotted(s-popup-menu[group=end]){
      border-bottom: solid 1px var(--s-color-outline-variant, #c7c5d0);
      margin-bottom: 8px;
      padding-bottom: 8px;
    }
    `,template:`
    <s-popup class="popup">
      <slot slot="trigger" name="trigger"></slot>
      <s-scroll-view class="container" part="container">
        <slot></slot>
      </s-scroll-view>
    </s-popup>
    `,props:{group:""},syncProps:["group"],setup(e){const t=e.querySelector(".popup");e=e.querySelector("slot[name=trigger]");const o=t.show.bind(t),r=t.dismiss.bind(t);var i=t.toggle.bind(t);return e.addEventListener("click",e=>{e.stopPropagation(),o()}),this.addEventListener("menu-item:click",e=>{e.stopPropagation(),r()}),{mounted:()=>{this.parentNode instanceof q&&t.setAttribute("showalign","right")},expose:{show:o,dismiss:r,toggle:i}}}}){}class W extends e({style:`
    :host{
      display: block;
      height: 44px;
    }
    .container{
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      position: relative;
    }
    .text{
      flex-grow: 1;
      padding: 0 16px;
    }
    ::slotted([slot=start]){
      flex-shrink: 0;
      margin-left: 16px;
      margin-right: -4px;
    }
    ::slotted([slot=end]){
      flex-shrink: 0;
      margin-right: 8px;
    }
    `,template:`
    <s-ripple class="container" part="container">
      <slot name="start"></slot>
      <div class="text" part="text">
        <slot></slot>
      </div>
      <slot name="end"></slot>
    </s-ripple>
    `,props:{},setup(e){e.querySelector(".container").addEventListener("click",()=>this.dispatchEvent(new Event("menu-item:click",{bubbles:!0})))}}){}q.define("s-popup-menu"),W.define("s-popup-menu-item");class L extends e({style:`
    :host{
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background: var(--s-color-surface, #fffbff);
      box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
      position: relative;
    }
    :host([mode=rail]){
      flex-direction: column;
      justify-content: flex-start;
      width: 80px;
      box-shadow: none;
      height: 100%;
      background: none;
    }
    ::slotted(s-navigation-item){
      height: 64px;
    }
    :host([mode=rail]) ::slotted(s-navigation-item){
      height: 72px;
    }
    :host([mode=rail]) ::slotted(s-icon-button[slot=start]){
      width: 56px;
      height: 56px;
      margin: 16px 0 8px 0;
      border-radius: 12px;
    }
    :host([mode=rail]) ::slotted([slot=end]){
      flex-grow: 1;
    }
    `,template:`
    <slot name="start"></slot>
    <slot id="slot"></slot>
    <slot name="end"></slot>
    `,props:{mode:"bottom"},syncProps:!0,setup(e){const o=e.querySelector("#slot");let r=[],i=-1,s=!1;const n=e=>{if(0===r.length||!e.selected)return i=-1;for(const t of r)t!==e&&t.selected&&t.removeAttribute("selected");i=r.indexOf(e),s&&(this.dispatchEvent(new Event("change")),s=!1)};return o.addEventListener("slotchange",()=>{let t=null;i=-1,r=o.assignedElements().filter(e=>{if(e instanceof S)return e.selected&&(t=e),!0}),t&&n(t)}),this.addEventListener("navigation-item:update",e=>{e.stopPropagation(),n(e.target)}),this.addEventListener("navigation-item:change",e=>{e.stopPropagation(),s=!0}),{expose:{get options(){return r},get selectedIndex(){return i}}}}}){}class S extends e({style:`
    :host{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      font-size: .75rem;
      font-weight: 500;
      box-sizing: border-box;
      width: 100%;
      max-width: 80px;
      text-transform: capitalize;
      color: var(--s-color-on-surface-variant, #46464f);
      transition: color .12s;
    }
    :host([selected=true]){
      color: var(--s-color-primary, #5256a9);
    }
    .icon{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      width: 48px;
      border-radius: 14px;
    }
    .icon::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      left: 0;
      top: 0;
      transform: scale(0);
      transition: transform .12s;
      background: var(--s-color-secondary-container, #e2e0f9);
    }
    :host([selected=true]) .icon::before{
      transform: scale(1);
    }
    .badge{
      position: absolute;
      top: 0;
      left: 50%;
      width: 24px;
      display: flex;
      justify-content: center;
      transform: translateY(-20%);
    }
    ::slotted([slot=icon]){
      position: relative;
      pointer-events: none;
      color: inherit;
    }
    ::slotted([slot=text]){
      position: relative;
      pointer-events: none;
      margin-top: 4px;
    }
    `,template:`
    <div class="icon" part="icon">
      <slot name="icon"></slot>
      <div class="badge" part="badge">
        <slot name="badge"></slot>
      </div>
    </div>
    <slot name="text"></slot>
    <s-ripple attached="true" class="ripple" part="ripple"></s-ripple>
    `,props:{selected:!1},syncProps:!0,setup(){return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof L&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0)}),{watches:{selected:()=>{this.parentNode instanceof L&&this.dispatchEvent(new Event("navigation-item:update",{bubbles:!0}))}}}}}){}L.define("s-navigation"),S.define("s-navigation-item");class Y extends e({style:"\n:host{\n  display: flow-root;\n  color: var(--s-color-on-background);\n  background: var(--s-color-background);\n  font-family: Roboto, system-ui;\n  height: 100%;\n  --s-color-scrim: #000000;\n\n  --s-color-primary: #5256a9;\n  --s-color-on-primary: #ffffff;\n  --s-color-primary-container: #e1e0ff;\n  --s-color-on-primary-container: #090764;\n  --s-color-secondary: #5d5d72;\n  --s-color-on-secondary: #ffffff;\n  --s-color-secondary-container: #e2e0f9;\n  --s-color-on-secondary-container: #191a2c;\n  --s-color-tertiary: #79536a;\n  --s-color-on-tertiary: #ffffff;\n  --s-color-tertiary-container: #ffd8ed;\n  --s-color-on-tertiary-container: #2e1125;\n  --s-color-error: #ba1a1a;\n  --s-color-on-error: #ffffff;\n  --s-color-error-container: #ffdad6;\n  --s-color-on-error-container: #410002;\n  --s-color-background: #fffbff;\n  --s-color-on-background: #1c1b1f;\n  --s-color-outline: #777680;\n  --s-color-outline-variant: #c7c5d0;\n  --s-color-surface: #fffbff;\n  --s-color-on-surface:#1c1b1f;\n  --s-color-surface-variant: #e4e1ec;\n  --s-color-on-surface-variant: #46464f;\n  --s-color-inverse-surface: #313034;\n  --s-color-inverse-on-surface: #f3eff4;\n  --s-color-inverse-primary: #c0c1ff;\n  --s-color-surface-container: #f0edf1;\n  --s-color-surface-container-high: #eae7ec;\n  --s-color-surface-container-highest: #e5e1e6;\n  --s-color-surface-container-low: #f6f2f7;\n  --s-color-surface-container-lowest: #ffffff;\n\n  --s-color-dark-primary: #c0c1ff;\n  --s-color-dark-on-primary: #222578;\n  --s-color-dark-primary-container: #3a3d8f;\n  --s-color-dark-on-primary-container: #e1e0ff;\n  --s-color-dark-secondary: #c5c4dd;\n  --s-color-dark-on-secondary: #2e2f42;\n  --s-color-dark-secondary-container: #454559;\n  --s-color-dark-on-secondary-container: #e2e0f9;\n  --s-color-dark-tertiary: #e8b9d4;\n  --s-color-dark-on-tertiary: #46263b;\n  --s-color-dark-tertiary-container: #5f3c52;\n  --s-color-dark-on-tertiary-container: #ffd8ed;\n  --s-color-dark-error: #ffb4ab;\n  --s-color-dark-on-error: #690005;\n  --s-color-dark-error-container: #93000a;\n  --s-color-dark-on-error-container: #ffb4ab;\n  --s-color-dark-background: #1c1b1f;\n  --s-color-dark-on-background: #e5e1e6;\n  --s-color-dark-outline: #918f9a;\n  --s-color-dark-outline-variant: #46464f;\n  --s-color-dark-surface: #1c1b1f;\n  --s-color-dark-on-surface:#e5e1e6;\n  --s-color-dark-surface-variant: #46464f;\n  --s-color-dark-on-surface-variant: #c7c5d0;\n  --s-color-dark-inverse-surface: #e5e1e6;\n  --s-color-dark-inverse-on-surface: #313034;\n  --s-color-dark-inverse-primary: #5256a9;\n  --s-color-dark-surface-container: #201f23;\n  --s-color-dark-surface-container-high: #2a292d;\n  --s-color-dark-surface-container-highest: #353438;\n  --s-color-dark-surface-container-low: #1c1b1f;\n  --s-color-dark-surface-container-lowest: #0e0e11;\n\n  --s-elevation-level1: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  --s-elevation-level2: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);\n  --s-elevation-level3: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);\n  --s-elevation-level4: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);\n  --s-elevation-level5: 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12);\n}\n:host([theme=dark]){\n  \n  --s-color-primary: var(--s-color-dark-primary) !important;\n  --s-color-on-primary: var(--s-color-dark-on-primary) !important;\n  --s-color-primary-container: var(--s-color-dark-primary-container) !important;\n  --s-color-on-primary-container: var(--s-color-dark-on-primary-container) !important;\n  --s-color-secondary: var(--s-color-dark-secondary) !important;\n  --s-color-on-secondary: var(--s-color-dark-on-secondary) !important;\n  --s-color-secondary-container: var(--s-color-dark-secondary-container) !important;\n  --s-color-on-secondary-container: var(--s-color-dark-on-secondary-container) !important;\n  --s-color-tertiary: var(--s-color-dark-tertiary) !important;\n  --s-color-on-tertiary: var(--s-color-dark-on-tertiary) !important;\n  --s-color-tertiary-container: var(--s-color-dark-tertiary-container) !important;\n  --s-color-on-tertiary-container: var(--s-color-dark-on-tertiary-container) !important;\n  --s-color-error: var(--s-color-dark-error) !important;\n  --s-color-on-error: var(--s-color-dark-on-error) !important;\n  --s-color-error-container: var(--s-color-dark-error-container) !important;\n  --s-color-on-error-container: var(--s-color-dark-on-error-container) !important;\n  --s-color-background: var(--s-color-dark-background) !important;\n  --s-color-on-background: var(--s-color-dark-on-background) !important;\n  --s-color-outline: var(--s-color-dark-outline) !important;\n  --s-color-outline-variant: var(--s-color-dark-outline-variant) !important;\n  --s-color-surface: var(--s-color-dark-surface) !important;\n  --s-color-on-surface: var(--s-color-dark-on-surface) !important;\n  --s-color-surface-variant: var(--s-color-dark-surface-variant) !important;\n  --s-color-on-surface-variant: var(--s-color-dark-on-surface-variant) !important;\n  --s-color-inverse-surface: var(--s-color-dark-inverse-surface) !important;\n  --s-color-inverse-on-surface: var(--s-color-dark-inverse-on-surface) !important;\n  --s-color-inverse-primary: var(--s-color-dark-inverse-primary) !important;\n  --s-color-surface-container: var(--s-color-dark-surface-container) !important;\n  --s-color-surface-container-high: var(--s-color-dark-surface-container-high) !important;\n  --s-color-surface-container-highest: var(--s-color-dark-surface-container-highest) !important;\n  --s-color-surface-container-low: var(--s-color-dark-surface-container-low) !important;\n  --s-color-surface-container-lowest: var(--s-color-dark-surface-container-lowest) !important;\n\n}\n@media (prefers-color-scheme: dark){\n  :host([theme=auto]){\n    \n  --s-color-primary: var(--s-color-dark-primary) !important;\n  --s-color-on-primary: var(--s-color-dark-on-primary) !important;\n  --s-color-primary-container: var(--s-color-dark-primary-container) !important;\n  --s-color-on-primary-container: var(--s-color-dark-on-primary-container) !important;\n  --s-color-secondary: var(--s-color-dark-secondary) !important;\n  --s-color-on-secondary: var(--s-color-dark-on-secondary) !important;\n  --s-color-secondary-container: var(--s-color-dark-secondary-container) !important;\n  --s-color-on-secondary-container: var(--s-color-dark-on-secondary-container) !important;\n  --s-color-tertiary: var(--s-color-dark-tertiary) !important;\n  --s-color-on-tertiary: var(--s-color-dark-on-tertiary) !important;\n  --s-color-tertiary-container: var(--s-color-dark-tertiary-container) !important;\n  --s-color-on-tertiary-container: var(--s-color-dark-on-tertiary-container) !important;\n  --s-color-error: var(--s-color-dark-error) !important;\n  --s-color-on-error: var(--s-color-dark-on-error) !important;\n  --s-color-error-container: var(--s-color-dark-error-container) !important;\n  --s-color-on-error-container: var(--s-color-dark-on-error-container) !important;\n  --s-color-background: var(--s-color-dark-background) !important;\n  --s-color-on-background: var(--s-color-dark-on-background) !important;\n  --s-color-outline: var(--s-color-dark-outline) !important;\n  --s-color-outline-variant: var(--s-color-dark-outline-variant) !important;\n  --s-color-surface: var(--s-color-dark-surface) !important;\n  --s-color-on-surface: var(--s-color-dark-on-surface) !important;\n  --s-color-surface-variant: var(--s-color-dark-surface-variant) !important;\n  --s-color-on-surface-variant: var(--s-color-dark-on-surface-variant) !important;\n  --s-color-inverse-surface: var(--s-color-dark-inverse-surface) !important;\n  --s-color-inverse-on-surface: var(--s-color-dark-inverse-on-surface) !important;\n  --s-color-inverse-primary: var(--s-color-dark-inverse-primary) !important;\n  --s-color-surface-container: var(--s-color-dark-surface-container) !important;\n  --s-color-surface-container-high: var(--s-color-dark-surface-container-high) !important;\n  --s-color-surface-container-highest: var(--s-color-dark-surface-container-highest) !important;\n  --s-color-surface-container-low: var(--s-color-dark-surface-container-low) !important;\n  --s-color-surface-container-lowest: var(--s-color-dark-surface-container-lowest) !important;\n\n  }\n}\n",template:"<slot></slot>",props:{theme:"light"},syncProps:["theme"]}){}Y.define("s-page");class T extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
      font-size: .875rem;
      --border-radius: 4px;
      --border-color: var(--s-color-outline, #777680);
      --border-width: 1px;
      --padding: 16px;
      --height: 48px;
    }
    :host([disabled=true]){
      pointer-events: none;
      opacity: .38;
    }
    .trigger{
      display: flex;
      height: var(--height);
      cursor: pointer;
      border-radius: var(--border-radius);
      position: relative;
    }
    .trigger::before,
    .trigger::after{
      content: '';
      height: 100%;
      width: var(--border-radius);
      border: solid var(--border-width) var(--border-color);
      box-sizing: border-box;
      flex-shrink: 0;
    }
    .trigger::before{
      border-right: none;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    .trigger::after{
      border-left: none;
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    .text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin: 0 calc(var(--border-radius) * -1);
    }
    .text::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: var(--border-radius);
      width: calc(100%  - (var(--border-radius)*2));
      border-bottom: solid var(--border-width) var(--border-color);
    }
    .content{
      display: flex;
      flex-direction: column;
      height: 100%;
      pointer-events: none;
    }
    .content>.value{
      height: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      padding: 0 var(--padding);
      margin-right: 12px;
      color: var(--s-color-on-surface, #1c1b1f);
    }
    .content>.label{
      transform: translateY(-100%);
      height: 100%;
      flex-shrink: 0;
      display: flex;
      margin: 0 var(--border-radius);
    }
    .content>.label::before,
    .content>.label::after{
      content: '';
      border-top: solid var(--border-width) var(--border-color);
    }
    .content>.label::after{
      flex-grow: 1;
    }
    .content>.label>span{
      height: 100%;
      display: flex;
      align-items: center;
      border-top: solid var(--border-width) var(--border-color);
      transition: transform .12s;
      padding: 0 calc(var(--padding) - var(--border-radius) + 12px) 0 calc(var(--padding) - var(--border-radius));
      color: var(--border-color);
    }
    .content>.value:not(:empty)+.label>span{
      transform: translateY(-50%) scale(.8571428571428571);
      border-top: none;
      padding: 0;
    }
    .content>.value:not(:empty)+.label::before{
      width: calc(var(--padding) - var(--border-radius));
    }
    .content>.value:not(:empty)+.label::after{
      min-width: calc(var(--padding) - var(--border-radius));
    }
    svg{
      width: 24px;
      height: 24px;
      fill: var(--s-color-on-surface, #1c1b1f);
      padding: 2px;
      box-sizing: border-box;
      flex-shrink: 0;
      position: absolute;
      right: calc(var(--padding) - 12px);
    }
    .container{
      padding: 8px 0;
      max-height: 324px;
      box-sizing: border-box;
    }
    `,template:`
    <s-popup class="popup">
      <slot name="trigger" slot="trigger">
        <div class="trigger" part="trigger">
          <div class="text">
            <div class="content">
              <div class="value"></div>
              <div class="label">
                <span></span>
              </div>
            </div>
            <svg viewBox="0 -960 960 960" slot="end">
              <path d="M480-360 280-560h400L480-360Z"></path>
            </svg>
          </div>
          <s-ripple attached="true" part="ripple"></s-ripple>
        </div>
      </slot>
      <s-scroll-view class="container" part="container">
        <slot id="slot"></slot>
      </s-scroll-view>
    </s-popup>
    `,props:{disabled:!1,label:""},syncProps:["disabled"],setup(e){const o=e.querySelector(".popup"),t=e.querySelector(".container"),r=e.querySelector("#slot"),i=e.querySelector(".label>span"),s=e.querySelector(".value");let n=[],a=-1,l=!1;const c=e=>{if(0!==n.length&&e.selected){for(const t of n)t!==e&&t.selected&&t.removeAttribute("selected");a=n.indexOf(e),s.textContent=""===n[a]?.value?n[a].textContent:n[a].value,l&&(this.dispatchEvent(new Event("change")),l=!1,o.dismiss())}else s.textContent="",a=-1};return o.addEventListener("show",()=>{var e;-1!==a&&(e=n[a])&&t.scrollTo({top:e.offsetTop-t.offsetTop-t.offsetHeight/2+e.offsetHeight/2})}),r.addEventListener("slotchange",()=>{let t=null;a=-1,n=r.assignedElements().filter(e=>{if(e instanceof z)return e.selected&&(t=e),!0}),t&&c(t)}),this.addEventListener("picker-item:update",e=>{e.stopPropagation(),c(e.target)}),this.addEventListener("picker-item:change",e=>{e.stopPropagation(),l=!0}),{watches:{label:e=>{i.textContent=e}},expose:{get options(){return n},get selectedIndex(){return a},show:o.show.bind(o),toggle:o.toggle.bind(o),dismiss:o.dismiss.bind(o)}}}}){}class z extends e({style:`
    :host{
      display: flex;
      height: 44px;
      align-items: center;
      position: relative;
      cursor: pointer;
      padding: 0 16px;
    }
    :host([selected=true]){
      background: var(--s-color-secondary-container, #e5e1e6);
      color: var(--s-color-on-secondary-container, #1c1b1f);
      pointer-events: none;
    }
    ::slotted([slot=start]){
      flex-shrink: 0;
      margin-left: -4px;
      margin-right: 4px;
      color: inherit;
    }
    ::slotted([slot=end]){
      flex-shrink: 0;
      margin-right: -4px;
      margin-left: 4px;
      color: inherit;
    }
    `,template:`
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <s-ripple part="ripple" attached="true" ></s-ripple>
    `,props:{selected:!1,value:""},syncProps:["selected"],setup(){return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof T&&this.dispatchEvent(new Event("picker-item:change",{bubbles:!0})),this.selected=!0)}),{watches:{selected:()=>{this.parentNode instanceof T&&this.dispatchEvent(new Event("picker-item:update",{bubbles:!0}))}}}}}){}T.define("s-picker"),z.define("s-picker-item");const C={uncheck:"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",checked:"M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"};f=`
    <svg class="icon color" viewBox="0 -960 960 960">
      <path d="${C.uncheck}"></path>
    </svg>
    <s-ripple class="color" attached="true" part="ripple"></s-ripple>
    `;class I extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 40px;
      aspect-ratio: 1;
      border-radius: 50%;
      position: relative;
      color: var(--s-color-primary, #5256a9);
    }
    :host([disabled=true]){
      pointer-events: none;
    }
    .icon{
      width: 60%;
      height: 60%;
      fill: currentColor;
    }
    .color{
      color: var(--s-color-on-surface-variant, #46464f);
    }
    :host([checked=true]) .color,
    :host([indeterminate=true]) .color{
      color: currentColor;
    }
    :host([disabled=true]) .color{
      color: color-mix(in srgb ,var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
    }
    `,template:f,props:{disabled:!1,checked:!1,name:""},syncProps:!0,setup(e){const t=e.querySelector("path");return this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(e=>{e!==this&&(e.checked=!1)}),this.dispatchEvent(new Event("change"))}),{watches:{checked:e=>t.setAttribute("d",e?C.checked:C.uncheck)}}}}){}I.define("s-radio-button");f={readOnly:!1,max:10,min:0,value:5,step:1};class X extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      font-size: 24px;
      position: relative;
      overflow: hidden;
      width: calc(1em * 5);
      --rate-unchecked-color: var(--s-color-secondary-container, #e2e0f9);
      --rate-checked-color: var(--s-color-primary, #5256a9);
    }
    .unchecked{
      width: 100%;
      display: flex;
    }
    .unchecked svg,
    ::slotted([slot=unchecked]){
      fill: var(--rate-unchecked-color);
      filter: drop-shadow(1em 0 0 var(--rate-unchecked-color)) drop-shadow(2em 0 0 var(--rate-unchecked-color)) drop-shadow(3em 0 0 var(--rate-unchecked-color));
    }
    .checked{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 50%;
      overflow: hidden;
      display: flex;
    }
    .checked svg,
    ::slotted([slot=checked]){
      fill: var(--rate-checked-color);
      filter: drop-shadow(1em 0 0 var(--rate-checked-color)) drop-shadow(2em 0 0 var(--rate-checked-color)) drop-shadow(3em 0 0 var(--rate-checked-color));
    }
    svg,
    ::slotted(*){
      height: 1em;
      width: 1em;
      flex-shrink: 0;
    }
    input{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      margin: 0;
    }
    :host([readonly=true]) input{
      display: none;
    }
    `,template:`
    <div class="unchecked" part="unchecked">
      <slot name="unchecked">
        <svg viewBox="0 -960 960 960">
          <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
        </svg>
      </slot>
    </div>
    <div class="checked" part="checked">
      <slot name="checked">
        <svg viewBox="0 -960 960 960">
          <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
        </svg>
      </slot>
    </div>
    <input
      type="range"
      max="${f.max}"
      min="${f.min}"
      step="${f.step}"
      value="${f.value}"
    />
    `,props:f,syncProps:["readOnly"],setup(e){const t=e.querySelector(".checked"),o=e.querySelector("input"),r=()=>{var e=100*(Number(o.value)-this.min)/this.max-this.min;t.style.width=e+"%"};return o.addEventListener("change",()=>this.dispatchEvent(new Event("change"))),o.addEventListener("input",()=>{r(),this.dispatchEvent(new Event("input"))}),{watches:{max:e=>{e=String(e);o.max!==e&&(o.max=e,r())},min:e=>{e=String(e);o.min!==e&&(o.min=e,r())},step:e=>{e=String(e);o.step!==e&&(o.step=e,r())},value:e=>{e=String(e);o.value!==e&&(o.value=e,r())}}}}}){}X.define("s-rate");class R extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      max-width: 520px;
      min-width: 240px;
      height: 48px;
      background: var(--s-color-surface-container-high, #eae7ec);
      color: var(--s-color-on-surface, #1c1b1f);
      border-radius: 24px;
      font-size: .875rem;
      position: relative;
    }
    :host([size=small]){
      height: 40px;
      min-width: 196px;
      border-radius: 20px;
    }
    :host([size=large]){
      height: 56px;
      min-width: 280px;
      font-size: 1rem;
      border-radius: 28px;
    }
    .container{
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      flex-grow: 1;
    }
    :host(:focus-within) .container{
      z-index: 1;
    }
    .dropdown{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      pointer-events: none;
      background: inherit;
      box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
      border-radius: 12px;
      opacity: 0;
      transition: opacity .12s;
    }
    :host(:focus-within) .dropdown{
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    }
    ::slotted([slot=dropdown]){
      border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
      margin-top: 48px;
      border-radius: 12px;
    }
    :host([size=small]:focus-within) ::slotted([slot=dropdown]){
      margin-top: 40px;
    }
    :host([size=large]:focus-within) ::slotted([slot=dropdown]){
      margin-top: 56px;
    }
    ::slotted(input[type=text]){
      border: none;
      padding: 0 16px;
      height: 100%;
      width: 100%;
      flex-grow: 1;
      background: none;
      outline: none;
      font-size: inherit;
      color: inherit;
      box-sizing: border-box;
      line-height: 1;
      font-family: inherit;
    }
    ::slotted(input[type=text])::placeholder{
      color: var(--s-color-outline, #777680);
    }
    :host([size=large]) ::slotted(input[type=text]){
      padding: 0 24px;
    }
    ::slotted([slot]){
      flex-shrink: 0;
    }
    ::slotted(s-icon[slot=start]){
      margin: 0 -6px 0 12px;
    }
    ::slotted(s-icon[slot=end]){
      margin: 0 12px 0 -6px;
    }
    :host([size=small]) ::slotted(s-icon-button[slot=start]),
    :host([size=small]) ::slotted(s-icon-button[slot=end]){
      width: 40px;
      height: 40px;
    }
    ::slotted(s-icon-button[slot=start]){
      margin: 0 -12px 0 4px;
    }
    ::slotted(s-icon-button[slot=end]){
      margin: 0 4px 0 -12px;
    }
    :host([size=small]) ::slotted(s-icon-button[slot=start]){
      margin: 0 -12px 0 0;
    }
    :host([size=small]) ::slotted(s-icon-button[slot=end]){
      margin: 0 0 0 -12px;
    }
    :host([size=small]) ::slotted(s-icon[slot=start]){
      margin: 0 -6px 0 8px;
    }
    :host([size=small]) ::slotted(s-icon[slot=end]){
      margin: 0 8px 0 -6px;
    }
    :host([size=large]) ::slotted(s-icon-button[slot=start]){
      margin: 0 -16px 0 8px;
    }
    :host([size=large]) ::slotted(s-icon-button[slot=end]){
      margin: 0 8px 0 -16px;
    }
    :host([size=large]) ::slotted(s-icon[slot=start]){
      margin: 0 -8px 0 16px;
    }
    :host([size=large]) ::slotted(s-icon[slot=end]){
      margin: 0 16px 0 -8px;
    }
    `,template:`
    <div class="dropdown" part="dropdown">
      <slot name="dropdown"></slot>
    </div>
    <div class="container" part="container">
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    </div>
    `,props:{size:"medium"},syncProps:!0,setup(e){e.querySelector("[name=dropdown]").addEventListener("mousedown",e=>e.preventDefault())}}){}R.define("s-search");class P extends e({style:`
    :host{
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      border: solid 1px var(--s-color-outline, #777680);
      border-radius: 20px;
      height: 40px;
      overflow: hidden;
    }
    `,template:"<slot></slot>",props:{},setup(e){const o=e.querySelector("slot");let r=[],i=-1,s=!1;const n=e=>{if(0===r.length||!e.selected)return i=-1;for(const t of r)t!==e&&t.selected&&t.removeAttribute("selected");i=r.indexOf(e),s&&(this.dispatchEvent(new Event("change")),s=!1)};return o.addEventListener("slotchange",()=>{let t=null;i=-1,r=o.assignedElements().filter(e=>{if(e instanceof Z)return e.selected&&(t=e),!0}),t&&n(t)}),this.addEventListener("segmented-button-item:update",e=>{e.stopPropagation(),n(e.target)}),this.addEventListener("segmented-button-item:change",e=>{e.stopPropagation(),s=!0}),{expose:{get options(){return r},get selectedIndex(){return i}}}}}){}class Z extends e({style:`
    :host{
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--s-color-on-surface, #1c1b1f);
      height: 100%;
      min-width: 48px;
      padding: 0 16px;
      text-transform: capitalize;
      font-weight: 500;
      font-size: .875rem;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      border-left: solid 1px var(--s-color-outline, #777680);
    }
    :host(:first-child){
      border-left-color: transparent;
      margin-left: -1px;
    }
    :host([selected=true]){
      background: var(--s-color-secondary-container, #e2e0f9);
      color: var(--s-color-on-secondary-container, #191a2c);
    }
    :host([disabled=true]){
      pointer-events: none;
      color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent);
    }
    ::slotted(s-icon){
      width: 18px;
      height: 18px;
      color: inherit;
      flex-shrink: 0;
    }
    ::slotted(s-icon[slot=start]){
      margin-right: 4px;
    }
    ::slotted(s-icon[slot=end]){
      margin-right: 4px;
    }
    `,template:`
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
    <s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
    `,props:{selected:!1,disabled:!1,selectable:!0},syncProps:["selected","disabled"],setup(){return this.addEventListener("click",()=>{!this.selectable||this.selected||(this.parentNode instanceof P&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0)}),{watches:{selected:()=>{this.parentNode instanceof P&&this.dispatchEvent(new Event("segmented-button-item:update",{bubbles:!0}))}}}}}){}P.define("s-segmented-button"),Z.define("s-segmented-button-item");class D extends e({style:`
    :host{
      display: inline-block;
      vertical-align: middle;
    }
    .wrapper{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: var(--z-index, 2);
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .scrim{
      background: var(--s-color-scrim, #000000);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: opacity(0);
      transition: filter .24s, backdrop-filter .24s;
      pointer-events: none;
    }
    .wrapper.show .scrim{
      filter: opacity(.8);
      backdrop-filter: blur(12px);
      pointer-events: auto;
    }
    .container{
      position: relative;
      border-radius: 24px 24px 0 0;
      box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
      max-width: 520px;
      width: 100%;
      max-height: calc(100% - 56px);
      background: var(--s-color-surface-container-highest, #e5e1e6);
      display: flex;
      flex-direction: column;
      visibility: hidden;
    }
    .show.wrapper .container{
      visibility: visible;
      pointer-events: auto;
    }
    .drag{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 0;
    }
    .drag::before{
      content: '';
      width: 40px;
      height: 4px;
      border-radius: 2px;
      background: var(--s-color-on-surface-variant, #46464f);
      opacity: .4;
    }
    ::slotted(s-scroll-view){
      flex-grow: 1;
      min-height: 280px;
    }
    `,template:`
    <slot name="trigger"></slot>
    <div class="wrapper" part="wrapper">
      <div class="scrim" part="scrim"></div>
      <div class="container" part="container">
        <div class="drag" part="drag"></div>
        <slot></slot>
    </div>
    </div>
    `,props:{},setup(e){var t=e.querySelector("slot[name=trigger]");const o=e.querySelector(".wrapper");var r=e.querySelector(".scrim");const i=e.querySelector(".container");var e=()=>{o.classList.add("show"),i.animate([{transform:"translateY(100%)",visibility:"visible"},{transform:"translateY(0%)",visibility:"visible"}],{duration:240})},s=()=>{o.classList.remove("show"),i.animate([{transform:"translateY(0%)",visibility:"visible"},{transform:"translateY(100%)",visibility:"visible"}],{duration:240})};return t.addEventListener("click",e),r.addEventListener("click",s),{expose:{show:e,dismiss:s}}}}){}D.define("s-bottom-sheet");f={disabled:!1,labeled:!1,ranged:!1,max:100,min:0,step:1,value:0,valueStart:0,valueEnd:0};class F extends e({style:`
    :host{
      display: block;
      color: var(--s-color-primary, #5256a9);
      height: 16px;
      cursor: pointer;
      position: relative;
    }
    :host([disabled=true]){
      pointer-events: none;
      color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
    }
    .container{
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      pointer-events: none;
    }
    .track,
    .indicator{
      height: 4px;
      border-radius: 2px;
      position: absolute;
      right: 0;
    }
    .track{
      background: var(--s-color-secondary-container, #e2e0f9);
      width: calc(100% - 20px);
    }
    :host([disabled=true]) .track{
      background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
    }
    .indicator{
      left: 0;
      width: 0;
      background: currentColor;
    }
    .handle{
      position: relative;
      height: 16px;
      width: 16px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
    }
    .thumb{
      position: relative;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background: currentColor;
      box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
    }
    .thumb::before{
      content: '';
      position: absolute;
      left: -10px;
      top: -10px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: color-mix(in srgb, currentColor 20%, transparent);
      transform: scale(0);
      transition: transform .12s;
    }
    .active .thumb::before{
      transform: scale(1);
    }
    .label{
      position: absolute;
      bottom: 100%;
      margin-bottom: 12px;
      background: var(--s-color-inverse-surface, #313034);
      color: var(--s-color-inverse-on-surface, #f3eff4);
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      padding: 0 6px;
      height: 24px;
      font-size: .75rem;
      transform: scale(0);
      transform-origin: center bottom;
      transition: transform .12s;
      opacity: .85;
      z-index: 1;
      display: none;
    }
    .active .label{
      transform: scale(1);
    }
    :host([labeled=true]) .label{
      display: flex;
    }
    input{
      margin: 0;
      height: 100%;
      width: 100%;
      cursor: inherit;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
    `,template:`
    <div class="container" part="container">
      <div class="indicator" part="indicator"></div>
      <div class="track" part="track"></div>
      <div class="handle" part="handle">
        <div class="thumb" part="thumb"></div>
        <div class="label" part="label"></div>
      </div>
    </div>
    <input
      type="range"
      max="${f.max}"
      min="${f.min}"
      step="${f.step}"
      value="${f.value}"
    />
    `,props:f,syncProps:["disabled","labeled","ranged"],setup(e){const t=e.querySelector(".container"),o=e.querySelector(".indicator"),r=e.querySelector(".track"),i=e.querySelector(".handle"),s=e.querySelector(".label"),n=e.querySelector("input"),a=()=>{var e=Number(n.value),t=100*(e-this.min)/this.max-this.min;i.style.left=`calc(${t}% - ${.16*t}px)`,o.style.width=`calc(${t}% - ${4+.16*t}px)`,r.style.width=`calc(${100-t}% - ${20-.16*t}px)`,s.textContent=String(e)};return n.addEventListener("change",()=>this.dispatchEvent(new Event("change"))),n.addEventListener("input",()=>{this.value=Number(n.value),this.dispatchEvent(new Event("input"))}),n.addEventListener("mousedown",e=>0===e.button&&!d.touched&&t.classList.add("active")),n.addEventListener("mouseup",()=>!d.touched&&t.classList.remove("active")),n.addEventListener("touchstart",()=>d.touched&&t.classList.add("active"),{passive:!0}),n.addEventListener("touchend",()=>d.touched&&t.classList.remove("active"),{passive:!0}),n.addEventListener("touchcancel",()=>d.touched&&t.classList.remove("active"),{passive:!0}),{watches:{max:e=>{n.max=String(e),a()},min:e=>{n.min=String(e),a()},step:e=>{n.step=String(e),a()},value:e=>{n.value=String(e),a()}}}}}){}F.define("s-slider");const $=[];class H extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
    }
    .wrapper{
      --offsetY: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      overflow: hidden;
      box-sizing: border-box;
      padding: 16px;
      display: flex;
      justify-content: center;
      transition: transform .24s;
      transform: translateY(var(--offsetY));
    }
    .container{
      background: var(--s-color-inverse-surface, #313034);
      color: var(--s-color-inverse-on-surface, #f3eff4);
      min-height: 48px;
      border-radius: 12px;
      box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
      line-height: 1.6;
      display: inline-flex;
      align-items: center;
      min-width: 320px;
      max-width: 480px;
      font-size: .875rem;
      font-weight: 400;
      height: fit-content;
      pointer-events: auto;
      transform: translateY(calc(-100% - 16px));
      filter: opacity(0);
      transition: transform .24s, filter .24s;
    }
    .wrapper.show .container{
      transform: translateY(0%);
      filter: opacity(1);
    }
    .text{
      margin: 12px 16px;
      flex-grow: 1;
      user-select: text;
      -webkit-user-select: text;
    }
    ::slotted(s-button[slot=action]){
      font-size: inherit;
      flex-shrink: 0;
      border-radius: 12px;
      color: var(--s-color-inverse-primary, #c0c1ff);
      margin-right: 8px;
      margin-left: -8px;
      height: 36px;
    }
    @media (max-width: 320px){
      .wrapper{
        padding: 8px;
      }
      .container{
        min-width: 100%;
      }
    }
    `,template:`
    <slot name="trigger"></slot>
    <div class="wrapper" part="wrapper">
      <div class="container" part="container">
        <div class="text" part="text">
          <slot></slot>
        </div>
        <slot name="action"></slot>
      </div>
    </div>
    `,props:{duration:5e3},setup(r){var e=r.querySelector("slot[name=trigger]");const i=r.querySelector(".wrapper"),s=r.querySelector(".container");var t=r.querySelector("slot[name=action]");const n={timer:0};var o=()=>{if(!i.classList.contains("show")){var t=p(r);0===t.top&&0===t.left||i.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-t.top}px;left: ${0-t.left}px`),clearTimeout(n.timer),getComputedStyle(i).top,i.classList.add("show");let e=s.offsetHeight+8;for(const o of $)o.style.setProperty("--offsetY",e+"px"),e=e+s.offsetHeight+8;$.unshift(i),this.dispatchEvent(new Event("show")),0<this.duration&&(n.timer=setTimeout(a,this.duration))}};const a=()=>{clearTimeout(n.timer),i.classList.remove("show");for(let e=$.indexOf(i)+1;e<$.length;e++){var t,o=$[e];o.classList.contains("show")&&(t=Number(o.style.getPropertyValue("--offsetY").slice(0,-2)),o.style.setProperty("--offsetY",t-s.offsetHeight-8+"px"))}$.splice($.indexOf(i),1),this.dispatchEvent(new Event("dismiss"))};return e.addEventListener("click",o),i.addEventListener("transitionend",e=>{"transform"!==e.propertyName||(e=i.classList.contains("show"),this.dispatchEvent(new Event(e?"showed":"dismissed")),e)||i.removeAttribute("style")}),t.addEventListener("click",a),{expose:{show:o,dismiss:a}}}}){static show=e=>{let t=document.body;const o=new H;var r=document.body.firstElementChild;r&&"S-PAGE"===r.tagName&&(t=r),"string"==typeof e?o.textContent=e:(e.root&&(t=e.root),o.textContent=e.text,e.action&&((r=document.createElement("s-button")).type="text",r.slot="action",r.textContent=e.action.text,e.action.click&&r.addEventListener("click",e.action.click),o.appendChild(r)),e.duration&&(o.duration=e.duration)),t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()}}H.define("s-snackbar");class G extends e({style:`
    :host{
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      cursor: pointer;
      position: relative;
      color: var(--s-color-primary, #5256a9);
      width: 52px;
      aspect-ratio: 1.625;
      border-radius: 26px;
    }
    :host([disabled=true]){
      pointer-events: none;
    }
    .track{
      width: 100%;
      height: 100%;
      border: solid 2px var(--s-color-outline, #777680);
      background: var(--s-color-surface-container-highest, #e5e1e6);
      box-sizing: border-box;
      border-radius: inherit;
    }
    :host([disabled=true]) .track{
      background: none;
      border-color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
    }
    :host([checked=true]) .track{
      border-width: 0;
      background: currentColor;
    }
    :host([disabled=true][checked=true]) .track{
      background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
    }
    .ripple{
      height: 125%;
      width: auto;
      aspect-ratio: 1;
      border-radius: 50%;
      top: auto;
      transition: transform .12s;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      color: var(--s-color-outline, #777680);
      transform: translateX(-10%);
    }
    :host([checked=true]) .ripple{
      transform: translateX(40%);
      color: currentColor;
    }
    .thumb{
      background: var(--s-color-outline, #777680);
      border-radius: 50%;
      width: 40%;
      height: 40%;
      transition: transform .12s, box-shadow .12s;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :host([disabled=true]) .thumb{
      background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent);
    }
    :host([checked=true]) .thumb{
      background: var(--s-color-on-primary, #ffffff);
      transform: scale(1.5);
      box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
    }
    :host([disabled=true][checked=true]) .thumb{
      background: var(--s-color-surface, #fffbff);
      box-shadow: none;
    }
    .icon{
      width: 70%;
      height: 70%;
      fill: currentColor;
      opacity: 0;
      transition: opacity .12s;
    }
    :host([checked=true]) .icon{
      opacity: 1;
    }
    :host([checked=true][disabled=true]) .icon{
      fill: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent);
    }
    `,template:`
    <div class="track" part="track"></div>
    <s-ripple attached="true" centered="true" class="ripple" part="ripple">
      <div class="thumb" part="thumb">
        <svg class="icon" viewBox="0 -960 960 960">
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
        </svg>
      </div>
    </s-ripple>
    `,props:{disabled:!1,checked:!1},syncProps:!0,setup(){this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}G.define("s-switch");class M extends e({style:`
    :host{
      display: flex;
      justify-content: center;
      position: relative;
      background: var(--s-color-surface, #fffbff);
      color: var(--s-color-on-surface-variant, #46464f);
    }
    :host::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: var(--s-color-surface-variant, #e4e1ec);
      bottom: 0;
      left: 0;
    }
    .container{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      scrollbar-width: none;
      overflow-x: auto;
    }
    .container::-webkit-scrollbar{
      display: none;
    }
    :host([mode=fixed]) .container{
      overflow: hidden;
      width: 100%;
    }
    ::slotted(s-tab-item){
      flex-shrink: 0;
      flex-basis: auto;
    }
    :host([mode=fixed]) ::slotted(s-tab-item){
      flex-basis: 100%;
      flex-shrink: 1;
    }
    `,template:`
    <div class="container" part="container">
      <slot></slot>
    </div>
    `,props:{mode:"scrollable"},syncProps:["mode"],setup(e){const o=e.querySelector("slot"),s=e.querySelector(".container");let n=[],a=-1,l=!1;const r=e=>{if(0===n.length||!e.selected)return a=-1;let t=null;for(const i of n)i!==e&&i.selected&&(t=i).removeAttribute("selected");var o,r;a=n.indexOf(e),l&&(this.dispatchEvent(new Event("change")),l=!1),this.isConnected&&(s.scrollWidth!==s.offsetWidth&&(o=e.offsetLeft-s.offsetLeft-s.offsetWidth/2+e.offsetWidth/2,s.scrollTo({left:o,behavior:"smooth"})),t)&&(t.indicator.addEventListener("transitionend",()=>{t?.indicator.removeAttribute("style"),e.indicator.removeAttribute("style")},{once:!0}),o=t.indicator.getBoundingClientRect().left,r=e.indicator.getBoundingClientRect(),e.indicator.setAttribute("style","transition:none;filter:opacity(0)"),t.indicator.setAttribute("style",`transition: transform .24s, width .24s;filter:opacity(1);transform:translateX(${r.left-o}px);width: ${r.width}px`))};return o.addEventListener("slotchange",()=>{let t=null;a=-1,n=o.assignedElements().filter(e=>{if(e instanceof j)return e.selected&&(t=e),!0}),t&&r(t)}),this.addEventListener("tab-item:update",e=>{e.stopPropagation(),r(e.target)}),this.addEventListener("tab-item:change",e=>{e.stopPropagation(),l=!0}),{expose:{get options(){return n},get selectedIndex(){return a}}}}}){}class j extends e({style:`
    :host{
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      position: relative;
      cursor: pointer;
      font-size: .875rem;
      font-weight: 500;
      text-transform: capitalize;
      padding: 0 16px;
    }
    :host([selected=true]){
      color: var(--s-color-primary, #5256a9);
    }
    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      min-height: inherit;
    }
    .indicator{
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 100%;
      background: var(--s-color-primary, #5256a9);
      border-radius: 1.5px 1.5px 0 0;
      filter: opacity(0);
    }
    :host([selected=true]) .indicator{
      filter: opacity(1);
    }
    .text{
      display: flex;
      align-items: center;
      line-height: 1;
    }
    .badge{
      display: flex;
      align-items: center;
    }
    .icon .badge{
      position: absolute;
      top: 8px;
      left: 50%;
      width: 50%;
      justify-content: center;
      margin-left: 0;
    }
    ::slotted([slot=icon]){
      height: 42px;
      color: inherit;
    }
    ::slotted([slot=text]){
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 1;
    }
    .icon ::slotted([slot=text]){
      height: 26px;
    }
    ::slotted([slot=badge]){
      margin-left: 4px;
    }
    `,template:`
    <div class="container" part="container">
      <slot name="icon"></slot>
      <div class="text" part="text">
        <slot name="text"></slot>
        <div class="badge" part="badge">
          <slot name="badge"></slot>
        </div>
      </div>
      <div class="indicator" part="indicator"></div>
    </div>
    <s-ripple attached="true" part="ripple"></s-ripple>
    `,props:{selected:!1},syncProps:!0,setup(e){const t=e.querySelector(".container"),o=e.querySelector(".indicator"),r=e.querySelector("[name=icon]");return r.addEventListener("slotchange",()=>{var e=r.assignedElements().length;t.classList[0<e?"add":"remove"]("icon")}),this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof M&&this.dispatchEvent(new Event("tab-item:change",{bubbles:!0})),this.selected=!0)}),{expose:{get indicator(){return o}},watches:{selected:()=>{this.parentNode instanceof M&&this.dispatchEvent(new Event("tab-item:update",{bubbles:!0}))}}}}}){}M.define("s-tab"),j.define("s-tab-item");class Q extends e({style:`
    :host{
      display: block;
      font-size: .875rem;
      border: solid 1px var(--s-color-outline-variant, #c7c5d0);
      background: var(--s-color-surface-container-low, #f6f2f7);
      border-radius: 8px;
      white-space: nowrap;
      overflow: hidden;
    }
    .container{
      display: table;
      width: 100%;
      border-collapse: collapse;
    }
    `,template:`
    <div class="container" part="container">
      <slot></slot>
    </div>
    `,props:{}}){}class V extends e({style:`
    :host{
      display: table-header-group;
      font-weight: 600;
      color: var(--s-color-on-surface-variant, #46464f);
    }
    `,template:"<slot></slot>",props:{}}){}class J extends e({style:`
    :host{
      display: table-row-group;
      color: var(--s-color-on-surface, #1c1b1f);
      position: relative;
    }
    ::slotted(s-tr:nth-child(odd)){
      background: var(--s-color-surface-container-lowest, #ffffff);
    }
    `,template:"<slot></slot>",props:{}}){}class K extends e({style:`
    :host{
      display: table-row;
    }
    ::slotted(*:first-child){
      width: 0;
    }
    `,template:"<slot></slot>",props:{}}){}class U extends e({style:`
    :host{
      display: table-cell;
      padding: 16px;
    }
    `,template:"<slot></slot>",props:{}}){}class ee extends e({style:`
    :host{
      display: table-cell;
      user-select: text;
      padding: 12px 16px;
    }
    `,template:"<slot></slot>",props:{}}){}Q.define("s-table"),V.define("s-thead"),J.define("s-tbody"),K.define("s-tr"),U.define("s-th"),ee.define("s-td");class te extends e({style:`
    :host{
      display: inline-grid;
      vertical-align: middle;
      color: var(--s-color-primary, #5256a9);
      font-size: .875rem;
      min-width: 280px;
      min-height: 48px;
      --border-radius: 4px;
      --border-color: var(--s-color-outline, #777680);
      --border-width: 1px;
      --padding: 16px;
    }
    :host([disabled=true]){
      pointer-events: none;
      opacity: .38;
    }
    .container{
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
    }
    .start,
    .end{
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      min-width: var(--border-radius);
      flex-shrink: 0;
    }
    .start::before,
    .end::before,
    .start::after,
    .end::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius);
      border: solid var(--border-width) var(--border-color);
      pointer-events: none;
      box-sizing: border-box;
    }
    .start::before,
    .start::after{
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .end::before,
    .end::after{
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .start::after,
    .end::after{
      border-width: calc(var(--border-width) * 2);
      border-color: currentColor;
      opacity: 0;
      transition: opacity .12s;
    }
    :host(:focus-within) .start::after,
    :host(:focus-within) .end::after{
      opacity: 1;
    }
    .text{
      display: flex;
      height: 100%;
      flex-grow: 1;
      position: relative;
      margin: 0 calc(var(--border-radius) * -1);
    }
    .text::before,
    .text::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: var(--border-radius);
      width: calc(100%  - (var(--border-radius)*2));
      border-bottom: solid var(--border-width) var(--border-color);
    }
    .text::after{
      border-bottom-width: calc(var(--border-width) * 2);
      border-bottom-color: currentColor;
      opacity: 0;
      transition: opacity .12s;
    }
    :host(:focus-within) .text::after{
      opacity: 1;
    }
    .top{
      position: absolute;
      pointer-events: none;
      left: var(--border-radius);
      top: 0;
      height: 100%;
      width: calc(100%  - (var(--border-radius) * 2));
      display: flex;
    }
    .outline{
      position: relative;
    }
    .outline.left{
      width: calc(var(--padding) - var(--border-radius));
    }
    .outline.right{
      flex-grow: 1;
    }
    .outline::before,
    .outline::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-top: solid var(--border-width) var(--border-color);
    }
    .outline::after{
      border-top-width: calc(var(--border-width) * 2);
      border-top-color: currentColor;
      opacity: 0;
      transition: opacity .12s;
    }
    :host(:focus-within) .outline::after{
      opacity: 1;
    }
    .label{
      color: var(--border-color);
      height: 100%;
      display: flex;
      white-space: nowrap;
      width: 0;
      align-items: center;
      transform: translateX(min(calc(var(--padding) - var(--border-radius)), 0px));
      transition: transform .12s;
    }
    .empty .label,
    :host(:focus-within) .label{
      width: auto;
      transform: translateY(-50%) scale(.8571428571428571);
    }
    .multi .label{
      height: fit-content;
      padding: var(--padding) 0;
    }
    :host(:focus-within) .label{
      color: currentColor;
    }
    ::slotted(input),
    ::slotted(textarea),
    .shadow{
      border: none;
      height: 100%;
      width: 100%;
      padding: 0 var(--padding);
      background: none;
      outline: none;
      font-size: inherit;
      color: var(--s-color-on-surface, #1c1b1f);
      box-sizing: border-box;
      line-height: 1;
      font-family: inherit;
      display: block;
    }
    ::slotted(input)::placeholder,
    ::slotted(textarea)::placeholder{
      color: var(--s-color-outline, #777680);
    }
    ::slotted(textarea),
    .shadow{
      resize: none;
      scrollbar-width: none;
      line-height: 16px;
      word-wrap: break-word;
      word-break: break-all;
      white-space: pre-wrap;
      min-height: 100%;
      height: 0;
      padding: var(--padding);
    }
    .shadow{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
      min-height: auto;
      visibility: hidden;
      pointer-events: none;
    }
    .shadow::after{
      content: ' ';
    }
    .input .shadow{
      display: none;
    }
    ::slotted(s-icon-button[slot=start]){
      margin-left: 4px;
      margin-right: calc(var(--border-radius) - var(--padding) + 4px);
    }
    ::slotted(s-icon-button[slot=end]){
      margin-right: 4px;
      margin-left: calc(var(--border-radius) - var(--padding) + 4px);
    }
    ::slotted(s-icon[slot=start]){
      margin-left: 12px;
      margin-right: calc(var(--border-radius) - var(--padding) + 12px);
    }
    ::slotted(s-icon[slot=end]){
      margin-right: 12px;
      margin-left: calc(var(--border-radius) - var(--padding) + 12px);
    }
    `,template:`
    <div class="container" part="container">
      <div class="start">
        <slot name="start"></slot>
      </div>
      <div class="text">
        <div class="top">
          <div class="outline left"></div>
          <div class="label" part="label"></div>
          <div class="outline right"></div>
        </div>
        <slot class="input"></slot>
        <div class="shadow"></div>
      </div>
      <div class="end">
        <slot name="end"></slot>
      </div>
    </div>
    `,props:{label:"",disabled:!1},syncProps:["disabled"],setup(e){const o=e.querySelector(".container"),t=e.querySelector(".label"),r=e.querySelector(".input"),i=e.querySelector(".shadow");let s=null;const n=()=>{s&&(""===s.value?o.classList.remove("empty"):o.classList.add("empty"),s instanceof HTMLTextAreaElement)&&(i.textContent=s.value,s.offsetHeight!==i.offsetHeight)&&(s.style.height=i.offsetHeight+"px")};return r.addEventListener("slotchange",()=>{if((s=r.assignedElements()[0])instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){s instanceof HTMLTextAreaElement?o.classList.add("multi"):o.classList.remove("multi");var e=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s),"value");if(e){const t=e.set;e.set=e=>{t?.apply(s,[e]),s&&s.parentNode===this&&n()},Object.defineProperty(s,"value",e)}n(),s.addEventListener("input",n)}else i.textContent="",o.classList.remove("multi","empty"),s=null}),{watches:{label:e=>t.textContent=e}}}}){}te.define("s-text-field");class oe extends e({style:`
    :host{
      position: relative;
      display: inline-flex;
      vertical-align: middle;
    }
    .container{
      position: fixed; ::slotted(:not([slot]))
      left: 0;
      top: 0;
      z-index: 1;
      background: var(--s-color-inverse-surface, #313034);
      color: var(--s-color-inverse-on-surface, #f3eff4);
      font-size: .875rem;
      font-weight: 400;
      padding: 6px 8px;
      border-radius: 12px;
      white-space: nowrap;
      opacity: .85;
      filter: opacity(0);
      transition: filter .12s;
      pointer-events: none;
    }
    .container.show{
      filter: opacity(1);
    }
    ::slotted(img){
      display: block;
      border-radius: 12px;
      margin: 2px 0;
    }
    `,template:`
    <div id="trigger" part="trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="container" part="container">
      <slot></slot>
    </div>
    `,props:{},setup(s){const n=s.querySelector("#trigger"),a=s.querySelector(".container"),l={showed:!1,timer:0},e=(e="bottom")=>{var t,o,r,i;this.isConnected&&!l.showed&&(t=n.getBoundingClientRect(),o=p(s),r=a.offsetWidth,i=a.offsetHeight,(e={top:{top:t.top-4-i,bottom:t.top+n.offsetHeight+4}[e],left:t.left-(r-t.width)/2}).left<0&&(e.left=t.left),e.left+r>innerWidth&&(e.left=t.left+t.width-r),e.top+i>innerHeight&&(e.top=t.top-4-i),e.top<0&&(e.top=t.top+n.offsetHeight+4),a.setAttribute("style",`left: ${e.left-o.left}px;top: ${e.top-o.top}px`),a.classList.add("show"),l.showed=!0)},t=()=>{this.isConnected&&l.showed&&(a.classList.remove("show"),l.showed=!1)};n.addEventListener("wheel",t,{passive:!0}),n.addEventListener("mouseover",()=>!d.touched&&e(),{passive:!0}),n.addEventListener("mouseleave",()=>!d.touched&&t(),{passive:!0}),n.addEventListener("touchstart",()=>{clearTimeout(l.timer),l.timer=setTimeout(()=>e("top"),600)},{passive:!0}),n.addEventListener("touchend",()=>{clearTimeout(l.timer),t()},{passive:!0}),a.addEventListener("transitionend",()=>{a.classList.contains("show")||a.removeAttribute("style")})}}){}return oe.define("s-tooltip"),Object.freeze({__proto__:null,Appbar:t,Badge:o,BottomSheet:D,Button:n,Card:a,Carousel:l,Checkbox:u,Chip:m,CircularProgress:g,Dialog:y,Divider:w,Drawer:k,FAB:_,Icon:B,IconButton:N,LinearProgress:O,Navigation:L,NavigationItem:S,Page:Y,Picker:T,PickerItem:z,Popup:A,PopupMenu:q,PopupMenuItem:W,RadioButton:I,Rate:X,Ripple:s,ScrollView:b,Search:R,SegmentedButton:P,SegmentedButtonItem:Z,Slider:F,Snackbar:H,Switch:G,Tab:M,TabItem:j,Table:Q,Tbody:J,Td:ee,TextField:te,Th:U,Thead:V,Tooltip:oe,Tr:K})});
    //# sourceMappingURL=sober.min.js.map
    
    
    