function E(){}const _t=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return t&&typeof t=="object"&&typeof t.then=="function"}function et(t){return t()}function X(){return Object.create(null)}function S(t){t.forEach(et)}function B(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Jt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function mt(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t){let e;return nt(t,n=>e=n)(),e}function Qt(t,e,n){t.$$.on_destroy.push(nt(e,n))}function Ut(t,e,n,i){if(t){const s=it(t,e,n,i);return t[0](s)}}function it(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,o){if(s){const r=it(e,n,i,o);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function te(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ee(t,e,n){return t.set(n),e}function ne(t){return t&&B(t.destroy)?t.destroy:E}const rt=typeof window!="undefined";let pt=rt?()=>window.performance.now():()=>Date.now(),K=rt?t=>requestAnimationFrame(t):E;const N=new Set;function st(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&K(st)}function yt(t){let e;return N.size===0&&K(st),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let H=!1;function gt(){H=!0}function bt(){H=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:wt(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(r[c],_)}}function xt(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=lt("style");return kt(ct(t),e),e.sheet}function kt(t,e){return xt(t.head||t,e),e.sheet}function Et(t,e){if(H){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){H&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function se(){return Q(" ")}function ce(){return Q("")}function oe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function le(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){At(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function at(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ue(t,e,n){return at(t,e,n,lt)}function ae(t,e,n){return at(t,e,n,Nt)}function Ct(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function fe(t){return Ct(t," ")}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function me(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function ge(t,e){return new t(e)}const R=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:vt(e),rules:{}};return R.set(t,n),n}function Y(t,e,n,i,s,o,r,l=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*o(p);u+=p*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Mt(_)}_${l}`,a=ct(t),{stylesheet:h,rules:d}=R.get(a)||Tt(a,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,L+=1,f}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||qt())}function qt(){K(()=>{L||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ot(e)}),R.clear())})}let j;function $(t){j=t}function F(){if(!j)throw new Error("Function called outside component initialization");return j}function be(t){F().$$.on_mount.push(t)}function we(t){F().$$.after_update.push(t)}function $e(t,e){return F().$$.context.set(t,e),e}function xe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],Z=[],O=[],tt=[],Ot=Promise.resolve();let J=!1;function Pt(){J||(J=!0,Ot.then(U))}function z(t){O.push(t)}const W=new Set;let q=0;function U(){const t=j;do{for(;q<C.length;){const e=C[q];q++,$(e),Rt(e.$$)}for($(null),C.length=0,q=0;Z.length;)Z.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];W.has(n)||(W.add(n),n())}O.length=0}while(C.length);for(;tt.length;)tt.pop()();J=!1,W.clear(),$(t)}function Rt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let A;function Lt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function G(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const P=new Set;let x;function zt(){x={r:0,c:[],p:x}}function Bt(){x.r||S(x.c),x=x.p}function V(t,e){t&&t.i&&(P.delete(t),t.i(e))}function ft(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),x.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ht={duration:0};function ve(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,l=null,c=null;function u(){c&&Dt(t,c)}function _(a,h){const d=a.b-o;return h*=Math.abs(d),{a:o,b:a.b,d,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:d=300,easing:y=_t,tick:p=E,css:g}=s||Ht,v={start:pt()+h,b:a};a||(v.group=x,x.r+=1),r||l?l=v:(g&&(u(),c=Y(t,o,a,d,h,y,g)),a&&p(0,1),r=_(v,d),z(()=>G(t,a,"start")),yt(k=>{if(l&&k>l.start&&(r=_(l,d),l=null,G(t,r.b,"start"),g&&(u(),c=Y(t,o,r.b,r.duration,0,y,s.css))),r){if(k>=r.end)p(o=r.b,1-o),G(t,r.b,"end"),l||(r.b?u():--r.group.r||S(r.group.c)),r=null;else if(k>=r.start){const M=k-r.start;o=r.a+r.d*y(M/r.duration),p(o,1-o)}}return!!(r||l)}))}return{run(a){B(s)?Lt().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=l=null}}}function ke(t,e){const n=e.token={};function i(s,o,r,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=l);const u=s&&(e.current=s)(c);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,a)=>{a!==o&&f&&(zt(),ft(f,1,1,()=>{e.blocks[a]===f&&(e.blocks[a]=null)}),Bt())}):e.block.d(1),u.c(),V(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[o]=u),_&&U()}if(ht(t)){const s=F();if(t.then(o=>{$(s),i(e.then,1,e.value,o),$(null)},o=>{if($(s),i(e.catch,2,e.error,o),$(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ee(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Ne=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Se(t,e){ft(t,1,1,()=>{e.delete(t.key)})}function Ae(t,e,n,i,s,o,r,l,c,u,_,f){let a=t.length,h=o.length,d=a;const y={};for(;d--;)y[t[d].key]=d;const p=[],g=new Map,v=new Map;for(d=h;d--;){const m=f(s,o,d),b=n(m);let w=r.get(b);w?i&&w.p(m,e):(w=u(b,m),w.c()),g.set(b,p[d]=w),b in y&&v.set(b,Math.abs(d-y[b]))}const k=new Set,M=new Set;function I(m){V(m,1),m.m(l,_),r.set(m.key,m),_=m.first,h--}for(;a&&h;){const m=p[h-1],b=t[a-1],w=m.key,T=b.key;m===b?(_=m.first,a--,h--):g.has(T)?!r.has(w)||k.has(w)?I(m):M.has(T)?a--:v.get(w)>v.get(T)?(M.add(w),I(m)):(k.add(T),a--):(c(b,r),a--)}for(;a--;){const m=t[a];g.has(m.key)||c(m,r)}for(;h;)I(p[h-1]);return p}function Ce(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function je(t){return typeof t=="object"&&t!==null?t:{}}function Me(t){t&&t.c()}function Te(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(et).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),o.forEach(z)}function It(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(C.push(t),Pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,i,s,o,r,l=[-1]){const c=j;$(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...h)=>{const d=h.length?h[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),_&&Wt(t,f)),a}):[],u.update(),_=!0,S(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const f=St(e.target);u.fragment&&u.fragment.l(f),f.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&V(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),bt(),U()}$(c)}class qe{$destroy(){It(this,1),this.$destroy=E}$on(e,n){if(!B(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Z as $,_e as A,dt as B,zt as C,E as D,Ut as E,Xt as F,Yt as G,Vt as H,Et as I,Nt as J,ae as K,pe as L,oe as M,S as N,Kt as O,Qt as P,Ae as Q,ee as R,qe as S,Se as T,ke as U,Ee as V,z as W,ve as X,xe as Y,he as Z,re as _,Me as a,me as a0,de as a1,ye as a2,ne as a3,Ne as a4,Jt as a5,te as a6,Zt as a7,se as b,ge as c,Te as d,ce as e,fe as f,ie as g,Ce as h,De as i,je as j,Bt as k,V as l,Ft as m,It as n,ot as o,$e as p,we as q,be as r,Gt as s,ft as t,lt as u,ue as v,St as w,le as x,Q as y,Ct as z};
