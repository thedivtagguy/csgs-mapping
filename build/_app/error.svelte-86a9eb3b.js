import{S as D,i as H,s as I,u as v,y as E,b as S,e as y,v as b,w as d,z as P,o as u,f as q,g as m,I as R,A as N,D as z}from"./chunks/index-e5bd77dc.js";function A(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=b(l,"PRE",{});var s=d(f);a=P(s,t),s.forEach(u)},m(l,s){m(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&N(a,t)},d(l){l&&u(f)}}}function C(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=b(l,"PRE",{});var s=d(f);a=P(s,t),s.forEach(u)},m(l,s){m(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&N(a,t)},d(l){l&&u(f)}}}function j(r){let f,t,a,l,s=r[1].message+"",c,k,n,p,i=r[1].frame&&A(r),o=r[1].stack&&C(r);return{c(){f=v("h1"),t=E(r[0]),a=S(),l=v("pre"),c=E(s),k=S(),i&&i.c(),n=S(),o&&o.c(),p=y()},l(e){f=b(e,"H1",{});var _=d(f);t=P(_,r[0]),_.forEach(u),a=q(e),l=b(e,"PRE",{});var w=d(l);c=P(w,s),w.forEach(u),k=q(e),i&&i.l(e),n=q(e),o&&o.l(e),p=y()},m(e,_){m(e,f,_),R(f,t),m(e,a,_),m(e,l,_),R(l,c),m(e,k,_),i&&i.m(e,_),m(e,n,_),o&&o.m(e,_),m(e,p,_)},p(e,[_]){_&1&&N(t,e[0]),_&2&&s!==(s=e[1].message+"")&&N(c,s),e[1].frame?i?i.p(e,_):(i=A(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=C(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:z,o:z,d(e){e&&u(f),e&&u(a),e&&u(l),e&&u(k),i&&i.d(e),e&&u(n),o&&o.d(e),e&&u(p)}}}function G({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class J extends D{constructor(f){super(),H(this,f,B,j,I,{status:0,error:1})}}export{J as default,G as load};
