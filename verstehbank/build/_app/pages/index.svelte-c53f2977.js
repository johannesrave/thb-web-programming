import{S as e,i as n,s as t,e as s,t as a,c as r,a as o,g as c,d as i,b as l,f,D as u,h as $,E as h,k as m,j as d,l as g,H as p,n as k,m as v,o as x,v as w,r as b,w as j}from"../chunks/vendor-93950e72.js";import{a as y}from"../chunks/stores-e89f39a9.js";import{T as E}from"../chunks/Title-904e55a1.js";/* empty css                                                          */function A(e){let n,t,m;return{c(){n=s("div"),t=s("a"),m=a(e[1]),this.h()},l(s){n=r(s,"DIV",{});var a=o(n);t=r(a,"A",{href:!0,class:!0});var l=o(t);m=c(l,e[1]),l.forEach(i),a.forEach(i),this.h()},h(){l(t,"href",e[0]),l(t,"class","svelte-1kdjg9l")},m(e,s){f(e,n,s),u(n,t),u(t,m)},p(e,[n]){2&n&&$(m,e[1]),1&n&&l(t,"href",e[0])},i:h,o:h,d(e){e&&i(n)}}}function O(e,n,t){let{link:s}=n,{name:a}=n;return e.$$set=e=>{"link"in e&&t(0,s=e.link),"name"in e&&t(1,a=e.name)},[s,a]}class T extends e{constructor(e){super(),n(this,e,O,A,t,{link:0,name:1})}}function D(e){let n;return{c(){n=a("Onlinebanking für Menschen.")},l(e){n=c(e,"Onlinebanking für Menschen.")},m(e,t){f(e,n,t)},d(e){e&&i(n)}}}function M(e){let n,t,s,a,r,o,c,l,u;t=new E({props:{$$slots:{default:[D]},$$scope:{ctx:e}}}),a=new T({props:{link:"/banking",name:"Geld senden"}}),o=new T({props:{link:"/contacts",name:"Kontakte pflegen"}});return{c(){n=m(),d(t.$$.fragment),s=m(),d(a.$$.fragment),r=m(),d(o.$$.fragment),c=m(),l=g(),this.h()},l(e){p('[data-svelte="svelte-12tzcna"]',document.head).forEach(i),n=k(e),v(t.$$.fragment,e),s=k(e),v(a.$$.fragment,e),r=k(e),v(o.$$.fragment,e),c=k(e),l=g(),this.h()},h(){document.title="Anmeldung"},m(e,i){f(e,n,i),x(t,e,i),f(e,s,i),x(a,e,i),f(e,r,i),x(o,e,i),f(e,c,i),f(e,l,i),u=!0},p(e,[n]){const s={};2&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){u||(w(t.$$.fragment,e),w(a.$$.fragment,e),w(o.$$.fragment,e),w(false),u=!0)},o(e){b(t.$$.fragment,e),b(a.$$.fragment,e),b(o.$$.fragment,e),b(false),u=!1},d(e){e&&i(n),j(t,e),e&&i(s),j(a,e),e&&i(r),j(o,e),e&&i(c),e&&i(l)}}}var N=function(e,n,t,s){return new(t||(t=Promise))((function(a,r){function o(e){try{i(s.next(e))}catch(n){r(n)}}function c(e){try{i(s.throw(e))}catch(n){r(n)}}function i(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}i((s=s.apply(e,n||[])).next())}))};let z;function B({page:e,session:n,fetch:t,context:s}){return N(this,void 0,void 0,(function*(){return console.log(z),z?(console.log("Authenticated - NOT redirecting."),{status:200,maxage:60}):(console.log("Not auth - redirecting."),{status:302,redirect:"/login"})}))}function G(e,n,t){let{$$slots:s={},$$scope:a}=n;return e.$$set=e=>{"$$scope"in e&&t(1,a=e.$$scope)},[s,a]}y.subscribe((e=>z=e));export default class extends e{constructor(e){super(),n(this,e,G,M,t,{})}}export{B as load};
