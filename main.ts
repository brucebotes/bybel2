<html><head></head><body>import { css, html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, state, query } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';
import "urlpattern-polyfill";
import { Router } from "@lit-labs/router";
import { provide } from "@lit-labs/context";
import { rippleEffect } from "./components/utils/ripple";
import {
  ixdbContext,
  IXDBInterface,
} from "./components/context/indexdb-context";
import { loadTSK } from "./artefacts/bible/util/api";
import { TSK } from "./artefacts/bible/util/bible-types";
import { getVersion } from "./artefacts/bible/util/bible-global";
// @ts-ignore
import { urlNames } from "./artefacts/bible/bible-references"
import { githubProject } from "./artefacts/system";
// @ts-ignore
import {af} from "./artefacts/bible/bible-langs"
import "./load-components";

//@ts-ignore
import tooltipStyles from "./styles/tool-tip.css";
//@ts-ignore
import rippleBoxStyles from "./styles/ripple-box.css";

const modulePath = githubProject
console.log("ModulePath: ", modulePath)
// This is the entry point and container
// of our integrated web component
// Its main role is to display a drawer
// and provide routing for the other
// components. It is also important
// to set the display to anything besides
// the default which is inline - ie use :host{display: block;}
@customElement("app-web-component")
class AppWebComponent extends LitElement {
  @query("sl-drawer")
  //@ts-ignore
  private drawer!
  @query("sl-dialog")
  //@ts-ignore
  private dialog!
  private _dbName = "idxDB";
  @provide({ context: ixdbContext })
  @state()
  //@ts-ignore
  _ixdb: IXDBInterface = { ixdb: undefined };
  @state()
  _num_chapters = 10
  @state()
  _selected_chapter = 10
  @state()
  _selected_book = '' 
  static loadingIXDB = false;
  private _theme='light'
  @state()
  private _themeIcon="moon"


  _unSelect_items() {
    const aList = this.renderRoot.querySelectorAll(".ripple-box");
    aList.forEach((i) =&gt; {
      i.removeAttribute("activated");
    });
  }

  _toggleActive(e: Event) {
    this._unSelect_items();
    const elem = e.currentTarget! as HTMLElement;
    elem.setAttribute("activated", "");
  }

  _toggleTheme() {
    if(this._theme === 'dark') {
      this._theme = 'light'
      this._themeIcon="moon"
      document.querySelector("html")!.className=''
    }else{
      this._theme = 'dark'
      this._themeIcon="brightness-high"
      document.querySelector("html")!.className='sl-theme-dark'
    }

  }
  private _router = new Router(this, [
    {
      path: modulePath,
      render: this.render_home,
    },
    {
      path: modulePath + "/",
      render: this.render_home,
    },
    {
      path: modulePath + "/bible",
      render: ()=&gt; html`<bible-head></bible-head>`,
    },
    {
      path: modulePath + "/chat",
      render: () =&gt; html`<h1>Chat app not available in off line mode</h1>`
    },{
      
      pattern: new URLPattern({
        pathname: modulePath + "/tooltip",
      }),
      render: () =&gt; html`<tool-tip-test></tool-tip-test>`,
    }
  ], {
    fallback: {
      // THROW the user back to the host Router
      // ie the server (or WASM router)
      //--enter: async (params) =&gt; {
      //--  window.location.href = window.origin + "/" + params[0];
      //--  return false;
      //--},
      // OR render a page not found  
      render: () =&gt; html`<h1>404 Route not found</h1> <p>In single page app router!</p>`,
    },
  });


  connectedCallback() {
    super.connectedCallback();
  }

  constructor() {
    super();
    this.initialize_IDB();
    //this.appendStyles();
  }

  // An alternatyive way to import and append external 
  // styles
  appendStyles() {
    const cssSheet = new CSSStyleSheet();
    cssSheet.replace(tooltipStyles)
      .then(() =&gt; {
        this.shadowRoot!.adoptedStyleSheets = [...this.shadowRoot!.adoptedStyleSheets, cssSheet];
      });
  }

  protected firstUpdated() {
  }

  updated() {
    this.shadowRoot!.querySelectorAll('.ripple-box').forEach(
      (el) =&gt; {
        el.addEventListener( 'mousedown', rippleEffect )
      })
  }

