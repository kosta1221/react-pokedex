(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(21),c=n.n(s),r=(n(26),n(5)),i=(n(27),n(11)),l=n(4),u=n.n(l),p=n(6),d=n(7),g=n.n(d),m="/api",j=function(){var e=Object(p.a)(u.a.mark((function e(t,n,a,o,s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to fetch..."),console.log("".concat(m,"/pokemon/").concat(a)),e.prev=2,s(!0),n({pokemonData:t.pokemonData,isFetching:!0}),e.next=7,g()({method:"GET",url:"".concat(m,"/pokemon/").concat(a),headers:{"Content-Type":"application/json"}});case 7:c=e.sent,n({pokemonData:c.data,isFetching:!1}),s(!1),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),"string"===typeof e.t0.response.data?o(e.t0.response.data):"string"===typeof e.t0.response.data.message?o(e.t0.response.data.message):o(e.t0.message),n({pokemonData:t.pokemonData,isFetching:!1}),s(!1);case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n,a,o,s){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(u.a.mark((function e(t,n,a){var o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to fetch names..."),console.log("".concat(m,"/pokemon/").concat(n)),e.prev=2,e.next=5,g()({method:"GET",url:"".concat(m,"/pokemon/").concat(n),headers:{"Content-Type":"application/json"}});case 5:o=e.sent,s=o.data.results.map((function(e){return e.name})),t(s),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),"string"===typeof e.t0.response.data?a(e.t0.response.data):"string"===typeof e.t0.response.data.message?a(e.t0.response.data.message):a(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(u.a.mark((function e(t,n,a,o){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),console.log("trying to fetch ".concat(t," types...")),console.log("".concat(m,"/type/").concat(t)),e.prev=3,e.next=6,g()({method:"GET",url:"".concat(m,"/type/").concat(t),headers:{"Content-Type":"application/json"}});case 6:s=e.sent,c=s.data,console.log(s.data),n(c),o(!1),e.next=20;break;case 13:throw e.prev=13,e.t0=e.catch(3),n([]),console.log(e.t0),"string"===typeof e.t0.response.data?a(e.t0.response.data):"string"===typeof e.t0.response.data.message?a(e.t0.response.data.message):a(e.t0.message),o(!1),e.t0;case 20:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,n,a,o){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(u.a.mark((function e(t,n,a,o){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to catch(post) ".concat(t.name,"...")),console.log("".concat(m,"/collection/catch")),e.prev=2,e.next=5,g()({method:"POST",url:"".concat(m,"/collection/catch"),headers:{"Content-Type":"application/json"},data:t});case 5:s=e.sent,console.log(s.data[s.data.length-1].name),console.log(s.data),a(Object(i.a)(s.data)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),"string"===typeof e.t0.response.data?o(e.t0.response.data):"string"===typeof e.t0.response.data.message?o(e.t0.response.data.message):o(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n,a,o){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(u.a.mark((function e(t,n,a){var o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to fetch my collection..."),console.log("".concat(m,"/collection")),e.prev=2,e.next=5,g()({method:"GET",url:"".concat(m,"/collection"),headers:{"Content-Type":"application/json"}});case 5:o=e.sent,s=o.data,console.log("Fetched collection..."),console.log(o.data),n(Object(i.a)(s)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),"string"===typeof e.t0.response.data?a(e.t0.response.data):"string"===typeof e.t0.response.data.message?a(e.t0.response.data.message):a(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(u.a.mark((function e(t,n,a){var o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to release pokemon id: ".concat(t," from collection...")),console.log("".concat(m,"/collection/").concat(t)),e.prev=2,e.next=5,g()({method:"DELETE",url:"".concat(m,"/collection/").concat(t),headers:{"Content-Type":"application/json"}});case 5:o=e.sent,s=o.data,console.log(o.data),n(Object(i.a)(s)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),"string"===typeof e.t0.response.data?a(e.t0.response.data):"string"===typeof e.t0.response.data.message?a(e.t0.response.data.message):a(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n,a){return e.apply(this,arguments)}}();function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}var v=n(10),x=n.n(v),C=n(0);var w=function(e){var t=e.pokemonsOfType,n=e.data,a=e.setData,o=e.setErrorMessage,s=e.setPokemonLoading,c=e.typeGridLoading,r=function(e){var t=e.target.getAttribute("name");j(n,a,t,o,s)};return c?Object(C.jsx)(x.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100}):0===t.length?null:Object(C.jsx)("div",{className:"grid-container lvl1",children:t.map((function(e,t){return e&&e.sprites?Object(C.jsxs)("div",{className:"card text-white bg-secondary",children:[Object(C.jsx)("span",{className:"card-header",children:e.name}),Object(C.jsx)("img",{src:e.sprites.front_default,alt:"pokemon",onMouseEnter:function(t){return t.target.src=e.sprites.back_default},onMouseLeave:function(t){return t.target.src=e.sprites.front_default},name:e.name,onClick:r})]},"type-grid-pokemon-".concat(t)):null}))})};var T=function(e){var t=e.pokemonData,n=e.setPokemonsOfType,a=(e.isFetching,e.setErrorMessage),o=e.pokemonLoading,s=e.setTypeGridLoading,c=function(e){var t=e.target.getAttribute("type");console.log("type clicked",t);try{h(t,n,a,s)}catch(o){console.log("caught"),n([])}},r=[],i=function(e){return"sprites"===e||"id"===e?"continue":Array.isArray(t[e])&&"types"===e?(r.push(Object(C.jsxs)("div",{className:"pokemon-data-div",children:[Object(C.jsx)("span",{children:"".concat(k(e),": ")}),t[e].map((function(n,a){return t[e].length,Object(C.jsx)("span",{className:"btn btn-outline-primary",type:n,onClick:c,children:"".concat(n)},"type-".concat(a))}))]},e)),"continue"):void r.push(Object(C.jsxs)("div",{className:"pokemon-data-div",children:[Object(C.jsx)("span",{children:"".concat(k(e),": ")}),Object(C.jsx)("span",{children:t[e]})]},e))};for(var l in t)i(l);return o?Object(C.jsx)(x.a,{type:"MutatingDots",color:"#00BFFF",height:"100%",width:100}):Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"pokemon-data-except-big-artwork",children:[Object(C.jsx)("div",{children:r}),Object(C.jsx)("img",{src:t.sprites.front_default,alt:"pokemon",onMouseEnter:function(e){return e.target.src=t.sprites.back_default},onMouseLeave:function(e){return e.target.src=t.sprites.front_default}})]}),Object(C.jsx)("img",{className:"big-artwork",src:t.sprites.other.dream_world.front_default,alt:"pokemon-banner"})]})},D=function(e){var t=e.suggestions,n=e.setInputValue,a=e.handleSearchButtonClick,o=function(e){n(e.target.innerText),a()},s=t.map((function(e,t){return Object(C.jsx)("div",{className:"suggestion",onClick:o,children:e},"suggestion-".concat(t))}));return Object(C.jsx)("div",{className:"suggestions",children:s})};var N=function(e){var t=e.data,n=e.setData,a=e.inputValue,o=e.handleInputChange,s=e.searchSuggestions,c=e.searchButtonClickCount,r=e.setSearchButtonClickCount,i=e.setInputValue,l=e.pokemonsOfType,u=e.setPokemonsOfType,p=e.setErrorMessage,d=e.setTypeGridLoading,g=e.pokemonLoading,m=function(){r(c+1)};return Object(C.jsxs)("section",{className:"pokemon-section",children:[Object(C.jsx)("h1",{className:"main-header",children:"Pokedex"}),Object(C.jsxs)("div",{className:"autocomplete",children:[Object(C.jsx)("input",{id:"search-input",onChange:o,placeholder:"pikachu...",value:a}),Object(C.jsx)("button",{id:"search-button",onClick:m,children:"\ud83d\udd0d"}),Object(C.jsx)(D,{id:"search-suggestions",suggestions:s,setInputValue:i,handleSearchButtonClick:m})]}),Object(C.jsx)(T,{pokemonData:t.pokemonData,isFetching:t.isFetching,setPokemonData:n,pokemonsOfType:l,setPokemonsOfType:u,setErrorMessage:p,setTypeGridLoading:d,pokemonLoading:g})]})};var E=function(e){var t=e.data,n=e.setData,o=e.myCollection,s=e.setMyCollection,c=e.setErrorMessage,r=e.isCollectionDisplayed,i=e.setIscollectionDisplayed,l=e.setPokemonLoading,u=Object(a.useRef)(null),p=Object(a.useRef)(null);Object(a.useEffect)((function(){y(o,s,c)}),[]),Object(a.useEffect)((function(){r?(p.current.style.display="grid",u.current.innerText="Hide My Collection"):(p.current.style.display="none",u.current.innerText="View My Collection")}),[r]);var d=t.pokemonData,g=function(e){console.log(d),b(d,o,s,c),i(!0)},m=function(e){console.log(o),i(!r)},f=function(e){var t=e.target.getAttribute("pokemonid");console.log(t),O(t,s,c)},h=function(e){var a=e.target.getAttribute("name");j(t,n,a,c,l)};return 0===o.length?Object(C.jsxs)("div",{className:"collection-section",children:[Object(C.jsx)("div",{ref:p,className:"my-empty-collection lvl1",children:Object(C.jsx)("span",{children:"Collection is empty..."})}),Object(C.jsx)("button",{ref:u,className:"btn btn-primary",onClick:m,children:"View My Collection"}),Object(C.jsx)("button",{className:"btn btn-primary",onClick:g,children:"Catch ".concat(t.pokemonData.name,"!")})]}):Object(C.jsxs)("div",{className:"collection-section",children:[Object(C.jsx)("div",{ref:p,className:"my-collection lvl1",children:o.map((function(e,t){return Object(C.jsxs)("div",{className:"card text-white bg-primary",children:[Object(C.jsx)("span",{className:"card-header",children:e.name}),Object(C.jsx)("img",{src:e.sprites.front_default,alt:"pokemon",onMouseEnter:function(t){return t.target.src=e.sprites.back_default},onMouseLeave:function(t){return t.target.src=e.sprites.front_default},name:e.name,onClick:h}),Object(C.jsx)("button",{className:"btn btn-warning",pokemonid:e.id,onClick:f,children:"Release"})]},"collection-pokemon-".concat(t))}))}),Object(C.jsx)("button",{ref:u,className:"btn btn-primary",onClick:m,children:"View My Collection"}),Object(C.jsx)("button",{className:"btn btn-primary",onClick:g,children:"Catch ".concat(t.pokemonData.name,"!")})]})};n(68);var M=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(!1),c=Object(r.a)(s,2),i=c[0],l=c[1],u=Object(a.useState)(!1),p=Object(r.a)(u,2),d=p[0],g=p[1],m=Object(a.useState)(""),h=Object(r.a)(m,2),b=h[0],y=h[1],O=Object(a.useState)([]),k=Object(r.a)(O,2),v=k[0],x=k[1],T=Object(a.useState)([]),D=Object(r.a)(T,2),M=D[0],S=D[1],L=Object(a.useState)("pikachu"),F=Object(r.a)(L,2),P=F[0],_=F[1],B=Object(a.useState)(0),G=Object(r.a)(B,2),I=G[0],V=G[1],A=Object(a.useState)({pokemonData:{id:null,name:"",height:null,weight:null,types:[],sprites:{other:{dream_world:{}}}},isFetching:!1}),R=Object(r.a)(A,2),q=R[0],J=R[1],H=Object(a.useState)([]),U=Object(r.a)(H,2),z=U[0],K=U[1],Q=Object(a.useState)([]),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=Object(a.useRef)(null);return Object(a.useEffect)((function(){Z.current.style.display=""===b?"none":"block"}),[b]),Object(a.useEffect)((function(){f(S,"limit=800",y),window.addEventListener("click",(function(e){document.querySelector(".suggestions").style.display="none",y("")}))}),[]),Object(a.useEffect)((function(){j(q,J,P,y,o)}),[I]),Object(a.useEffect)((function(){console.log("input: ",P);var e=M.filter((function(e){return e.includes(P)}));x(e)}),[P]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)("div",{className:"pokemon-and-collection",children:[Object(C.jsx)(N,{data:q,setData:J,inputValue:P,handleInputChange:function(e){_(e.target.value),document.querySelector(".suggestions").style.display="block"},searchSuggestions:v,searchButtonClickCount:I,setSearchButtonClickCount:V,setInputValue:_,pokemonsOfType:z,setPokemonsOfType:K,setErrorMessage:y,setTypeGridLoading:l,pokemonLoading:n}),Object(C.jsx)(E,{data:q,setData:J,myCollection:X,setMyCollection:Y,setErrorMessage:y,isCollectionDisplayed:d,setIscollectionDisplayed:g,setPokemonLoading:o})]}),Object(C.jsx)("div",{ref:Z,className:"alert alert-danger alert-dismissible fade show",children:b}),Object(C.jsx)(w,{pokemonsOfType:z,data:q,typeGridLoading:i,setData:J,setErrorMessage:y,setPokemonLoading:o})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};c.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.af1c2e75.chunk.js.map