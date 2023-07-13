import{P as e,M as a,N as t,O as n,x as s,i as o,k as c,a as r}from"./1e824427.js";const d={title:"Error: Page not found",description:null,image:null};class l extends e{connectedCallback(){super.connectedCallback(),a("name","render:status_code","404"),t({...this.defaultMeta,...d})}disconnectedCallback(){n("name","render:status_code"),super.disconnectedCallback()}}let i=class extends l{render(){return s`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="./"}">Back to home page</a>
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