  initialize_IDB() {
    const request = indexedDB.open(this._dbName, 1);

    request.onerror = (event) =&gt; {
      // Handle errors.
      alert("Error accessing TSK database!" + (event.target as IDBRequest).result);
    };

    const loadTSK_in_IXDB = (db: any) =&gt; {
        // block at Class level using class level variable loadingIXDB 
        // - ensure once off invocation
        // even if the web page is rerendered 
        //  for example when WASM retriggers a page reload.
        if(AppWebComponent.loadingIXDB) return

        AppWebComponent.loadingIXDB = true
        const url = `${window.origin}${githubProject}resources/tsk.txt`;
        loadTSK(url).then((tsk: TSK[]) =&gt; {
          console.log("tsk loaded!");
          const xrefObjectStore = db
          .transaction("xref", "readwrite")
          .objectStore("xref");

          tsk.forEach((xrf: TSK) =&gt; {
            xrefObjectStore.add(xrf);
          });
          console.log("All done!");
        }).catch((err) =&gt; {
            console.log("Failed to load TSK \u2192",  err)
            alert("Failed to create TSK database! No cross references are available. Try using a reload.");
          })
    }

    request.onsuccess = (event: Event) =&gt; {
      this._ixdb.ixdb = (event.target as IDBRequest).result;
      // check if there are TSK records
      const countReq = this._ixdb.ixdb
      .transaction("xref")
      .objectStore("xref")
      .count()

    
      countReq.onsuccess = () =&gt; {
        if(countReq.result === 0 ) {
          loadTSK_in_IXDB(this._ixdb.ixdb)
        }
      };
    }

    request.onupgradeneeded = (event) =&gt; {
      const db = (event.target as IDBRequest).result;
      console.log("Creating a new IDB instance for tsk!");
      const objectStore = db.createObjectStore("xref", { keyPath: "key" });
      objectStore.createIndex("verse", "verse", { unique: false });

      objectStore.transaction.oncomplete = () =&gt; {
        // Store values in the newly created objectStore.
        loadTSK_in_IXDB(db)
      };
    }
  }

  async gotoRef(href: string) {
    if (href !== undefined) {
      //const route = this._router.link() + href;
      const route = href
      history.pushState({}, "", route);
      await this._router.goto(route);
    }
  }

  _setBook(e: Event, book: number){
    this._toggleActive(e)
    this._num_chapters = getVersion('afr').last.books[book].chapter + 1
    this._selected_book = urlNames[book] 
    this.dialog.show()
  }

  _setChapter(chapter: number) {
    this._selected_chapter = chapter;
    this.dialog.hide()
    this.drawer.hide()
  }

  render() {
    return html`${this._router.outlet()}`;
  }

  render_home() {
    // NOTE: ROUTER TEMPORARY DISABLED
    //return html`<bible-head></bible-head>`
    return html`
      <sl-dialog label="Kies 'n hoofstuk.">
        ${map(range(this._num_chapters), 
          (i) =&gt; html`<sl-button class="chapter-button" variant="text" @click="${()="> this._setChapter(i+1)}
          &gt;
            ${i + 1}
          </sl-button>`
        )}
      </sl-dialog>
      <sl-drawer label="Bybel boeke" placement="start">
      <div style="align-self: center;" slot="header-actions"> 
        <sl-icon-button name="${this._themeIcon}" @click="${this._toggleTheme}">
        </sl-icon-button>
        <tool-tip inert="" role="tooltip" tip-position="left">Switch theme</tool-tip>
      </div>    
      ${()=&gt;this.render_menu()}
      </sl-drawer>
      <bible-head reference="${" this._selected_book="" !="=" ''="" ?="" this._selected_book+'="" '+this._selected_chapter="" :="" nothing}="" @toggle-drawer="${()=">this.drawer.show()}
      &gt; </bible-head>
      `
  }

  render_menu() {
    return html`
        ${repeat(
        af.abbreviations,
        (i: string[])=&gt; i[0],
        (item, index)=&gt; html`
          <div class="ripple-box" @click="${(e" :event)=""> {
              this._setBook(e, index)
            }}
          &gt;
            <p class="book-name">${item[0]}</p>
          </div>

        `
        )}
    `;
  }
 
  static styles = [css`
    :host {
      display: block; /* customElement defaults to inline!!*/
      height: 100vh;
      padding: 0px 5px 5px 5px;
      overflow-y: scroll; /* sets where we are goining to attach the scroller evemnt listener - see BibleHead component &amp; controller */
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

    `,
    css`${unsafeCSS(tooltipStyles)}`,
    css`${unsafeCSS(rippleBoxStyles)}`
  ]
}


declare global {
  interface HTMLElementTagNameMap {
    "app-web-component": AppWebComponent;
  }
}
</body></html>