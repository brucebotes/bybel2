import{P as e,l as t,u as a,m as n,x as s,i as c,_ as o,e as l}from"./8493c06f.js";const r={title:"Error: Page not found",description:null,image:null};class d extends e{connectedCallback(){super.connectedCallback(),t("name","render:status_code","404"),a({...this.defaultMeta,...r})}disconnectedCallback(){n("name","render:status_code"),super.disconnectedCallback()}}let i=class extends d{render(){return s`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="./"}">Back to home page</a>
        </p>
      </section>
    `}meta(){return r}};i.styles=c`
    :host {
      display: block;
    }

    section {
      padding: 1rem;
      text-align: center;
    }
  `,i=o([l("page-not-found")],i);export{i as PageNotFound};
