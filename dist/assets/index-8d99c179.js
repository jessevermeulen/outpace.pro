(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function g(){}function P(e){return e()}function N(){return Object.create(null)}function x(e){e.forEach(P)}function M(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function q(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function S(){return w(" ")}function H(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.data!==t&&(e.data=t)}let O;function _(e){O=e}const h=[],j=[];let p=[];const C=[],z=Promise.resolve();let E=!1;function D(){E||(E=!0,z.then(B))}function k(e){p.push(e)}const v=new Set;let d=0;function B(){if(d!==0)return;const e=O;do{try{for(;d<h.length;){const t=h[d];d++,_(t),G(t.$$)}}catch(t){throw h.length=0,d=0,t}for(_(null),h.length=0,d=0;j.length;)j.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];v.has(n)||(v.add(n),n())}p.length=0}while(h.length);for(;C.length;)C.pop()();E=!1,v.clear(),_(e)}function G(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}function J(e){const t=[],n=[];p.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),p=t}const Q=new Set;function R(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function U(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||k(()=>{const i=e.$$.on_mount.map(P).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...i):x(i),e.$$.on_mount=[]}),c.forEach(k)}function W(e,t){const n=e.$$;n.fragment!==null&&(J(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(h.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,o,r,c,i,y=[-1]){const u=O;_(e);const s=e.$$={fragment:null,ctx:[],props:c,update:g,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:N(),dirty:y,skip_bound:!1,root:t.target||u.$$.root};i&&i(s.root);let m=!1;if(s.ctx=n?n(e,t.props||{},(l,a,...L)=>{const A=L.length?L[0]:a;return s.ctx&&r(s.ctx[l],s.ctx[l]=A)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](A),m&&X(e,l)),a}):[],s.update(),m=!0,x(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const l=K(t.target);s.fragment&&s.fragment.l(l),l.forEach(T)}else s.fragment&&s.fragment.c();t.intro&&R(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),B()}_(u)}class Z{$destroy(){W(this,1),this.$destroy=g}$on(t,n){if(!M(n))return g;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ee(e){let t,n,o,r,c,i,y,u,s,m;return{c(){t=b("main"),n=b("h1"),n.textContent="Svelte + Tailwind App",o=S(),r=b("p"),r.innerHTML='Visit <a href="https://svelte.dev" class="text-blue-500 hover:underline">svelte.dev</a> to learn how to build Svelte apps.',c=S(),i=b("button"),y=w("Clicks: "),u=w(e[0]),$(n,"class","text-4xl font-bold mb-4"),$(r,"class","mb-4"),$(i,"class","px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"),$(t,"class","flex flex-col items-center justify-center min-h-screen bg-gray-100")},m(l,a){F(l,t,a),f(t,n),f(t,o),f(t,r),f(t,c),f(t,i),f(i,y),f(i,u),s||(m=H(i,"click",e[1]),s=!0)},p(l,[a]){a&1&&V(u,l[0])},i:g,o:g,d(l){l&&T(t),s=!1,m()}}}function te(e,t,n){let o=0;return[o,()=>n(0,o+=1)]}class ne extends Z{constructor(t){super(),Y(this,t,te,ee,I,{})}}new ne({target:document.getElementById("app")});
