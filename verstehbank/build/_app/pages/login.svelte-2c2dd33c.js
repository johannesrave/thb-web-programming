import{S as e,i as s,s as a,k as t,j as n,e as r,t as l,l as o,H as i,d as c,n as u,m as f,c as d,a as m,g as p,b as h,f as $,o as g,D as b,I as v,v as B,r as w,w as k,K as y}from"../chunks/vendor-93950e72.js";import{a as E}from"../chunks/stores-e89f39a9.js";import{T as I}from"../chunks/Title-904e55a1.js";import{r as A}from"../chunks/singletons-bb9012b7.js";const T=async function(e,s){return A.goto(e,s,[])};function z(e){let s;return{c(){s=l("Onlinebanking für Menschen.")},l(e){s=p(e,"Onlinebanking für Menschen.")},m(e,a){$(e,s,a)},d(e){e&&c(s)}}}function O(e){let s,a,y,E,A,T,O,j,x,N,P,V,H,L,S,D,M,U,q,C,F,K,R,W,G,J;a=new I({props:{$$slots:{default:[z]},$$scope:{ctx:e}}});return{c(){s=t(),n(a.$$.fragment),y=t(),E=r("form"),A=r("div"),T=r("label"),O=l("Benutzername:"),j=t(),x=r("input"),N=t(),P=r("div"),V=r("label"),H=l("Passwort:"),L=t(),S=r("input"),D=t(),M=r("button"),U=l("Anmelden"),q=t(),C=r("a"),F=l("Hauptseite"),K=t(),R=o(),this.h()},l(e){i('[data-svelte="svelte-12tzcna"]',document.head).forEach(c),s=u(e),f(a.$$.fragment,e),y=u(e),E=d(e,"FORM",{class:!0});var t=m(E);A=d(t,"DIV",{class:!0});var n=m(A);T=d(n,"LABEL",{for:!0,class:!0});var r=m(T);O=p(r,"Benutzername:"),r.forEach(c),j=u(n),x=d(n,"INPUT",{type:!0,placeholder:!0,name:!0,id:!0,title:!0}),n.forEach(c),N=u(t),P=d(t,"DIV",{class:!0});var l=m(P);V=d(l,"LABEL",{for:!0,class:!0});var h=m(V);H=p(h,"Passwort:"),h.forEach(c),L=u(l),S=d(l,"INPUT",{type:!0,placeholder:!0,name:!0,id:!0,title:!0}),l.forEach(c),D=u(t),M=d(t,"BUTTON",{type:!0});var $=m(M);U=p($,"Anmelden"),$.forEach(c),q=u(t),C=d(t,"A",{href:!0});var g=m(C);F=p(g,"Hauptseite"),g.forEach(c),t.forEach(c),K=u(e),R=o(),this.h()},h(){document.title="Anmeldung",h(T,"for","name"),h(T,"class","required"),h(x,"type","text"),h(x,"placeholder","beateweber"),h(x,"name","name"),h(x,"id","name"),h(x,"title","Bitte geben Sie Ihren Benutzernamen ein."),h(A,"class","svelte-afgv91"),h(V,"for","password"),h(V,"class","required"),h(S,"type","password"),h(S,"placeholder","********"),h(S,"name","password"),h(S,"id","password"),h(S,"title","Bitte geben Sie das Passwort für die Anmeldung beim Online Banking ein."),h(P,"class","svelte-afgv91"),h(M,"type","submit"),h(C,"href","/"),h(E,"class","svelte-afgv91")},m(t,n){$(t,s,n),g(a,t,n),$(t,y,n),$(t,E,n),b(E,A),b(A,T),b(T,O),b(A,j),b(A,x),e[4](x),b(E,N),b(E,P),b(P,V),b(V,H),b(P,L),b(P,S),e[5](S),b(E,D),b(E,M),b(M,U),b(E,q),b(E,C),b(C,F),$(t,K,n),$(t,R,n),W=!0,G||(J=v(E,"submit",e[2]),G=!0)},p(e,[s]){const t={};64&s&&(t.$$scope={dirty:s,ctx:e}),a.$set(t)},i(e){W||(B(a.$$.fragment,e),B(false),W=!0)},o(e){w(a.$$.fragment,e),w(false),W=!1},d(t){t&&c(s),k(a,t),t&&c(y),t&&c(E),e[4](null),e[5](null),t&&c(K),t&&c(R),G=!1,J()}}}function j(e,s,a){let t,n,{$$slots:r={},$$scope:l}=s;return e.$$set=e=>{"$$scope"in e&&a(6,l=e.$$scope)},[t,n,()=>{"beateweber"===t.value?(console.log("Nutzername",t.value),E.set(!0),T("/")):(t.setCustomValidity("Bitte geben Sie Ihren Benutzernamen für die Online Banking Webseite der Verstehbank ein."),t.reportValidity(),alert("NICHT eingeloggt!"))},r,function(e){y[e?"unshift":"push"]((()=>{t=e,a(0,t)}))},function(e){y[e?"unshift":"push"]((()=>{n=e,a(1,n)}))},l]}export default class extends e{constructor(e){super(),s(this,e,j,O,a,{})}}
