import{T as t,n as e,i as o,x as r,e as i,t as s,a as n,b as a,A as l,r as c,_ as d,c as u,s as h,d as p,g as b,o as m,P as f,f as g}from"./8493c06f.js";import{e as v,i as y,t as k,m as _,u as w,r as x,p as $,s as j,c as C,_ as z,S as E,a as S,w as A,b as T,n as I,o as P,l as D,d as F}from"./2cd15f77.js";import{c as L}from"./389cc535.js";const V=(t,e,o)=>{const r=new Map;for(let i=e;i<=o;i++)r.set(t[i],i);return r},B=v(class extends y{constructor(t){if(super(t),t.type!==k.CHILD)throw Error("repeat() can only be used in text expressions")}ht(t,e,o){let r;void 0===o?o=e:void 0!==e&&(r=e);const i=[],s=[];let n=0;for(const e of t)i[n]=r?r(e,n):n,s[n]=o(e,n),n++;return{values:s,keys:i}}render(t,e,o){return this.ht(t,e,o).values}update(e,[o,r,i]){var s;const n=_(e),{values:a,keys:l}=this.ht(o,r,i);if(!Array.isArray(n))return this.ut=l,a;const c=null!==(s=this.ut)&&void 0!==s?s:this.ut=[],d=[];let u,h,p=0,b=n.length-1,m=0,f=a.length-1;for(;p<=b&&m<=f;)if(null===n[p])p++;else if(null===n[b])b--;else if(c[p]===l[m])d[m]=w(n[p],a[m]),p++,m++;else if(c[b]===l[f])d[f]=w(n[b],a[f]),b--,f--;else if(c[p]===l[f])d[f]=w(n[p],a[f]),x(e,d[f+1],n[p]),p++,f--;else if(c[b]===l[m])d[m]=w(n[b],a[m]),x(e,n[p],n[b]),b--,m++;else if(void 0===u&&(u=V(l,m,f),h=V(c,p,b)),u.has(c[p]))if(u.has(c[b])){const t=h.get(l[m]),o=void 0!==t?n[t]:null;if(null===o){const t=x(e,n[p]);w(t,a[m]),d[m]=t}else d[m]=w(o,a[m]),x(e,n[p],o),n[t]=null;m++}else $(n[b]),b--;else $(n[p]),p++;for(;m<=f;){const t=x(e,d[f+1]);w(t,a[m]),d[m++]=t}for(;p<=b;){const t=n[p++];null!==t&&$(t)}return this.ut=l,j(e,d),t}});const O=function(t){let e=this.getBoundingClientRect(),o=document.createElement("div"),r=getComputedStyle(this).overflow,i="rgba(255,255,255,0)",s="rgba(255,255,255,.3)",n=Math.sqrt(e.width*e.width+e.height*e.height)/10;this.style.overflow="hidden",o.style=`\n      width:20px;\n      height:20px;\n      border-radius: 50%;\n      background: radial-gradient(circle, \n      ${s} 0%, ${i} 5%, ${i} 7%, \n      ${s} 13%, ${s} 17%, ${i} 30%, \n      ${i} 35%, ${s} 51%,${s} 58%,\n      ${i} 68%, ${i} 75%, ${s} 100%);\n      position: absolute;\n      opacity: 0;\n      transform-origin: 'center center';\n      left: ${t.clientX-e.left-10}px;\n      top: ${t.clientY-e.top-10}px;`,this.prepend(o);let a=o.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${n})`,opacity:.1}],{duration:600});Promise.resolve(a.finished).then((()=>{o.remove(),this.style.overflow=r}))},R=e("ix-db"),N=t=>t.replace(/\d+\|/g,(t=>`||${t}`)).substring(2).split("||").map((t=>{const[e,o]=t.split("|");return{n:e,txt:o}})),U=["ge","ex","le","nu","de","jos","jud","ru","1sa","2sa","1ki","2ki","1ch","2ch","ezr","ne","es","job","ps","pr","ec","so","isa","jer","la","eze","da","ho","joe","am","ob","jon","mic","na","hab","zep","hag","zec","mal","mt","mr","lu","joh","ac","ro","1co","2co","ga","eph","php","col","1th","2th","1ti","2ti","tit","phm","heb","jas","1pe","2pe","1jo","2jo","3jo","jude","re"],K=U.map((t=>[t])),M=t=>{const e=(t=>t.reduce(((t,e,o)=>(e.forEach((e=>t[e]=U[o])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""};var q={key:"af",displayname:"afrikaans",abbreviations:[["Genesis","gen","ge","gn"],["Eksodus","eks","ek"],["Levitikus","lev","le","lv"],["Numeri","num","nu","nm"],["Deuteronomium","deut","dt"],["Josua","jos","js"],["Rigters","rig"],["Rut","rt"],["1 Samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","een samuel"],["2 Samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","twee samuel"],["1 Konings","1 kon","i kgs","1kgs","i kon","1kon","i konings","1konings","een konings","een kon","een kgs"],["2 Konings","2 kon","2 kgs","ii kgs","2kgs","ii kon","2kon","ii konings","2konings","2nd kgs","2nd kings","twee konings","twee kon","twee kgs"],["1 Kronieke","1 kron","1 kr","i kr","1kr","1 krn","i krn","1krn","i kron","1kron","i kronieke","1kronieke","een kronieke"],["2 Kronieke","2 kron","2 kr","ii kr","2kr","2 krn","ii krn","2krn","ii kron","2kron","ii kronieke","2kronieke","twee kronieke"],["Esra","esra","esr"],["Nehemia","neh","ne"],["Ester","est","es"],["Job","job","job","jb"],["Psalm","pslm","ps","psalms","psa","psm","pss"],["Spreuke","spr","sp"],["Prediker","pred","pre"],["Hooglied van Salomo","hooglied","hoog","salomo","sal","hvs","hs"],["Jesaja","jes","js"],["Jeremia","jer","je","jr"],["Klaagliedere van Jeremia","klaaglied","klaag","klj"],["Esegiël","eseg","ese","esg"],["Daniel","dan","da","dn"],["Hosea","hos","ho"],["Joël","joel","joe","jl"],["Amos","amos","am"],["Obadja","obad","ob"],["Jona","jnh","jon"],["Miga","mig","mg"],["Nahum","nah","na"],["Habakuk","hab","hb"],["Sefanja","sefan","sef","sf"],["Haggai","hag","hg"],["Sagaria","sag","sg"],["Maleagi","mal","ml"],["Mattheus","matt","mat","mt"],["Markus","mark","mar","mrk","mk","mr"],["Lukas","luk","lk"],["Johannes","john","joh","jhn","jh","jn"],["Handelinge","han","hand","hd"],["Romeine","rom","ro","rm"],["1 Korinthiërs","1 korinte","1 kor","1 ko","i ko","1ko","i kor","1kor","i korinthiers","1korinthiers","een korinthiers"],["2 Korinthiërs","2 korinte","2 kor","2 ko","i ko","2ko","ii kor","2kor","ii korinthiers","2korinthiers","twee korinthiers"],["Galasiërs","gal","ga"],["Efesiërs","efes","efe","ef"],["Filippense","filp","fil","flp","fl"],["Kolossense","kol","kl"],["1 Thessalonicense","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonicense","1thessalonicense","een thessalonicense","eerste thessalonicense"],["2 Thessalonicense","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonicense","2thessalonicense","twee thessalonicense","tweede thessalonicense"],["1 Timotheus","1 tim","1 ti","i ti","1ti","i tim","1tim","i timotheus","1timotheus","een timotheus","eerste timotheus"],["2 Timotheus","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timotheus","2timotheus","twee timotheus","tweede timotheus"],["Titus","titus","tit"],["Filémon","filem","file","flm"],["Hebreërs","heb"],["Jakobus","jak","jk"],["1 Petrus","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i petrus","1petrus","een petrus","eerste petrus"],["2 Petrus","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii petrus","2petrus","twee petrus","tweede petrus"],["1 Johannes","1 jn","i jn","1jn","i jo","1jo","i joh","1 joh","1joh","i jhn","1 jhn","1jhn","i johannes","1johannes","een johannes","eerste johannes"],["2 Johannes","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2 joh","2joh","ii jhn","2 jhn","2jhn","ii johannes","2johannes","twee johannes","tweede johannes"],["3 Johannes","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii johannes","3johannes","drie johannes","derde johannes"],["Judas","jd"],["Openbaring","open","opb","op","die openbaring"]]};const W={},H=t=>W[t];let J,Y,X,G,Q,Z;function tt(){if(G=X,Z.last.books[J].chapters[Y].verse!==Q.last.books[J].chapters[Y].verse){let t=!1,e=!1;Y-1>=0&&Z.last.books[J].chapters[Y-1].verse!==Q.last.books[J].chapters[Y-1].verse&&(e=!0),Y+1<=Z.last.books[J].chapter&&Z.last.books[J].chapters[Y+1].verse!==Q.last.books[J].chapters[Y+1].verse&&(t=!0),t&&G>Z.last.books[J].chapters[Y].verse&&(G=1,Y+=1),e&&Z.last.books[J].chapters[Y].verse>Q.last.books[J].chapters[Y].verse&&(G=X+1)}}const et=(t,e,o)=>{Q=H(e),Z=H(o);const r=t.match(/^\[([\d]*):([[\d]*):([\d])*\]$/);if(r)J=parseInt(r[1]),Y=parseInt(r[2]),X=parseInt(r[3]);else{const e=t.split(":");J=parseInt(e[0]),Y=parseInt(e[1]),X=parseInt(e[2])}switch(J){case 15:case 18:!function(){const t=Z.last.books[J].chapters[Y].verse-Q.last.books[J].chapters[Y].verse;G=X+t,G=t<0?G<1?0:G:G>Z.last.books[J].chapters[Y].verse?Z.last.books[J].chapters[Y].verse:G}();break;case 1:case 20:case 22:case 26:case 32:case 27:case 8:tt();break;default:G=X}return r?`[${J}:${Y}:${G}]`:`${J}:${Y}:${G}`},ot=new function(t){const e=(o=[...t,K])?1===o.length?[...o[0]]:o.reduce(((t,e)=>((t,e)=>t.length?t.map(((t,o)=>((t,e)=>t.concat(e.filter((e=>-1===t.indexOf(e)))))(t,e[o]))):[...e])(t,e)),[]):[];var o;const r=(t=>{const e=(t=>t.reduce(((t,e)=>(e.forEach((o=>t[o]=e[0])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""})(e),i=M(e),s=e.map((t=>t.join("|"))).join("|"),n="\\d{1,3}",a="\\d{1,3}",l=new RegExp(`^(${s})\\s*(${n})[ ]*:[ ]*(${a})\\b`),c=new RegExp(`^(${s})[ ]*(${n})\\b`),d=new RegExp(`^(?:${s})$`),u=new RegExp(`(^|,|;)(${s})`,"g"),h=new RegExp(`,(${s})`,"g"),p=new RegExp(`(${s})(\\d)`,"g"),b=new RegExp(`^(${n})[ ]*:[ ]*(${a})\\b`),m=new RegExp(`^(?:${s})[ ]*ff`),f=new RegExp(`^(${s})(\\d|$)`,"g");function g(t,e,o){let i,s={};return""===t?{}:e?(o.book&&o.chapter&&o.verse?s={book:o.book,chapter:o.chapter}:o.book&&o.chapter&&(s={book:o.book}),s):void 0===t?{...o}:(s=(i=t.match(l))?{book:r(i[1]),chapter:i[2],verse:i[3]}:(i=t.match(c))?{book:r(i[1]),chapter:i[2]}:(i=t.match(d))?{book:r(i[0])}:(i=t.match(b))?{book:o.book,chapter:i[1],verse:i[2]}:(i=t.match(/(\d{1,3}\b)/))?o.verse?{book:o.book,chapter:o.chapter,verse:i[1]}:{book:o.book,chapter:i[1]}:{...o},s)}function v(t,e){let o,i,s=!1,[n,a]=t.split("-").map((t=>t.trim().toLowerCase()));return(/\d{1,3}[ ]*ff$/i.test(n)||m.test(n))&&(n=n.replace(/[ ]*ff$/,""),s=!0),(o=n.match(l))?(i={book:r(o[1]),chapter:o[2],verse:o[3]},e={...i}):(o=n.match(c))?(i={book:r(o[1]),chapter:o[2],verse:"1"},e={book:i.book,chapter:i.chapter}):(o=n.match(d))?(i={book:r(o[0]),chapter:"1",verse:"1"},e={book:i.book}):(o=n.match(b))?(i={book:e.book,chapter:o[1],verse:o[2]},e={...i}):(o=n.match(/(\d{1,3}\b)/))&&(e.verse?(i={book:e.book,chapter:e.chapter,verse:o[1]},e={...i}):(i={book:e.book,chapter:o[1],verse:"1"},e={book:i.book,chapter:i.chapter})),{start:i,end:g(a,s,e),ctx:e}}this.getVerseRanges=t=>{const{ranges:e}=t.split(/[,\n;]+/g).reduce(((t,e)=>{const o=v(e,t.ctx);return t.ctx=o.ctx,o.start&&t.ranges.push({start:o.start,end:o.end}),t}),{ctx:{book:"genesis"},ranges:[]});return e},this.bookNames=e,this.normaliseBookName=r,this.normaliseBookNameShort=i,this.partToRange=v,this.compressRangesText=t=>t.toLowerCase().replace(/\n+/g,";").replace(/\s/g,"").split(";").reduce(((t,e)=>[...t,e.split(",").reduce(((t,e)=>{const o=e.split("-").map((t=>t.replace(f,((t,e,o)=>`${i(e)}${o||""}`)))).join("-");return[...t,o]}),[])]),[]).join(";"),this.uncompressRangesText=t=>t.toLowerCase().replace(u,((t,e,o)=>`${e}${r(o)}`)).replace(h,((t,e)=>`, ${e}`)).replace(p,((t,e,o)=>`${e} ${o}`)).replace(/;/g,"\n")}([q,{key:"en",displayname:"english",abbreviations:[["genesis","gen","ge","gn"],["exodus","exo","ex","exod"],["leviticus","lev","le","lv"],["numbers","num","nu","nm","nb"],["deuteronomy","deut","dt"],["joshua","josh","jos","jsh"],["judges","judg","jdg","jg","jdgs"],["ruth","rth","ru"],["1 samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","1st samuel","first samuel"],["2 samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","2nd samuel","second samuel"],["1 kings","1 kgs","1 ki","1k","i kgs","1kgs","i ki","1ki","i kings","1kings","1st kgs","1st kings","first kings","first kgs","1kin"],["2 kings","2 kgs","2 ki","2k","ii kgs","2kgs","ii ki","2ki","ii kings","2kings","2nd kgs","2nd kings","second kings","second kgs","2kin"],["1 chronicles","1 chron","1 ch","i ch","1ch","1 chr","i chr","1chr","i chron","1chron","i chronicles","1chronicles","1st chronicles","first chronicles"],["2 chronicles","2 chron","2 ch","ii ch","2ch","ii chr","2chr","ii chron","2chron","ii chronicles","2chronicles","2nd chronicles","second chronicles"],["ezra","ezra","ezr"],["nehemiah","neh","ne"],["esther","esth","es"],["job","job","job","jb"],["psalm","pslm","ps","psalms","psa","psm","pss"],["proverbs","prov","pr","prv"],["ecclesiastes","eccles","ec","qoh","qoheleth"],["song of solomon","song","so","canticle of canticles","canticles","song of songs","sos"],["isaiah","isa","is"],["jeremiah","jer","je","jr"],["lamentations","lam","la"],["ezekiel","ezek","eze","ezk"],["daniel","dan","da","dn"],["hosea","hos","ho"],["joel","joel","joe","jl"],["amos","amos","am"],["obadiah","obad","ob"],["jonah","jnh","jon"],["micah","micah","mic"],["nahum","nah","na"],["habakkuk","hab","hab"],["zephaniah","zeph","zep","zp"],["haggai","hag","hg"],["zechariah","zech","zec","zc"],["malachi","mal","mal","ml"],["matthew","matt","mt"],["mark","mrk","mk","mr"],["luke","luk","lk"],["john","john","jn","jhn"],["acts","acts","ac"],["romans","rom","ro","rm"],["1 corinthians","1 cor","1 co","i co","1co","i cor","1cor","i corinthians","1corinthians","1st corinthians","first corinthians"],["2 corinthians","2 cor","2 co","ii co","2co","ii cor","2cor","ii corinthians","2corinthians","2nd corinthians","second corinthians"],["galatians","gal","ga"],["ephesians","ephes","eph"],["philippians","phil","php"],["colossians","col","col"],["1 thessalonians","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonians","1thessalonians","1st thessalonians","first thessalonians"],["2 thessalonians","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonians","2thessalonians","2nd thessalonians","second thessalonians"],["1 timothy","1 tim","1 ti","i ti","1ti","i tim","1tim","i timothy","1timothy","1st timothy","first timothy"],["2 timothy","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timothy","2timothy","2nd timothy","second timothy"],["titus","titus","tit"],["philemon","philem","phm"],["hebrews","hebrews","heb"],["james","james","jas","jm"],["1 peter","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i peter","1peter","1st peter","first peter"],["2 peter","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii peter","2peter","2nd peter","second peter"],["1 john","1 jn","i jn","1jn","i jo","1jo","i joh","1joh","i jhn","1 jhn","1jhn","i john","1john","1st john","first john"],["2 john","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2joh","ii jhn","2 jhn","2jhn","ii john","2john","2nd john","second john"],["3 john","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii john","3john","3rd john","third john"],["jude","jd"],["revelation","rev","re","the revelation"]]}].map((({abbreviations:t})=>t))),{bookNames:rt,getVerseRanges:it}=ot,st=rt.reduce(((t,e,o)=>(t[e[0]]=o,t)),{}),nt=rt.reduce(((t,e,o)=>(t[o]=e[0],t)),{}),at=t=>{const e=[],o={},r={book:0,books:{}};return t.forEach(((t,i)=>{r.book=i,r.books[i]={chapter:0,chapters:{}},t.forEach(((t,s)=>{r.books[i].chapter=s,r.books[i].chapters[s]={verse:0},t.forEach((t=>{r.books[i].chapters[s].verse=+t.n,o[`${i}:${s}:${t.n}`]=e.length,e.push({hash:`${i}:${s}:${t.n}`,text:t.txt})}))}))})),{verseList:e,verseLookUp:o,last:r}},lt=(t,e)=>void 0===t||t>e?e:t,ct=t=>nt[t],dt=t=>{const e=t.split(":");return{book:U[+e[0]],chapter:""+(+e[1]+1),verse:e[2]}},ut=({rangesText:t,versionName:e})=>it(t||"gen - rev").map((t=>((t,e)=>{const{start:o,end:r}=e,i=H(t);if(!i)return{};const s=i.verseLookUp[`${st[o.book]}:${o.chapter-1}:${o.verse}`],n=i.last.book,a=lt(st[r.book],n),l=i.last.books[a].chapter,c=lt(r.chapter&&r.chapter-1,l),d=i.last.books[a].chapters[c].verse,u=lt(r.verse,d),h=i.verseLookUp[`${a}:${c}:${u}`];return{start:{...o,index:s},end:{book:ct(a),chapter:`${c+1}`,verse:`${u}`,index:h}}})(e,t))),ht=(t,e)=>{const o=((t,e)=>W[t].verseLookUp[e])(t,e),r=((t,e)=>W[t].verseList[e])(t,o);return{text:r?r.text:"",prettyRef:bt(dt(e))}},pt=(t,e)=>{const o=e.map((({start:e,end:o})=>((t,e,o)=>((t,e)=>{const o=[];for(let r=t;r<=e;r++)o.push(r);return o})(e,o).map((e=>H(t).verseList[e].hash)))(t,e.index,o.index)));return[].concat(...o)},bt=({book:t,chapter:e,verse:o})=>{return`${r=t,r.replace(/\b\w/g,(t=>t.toUpperCase()))} ${e}:${o}`;var r},mt={},ft=(t,e)=>(mt[t]||(mt[t]=fetch(e).then((e=>{if(e.status>=400)throw delete mt[t],new Error("Bad res from server");return e.text()})).then((e=>{const o=e.split("|||").map((t=>t.split("||").map(N)));return((t,e)=>{W[t]=at(e)})(t,o),o}))),mt[t]);let gt="";const vt=t=>{const e=t.split("\n");return e.splice(0,1),e.map(yt)},yt=t=>{const[e,o,r,i,s,n]=t.split("\t");return{key:e+"-"+o+"-"+r+":"+i,verse:e+"-"+o+"-"+r,sort:i,words:s,refs:n}};function kt(t){const[e,o,r]=t.split(":");return`${parseInt(e)+1}-${parseInt(o)+1}-${r}`}const _t=new Set,wt=new MutationObserver(zt),xt=new Map;let $t,jt=document.documentElement.dir||"ltr",Ct=document.documentElement.lang||navigator.language;function zt(){jt=document.documentElement.dir||"ltr",Ct=document.documentElement.lang||navigator.language,[..._t.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}wt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class Et{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){_t.add(this.host)}hostDisconnected(){_t.delete(this.host)}dir(){return`${this.host.dir||jt}`.toLowerCase()}lang(){return`${this.host.lang||Ct}`.toLowerCase()}getTranslationData(t){var e,o;const r=new Intl.Locale(t),i=null==r?void 0:r.language.toLowerCase(),s=null!==(o=null===(e=null==r?void 0:r.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:r,language:i,region:s,primary:xt.get(`${i}-${s}`),secondary:xt.get(i)}}exists(t,e){var o;const{primary:r,secondary:i}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||i&&i[t]||e.includeFallback&&$t&&$t[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(r&&r[t])i=r[t];else{if(!$t||!$t[t])return console.error(`No translation found for: ${String(t)}`),String(t);i=$t[t]}return"function"==typeof i?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}!function(...t){t.map((t=>{const e=t.$code.toLowerCase();xt.has(e)?xt.set(e,Object.assign(Object.assign({},xt.get(e)),t)):xt.set(e,t),$t||($t=t)})),zt()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"});class St extends Et{}var At=o`
  ${C}

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
`;let Tt=class extends E{constructor(){super(...arguments),this.localize=new St(this)}render(){return r`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Tt.styles=At,Tt=z([i("sl-spinner")],Tt);const It=new WeakMap,Pt=new WeakMap,Dt=new WeakSet,Ft=new WeakMap;class Lt{constructor(t,e){(this.host=t).addController(this),this.options=Object.assign({form:t=>{if(t.hasAttribute("form")&&""!==t.getAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");if(o)return e.getElementById(o)}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!==(e=t.disabled)&&void 0!==e&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ft.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Ft.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,It.has(this.form)?It.get(this.form).add(this.host):It.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Pt.has(this.form)||(Pt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&(null===(t=It.get(this.form))||void 0===t||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Pt.has(this.form)&&(this.form.reportValidity=Pt.get(this.form),Pt.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),i="sl-button"===this.host.tagName.toLowerCase();!e&&!i&&"string"==typeof o&&o.length>0&&void 0!==r&&(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null===(e=It.get(this.form))||void 0===e||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ft.set(this.host,[])}handleInteraction(t){const e=Ft.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?Dt.add(t):Dt.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!==(t=this.form)&&void 0!==t?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(Dt.has(e)),r=Boolean(e.required);e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}}const Vt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Object.assign(Object.assign({},Vt),{valid:!1,valueMissing:!0})),Object.freeze(Object.assign(Object.assign({},Vt),{valid:!1,customError:!0}));class Bt{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}var Ot=o`
  ${C}

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
`;let Rt=class extends E{constructor(){super(),this.formControlController=new Lt(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Bt(this,"[default]","prefix","suffix"),this.localize=new St(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener",this.handleHostClick=t=>{(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}get validity(){return this.isButton()?this.button.validity:Vt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?T`a`:T`button`;return I`
      <${e}
        part="base"
        class=${P({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${D(t?void 0:this.disabled)}
        type=${D(t?void 0:this.type)}
        title=${this.title}
        name=${D(t?void 0:this.name)}
        value=${D(t?void 0:this.value)}
        href=${D(t?this.href:void 0)}
        target=${D(t?this.target:void 0)}
        download=${D(t?this.download:void 0)}
        rel=${D(t?this.rel:void 0)}
        role=${D(t?void 0:"button")}
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
        ${this.caret?I` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?I`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};function Nt(t,e,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,Object.assign(Object.assign({},o),{duration:Ut()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})}))}function Ut(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Kt(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}Rt.styles=Ot,z([S(".button")],Rt.prototype,"button",2),z([s()],Rt.prototype,"hasFocus",2),z([s()],Rt.prototype,"invalid",2),z([n()],Rt.prototype,"title",2),z([n({reflect:!0})],Rt.prototype,"variant",2),z([n({reflect:!0})],Rt.prototype,"size",2),z([n({type:Boolean,reflect:!0})],Rt.prototype,"caret",2),z([n({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2),z([n({type:Boolean,reflect:!0})],Rt.prototype,"loading",2),z([n({type:Boolean,reflect:!0})],Rt.prototype,"outline",2),z([n({type:Boolean,reflect:!0})],Rt.prototype,"pill",2),z([n({type:Boolean,reflect:!0})],Rt.prototype,"circle",2),z([n()],Rt.prototype,"type",2),z([n()],Rt.prototype,"name",2),z([n()],Rt.prototype,"value",2),z([n()],Rt.prototype,"href",2),z([n()],Rt.prototype,"target",2),z([n()],Rt.prototype,"rel",2),z([n()],Rt.prototype,"download",2),z([n()],Rt.prototype,"form",2),z([n({attribute:"formaction"})],Rt.prototype,"formAction",2),z([n({attribute:"formenctype"})],Rt.prototype,"formEnctype",2),z([n({attribute:"formmethod"})],Rt.prototype,"formMethod",2),z([n({attribute:"formnovalidate",type:Boolean})],Rt.prototype,"formNoValidate",2),z([n({attribute:"formtarget"})],Rt.prototype,"formTarget",2),z([A("disabled",{waitUntilFirstUpdate:!0})],Rt.prototype,"handleDisabledChange",1),Rt=z([i("sl-button")],Rt);const Mt=new Map,qt=new WeakMap;function Wt(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ht(t,e){Mt.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Jt(t,e,o){const r=qt.get(t);if(null==r?void 0:r[e])return Wt(r[e],o.dir);const i=Mt.get(e);return i?Wt(i,o.dir):{keyframes:[],options:{duration:0}}}const Yt=new Set;function Xt(t){if(Yt.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Gt(t){Yt.delete(t),0===Yt.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function Qt(t,e){return new Promise((o=>{t.addEventListener(e,(function r(i){i.target===t&&(t.removeEventListener(e,r),o())}))}))}function Zt(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}let te=[];class ee{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){te.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){te=te.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return te[te.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=function(t){var e,o;const r=[];return function t(e){e instanceof HTMLElement&&(r.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(t),{start:null!==(e=r.find((t=>Zt(t))))&&void 0!==e?e:null,end:null!==(o=r.reverse().find((t=>Zt(t))))&&void 0!==o?o:null}}(this.element),o="forward"===this.tabDirection?t:e;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}var oe=o`
  ${C}

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
`;let re=class extends E{constructor(){super(...arguments),this.hasSlotController=new Bt(this,"footer"),this.localize=new St(this),this.modal=new ee(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Xt(this))}disconnectedCallback(){super.disconnectedCallback(),Gt(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Jt(this,"dialog.denyClose",{dir:this.localize.dir()});Nt(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Xt(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Kt(this.dialog),Kt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Jt(this,"dialog.show",{dir:this.localize.dir()}),o=Jt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Nt(this.panel,e.keyframes,e.options),Nt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Kt(this.dialog),Kt(this.overlay)]);const t=Jt(this,"dialog.hide",{dir:this.localize.dir()}),e=Jt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Nt(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),Nt(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Gt(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qt(this,"sl-after-hide")}render(){return r`
      <div
        part="base"
        class=${P({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":r`
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
    `}};function ie(t){return t.charAt(0).toUpperCase()+t.slice(1)}re.styles=oe,z([S(".dialog")],re.prototype,"dialog",2),z([S(".dialog__panel")],re.prototype,"panel",2),z([S(".dialog__overlay")],re.prototype,"overlay",2),z([n({type:Boolean,reflect:!0})],re.prototype,"open",2),z([n({reflect:!0})],re.prototype,"label",2),z([n({attribute:"no-header",type:Boolean,reflect:!0})],re.prototype,"noHeader",2),z([A("open",{waitUntilFirstUpdate:!0})],re.prototype,"handleOpenChange",1),re=z([i("sl-dialog")],re),Ht("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Ht("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Ht("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Ht("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ht("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var se=o`
  ${C}

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
`;let ne=class extends E{constructor(){super(...arguments),this.hasSlotController=new Bt(this,"footer"),this.localize=new St(this),this.modal=new ee(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&!this.contained&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Xt(this)))}disconnectedCallback(){super.disconnectedCallback(),Gt(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Jt(this,"drawer.denyClose",{dir:this.localize.dir()});Nt(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Xt(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Kt(this.drawer),Kt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Jt(this,`drawer.show${ie(this.placement)}`,{dir:this.localize.dir()}),o=Jt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Nt(this.panel,e.keyframes,e.options),Nt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Gt(this)),await Promise.all([Kt(this.drawer),Kt(this.overlay)]);const t=Jt(this,`drawer.hide${ie(this.placement)}`,{dir:this.localize.dir()}),e=Jt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Nt(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),Nt(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Xt(this)),this.open&&this.contained&&(this.modal.deactivate(),Gt(this))}async show(){if(!this.open)return this.open=!0,Qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qt(this,"sl-after-hide")}render(){return r`
      <div
        part="base"
        class=${P({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":r`
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
    `}};ne.styles=se,z([S(".drawer")],ne.prototype,"drawer",2),z([S(".drawer__panel")],ne.prototype,"panel",2),z([S(".drawer__overlay")],ne.prototype,"overlay",2),z([n({type:Boolean,reflect:!0})],ne.prototype,"open",2),z([n({reflect:!0})],ne.prototype,"label",2),z([n({reflect:!0})],ne.prototype,"placement",2),z([n({type:Boolean,reflect:!0})],ne.prototype,"contained",2),z([n({attribute:"no-header",type:Boolean,reflect:!0})],ne.prototype,"noHeader",2),z([A("open",{waitUntilFirstUpdate:!0})],ne.prototype,"handleOpenChange",1),z([A("contained",{waitUntilFirstUpdate:!0})],ne.prototype,"handleNoModalChange",1),ne=z([i("sl-drawer")],ne),Ht("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Ht("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),Ht("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Ht("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),Ht("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Ht("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),Ht("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Ht("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),Ht("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),Ht("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ht("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ae=".ripple-box {\n  display: block;\n  position: relative; /* MUST HAVE for MWC-RIPPLE */\n  justify-content: center;\n  flex-direction: column;\n  padding: 4px;\n}\n.ripple-box:hover {\n    background-color: var(--sl-color-neutral-100);\n    cursor: pointer;\n  }\n.ripple-box[activated] {\n    background-color: var(--sl-color-primary-100);\n  }\n.ripple-box[activated]:hover {\n    background-color: var(--sl-color-primary-200);\n  }\n";class le{constructor(t,e=450){this._scroll_elem=null,this._currentY=0,this._previousY=0,this._scrollDirection="",this.offscreen=!1,this._handleScrollEvent=t=>{this._currentY=t.target.scrollTop,this._scrollDirection=(t=>{const e=!this._previousY||this._previousY<t?"down":"up";return this._previousY=t,e})(this._currentY);let e="down"===this._scrollDirection&&this._currentY>this.keep_zone;const o=e!==this.offscreen;this.offscreen=e,o&&this.host&&("up"===this._scrollDirection&&window.scrollTo(0,0),this.host.requestUpdate())},this.host=t,this.keep_zone=e,t.addController(this)}_registerScrollElement(){this._scroll_elem=document.querySelector("app-web-component")}hostConnected(){setTimeout((()=>{this._registerScrollElement(),this._scroll_elem&&this._scroll_elem.addEventListener("scroll",this._handleScrollEvent.bind(this))}),500)}hostDisconnected(){this._scroll_elem&&this._scroll_elem.removeEventListener("scroll",this._handleScrollEvent.bind(this))}}var ce=o`
  ${C}

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
`;let de=class extends E{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return r`
      <slot
        part="base"
        class=${P({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};de.styles=ce,z([n({reflect:!0})],de.prototype,"variant",2),z([n({type:Boolean,reflect:!0})],de.prototype,"pill",2),z([n({type:Boolean,reflect:!0})],de.prototype,"pulse",2),de=z([i("sl-badge")],de);const ue=(t="value")=>(e,o)=>{const r=e.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(e,s,n){var l;const c=r.getPropertyOptions(t);if(e===("string"==typeof c.attribute?c.attribute:t)){const e=c.converter||a,r=("function"==typeof e?e:null!==(l=null==e?void 0:e.fromAttribute)&&void 0!==l?l:a.fromAttribute)(n,c.type);this[t]!==r&&(this[o]=r)}i.call(this,e,s,n)}},he=v(class extends y{constructor(t){if(super(t),t.type!==k.PROPERTY&&t.type!==k.ATTRIBUTE&&t.type!==k.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!F(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(e,[o]){if(o===t||o===l)return o;const r=e.element,i=e.name;if(e.type===k.PROPERTY){if(o===r[i])return t}else if(e.type===k.BOOLEAN_ATTRIBUTE){if(!!o===r.hasAttribute(i))return t}else if(e.type===k.ATTRIBUTE&&r.getAttribute(i)===o+"")return t;return j(e),o}});var pe=o`
  ${C}

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
`;let be=class extends E{constructor(){super(...arguments),this.formControlController=new Lt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return r`
      <label
        part="base"
        class=${P({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${D(this.value)}
          .indeterminate=${he(this.indeterminate)}
          .checked=${he(this.checked)}
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
          ${this.checked?r`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?r`
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
    `}};be.styles=pe,z([S('input[type="checkbox"]')],be.prototype,"input",2),z([s()],be.prototype,"hasFocus",2),z([n()],be.prototype,"title",2),z([n()],be.prototype,"name",2),z([n()],be.prototype,"value",2),z([n({reflect:!0})],be.prototype,"size",2),z([n({type:Boolean,reflect:!0})],be.prototype,"disabled",2),z([n({type:Boolean,reflect:!0})],be.prototype,"checked",2),z([n({type:Boolean,reflect:!0})],be.prototype,"indeterminate",2),z([ue("checked")],be.prototype,"defaultChecked",2),z([n({reflect:!0})],be.prototype,"form",2),z([n({type:Boolean,reflect:!0})],be.prototype,"required",2),z([A("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1),z([A(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],be.prototype,"handleStateChange",1),be=z([i("sl-checkbox")],be);var me=o`
  ${C}
  ${o`
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
`;let fe=class extends E{constructor(){super(...arguments),this.formControlController=new Lt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Bt(this,"help-text","label"),this.localize=new St(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return r`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${P({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${D(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${he(this.value)}
              autocapitalize=${D(this.autocapitalize)}
              autocomplete=${D(this.autocomplete)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${D(this.pattern)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?r`
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
            ${this.passwordToggle&&!this.disabled?r`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?r`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:r`
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
    `}};fe.styles=me,z([S(".input__control")],fe.prototype,"input",2),z([s()],fe.prototype,"hasFocus",2),z([n()],fe.prototype,"title",2),z([n({reflect:!0})],fe.prototype,"type",2),z([n()],fe.prototype,"name",2),z([n()],fe.prototype,"value",2),z([ue()],fe.prototype,"defaultValue",2),z([n({reflect:!0})],fe.prototype,"size",2),z([n({type:Boolean,reflect:!0})],fe.prototype,"filled",2),z([n({type:Boolean,reflect:!0})],fe.prototype,"pill",2),z([n()],fe.prototype,"label",2),z([n({attribute:"help-text"})],fe.prototype,"helpText",2),z([n({type:Boolean})],fe.prototype,"clearable",2),z([n({type:Boolean,reflect:!0})],fe.prototype,"disabled",2),z([n()],fe.prototype,"placeholder",2),z([n({type:Boolean,reflect:!0})],fe.prototype,"readonly",2),z([n({attribute:"password-toggle",type:Boolean})],fe.prototype,"passwordToggle",2),z([n({attribute:"password-visible",type:Boolean})],fe.prototype,"passwordVisible",2),z([n({attribute:"no-spin-buttons",type:Boolean})],fe.prototype,"noSpinButtons",2),z([n({reflect:!0})],fe.prototype,"form",2),z([n({type:Boolean,reflect:!0})],fe.prototype,"required",2),z([n()],fe.prototype,"pattern",2),z([n({type:Number})],fe.prototype,"minlength",2),z([n({type:Number})],fe.prototype,"maxlength",2),z([n()],fe.prototype,"min",2),z([n()],fe.prototype,"max",2),z([n()],fe.prototype,"step",2),z([n()],fe.prototype,"autocapitalize",2),z([n()],fe.prototype,"autocorrect",2),z([n()],fe.prototype,"autocomplete",2),z([n({type:Boolean})],fe.prototype,"autofocus",2),z([n()],fe.prototype,"enterkeyhint",2),z([n({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],fe.prototype,"spellcheck",2),z([n()],fe.prototype,"inputmode",2),z([A("disabled",{waitUntilFirstUpdate:!0})],fe.prototype,"handleDisabledChange",1),z([A("step",{waitUntilFirstUpdate:!0})],fe.prototype,"handleStepChange",1),z([A("value",{waitUntilFirstUpdate:!0})],fe.prototype,"handleValueChange",1),fe=z([i("sl-input")],fe);class ge extends y{constructor(t){if(super(t),this.it=l,t.type!==k.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===l||null==e)return this._t=void 0,this.it=e;if(e===t)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}ge.directiveName="unsafeHTML",ge.resultType=1;const ve=v(ge);let ye=class extends h{constructor(){super(),this.rangesText="",this.filterText="",this.fullWords=!1,this.caseSensitive=!1,this.isBiblesLoaded=!1,this._verses=[],this._hashList=[],this._versionName="afr",this._altVersionName="kjv",this._onVerseClicked=t=>{const e=t.currentTarget;if(e){if(null!==e.getAttribute("activated")){e.removeAttribute("activated");const t=e.closest(".container");if(t){const o=e.nextSibling;t.removeChild(o)}return}e.setAttribute("activated","");const t=e.dataset.hash;if(t){const o=kt(et(t,this._versionName,this._altVersionName)),r=document.createElement("tsk-refs");r.setAttribute("refs",o),e.after(r)}}}}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.initializeBible()}disconnectedCallback(){this.destroy()}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),this._setVerses()}initializeBible(){p.start();let t=`${window.origin}${b}resources/${this._versionName}.txt`;ft(this._versionName,t).then((()=>{t=`${window.origin}${b}resources/${this._altVersionName}.txt`,ft(this._altVersionName,t).then((()=>{this.isBiblesLoaded=!0,p.stop(),this._setVerses()})).catch((t=>console.log("Error loading bibles",t)))})).catch(console.log)}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",O)}))}async _setVerses(){const t=((t,e=!1,o=!1)=>{const r=/(["'])(\\\1|.)*?\1/g,i=t.match(r)||[],s=t.replace(r,"").match(/[^\s"']+/g)||[],n=i.map((t=>t.substring(1,t.length-1))),a=o?"":"i",l=e?"\\b":"",c=[...n,...s].map((t=>new RegExp(l+t+l,a)));return t=>{let e=0;for(;c[e]&&c[e].test(t);)e++;return e===c.length}})(this.filterText,this.fullWords,this.caseSensitive);if(!this.isBiblesLoaded)return;if(this.rangesText.length<2)return;const e=[],o=ut({rangesText:this.rangesText,versionName:this._versionName});if(0===o.length)return;this._hashList=pt(this._versionName,o);let r=0;for(let o of this._hashList){const i=ht(this._versionName,o);if(t(i.text)){const t=et(o,this._versionName,this._altVersionName),s=ht(this._altVersionName,t),n={afr:i,kjv:await this._style_KJV_verse(kt(t),s),uuid:this._uuid(),hash:o};e.push(n),r++}if(r>99)break}this._verses=e}_getTSKRefs(t){return void 0===this._ixdb?null:new Promise(((e,o)=>{p.start();const r=this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t));r.onsuccess=t=>{let o=t.target.result;return o.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),p.stop(),e(o)},r.onerror=t=>(p.stop(),o(t))}))}async _style_KJV_verse(t,e){try{const o=await this._getTSKRefs(t);let r=0;o&&o.length>0&&o.forEach((t=>{const{text:o,index:i}=function(t,e,o){const r=e.length;if(o>=t.length)return{text:t,index:t.length};const i=RegExp("(\\b"+e+"\\b)|(^"+e+"$)","g");let s;for(;null!==(s=i.exec(t))&&i.lastIndex<o;);if(null!==s){if(void 0!==s[1])return{text:t.substring(0,i.lastIndex-r)+" <b>"+e+"</b> "+t.substring(i.lastIndex),index:i.lastIndex+7};if(void 0!==s[2])return{text:"<b>"+t+"</b>",index:i.lastIndex+7}}return{text:t,index:i.lastIndex}}(e.text,t.words,r);r=i,e.text=o}))}catch(t){console.log("Error Formatting KJV",t)}return e}_uuid(){return Math.random().toString(36).substring(2,12)}destroy(){}render(){return r`
        <div class="container">
          ${B(this._verses,(t=>t.uuid),(t=>r`
                <div class="ripple-box"
                  data-uuid=${t.uuid}
                  data-hash=${t.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${t.afr.prettyRef} ${t.afr.text}
                  </p>
                  ${t.kjv.text.length>0?r`
                      <p class="kjvtext" >
                        ${t.kjv.prettyRef} ${ve(t.kjv.text)}
                      </p>

                      `:l}
                </div>
               `))}
        </div>
    `}};function ke(t){for(var e=arguments.length,o=Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(o.length?" "+o.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function _e(t){return!!t&&!!t[no]}function we(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var o=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return o===Object||"function"==typeof o&&Function.toString.call(o)===ao}(t)||Array.isArray(t)||!!t[so]||!!(null===(e=t.constructor)||void 0===e?void 0:e[so])||ze(t)||Ee(t))}function xe(t,e,o){void 0===o&&(o=!1),0===$e(t)?(o?Object.keys:lo)(t).forEach((function(r){o&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(o,r){return e(r,o,t)}))}function $e(t){var e=t[no];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:ze(t)?2:Ee(t)?3:0}function je(t,e){return 2===$e(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ce(t,e,o){var r=$e(t);2===r?t.set(e,o):3===r?t.add(o):t[e]=o}function ze(t){return eo&&t instanceof Map}function Ee(t){return oo&&t instanceof Set}function Se(t){return t.o||t.t}function Ae(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=co(t);delete e[no];for(var o=lo(e),r=0;r<o.length;r++){var i=o[r],s=e[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Te(t,e){return void 0===e&&(e=!1),Pe(t)||_e(t)||!we(t)||($e(t)>1&&(t.set=t.add=t.clear=t.delete=Ie),Object.freeze(t),e&&xe(t,(function(t,e){return Te(e,!0)}),!0)),t}function Ie(){ke(2)}function Pe(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function De(t){var e=uo[t];return e||ke(18,t),e}function Fe(){return Ze}function Le(t,e){e&&(De("Patches"),t.u=[],t.s=[],t.v=e)}function Ve(t){Be(t),t.p.forEach(Re),t.p=null}function Be(t){t===Ze&&(Ze=t.l)}function Oe(t){return Ze={p:[],l:Ze,h:t,m:!0,_:0}}function Re(t){var e=t[no];0===e.i||1===e.i?e.j():e.O=!0}function Ne(t,e){e._=e.p.length;var o=e.p[0],r=void 0!==t&&t!==o;return e.h.g||De("ES5").S(e,t,r),r?(o[no].P&&(Ve(e),ke(4)),we(t)&&(t=Ue(e,t),e.l||Me(e,t)),e.u&&De("Patches").M(o[no].t,t,e.u,e.s)):t=Ue(e,o,[]),Ve(e),e.u&&e.v(e.u,e.s),t!==io?t:void 0}function Ue(t,e,o){if(Pe(e))return e;var r=e[no];if(!r)return xe(e,(function(i,s){return Ke(t,r,e,i,s,o)}),!0),e;if(r.A!==t)return e;if(!r.P)return Me(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=Ae(r.k):r.o,s=i,n=!1;3===r.i&&(s=new Set(i),i.clear(),n=!0),xe(s,(function(e,s){return Ke(t,r,i,e,s,o,n)})),Me(t,i,!1),o&&t.u&&De("Patches").N(r,o,t.u,t.s)}return r.o}function Ke(t,e,o,r,i,s,n){if(_e(i)){var a=Ue(t,i,s&&e&&3!==e.i&&!je(e.R,r)?s.concat(r):void 0);if(Ce(o,r,a),!_e(a))return;t.m=!1}else n&&o.add(i);if(we(i)&&!Pe(i)){if(!t.h.D&&t._<1)return;Ue(t,i),e&&e.A.l||Me(t,i)}}function Me(t,e,o){void 0===o&&(o=!1),!t.l&&t.h.D&&t.m&&Te(e,o)}function qe(t,e){var o=t[no];return(o?Se(o):t)[e]}function We(t,e){if(e in t)for(var o=Object.getPrototypeOf(t);o;){var r=Object.getOwnPropertyDescriptor(o,e);if(r)return r;o=Object.getPrototypeOf(o)}}function He(t){t.P||(t.P=!0,t.l&&He(t.l))}function Je(t){t.o||(t.o=Ae(t.t))}function Ye(t,e,o){var r=ze(e)?De("MapSet").F(e,o):Ee(e)?De("MapSet").T(e,o):t.g?function(t,e){var o=Array.isArray(t),r={i:o?1:0,A:e?e.A:Fe(),P:!1,I:!1,R:{},l:e,t:t,k:null,o:null,j:null,C:!1},i=r,s=ho;o&&(i=[r],s=po);var n=Proxy.revocable(i,s),a=n.revoke,l=n.proxy;return r.k=l,r.j=a,l}(e,o):De("ES5").J(e,o);return(o?o.A:Fe()).p.push(r),r}function Xe(t){return _e(t)||ke(22,t),function t(e){if(!we(e))return e;var o,r=e[no],i=$e(e);if(r){if(!r.P&&(r.i<4||!De("ES5").K(r)))return r.t;r.I=!0,o=Ge(e,i),r.I=!1}else o=Ge(e,i);return xe(o,(function(e,i){r&&function(t,e){return 2===$e(t)?t.get(e):t[e]}(r.t,e)===i||Ce(o,e,t(i))})),3===i?new Set(o):o}(t)}function Ge(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Ae(t)}ye.styles=[o`
    :host{
      display: block;
    }
    .afrtext {
      margin: 0px;
      padding: 2px;
      font-size: var(--font-size-afr);
    }
    .kjvtext {
      margin: 0px;
      padding: 2px;
      font-style: italic;
      font-weight: var(--sl-font-weight-light);
      font-size: var(--font-size-kjv);
    }
    .kjvtext b {
      font-weight: var(--sl-font-weight-normal);
    }
  `,o`${c(ae)}`],d([n({type:String,attribute:!0})],ye.prototype,"rangesText",void 0),d([n({type:String,attribute:!0})],ye.prototype,"filterText",void 0),d([n({type:Boolean,attribute:!0})],ye.prototype,"fullWords",void 0),d([n({type:Boolean,attribute:!0})],ye.prototype,"caseSensitive",void 0),d([s()],ye.prototype,"isBiblesLoaded",void 0),d([s()],ye.prototype,"_verses",void 0),d([s()],ye.prototype,"_hashList",void 0),d([u({context:R})],ye.prototype,"_ixdb",void 0),d([S("#input")],ye.prototype,"_input",void 0),ye=d([i("interlinear-bible")],ye);var Qe,Ze,to="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),eo="undefined"!=typeof Map,oo="undefined"!=typeof Set,ro="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,io=to?Symbol.for("immer-nothing"):((Qe={})["immer-nothing"]=!0,Qe),so=to?Symbol.for("immer-draftable"):"__$immer_draftable",no=to?Symbol.for("immer-state"):"__$immer_state",ao=""+Object.prototype.constructor,lo="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,co=Object.getOwnPropertyDescriptors||function(t){var e={};return lo(t).forEach((function(o){e[o]=Object.getOwnPropertyDescriptor(t,o)})),e},uo={},ho={get:function(t,e){if(e===no)return t;var o=Se(t);if(!je(o,e))return function(t,e,o){var r,i=We(e,o);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(t.k):void 0}(t,o,e);var r=o[e];return t.I||!we(r)?r:r===qe(t.t,e)?(Je(t),t.o[e]=Ye(t.A.h,r,t)):r},has:function(t,e){return e in Se(t)},ownKeys:function(t){return Reflect.ownKeys(Se(t))},set:function(t,e,o){var r=We(Se(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,o),!0;if(!t.P){var i=qe(Se(t),e),s=null==i?void 0:i[no];if(s&&s.t===o)return t.o[e]=o,t.R[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(o,i)&&(void 0!==o||je(t.t,e)))return!0;Je(t),He(t)}return t.o[e]===o&&(void 0!==o||e in t.o)||Number.isNaN(o)&&Number.isNaN(t.o[e])||(t.o[e]=o,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==qe(t.t,e)||e in t.t?(t.R[e]=!1,Je(t),He(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var o=Se(t),r=Reflect.getOwnPropertyDescriptor(o,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:o[e]}:r},defineProperty:function(){ke(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){ke(12)}},po={};xe(ho,(function(t,e){po[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),po.deleteProperty=function(t,e){return po.set.call(this,t,e,void 0)},po.set=function(t,e,o){return ho.set.call(this,t[0],e,o,t[0])};var bo=function(){function t(t){var e=this;this.g=ro,this.D=!0,this.produce=function(t,o,r){if("function"==typeof t&&"function"!=typeof o){var i=o;o=t;var s=e;return function(t){var e=this;void 0===t&&(t=i);for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return s.produce(t,(function(t){var r;return(r=o).call.apply(r,[e,t].concat(n))}))}}var n;if("function"!=typeof o&&ke(6),void 0!==r&&"function"!=typeof r&&ke(7),we(t)){var a=Oe(e),l=Ye(e,t,void 0),c=!0;try{n=o(l),c=!1}finally{c?Ve(a):Be(a)}return"undefined"!=typeof Promise&&n instanceof Promise?n.then((function(t){return Le(a,r),Ne(t,a)}),(function(t){throw Ve(a),t})):(Le(a,r),Ne(n,a))}if(!t||"object"!=typeof t){if(void 0===(n=o(t))&&(n=t),n===io&&(n=void 0),e.D&&Te(n,!0),r){var d=[],u=[];De("Patches").M(t,n,d,u),r(d,u)}return n}ke(21,t)},this.produceWithPatches=function(t,o){if("function"==typeof t)return function(o){for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return e.produceWithPatches(o,(function(e){return t.apply(void 0,[e].concat(i))}))};var r,i,s=e.produce(t,o,(function(t,e){r=t,i=e}));return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(t){return[t,r,i]})):[s,r,i]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){we(t)||ke(8),_e(t)&&(t=Xe(t));var e=Oe(this),o=Ye(this,t,void 0);return o[no].C=!0,Be(e),o},e.finishDraft=function(t,e){var o=(t&&t[no]).A;return Le(o,e),Ne(void 0,o)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!ro&&ke(20),this.g=t},e.applyPatches=function(t,e){var o;for(o=e.length-1;o>=0;o--){var r=e[o];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}o>-1&&(e=e.slice(o+1));var i=De("Patches").$;return _e(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),mo=new bo,fo=mo.produce;mo.produceWithPatches.bind(mo),mo.setAutoFreeze.bind(mo),mo.setUseProxies.bind(mo),mo.applyPatches.bind(mo),mo.createDraft.bind(mo),mo.finishDraft.bind(mo);let go=class extends h{constructor(){super(),this.tskRefs=[]}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback(),this.refs&&this._getAll(this.refs)}disconnectedCallback(){this.destroy()}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",O)}))}_readIXDB(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(t)).onsuccess=t=>{const e=t.target.result;e&&(this.tskRefs=fo(this.tskRefs,(t=>(t.push({display:!1,ref:e.value}),t.sort(((t,e)=>parseInt(t.ref.sort)-parseInt(e.ref.sort))),t))),e.continue())})}_getAll(t){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(t)).onsuccess=t=>{let e=t.target.result;e.sort(((t,e)=>parseInt(t.sort)-parseInt(e.sort))),e=e.map((t=>({display:!1,ref:t}))),this.tskRefs=fo(this.tskRefs,(()=>e))})}destroy(){}render(){return r`
    <div class="refs-container">
      <mwc-list>
      ${B(this.tskRefs,(t=>t.ref.key),((t,e)=>r`
            <div class="ripple-box" @click=${o=>{const r=o.currentTarget;t.display?r.removeAttribute("activated"):r.setAttribute("activated",""),this.tskRefs=fo(this.tskRefs,(t=>(t[e].display=!t[e].display,t)))}}
            >
              <p class="ref-word">${t.ref.words}</p>
            </div>
            ${!0===t.display?r`<interlinear-bible rangesText=${t.ref.refs}></interlinear-bible>`:""}
         `))}  
      </mwc-list>  
    </div>
    `}};go.styles=[o`
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
  `,o`${c(ae)}`],d([n({type:String,attribute:!0})],go.prototype,"refs",void 0),d([u({context:R})],go.prototype,"_ixdb",void 0),d([s()],go.prototype,"tskRefs",void 0),go=d([i("tsk-refs")],go),window.____pwa_install_button_deferred_prompt={},window.____pwa_install_button_installable=null,window.addEventListener("beforeinstallprompt",(t=>{window.____pwa_install_button_installable=!0,window.____pwa_install_button_deferred_prompt=t}));class vo extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),window.____pwa_install_button_deferred_prompt=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))})),window.____pwa_install_button_installable&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),window.____pwa_install_button_deferred_prompt.prompt();const{outcome:e}=await window.____pwa_install_button_deferred_prompt.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),window.____pwa_install_button_deferred_prompt=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",vo);class yo extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){if(this.setAttribute("hidden",""),this.addEventListener("click",this._postMessage.bind(this)),"serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration();t&&(t.addEventListener("updatefound",(()=>{this._newWorker=t.installing,this._newWorker.addEventListener("statechange",(()=>{"installed"===this._newWorker.state&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this.removeAttribute("hidden"))}))})),t.waiting&&navigator.serviceWorker.controller&&(this.dispatchEvent(new CustomEvent("pwa-update-available",{detail:!0})),this._newWorker=t.waiting,this.removeAttribute("hidden"))),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)}))}}_postMessage(t){t.preventDefault(),this._newWorker.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",yo);let ko=class extends h{constructor(){super(),this.reference="",this._rangesText="",this._filterText="",this._fullWords=!1,this._caseSensitive=!1,this.bibleScroll=new le(this,100)}firstUpdated(t){super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.destroy()}destroy(){}_toggleCaseSensitive(t){this._caseSensitive=t.target.checked}_toggleFullWords(t){this._fullWords=t.target.checked}_updateRangeText(t){this.reference="",this._rangesText=t.target.value}_updateFilterText(t){this._filterText=t.target.value}_onToggleDraw(){this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,cancelable:!0}))}render(){const t={"hide-heading":this.bibleScroll.offscreen,"show-heading":!this.bibleScroll.offscreen};return r`
<div class="heading ${P(t)}">
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
      ${this._filterText.length>0?r`<sl-badge slot="suffix">Soek</sl-badge>`:l}
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
</interlinear-bible>`}};var _o;ko.styles=[o`
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
  `,o`${c(L)}`],d([n({type:String,reflect:!0})],ko.prototype,"reference",void 0),d([s()],ko.prototype,"_rangesText",void 0),d([s()],ko.prototype,"_filterText",void 0),d([s()],ko.prototype,"_fullWords",void 0),d([s()],ko.prototype,"_caseSensitive",void 0),d([S("sl-dialog")],ko.prototype,"dialog",void 0),ko=d([i("bible-head")],ko);let wo=_o=class extends f{_unSelect_items(){this.renderRoot.querySelectorAll(".ripple-box").forEach((t=>{t.removeAttribute("activated")}))}_toggleActive(t){this._unSelect_items();t.currentTarget.setAttribute("activated","")}connectedCallback(){super.connectedCallback()}constructor(){super(),this._dbName="idxDB",this._ixdb={ixdb:void 0},this._num_chapters=10,this._selected_chapter=10,this._selected_book="",this.fontIndex=0,this.initialize_IDB()}appendStyles(){const t=new CSSStyleSheet;t.replace(L).then((()=>{this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t]}))}firstUpdated(){}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",O)}))}initialize_IDB(){const t=indexedDB.open(this._dbName,1);t.onerror=t=>{alert("Error accessing TSK database!"+t.target.result)};const e=t=>{if(_o.loadingIXDB)return;_o.loadingIXDB=!0,this.spinner.start();(async t=>{if(gt)return vt(gt);const e=await fetch(t);if(!e.ok)throw new Error("Bad res from server");return gt=await e.text(),vt(gt)})(`${window.origin}${b}resources/tsk.txt`).then((e=>{console.log("tsk loaded!");const o=t.transaction("xref","readwrite").objectStore("xref");e.forEach((t=>{o.add(t)})),this.spinner.stop(),console.log("All done!")})).catch((t=>{console.log("Failed to load TSK →",t),alert("Failed to create TSK database! No cross references are available. Try using a reload.")}))};t.onsuccess=t=>{this._ixdb.ixdb=t.target.result;const o=this._ixdb.ixdb.transaction("xref").objectStore("xref").count();o.onsuccess=()=>{0===o.result&&e(this._ixdb.ixdb)}},t.onupgradeneeded=t=>{const o=t.target.result;console.log("Creating a new IDB instance for tsk!");const r=o.createObjectStore("xref",{keyPath:"key"});r.createIndex("verse","verse",{unique:!1}),r.transaction.oncomplete=()=>{e(o)}}}_setBook(t,e){this._toggleActive(t),void 0!==H("afr")&&(this._num_chapters=H("afr").last.books[e].chapter+1,this._selected_book=U[e],this.dialog.show())}_setChapter(t){this._selected_chapter=t,this.dialog.hide(),this.drawer.hide()}_onDecreaseFont(){this.fontIndex=this.fontIndex<1?0:this.fontIndex-1,console.log("decrease ",this.fontIndex)}_onIncreaseFont(){this.fontIndex=this.fontIndex>1?2:this.fontIndex+1,console.log("increase ",this.fontIndex)}render(){const t={"bible-font-standard":0===this.fontIndex,"bible-font-large":1===this.fontIndex,"bible-font-x-large":2===this.fontIndex};return r`
      <sl-dialog
        label="Kies 'n hoofstuk."
      >
        ${function*(t,e){if(void 0!==t){let o=0;for(const r of t)yield e(r,o++)}}(function*(t,e,o=1){const r=void 0===e?0:t;null!=e||(e=t);for(let t=r;o>0?t<e:e<t;t+=o)yield t}(this._num_chapters),(t=>r`<sl-button 
            class="chapter-button"
            variant="text"
            @click=${()=>this._setChapter(t+1)}
          >
            ${t+1}
          </sl-button>`))}
      </sl-dialog>
      <sl-drawer label="Bybel boeke" placement="start">
      <div slot=header-actions class="size-buttons">
        <sl-button 
          @click=${this._onDecreaseFont}
          circle
        >${"↓"}<span style="font-size: var(--sl-font-size-x-small);">A</span></sl-button>
        <sl-button 
          @click=${this._onIncreaseFont}
          circle
        >${"↑"}<span style="font-size: var(--sl-font-size-medium);">A</span></sl-button>
      </div>
      ${this.render_menu()}
      </sl-drawer>
      <bible-head 
     class=${P(t)}
        reference=${""!==this._selected_book?this._selected_book+" "+this._selected_chapter:l}
        @toggle-drawer=${()=>this.drawer.show()}
      > </bible-head>
      `}render_menu(){return r`
      ${B(q.abbreviations,(t=>t[0]),((t,e)=>r`
          <div class="ripple-box"
            @click=${t=>{this._setBook(t,e)}}
          >
            <p class="book-name">${t[0]}</p>
          </div>
        `))}
      <hr>
      <div style="padding: 4px;">
        <p class="book-name">
          <a href="./about">🤔 1953/KJV met TSK 🤔</a>
        </p>
      </div>
    `}meta(){return{title:g.appName,titleTemplate:null,description:g.appDescription}}};wo.loadingIXDB=!1,wo.styles=[o`
    :host {
      display: block; /* customElement defaults to inline!!*/
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
    .bible-font-standard {
      --font-size-afr: var(--sl-font-size-medium);
      --font-size-kjv: var(--sl-font-size-small);
    }
    .bible-font-large {
      --font-size-afr: var(--sl-font-size-large);
      --font-size-kjv: var(--sl-font-size-medium);
    }
    .bible-font-x-large {
      --font-size-afr: var(--sl-font-size-x-large);
      --font-size-kjv: var(--sl-font-size-large);
    }
    .size-buttons {
      display: flex;
      align-items: center;

    }
    .size-buttons >  sl-button {
      margin-right: 1rem;
    }
    `,o`${c(L)}`,o`${c(ae)}`],d([S("sl-drawer")],wo.prototype,"drawer",void 0),d([S("sl-dialog")],wo.prototype,"dialog",void 0),d([m({context:R}),s()],wo.prototype,"_ixdb",void 0),d([s()],wo.prototype,"_num_chapters",void 0),d([s()],wo.prototype,"_selected_chapter",void 0),d([s()],wo.prototype,"_selected_book",void 0),d([s()],wo.prototype,"fontIndex",void 0),wo=_o=d([i("page-bible")],wo);
