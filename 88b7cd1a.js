import{o as t,Z as e,T as o,n as r,g as i,e as s,s as n,i as a,t as l,x as c,a as d,A as h,b as u,r as p,_ as b,c as f,d as m,f as g,h as v,P as y,j as k}from"./a9bac023.js";import{c as w}from"./389cc535.js";function _(e,o){return t({descriptor:t=>{const r={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(o){const o="symbol"==typeof t?Symbol():"__"+t;r.get=function(){var t,r;return void 0===this[o]&&(this[o]=null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null),this[o]}}return r}})}var x=Object.defineProperty,$=Object.getOwnPropertyDescriptor,C=(t,e,o,r)=>{for(var i,s=r>1?void 0:r?$(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(s=(r?i(e,o,s):i(s))||s);return r&&s&&x(e,o,s),s};const j=1,z=2,S=3,E=4,A=t=>(...e)=>({_$litDirective$:t,values:e});class L{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:P}=e,T=()=>document.createComment(""),F=(t,e,o)=>{var r;const i=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=i.insertBefore(T(),s),r=i.insertBefore(T(),s);o=new P(e,r,t,t.options)}else{const e=o._$AB.nextSibling,n=o._$AM,a=n!==t;if(a){let e;null===(r=o._$AQ)||void 0===r||r.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==n._$AU&&o._$AP(e)}if(e!==s||a){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,s),t=e}}}return o},B=(t,e,o=t)=>(t._$AI(e,o),t),D={},I=(t,e=D)=>t._$AH=e,V=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const r=t._$AB.nextSibling;for(;o!==r;){const t=o.nextSibling;o.remove(),o=t}},O=(t,e,o)=>{const r=new Map;for(let i=e;i<=o;i++)r.set(t[i],i);return r},R=A(class extends L{constructor(t){if(super(t),t.type!==z)throw Error("repeat() can only be used in text expressions")}ht(t,e,o){let r;void 0===o?o=e:void 0!==e&&(r=e);const i=[],s=[];let n=0;for(const e of t)i[n]=r?r(e,n):n,s[n]=o(e,n),n++;return{values:s,keys:i}}render(t,e,o){return this.ht(t,e,o).values}update(t,[e,r,i]){var s;const n=(t=>t._$AH)(t),{values:a,keys:l}=this.ht(e,r,i);if(!Array.isArray(n))return this.ut=l,a;const c=null!==(s=this.ut)&&void 0!==s?s:this.ut=[],d=[];let h,u,p=0,b=n.length-1,f=0,m=a.length-1;for(;p<=b&&f<=m;)if(null===n[p])p++;else if(null===n[b])b--;else if(c[p]===l[f])d[f]=B(n[p],a[f]),p++,f++;else if(c[b]===l[m])d[m]=B(n[b],a[m]),b--,m--;else if(c[p]===l[m])d[m]=B(n[p],a[m]),F(t,d[m+1],n[p]),p++,m--;else if(c[b]===l[f])d[f]=B(n[b],a[f]),F(t,n[p],n[b]),b--,f++;else if(void 0===h&&(h=O(l,f,m),u=O(c,p,b)),h.has(c[p]))if(h.has(c[b])){const e=u.get(l[f]),o=void 0!==e?n[e]:null;if(null===o){const e=F(t,n[p]);B(e,a[f]),d[f]=e}else d[f]=B(o,a[f]),F(t,n[p],o),n[e]=null;f++}else V(n[b]),b--;else V(n[p]),p++;for(;f<=m;){const e=F(t,d[m+1]);B(e,a[f]),d[f++]=e}for(;p<=b;){const t=n[p++];null!==t&&V(t)}return this.ut=l,I(t,d),o}});const M=function(t){let e=this.getBoundingClientRect(),o=document.createElement("div"),r=getComputedStyle(this).overflow,i="rgba(255,255,255,0)",s="rgba(255,255,255,.3)",n=Math.sqrt(e.width*e.width+e.height*e.height)/10;this.style.overflow="hidden",o.style=`\n      width:20px;\n      height:20px;\n      border-radius: 50%;\n      background: radial-gradient(circle, \n      ${s} 0%, ${i} 5%, ${i} 7%, \n      ${s} 13%, ${s} 17%, ${i} 30%, \n      ${i} 35%, ${s} 51%,${s} 58%,\n      ${i} 68%, ${i} 75%, ${s} 100%);\n      position: absolute;\n      opacity: 0;\n      transform-origin: 'center center';\n      left: ${t.clientX-e.left-10}px;\n      top: ${t.clientY-e.top-10}px;`,this.prepend(o);let a=o.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${n})`,opacity:.1}],{duration:600});Promise.resolve(a.finished).then((()=>{o.remove(),this.style.overflow=r}))},N=r("ix-db"),U=t=>t.replace(/\d+\|/g,(t=>`||${t}`)).substring(2).split("||").map((t=>{const[e,o]=t.split("|");return{n:e,txt:o}})),K=["ge","ex","le","nu","de","jos","jud","ru","1sa","2sa","1ki","2ki","1ch","2ch","ezr","ne","es","job","ps","pr","ec","so","isa","jer","la","eze","da","ho","joe","am","ob","jon","mic","na","hab","zep","hag","zec","mal","mt","mr","lu","joh","ac","ro","1co","2co","ga","eph","php","col","1th","2th","1ti","2ti","tit","phm","heb","jas","1pe","2pe","1jo","2jo","3jo","jude","re"],q=K.map((t=>[t])),H=t=>{const e=(t=>t.reduce(((t,e,o)=>(e.forEach((e=>t[e]=K[o])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""};var W={key:"af",displayname:"afrikaans",abbreviations:[["Genesis","gen","ge","gn"],["Eksodus","eks","ek"],["Levitikus","lev","le","lv"],["Numeri","num","nu","nm"],["Deuteronomium","deut","dt"],["Josua","jos","js"],["Rigters","rig"],["Rut","rt"],["1 Samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","een samuel"],["2 Samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","twee samuel"],["1 Konings","1 kon","i kgs","1kgs","i kon","1kon","i konings","1konings","een konings","een kon","een kgs"],["2 Konings","2 kon","2 kgs","ii kgs","2kgs","ii kon","2kon","ii konings","2konings","2nd kgs","2nd kings","twee konings","twee kon","twee kgs"],["1 Kronieke","1 kron","1 kr","i kr","1kr","1 krn","i krn","1krn","i kron","1kron","i kronieke","1kronieke","een kronieke"],["2 Kronieke","2 kron","2 kr","ii kr","2kr","2 krn","ii krn","2krn","ii kron","2kron","ii kronieke","2kronieke","twee kronieke"],["Esra","esra","esr"],["Nehemia","neh","ne"],["Ester","est","es"],["Job","job","job","jb"],["Psalm","pslm","ps","psalms","psa","psm","pss"],["Spreuke","spr","sp"],["Prediker","pred","pre"],["Hooglied van Salomo","hooglied","hoog","salomo","sal","hvs","hs"],["Jesaja","jes","js"],["Jeremia","jer","je","jr"],["Klaagliedere van Jeremia","klaaglied","klaag","klj"],["Esegiël","eseg","ese","esg"],["Daniel","dan","da","dn"],["Hosea","hos","ho"],["Joël","joel","joe","jl"],["Amos","amos","am"],["Obadja","obad","ob"],["Jona","jnh","jon"],["Miga","mig","mg"],["Nahum","nah","na"],["Habakuk","hab","hb"],["Sefanja","sefan","sef","sf"],["Haggai","hag","hg"],["Sagaria","sag","sg"],["Maleagi","mal","ml"],["Mattheus","matt","mat","mt"],["Markus","mark","mar","mrk","mk","mr"],["Lukas","luk","lk"],["Johannes","john","joh","jhn","jh","jn"],["Handelinge","han","hand","hd"],["Romeine","rom","ro","rm"],["1 Korinthiërs","1 korinte","1 kor","1 ko","i ko","1ko","i kor","1kor","i korinthiers","1korinthiers","een korinthiers"],["2 Korinthiërs","2 korinte","2 kor","2 ko","i ko","2ko","ii kor","2kor","ii korinthiers","2korinthiers","twee korinthiers"],["Galasiërs","gal","ga"],["Efesiërs","efes","efe","ef"],["Filippense","filp","fil","flp","fl"],["Kolossense","kol","kl"],["1 Thessalonicense","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonicense","1thessalonicense","een thessalonicense","eerste thessalonicense"],["2 Thessalonicense","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonicense","2thessalonicense","twee thessalonicense","tweede thessalonicense"],["1 Timotheus","1 tim","1 ti","i ti","1ti","i tim","1tim","i timotheus","1timotheus","een timotheus","eerste timotheus"],["2 Timotheus","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timotheus","2timotheus","twee timotheus","tweede timotheus"],["Titus","titus","tit"],["Filémon","filem","file","flm"],["Hebreërs","heb"],["Jakobus","jak","jk"],["1 Petrus","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i petrus","1petrus","een petrus","eerste petrus"],["2 Petrus","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii petrus","2petrus","twee petrus","tweede petrus"],["1 Johannes","1 jn","i jn","1jn","i jo","1jo","i joh","1 joh","1joh","i jhn","1 jhn","1jhn","i johannes","1johannes","een johannes","eerste johannes"],["2 Johannes","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2 joh","2joh","ii jhn","2 jhn","2jhn","ii johannes","2johannes","twee johannes","tweede johannes"],["3 Johannes","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii johannes","3johannes","drie johannes","derde johannes"],["Judas","jd"],["Openbaring","open","opb","op","die openbaring"]]};const J={},Y=t=>J[t];let X,G,Z,Q,tt,et;function ot(){if(Q=Z,et.last.books[X].chapters[G].verse!==tt.last.books[X].chapters[G].verse){let t=!1,e=!1;G-1>=0&&et.last.books[X].chapters[G-1].verse!==tt.last.books[X].chapters[G-1].verse&&(e=!0),G+1<=et.last.books[X].chapter&&et.last.books[X].chapters[G+1].verse!==tt.last.books[X].chapters[G+1].verse&&(t=!0),t&&Q>et.last.books[X].chapters[G].verse&&(Q=1,G+=1),e&&et.last.books[X].chapters[G].verse>tt.last.books[X].chapters[G].verse&&(Q=Z+1)}}const rt=(t,e,o)=>{tt=Y(e),et=Y(o);const r=t.match(/^\[([\d]*):([[\d]*):([\d])*\]$/);if(r)X=parseInt(r[1]),G=parseInt(r[2]),Z=parseInt(r[3]);else{const e=t.split(":");X=parseInt(e[0]),G=parseInt(e[1]),Z=parseInt(e[2])}switch(X){case 15:case 18:!function(){const t=et.last.books[X].chapters[G].verse-tt.last.books[X].chapters[G].verse;Q=Z+t,Q=t<0?Q<1?0:Q:Q>et.last.books[X].chapters[G].verse?et.last.books[X].chapters[G].verse:Q}();break;case 1:case 20:case 22:case 26:case 32:case 27:case 8:ot();break;default:Q=Z}return r?`[${X}:${G}:${Q}]`:`${X}:${G}:${Q}`},it=new function(t){const e=(o=[...t,q])?1===o.length?[...o[0]]:o.reduce(((t,e)=>((t,e)=>t.length?t.map(((t,o)=>((t,e)=>t.concat(e.filter((e=>-1===t.indexOf(e)))))(t,e[o]))):[...e])(t,e)),[]):[];var o;const r=(t=>{const e=(t=>t.reduce(((t,e)=>(e.forEach((o=>t[o]=e[0])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""})(e),i=H(e),s=e.map((t=>t.join("|"))).join("|"),n="\\d{1,3}",a="\\d{1,3}",l=new RegExp(`^(${s})\\s*(${n})[ ]*:[ ]*(${a})\\b`),c=new RegExp(`^(${s})[ ]*(${n})\\b`),d=new RegExp(`^(?:${s})$`),h=new RegExp(`(^|,|;)(${s})`,"g"),u=new RegExp(`,(${s})`,"g"),p=new RegExp(`(${s})(\\d)`,"g"),b=new RegExp(`^(${n})[ ]*:[ ]*(${a})\\b`),f=new RegExp(`^(?:${s})[ ]*ff`),m=new RegExp(`^(${s})(\\d|$)`,"g");function g(t,e,o){let i,s={};return""===t?{}:e?(o.book&&o.chapter&&o.verse?s={book:o.book,chapter:o.chapter}:o.book&&o.chapter&&(s={book:o.book}),s):void 0===t?{...o}:(s=(i=t.match(l))?{book:r(i[1]),chapter:i[2],verse:i[3]}:(i=t.match(c))?{book:r(i[1]),chapter:i[2]}:(i=t.match(d))?{book:r(i[0])}:(i=t.match(b))?{book:o.book,chapter:i[1],verse:i[2]}:(i=t.match(/(\d{1,3}\b)/))?o.verse?{book:o.book,chapter:o.chapter,verse:i[1]}:{book:o.book,chapter:i[1]}:{...o},s)}function v(t,e){let o,i,s=!1,[n,a]=t.split("-").map((t=>t.trim().toLowerCase()));return(/\d{1,3}[ ]*ff$/i.test(n)||f.test(n))&&(n=n.replace(/[ ]*ff$/,""),s=!0),(o=n.match(l))?(i={book:r(o[1]),chapter:o[2],verse:o[3]},e={...i}):(o=n.match(c))?(i={book:r(o[1]),chapter:o[2],verse:"1"},e={book:i.book,chapter:i.chapter}):(o=n.match(d))?(i={book:r(o[0]),chapter:"1",verse:"1"},e={book:i.book}):(o=n.match(b))?(i={book:e.book,chapter:o[1],verse:o[2]},e={...i}):(o=n.match(/(\d{1,3}\b)/))&&(e.verse?(i={book:e.book,chapter:e.chapter,verse:o[1]},e={...i}):(i={book:e.book,chapter:o[1],verse:"1"},e={book:i.book,chapter:i.chapter})),{start:i,end:g(a,s,e),ctx:e}}this.getVerseRanges=t=>{const{ranges:e}=t.split(/[,\n;]+/g).reduce(((t,e)=>{const o=v(e,t.ctx);return t.ctx=o.ctx,o.start&&t.ranges.push({start:o.start,end:o.end}),t}),{ctx:{book:"genesis"},ranges:[]});return e},this.bookNames=e,this.normaliseBookName=r,this.normaliseBookNameShort=i,this.partToRange=v,this.compressRangesText=t=>t.toLowerCase().replace(/\n+/g,";").replace(/\s/g,"").split(";").reduce(((t,e)=>[...t,e.split(",").reduce(((t,e)=>{const o=e.split("-").map((t=>t.replace(m,((t,e,o)=>`${i(e)}${o||""}`)))).join("-");return[...t,o]}),[])]),[]).join(";"),this.uncompressRangesText=t=>t.toLowerCase().replace(h,((t,e,o)=>`${e}${r(o)}`)).replace(u,((t,e)=>`, ${e}`)).replace(p,((t,e,o)=>`${e} ${o}`)).replace(/;/g,"\n")}([W,{key:"en",displayname:"english",abbreviations:[["genesis","gen","ge","gn"],["exodus","exo","ex","exod"],["leviticus","lev","le","lv"],["numbers","num","nu","nm","nb"],["deuteronomy","deut","dt"],["joshua","josh","jos","jsh"],["judges","judg","jdg","jg","jdgs"],["ruth","rth","ru"],["1 samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","1st samuel","first samuel"],["2 samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","2nd samuel","second samuel"],["1 kings","1 kgs","1 ki","1k","i kgs","1kgs","i ki","1ki","i kings","1kings","1st kgs","1st kings","first kings","first kgs","1kin"],["2 kings","2 kgs","2 ki","2k","ii kgs","2kgs","ii ki","2ki","ii kings","2kings","2nd kgs","2nd kings","second kings","second kgs","2kin"],["1 chronicles","1 chron","1 ch","i ch","1ch","1 chr","i chr","1chr","i chron","1chron","i chronicles","1chronicles","1st chronicles","first chronicles"],["2 chronicles","2 chron","2 ch","ii ch","2ch","ii chr","2chr","ii chron","2chron","ii chronicles","2chronicles","2nd chronicles","second chronicles"],["ezra","ezra","ezr"],["nehemiah","neh","ne"],["esther","esth","es"],["job","job","job","jb"],["psalm","pslm","ps","psalms","psa","psm","pss"],["proverbs","prov","pr","prv"],["ecclesiastes","eccles","ec","qoh","qoheleth"],["song of solomon","song","so","canticle of canticles","canticles","song of songs","sos"],["isaiah","isa","is"],["jeremiah","jer","je","jr"],["lamentations","lam","la"],["ezekiel","ezek","eze","ezk"],["daniel","dan","da","dn"],["hosea","hos","ho"],["joel","joel","joe","jl"],["amos","amos","am"],["obadiah","obad","ob"],["jonah","jnh","jon"],["micah","micah","mic"],["nahum","nah","na"],["habakkuk","hab","hab"],["zephaniah","zeph","zep","zp"],["haggai","hag","hg"],["zechariah","zech","zec","zc"],["malachi","mal","mal","ml"],["matthew","matt","mt"],["mark","mrk","mk","mr"],["luke","luk","lk"],["john","john","jn","jhn"],["acts","acts","ac"],["romans","rom","ro","rm"],["1 corinthians","1 cor","1 co","i co","1co","i cor","1cor","i corinthians","1corinthians","1st corinthians","first corinthians"],["2 corinthians","2 cor","2 co","ii co","2co","ii cor","2cor","ii corinthians","2corinthians","2nd corinthians","second corinthians"],["galatians","gal","ga"],["ephesians","ephes","eph"],["philippians","phil","php"],["colossians","col","col"],["1 thessalonians","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonians","1thessalonians","1st thessalonians","first thessalonians"],["2 thessalonians","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonians","2thessalonians","2nd thessalonians","second thessalonians"],["1 timothy","1 tim","1 ti","i ti","1ti","i tim","1tim","i timothy","1timothy","1st timothy","first timothy"],["2 timothy","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timothy","2timothy","2nd timothy","second timothy"],["titus","titus","tit"],["philemon","philem","phm"],["hebrews","hebrews","heb"],["james","james","jas","jm"],["1 peter","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i peter","1peter","1st peter","first peter"],["2 peter","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii peter","2peter","2nd peter","second peter"],["1 john","1 jn","i jn","1jn","i jo","1jo","i joh","1joh","i jhn","1 jhn","1jhn","i john","1john","1st john","first john"],["2 john","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2joh","ii jhn","2 jhn","2jhn","ii john","2john","2nd john","second john"],["3 john","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii john","3john","3rd john","third john"],["jude","jd"],["revelation","rev","re","the revelation"]]}].map((({abbreviations:t})=>t))),{bookNames:st,getVerseRanges:nt}=it,at=st.reduce(((t,e,o)=>(t[e[0]]=o,t)),{}),lt=st.reduce(((t,e,o)=>(t[o]=e[0],t)),{}),ct=t=>{const e=[],o={},r={book:0,books:{}};return t.forEach(((t,i)=>{r.book=i,r.books[i]={chapter:0,chapters:{}},t.forEach(((t,s)=>{r.books[i].chapter=s,r.books[i].chapters[s]={verse:0},t.forEach((t=>{r.books[i].chapters[s].verse=+t.n,o[`${i}:${s}:${t.n}`]=e.length,e.push({hash:`${i}:${s}:${t.n}`,text:t.txt})}))}))})),{verseList:e,verseLookUp:o,last:r}},dt=(t,e)=>void 0===t||t>e?e:t,ht=t=>lt[t],ut=t=>{const e=t.split(":");return{book:K[+e[0]],chapter:""+(+e[1]+1),verse:e[2]}},pt=({rangesText:t,versionName:e})=>nt(t||"gen - rev").map((t=>((t,e)=>{const{start:o,end:r}=e,i=Y(t);if(!i)return{};const s=i.verseLookUp[`${at[o.book]}:${o.chapter-1}:${o.verse}`],n=i.last.book,a=dt(at[r.book],n),l=i.last.books[a].chapter,c=dt(r.chapter&&r.chapter-1,l),d=i.last.books[a].chapters[c].verse,h=dt(r.verse,d),u=i.verseLookUp[`${a}:${c}:${h}`];return{start:{...o,index:s},end:{book:ht(a),chapter:`${c+1}`,verse:`${h}`,index:u}}})(e,t))),bt=(t,e)=>{const o=((t,e)=>J[t].verseLookUp[e])(t,e),r=((t,e)=>J[t].verseList[e])(t,o);return{text:r?r.text:"",prettyRef:mt(ut(e))}},ft=(t,e)=>{const o=e.map((({start:e,end:o})=>((t,e,o)=>((t,e)=>{const o=[];for(let r=t;r<=e;r++)o.push(r);return o})(e,o).map((e=>Y(t).verseList[e].hash)))(t,e.index,o.index)));return[].concat(...o)},mt=({book:t,chapter:e,verse:o})=>{return`${r=t,r.replace(/\b\w/g,(t=>t.toUpperCase()))} ${e}:${o}`;var r},gt={},vt=(t,e)=>(gt[t]||(gt[t]=fetch(e).then((e=>{if(e.status>=400)throw delete gt[t],new Error("Bad res from server");return e.text()})).then((e=>{const o=e.split("|||").map((t=>t.split("||").map(U)));return((t,e)=>{J[t]=ct(e)})(t,o),o}))),gt[t]);let yt="";const kt=t=>{const e=t.split("\n");return e.splice(0,1),e.map(wt)},wt=t=>{const[e,o,r,i,s,n]=t.split("\t");return{key:e+"-"+o+"-"+r+":"+i,verse:e+"-"+o+"-"+r,sort:i,words:s,refs:n}};function _t(t){const[e,o,r]=t.split(":");return`${parseInt(e)+1}-${parseInt(o)+1}-${r}`}const xt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '};let $t=[{name:"default",resolver:t=>i(`assets/icons/${t}.svg`)},{name:"system",resolver:t=>t in xt?`data:image/svg+xml,${encodeURIComponent(xt[t])}`:""}],Ct=[];function jt(t){return $t.find((e=>e.name===t))}function zt(t,e){const o=Object.assign({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:i}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),s=this[i];e!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,s))}})),i.call(this,t)}}}var St=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};class Et extends n{emit(t,e){const o=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}}St([s()],Et.prototype,"dir",void 0),St([s()],Et.prototype,"lang",void 0);var At=a`
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
`,Lt=a`
  ${At}

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
`;const Pt=Symbol(),Tt=Symbol();let Ft;const Bt=new Map;let Dt=class extends Et{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let r;if(null==e?void 0:e.spriteSheet)return c`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return 410===r.status?Pt:Tt}catch(t){return Tt}try{const t=document.createElement("div");t.innerHTML=await r.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return Pt;Ft||(Ft=new DOMParser);const i=Ft.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return i?(i.part.add("svg"),document.adoptNode(i)):Pt}catch(t){return Pt}}connectedCallback(){var t;super.connectedCallback(),t=this,Ct.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Ct=Ct.filter((e=>e!==t))}getUrl(){const t=jt(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=jt(this.library),o=this.getUrl();if(!o)return void(this.svg=null);let r=Bt.get(o);if(r||(r=this.resolveIcon(o,e),Bt.set(o,r)),!this.initialRender)return;const i=await r;if(i===Tt&&Bt.delete(o),o===this.getUrl())if(((t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e)(i))this.svg=i;else switch(i){case Tt:case Pt:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),null==(t=null==e?void 0:e.mutator)||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};Dt.styles=Lt,C([l()],Dt.prototype,"svg",2),C([s({reflect:!0})],Dt.prototype,"name",2),C([s()],Dt.prototype,"src",2),C([s()],Dt.prototype,"label",2),C([s({reflect:!0})],Dt.prototype,"library",2),C([zt("label")],Dt.prototype,"handleLabelChange",1),C([zt(["name","src","library"])],Dt.prototype,"setIcon",1),Dt=C([d("sl-icon")],Dt);const It=new Set,Vt=new MutationObserver(Ut),Ot=new Map;let Rt,Mt=document.documentElement.dir||"ltr",Nt=document.documentElement.lang||navigator.language;function Ut(){Mt=document.documentElement.dir||"ltr",Nt=document.documentElement.lang||navigator.language,[...It.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Vt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class Kt{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){It.add(this.host)}hostDisconnected(){It.delete(this.host)}dir(){return`${this.host.dir||Mt}`.toLowerCase()}lang(){return`${this.host.lang||Nt}`.toLowerCase()}getTranslationData(t){var e,o;const r=new Intl.Locale(t),i=null==r?void 0:r.language.toLowerCase(),s=null!==(o=null===(e=null==r?void 0:r.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:i,region:s,primary:Ot.get(`${i}-${s}`),secondary:Ot.get(i)}}exists(t,e){var o;const{primary:r,secondary:i}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||i&&i[t]||e.includeFallback&&Rt&&Rt[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(r&&r[t])i=r[t];else{if(!Rt||!Rt[t])return console.error(`No translation found for: ${String(t)}`),String(t);i=Rt[t]}return"function"==typeof i?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Ot.has(e)?Ot.set(e,Object.assign(Object.assign({},Ot.get(e)),t)):Ot.set(e,t),Rt||(Rt=t)})),Ut()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"});class qt extends Kt{}var Ht=a`
  ${At}

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
`;let Wt=class extends Et{constructor(){super(...arguments),this.localize=new qt(this)}render(){return c`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Wt.styles=Ht,Wt=C([d("sl-spinner")],Wt);const Jt=A(class extends L{constructor(t){var e;if(super(t),t.type!==j||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(e)}const s=t.element.classList;this.nt.forEach((t=>{t in e||(s.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(o?(s.add(t),this.nt.add(t)):(s.remove(t),this.nt.delete(t)))}return o}}),Yt=new WeakMap,Xt=new WeakMap,Gt=new WeakSet,Zt=new WeakMap;class Qt{constructor(t,e){(this.host=t).addController(this),this.options=Object.assign({form:t=>{if(t.hasAttribute("form")&&""!==t.getAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");if(o)return e.getElementById(o)}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!==(e=t.disabled)&&void 0!==e&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Zt.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Zt.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Yt.has(this.form)?Yt.get(this.form).add(this.host):Yt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Xt.has(this.form)||(Xt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&(null===(t=Yt.get(this.form))||void 0===t||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Xt.has(this.form)&&(this.form.reportValidity=Xt.get(this.form),Xt.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),i="sl-button"===this.host.tagName.toLowerCase();!e&&!i&&"string"==typeof o&&o.length>0&&void 0!==r&&(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null===(e=Yt.get(this.form))||void 0===e||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Zt.set(this.host,[])}handleInteraction(t){const e=Zt.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?Gt.add(t):Gt.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!==(t=this.form)&&void 0!==t?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(Gt.has(e)),r=Boolean(e.required);e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}}const te=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Object.assign(Object.assign({},te),{valid:!1,valueMissing:!0})),Object.freeze(Object.assign(Object.assign({},te),{valid:!1,customError:!0}));class ee{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}const oe=Symbol.for(""),re=t=>{if((null==t?void 0:t.r)===oe)return null==t?void 0:t._$litStatic$},ie=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:oe}),se=new Map,ne=(t=>(e,...o)=>{const r=o.length;let i,s;const n=[],a=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(s=o[c],i=re(s));)l+=i+e[++c],d=!0;a.push(s),n.push(l),c++}if(c===r&&n.push(e[r]),d){const t=n.join("$$lit$$");void 0===(e=se.get(t))&&(n.raw=n,se.set(t,e=n)),o=a}return t(e,...o)})(c),ae=t=>null!=t?t:h;var le=a`
  ${At}

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
`;let ce=class extends Et{constructor(){super(),this.formControlController=new Qt(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new ee(this,"[default]","prefix","suffix"),this.localize=new qt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener",this.handleHostClick=t=>{(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}get validity(){return this.isButton()?this.button.validity:te}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?ie`a`:ie`button`;return ne`
      <${e}
        part="base"
        class=${Jt({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${ae(t?void 0:this.disabled)}
        type=${ae(t?void 0:this.type)}
        title=${this.title}
        name=${ae(t?void 0:this.name)}
        value=${ae(t?void 0:this.value)}
        href=${ae(t?this.href:void 0)}
        target=${ae(t?this.target:void 0)}
        download=${ae(t?this.download:void 0)}
        rel=${ae(t?this.rel:void 0)}
        role=${ae(t?void 0:"button")}
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
        ${this.caret?ne` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ne`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};ce.styles=le,C([_(".button")],ce.prototype,"button",2),C([l()],ce.prototype,"hasFocus",2),C([l()],ce.prototype,"invalid",2),C([s()],ce.prototype,"title",2),C([s({reflect:!0})],ce.prototype,"variant",2),C([s({reflect:!0})],ce.prototype,"size",2),C([s({type:Boolean,reflect:!0})],ce.prototype,"caret",2),C([s({type:Boolean,reflect:!0})],ce.prototype,"disabled",2),C([s({type:Boolean,reflect:!0})],ce.prototype,"loading",2),C([s({type:Boolean,reflect:!0})],ce.prototype,"outline",2),C([s({type:Boolean,reflect:!0})],ce.prototype,"pill",2),C([s({type:Boolean,reflect:!0})],ce.prototype,"circle",2),C([s()],ce.prototype,"type",2),C([s()],ce.prototype,"name",2),C([s()],ce.prototype,"value",2),C([s()],ce.prototype,"href",2),C([s()],ce.prototype,"target",2),C([s()],ce.prototype,"rel",2),C([s()],ce.prototype,"download",2),C([s()],ce.prototype,"form",2),C([s({attribute:"formaction"})],ce.prototype,"formAction",2),C([s({attribute:"formenctype"})],ce.prototype,"formEnctype",2),C([s({attribute:"formmethod"})],ce.prototype,"formMethod",2),C([s({attribute:"formnovalidate",type:Boolean})],ce.prototype,"formNoValidate",2),C([s({attribute:"formtarget"})],ce.prototype,"formTarget",2),C([zt("disabled",{waitUntilFirstUpdate:!0})],ce.prototype,"handleDisabledChange",1),ce=C([d("sl-button")],ce);var de=a`
  ${At}

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
`;let he=class extends Et{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?ie`a`:ie`button`;return ne`
      <${e}
        part="base"
        class=${Jt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ae(t?void 0:this.disabled)}
        type=${ae(t?void 0:"button")}
        href=${ae(t?this.href:void 0)}
        target=${ae(t?this.target:void 0)}
        download=${ae(t?this.download:void 0)}
        rel=${ae(t&&this.target?"noreferrer noopener":void 0)}
        role=${ae(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${ae(this.name)}
          library=${ae(this.library)}
          src=${ae(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};function ue(t,e,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,Object.assign(Object.assign({},o),{duration:pe()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})}))}function pe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function be(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}he.styles=de,C([_(".icon-button")],he.prototype,"button",2),C([l()],he.prototype,"hasFocus",2),C([s()],he.prototype,"name",2),C([s()],he.prototype,"library",2),C([s()],he.prototype,"src",2),C([s()],he.prototype,"href",2),C([s()],he.prototype,"target",2),C([s()],he.prototype,"download",2),C([s()],he.prototype,"label",2),C([s({type:Boolean,reflect:!0})],he.prototype,"disabled",2),he=C([d("sl-icon-button")],he);const fe=new Map,me=new WeakMap;function ge(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function ve(t,e){fe.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function ye(t,e,o){const r=me.get(t);if(null==r?void 0:r[e])return ge(r[e],o.dir);const i=fe.get(e);return i?ge(i,o.dir):{keyframes:[],options:{duration:0}}}const ke=new Set;function we(t){if(ke.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function _e(t){ke.delete(t),0===ke.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function xe(t,e){return new Promise((o=>{t.addEventListener(e,(function r(i){i.target===t&&(t.removeEventListener(e,r),o())}))}))}function $e(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}let Ce=[];class je{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Ce.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ce=Ce.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ce[Ce.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=function(t){var e,o;const r=[];return function t(e){e instanceof HTMLElement&&(r.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(t),{start:null!==(e=r.find((t=>$e(t))))&&void 0!==e?e:null,end:null!==(o=r.reverse().find((t=>$e(t))))&&void 0!==o?o:null}}(this.element),o="forward"===this.tabDirection?t:e;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}var ze=a`
  ${At}

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
`;let Se=class extends Et{constructor(){super(...arguments),this.hasSlotController=new ee(this,"footer"),this.localize=new qt(this),this.modal=new je(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),we(this))}disconnectedCallback(){super.disconnectedCallback(),_e(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=ye(this,"dialog.denyClose",{dir:this.localize.dir()});ue(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),we(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([be(this.dialog),be(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=ye(this,"dialog.show",{dir:this.localize.dir()}),o=ye(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ue(this.panel,e.keyframes,e.options),ue(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([be(this.dialog),be(this.overlay)]);const t=ye(this,"dialog.hide",{dir:this.localize.dir()}),e=ye(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ue(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),ue(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,_e(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}render(){return c`
      <div
        part="base"
        class=${Jt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ae(this.noHeader?this.label:void 0)}
          aria-labelledby=${ae(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":c`
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
    `}};function Ee(t){return t.charAt(0).toUpperCase()+t.slice(1)}Se.styles=ze,C([_(".dialog")],Se.prototype,"dialog",2),C([_(".dialog__panel")],Se.prototype,"panel",2),C([_(".dialog__overlay")],Se.prototype,"overlay",2),C([s({type:Boolean,reflect:!0})],Se.prototype,"open",2),C([s({reflect:!0})],Se.prototype,"label",2),C([s({attribute:"no-header",type:Boolean,reflect:!0})],Se.prototype,"noHeader",2),C([zt("open",{waitUntilFirstUpdate:!0})],Se.prototype,"handleOpenChange",1),Se=C([d("sl-dialog")],Se),ve("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),ve("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),ve("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),ve("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ve("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ae=a`
  ${At}

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
`;let Le=class extends Et{constructor(){super(...arguments),this.hasSlotController=new ee(this,"footer"),this.localize=new qt(this),this.modal=new je(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&!this.contained&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),we(this)))}disconnectedCallback(){super.disconnectedCallback(),_e(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=ye(this,"drawer.denyClose",{dir:this.localize.dir()});ue(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),we(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([be(this.drawer),be(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=ye(this,`drawer.show${Ee(this.placement)}`,{dir:this.localize.dir()}),o=ye(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ue(this.panel,e.keyframes,e.options),ue(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),_e(this)),await Promise.all([be(this.drawer),be(this.overlay)]);const t=ye(this,`drawer.hide${Ee(this.placement)}`,{dir:this.localize.dir()}),e=ye(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ue(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),ue(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),we(this)),this.open&&this.contained&&(this.modal.deactivate(),_e(this))}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}render(){return c`
      <div
        part="base"
        class=${Jt({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ae(this.noHeader?this.label:void 0)}
          aria-labelledby=${ae(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":c`
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
    `}};Le.styles=Ae,C([_(".drawer")],Le.prototype,"drawer",2),C([_(".drawer__panel")],Le.prototype,"panel",2),C([_(".drawer__overlay")],Le.prototype,"overlay",2),C([s({type:Boolean,reflect:!0})],Le.prototype,"open",2),C([s({reflect:!0})],Le.prototype,"label",2),C([s({reflect:!0})],Le.prototype,"placement",2),C([s({type:Boolean,reflect:!0})],Le.prototype,"contained",2),C([s({attribute:"no-header",type:Boolean,reflect:!0})],Le.prototype,"noHeader",2),C([zt("open",{waitUntilFirstUpdate:!0})],Le.prototype,"handleOpenChange",1),C([zt("contained",{waitUntilFirstUpdate:!0})],Le.prototype,"handleNoModalChange",1),Le=C([d("sl-drawer")],Le),ve("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),ve("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),ve("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),ve("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),ve("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),ve("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),ve("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),ve("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),ve("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),ve("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ve("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Pe=".ripple-box {\n  display: block;\n  position: relative; /* MUST HAVE for MWC-RIPPLE */\n  justify-content: center;\n  flex-direction: column;\n  padding: 4px;\n}\n.ripple-box:hover {\n    background-color: var(--sl-color-neutral-100);\n    cursor: pointer;\n  }\n.ripple-box[activated] {\n    background-color: var(--sl-color-primary-100);\n  }\n.ripple-box[activated]:hover {\n    background-color: var(--sl-color-primary-200);\n  }\n";class Te{constructor(t,e=450){this._scroll_elem=null,this._currentY=0,this._previousY=0,this._scrollDirection="",this.offscreen=!1,this._handleScrollEvent=t=>{this._currentY=t.target.scrollTop,this._scrollDirection=(t=>{const e=!this._previousY||this._previousY<t?"down":"up";return this._previousY=t,e})(this._currentY);let e="down"===this._scrollDirection&&this._currentY>this.keep_zone;const o=e!==this.offscreen;this.offscreen=e,o&&this.host&&("up"===this._scrollDirection&&window.scrollTo(0,0),this.host.requestUpdate())},this.host=t,this.keep_zone=e,t.addController(this)}_registerScrollElement(){this._scroll_elem=document.querySelector("app-web-component")}hostConnected(){setTimeout((()=>{this._registerScrollElement(),this._scroll_elem&&this._scroll_elem.addEventListener("scroll",this._handleScrollEvent.bind(this))}),500)}hostDisconnected(){this._scroll_elem&&this._scroll_elem.removeEventListener("scroll",this._handleScrollEvent.bind(this))}}var Fe=a`
  ${At}

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
`;let Be=class extends Et{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return c`
      <slot
        part="base"
        class=${Jt({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};Be.styles=Fe,C([s({reflect:!0})],Be.prototype,"variant",2),C([s({type:Boolean,reflect:!0})],Be.prototype,"pill",2),C([s({type:Boolean,reflect:!0})],Be.prototype,"pulse",2),Be=C([d("sl-badge")],Be);const De=(t="value")=>(e,o)=>{const r=e.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(e,s,n){var a;const l=r.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||u,r=("function"==typeof e?e:null!==(a=null==e?void 0:e.fromAttribute)&&void 0!==a?a:u.fromAttribute)(n,l.type);this[t]!==r&&(this[o]=r)}i.call(this,e,s,n)}},Ie=A(class extends L{constructor(t){if(super(t),t.type!==S&&t.type!==j&&t.type!==E)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===o||e===h)return e;const r=t.element,i=t.name;if(t.type===S){if(e===r[i])return o}else if(t.type===E){if(!!e===r.hasAttribute(i))return o}else if(t.type===j&&r.getAttribute(i)===e+"")return o;return I(t),e}});var Ve=a`
  ${At}

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
`;let Oe=class extends Et{constructor(){super(...arguments),this.formControlController=new Qt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return c`
      <label
        part="base"
        class=${Jt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${ae(this.value)}
          .indeterminate=${Ie(this.indeterminate)}
          .checked=${Ie(this.checked)}
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
          ${this.checked?c`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?c`
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
    `}};Oe.styles=Ve,C([_('input[type="checkbox"]')],Oe.prototype,"input",2),C([l()],Oe.prototype,"hasFocus",2),C([s()],Oe.prototype,"title",2),C([s()],Oe.prototype,"name",2),C([s()],Oe.prototype,"value",2),C([s({reflect:!0})],Oe.prototype,"size",2),C([s({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2),C([s({type:Boolean,reflect:!0})],Oe.prototype,"checked",2),C([s({type:Boolean,reflect:!0})],Oe.prototype,"indeterminate",2),C([De("checked")],Oe.prototype,"defaultChecked",2),C([s({reflect:!0})],Oe.prototype,"form",2),C([s({type:Boolean,reflect:!0})],Oe.prototype,"required",2),C([zt("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1),C([zt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Oe.prototype,"handleStateChange",1),Oe=C([d("sl-checkbox")],Oe);var Re=a`
  ${At}
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
`;let Me=class extends Et{constructor(){super(...arguments),this.formControlController=new Qt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ee(this,"help-text","label"),this.localize=new qt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,r=!!this.helpText||!!e,i=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return c`
      <div
        part="form-control"
        class=${Jt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":r})}
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
            class=${Jt({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${ae(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ae(this.placeholder)}
              minlength=${ae(this.minlength)}
              maxlength=${ae(this.maxlength)}
              min=${ae(this.min)}
              max=${ae(this.max)}
              step=${ae(this.step)}
              .value=${Ie(this.value)}
              autocapitalize=${ae(this.autocapitalize)}
              autocomplete=${ae(this.autocomplete)}
              autocorrect=${ae(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ae(this.pattern)}
              enterkeyhint=${ae(this.enterkeyhint)}
              inputmode=${ae(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?c`
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
            ${this.passwordToggle&&!this.disabled?c`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?c`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:c`
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
    `}};Me.styles=Re,C([_(".input__control")],Me.prototype,"input",2),C([l()],Me.prototype,"hasFocus",2),C([s()],Me.prototype,"title",2),C([s({reflect:!0})],Me.prototype,"type",2),C([s()],Me.prototype,"name",2),C([s()],Me.prototype,"value",2),C([De()],Me.prototype,"defaultValue",2),C([s({reflect:!0})],Me.prototype,"size",2),C([s({type:Boolean,reflect:!0})],Me.prototype,"filled",2),C([s({type:Boolean,reflect:!0})],Me.prototype,"pill",2),C([s()],Me.prototype,"label",2),C([s({attribute:"help-text"})],Me.prototype,"helpText",2),C([s({type:Boolean})],Me.prototype,"clearable",2),C([s({type:Boolean,reflect:!0})],Me.prototype,"disabled",2),C([s()],Me.prototype,"placeholder",2),C([s({type:Boolean,reflect:!0})],Me.prototype,"readonly",2),C([s({attribute:"password-toggle",type:Boolean})],Me.prototype,"passwordToggle",2),C([s({attribute:"password-visible",type:Boolean})],Me.prototype,"passwordVisible",2),C([s({attribute:"no-spin-buttons",type:Boolean})],Me.prototype,"noSpinButtons",2),C([s({reflect:!0})],Me.prototype,"form",2),C([s({type:Boolean,reflect:!0})],Me.prototype,"required",2),C([s()],Me.prototype,"pattern",2),C([s({type:Number})],Me.prototype,"minlength",2),C([s({type:Number})],Me.prototype,"maxlength",2),C([s()],Me.prototype,"min",2),C([s()],Me.prototype,"max",2),C([s()],Me.prototype,"step",2),C([s()],Me.prototype,"autocapitalize",2),C([s()],Me.prototype,"autocorrect",2),C([s()],Me.prototype,"autocomplete",2),C([s({type:Boolean})],Me.prototype,"autofocus",2),C([s()],Me.prototype,"enterkeyhint",2),C([s({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Me.prototype,"spellcheck",2),C([s()],Me.prototype,"inputmode",2),C([zt("disabled",{waitUntilFirstUpdate:!0})],Me.prototype,"handleDisabledChange",1),C([zt("step",{waitUntilFirstUpdate:!0})],Me.prototype,"handleStepChange",1),C([zt("value",{waitUntilFirstUpdate:!0})],Me.prototype,"handleValueChange",1),Me=C([d("sl-input")],Me);class Ne extends L{constructor(t){if(super(t),this.it=h,t.type!==z)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||null==t)return this._t=void 0,this.it=t;if(t===o)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ne.directiveName="unsafeHTML",Ne.resultType=1;const Ue=A(Ne);let Ke=class extends n{constructor(){super(),this.rangesText="",this.filterText="",this.fullWords=!1,this.caseSensitive=!1,this.isBiblesLoaded=!1,this._verses=[],this._hashList=[],this._versionName="afr",this._altVersionName="kjv",this._onVerseClicked=t=>{const e=t.currentTarget;if(e){if(null!==e.getAttribute("activated")){e.removeAttribute("activated");const t=e.closest(".container");if(t){const o=e.nextSibling;t.removeChild(o)}return}e.setAttribute("activated","");const t=e.dataset.hash;if(t){const o=_t(rt(t,this._versionName,this._altVersionName)),r=document.createElement("tsk-refs");r.setAttribute("refs",o),e.after(r)}}}}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.initializeBible()}disconnectedCallback(){this.destroy()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this._setVerses()}initializeBible(){m.start();let t=`${window.origin}${g}resources/${this._versionName}.txt`;vt(this._versionName,t).then((()=>{t=`${window.origin}${g}resources/${this._altVersionName}.txt`,vt(this._altVersionName,t).then((()=>{this.isBiblesLoaded=!0,m.stop(),this._setVerses()})).catch((t=>console.log("Error loading bibles",t)))})).catch(console.log)}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",M)}))}async _setVerses(){const t=((t,e=!1,o=!1)=>{const r=/(["'])(\\\1|.)*?\1/g,i=t.match(r)||[],s=t.replace(r,"").match(/[^\s"']+/g)||[],n=i.map((t=>t.substring(1,t.length-1))),a=o?"":"i",l=e?"\\b":"",c=[...n,...s].map((t=>new RegExp(l+t+l,a)));return t=>{let e=0;for(;c[e]&&c[e].test(t);)e++;return e===c.length}})(this.filterText,this.fullWords,this.caseSensitive);if(!this.isBiblesLoaded)return;if(this.rangesText.length<2)return;const e=[],o=pt({rangesText:this.rangesText,versionName:this._versionName});if(0===o.length)return;this._hashList=ft(this._versionName,o);let r=0;for(let o of this._hashList){const i=bt(this._versionName,o);if(t(i.text)){const t=rt(o,this._versionName,this._altVersionName),s=bt(this._altVersionName,t),n={afr:i,kjv:await this._style_KJV_verse(_t(t),s),uuid:this._uuid(),hash:o};e.push(n),r++}if(r>99)break}this._verses=e}_getTSKRefs(t){return void 0===this._ixdb?null:new Promise(((e,o)=>{m.start();const r=this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t));r.onsuccess=t=>{let o=t.target.result;return o.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),m.stop(),e(o)},r.onerror=t=>(m.stop(),o(t))}))}async _style_KJV_verse(t,e){try{const o=await this._getTSKRefs(t);let r=0;o&&o.length>0&&o.forEach((t=>{const{text:o,index:i}=function(t,e,o){const r=e.length;if(o>=t.length)return{text:t,index:t.length};const i=RegExp("(\\b"+e+"\\b)|(^"+e+"$)","g");let s;for(;null!==(s=i.exec(t))&&i.lastIndex<o;);if(null!==s){if(void 0!==s[1])return{text:t.substring(0,i.lastIndex-r)+" <b>"+e+"</b> "+t.substring(i.lastIndex),index:i.lastIndex+7};if(void 0!==s[2])return{text:"<b>"+t+"</b>",index:i.lastIndex+7}}return{text:t,index:i.lastIndex}}(e.text,t.words,r);r=i,e.text=o}))}catch(t){console.log("Error Formatting KJV",t)}return e}_uuid(){return Math.random().toString(36).substring(2,12)}destroy(){}render(){return c`
        <div class="container">
          ${R(this._verses,(t=>t.uuid),(t=>c`
                <div class="ripple-box"
                  data-uuid=${t.uuid}
                  data-hash=${t.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${t.afr.prettyRef} ${t.afr.text}
                  </p>
                  ${t.kjv.text.length>0?c`
                      <p class="kjvtext" >
                        ${t.kjv.prettyRef} ${Ue(t.kjv.text)}
                      </p>

                      `:h}
                </div>
               `))}
        </div>
    `}};function qe(t){for(var e=arguments.length,o=Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(o.length?" "+o.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function He(t){return!!t&&!!t[Po]}function We(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var o=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return o===Object||"function"==typeof o&&Function.toString.call(o)===To}(t)||Array.isArray(t)||!!t[Lo]||!!(null===(e=t.constructor)||void 0===e?void 0:e[Lo])||Ze(t)||Qe(t))}function Je(t,e,o){void 0===o&&(o=!1),0===Ye(t)?(o?Object.keys:Fo)(t).forEach((function(r){o&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(o,r){return e(r,o,t)}))}function Ye(t){var e=t[Po];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Ze(t)?2:Qe(t)?3:0}function Xe(t,e){return 2===Ye(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ge(t,e,o){var r=Ye(t);2===r?t.set(e,o):3===r?t.add(o):t[e]=o}function Ze(t){return zo&&t instanceof Map}function Qe(t){return So&&t instanceof Set}function to(t){return t.o||t.t}function eo(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Bo(t);delete e[Po];for(var o=Fo(e),r=0;r<o.length;r++){var i=o[r],s=e[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function oo(t,e){return void 0===e&&(e=!1),io(t)||He(t)||!We(t)||(Ye(t)>1&&(t.set=t.add=t.clear=t.delete=ro),Object.freeze(t),e&&Je(t,(function(t,e){return oo(e,!0)}),!0)),t}function ro(){qe(2)}function io(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function so(t){var e=Do[t];return e||qe(18,t),e}function no(){return Co}function ao(t,e){e&&(so("Patches"),t.u=[],t.s=[],t.v=e)}function lo(t){co(t),t.p.forEach(uo),t.p=null}function co(t){t===Co&&(Co=t.l)}function ho(t){return Co={p:[],l:Co,h:t,m:!0,_:0}}function uo(t){var e=t[Po];0===e.i||1===e.i?e.j():e.O=!0}function po(t,e){e._=e.p.length;var o=e.p[0],r=void 0!==t&&t!==o;return e.h.g||so("ES5").S(e,t,r),r?(o[Po].P&&(lo(e),qe(4)),We(t)&&(t=bo(e,t),e.l||mo(e,t)),e.u&&so("Patches").M(o[Po].t,t,e.u,e.s)):t=bo(e,o,[]),lo(e),e.u&&e.v(e.u,e.s),t!==Ao?t:void 0}function bo(t,e,o){if(io(e))return e;var r=e[Po];if(!r)return Je(e,(function(i,s){return fo(t,r,e,i,s,o)}),!0),e;if(r.A!==t)return e;if(!r.P)return mo(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=eo(r.k):r.o,s=i,n=!1;3===r.i&&(s=new Set(i),i.clear(),n=!0),Je(s,(function(e,s){return fo(t,r,i,e,s,o,n)})),mo(t,i,!1),o&&t.u&&so("Patches").N(r,o,t.u,t.s)}return r.o}function fo(t,e,o,r,i,s,n){if(He(i)){var a=bo(t,i,s&&e&&3!==e.i&&!Xe(e.R,r)?s.concat(r):void 0);if(Ge(o,r,a),!He(a))return;t.m=!1}else n&&o.add(i);if(We(i)&&!io(i)){if(!t.h.D&&t._<1)return;bo(t,i),e&&e.A.l||mo(t,i)}}function mo(t,e,o){void 0===o&&(o=!1),!t.l&&t.h.D&&t.m&&oo(e,o)}function go(t,e){var o=t[Po];return(o?to(o):t)[e]}function vo(t,e){if(e in t)for(var o=Object.getPrototypeOf(t);o;){var r=Object.getOwnPropertyDescriptor(o,e);if(r)return r;o=Object.getPrototypeOf(o)}}function yo(t){t.P||(t.P=!0,t.l&&yo(t.l))}function ko(t){t.o||(t.o=eo(t.t))}function wo(t,e,o){var r=Ze(e)?so("MapSet").F(e,o):Qe(e)?so("MapSet").T(e,o):t.g?function(t,e){var o=Array.isArray(t),r={i:o?1:0,A:e?e.A:no(),P:!1,I:!1,R:{},l:e,t:t,k:null,o:null,j:null,C:!1},i=r,s=Io;o&&(i=[r],s=Vo);var n=Proxy.revocable(i,s),a=n.revoke,l=n.proxy;return r.k=l,r.j=a,l}(e,o):so("ES5").J(e,o);return(o?o.A:no()).p.push(r),r}function _o(t){return He(t)||qe(22,t),function t(e){if(!We(e))return e;var o,r=e[Po],i=Ye(e);if(r){if(!r.P&&(r.i<4||!so("ES5").K(r)))return r.t;r.I=!0,o=xo(e,i),r.I=!1}else o=xo(e,i);return Je(o,(function(e,i){r&&function(t,e){return 2===Ye(t)?t.get(e):t[e]}(r.t,e)===i||Ge(o,e,t(i))})),3===i?new Set(o):o}(t)}function xo(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return eo(t)}Ke.styles=[a`
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
  `,a`${p(Pe)}`],b([s({type:String,attribute:!0})],Ke.prototype,"rangesText",void 0),b([s({type:String,attribute:!0})],Ke.prototype,"filterText",void 0),b([s({type:Boolean,attribute:!0})],Ke.prototype,"fullWords",void 0),b([s({type:Boolean,attribute:!0})],Ke.prototype,"caseSensitive",void 0),b([l()],Ke.prototype,"isBiblesLoaded",void 0),b([l()],Ke.prototype,"_verses",void 0),b([l()],Ke.prototype,"_hashList",void 0),b([f({context:N})],Ke.prototype,"_ixdb",void 0),b([_("#input")],Ke.prototype,"_input",void 0),Ke=b([d("interlinear-bible")],Ke);var $o,Co,jo="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),zo="undefined"!=typeof Map,So="undefined"!=typeof Set,Eo="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Ao=jo?Symbol.for("immer-nothing"):(($o={})["immer-nothing"]=!0,$o),Lo=jo?Symbol.for("immer-draftable"):"__$immer_draftable",Po=jo?Symbol.for("immer-state"):"__$immer_state",To=""+Object.prototype.constructor,Fo="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Bo=Object.getOwnPropertyDescriptors||function(t){var e={};return Fo(t).forEach((function(o){e[o]=Object.getOwnPropertyDescriptor(t,o)})),e},Do={},Io={get:function(t,e){if(e===Po)return t;var o=to(t);if(!Xe(o,e))return function(t,e,o){var r,i=vo(e,o);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(t.k):void 0}(t,o,e);var r=o[e];return t.I||!We(r)?r:r===go(t.t,e)?(ko(t),t.o[e]=wo(t.A.h,r,t)):r},has:function(t,e){return e in to(t)},ownKeys:function(t){return Reflect.ownKeys(to(t))},set:function(t,e,o){var r=vo(to(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,o),!0;if(!t.P){var i=go(to(t),e),s=null==i?void 0:i[Po];if(s&&s.t===o)return t.o[e]=o,t.R[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(o,i)&&(void 0!==o||Xe(t.t,e)))return!0;ko(t),yo(t)}return t.o[e]===o&&(void 0!==o||e in t.o)||Number.isNaN(o)&&Number.isNaN(t.o[e])||(t.o[e]=o,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==go(t.t,e)||e in t.t?(t.R[e]=!1,ko(t),yo(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var o=to(t),r=Reflect.getOwnPropertyDescriptor(o,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:o[e]}:r},defineProperty:function(){qe(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){qe(12)}},Vo={};Je(Io,(function(t,e){Vo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Vo.deleteProperty=function(t,e){return Vo.set.call(this,t,e,void 0)},Vo.set=function(t,e,o){return Io.set.call(this,t[0],e,o,t[0])};var Oo=function(){function t(t){var e=this;this.g=Eo,this.D=!0,this.produce=function(t,o,r){if("function"==typeof t&&"function"!=typeof o){var i=o;o=t;var s=e;return function(t){var e=this;void 0===t&&(t=i);for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return s.produce(t,(function(t){var r;return(r=o).call.apply(r,[e,t].concat(n))}))}}var n;if("function"!=typeof o&&qe(6),void 0!==r&&"function"!=typeof r&&qe(7),We(t)){var a=ho(e),l=wo(e,t,void 0),c=!0;try{n=o(l),c=!1}finally{c?lo(a):co(a)}return"undefined"!=typeof Promise&&n instanceof Promise?n.then((function(t){return ao(a,r),po(t,a)}),(function(t){throw lo(a),t})):(ao(a,r),po(n,a))}if(!t||"object"!=typeof t){if(void 0===(n=o(t))&&(n=t),n===Ao&&(n=void 0),e.D&&oo(n,!0),r){var d=[],h=[];so("Patches").M(t,n,d,h),r(d,h)}return n}qe(21,t)},this.produceWithPatches=function(t,o){if("function"==typeof t)return function(o){for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return e.produceWithPatches(o,(function(e){return t.apply(void 0,[e].concat(i))}))};var r,i,s=e.produce(t,o,(function(t,e){r=t,i=e}));return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(t){return[t,r,i]})):[s,r,i]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){We(t)||qe(8),He(t)&&(t=_o(t));var e=ho(this),o=wo(this,t,void 0);return o[Po].C=!0,co(e),o},e.finishDraft=function(t,e){var o=(t&&t[Po]).A;return ao(o,e),po(void 0,o)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!Eo&&qe(20),this.g=t},e.applyPatches=function(t,e){var o;for(o=e.length-1;o>=0;o--){var r=e[o];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}o>-1&&(e=e.slice(o+1));var i=so("Patches").$;return He(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),Ro=new Oo,Mo=Ro.produce;Ro.produceWithPatches.bind(Ro),Ro.setAutoFreeze.bind(Ro),Ro.setUseProxies.bind(Ro),Ro.applyPatches.bind(Ro),Ro.createDraft.bind(Ro),Ro.finishDraft.bind(Ro);let No=class extends n{constructor(){super(),this.tskRefs=[]}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.refs&&this._getAll(this.refs)}disconnectedCallback(){this.destroy()}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",M)}))}_readIXDB(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(t)).onsuccess=t=>{const e=t.target.result;e&&(this.tskRefs=Mo(this.tskRefs,(t=>(t.push({display:!1,ref:e.value}),t.sort(((t,e)=>parseInt(t.ref.sort)-parseInt(e.ref.sort))),t))),e.continue())})}_getAll(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t)).onsuccess=t=>{let e=t.target.result;e.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),e=e.map((t=>({display:!1,ref:t}))),this.tskRefs=Mo(this.tskRefs,(()=>e))})}destroy(){}render(){return c`
    <div class="refs-container">
      <mwc-list>
      ${R(this.tskRefs,(t=>t.ref.key),((t,e)=>c`
            <div class="ripple-box" @click=${o=>{const r=o.currentTarget;t.display?r.removeAttribute("activated"):r.setAttribute("activated",""),this.tskRefs=Mo(this.tskRefs,(t=>(t[e].display=!t[e].display,t)))}}
            >
              <p class="ref-word">${t.ref.words}</p>
            </div>
            ${!0===t.display?c`<interlinear-bible rangesText=${t.ref.refs}></interlinear-bible>`:""}
         `))}  
      </mwc-list>  
    </div>
    `}};No.styles=[a`
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
  `,a`${p(Pe)}`],b([s({type:String,attribute:!0})],No.prototype,"refs",void 0),b([f({context:N})],No.prototype,"_ixdb",void 0),b([l()],No.prototype,"tskRefs",void 0),No=b([d("tsk-refs")],No),window.____pwa_install_button_deferred_prompt={},window.____pwa_install_button_installable=null,window.addEventListener("beforeinstallprompt",(t=>{window.____pwa_install_button_installable=!0,window.____pwa_install_button_deferred_prompt=t}));class Uo extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),window.____pwa_install_button_deferred_prompt=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))})),window.____pwa_install_button_installable&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),window.____pwa_install_button_deferred_prompt.prompt();const{outcome:e}=await window.____pwa_install_button_deferred_prompt.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),window.____pwa_install_button_deferred_prompt=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Uo);class Ko extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){if(this.setAttribute("hidden",""),this.addEventListener("click",this._postMessage.bind(this)),"serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this._newWorker=t.installing,this._newWorker.addEventListener("statechange",(()=>{"installed"===this._newWorker.state&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this.removeAttribute("hidden"))}))})),t.waiting&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this._newWorker=t.waiting,this.removeAttribute("hidden"))),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)}))}}_postMessage(t){t.preventDefault(),this._newWorker.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",Ko);let qo=class extends n{constructor(){super(),this.reference="",this._rangesText="",this._filterText="",this._fullWords=!1,this._caseSensitive=!1,this.bibleScroll=new Te(this,100)}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.destroy()}destroy(){}_toggleCaseSensitive(t){this._caseSensitive=t.target.checked}_toggleFullWords(t){this._fullWords=t.target.checked}_updateRangeText(t){this.reference="",this._rangesText=t.target.value}_updateFilterText(t){this._filterText=t.target.value}_onToggleDraw(){this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,cancelable:!0}))}render(){const t={"hide-heading":this.bibleScroll.offscreen,"show-heading":!this.bibleScroll.offscreen};return c`
<div class="heading ${Jt(t)}">
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
      ${this._filterText.length>0?c`<sl-badge slot="suffix">Soek</sl-badge>`:h}
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
</interlinear-bible>`}};var Ho;qo.styles=[a`
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
  `,a`${p(w)}`],b([s({type:String,reflect:!0})],qo.prototype,"reference",void 0),b([l()],qo.prototype,"_rangesText",void 0),b([l()],qo.prototype,"_filterText",void 0),b([l()],qo.prototype,"_fullWords",void 0),b([l()],qo.prototype,"_caseSensitive",void 0),b([_("sl-dialog")],qo.prototype,"dialog",void 0),qo=b([d("bible-head")],qo);let Wo=Ho=class extends y{_unSelect_items(){this.renderRoot.querySelectorAll(".ripple-box").forEach((t=>{t.removeAttribute("activated")}))}_toggleActive(t){this._unSelect_items();t.currentTarget.setAttribute("activated","")}connectedCallback(){super.connectedCallback()}constructor(){super(),this._dbName="idxDB",this._ixdb={ixdb:void 0},this._num_chapters=10,this._selected_chapter=10,this._selected_book="",this.initialize_IDB()}appendStyles(){const t=new CSSStyleSheet;t.replace(w).then((()=>{this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t]}))}firstUpdated(){}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",M)}))}initialize_IDB(){const t=indexedDB.open(this._dbName,1);t.onerror=t=>{alert("Error accessing TSK database!"+t.target.result)};const e=t=>{if(Ho.loadingIXDB)return;Ho.loadingIXDB=!0,this.spinner.start();(async t=>{if(yt)return kt(yt);const e=await fetch(t);if(!e.ok)throw new Error("Bad res from server");return yt=await e.text(),kt(yt)})(`${window.origin}${g}resources/tsk.txt`).then((e=>{console.log("tsk loaded!");const o=t.transaction("xref","readwrite").objectStore("xref");e.forEach((t=>{o.add(t)})),this.spinner.stop(),console.log("All done!")})).catch((t=>{console.log("Failed to load TSK →",t),alert("Failed to create TSK database! No cross references are available. Try using a reload.")}))};t.onsuccess=t=>{this._ixdb.ixdb=t.target.result;const o=this._ixdb.ixdb.transaction("xref").objectStore("xref").count();o.onsuccess=()=>{0===o.result&&e(this._ixdb.ixdb)}},t.onupgradeneeded=t=>{const o=t.target.result;console.log("Creating a new IDB instance for tsk!");const r=o.createObjectStore("xref",{keyPath:"key"});r.createIndex("verse","verse",{unique:!1}),r.transaction.oncomplete=()=>{e(o)}}}_setBook(t,e){this._toggleActive(t),void 0!==Y("afr")&&(this._num_chapters=Y("afr").last.books[e].chapter+1,this._selected_book=K[e],this.dialog.show())}_setChapter(t){this._selected_chapter=t,this.dialog.hide(),this.drawer.hide()}render(){return c`
      <sl-dialog
        label="Kies 'n hoofstuk."
      >
        ${function*(t,e){if(void 0!==t){let o=0;for(const r of t)yield e(r,o++)}}(function*(t,e,o=1){const r=void 0===e?0:t;null!=e||(e=t);for(let t=r;o>0?t<e:e<t;t+=o)yield t}(this._num_chapters),(t=>c`<sl-button 
            class="chapter-button"
            variant="text"
            @click=${()=>this._setChapter(t+1)}
          >
            ${t+1}
          </sl-button>`))}
      </sl-dialog>
      <sl-drawer label="Bybel boeke" placement="start">
      ${this.render_menu()}
      </sl-drawer>
      <bible-head 
        reference=${""!==this._selected_book?this._selected_book+" "+this._selected_chapter:h}
        @toggle-drawer=${()=>this.drawer.show()}
      > </bible-head>
      `}render_menu(){return c`
      ${R(W.abbreviations,(t=>t[0]),((t,e)=>c`
          <div class="ripple-box"
            @click=${t=>{this._setBook(t,e)}}
          >
            <p class="book-name">${t[0]}</p>
          </div>
        `))}
      <hr>
      <div style="padding: 4px;">
        <p class="book-name">
          <a href="/about">🤔 1953/KJV met TSK 🤔</a>
        </p>
      </div>
    `}meta(){return{title:k.appName,titleTemplate:null,description:k.appDescription}}};Wo.loadingIXDB=!1,Wo.styles=[a`
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

    `,a`${p(w)}`,a`${p(Pe)}`],b([_("sl-drawer")],Wo.prototype,"drawer",void 0),b([_("sl-dialog")],Wo.prototype,"dialog",void 0),b([v({context:N}),l()],Wo.prototype,"_ixdb",void 0),b([l()],Wo.prototype,"_num_chapters",void 0),b([l()],Wo.prototype,"_selected_chapter",void 0),b([l()],Wo.prototype,"_selected_book",void 0),Wo=Ho=b([d("page-bible")],Wo);
