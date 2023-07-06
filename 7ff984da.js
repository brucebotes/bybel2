function t(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s}const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}}const s=t=>new r("string"==typeof t?t:t+"",void 0,i),a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new r(o,t,i)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return s(e)})(t):t;var c;const h=window,d=h.trustedTypes,u=d?d.emptyScript:"",p=h.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},f=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:f};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{o?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((o=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=o.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var i;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:b).toAttribute(e,o.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:b;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.1");const y=window,_=y.trustedTypes,w=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,C=`<${$}>`,S=document,A=()=>S.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,P=t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),z="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,R=/>/g,I=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,D=/"/g,N=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),B=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),F=new WeakMap,V=S.createTreeWalker(S,129,null,!1),H=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",s=T;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,h=0;for(;h<o.length&&(s.lastIndex=h,l=s.exec(o),null!==l);)h=s.lastIndex,s===T?"!--"===l[1]?s=L:void 0!==l[1]?s=R:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=I):void 0!==l[3]&&(s=I):s===I?">"===l[0]?(s=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?I:'"'===l[3]?D:O):s===D||s===O?s=I:s===L||s===R?s=T:(s=I,n=void 0);const d=s===I&&t[e+1].startsWith("/>")?" ":"";r+=s===T?o+C:c>=0?(i.push(a),o.slice(0,c)+k+o.slice(c)+x+d):o+x+(-2===c?(i.push(void 0),e):d)}const a=r+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,i]};class q{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const s=t.length-1,a=this.parts,[l,c]=H(t,e);if(this.el=q.createElement(l,o),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=V.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(k)||e.startsWith(x)){const o=c[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+k).split(x),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?Z:"@"===e[1]?Q:G})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(N.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=_?_.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],A()),V.nextNode(),a.push({type:2,index:++n});i.append(t[e],A())}}}else if(8===i.nodeType)if(i.data===$)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const o=S.createElement("template");return o.innerHTML=t,o}}function K(t,e,o=t,i){var n,r,s,a;if(e===B)return e;let l=void 0!==i?null===(n=o._$Co)||void 0===n?void 0:n[i]:o._$Cl;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,i)),void 0!==i?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[i]=l:o._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,i)),e}class W{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(o,!0);V.currentNode=n;let r=V.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new J(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this.u.push(e),l=i[++a]}s!==(null==l?void 0:l.index)&&(r=V.nextNode(),s++)}return n}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class J{constructor(t,e,o,i){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cm=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),E(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==B&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):P(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==M&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(o);else{const t=new W(n,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new q(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new J(this.S(A()),this.S(A()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,o,i,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const i=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=K(this,i[o+s],e,s),a===B&&(a=this._$AH[s]),r||(r=!E(a)||a!==this._$AH[s]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}r&&!i&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const X=_?_.emptyScript:"";class Z extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=K(this,t,e,0))&&void 0!==o?o:M)===B)return;const i=this._$AH,n=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==M&&(i===M||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const et={P:k,A:x,M:$,C:1,L:H,D:W,R:P,V:K,I:J,H:G,N:Z,U:Q,F:Y,B:tt},ot=y.litHtmlPolyfillSupport;null==ot||ot(q,J),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.7.0");var it,nt;class rt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let s=r._$litPart$;if(void 0===s){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=s=new J(e.insertBefore(A(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}rt.finalized=!0,rt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:rt});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:rt}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.0");const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function ct(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):lt(t,e)}function ht(t){return ct({...t,state:!0})}const dt=({finisher:t,descriptor:e})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(n,i)}};function ut(t,e){return dt({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}var pt;null===(pt=window.HTMLSlotElement)||void 0===pt||pt.prototype.assignedElements;const bt=1,ft=2,mt=3,gt=4,vt=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:_t}=et,wt=()=>document.createComment(""),kt=(t,e,o)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(wt(),r),i=n.insertBefore(wt(),r);o=new _t(e,i,t,t.options)}else{const e=o._$AB.nextSibling,s=o._$AM,a=s!==t;if(a){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==s._$AU&&o._$AP(e)}if(e!==r||a){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return o},xt=(t,e,o=t)=>(t._$AI(e,o),t),$t={},Ct=(t,e=$t)=>t._$AH=e,St=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},At=(t,e,o)=>{const i=new Map;for(let n=e;n<=o;n++)i.set(t[n],n);return i},Et=vt(class extends yt{constructor(t){if(super(t),t.type!==ft)throw Error("repeat() can only be used in text expressions")}ht(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const n=[],r=[];let s=0;for(const e of t)n[s]=i?i(e,s):s,r[s]=o(e,s),s++;return{values:r,keys:n}}render(t,e,o){return this.ht(t,e,o).values}update(t,[e,o,i]){var n;const r=(t=>t._$AH)(t),{values:s,keys:a}=this.ht(e,o,i);if(!Array.isArray(r))return this.ut=a,s;const l=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],c=[];let h,d,u=0,p=r.length-1,b=0,f=s.length-1;for(;u<=p&&b<=f;)if(null===r[u])u++;else if(null===r[p])p--;else if(l[u]===a[b])c[b]=xt(r[u],s[b]),u++,b++;else if(l[p]===a[f])c[f]=xt(r[p],s[f]),p--,f--;else if(l[u]===a[f])c[f]=xt(r[u],s[f]),kt(t,c[f+1],r[u]),u++,f--;else if(l[p]===a[b])c[b]=xt(r[p],s[b]),kt(t,r[u],r[p]),p--,b++;else if(void 0===h&&(h=At(a,b,f),d=At(l,u,p)),h.has(l[u]))if(h.has(l[p])){const e=d.get(a[b]),o=void 0!==e?r[e]:null;if(null===o){const e=kt(t,r[u]);xt(e,s[b]),c[b]=e}else c[b]=xt(o,s[b]),kt(t,r[u],o),r[e]=null;b++}else St(r[p]),p--;else St(r[u]),u++;for(;b<=f;){const e=kt(t,c[f+1]);xt(e,s[b]),c[b++]=e}for(;u<=p;){const t=r[u++];null!==t&&St(t)}return this.ut=a,Ct(t,c),B}});var jt=/[$_\p{ID_Start}]/u,Pt=/[$_\u200C\u200D\p{ID_Continue}]/u;function zt(t,e){return(e?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(t)}function Tt(t,e=!1){const o=[];let i=0;for(;i<t.length;){const n=t[i],r=function(n){if(!e)throw new TypeError(n);o.push({type:"INVALID_CHAR",index:i,value:t[i++]})};if("*"!==n)if("+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)o.push({type:"CHAR",index:i,value:t[i++]});else{let e=1,n="",s=i+1,a=!1;if("?"===t[s]){r(`Pattern cannot start with "?" at ${s}`);continue}for(;s<t.length;){if(!zt(t[s],!1)){r(`Invalid character '${t[s]}' at ${s}.`),a=!0;break}if("\\"!==t[s]){if(")"===t[s]){if(e--,0===e){s++;break}}else if("("===t[s]&&(e++,"?"!==t[s+1])){r(`Capturing groups are not allowed at ${s}`),a=!0;break}n+=t[s++]}else n+=t[s++]+t[s++]}if(a)continue;if(e){r(`Unbalanced pattern at ${i}`);continue}if(!n){r(`Missing pattern at ${i}`);continue}o.push({type:"PATTERN",index:i,value:n}),i=s}else{let e="",n=i+1;for(;n<t.length;){const o=t.substr(n,1);if(!(n===i+1&&jt.test(o)||n!==i+1&&Pt.test(o)))break;e+=t[n++]}if(!e){r(`Missing parameter name at ${i}`);continue}o.push({type:"NAME",index:i,value:e}),i=n}else o.push({type:"CLOSE",index:i,value:t[i++]});else o.push({type:"OPEN",index:i,value:t[i++]});else o.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else o.push({type:"MODIFIER",index:i,value:t[i++]});else o.push({type:"ASTERISK",index:i,value:t[i++]})}return o.push({type:"END",index:i,value:""}),o}function Lt(t,e={}){const o=Tt(t),{prefixes:i="./"}=e,n=`[^${Rt(void 0===e.delimiter?"/#?":e.delimiter)}]+?`,r=[];let s=0,a=0,l="",c=new Set;const h=t=>{if(a<o.length&&o[a].type===t)return o[a++].value},d=()=>{const t=h("MODIFIER");return t||h("ASTERISK")},u=t=>{const e=h(t);if(void 0!==e)return e;const{type:i,index:n}=o[a];throw new TypeError(`Unexpected ${i} at ${n}, expected ${t}`)},p=()=>{let t,e="";for(;t=h("CHAR")||h("ESCAPED_CHAR");)e+=t;return e},b=e.encodePart||(t=>t);for(;a<o.length;){const t=h("CHAR"),e=h("NAME");let o=h("PATTERN");if(e||o||!h("ASTERISK")||(o=".*"),e||o){let a=t||"";-1===i.indexOf(a)&&(l+=a,a=""),l&&(r.push(b(l)),l="");const h=e||s++;if(c.has(h))throw new TypeError(`Duplicate name '${h}'.`);c.add(h),r.push({name:h,prefix:b(a),suffix:"",pattern:o||n,modifier:d()||""});continue}const a=t||h("ESCAPED_CHAR");if(a){l+=a;continue}if(h("OPEN")){const t=p(),e=h("NAME")||"";let o=h("PATTERN")||"";e||o||!h("ASTERISK")||(o=".*");const i=p();u("CLOSE");const a=d()||"";if(!e&&!o&&!a){l+=t;continue}if(!e&&!o&&!t)continue;l&&(r.push(b(l)),l=""),r.push({name:e||(o?s++:""),pattern:e&&!o?n:o,prefix:b(t),suffix:b(i),modifier:a})}else l&&(r.push(b(l)),l=""),u("END")}return r}function Rt(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function It(t){return t&&t.ignoreCase?"ui":"u"}function Ot(t,e,o={}){const{strict:i=!1,start:n=!0,end:r=!0,encode:s=(t=>t)}=o,a=`[${Rt(void 0===o.endsWith?"":o.endsWith)}]|$`,l=`[${Rt(void 0===o.delimiter?"/#?":o.delimiter)}]`;let c=n?"^":"";for(const o of t)if("string"==typeof o)c+=Rt(s(o));else{const t=Rt(s(o.prefix)),i=Rt(s(o.suffix));if(o.pattern)if(e&&e.push(o),t||i)if("+"===o.modifier||"*"===o.modifier){const e="*"===o.modifier?"?":"";c+=`(?:${t}((?:${o.pattern})(?:${i}${t}(?:${o.pattern}))*)${i})${e}`}else c+=`(?:${t}(${o.pattern})${i})${o.modifier}`;else"+"===o.modifier||"*"===o.modifier?c+=`((?:${o.pattern})${o.modifier})`:c+=`(${o.pattern})${o.modifier}`;else c+=`(?:${t}${i})${o.modifier}`}if(r)i||(c+=`${l}?`),c+=o.endsWith?`(?=${a})`:"$";else{const e=t[t.length-1],o="string"==typeof e?l.indexOf(e[e.length-1])>-1:void 0===e;i||(c+=`(?:${l}(?=${a}))?`),o||(c+=`(?=${l}|${a})`)}return new RegExp(c,It(o))}function Dt(t,e,o){return t instanceof RegExp?function(t,e){if(!e)return t;const o=/\((?:\?<(.*?)>)?(?!\?)/g;let i=0,n=o.exec(t.source);for(;n;)e.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=o.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,o){const i=t.map((t=>Dt(t,e,o).source));return new RegExp(`(?:${i.join("|")})`,It(o))}(t,e,o):function(t,e,o){return Ot(Lt(t,o),e,o)}(t,e,o)}var Nt={delimiter:"",prefixes:"",sensitive:!0,strict:!0},Ut={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Bt={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function Mt(t,e){return t.startsWith(e)?t.substring(e.length,t.length):t}function Ft(t){return!(!t||t.length<2)&&("["===t[0]||("\\"===t[0]||"{"===t[0])&&"["===t[1])}var Vt=["ftp","file","http","https","ws","wss"];function Ht(t){if(!t)return!0;for(const e of Vt)if(t.test(e))return!0;return!1}function qt(t){switch(t){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function Kt(t){if(""===t)return t;if(/^[-+.A-Za-z0-9]*$/.test(t))return t.toLowerCase();throw new TypeError(`Invalid protocol '${t}'.`)}function Wt(t){if(""===t)return t;const e=new URL("https://example.com");return e.username=t,e.username}function Jt(t){if(""===t)return t;const e=new URL("https://example.com");return e.password=t,e.password}function Gt(t){if(""===t)return t;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(t))throw new TypeError(`Invalid hostname '${t}'`);const e=new URL("https://example.com");return e.hostname=t,e.hostname}function Yt(t){if(""===t)return t;if(/[^0-9a-fA-F[\]:]/g.test(t))throw new TypeError(`Invalid IPv6 hostname '${t}'`);return t.toLowerCase()}function Xt(t){if(""===t)return t;if(/^[0-9]*$/.test(t)&&parseInt(t)<=65535)return t;throw new TypeError(`Invalid port '${t}'.`)}function Zt(t){if(""===t)return t;const e=new URL("https://example.com");return e.pathname="/"!==t[0]?"/-"+t:t,"/"!==t[0]?e.pathname.substring(2,e.pathname.length):e.pathname}function Qt(t){if(""===t)return t;return new URL(`data:${t}`).pathname}function te(t){if(""===t)return t;const e=new URL("https://example.com");return e.search=t,e.search.substring(1,e.search.length)}function ee(t){if(""===t)return t;const e=new URL("https://example.com");return e.hash=t,e.hash.substring(1,e.hash.length)}var oe=["protocol","username","password","hostname","port","pathname","search","hash"],ie="*";function ne(t,e){if("string"!=typeof t)throw new TypeError("parameter 1 is not of type 'string'.");const o=new URL(t,e);return{protocol:o.protocol.substring(0,o.protocol.length-1),username:o.username,password:o.password,hostname:o.hostname,port:o.port,pathname:o.pathname,search:""!=o.search?o.search.substring(1,o.search.length):void 0,hash:""!=o.hash?o.hash.substring(1,o.hash.length):void 0}}function re(t,e){return e?ae(t):t}function se(t,e,o){let i;if("string"==typeof e.baseURL)try{i=new URL(e.baseURL),t.protocol=re(i.protocol.substring(0,i.protocol.length-1),o),t.username=re(i.username,o),t.password=re(i.password,o),t.hostname=re(i.hostname,o),t.port=re(i.port,o),t.pathname=re(i.pathname,o),t.search=re(i.search.substring(1,i.search.length),o),t.hash=re(i.hash.substring(1,i.hash.length),o)}catch{throw new TypeError(`invalid baseURL '${e.baseURL}'.`)}if("string"==typeof e.protocol&&(t.protocol=function(t,e){var o,i;return i=":",t=(o=t).endsWith(i)?o.substr(0,o.length-i.length):o,e||""===t?t:Kt(t)}(e.protocol,o)),"string"==typeof e.username&&(t.username=function(t,e){if(e||""===t)return t;const o=new URL("https://example.com");return o.username=t,o.username}(e.username,o)),"string"==typeof e.password&&(t.password=function(t,e){if(e||""===t)return t;const o=new URL("https://example.com");return o.password=t,o.password}(e.password,o)),"string"==typeof e.hostname&&(t.hostname=function(t,e){return e||""===t?t:Ft(t)?Yt(t):Gt(t)}(e.hostname,o)),"string"==typeof e.port&&(t.port=function(t,e,o){return qt(e)===t&&(t=""),o||""===t?t:Xt(t)}(e.port,t.protocol,o)),"string"==typeof e.pathname){if(t.pathname=e.pathname,i&&!function(t,e){return!(!t.length||"/"!==t[0]&&(!e||t.length<2||"\\"!=t[0]&&"{"!=t[0]||"/"!=t[1]))}(t.pathname,o)){const e=i.pathname.lastIndexOf("/");e>=0&&(t.pathname=re(i.pathname.substring(0,e+1),o)+t.pathname)}t.pathname=function(t,e,o){if(o||""===t)return t;if(e&&!Vt.includes(e))return new URL(`${e}:${t}`).pathname;const i="/"==t[0];return t=new URL(i?t:"/-"+t,"https://example.com").pathname,i||(t=t.substring(2,t.length)),t}(t.pathname,t.protocol,o)}return"string"==typeof e.search&&(t.search=function(t,e){if(t=Mt(t,"?"),e||""===t)return t;const o=new URL("https://example.com");return o.search=t,o.search?o.search.substring(1,o.search.length):""}(e.search,o)),"string"==typeof e.hash&&(t.hash=function(t,e){if(t=Mt(t,"#"),e||""===t)return t;const o=new URL("https://example.com");return o.hash=t,o.hash?o.hash.substring(1,o.hash.length):""}(e.hash,o)),t}function ae(t){return t.replace(/([+*?:{}()\\])/g,"\\$1")}function le(t,e){const o=`[^${i=void 0===e.delimiter?"/#?":e.delimiter,i.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}]+?`;var i;const n=/[$_\u200C\u200D\p{ID_Continue}]/u;let r="";for(let i=0;i<t.length;++i){const s=t[i],a=i>0?t[i-1]:null,l=i<t.length-1?t[i+1]:null;if("string"==typeof s){r+=ae(s);continue}if(""===s.pattern){if(""===s.modifier){r+=ae(s.prefix);continue}r+=`{${ae(s.prefix)}}${s.modifier}`;continue}const c="number"!=typeof s.name,h=void 0!==e.prefixes?e.prefixes:"./";let d=""!==s.suffix||""!==s.prefix&&(1!==s.prefix.length||!h.includes(s.prefix));if(!d&&c&&s.pattern===o&&""===s.modifier&&l&&!l.prefix&&!l.suffix)if("string"==typeof l){const t=l.length>0?l[0]:"";d=n.test(t)}else d="number"==typeof l.name;if(!d&&""===s.prefix&&a&&"string"==typeof a&&a.length>0){const t=a[a.length-1];d=h.includes(t)}d&&(r+="{"),r+=ae(s.prefix),c&&(r+=`:${s.name}`),".*"===s.pattern?c||a&&"string"!=typeof a&&!a.modifier&&!d&&""===s.prefix?r+="(.*)":r+="*":s.pattern===o?c||(r+=`(${o})`):r+=`(${s.pattern})`,s.pattern===o&&c&&""!==s.suffix&&n.test(s.suffix[0])&&(r+="\\"),r+=ae(s.suffix),d&&(r+="}"),r+=s.modifier}return r}globalThis.URLPattern||(globalThis.URLPattern=class{constructor(t={},e,o){this.regexp={},this.keys={},this.component_pattern={};try{let i;if("string"==typeof e?i=e:o=e,"string"==typeof t){const e=new class{constructor(t){this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=0,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=t}get result(){return this.internalResult}parse(){for(this.tokenList=Tt(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,"END"===this.tokenList[this.tokenIndex].type){if(0===this.state){this.rewind(),this.isHashPrefix()?this.changeState(9,1):this.isSearchPrefix()?(this.changeState(8,1),this.internalResult.hash=""):(this.changeState(7,0),this.internalResult.search="",this.internalResult.hash="");continue}if(2===this.state){this.rewindAndSetState(5);continue}this.changeState(10,0);break}if(this.groupDepth>0){if(!this.isGroupClose())continue;this.groupDepth-=1}if(this.isGroupOpen())this.groupDepth+=1;else switch(this.state){case 0:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(1));break;case 1:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();let t=7,e=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(t=2,e=3):this.shouldTreatAsStandardURL&&(t=2),this.changeState(t,e)}break;case 2:this.isIdentityTerminator()?this.rewindAndSetState(3):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(5);break;case 3:this.isPasswordPrefix()?this.changeState(4,1):this.isIdentityTerminator()&&this.changeState(5,1);break;case 4:this.isIdentityTerminator()&&this.changeState(5,1);break;case 5:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(6,1):this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 6:this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 7:this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 8:this.isHashPrefix()&&this.changeState(9,1)}}}changeState(t,e){switch(this.state){case 0:case 2:break;case 1:this.internalResult.protocol=this.makeComponentString();break;case 3:this.internalResult.username=this.makeComponentString();break;case 4:this.internalResult.password=this.makeComponentString();break;case 5:this.internalResult.hostname=this.makeComponentString();break;case 6:this.internalResult.port=this.makeComponentString();break;case 7:this.internalResult.pathname=this.makeComponentString();break;case 8:this.internalResult.search=this.makeComponentString();break;case 9:this.internalResult.hash=this.makeComponentString()}this.changeStateWithoutSettingComponent(t,e)}changeStateWithoutSettingComponent(t,e){this.state=t,this.componentStart=this.tokenIndex+e,this.tokenIndex+=e,this.tokenIncrement=0}rewind(){this.tokenIndex=this.componentStart,this.tokenIncrement=0}rewindAndSetState(t){this.rewind(),this.state=t}safeToken(t){return t<0&&(t=this.tokenList.length-t),t<this.tokenList.length?this.tokenList[t]:this.tokenList[this.tokenList.length-1]}isNonSpecialPatternChar(t,e){const o=this.safeToken(t);return o.value===e&&("CHAR"===o.type||"ESCAPED_CHAR"===o.type||"INVALID_CHAR"===o.type)}isProtocolSuffix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}nextIsAuthoritySlashes(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")}isIdentityTerminator(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")}isPasswordPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPortPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPathnameStart(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")}isSearchPrefix(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return!0;if("?"!==this.tokenList[this.tokenIndex].value)return!1;const t=this.safeToken(this.tokenIndex-1);return"NAME"!==t.type&&"PATTERN"!==t.type&&"CLOSE"!==t.type&&"ASTERISK"!==t.type}isHashPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")}isGroupOpen(){return"OPEN"==this.tokenList[this.tokenIndex].type}isGroupClose(){return"CLOSE"==this.tokenList[this.tokenIndex].type}isIPv6Open(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")}isIPv6Close(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")}makeComponentString(){const t=this.tokenList[this.tokenIndex],e=this.safeToken(this.componentStart).index;return this.input.substring(e,t.index)}computeShouldTreatAsStandardURL(){const t={};Object.assign(t,Nt),t.encodePart=Kt;const e=Dt(this.makeComponentString(),void 0,t);this.shouldTreatAsStandardURL=Ht(e)}}(t);if(e.parse(),t=e.result,void 0===i&&"string"!=typeof t.protocol)throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=i}else{if(!t||"object"!=typeof t)throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(i)throw new TypeError("parameter 1 is not of type 'string'.")}void 0===o&&(o={ignoreCase:!1});const n={ignoreCase:!0===o.ignoreCase},r={pathname:ie,protocol:ie,username:ie,password:ie,hostname:ie,port:ie,search:ie,hash:ie};let s;for(s of(this.pattern=se(r,t,!0),qt(this.pattern.protocol)===this.pattern.port&&(this.pattern.port=""),oe)){if(!(s in this.pattern))continue;const t={},e=this.pattern[s];switch(this.keys[s]=[],s){case"protocol":Object.assign(t,Nt),t.encodePart=Kt;break;case"username":Object.assign(t,Nt),t.encodePart=Wt;break;case"password":Object.assign(t,Nt),t.encodePart=Jt;break;case"hostname":Object.assign(t,Ut),Ft(e)?t.encodePart=Yt:t.encodePart=Gt;break;case"port":Object.assign(t,Nt),t.encodePart=Xt;break;case"pathname":Ht(this.regexp.protocol)?(Object.assign(t,Bt,n),t.encodePart=Zt):(Object.assign(t,Nt,n),t.encodePart=Qt);break;case"search":Object.assign(t,Nt,n),t.encodePart=te;break;case"hash":Object.assign(t,Nt,n),t.encodePart=ee}try{const o=Lt(e,t);this.regexp[s]=Ot(o,this.keys[s],t),this.component_pattern[s]=le(o,t)}catch{throw new TypeError(`invalid ${s} pattern '${this.pattern[s]}'.`)}}}catch(t){throw new TypeError(`Failed to construct 'URLPattern': ${t.message}`)}}test(t={},e){let o,i={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof t&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0===t)return!1;try{i=se(i,"object"==typeof t?t:ne(t,e),!1)}catch(t){return!1}for(o of oe)if(!this.regexp[o].exec(i[o]))return!1;return!0}exec(t={},e){let o={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof t&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0===t)return;try{o=se(o,"object"==typeof t?t:ne(t,e),!1)}catch(t){return null}let i,n={};for(i of(n.inputs=e?[t,e]:[t],oe)){let t=this.regexp[i].exec(o[i]);if(!t)return null;let e={};for(let[o,n]of this.keys[i].entries())if("string"==typeof n.name||"number"==typeof n.name){let i=t[o+1];e[n.name]=i}n[i]={input:o[i]||"",groups:e}}return n}get protocol(){return this.component_pattern.protocol}get username(){return this.component_pattern.username}get password(){return this.component_pattern.password}get hostname(){return this.component_pattern.hostname}get port(){return this.component_pattern.port}get pathname(){return this.component_pattern.pathname}get search(){return this.component_pattern.search}get hash(){return this.component_pattern.hash}});const ce=new WeakMap,he=t=>{if((t=>void 0!==t.pattern)(t))return t.pattern;let e=ce.get(t);return void 0===e&&ce.set(t,e=new URLPattern({pathname:t.path})),e};class de{constructor(t,e,o){this.routes=[],this.o=[],this.t={},this.i=t=>{if(t.routes===this)return;const e=t.routes;this.o.push(e),e.l=this,t.stopImmediatePropagation(),t.onDisconnect=()=>{var t;null===(t=this.o)||void 0===t||t.splice(this.o.indexOf(e)>>>0,1)};const o=ue(this.t);void 0!==o&&e.goto(o)},(this.h=t).addController(this),this.routes=[...e],this.fallback=null==o?void 0:o.fallback}link(t){var e,o;if(null==t?void 0:t.startsWith("/"))return t;if(null==t?void 0:t.startsWith("."))throw Error("Not implemented");return null!=t||(t=this.u),(null!==(o=null===(e=this.l)||void 0===e?void 0:e.link())&&void 0!==o?o:"")+t}async goto(t){var e;let o;if(0===this.routes.length&&void 0===this.fallback)o=t,this.u="",this.t={0:o};else{const i=this.v(t);if(void 0===i)throw Error("No route found for "+t);const n=he(i).exec({pathname:t}),r=null!==(e=null==n?void 0:n.pathname.groups)&&void 0!==e?e:{};if(o=ue(r),"function"==typeof i.enter&&!1===await i.enter(r))return;this.p=i,this.t=r,this.u=void 0===o?t:t.substring(0,t.length-o.length)}if(void 0!==o)for(const t of this.o)t.goto(o);this.h.requestUpdate()}outlet(){var t,e;return null===(e=null===(t=this.p)||void 0===t?void 0:t.render)||void 0===e?void 0:e.call(t,this.t)}get params(){return this.t}v(t){const e=this.routes.find((e=>he(e).test({pathname:t})));return e||void 0===this.fallback?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.h.addEventListener(pe.eventName,this.i);const t=new pe(this);this.h.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;null===(t=this._)||void 0===t||t.call(this),this.l=void 0}}const ue=t=>{let e;for(const o of Object.keys(t))/\d+/.test(o)&&(void 0===e||o>e)&&(e=o);return e&&t[e]};class pe extends Event{constructor(t){super(pe.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}pe.eventName="lit-routes-connected";const be=location.origin||location.protocol+"//"+location.host;class fe extends de{constructor(){super(...arguments),this.m=t=>{const e=0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const o=t.composedPath().find((t=>"A"===t.tagName));if(void 0===o||""!==o.target||o.hasAttribute("download")||"external"===o.getAttribute("rel"))return;const i=o.href;if(""===i||i.startsWith("mailto:"))return;const n=window.location;o.origin===be&&(t.preventDefault(),i!==n.href&&(window.history.pushState({},"",i),this.goto(o.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}class me extends Event{constructor(t,e,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=o}}class ge{constructor(t,e,o,i){var n;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=null!==(n=t.subscribe)&&void 0!==n&&n}else this.context=e,this.callback=o,this.subscribe=null!=i&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new me(this.context,this.t,this.subscribe))}}class ve{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(const[t,e]of this.callbacks)t(this.o,e)},void 0!==t&&(this.value=t)}get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,(()=>{this.callbacks.delete(t)}))),t(this.value)}clearCallbacks(){this.callbacks.clear()}}class ye extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,Object.setPrototypeOf(this,new.target.prototype)}}class _e extends ve{constructor(t,e,o){super(void 0!==e.context?e.initialValue:o),this.onContextRequest=t=>{t.context===this.context&&t.composedPath()[0]!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,t.subscribe))},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new ye(this.context))}}function we({context:t,subscribe:e}){return dt({finisher:(o,i)=>{o.addInitializer((o=>{new ge(o,{context:t,callback:t=>{o[i]=t},subscribe:e})}))}})}const ke=function(t){let e=this.getBoundingClientRect(),o=document.createElement("div"),i=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",r="rgba(255,255,255,.3)",s=Math.sqrt(e.width*e.width+e.height*e.height)/10;this.style.overflow="hidden",o.style=`\n      width:20px;\n      height:20px;\n      border-radius: 50%;\n      background: radial-gradient(circle, \n      ${r} 0%, ${n} 5%, ${n} 7%, \n      ${r} 13%, ${r} 17%, ${n} 30%, \n      ${n} 35%, ${r} 51%,${r} 58%,\n      ${n} 68%, ${n} 75%, ${r} 100%);\n      position: absolute;\n      opacity: 0;\n      transform-origin: 'center center';\n      left: ${t.clientX-e.left-10}px;\n      top: ${t.clientY-e.top-10}px;`,this.prepend(o);let a=o.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${s})`,opacity:.1}],{duration:600});Promise.resolve(a.finished).then((()=>{o.remove(),this.style.overflow=i}))},xe="ix-db",$e=t=>t.replace(/\d+\|/g,(t=>`||${t}`)).substr(2).split("||").map((t=>{const[e,o]=t.split("|");return{n:e,txt:o}})),Ce=["ge","ex","le","nu","de","jos","jud","ru","1sa","2sa","1ki","2ki","1ch","2ch","ezr","ne","es","job","ps","pr","ec","so","isa","jer","la","eze","da","ho","joe","am","ob","jon","mic","na","hab","zep","hag","zec","mal","mt","mr","lu","joh","ac","ro","1co","2co","ga","eph","php","col","1th","2th","1ti","2ti","tit","phm","heb","jas","1pe","2pe","1jo","2jo","3jo","jude","re"],Se=Ce.map((t=>[t])),Ae=t=>{const e=(t=>t.reduce(((t,e,o)=>(e.forEach((e=>t[e]=Ce[o])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""};var Ee={key:"af",displayname:"afrikaans",abbreviations:[["Genesis","gen","ge","gn"],["Eksodus","eks","ek"],["Levitikus","lev","le","lv"],["Numeri","num","nu","nm"],["Deuteronomium","deut","dt"],["Josua","jos","js"],["Rigters","rig"],["Rut","rt"],["1 Samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","een samuel"],["2 Samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","twee samuel"],["1 Konings","1 kon","i kgs","1kgs","i kon","1kon","i konings","1konings","een konings","een kon","een kgs"],["2 Konings","2 kon","2 kgs","ii kgs","2kgs","ii kon","2kon","ii konings","2konings","2nd kgs","2nd kings","twee konings","twee kon","twee kgs"],["1 Kronieke","1 kron","1 kr","i kr","1kr","1 krn","i krn","1krn","i kron","1kron","i kronieke","1kronieke","een kronieke"],["2 Kronieke","2 kron","2 kr","ii kr","2kr","2 krn","ii krn","2krn","ii kron","2kron","ii kronieke","2kronieke","twee kronieke"],["Esra","esra","esr"],["Nehemia","neh","ne"],["Ester","est","es"],["Job","job","job","jb"],["Psalm","pslm","ps","psalms","psa","psm","pss"],["Spreuke","spr","sp"],["Prediker","pred","pre"],["Hooglied van Salomo","hooglied","hoog","salomo","sal","hvs","hs"],["Jesaja","jes","js"],["Jeremia","jer","je","jr"],["Klaagliedere van Jeremia","klaaglied","klaag","klj"],["Esegiël","eseg","ese","esg"],["Daniel","dan","da","dn"],["Hosea","hos","ho"],["Joël","joel","joe","jl"],["Amos","amos","am"],["Obadja","obad","ob"],["Jona","jnh","jon"],["Miga","mig","mg"],["Nahum","nah","na"],["Habakuk","hab","hb"],["Sefanja","sefan","sef","sf"],["Haggai","hag","hg"],["Sagaria","sag","sg"],["Maleagi","mal","ml"],["Mattheus","matt","mat","mt"],["Markus","mark","mar","mrk","mk","mr"],["Lukas","luk","lk"],["Johannes","john","joh","jhn","jh","jn"],["Handelinge","han","hand","hd"],["Romeine","rom","ro","rm"],["1 Korinthiërs","1 korinte","1 kor","1 ko","i ko","1ko","i kor","1kor","i korinthiers","1korinthiers","een korinthiers"],["2 Korinthiërs","2 korinte","2 kor","2 ko","i ko","2ko","ii kor","2kor","ii korinthiers","2korinthiers","twee korinthiers"],["Galasiërs","gal","ga"],["Efesiërs","efes","efe","ef"],["Filippense","filp","fil","flp","fl"],["Kolossense","kol","kl"],["1 Thessalonicense","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonicense","1thessalonicense","een thessalonicense","eerste thessalonicense"],["2 Thessalonicense","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonicense","2thessalonicense","twee thessalonicense","tweede thessalonicense"],["1 Timotheus","1 tim","1 ti","i ti","1ti","i tim","1tim","i timotheus","1timotheus","een timotheus","eerste timotheus"],["2 Timotheus","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timotheus","2timotheus","twee timotheus","tweede timotheus"],["Titus","titus","tit"],["Filémon","filem","file","flm"],["Hebreërs","heb"],["Jakobus","jak","jk"],["1 Petrus","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i petrus","1petrus","een petrus","eerste petrus"],["2 Petrus","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii petrus","2petrus","twee petrus","tweede petrus"],["1 Johannes","1 jn","i jn","1jn","i jo","1jo","i joh","1 joh","1joh","i jhn","1 jhn","1jhn","i johannes","1johannes","een johannes","eerste johannes"],["2 Johannes","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2 joh","2joh","ii jhn","2 jhn","2jhn","ii johannes","2johannes","twee johannes","tweede johannes"],["3 Johannes","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii johannes","3johannes","drie johannes","derde johannes"],["Judas","jd"],["Openbaring","open","opb","op","die openbaring"]]};const je={},Pe=t=>je[t];let ze,Te,Le,Re,Ie,Oe;function De(){if(Re=Le,Oe.last.books[ze].chapters[Te].verse!==Ie.last.books[ze].chapters[Te].verse){let t=!1,e=!1;Te-1>=0&&Oe.last.books[ze].chapters[Te-1].verse!==Ie.last.books[ze].chapters[Te-1].verse&&(e=!0),Te+1<=Oe.last.books[ze].chapter&&Oe.last.books[ze].chapters[Te+1].verse!==Ie.last.books[ze].chapters[Te+1].verse&&(t=!0),t&&Re>Oe.last.books[ze].chapters[Te].verse&&(Re=1,Te+=1),e&&Oe.last.books[ze].chapters[Te].verse>Ie.last.books[ze].chapters[Te].verse&&(Re=Le+1)}}const Ne=(t,e,o)=>{Ie=Pe(e),Oe=Pe(o);const i=t.match(/^\[([\d]*):([[\d]*):([\d])*\]$/);if(i)ze=parseInt(i[1]),Te=parseInt(i[2]),Le=parseInt(i[3]);else{const e=t.split(":");ze=parseInt(e[0]),Te=parseInt(e[1]),Le=parseInt(e[2])}switch(ze){case 15:case 18:!function(){const t=Oe.last.books[ze].chapters[Te].verse-Ie.last.books[ze].chapters[Te].verse;Re=Le+t,Re=t<0?Re<1?0:Re:Re>Oe.last.books[ze].chapters[Te].verse?Oe.last.books[ze].chapters[Te].verse:Re}();break;case 1:case 20:case 22:case 26:case 32:case 27:case 8:De();break;default:Re=Le}return i?`[${ze}:${Te}:${Re}]`:`${ze}:${Te}:${Re}`},Ue=new function(t){const e=(o=[...t,Se])?1===o.length?[...o[0]]:o.reduce(((t,e)=>((t,e)=>t.length?t.map(((t,o)=>((t,e)=>t.concat(e.filter((e=>-1===t.indexOf(e)))))(t,e[o]))):[...e])(t,e)),[]):[];var o;const i=(t=>{const e=(t=>t.reduce(((t,e)=>(e.forEach((o=>t[o]=e[0])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""})(e),n=Ae(e),r=e.map((t=>t.join("|"))).join("|"),s="\\d{1,3}",a="\\d{1,3}",l=new RegExp(`^(${r})\\s*(${s})[ ]*:[ ]*(${a})\\b`),c=new RegExp(`^(${r})[ ]*(${s})\\b`),h=new RegExp(`^(?:${r})$`),d=new RegExp(`(^|,|;)(${r})`,"g"),u=new RegExp(`,(${r})`,"g"),p=new RegExp(`(${r})(\\d)`,"g"),b=new RegExp(`^(${s})[ ]*:[ ]*(${a})\\b`),f=new RegExp(`^(?:${r})[ ]*ff`),m=new RegExp(`^(${r})(\\d|$)`,"g");function g(t,e,o){let n,r={};return""===t?{}:e?(o.book&&o.chapter&&o.verse?r={book:o.book,chapter:o.chapter}:o.book&&o.chapter&&(r={book:o.book}),r):void 0===t?{...o}:(r=(n=t.match(l))?{book:i(n[1]),chapter:n[2],verse:n[3]}:(n=t.match(c))?{book:i(n[1]),chapter:n[2]}:(n=t.match(h))?{book:i(n[0])}:(n=t.match(b))?{book:o.book,chapter:n[1],verse:n[2]}:(n=t.match(/(\d{1,3}\b)/))?o.verse?{book:o.book,chapter:o.chapter,verse:n[1]}:{book:o.book,chapter:n[1]}:{...o},r)}function v(t,e){let o,n,r=!1,[s,a]=t.split("-").map((t=>t.trim().toLowerCase()));return(/\d{1,3}[ ]*ff$/i.test(s)||f.test(s))&&(s=s.replace(/[ ]*ff$/,""),r=!0),(o=s.match(l))?(n={book:i(o[1]),chapter:o[2],verse:o[3]},e={...n}):(o=s.match(c))?(n={book:i(o[1]),chapter:o[2],verse:"1"},e={book:n.book,chapter:n.chapter}):(o=s.match(h))?(n={book:i(o[0]),chapter:"1",verse:"1"},e={book:n.book}):(o=s.match(b))?(n={book:e.book,chapter:o[1],verse:o[2]},e={...n}):(o=s.match(/(\d{1,3}\b)/))&&(e.verse?(n={book:e.book,chapter:e.chapter,verse:o[1]},e={...n}):(n={book:e.book,chapter:o[1],verse:"1"},e={book:n.book,chapter:n.chapter})),{start:n,end:g(a,r,e),ctx:e}}this.getVerseRanges=t=>{const{ranges:e}=t.split(/[,\n;]+/g).reduce(((t,e)=>{const o=v(e,t.ctx);return t.ctx=o.ctx,o.start&&t.ranges.push({start:o.start,end:o.end}),t}),{ctx:{book:"genesis"},ranges:[]});return e},this.bookNames=e,this.normaliseBookName=i,this.normaliseBookNameShort=n,this.partToRange=v,this.compressRangesText=t=>t.toLowerCase().replace(/\n+/g,";").replace(/\s/g,"").split(";").reduce(((t,e)=>[...t,e.split(",").reduce(((t,e)=>{const o=e.split("-").map((t=>t.replace(m,((t,e,o)=>`${n(e)}${o||""}`)))).join("-");return[...t,o]}),[])]),[]).join(";"),this.uncompressRangesText=t=>t.toLowerCase().replace(d,((t,e,o)=>`${e}${i(o)}`)).replace(u,((t,e)=>`, ${e}`)).replace(p,((t,e,o)=>`${e} ${o}`)).replace(/;/g,"\n")}([Ee,{key:"en",displayname:"english",abbreviations:[["genesis","gen","ge","gn"],["exodus","exo","ex","exod"],["leviticus","lev","le","lv"],["numbers","num","nu","nm","nb"],["deuteronomy","deut","dt"],["joshua","josh","jos","jsh"],["judges","judg","jdg","jg","jdgs"],["ruth","rth","ru"],["1 samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","1st samuel","first samuel"],["2 samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","2nd samuel","second samuel"],["1 kings","1 kgs","1 ki","1k","i kgs","1kgs","i ki","1ki","i kings","1kings","1st kgs","1st kings","first kings","first kgs","1kin"],["2 kings","2 kgs","2 ki","2k","ii kgs","2kgs","ii ki","2ki","ii kings","2kings","2nd kgs","2nd kings","second kings","second kgs","2kin"],["1 chronicles","1 chron","1 ch","i ch","1ch","1 chr","i chr","1chr","i chron","1chron","i chronicles","1chronicles","1st chronicles","first chronicles"],["2 chronicles","2 chron","2 ch","ii ch","2ch","ii chr","2chr","ii chron","2chron","ii chronicles","2chronicles","2nd chronicles","second chronicles"],["ezra","ezra","ezr"],["nehemiah","neh","ne"],["esther","esth","es"],["job","job","job","jb"],["psalm","pslm","ps","psalms","psa","psm","pss"],["proverbs","prov","pr","prv"],["ecclesiastes","eccles","ec","qoh","qoheleth"],["song of solomon","song","so","canticle of canticles","canticles","song of songs","sos"],["isaiah","isa","is"],["jeremiah","jer","je","jr"],["lamentations","lam","la"],["ezekiel","ezek","eze","ezk"],["daniel","dan","da","dn"],["hosea","hos","ho"],["joel","joel","joe","jl"],["amos","amos","am"],["obadiah","obad","ob"],["jonah","jnh","jon"],["micah","micah","mic"],["nahum","nah","na"],["habakkuk","hab","hab"],["zephaniah","zeph","zep","zp"],["haggai","hag","hg"],["zechariah","zech","zec","zc"],["malachi","mal","mal","ml"],["matthew","matt","mt"],["mark","mrk","mk","mr"],["luke","luk","lk"],["john","john","jn","jhn"],["acts","acts","ac"],["romans","rom","ro","rm"],["1 corinthians","1 cor","1 co","i co","1co","i cor","1cor","i corinthians","1corinthians","1st corinthians","first corinthians"],["2 corinthians","2 cor","2 co","ii co","2co","ii cor","2cor","ii corinthians","2corinthians","2nd corinthians","second corinthians"],["galatians","gal","ga"],["ephesians","ephes","eph"],["philippians","phil","php"],["colossians","col","col"],["1 thessalonians","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonians","1thessalonians","1st thessalonians","first thessalonians"],["2 thessalonians","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonians","2thessalonians","2nd thessalonians","second thessalonians"],["1 timothy","1 tim","1 ti","i ti","1ti","i tim","1tim","i timothy","1timothy","1st timothy","first timothy"],["2 timothy","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timothy","2timothy","2nd timothy","second timothy"],["titus","titus","tit"],["philemon","philem","phm"],["hebrews","hebrews","heb"],["james","james","jas","jm"],["1 peter","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i peter","1peter","1st peter","first peter"],["2 peter","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii peter","2peter","2nd peter","second peter"],["1 john","1 jn","i jn","1jn","i jo","1jo","i joh","1joh","i jhn","1 jhn","1jhn","i john","1john","1st john","first john"],["2 john","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2joh","ii jhn","2 jhn","2jhn","ii john","2john","2nd john","second john"],["3 john","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii john","3john","3rd john","third john"],["jude","jd"],["revelation","rev","re","the revelation"]]}].map((({abbreviations:t})=>t))),{bookNames:Be,getVerseRanges:Me}=Ue,Fe=Be.reduce(((t,e,o)=>(t[e[0]]=o,t)),{}),Ve=Be.reduce(((t,e,o)=>(t[o]=e[0],t)),{}),He=t=>{const e=[],o={},i={book:0,books:{}};return t.forEach(((t,n)=>{i.book=n,i.books[n]={chapter:0,chapters:{}},t.forEach(((t,r)=>{i.books[n].chapter=r,i.books[n].chapters[r]={verse:0},t.forEach((t=>{i.books[n].chapters[r].verse=+t.n,o[`${n}:${r}:${t.n}`]=e.length,e.push({hash:`${n}:${r}:${t.n}`,text:t.txt})}))}))})),{verseList:e,verseLookUp:o,last:i}},qe=(t,e)=>void 0===t||t>e?e:t,Ke=t=>Ve[t],We=t=>{const e=t.split(":");return{book:Ce[+e[0]],chapter:""+(+e[1]+1),verse:e[2]}},Je=({rangesText:t,versionName:e})=>Me(t||"gen - rev").map((t=>((t,e)=>{const{start:o,end:i}=e,n=Pe(t);if(!n)return{};const r=n.verseLookUp[`${Fe[o.book]}:${o.chapter-1}:${o.verse}`],s=n.last.book,a=qe(Fe[i.book],s),l=n.last.books[a].chapter,c=qe(i.chapter&&i.chapter-1,l),h=n.last.books[a].chapters[c].verse,d=qe(i.verse,h),u=n.verseLookUp[`${a}:${c}:${d}`];return{start:{...o,index:r},end:{book:Ke(a),chapter:`${c+1}`,verse:`${d}`,index:u}}})(e,t))),Ge=(t,e)=>{const o=((t,e)=>je[t].verseLookUp[e])(t,e),i=((t,e)=>je[t].verseList[e])(t,o);return{text:i?i.text:"",prettyRef:Xe(We(e))}},Ye=(t,e)=>{const o=e.map((({start:e,end:o})=>((t,e,o)=>((t,e)=>{const o=[];for(let i=t;i<=e;i++)o.push(i);return o})(e,o).map((e=>Pe(t).verseList[e].hash)))(t,e.index,o.index)));return[].concat(...o)},Xe=({book:t,chapter:e,verse:o})=>{return`${i=t,i.replace(/\b\w/g,(t=>t.toUpperCase()))} ${e}:${o}`;var i},Ze={},Qe=(t,e)=>(Ze[t]||(Ze[t]=fetch(e).then((e=>{if(e.status>=400)throw delete Ze[t],new Error("Bad res from server");return e.text()})).then((e=>{const o=e.split("|||").map((t=>t.split("||").map($e)));return((t,e)=>{je[t]=He(e)})(t,o),o}))),Ze[t]);let to="";const eo=t=>{const e=t.split("\n");return e.splice(0,1),e.map(oo)},oo=t=>{const[e,o,i,n,r,s]=t.split("\t");return{key:e+"-"+o+"-"+i+":"+n,verse:e+"-"+o+"-"+i,sort:n,words:r,refs:s}};function io(t){const[e,o,i]=t.split(":");return`${parseInt(e)+1}-${parseInt(o)+1}-${i}`}const no="/bybel2/";console.log("Github page prefix",no);var ro=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ao=(t,e,o,i)=>{for(var n,r=i>1?void 0:i?so(e,o):e,s=t.length-1;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&ro(e,o,r),r};const lo=vt(class extends yt{constructor(t){var e;if(super(t),t.type!==bt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,i;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(o?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return B}});var co=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};class ho extends rt{emit(t,e){const o=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}}co([ct()],ho.prototype,"dir",void 0),co([ct()],ho.prototype,"lang",void 0);var uo=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,po=a`
  ${uo}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;let bo=class extends ho{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return U`
      <slot
        part="base"
        class=${lo({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};bo.styles=po,ao([ct({reflect:!0})],bo.prototype,"variant",2),ao([ct({type:Boolean,reflect:!0})],bo.prototype,"pill",2),ao([ct({type:Boolean,reflect:!0})],bo.prototype,"pulse",2),bo=ao([at("sl-badge")],bo);let fo="";function mo(t){fo=t}const go={name:"default",resolver:t=>function(t=""){if(!fo){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)mo(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),mo(o.split("/").slice(0,-1).join("/"))}}return fo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)};const vo={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '};let yo=[go,{name:"system",resolver:t=>t in vo?`data:image/svg+xml,${encodeURIComponent(vo[t])}`:""}],_o=[];function wo(t){return yo.find((e=>e.name===t))}function ko(t,e){const o=Object.assign({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:n}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const n=e;if(t.has(n)){const e=t.get(n),r=this[n];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r))}})),n.call(this,t)}}}var xo=a`
  ${uo}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;const $o=Symbol(),Co=Symbol();let So;const Ao=new Map;let Eo=class extends ho{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(null==e?void 0:e.spriteSheet)return U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?$o:Co}catch(t){return Co}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return $o;So||(So=new DOMParser);const n=So.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):$o}catch(t){return $o}}connectedCallback(){var t;super.connectedCallback(),t=this,_o.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,_o=_o.filter((e=>e!==t))}getUrl(){const t=wo(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=wo(this.library),o=this.getUrl();if(!o)return void(this.svg=null);let i=Ao.get(o);if(i||(i=this.resolveIcon(o,e),Ao.set(o,i)),!this.initialRender)return;const n=await i;if(n===Co&&Ao.delete(o),o===this.getUrl())if(((t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e)(n))this.svg=n;else switch(n){case Co:case $o:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(t=null==e?void 0:e.mutator)||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};Eo.styles=xo,ao([ht()],Eo.prototype,"svg",2),ao([ct({reflect:!0})],Eo.prototype,"name",2),ao([ct()],Eo.prototype,"src",2),ao([ct()],Eo.prototype,"label",2),ao([ct({reflect:!0})],Eo.prototype,"library",2),ao([ko("label")],Eo.prototype,"handleLabelChange",1),ao([ko(["name","src","library"])],Eo.prototype,"setIcon",1),Eo=ao([at("sl-icon")],Eo);const jo=new Set,Po=new MutationObserver(Io),zo=new Map;let To,Lo=document.documentElement.dir||"ltr",Ro=document.documentElement.lang||navigator.language;function Io(){Lo=document.documentElement.dir||"ltr",Ro=document.documentElement.lang||navigator.language,[...jo.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Po.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class Oo{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){jo.add(this.host)}hostDisconnected(){jo.delete(this.host)}dir(){return`${this.host.dir||Lo}`.toLowerCase()}lang(){return`${this.host.lang||Ro}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t),n=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:n,region:r,primary:zo.get(`${n}-${r}`),secondary:zo.get(n)}}exists(t,e){var o;const{primary:i,secondary:n}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||n&&n[t]||e.includeFallback&&To&&To[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[t])n=o[t];else if(i&&i[t])n=i[t];else{if(!To||!To[t])return console.error(`No translation found for: ${String(t)}`),String(t);n=To[t]}return"function"==typeof n?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}!function(...t){t.map((t=>{const e=t.$code.toLowerCase();zo.has(e)?zo.set(e,Object.assign(Object.assign({},zo.get(e)),t)):zo.set(e,t),To||(To=t)})),Io()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"});class Do extends Oo{}var No=a`
  ${uo}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;let Uo=class extends ho{constructor(){super(...arguments),this.localize=new Do(this)}render(){return U`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Uo.styles=No,Uo=ao([at("sl-spinner")],Uo);const Bo=new WeakMap,Mo=new WeakMap,Fo=new WeakSet,Vo=new WeakMap;class Ho{constructor(t,e){(this.host=t).addController(this),this.options=Object.assign({form:t=>{if(t.hasAttribute("form")&&""!==t.getAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");if(o)return e.getElementById(o)}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!==(e=t.disabled)&&void 0!==e&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Vo.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Vo.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Bo.has(this.form)?Bo.get(this.form).add(this.host):Bo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Mo.has(this.form)||(Mo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&(null===(t=Bo.get(this.form))||void 0===t||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Mo.has(this.form)&&(this.form.reportValidity=Mo.get(this.form),Mo.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();!e&&!n&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,i.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null===(e=Bo.get(this.form))||void 0===e||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Vo.set(this.host,[])}handleInteraction(t){const e=Vo.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?Fo.add(t):Fo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!==(t=this.form)&&void 0!==t?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(Fo.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}}const qo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Object.assign(Object.assign({},qo),{valid:!1,valueMissing:!0})),Object.freeze(Object.assign(Object.assign({},qo),{valid:!1,customError:!0}));class Ko{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}const Wo=Symbol.for(""),Jo=t=>{if((null==t?void 0:t.r)===Wo)return null==t?void 0:t._$litStatic$},Go=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:Wo}),Yo=new Map,Xo=(t=>(e,...o)=>{const i=o.length;let n,r;const s=[],a=[];let l,c=0,h=!1;for(;c<i;){for(l=e[c];c<i&&void 0!==(r=o[c],n=Jo(r));)l+=n+e[++c],h=!0;a.push(r),s.push(l),c++}if(c===i&&s.push(e[i]),h){const t=s.join("$$lit$$");void 0===(e=Yo.get(t))&&(s.raw=s,Yo.set(t,e=s)),o=a}return t(e,...o)})(U),Zo=t=>null!=t?t:M;var Qo=a`
  ${uo}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;let ti=class extends ho{constructor(){super(),this.formControlController=new Ho(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Ko(this,"[default]","prefix","suffix"),this.localize=new Do(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener",this.handleHostClick=t=>{(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}get validity(){return this.isButton()?this.button.validity:qo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Go`a`:Go`button`;return Xo`
      <${e}
        part="base"
        class=${lo({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Zo(t?void 0:this.disabled)}
        type=${Zo(t?void 0:this.type)}
        title=${this.title}
        name=${Zo(t?void 0:this.name)}
        value=${Zo(t?void 0:this.value)}
        href=${Zo(t?this.href:void 0)}
        target=${Zo(t?this.target:void 0)}
        download=${Zo(t?this.download:void 0)}
        rel=${Zo(t?this.rel:void 0)}
        role=${Zo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Xo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Xo`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};ti.styles=Qo,ao([ut(".button")],ti.prototype,"button",2),ao([ht()],ti.prototype,"hasFocus",2),ao([ht()],ti.prototype,"invalid",2),ao([ct()],ti.prototype,"title",2),ao([ct({reflect:!0})],ti.prototype,"variant",2),ao([ct({reflect:!0})],ti.prototype,"size",2),ao([ct({type:Boolean,reflect:!0})],ti.prototype,"caret",2),ao([ct({type:Boolean,reflect:!0})],ti.prototype,"disabled",2),ao([ct({type:Boolean,reflect:!0})],ti.prototype,"loading",2),ao([ct({type:Boolean,reflect:!0})],ti.prototype,"outline",2),ao([ct({type:Boolean,reflect:!0})],ti.prototype,"pill",2),ao([ct({type:Boolean,reflect:!0})],ti.prototype,"circle",2),ao([ct()],ti.prototype,"type",2),ao([ct()],ti.prototype,"name",2),ao([ct()],ti.prototype,"value",2),ao([ct()],ti.prototype,"href",2),ao([ct()],ti.prototype,"target",2),ao([ct()],ti.prototype,"rel",2),ao([ct()],ti.prototype,"download",2),ao([ct()],ti.prototype,"form",2),ao([ct({attribute:"formaction"})],ti.prototype,"formAction",2),ao([ct({attribute:"formenctype"})],ti.prototype,"formEnctype",2),ao([ct({attribute:"formmethod"})],ti.prototype,"formMethod",2),ao([ct({attribute:"formnovalidate",type:Boolean})],ti.prototype,"formNoValidate",2),ao([ct({attribute:"formtarget"})],ti.prototype,"formTarget",2),ao([ko("disabled",{waitUntilFirstUpdate:!0})],ti.prototype,"handleDisabledChange",1),ti=ao([at("sl-button")],ti);const ei=(t="value")=>(e,o)=>{const i=e.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(e,r,s){var a;const l=i.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||b,i=("function"==typeof e?e:null!==(a=null==e?void 0:e.fromAttribute)&&void 0!==a?a:b.fromAttribute)(s,l.type);this[t]!==i&&(this[o]=i)}n.call(this,e,r,s)}},oi=vt(class extends yt{constructor(t){if(super(t),t.type!==mt&&t.type!==bt&&t.type!==gt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===B||e===M)return e;const o=t.element,i=t.name;if(t.type===mt){if(e===o[i])return B}else if(t.type===gt){if(!!e===o.hasAttribute(i))return B}else if(t.type===bt&&o.getAttribute(i)===e+"")return B;return Ct(t),e}});var ii=a`
  ${uo}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;let ni=class extends ho{constructor(){super(...arguments),this.formControlController=new Ho(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return U`
      <label
        part="base"
        class=${lo({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${Zo(this.value)}
          .indeterminate=${oi(this.indeterminate)}
          .checked=${oi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?U`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?U`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};ni.styles=ii,ao([ut('input[type="checkbox"]')],ni.prototype,"input",2),ao([ht()],ni.prototype,"hasFocus",2),ao([ct()],ni.prototype,"title",2),ao([ct()],ni.prototype,"name",2),ao([ct()],ni.prototype,"value",2),ao([ct({reflect:!0})],ni.prototype,"size",2),ao([ct({type:Boolean,reflect:!0})],ni.prototype,"disabled",2),ao([ct({type:Boolean,reflect:!0})],ni.prototype,"checked",2),ao([ct({type:Boolean,reflect:!0})],ni.prototype,"indeterminate",2),ao([ei("checked")],ni.prototype,"defaultChecked",2),ao([ct({reflect:!0})],ni.prototype,"form",2),ao([ct({type:Boolean,reflect:!0})],ni.prototype,"required",2),ao([ko("disabled",{waitUntilFirstUpdate:!0})],ni.prototype,"handleDisabledChange",1),ao([ko(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ni.prototype,"handleStateChange",1),ni=ao([at("sl-checkbox")],ni);var ri=a`
  ${uo}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let si=class extends ho{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Go`a`:Go`button`;return Xo`
      <${e}
        part="base"
        class=${lo({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Zo(t?void 0:this.disabled)}
        type=${Zo(t?void 0:"button")}
        href=${Zo(t?this.href:void 0)}
        target=${Zo(t?this.target:void 0)}
        download=${Zo(t?this.download:void 0)}
        rel=${Zo(t&&this.target?"noreferrer noopener":void 0)}
        role=${Zo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Zo(this.name)}
          library=${Zo(this.library)}
          src=${Zo(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};function ai(t,e,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,Object.assign(Object.assign({},o),{duration:li()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})}))}function li(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ci(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}si.styles=ri,ao([ut(".icon-button")],si.prototype,"button",2),ao([ht()],si.prototype,"hasFocus",2),ao([ct()],si.prototype,"name",2),ao([ct()],si.prototype,"library",2),ao([ct()],si.prototype,"src",2),ao([ct()],si.prototype,"href",2),ao([ct()],si.prototype,"target",2),ao([ct()],si.prototype,"download",2),ao([ct()],si.prototype,"label",2),ao([ct({type:Boolean,reflect:!0})],si.prototype,"disabled",2),si=ao([at("sl-icon-button")],si);const hi=new Map,di=new WeakMap;function ui(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function pi(t,e){hi.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function bi(t,e,o){const i=di.get(t);if(null==i?void 0:i[e])return ui(i[e],o.dir);const n=hi.get(e);return n?ui(n,o.dir):{keyframes:[],options:{duration:0}}}const fi=new Set;function mi(t){if(fi.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function gi(t){fi.delete(t),0===fi.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function vi(t,e){return new Promise((o=>{t.addEventListener(e,(function i(n){n.target===t&&(t.removeEventListener(e,i),o())}))}))}function yi(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}let _i=[];class wi{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){_i.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){_i=_i.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return _i[_i.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=function(t){var e,o;const i=[];return function t(e){e instanceof HTMLElement&&(i.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(t),{start:null!==(e=i.find((t=>yi(t))))&&void 0!==e?e:null,end:null!==(o=i.reverse().find((t=>yi(t))))&&void 0!==o?o:null}}(this.element),o="forward"===this.tabDirection?t:e;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}var ki=a`
  ${uo}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let xi=class extends ho{constructor(){super(...arguments),this.hasSlotController=new Ko(this,"footer"),this.localize=new Do(this),this.modal=new wi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),mi(this))}disconnectedCallback(){super.disconnectedCallback(),gi(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=bi(this,"dialog.denyClose",{dir:this.localize.dir()});ai(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),mi(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ci(this.dialog),ci(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=bi(this,"dialog.show",{dir:this.localize.dir()}),o=bi(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ai(this.panel,e.keyframes,e.options),ai(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ci(this.dialog),ci(this.overlay)]);const t=bi(this,"dialog.hide",{dir:this.localize.dir()}),e=bi(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ai(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),ai(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,gi(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vi(this,"sl-after-hide")}render(){return U`
      <div
        part="base"
        class=${lo({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Zo(this.noHeader?this.label:void 0)}
          aria-labelledby=${Zo(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":U`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};function $i(t){return t.charAt(0).toUpperCase()+t.slice(1)}xi.styles=ki,ao([ut(".dialog")],xi.prototype,"dialog",2),ao([ut(".dialog__panel")],xi.prototype,"panel",2),ao([ut(".dialog__overlay")],xi.prototype,"overlay",2),ao([ct({type:Boolean,reflect:!0})],xi.prototype,"open",2),ao([ct({reflect:!0})],xi.prototype,"label",2),ao([ct({attribute:"no-header",type:Boolean,reflect:!0})],xi.prototype,"noHeader",2),ao([ko("open",{waitUntilFirstUpdate:!0})],xi.prototype,"handleOpenChange",1),xi=ao([at("sl-dialog")],xi),pi("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),pi("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),pi("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),pi("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),pi("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ci=a`
  ${uo}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let Si=class extends ho{constructor(){super(...arguments),this.hasSlotController=new Ko(this,"footer"),this.localize=new Do(this),this.modal=new wi(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&!this.contained&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),mi(this)))}disconnectedCallback(){super.disconnectedCallback(),gi(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=bi(this,"drawer.denyClose",{dir:this.localize.dir()});ai(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),mi(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ci(this.drawer),ci(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=bi(this,`drawer.show${$i(this.placement)}`,{dir:this.localize.dir()}),o=bi(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ai(this.panel,e.keyframes,e.options),ai(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),gi(this)),await Promise.all([ci(this.drawer),ci(this.overlay)]);const t=bi(this,`drawer.hide${$i(this.placement)}`,{dir:this.localize.dir()}),e=bi(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ai(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),ai(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),mi(this)),this.open&&this.contained&&(this.modal.deactivate(),gi(this))}async show(){if(!this.open)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vi(this,"sl-after-hide")}render(){return U`
      <div
        part="base"
        class=${lo({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Zo(this.noHeader?this.label:void 0)}
          aria-labelledby=${Zo(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":U`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Si.styles=Ci,ao([ut(".drawer")],Si.prototype,"drawer",2),ao([ut(".drawer__panel")],Si.prototype,"panel",2),ao([ut(".drawer__overlay")],Si.prototype,"overlay",2),ao([ct({type:Boolean,reflect:!0})],Si.prototype,"open",2),ao([ct({reflect:!0})],Si.prototype,"label",2),ao([ct({reflect:!0})],Si.prototype,"placement",2),ao([ct({type:Boolean,reflect:!0})],Si.prototype,"contained",2),ao([ct({attribute:"no-header",type:Boolean,reflect:!0})],Si.prototype,"noHeader",2),ao([ko("open",{waitUntilFirstUpdate:!0})],Si.prototype,"handleOpenChange",1),ao([ko("contained",{waitUntilFirstUpdate:!0})],Si.prototype,"handleNoModalChange",1),Si=ao([at("sl-drawer")],Si),pi("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),pi("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),pi("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),pi("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),pi("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),pi("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),pi("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),pi("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),pi("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),pi("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),pi("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ai=a`
  ${uo}
  ${a`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;let Ei=class extends ho{constructor(){super(...arguments),this.formControlController=new Ho(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ko(this,"help-text","label"),this.localize=new Do(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,n=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return U`
      <div
        part="form-control"
        class=${lo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${lo({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${Zo(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Zo(this.placeholder)}
              minlength=${Zo(this.minlength)}
              maxlength=${Zo(this.maxlength)}
              min=${Zo(this.min)}
              max=${Zo(this.max)}
              step=${Zo(this.step)}
              .value=${oi(this.value)}
              autocapitalize=${Zo(this.autocapitalize)}
              autocomplete=${Zo(this.autocomplete)}
              autocorrect=${Zo(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Zo(this.pattern)}
              enterkeyhint=${Zo(this.enterkeyhint)}
              inputmode=${Zo(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?U`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?U`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?U`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:U`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};Ei.styles=Ai,ao([ut(".input__control")],Ei.prototype,"input",2),ao([ht()],Ei.prototype,"hasFocus",2),ao([ct()],Ei.prototype,"title",2),ao([ct({reflect:!0})],Ei.prototype,"type",2),ao([ct()],Ei.prototype,"name",2),ao([ct()],Ei.prototype,"value",2),ao([ei()],Ei.prototype,"defaultValue",2),ao([ct({reflect:!0})],Ei.prototype,"size",2),ao([ct({type:Boolean,reflect:!0})],Ei.prototype,"filled",2),ao([ct({type:Boolean,reflect:!0})],Ei.prototype,"pill",2),ao([ct()],Ei.prototype,"label",2),ao([ct({attribute:"help-text"})],Ei.prototype,"helpText",2),ao([ct({type:Boolean})],Ei.prototype,"clearable",2),ao([ct({type:Boolean,reflect:!0})],Ei.prototype,"disabled",2),ao([ct()],Ei.prototype,"placeholder",2),ao([ct({type:Boolean,reflect:!0})],Ei.prototype,"readonly",2),ao([ct({attribute:"password-toggle",type:Boolean})],Ei.prototype,"passwordToggle",2),ao([ct({attribute:"password-visible",type:Boolean})],Ei.prototype,"passwordVisible",2),ao([ct({attribute:"no-spin-buttons",type:Boolean})],Ei.prototype,"noSpinButtons",2),ao([ct({reflect:!0})],Ei.prototype,"form",2),ao([ct({type:Boolean,reflect:!0})],Ei.prototype,"required",2),ao([ct()],Ei.prototype,"pattern",2),ao([ct({type:Number})],Ei.prototype,"minlength",2),ao([ct({type:Number})],Ei.prototype,"maxlength",2),ao([ct()],Ei.prototype,"min",2),ao([ct()],Ei.prototype,"max",2),ao([ct()],Ei.prototype,"step",2),ao([ct()],Ei.prototype,"autocapitalize",2),ao([ct()],Ei.prototype,"autocorrect",2),ao([ct()],Ei.prototype,"autocomplete",2),ao([ct({type:Boolean})],Ei.prototype,"autofocus",2),ao([ct()],Ei.prototype,"enterkeyhint",2),ao([ct({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Ei.prototype,"spellcheck",2),ao([ct()],Ei.prototype,"inputmode",2),ao([ko("disabled",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleDisabledChange",1),ao([ko("step",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleStepChange",1),ao([ko("value",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleValueChange",1),Ei=ao([at("sl-input")],Ei);class ji{constructor(t,e=450){this._scroll_elem=null,this._currentY=0,this._previousY=0,this._scrollDirection="",this.offscreen=!1,this._handleScrollEvent=t=>{this._currentY=t.target.scrollTop,this._scrollDirection=(t=>{const e=!this._previousY||this._previousY<t?"down":"up";return this._previousY=t,e})(this._currentY);let e="down"===this._scrollDirection&&this._currentY>this.keep_zone;const o=e!==this.offscreen;this.offscreen=e,o&&this.host&&("up"===this._scrollDirection&&window.scrollTo(0,0),this.host.requestUpdate())},this.host=t,this.keep_zone=e,t.addController(this)}_registerScrollElement(){this._scroll_elem=document.querySelector("app-web-component")}hostConnected(){setTimeout((()=>{this._registerScrollElement(),this._scroll_elem&&this._scroll_elem.addEventListener("scroll",this._handleScrollEvent.bind(this))}),500)}hostDisconnected(){this._scroll_elem&&this._scroll_elem.removeEventListener("scroll",this._handleScrollEvent.bind(this))}}window.____pwa_install_button_deferred_prompt={},window.____pwa_install_button_installable=null,window.addEventListener("beforeinstallprompt",(t=>{window.____pwa_install_button_installable=!0,window.____pwa_install_button_deferred_prompt=t}));class Pi extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),window.____pwa_install_button_deferred_prompt=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))})),window.____pwa_install_button_installable&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),window.____pwa_install_button_deferred_prompt.prompt();const{outcome:e}=await window.____pwa_install_button_deferred_prompt.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),window.____pwa_install_button_deferred_prompt=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Pi);class zi extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){if(this.setAttribute("hidden",""),this.addEventListener("click",this._postMessage.bind(this)),"serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this._newWorker=t.installing,this._newWorker.addEventListener("statechange",(()=>{"installed"===this._newWorker.state&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this.removeAttribute("hidden"))}))})),t.waiting&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this._newWorker=t.waiting,this.removeAttribute("hidden"))),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)}))}}_postMessage(t){t.preventDefault(),this._newWorker.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",zi);var Ti='tool-tip {\n  --_p-inline: 1.5ch;\n  --_p-block: .75ch;\n  --_triangle-size: 7px;\n  --_bg: hsl(0, 0%, 20%);\n  --_shadow-alpha: 50%;\n\n  --isRTL: -1;\n\n  --_bottom-tip: conic-gradient(from -30deg at bottom, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) bottom / 100% 50% no-repeat;\n  --_top-tip: conic-gradient(from 150deg at top, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) top / 100% 50% no-repeat;\n  --_right-tip: conic-gradient(from -120deg at right, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) right / 50% 100% no-repeat;\n  --_left-tip: conic-gradient(from 60deg at left, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) left / 50% 100% no-repeat;\n\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n\n  opacity: 0;\n  transform: translateX(0) translateY(0);\n  transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));\n  transition: opacity .2s ease, transform .2s ease;\n\n  position: absolute;\n  z-index: 1;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 25ch;\n  text-align: left;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: normal;\n  line-height: initial;\n  padding: .75ch 1.5ch;\n  padding: var(--_p-block) var(--_p-inline);\n  margin: 0;\n  border-radius: 5px;\n  background: hsl(0, 0%, 20%);\n  background: var(--_bg);\n  color: CanvasText;\n  will-change: filter;\n  filter: \n    drop-shadow(0 3px 3px hsla(0, 0%, 0%, 0.5)) \n    drop-shadow(0 12px 12px hsla(0, 0%, 0%, 0.5));\n  filter: \n    drop-shadow(0 3px 3px hsla(0, 0%, 0%, var(--_shadow-alpha))) \n    drop-shadow(0 12px 12px hsla(0, 0%, 0%, var(--_shadow-alpha)));\n\n  /* light theme style adjustments */\n}\n\n@supports (background: conic-gradient(red 0deg, red 0deg 1deg, red 2deg)) {\ntool-tip {\n\n  --_bottom-tip: conic-gradient(from -30deg at bottom, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) bottom / 100% 50% no-repeat;\n  --_top-tip: conic-gradient(from 150deg at top, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) top / 100% 50% no-repeat;\n  --_right-tip: conic-gradient(from -120deg at right, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) right / 50% 100% no-repeat;\n  --_left-tip: conic-gradient(from 60deg at left, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) left / 50% 100% no-repeat;\n}\n}\n\n@media (prefers-color-scheme: light) {\n\n  tool-tip {\n    --_bg: white;\n    --_shadow-alpha: 15%;\n}\n  }\n\n[dir="rtl"] tool-tip {\n    --isRTL: 1;\n  }\n\n/* create a stacking context for elements with > tool-tips */\n\n:has(> tool-tip) {\n    position: relative;\n\n    /* when those parent elements have focus, hover, etc */\n}\n\n:has(> tool-tip):hover > tool-tip {\n      opacity: 1;\n      transition-delay: 200ms;\n    }\n\n:has(> tool-tip):focus-visible > tool-tip {\n      opacity: 1;\n      transition-delay: 200ms;\n    }\n\n:has(> tool-tip):active > tool-tip {\n      opacity: 1;\n      transition-delay: 200ms;\n    }\n\n/* prepend some prose for screen readers only */\n\ntool-tip::before {\n    content: "; Has tooltip: ";\n    clip: rect(1px, 1px, 1px, 1px);\n    -webkit-clip-path: inset(50%);\n            clip-path: inset(50%);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n  }\n\n/* tooltip shape is a pseudo element so we can cast a shadow */\n\ntool-tip::after {\n    content: "";\n    background: var(--_bg);\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    -webkit-mask: var(--_tip);\n            mask: var(--_tip);\n  }\n\n/* top tooltip styles */\n\ntool-tip[tip-position="top"],\n    tool-tip[tip-position="block-start"],\n    tool-tip:not([tip-position]),\n    tool-tip[tip-position="bottom"],\n    tool-tip[tip-position="block-end"] {\n    text-align: center;\n  }\n\n/* TOP || BLOCK START */\n\ntool-tip[tip-position="top"], tool-tip[tip-position="block-start"], tool-tip:not([tip-position]) {\n    left: 50%;\n    bottom: calc(100% + var(--_p-block) + var(--_triangle-size));\n    --_x: calc(50% * var(--isRTL));\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="top"]):not(:hover):not(:active) tool-tip {\n        --_y: 3px;\n  }\n      :has(> tool-tip[tip-position="block-start"]):not(:hover):not(:active) tool-tip {\n        --_y: 3px;\n  }\n      :has(> tool-tip:not([tip-position])):not(:hover):not(:active) tool-tip {\n        --_y: 3px;\n  }\n    }\n\ntool-tip[tip-position="top"]::after {\n      --_tip: var(--_bottom-tip);\n      bottom: calc(var(--_triangle-size) * -1);\n      border-bottom: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="block-start"]::after {\n      --_tip: var(--_bottom-tip);\n      bottom: calc(var(--_triangle-size) * -1);\n      border-bottom: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip:not([tip-position])::after {\n      --_tip: var(--_bottom-tip);\n      bottom: calc(var(--_triangle-size) * -1);\n      border-bottom: var(--_triangle-size) solid transparent;\n    }\n\n/* RIGHT || INLINE END */\n\ntool-tip[tip-position="right"], tool-tip[tip-position="inline-end"] {\n    left: calc(100% + var(--_p-inline) + var(--_triangle-size));\n    bottom: 50%;\n    --_y: 50%;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="right"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * -3px * -1);\n  }\n      :has(> tool-tip[tip-position="inline-end"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * -3px * -1);\n  }\n    }\n\ntool-tip[tip-position="right"]::after {\n      --_tip: var(--_left-tip);\n      left: calc(var(--_triangle-size) * -1);\n      border-left: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="inline-end"]::after {\n      --_tip: var(--_left-tip);\n      left: calc(var(--_triangle-size) * -1);\n      border-left: var(--_triangle-size) solid transparent;\n    }\n\n[dir="rtl"] tool-tip[tip-position="right"]::after {\n      --_tip: var(--_right-tip);\n    }\n\n[dir="rtl"] tool-tip[tip-position="inline-end"]::after {\n      --_tip: var(--_right-tip);\n    }\n\n/* BOTTOM || BLOCK END */\n\ntool-tip[tip-position="bottom"], tool-tip[tip-position="block-end"] {\n    left: 50%;\n    top: calc(100% + var(--_p-block) + var(--_triangle-size));\n    --_x: calc(50% * var(--isRTL));\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="bottom"]):not(:hover):not(:active) tool-tip {\n        --_y: -3px;\n  }\n      :has(> tool-tip[tip-position="block-end"]):not(:hover):not(:active) tool-tip {\n        --_y: -3px;\n  }\n    }\n\ntool-tip[tip-position="bottom"]::after {\n      --_tip: var(--_top-tip);\n      top: calc(var(--_triangle-size) * -1);\n      border-top: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="block-end"]::after {\n      --_tip: var(--_top-tip);\n      top: calc(var(--_triangle-size) * -1);\n      border-top: var(--_triangle-size) solid transparent;\n    }\n\n/* LEFT || INLINE START */\n\ntool-tip[tip-position="left"], tool-tip[tip-position="inline-start"] {\n    right: calc(100% + var(--_p-inline) + var(--_triangle-size));\n    bottom: 50%;\n    --_y: 50%;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="left"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * 3px * -1);\n  }\n      :has(> tool-tip[tip-position="inline-start"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * 3px * -1);\n  }\n    }\n\ntool-tip[tip-position="left"]::after {\n      --_tip: var(--_right-tip);\n      right: calc(var(--_triangle-size) * -1);\n      border-right: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="inline-start"]::after {\n      --_tip: var(--_right-tip);\n      right: calc(var(--_triangle-size) * -1);\n      border-right: var(--_triangle-size) solid transparent;\n    }\n\n[dir="rtl"] tool-tip[tip-position="left"]::after {\n      --_tip: var(--_left-tip);\n    }\n\n[dir="rtl"] tool-tip[tip-position="inline-start"]::after {\n      --_tip: var(--_left-tip);\n    }\n';let Li=class extends rt{constructor(){super(),this.reference="",this._rangesText="",this._filterText="",this._fullWords=!1,this._caseSensitive=!1,this.bibleScroll=new ji(this,100)}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.destroy()}destroy(){}_toggleCaseSensitive(t){this._caseSensitive=t.target.checked}_toggleFullWords(t){this._fullWords=t.target.checked}_updateRangeText(t){this.reference="",this._rangesText=t.target.value}_updateFilterText(t){this._filterText=t.target.value}_onToggleDraw(){this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,cancelable:!0}))}render(){const t={"hide-heading":this.bibleScroll.offscreen,"show-heading":!this.bibleScroll.offscreen};return U`
<div class="heading ${lo(t)}">
  <div class="reference-controls">
    <div>
      <sl-icon-button 
        name="list" 
        label="list"
        class="icon-button" 
        @click=${this._onToggleDraw}
      ></sl-icon-button>
      <tool-tip inert role="tooltip" tip-position="right">Bybel boeke</tool-tip>
    </div>
    <sl-input 
      clearable
      class="reference-input"
      placeholder="Verwysing"
      value=${""!==this.reference?this.reference:this._rangesText}
      @sl-input=${this._updateRangeText}
      @sl-clear=${()=>this._rangesText=""}
    >
      <sl-icon name="book" slot="prefix"></sl-icon>
      ${this._filterText.length>0?U`<sl-badge slot="suffix">Soek</sl-badge>`:M}
    </sl-input>
    <div>
      <sl-icon-button 
        name="search" 
        label="search"
        class="icon-button" 
        @click=${()=>this.dialog.show()}
      >
      </sl-icon-button>
      <tool-tip inert role="tooltip" tip-position="left">Soek 'n woord</tool-tip>
    </div>
    <pwa-install-button>
      <sl-icon-button name="box-arrow-in-down" class="icon-button"></sl-icon-button>
      <tool-tip inert role="tooltip" tip-position="left">Install app</tool-tip>
    </pwa-install-button>

    <pwa-update-available>
      <sl-icon-button name="box-arrow-down" class="icon-button"></sl-icon-button>
      <tool-tip inert role="tooltip" tip-position="left">Update app</tool-tip>
    </pwa-update-available>
  </div>
</div> 
<sl-dialog 
  label="Soek 'n woord"
  class="soek-dialog"
>
  <sl-input
    autofocus
    clearable
    class="controls-input"
    placeholder="Soek 'n woord"
    value=${this._filterText}
    @sl-input=${this._updateFilterText}
    @sl-clear=${()=>this._filterText=""}
  >
    <sl-icon name="search" slot="prefix"></sl-icon>
  </sl-input>
  <div class="controls">
    <div class="controls-checkbox">
      <sl-checkbox
        ?checked=${this._caseSensitive}
        @click=${this._toggleCaseSensitive}
      >
        LeTTeR
      </sl-checkbox>
    </div>
    <div class="controls-checkbox">
      <sl-checkbox
        ?checked=${this._fullWords}
        @click=${this._toggleFullWords}
      >
        Woord
      </sl-checkbox>
    </div>
  </div>
  <!--
<sl-button slot="footer" size="small" @click=${()=>this.dialog.hide()}>
Exit
<sl-icon slot="prefix" name="x-lg"></sl-icon>
</sl-button>
-->
</sl-dialog> 
<interlinear-bible 
  rangesText=${""!==this.reference?this.reference:this._rangesText}
  filterText=${this._filterText}
  ?caseSensitive=${this._caseSensitive}
  ?fullWords=${this._fullWords}
>
</interlinear-bible>`}};Li.styles=[a`
    :host{
      display: block;
    }
    .heading {
      position: sticky;
      top: 0px;
      left: 0px;
      z-index: 10;
      display: flex;
      gap: 1rem;
      transition: 0.4s ease-in-out;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    .icon-button {
      color: var(--sl-color-primary-500);
      margin: 10px 5px;
      font-size: var(--sl-font-size-large)
    }
    .reference-controls{
      display: flex;
      justify-content:flex-start;
      align-items: center;
      gap: 1rem;
    }
    .reference-input{
      flex-grow: 4;
      margin: 2px;
    }
    .controls {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
      align-items: center;
    }
    .controls-input{
      margin-bottom: 2rem;
    }
    .contols-checkbox {
      display: flex;
      align-items: center;
      flex-shrink: 1;
    }
    .hide-heading {
      translate: 0 -125px;
    }
    .show-heading {
      translate: none;
    }
    .soek-dialog {
      --width: 20rem;
    }

    @media screen and (max-width: 400px){
      .reference-input::part(input) {
        width: 7rem;
      }
      .reference-controls{
        gap: 0.4rem;
      }
      .soek-dialog {
        --width: 15rem;
      }
    }
  `,a`${s(Ti)}`],t([ct({type:String,reflect:!0})],Li.prototype,"reference",void 0),t([ht()],Li.prototype,"_rangesText",void 0),t([ht()],Li.prototype,"_filterText",void 0),t([ht()],Li.prototype,"_fullWords",void 0),t([ht()],Li.prototype,"_caseSensitive",void 0),t([ut("sl-dialog")],Li.prototype,"dialog",void 0),Li=t([at("bible-head")],Li);class Ri extends yt{constructor(t){if(super(t),this.it=M,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||null==t)return this._t=void 0,this.it=t;if(t===B)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ri.directiveName="unsafeHTML",Ri.resultType=1;const Ii=vt(Ri);var Oi=".ripple-box {\n  display: block;\n  position: relative; /* MUST HAVE for MWC-RIPPLE */\n  justify-content: center;\n  flex-direction: column;\n  padding: 4px;\n}\n.ripple-box:hover {\n    background-color: var(--sl-color-neutral-100);\n    cursor: pointer;\n  }\n.ripple-box[activated] {\n    background-color: var(--sl-color-primary-100);\n  }\n.ripple-box[activated]:hover {\n    background-color: var(--sl-color-primary-200);\n  }\n";let Di=class extends rt{constructor(){super(),this.rangesText="",this.filterText="",this.fullWords=!1,this.caseSensitive=!1,this._verses=[],this._hashList=[],this._versionName="afr",this._altVersionName="kjv",this._onVerseClicked=t=>{const e=t.currentTarget;if(e){if(null!==e.getAttribute("activated")){e.removeAttribute("activated");const t=e.closest(".container");if(t){const o=e.nextSibling;t.removeChild(o)}return}e.setAttribute("activated","");const t=e.dataset.hash;if(t){const o=io(Ne(t,this._versionName,this._altVersionName)),i=document.createElement("tsk-refs");i.setAttribute("refs",o),e.after(i)}}}}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.initializeBible()}disconnectedCallback(){this.destroy()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this._setVerses()}initializeBible(){let t=`${window.origin}${no}resources/${this._versionName}.txt`;Qe(this._versionName,t).then((()=>{t=`${window.origin}${no}resources/${this._altVersionName}.txt`,Qe(this._altVersionName,t).then((()=>{this._setVerses()})).catch((t=>console.log("Error loading bibles",t)))})).catch(console.log)}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",ke)}))}async _setVerses(){const t=((t,e=!1,o=!1)=>{const i=/(["'])(\\\1|.)*?\1/g,n=t.match(i)||[],r=t.replace(i,"").match(/[^\s"']+/g)||[],s=n.map((t=>t.substring(1,t.length-1))),a=o?"":"i",l=e?"\\b":"",c=[...s,...r].map((t=>new RegExp(l+t+l,a)));return t=>{let e=0;for(;c[e]&&c[e].test(t);)e++;return e===c.length}})(this.filterText,this.fullWords,this.caseSensitive);if(this.rangesText.length<2)return;const e=[],o=Je({rangesText:this.rangesText,versionName:this._versionName});if(0===o.length)return;this._hashList=Ye(this._versionName,o);let i=0;for(let o of this._hashList){const n=Ge(this._versionName,o);if(t(n.text)){const t=Ne(o,this._versionName,this._altVersionName),r=Ge(this._altVersionName,t),s={afr:n,kjv:await this._style_KJV_verse(io(t),r),uuid:this._uuid(),hash:o};e.push(s),i++}if(i>99)break}this._verses=e}_getTSKRefs(t){return new Promise(((e,o)=>{if(!this._ixdb)return null;{const i=this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t));i.onsuccess=t=>{let o=t.target.result;return o.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),e(o)},i.onerror=t=>o(t)}}))}async _style_KJV_verse(t,e){try{const o=await this._getTSKRefs(t);o&&o.length>0&&o.forEach((t=>{e.text=e.text.replace(t.words,"<b>"+t.words+"</b>")}))}catch(t){console.log("Error Formatting KJV",t)}return e}_uuid(){return Math.random().toString(36).substring(2,12)}destroy(){}render(){return U`
        <div class="container">
          ${Et(this._verses,(t=>t.uuid),(t=>U`
                <div class="ripple-box"
                  data-uuid=${t.uuid}
                  data-hash=${t.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${t.afr.prettyRef} ${t.afr.text}
                  </p>
                  ${t.kjv.text.length>0?U`
                      <p class="kjvtext" >
                        ${t.kjv.prettyRef} ${Ii(t.kjv.text)}
                      </p>

                      `:M}
                </div>
               `))}
        </div>
    `}};function Ni(t){for(var e=arguments.length,o=Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+t+(o.length?" "+o.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ui(t){return!!t&&!!t[Cn]}function Bi(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var o=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return o===Object||"function"==typeof o&&Function.toString.call(o)===Sn}(t)||Array.isArray(t)||!!t[$n]||!!(null===(e=t.constructor)||void 0===e?void 0:e[$n])||qi(t)||Ki(t))}function Mi(t,e,o){void 0===o&&(o=!1),0===Fi(t)?(o?Object.keys:An)(t).forEach((function(i){o&&"symbol"==typeof i||e(i,t[i],t)})):t.forEach((function(o,i){return e(i,o,t)}))}function Fi(t){var e=t[Cn];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:qi(t)?2:Ki(t)?3:0}function Vi(t,e){return 2===Fi(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Hi(t,e,o){var i=Fi(t);2===i?t.set(e,o):3===i?t.add(o):t[e]=o}function qi(t){return _n&&t instanceof Map}function Ki(t){return wn&&t instanceof Set}function Wi(t){return t.o||t.t}function Ji(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=En(t);delete e[Cn];for(var o=An(e),i=0;i<o.length;i++){var n=o[i],r=e[n];!1===r.writable&&(r.writable=!0,r.configurable=!0),(r.get||r.set)&&(e[n]={configurable:!0,writable:!0,enumerable:r.enumerable,value:t[n]})}return Object.create(Object.getPrototypeOf(t),e)}function Gi(t,e){return void 0===e&&(e=!1),Xi(t)||Ui(t)||!Bi(t)||(Fi(t)>1&&(t.set=t.add=t.clear=t.delete=Yi),Object.freeze(t),e&&Mi(t,(function(t,e){return Gi(e,!0)}),!0)),t}function Yi(){Ni(2)}function Xi(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function Zi(t){var e=jn[t];return e||Ni(18,t),e}function Qi(){return vn}function tn(t,e){e&&(Zi("Patches"),t.u=[],t.s=[],t.v=e)}function en(t){on(t),t.p.forEach(rn),t.p=null}function on(t){t===vn&&(vn=t.l)}function nn(t){return vn={p:[],l:vn,h:t,m:!0,_:0}}function rn(t){var e=t[Cn];0===e.i||1===e.i?e.j():e.O=!0}function sn(t,e){e._=e.p.length;var o=e.p[0],i=void 0!==t&&t!==o;return e.h.g||Zi("ES5").S(e,t,i),i?(o[Cn].P&&(en(e),Ni(4)),Bi(t)&&(t=an(e,t),e.l||cn(e,t)),e.u&&Zi("Patches").M(o[Cn].t,t,e.u,e.s)):t=an(e,o,[]),en(e),e.u&&e.v(e.u,e.s),t!==xn?t:void 0}function an(t,e,o){if(Xi(e))return e;var i=e[Cn];if(!i)return Mi(e,(function(n,r){return ln(t,i,e,n,r,o)}),!0),e;if(i.A!==t)return e;if(!i.P)return cn(t,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var n=4===i.i||5===i.i?i.o=Ji(i.k):i.o,r=n,s=!1;3===i.i&&(r=new Set(n),n.clear(),s=!0),Mi(r,(function(e,r){return ln(t,i,n,e,r,o,s)})),cn(t,n,!1),o&&t.u&&Zi("Patches").N(i,o,t.u,t.s)}return i.o}function ln(t,e,o,i,n,r,s){if(Ui(n)){var a=an(t,n,r&&e&&3!==e.i&&!Vi(e.R,i)?r.concat(i):void 0);if(Hi(o,i,a),!Ui(a))return;t.m=!1}else s&&o.add(n);if(Bi(n)&&!Xi(n)){if(!t.h.D&&t._<1)return;an(t,n),e&&e.A.l||cn(t,n)}}function cn(t,e,o){void 0===o&&(o=!1),!t.l&&t.h.D&&t.m&&Gi(e,o)}function hn(t,e){var o=t[Cn];return(o?Wi(o):t)[e]}function dn(t,e){if(e in t)for(var o=Object.getPrototypeOf(t);o;){var i=Object.getOwnPropertyDescriptor(o,e);if(i)return i;o=Object.getPrototypeOf(o)}}function un(t){t.P||(t.P=!0,t.l&&un(t.l))}function pn(t){t.o||(t.o=Ji(t.t))}function bn(t,e,o){var i=qi(e)?Zi("MapSet").F(e,o):Ki(e)?Zi("MapSet").T(e,o):t.g?function(t,e){var o=Array.isArray(t),i={i:o?1:0,A:e?e.A:Qi(),P:!1,I:!1,R:{},l:e,t:t,k:null,o:null,j:null,C:!1},n=i,r=Pn;o&&(n=[i],r=zn);var s=Proxy.revocable(n,r),a=s.revoke,l=s.proxy;return i.k=l,i.j=a,l}(e,o):Zi("ES5").J(e,o);return(o?o.A:Qi()).p.push(i),i}function fn(t){return Ui(t)||Ni(22,t),function t(e){if(!Bi(e))return e;var o,i=e[Cn],n=Fi(e);if(i){if(!i.P&&(i.i<4||!Zi("ES5").K(i)))return i.t;i.I=!0,o=mn(e,n),i.I=!1}else o=mn(e,n);return Mi(o,(function(e,n){i&&function(t,e){return 2===Fi(t)?t.get(e):t[e]}(i.t,e)===n||Hi(o,e,t(n))})),3===n?new Set(o):o}(t)}function mn(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Ji(t)}Di.styles=[a`
    :host{
      display: block;
    }
    .afrtext {
      margin: 0px;
      padding: 2px;
    }
    .kjvtext {
      margin: 0px;
      padding: 2px;
      font-style: italic;
      font-weight: lighter;
      font-size: smaller;
    }
    b {
      font-weight: var(--sl-font-weight-bold);
    }
  `,a`${s(Oi)}`],t([ct({type:String,attribute:!0})],Di.prototype,"rangesText",void 0),t([ct({type:String,attribute:!0})],Di.prototype,"filterText",void 0),t([ct({type:Boolean,attribute:!0})],Di.prototype,"fullWords",void 0),t([ct({type:Boolean,attribute:!0})],Di.prototype,"caseSensitive",void 0),t([ht()],Di.prototype,"_verses",void 0),t([ht()],Di.prototype,"_hashList",void 0),t([we({context:xe})],Di.prototype,"_ixdb",void 0),t([ut("#input")],Di.prototype,"_input",void 0),Di=t([at("interlinear-bible")],Di);var gn,vn,yn="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),_n="undefined"!=typeof Map,wn="undefined"!=typeof Set,kn="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,xn=yn?Symbol.for("immer-nothing"):((gn={})["immer-nothing"]=!0,gn),$n=yn?Symbol.for("immer-draftable"):"__$immer_draftable",Cn=yn?Symbol.for("immer-state"):"__$immer_state",Sn=""+Object.prototype.constructor,An="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,En=Object.getOwnPropertyDescriptors||function(t){var e={};return An(t).forEach((function(o){e[o]=Object.getOwnPropertyDescriptor(t,o)})),e},jn={},Pn={get:function(t,e){if(e===Cn)return t;var o=Wi(t);if(!Vi(o,e))return function(t,e,o){var i,n=dn(e,o);return n?"value"in n?n.value:null===(i=n.get)||void 0===i?void 0:i.call(t.k):void 0}(t,o,e);var i=o[e];return t.I||!Bi(i)?i:i===hn(t.t,e)?(pn(t),t.o[e]=bn(t.A.h,i,t)):i},has:function(t,e){return e in Wi(t)},ownKeys:function(t){return Reflect.ownKeys(Wi(t))},set:function(t,e,o){var i=dn(Wi(t),e);if(null==i?void 0:i.set)return i.set.call(t.k,o),!0;if(!t.P){var n=hn(Wi(t),e),r=null==n?void 0:n[Cn];if(r&&r.t===o)return t.o[e]=o,t.R[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(o,n)&&(void 0!==o||Vi(t.t,e)))return!0;pn(t),un(t)}return t.o[e]===o&&(void 0!==o||e in t.o)||Number.isNaN(o)&&Number.isNaN(t.o[e])||(t.o[e]=o,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==hn(t.t,e)||e in t.t?(t.R[e]=!1,pn(t),un(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var o=Wi(t),i=Reflect.getOwnPropertyDescriptor(o,e);return i?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:i.enumerable,value:o[e]}:i},defineProperty:function(){Ni(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Ni(12)}},zn={};Mi(Pn,(function(t,e){zn[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),zn.deleteProperty=function(t,e){return zn.set.call(this,t,e,void 0)},zn.set=function(t,e,o){return Pn.set.call(this,t[0],e,o,t[0])};var Tn=function(){function t(t){var e=this;this.g=kn,this.D=!0,this.produce=function(t,o,i){if("function"==typeof t&&"function"!=typeof o){var n=o;o=t;var r=e;return function(t){var e=this;void 0===t&&(t=n);for(var i=arguments.length,s=Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return r.produce(t,(function(t){var i;return(i=o).call.apply(i,[e,t].concat(s))}))}}var s;if("function"!=typeof o&&Ni(6),void 0!==i&&"function"!=typeof i&&Ni(7),Bi(t)){var a=nn(e),l=bn(e,t,void 0),c=!0;try{s=o(l),c=!1}finally{c?en(a):on(a)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(t){return tn(a,i),sn(t,a)}),(function(t){throw en(a),t})):(tn(a,i),sn(s,a))}if(!t||"object"!=typeof t){if(void 0===(s=o(t))&&(s=t),s===xn&&(s=void 0),e.D&&Gi(s,!0),i){var h=[],d=[];Zi("Patches").M(t,s,h,d),i(h,d)}return s}Ni(21,t)},this.produceWithPatches=function(t,o){if("function"==typeof t)return function(o){for(var i=arguments.length,n=Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return e.produceWithPatches(o,(function(e){return t.apply(void 0,[e].concat(n))}))};var i,n,r=e.produce(t,o,(function(t,e){i=t,n=e}));return"undefined"!=typeof Promise&&r instanceof Promise?r.then((function(t){return[t,i,n]})):[r,i,n]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){Bi(t)||Ni(8),Ui(t)&&(t=fn(t));var e=nn(this),o=bn(this,t,void 0);return o[Cn].C=!0,on(e),o},e.finishDraft=function(t,e){var o=(t&&t[Cn]).A;return tn(o,e),sn(void 0,o)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!kn&&Ni(20),this.g=t},e.applyPatches=function(t,e){var o;for(o=e.length-1;o>=0;o--){var i=e[o];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}o>-1&&(e=e.slice(o+1));var n=Zi("Patches").$;return Ui(t)?n(t,e):this.produce(t,(function(t){return n(t,e)}))},t}(),Ln=new Tn,Rn=Ln.produce;Ln.produceWithPatches.bind(Ln),Ln.setAutoFreeze.bind(Ln),Ln.setUseProxies.bind(Ln),Ln.applyPatches.bind(Ln),Ln.createDraft.bind(Ln),Ln.finishDraft.bind(Ln);let In=class extends rt{constructor(){super(),this.tskRefs=[]}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.refs&&this._getAll(this.refs)}disconnectedCallback(){this.destroy()}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",ke)}))}_readIXDB(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(t)).onsuccess=t=>{const e=t.target.result;e&&(this.tskRefs=Rn(this.tskRefs,(t=>(t.push({display:!1,ref:e.value}),t.sort(((t,e)=>parseInt(t.ref.sort)-parseInt(e.ref.sort))),t))),e.continue())})}_getAll(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t)).onsuccess=t=>{let e=t.target.result;e.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),e=e.map((t=>({display:!1,ref:t}))),this.tskRefs=Rn(this.tskRefs,(()=>e))})}destroy(){}render(){return U`
    <div class="refs-container">
      <mwc-list>
      ${Et(this.tskRefs,(t=>t.ref.key),((t,e)=>U`
            <div class="ripple-box" @click=${o=>{const i=o.currentTarget;t.display?i.removeAttribute("activated"):i.setAttribute("activated",""),this.tskRefs=Rn(this.tskRefs,(t=>(t[e].display=!t[e].display,t)))}}
            >
              <p class="ref-word">${t.ref.words}</p>
            </div>
            ${!0===t.display?U`<interlinear-bible rangesText=${t.ref.refs}></interlinear-bible>`:""}
         `))}  
      </mwc-list>  
    </div>
    `}};In.styles=[a`
    :host {
      display: block;
    }
    .refs-container {
      border: 1px solid var(--sl-color-primary-400);
      border-radius: 5px;
      margin: 2px;
      padding: 5px;
    }
    .ref-word {
      font-weight: var(--sl-font-weight-bold);
      font-size: var(--sl-font-size-medium);
      margin: 0.5rem 2rem;
    }
  `,a`${s(Oi)}`],t([ct({type:String,attribute:!0})],In.prototype,"refs",void 0),t([we({context:xe})],In.prototype,"_ixdb",void 0),t([ht()],In.prototype,"tskRefs",void 0),In=t([at("tsk-refs")],In);var On={environment:"development",appName:"1953/KJV Interliniêre Byble",appDescription:"1953/KJV Interliniêre Byble",environment:"production"};const Dn=(t,e,o)=>{let i=document.head.querySelector(`meta[${t}="${e}"]`);i||(i=document.createElement("meta"),i.setAttribute(t,e),document.head.appendChild(i)),i.setAttribute("content",o)},Nn=t=>{const{title:e,titleTemplate:o,description:i,image:n,url:r}=t;if(e){const t=o?o.replace("%s",e):e;document.title=t,Dn("property","og:title",t)}i?(Dn("name","description",i),Dn("property","og:description",i)):null===i&&(Dn("name","description",""),Dn("property","og:description","")),n?(n.url&&Dn("property","og:image",n.url),n.alt&&Dn("property","og:image:alt",n.alt),n.width&&Dn("property","og:image:width",n.width),n.height&&Dn("property","og:image:height",n.height)):null===n&&(Dn("property","og:image",""),Dn("property","og:image:alt",""),Dn("property","og:image:width",""),Dn("property","og:image:height","")),r&&(((t,e)=>{let o=document.head.querySelector(`link[rel="${t}"]`);o||(o=document.createElement("link"),o.setAttribute("rel",t),document.head.appendChild(o)),o.setAttribute("href",e)})("canonical",r),Dn("property","og:url",r))};class Un extends rt{constructor(){super(...arguments),this.defaultTitleTemplate=`%s | ${On.appName}`}get defaultMeta(){return{url:window.location.href,titleTemplate:this.defaultTitleTemplate}}meta(){}updated(t){super.updated(t);const e=this.meta();e&&Nn({...this.defaultMeta,...(e.titleTemplate||null===e.titleTemplate)&&{titleTemplate:e.titleTemplate},...e})}}t([ht()],Un.prototype,"location",void 0);let Bn=class extends Un{firstUpdated(){const t=new CSSStyleSheet;t.replace(Ti).then((()=>{this.shadowRoot.adoptedStyleSheets=[t]}))}render(){return U`
      <section>
        <h1>Home</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <div style="display: inline-block">
          <sl-icon-button name="gear" label="Settings"> </sl-icon-button>
          <tool-tip inert role="tooltip" tip-position="inline-end"
            >Gear button</tool-tip
          >
        </div>

        <p>Here you can see 
          <a href="/error">
           the not found page
            <tool-tip inert role="tool-tip">Page does not exist</tool-tip>
          </a>.
        </p>
      </section>
    `}meta(){return{title:On.appName,titleTemplate:null,description:On.appDescription}}};var Mn;Bn.styles=a`
    section {
      padding: 1rem;
    }
  `,Bn=t([at("tool-tip-test")],Bn),mo("/resources/shoelace");const Fn="/bybel2/";console.log("ModulePath: ",Fn);let Vn=Mn=class extends rt{_unSelect_items(){this.renderRoot.querySelectorAll(".ripple-box").forEach((t=>{t.removeAttribute("activated")}))}_toggleActive(t){this._unSelect_items();t.currentTarget.setAttribute("activated","")}_toggleTheme(){"dark"===this._theme?(this._theme="light",this._themeIcon="moon",document.querySelector("html").className=""):(this._theme="dark",this._themeIcon="brightness-high",document.querySelector("html").className="sl-theme-dark")}connectedCallback(){super.connectedCallback()}constructor(){super(),this._dbName="idxDB",this._ixdb={ixdb:void 0},this._num_chapters=10,this._selected_chapter=10,this._selected_book="",this._theme="light",this._themeIcon="moon",this._router=new fe(this,[{path:Fn,render:this.render_home},{path:Fn+"/",render:this.render_home},{path:Fn+"/bible",render:()=>U`<bible-head></bible-head>`},{path:Fn+"/chat",render:()=>U`<h1>Chat app not available in off line mode</h1>`},{pattern:new URLPattern({pathname:Fn+"/tooltip"}),render:()=>U`<tool-tip-test></tool-tip-test>`}],{fallback:{render:()=>U`<h1>404 Route not found</h1> <p>In single page app router!</p>`}}),this.initialize_IDB()}appendStyles(){const t=new CSSStyleSheet;t.replace(Ti).then((()=>{this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t]}))}firstUpdated(){}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",ke)}))}initialize_IDB(){const t=indexedDB.open(this._dbName,1);t.onerror=t=>{alert("Error accessing TSK database!"+t.target.result)};const e=t=>{if(Mn.loadingIXDB)return;Mn.loadingIXDB=!0;(async t=>{if(to)return eo(to);const e=await fetch(t);if(!e.ok)throw new Error("Bad res from server");return to=await e.text(),eo(to)})(`${window.origin}${no}resources/tsk.txt`).then((e=>{console.log("tsk loaded!");const o=t.transaction("xref","readwrite").objectStore("xref");e.forEach((t=>{o.add(t)})),console.log("All done!")})).catch((t=>{console.log("Failed to load TSK →",t),alert("Failed to create TSK database! No cross references are available. Try using a reload.")}))};t.onsuccess=t=>{this._ixdb.ixdb=t.target.result;const o=this._ixdb.ixdb.transaction("xref").objectStore("xref").count();o.onsuccess=()=>{0===o.result&&e(this._ixdb.ixdb)}},t.onupgradeneeded=t=>{const o=t.target.result;console.log("Creating a new IDB instance for tsk!");const i=o.createObjectStore("xref",{keyPath:"key"});i.createIndex("verse","verse",{unique:!1}),i.transaction.oncomplete=()=>{e(o)}}}async gotoRef(t){if(void 0!==t){const e=t;history.pushState({},"",e),await this._router.goto(e)}}_setBook(t,e){this._toggleActive(t),this._num_chapters=Pe("afr").last.books[e].chapter+1,this._selected_book=Ce[e],this.dialog.show()}_setChapter(t){this._selected_chapter=t,this.dialog.hide(),this.drawer.hide()}render(){return U`${this._router.outlet()}`}render_home(){return U`
      <sl-dialog
        label="Kies 'n hoofstuk."
      >
        ${function*(t,e){if(void 0!==t){let o=0;for(const i of t)yield e(i,o++)}}(function*(t,e,o=1){const i=void 0===e?0:t;null!=e||(e=t);for(let t=i;o>0?t<e:e<t;t+=o)yield t}(this._num_chapters),(t=>U`<sl-button 
            class="chapter-button"
            variant="text"
            @click=${()=>this._setChapter(t+1)}
          >
            ${t+1}
          </sl-button>`))}
      </sl-dialog>
      <sl-drawer label="Bybel boeke" placement="start">
      <div style="align-self: center;"
          slot="header-actions" 
       > 
        <sl-icon-button 
          name=${this._themeIcon}
          @click=${this._toggleTheme}
        >
        </sl-icon-button>
        <tool-tip inert role="tooltip" tip-position="left">Switch theme</tool-tip>
      </div>    
      ${()=>this.render_menu()}
      </sl-drawer>
      <bible-head 
        reference=${""!==this._selected_book?this._selected_book+" "+this._selected_chapter:M}
        @toggle-drawer=${()=>this.drawer.show()}
      > </bible-head>
      `}render_menu(){return U`
        ${Et(Ee.abbreviations,(t=>t[0]),((t,e)=>U`
          <div class="ripple-box"
            @click=${t=>{this._setBook(t,e)}}
          >
            <p class="book-name">${t[0]}</p>
          </div>

        `))}
    `}};Vn.loadingIXDB=!1,Vn.styles=[a`
    :host {
      display: block; /* customElement defaults to inline!!*/
      height: 100vh;
      padding: 0px 5px 5px 5px;
      overflow-y: scroll; /* sets where we are goining to attach the scroller evemnt listener - see BibleHead component & controller */
    }
    .book-name {
      margin: 0.5rem 2rem;
    }
    .chapter-button {
      width: 4rem;
    }
    .chapter-button::part(base):hover {
      background-color: var(--sl-color-primary-50);
    }

    `,a`${s(Ti)}`,a`${s(Oi)}`],t([ut("sl-drawer")],Vn.prototype,"drawer",void 0),t([ut("sl-dialog")],Vn.prototype,"dialog",void 0),t([function({context:t}){return dt({finisher:(e,o)=>{const i=new WeakMap;e.addInitializer((e=>{i.set(e,new _e(e,{context:t}))}));const n=Object.getOwnPropertyDescriptor(e.prototype,o),r=null==n?void 0:n.set,s={...n,set:function(t){var e;null===(e=i.get(this))||void 0===e||e.setValue(t),r&&r.call(this,t)}};Object.defineProperty(e.prototype,o,s)}})}({context:xe}),ht()],Vn.prototype,"_ixdb",void 0),t([ht()],Vn.prototype,"_num_chapters",void 0),t([ht()],Vn.prototype,"_selected_chapter",void 0),t([ht()],Vn.prototype,"_selected_book",void 0),t([ht()],Vn.prototype,"_themeIcon",void 0),Vn=Mn=t([at("app-web-component")],Vn);
