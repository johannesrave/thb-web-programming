import{S as s,i as e,s as a,e as c,t as r,k as l,c as t,a as n,g as h,d as o,n as i,b as f,f as d,D as v,E as m,F as u,j as $,m as p,o as E,G as g,v as w,r as N,w as A}from"../chunks/vendor-63b5ff16.js";function I(s){let e,a,u,$,p,E,g,w,N,A;return{c(){e=c("div"),a=c("nav"),u=c("a"),$=r("INFO"),p=l(),E=c("a"),g=r("SUCHEN"),w=l(),N=c("a"),A=r("KAUFEN"),this.h()},l(s){e=t(s,"DIV",{class:!0});var c=n(e);a=t(c,"NAV",{class:!0});var r=n(a);u=t(r,"A",{href:!0,class:!0});var l=n(u);$=h(l,"INFO"),l.forEach(o),p=i(r),E=t(r,"A",{href:!0,class:!0});var f=n(E);g=h(f,"SUCHEN"),f.forEach(o),w=i(r),N=t(r,"A",{href:!0,class:!0});var d=n(N);A=h(d,"KAUFEN"),d.forEach(o),r.forEach(o),c.forEach(o),this.h()},h(){f(u,"href","/"),f(u,"class","svelte-17dmhg6"),f(E,"href","/search"),f(E,"class","svelte-17dmhg6"),f(N,"href","/shop"),f(N,"class","svelte-17dmhg6"),f(a,"class","flex flex-col place-items-stretch w-64 svelte-17dmhg6"),f(e,"class","svelte-17dmhg6")},m(s,c){d(s,e,c),v(e,a),v(a,u),v(u,$),v(a,p),v(a,E),v(E,g),v(a,w),v(a,N),v(N,A)},p:m,i:m,o:m,d(s){s&&o(e)}}}class x extends s{constructor(s){super(),e(this,s,null,I,a,{})}}function D(s){let e,a,r,h,m,I;const D=s[1].default,F=u(D,s,s[0],null);return m=new x({}),{c(){e=c("div"),a=c("div"),F&&F.c(),r=l(),h=c("div"),$(m.$$.fragment),this.h()},l(s){e=t(s,"DIV",{class:!0});var c=n(e);a=t(c,"DIV",{id:!0,class:!0});var l=n(a);F&&F.l(l),l.forEach(o),r=i(c),h=t(c,"DIV",{id:!0,class:!0});var f=n(h);p(m.$$.fragment,f),f.forEach(o),c.forEach(o),this.h()},h(){f(a,"id","main-content"),f(a,"class","w-screen h-screen overflow-hidden svelte-i9w56d"),f(h,"id","main-menu"),f(h,"class","w-screen h-screen svelte-i9w56d"),f(e,"class","w-screen h-screen grid grid-cols-1 place-content-center place-items-center svelte-i9w56d")},m(s,c){d(s,e,c),v(e,a),F&&F.m(a,null),v(e,r),v(e,h),E(m,h,null),I=!0},p(s,[e]){F&&F.p&&(!I||1&e)&&g(F,D,s,s[0],e,null,null)},i(s){I||(w(F,s),w(m.$$.fragment,s),I=!0)},o(s){N(F,s),N(m.$$.fragment,s),I=!1},d(s){s&&o(e),F&&F.d(s),A(m)}}}function F(s,e,a){let{$$slots:c={},$$scope:r}=e;return s.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,c]}export default class extends s{constructor(s){super(),e(this,s,F,D,a,{})}}