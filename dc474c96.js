import{P as e,x as i,J as t,i as o,r as a,I as n,k as l,a as s}from"./561b0dae.js";let p=class extends e{firstUpdated(){}render(){return i`
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
    `}meta(){return{title:t.appName,titleTemplate:null,description:t.appDescription}}};p.styles=[o`
    section {
      padding: 1rem;
    }`,o`${a(n)}`],p=l([s("tool-tip-test")],p);export{p as ToolTipTest};
