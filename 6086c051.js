import{i as t,c as e,_ as i,e as r,a as o,S as n,x as s,o as l,n as a,b as c,d as u,t as p,f as d,T as h,A as f,s as b,g as v,h as m,w as g,F as _,l as y,H as x,L as k,r as w,j as $,k as C,m as z,p as T,q as S,u as P,v as E,y as A,z as I,B as V,C as O,D as j,E as R,G as D,I as B}from"./561b0dae.js";class F{constructor(t,e=450){this._scroll_elem=null,this._currentY=0,this._previousY=0,this._scrollDirection="",this.offscreen=!1,this._handleScrollEvent=t=>{this._currentY=t.target.scrollTop,this._scrollDirection=(t=>{const e=!this._previousY||this._previousY<t?"down":"up";return this._previousY=t,e})(this._currentY);let e="down"===this._scrollDirection&&this._currentY>this.keep_zone;const i=e!==this.offscreen;this.offscreen=e,i&&this.host&&("up"===this._scrollDirection&&window.scrollTo(0,0),this.host.requestUpdate())},this.host=t,this.keep_zone=e,t.addController(this)}_registerScrollElement(){this._scroll_elem=document.querySelector("app-web-component")}hostConnected(){setTimeout((()=>{this._registerScrollElement(),this._scroll_elem&&this._scroll_elem.addEventListener("scroll",this._handleScrollEvent.bind(this))}),500)}hostDisconnected(){this._scroll_elem&&this._scroll_elem.removeEventListener("scroll",this._handleScrollEvent.bind(this))}}var N=t`
  ${e}

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
`;let L=class extends n{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return s`
      <slot
        part="base"
        class=${l({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};L.styles=N,i([r({reflect:!0})],L.prototype,"variant",2),i([r({type:Boolean,reflect:!0})],L.prototype,"pill",2),i([r({type:Boolean,reflect:!0})],L.prototype,"pulse",2),L=i([o("sl-badge")],L);const U=(t="value")=>(e,i)=>{const r=e.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(e,n,s){var l;const c=r.getPropertyOptions(t);if(e===("string"==typeof c.attribute?c.attribute:t)){const e=c.converter||a,r=("function"==typeof e?e:null!==(l=null==e?void 0:e.fromAttribute)&&void 0!==l?l:a.fromAttribute)(s,c.type);this[t]!==r&&(this[i]=r)}o.call(this,e,n,s)}},W=c(class extends u{constructor(t){if(super(t),t.type!==p.PROPERTY&&t.type!==p.ATTRIBUTE&&t.type!==p.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!d(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===h||e===f)return e;const i=t.element,r=t.name;if(t.type===p.PROPERTY){if(e===i[r])return h}else if(t.type===p.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return h}else if(t.type===p.ATTRIBUTE&&i.getAttribute(r)===e+"")return h;return b(t),e}});var q=t`
  ${e}

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
`;let K=class extends n{constructor(){super(...arguments),this.formControlController=new _(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return s`
      <label
        part="base"
        class=${l({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${y(this.value)}
          .indeterminate=${W(this.indeterminate)}
          .checked=${W(this.checked)}
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
          ${this.checked?s`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?s`
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
    `}};K.styles=q,i([v('input[type="checkbox"]')],K.prototype,"input",2),i([m()],K.prototype,"hasFocus",2),i([r()],K.prototype,"title",2),i([r()],K.prototype,"name",2),i([r()],K.prototype,"value",2),i([r({reflect:!0})],K.prototype,"size",2),i([r({type:Boolean,reflect:!0})],K.prototype,"disabled",2),i([r({type:Boolean,reflect:!0})],K.prototype,"checked",2),i([r({type:Boolean,reflect:!0})],K.prototype,"indeterminate",2),i([U("checked")],K.prototype,"defaultChecked",2),i([r({reflect:!0})],K.prototype,"form",2),i([r({type:Boolean,reflect:!0})],K.prototype,"required",2),i([g("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1),i([g(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],K.prototype,"handleStateChange",1),K=i([o("sl-checkbox")],K);var M=t`
  ${e}
  ${t`
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
`;let H=class extends n{constructor(){super(...arguments),this.formControlController=new _(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new x(this,"help-text","label"),this.localize=new k(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,r){this.input.setRangeText(t,e,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,r=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return s`
      <div
        part="form-control"
        class=${l({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${l({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${y(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              min=${y(this.min)}
              max=${y(this.max)}
              step=${y(this.step)}
              .value=${W(this.value)}
              autocapitalize=${y(this.autocapitalize)}
              autocomplete=${y(this.autocomplete)}
              autocorrect=${y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${y(this.pattern)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?s`
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
            ${this.passwordToggle&&!this.disabled?s`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?s`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:s`
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
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};H.styles=M,i([v(".input__control")],H.prototype,"input",2),i([m()],H.prototype,"hasFocus",2),i([r()],H.prototype,"title",2),i([r({reflect:!0})],H.prototype,"type",2),i([r()],H.prototype,"name",2),i([r()],H.prototype,"value",2),i([U()],H.prototype,"defaultValue",2),i([r({reflect:!0})],H.prototype,"size",2),i([r({type:Boolean,reflect:!0})],H.prototype,"filled",2),i([r({type:Boolean,reflect:!0})],H.prototype,"pill",2),i([r()],H.prototype,"label",2),i([r({attribute:"help-text"})],H.prototype,"helpText",2),i([r({type:Boolean})],H.prototype,"clearable",2),i([r({type:Boolean,reflect:!0})],H.prototype,"disabled",2),i([r()],H.prototype,"placeholder",2),i([r({type:Boolean,reflect:!0})],H.prototype,"readonly",2),i([r({attribute:"password-toggle",type:Boolean})],H.prototype,"passwordToggle",2),i([r({attribute:"password-visible",type:Boolean})],H.prototype,"passwordVisible",2),i([r({attribute:"no-spin-buttons",type:Boolean})],H.prototype,"noSpinButtons",2),i([r({reflect:!0})],H.prototype,"form",2),i([r({type:Boolean,reflect:!0})],H.prototype,"required",2),i([r()],H.prototype,"pattern",2),i([r({type:Number})],H.prototype,"minlength",2),i([r({type:Number})],H.prototype,"maxlength",2),i([r()],H.prototype,"min",2),i([r()],H.prototype,"max",2),i([r()],H.prototype,"step",2),i([r()],H.prototype,"autocapitalize",2),i([r()],H.prototype,"autocorrect",2),i([r()],H.prototype,"autocomplete",2),i([r({type:Boolean})],H.prototype,"autofocus",2),i([r()],H.prototype,"enterkeyhint",2),i([r({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],H.prototype,"spellcheck",2),i([r()],H.prototype,"inputmode",2),i([g("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1),i([g("step",{waitUntilFirstUpdate:!0})],H.prototype,"handleStepChange",1),i([g("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1),H=i([o("sl-input")],H);class Y extends u{constructor(t){if(super(t),this.it=f,t.type!==p.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||null==t)return this._t=void 0,this.it=t;if(t===h)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Y.directiveName="unsafeHTML",Y.resultType=1;const J=c(Y);let G=class extends T{constructor(){super(),this.rangesText="",this.filterText="",this.fullWords=!1,this.caseSensitive=!1,this.isBiblesLoaded=!1,this._verses=[],this._hashList=[],this._versionName="afr",this._altVersionName="kjv",this._onVerseClicked=t=>{const e=t.currentTarget;if(e){if(null!==e.getAttribute("activated")){e.removeAttribute("activated");const t=e.closest(".container");if(t){const i=e.nextSibling;t.removeChild(i)}return}e.setAttribute("activated","");const t=e.dataset.hash;if(t){const i=S(t,this._versionName,this._altVersionName),r=P(i),o=document.createElement("tsk-refs");o.setAttribute("refs",r),e.after(o)}}},this.spinner=document.querySelector("#spinner")}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.initializeBible()}disconnectedCallback(){this.destroy()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this._setVerses()}initializeBible(){let t=`${window.origin}${E}resources/${this._versionName}.txt`;A(this._versionName,t).then((()=>{t=`${window.origin}${E}resources/${this._altVersionName}.txt`,A(this._altVersionName,t).then((()=>{this.isBiblesLoaded=!0,this.spinner?.classList.remove("loader"),this._setVerses()})).catch((t=>console.log("Error loading bibles",t)))})).catch(console.log)}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",I)}))}async _setVerses(){const t=((t,e=!1,i=!1)=>{const r=/(["'])(\\\1|.)*?\1/g,o=t.match(r)||[],n=t.replace(r,"").match(/[^\s"']+/g)||[],s=o.map((t=>t.substring(1,t.length-1))),l=i?"":"i",a=e?"\\b":"",c=[...s,...n].map((t=>new RegExp(a+t+a,l)));return t=>{let e=0;for(;c[e]&&c[e].test(t);)e++;return e===c.length}})(this.filterText,this.fullWords,this.caseSensitive);if(!this.isBiblesLoaded)return;if(this.rangesText.length<2)return;const e=[],i=V({rangesText:this.rangesText,versionName:this._versionName});if(0===i.length)return;this._hashList=O(this._versionName,i);let r=0;for(let i of this._hashList){const o=j(this._versionName,i);if(t(o.text)){const t=S(i,this._versionName,this._altVersionName),n=j(this._altVersionName,t),s={afr:o,kjv:await this._style_KJV_verse(P(t),n),uuid:this._uuid(),hash:i};e.push(s),r++}if(r>99)break}this._verses=e}_getTSKRefs(t){return void 0===this._ixdb?null:new Promise(((e,i)=>{const r=this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t));r.onsuccess=t=>{let i=t.target.result;return i.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),e(i)},r.onerror=t=>i(t)}))}async _style_KJV_verse(t,e){try{const i=await this._getTSKRefs(t);let r=0;i&&i.length>0&&i.forEach((t=>{const{text:i,index:o}=function(t,e,i){const r=e.length;if(i>=t.length)return{text:t,index:t.length};const o=RegExp("(\\b"+e+"\\b)|(^"+e+"$)","g");let n;for(;null!==(n=o.exec(t))&&o.lastIndex<i;);if(null!==n){if(void 0!==n[1])return{text:t.substring(0,o.lastIndex-r)+" <b>"+e+"</b> "+t.substring(o.lastIndex),index:o.lastIndex+7};if(void 0!==n[2])return{text:"<b>"+t+"</b>",index:o.lastIndex+7}}return{text:t,index:o.lastIndex}}(e.text,t.words,r);r=o,e.text=i}))}catch(t){console.log("Error Formatting KJV",t)}return e}_uuid(){return Math.random().toString(36).substring(2,12)}destroy(){}render(){return s`
        <div class="container">
          ${R(this._verses,(t=>t.uuid),(t=>s`
                <div class="ripple-box"
                  data-uuid=${t.uuid}
                  data-hash=${t.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${t.afr.prettyRef} ${t.afr.text}
                  </p>
                  ${t.kjv.text.length>0?s`
                      <p class="kjvtext" >
                        ${t.kjv.prettyRef} ${J(t.kjv.text)}
                      </p>

                      `:f}
                </div>
               `))}
        </div>
    `}};function X(t){for(var e=arguments.length,i=Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(i.length?" "+i.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Q(t){return!!t&&!!t[Dt]}function Z(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var i=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return i===Object||"function"==typeof i&&Function.toString.call(i)===Bt}(t)||Array.isArray(t)||!!t[Rt]||!!(null===(e=t.constructor)||void 0===e?void 0:e[Rt])||ot(t)||nt(t))}function tt(t,e,i){void 0===i&&(i=!1),0===et(t)?(i?Object.keys:Ft)(t).forEach((function(r){i&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(i,r){return e(r,i,t)}))}function et(t){var e=t[Dt];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:ot(t)?2:nt(t)?3:0}function it(t,e){return 2===et(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function rt(t,e,i){var r=et(t);2===r?t.set(e,i):3===r?t.add(i):t[e]=i}function ot(t){return It&&t instanceof Map}function nt(t){return Vt&&t instanceof Set}function st(t){return t.o||t.t}function lt(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Nt(t);delete e[Dt];for(var i=Ft(e),r=0;r<i.length;r++){var o=i[r],n=e[o];!1===n.writable&&(n.writable=!0,n.configurable=!0),(n.get||n.set)&&(e[o]={configurable:!0,writable:!0,enumerable:n.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function at(t,e){return void 0===e&&(e=!1),ut(t)||Q(t)||!Z(t)||(et(t)>1&&(t.set=t.add=t.clear=t.delete=ct),Object.freeze(t),e&&tt(t,(function(t,e){return at(e,!0)}),!0)),t}function ct(){X(2)}function ut(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function pt(t){var e=Lt[t];return e||X(18,t),e}function dt(){return Et}function ht(t,e){e&&(pt("Patches"),t.u=[],t.s=[],t.v=e)}function ft(t){bt(t),t.p.forEach(mt),t.p=null}function bt(t){t===Et&&(Et=t.l)}function vt(t){return Et={p:[],l:Et,h:t,m:!0,_:0}}function mt(t){var e=t[Dt];0===e.i||1===e.i?e.j():e.O=!0}function gt(t,e){e._=e.p.length;var i=e.p[0],r=void 0!==t&&t!==i;return e.h.g||pt("ES5").S(e,t,r),r?(i[Dt].P&&(ft(e),X(4)),Z(t)&&(t=_t(e,t),e.l||xt(e,t)),e.u&&pt("Patches").M(i[Dt].t,t,e.u,e.s)):t=_t(e,i,[]),ft(e),e.u&&e.v(e.u,e.s),t!==jt?t:void 0}function _t(t,e,i){if(ut(e))return e;var r=e[Dt];if(!r)return tt(e,(function(o,n){return yt(t,r,e,o,n,i)}),!0),e;if(r.A!==t)return e;if(!r.P)return xt(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=lt(r.k):r.o,n=o,s=!1;3===r.i&&(n=new Set(o),o.clear(),s=!0),tt(n,(function(e,n){return yt(t,r,o,e,n,i,s)})),xt(t,o,!1),i&&t.u&&pt("Patches").N(r,i,t.u,t.s)}return r.o}function yt(t,e,i,r,o,n,s){if(Q(o)){var l=_t(t,o,n&&e&&3!==e.i&&!it(e.R,r)?n.concat(r):void 0);if(rt(i,r,l),!Q(l))return;t.m=!1}else s&&i.add(o);if(Z(o)&&!ut(o)){if(!t.h.D&&t._<1)return;_t(t,o),e&&e.A.l||xt(t,o)}}function xt(t,e,i){void 0===i&&(i=!1),!t.l&&t.h.D&&t.m&&at(e,i)}function kt(t,e){var i=t[Dt];return(i?st(i):t)[e]}function wt(t,e){if(e in t)for(var i=Object.getPrototypeOf(t);i;){var r=Object.getOwnPropertyDescriptor(i,e);if(r)return r;i=Object.getPrototypeOf(i)}}function $t(t){t.P||(t.P=!0,t.l&&$t(t.l))}function Ct(t){t.o||(t.o=lt(t.t))}function zt(t,e,i){var r=ot(e)?pt("MapSet").F(e,i):nt(e)?pt("MapSet").T(e,i):t.g?function(t,e){var i=Array.isArray(t),r={i:i?1:0,A:e?e.A:dt(),P:!1,I:!1,R:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=r,n=Ut;i&&(o=[r],n=Wt);var s=Proxy.revocable(o,n),l=s.revoke,a=s.proxy;return r.k=a,r.j=l,a}(e,i):pt("ES5").J(e,i);return(i?i.A:dt()).p.push(r),r}function Tt(t){return Q(t)||X(22,t),function t(e){if(!Z(e))return e;var i,r=e[Dt],o=et(e);if(r){if(!r.P&&(r.i<4||!pt("ES5").K(r)))return r.t;r.I=!0,i=St(e,o),r.I=!1}else i=St(e,o);return tt(i,(function(e,o){r&&function(t,e){return 2===et(t)?t.get(e):t[e]}(r.t,e)===o||rt(i,e,t(o))})),3===o?new Set(i):i}(t)}function St(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return lt(t)}G.styles=[t`
    :host{
      display: block;
    }
    .afrtext {
      margin: 0px;
      padding: 2px;
      font-size: var(--sl-font-size-meduim);
    }
    .kjvtext {
      margin: 0px;
      padding: 2px;
      font-style: italic;
      font-weight: var(--sl-font-weight-light);
      font-size: var(--sl-font-size-small);
    }
    .kjvtext b {
      font-weight: var(--sl-font-weight-normal);
    }
  `,t`${w($)}`],C([r({type:String,attribute:!0})],G.prototype,"rangesText",void 0),C([r({type:String,attribute:!0})],G.prototype,"filterText",void 0),C([r({type:Boolean,attribute:!0})],G.prototype,"fullWords",void 0),C([r({type:Boolean,attribute:!0})],G.prototype,"caseSensitive",void 0),C([m()],G.prototype,"isBiblesLoaded",void 0),C([m()],G.prototype,"_verses",void 0),C([m()],G.prototype,"_hashList",void 0),C([z({context:D})],G.prototype,"_ixdb",void 0),C([v("#input")],G.prototype,"_input",void 0),G=C([o("interlinear-bible")],G);var Pt,Et,At="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),It="undefined"!=typeof Map,Vt="undefined"!=typeof Set,Ot="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,jt=At?Symbol.for("immer-nothing"):((Pt={})["immer-nothing"]=!0,Pt),Rt=At?Symbol.for("immer-draftable"):"__$immer_draftable",Dt=At?Symbol.for("immer-state"):"__$immer_state",Bt=""+Object.prototype.constructor,Ft="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Nt=Object.getOwnPropertyDescriptors||function(t){var e={};return Ft(t).forEach((function(i){e[i]=Object.getOwnPropertyDescriptor(t,i)})),e},Lt={},Ut={get:function(t,e){if(e===Dt)return t;var i=st(t);if(!it(i,e))return function(t,e,i){var r,o=wt(e,i);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(t.k):void 0}(t,i,e);var r=i[e];return t.I||!Z(r)?r:r===kt(t.t,e)?(Ct(t),t.o[e]=zt(t.A.h,r,t)):r},has:function(t,e){return e in st(t)},ownKeys:function(t){return Reflect.ownKeys(st(t))},set:function(t,e,i){var r=wt(st(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,i),!0;if(!t.P){var o=kt(st(t),e),n=null==o?void 0:o[Dt];if(n&&n.t===i)return t.o[e]=i,t.R[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(i,o)&&(void 0!==i||it(t.t,e)))return!0;Ct(t),$t(t)}return t.o[e]===i&&(void 0!==i||e in t.o)||Number.isNaN(i)&&Number.isNaN(t.o[e])||(t.o[e]=i,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==kt(t.t,e)||e in t.t?(t.R[e]=!1,Ct(t),$t(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var i=st(t),r=Reflect.getOwnPropertyDescriptor(i,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:i[e]}:r},defineProperty:function(){X(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){X(12)}},Wt={};tt(Ut,(function(t,e){Wt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Wt.deleteProperty=function(t,e){return Wt.set.call(this,t,e,void 0)},Wt.set=function(t,e,i){return Ut.set.call(this,t[0],e,i,t[0])};var qt=function(){function t(t){var e=this;this.g=Ot,this.D=!0,this.produce=function(t,i,r){if("function"==typeof t&&"function"!=typeof i){var o=i;i=t;var n=e;return function(t){var e=this;void 0===t&&(t=o);for(var r=arguments.length,s=Array(r>1?r-1:0),l=1;l<r;l++)s[l-1]=arguments[l];return n.produce(t,(function(t){var r;return(r=i).call.apply(r,[e,t].concat(s))}))}}var s;if("function"!=typeof i&&X(6),void 0!==r&&"function"!=typeof r&&X(7),Z(t)){var l=vt(e),a=zt(e,t,void 0),c=!0;try{s=i(a),c=!1}finally{c?ft(l):bt(l)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(t){return ht(l,r),gt(t,l)}),(function(t){throw ft(l),t})):(ht(l,r),gt(s,l))}if(!t||"object"!=typeof t){if(void 0===(s=i(t))&&(s=t),s===jt&&(s=void 0),e.D&&at(s,!0),r){var u=[],p=[];pt("Patches").M(t,s,u,p),r(u,p)}return s}X(21,t)},this.produceWithPatches=function(t,i){if("function"==typeof t)return function(i){for(var r=arguments.length,o=Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return e.produceWithPatches(i,(function(e){return t.apply(void 0,[e].concat(o))}))};var r,o,n=e.produce(t,i,(function(t,e){r=t,o=e}));return"undefined"!=typeof Promise&&n instanceof Promise?n.then((function(t){return[t,r,o]})):[n,r,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){Z(t)||X(8),Q(t)&&(t=Tt(t));var e=vt(this),i=zt(this,t,void 0);return i[Dt].C=!0,bt(e),i},e.finishDraft=function(t,e){var i=(t&&t[Dt]).A;return ht(i,e),gt(void 0,i)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!Ot&&X(20),this.g=t},e.applyPatches=function(t,e){var i;for(i=e.length-1;i>=0;i--){var r=e[i];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}i>-1&&(e=e.slice(i+1));var o=pt("Patches").$;return Q(t)?o(t,e):this.produce(t,(function(t){return o(t,e)}))},t}(),Kt=new qt,Mt=Kt.produce;Kt.produceWithPatches.bind(Kt),Kt.setAutoFreeze.bind(Kt),Kt.setUseProxies.bind(Kt),Kt.applyPatches.bind(Kt),Kt.createDraft.bind(Kt),Kt.finishDraft.bind(Kt);let Ht=class extends T{constructor(){super(),this.tskRefs=[]}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.refs&&this._getAll(this.refs)}disconnectedCallback(){this.destroy()}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",I)}))}_readIXDB(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(t)).onsuccess=t=>{const e=t.target.result;e&&(this.tskRefs=Mt(this.tskRefs,(t=>(t.push({display:!1,ref:e.value}),t.sort(((t,e)=>parseInt(t.ref.sort)-parseInt(e.ref.sort))),t))),e.continue())})}_getAll(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t)).onsuccess=t=>{let e=t.target.result;e.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),e=e.map((t=>({display:!1,ref:t}))),this.tskRefs=Mt(this.tskRefs,(()=>e))})}destroy(){}render(){return s`
    <div class="refs-container">
      <mwc-list>
      ${R(this.tskRefs,(t=>t.ref.key),((t,e)=>s`
            <div class="ripple-box" @click=${i=>{const r=i.currentTarget;t.display?r.removeAttribute("activated"):r.setAttribute("activated",""),this.tskRefs=Mt(this.tskRefs,(t=>(t[e].display=!t[e].display,t)))}}
            >
              <p class="ref-word">${t.ref.words}</p>
            </div>
            ${!0===t.display?s`<interlinear-bible rangesText=${t.ref.refs}></interlinear-bible>`:""}
         `))}  
      </mwc-list>  
    </div>
    `}};Ht.styles=[t`
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
  `,t`${w($)}`],C([r({type:String,attribute:!0})],Ht.prototype,"refs",void 0),C([z({context:D})],Ht.prototype,"_ixdb",void 0),C([m()],Ht.prototype,"tskRefs",void 0),Ht=C([o("tsk-refs")],Ht),window.____pwa_install_button_deferred_prompt={},window.____pwa_install_button_installable=null,window.addEventListener("beforeinstallprompt",(t=>{window.____pwa_install_button_installable=!0,window.____pwa_install_button_deferred_prompt=t}));class Yt extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),window.____pwa_install_button_deferred_prompt=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))})),window.____pwa_install_button_installable&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),window.____pwa_install_button_deferred_prompt.prompt();const{outcome:e}=await window.____pwa_install_button_deferred_prompt.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),window.____pwa_install_button_deferred_prompt=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Yt);class Jt extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){if(this.setAttribute("hidden",""),this.addEventListener("click",this._postMessage.bind(this)),"serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this._newWorker=t.installing,this._newWorker.addEventListener("statechange",(()=>{"installed"===this._newWorker.state&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this.removeAttribute("hidden"))}))})),t.waiting&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this._newWorker=t.waiting,this.removeAttribute("hidden"))),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)}))}}_postMessage(t){t.preventDefault(),this._newWorker.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",Jt);let Gt=class extends T{constructor(){super(),this.reference="",this._rangesText="",this._filterText="",this._fullWords=!1,this._caseSensitive=!1,this.bibleScroll=new F(this,100)}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.destroy()}destroy(){}_toggleCaseSensitive(t){this._caseSensitive=t.target.checked}_toggleFullWords(t){this._fullWords=t.target.checked}_updateRangeText(t){this.reference="",this._rangesText=t.target.value}_updateFilterText(t){this._filterText=t.target.value}_onToggleDraw(){this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,cancelable:!0}))}render(){const t={"hide-heading":this.bibleScroll.offscreen,"show-heading":!this.bibleScroll.offscreen};return s`
<div class="heading ${l(t)}">
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
      ${this._filterText.length>0?s`<sl-badge slot="suffix">Soek</sl-badge>`:f}
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
</interlinear-bible>`}};Gt.styles=[t`
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
  `,t`${w(B)}`],C([r({type:String,reflect:!0})],Gt.prototype,"reference",void 0),C([m()],Gt.prototype,"_rangesText",void 0),C([m()],Gt.prototype,"_filterText",void 0),C([m()],Gt.prototype,"_fullWords",void 0),C([m()],Gt.prototype,"_caseSensitive",void 0),C([v("sl-dialog")],Gt.prototype,"dialog",void 0),Gt=C([o("bible-head")],Gt);export{Gt as BibleHead};
