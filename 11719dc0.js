import{P as e,K as t,M as a,N as n,x as s,i as o,k as c,a as r}from"./0917a4d2.js";const d={title:"Error: Page not found",description:null,image:null};class l extends e{connectedCallback(){super.connectedCallback(),t("name","render:status_code","404"),a({...this.defaultMeta,...d})}disconnectedCallback(){n("name","render:status_code"),super.disconnectedCallback()}}let i=class extends l{render(){return s`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="${this.router?.link("/")}">Back to home page</a>
        </p>
      </section>
    `}meta(){return d}};i.styles=o`
    :host {
      display: block;
    }

    section {
      padding: 1rem;
      text-align: center;
    }
  `,i=c([r("page-not-found")],i);export{i as PageNotFound};
