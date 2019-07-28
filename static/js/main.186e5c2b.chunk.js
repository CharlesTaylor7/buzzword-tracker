(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,r){e.exports=r(416)},220:function(e,t,r){},221:function(e,t,r){},416:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(78),c=r.n(o),u=(r(220),r(60)),i=r(61),s=r(21),l=(r(221),r(426)),p=r(425),f=r(87),d=r(429),y=r(430),h=r(418),b=r(423),m=r(79),v=r.n(m),g=/^([0-9]+|s|a|aa|at|an|the|of|on|and|to|in|for)$/,j=/[\-\[\]\s,.\u2013_'\u2019();:\/"\u201d]/,w=["title","description"],O=function(e){return l.a(p.a(function(t){return e[t]?e[t].split(j):[]}),f.a(v.a),d.a(function(e){return!y.a(e)&&y.a(h.a(g,e))}),b.a)(w)},x=r(56),k=r(419),E=r(428),R=r(431),q=r(420),S=r(421),T=r(432),$=function(e){var t=e.queries,r=e.yearRange,o=e.recordSet$,c=e.colorMap,u=Object(s.a)(r,2),y=u[0],h=u[1],b=function(e){var t=Object(n.useRef)({records:{},stemsToRecords:{},yearsToRecords:{}}),r=Object(n.useState)(0),a=Object(s.a)(r,2),o=a[0],c=a[1];return Object(n.useEffect)(function(){var r=e.subscribe(function(e){var r=t.current,n=r.records,a=r.stemsToRecords,o=r.yearsToRecords,u=!0,i=!1,s=void 0;try{for(var l,p=e[Symbol.iterator]();!(u=(l=p.next()).done);u=!0){var f=l.value;n[f.id]=f;var d=!0,y=!1,h=void 0;try{for(var b,m=O(f)[Symbol.iterator]();!(d=(b=m.next()).done);d=!0){var v=b.value;void 0===a[v]?a[v]=[f.id]:a[v].push(f.id)}}catch(j){y=!0,h=j}finally{try{d||null==m.return||m.return()}finally{if(y)throw h}}var g=f.year;void 0===o[g]?o[g]=[f.id]:o[g].push(f.id)}}catch(j){i=!0,s=j}finally{try{u||null==p.return||p.return()}finally{if(i)throw s}}c(function(t){return t+e.length})});return function(){return r.unsubscribe()}},[e]),{recordCount:o,state:t}}(o),m=(b.recordCount,b.state.current),g=m.records,j=m.stemsToRecords,w=m.yearsToRecords,$=Object.keys(t),I=l.a(k.a,p.a(function(e){var t=Object(s.a)(e,2),r=t[0],n=t[1];return f.a(function(e){return Object(i.a)({},g[e],{queryId:r})},function(e){return j[v()(e)]||[]}(n))}),E.a(R.a("year")))(t),B=f.a(function(e){var t=I[e]||[],r=l.a(f.a(function(r){var n=function(e){return w[e]?w[e].length:0}(e);return 0===n?[r,0]:[r,100*d.a(q.a("queryId",r),t).length/n]}),S.a)($);return r.year=e,r},T.a(y,h+1));return a.a.createElement(x.b,{width:1200,height:500,data:B},a.a.createElement(x.c,null),a.a.createElement(x.d,{dataKey:"year"}),a.a.createElement(x.e,null),$.map(function(e){return a.a.createElement(x.a,{key:e,type:"linear",dataKey:e,stroke:c[e]})}))},I=r(427),B=r(424),M=function(e){var t=e.id,r=e.setQuery,o=e.query,c=e.color,u=Object(n.useMemo)(function(){return(new I.a).pipe(Object(B.a)(400))},[]);Object(n.useEffect)(function(){u.subscribe(function(e){return r(t,e)})},[u,r,t]);var i=Number(t[1]+1),s=1===i;return a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.a.createElement("div",{style:{height:"17px",width:"17px",borderRadius:"100%",backgroundColor:c,margin:"0px 20px"}}),"Trend line for:",a.a.createElement("input",{tabIndex:i,autoFocus:s,type:"text",onChange:function(e){return t=e.target.value,u.next(t);var t},defaultValue:o,style:{margin:"10px",border:0,outline:0,fontSize:"16pt",color:"white",background:"transparent",borderBottom:"1px solid grey"}}))},A=r(180),C=(r(417),r(113),r(185)),F=r(181),K=r.n(F),N=r(184),P=r(182),L=r(422),W=r(117),_=function(e){return Object(W.fromFetch)("".concat("https://cors-holy-water.herokuapp.com/").concat(e))};function J(e,t){J=function(e,t){return new o(e,t)};var r=Object(C.a)(RegExp),n=RegExp.prototype,a=new WeakMap;function o(e,t){var n=r.call(this,e);return a.set(n,t),n}function c(e,t){var r=a.get(t);return Object.keys(r).reduce(function(t,n){return t[n]=e[r[n]],t},Object.create(null))}return Object(A.a)(o,r),o.prototype.exec=function(e){var t=n.exec.call(this,e);return t&&(t.groups=c(t,this)),t},o.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var r=a.get(this);return n[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,t){return"$"+r[t]}))}if("function"===typeof t){var o=this;return n[Symbol.replace].call(this,e,function(){var e=[];return e.push.apply(e,arguments),"object"!==typeof e[e.length-1]&&e.push(c(e,o)),t.apply(this,e)})}return n[Symbol.replace].call(this,e,t)},J.apply(this,arguments)}var Q=K.a,z=function(e){switch(e){case"/":return"%2F";case"?":return"%3F";case"#":return"%23";case"=":return"%3D";case":":return"%3A";case";":return"%3B";case" ":return"%20";case"%":return"%25";case"+":return"%2B";default:return e}},D=function(e){return e?"&resumptionToken=".concat(function(e){return e.split().map(z).join()}(e)):""},H=function(e){return e.match(J(/^.*\/(.*)$/,{key:1})).groups.key},U=function(e){for(var t={},r=0,n=Object.entries(e.metadata["oai_dc:dc"]);r<n.length;r++){var a=n[r],o=Object(s.a)(a,2),c=o[0],u=o[1];t[c.match(J(/^dc:(\w+)$/,{prop:1})).groups.prop]=u}return t.title=t.title?String(t.title):null,t.id=H(t.identifier),delete t.identifier,t.year=t.date,delete t.date,t.type=H(t.type),t.author=t.creator,delete t.creator,t},V=function e(t){return _("https://philpapers.org/oai.pl?verb=ListRecords&metadataPrefix=oai_dc".concat(D(t))).pipe(N.a(function(e){return e.text()}),N.a(function(t){var r=Q.parse(t)["OAI-PMH"].ListRecords,n=r.record,a=r.resumptionToken;return L.a([n],e(a))}))}().pipe(P.a(function(e){return e.map(U).filter(function(e){return"en"===e.language&&e.title&&"number"===typeof e.year})})),X=(_("https://philPapers.org/philpapers/raw/categories.json?apiId=".concat("904518","&apiKey=").concat("5KLo4qkvXNl4t8s5")).pipe(N.a(function(e){return e.json()}),P.a(function(e){return e[0]})),r(183)),G={q0:"blue",q1:"purple",q2:"green",q3:"grey"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(function(){var e=Object(X.useUrlSearchParams)({q0:"good",q1:"governance"}),t=Object(s.a)(e,2),r=t[0],n=t[1],o=function(e,t){n(Object(i.a)({},r,Object(u.a)({},e,t)))};return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},l.a(k.a,f.a(function(e){var t=Object(s.a)(e,2),r=t[0],n=t[1];return a.a.createElement(M,{key:r,id:r,color:G[r],query:n,setQuery:o})}))(r),a.a.createElement($,{queries:r,colorMap:G,recordSet$:V,yearRange:[2e3,2018]})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[215,1,2]]]);
//# sourceMappingURL=main.186e5c2b.chunk.js.map