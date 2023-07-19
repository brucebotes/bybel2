import{P as e,x as i,k as t,i as o,r as a,_ as n,e as l}from"./95ea9090.js";import{c as s}from"./389cc535.js";import"./89c89df7.js";let p=class extends e{firstUpdated(){}render(){return i`
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
    }`,o`${a(s)}`],p=n([l("tool-tip-test")],p);export{p as ToolTipTest};
