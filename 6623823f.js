import{P as e,l as a,u as t,m as n,x as s,i as o,_ as c,a as l}from"./b85e0098.js";const r={title:"Error: Page not found",description:null,image:null};class d extends e{connectedCallback(){super.connectedCallback(),a("name","render:status_code","404"),t({...this.defaultMeta,...r})}disconnectedCallback(){n("name","render:status_code"),super.disconnectedCallback()}}let i=class extends d{render(){return s`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="./"}">Back to home page</a>
        </p>
      </section>
    `}meta(){return r}};i.styles=o`
    :host {
      display: block;
    }

    section {
      padding: 1rem;
      text-align: center;
    }
  `,i=c([l("page-not-found")],i);export{i as PageNotFound};
