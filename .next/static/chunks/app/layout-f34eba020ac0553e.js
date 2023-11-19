(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7343:function(e,t,r){Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.t.bind(r,7977,23)),Promise.resolve().then(r.t.bind(r,7402,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(3955);r(2310);var i=r(8121),o=r(6612),n=r(5846),s=r.n(n),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:o.Ok.map(o=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===o.name}),href:o.hash,onClick:()=>{t(o.name),r(Date.now())},children:[o.name,o.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},o.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(3955),i=r(9380);r(2310);var o=r(8136);function n(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(o.eSY,{}):(0,a.jsx)(o.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return o},default:function(){return n},useActiveSectionContext:function(){return s}});var a=r(3955),i=r(2310);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(o.Provider,{value:{activeSection:r,setActiveSection:n,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n},useTheme:function(){return s}});var a=r(3955),i=r(2310);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(n(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(n("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(o.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(n("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(n("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},6612:function(e,t,r){"use strict";r.d(t,{$c:function(){return l},Ok:function(){return s},nD:function(){return c},ZU:function(){return d}});var a=r(2310),i=r(198),o=r(2801),n=r(7782);let s=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],l=[{title:"Full-Stack Developer",location:"USA, Remote",description:"Working as a Senior Frontend Engineer. Helping organisation to deliver state of the art feature for real estate domain. Technologies Vue, Django, AWS.",icon:a.createElement(o.huN),date:"2022 - 2023"},{title:"Full-Stack Developer",location:"Lahore, PK",description:"I worked across multiple projects with an agile team as a full-stack javascript developer. I joined Invozone in the capacity of Frontend Engineer and now become a Full Stack Developer.",icon:a.createElement(o.huN),date:"2022 - 2023"},{title:"Front-End Developer",location:"Lahore, PK",description:"I worked as a Software Engineer in Programmers Force. It has headquartered in the United Kingdom. It specialise in Application Programming Interface (API) Development and Integration, Fintech Solutions, Enterprise Applications, Mobile App Development, and Big Data Processing to facilitate several corporate clients.",icon:a.createElement(i.zQU),date:"2020 - 2022"},{title:"Graduated bootcamp",location:"Lahore, PK",description:"I have a bachelor's degree in computer science. Major subjects of degree are OOP, Data Structure And Algorithms, Web Development, Compiler Construction, Operation System, Computer Networking, Data Science, Machine Learning, and Theory of Automata.",icon:a.createElement(n.qWM),date:"2020"}],c=[{title:"Highline Residential",description:"Working as a Senior Frontend Engineer. Helping organizations to deliver state-of-the-art features for the real estate domain. Technologies Vue, Django, AWS, Webpack.",tags:["Vue","Django","Ag-Grid","Webpack"],imageUrl:{src:"/_next/static/media/hlres.1becfcf0.png",height:1368,width:2866,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAYklEQVR42gUAQQqEIHBGx2QP7bIW9f8HVH4pPUR0CaOI0JlA76e6/hIRIooAgDCzUkh+HNqu1wqMMSmlGGIRaJwjayvmki5Z1vXcYr73z6+rrMUQ5sKyH5kFynMalf/OaU0vYX4vnQPdWW0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},projectUrl:"https://www.hlres.com/"},{title:"Invohub",description:"Invohub is developed for managing resources data. Such as managing resources salaries, theirs increment record, performance in different projects, attendance, remaining annual, casual, sick leaves.",tags:["React","Node","Postgress","Next","Redux"],imageUrl:{src:"/_next/static/media/rmtdev.a1084034.png",height:902,width:1143,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAfElEQVR42h3MsQ3CMBQE0PvfDgliEoSYgR0YlQUoKEnBGlRBWCJB8f8X2684XXE6weV1Our13AcF6Cp+G6fxnuTxfB8GDINAlKQqvuk/fWYhDajj9FtQECGqu8d5yft+l81zdmu6rjNjDCqoN1KEphTSonm1rrkkGhLu3ABgHUX18YSEZwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},projectUrl:"https://hub.invozone.com/"},{title:"WhistleIt",description:"I worked as a Frontend developer on this startup project for 2 years. Users can communicate just like slack.",tags:["Vue","Veutify","MongoDB","Bootsrap","Node","Docker"],imageUrl:{src:"/_next/static/media/corpcomment.3895cd42.png",height:850,width:715,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAjklEQVR42jWNzQrCQAyETdLTuhQEEfYgiJdK8RmkDyjiW1qw20P9O+wmMevPQEgG5pvAerNtd00IARFjjJe+vw7D7C+wadr9oeuKOZ7Oz8errufM7Jzz3hsB4zjdpvtytRARVSUiJKoSp6w5p8QihQUwCBGFiM2ZrNvidqMoZiH4vSwbASsQY0A/IYt+S94Lz0At1EbUSQAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},projectUrl:"https://app.whistleit.io/"},{title:"Gigimot",description:"Gigimot is online video meeting app, which gives users flexibility to arrange one to one or group recurring virtual meetings. This product is used by health and wellness coaches, teachers.",tags:["Vue","Node","Postgres"],imageUrl:{src:"/_next/static/media/wordanalytics.f29f0942.png",height:933,width:1375,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAaElEQVR42k3GsQ3CQBBFwb+wSHAiQpRAQDs0RzsktEBEgERGAZx1Pu8+B0480dhV97MOl1v5/tqnmp/ynVLZ2PPxKse97zxRwH8cMautG6CVFgFEpvc+uW9BJiHVoYEiwxMSBMjQEglmS8hA9Pou4NEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},projectUrl:"https://gigimot.com/"}],d=["HTML","CSS","JavaScript","TypeScript","React","Next.js","Node.js","Git","Vue","Angular","Tailwind","MongoDB","Redux","GraphQL","AWS","Express","PostgreSQL","CI/CD Jenkins","Docker","Kubernetes"]},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_a64ecd', '__Inter_Fallback_a64ecd'",fontStyle:"normal"},className:"__className_a64ecd"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return L},ErrorIcon:function(){return V},LoaderIcon:function(){return G},ToastBar:function(){return ee},ToastIcon:function(){return K},Toaster:function(){return ei},default:function(){return eo},resolveValue:function(){return k},toast:function(){return M},useToaster:function(){return H},useToasterStore:function(){return Q}});var o,n=r(2310);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?p(n,o):o+"{"+p(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=p(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,i)=>{var o;let n=f(e),s=m[n]||(m[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!m[s]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[s]=p(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&m.g?m.g:null;return r&&(m.g=m[s]),o=m[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),s},g=(e,t,r)=>e.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,A,v,x=b.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;r.p=Object.assign({theme:A&&A()},s),r.o=/ *go\d+/.test(l),s.className=b.apply(r,a)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),y(c,s)}return t?t(i):i}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e,j=(a=0,()=>(++a).toString()),S=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},C=new Map,I=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),R({type:4,toastId:e})},1e3);C.set(e,t)},N=e=>{let t=C.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&N(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?D(e,{type:1,toast:r}):D(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},P=[],U={toasts:[],pausedAt:void 0},R=e=>{U=D(U,e),P.forEach(e=>{e(U)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Q=(e={})=>{let[t,r]=(0,n.useState)(U);(0,n.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),B=e=>(t,r)=>{let a=z(t,e,r);return R({type:2,toast:a}),a.id},M=(e,t)=>B("blank")(e,t);M.error=B("error"),M.success=B("success"),M.loading=B("loading"),M.custom=B("custom"),M.dismiss=e=>{R({type:3,toastId:e})},M.remove=e=>R({type:4,toastId:e}),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(M.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{M.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var T=(e,t)=>{R({type:1,toast:{id:e,height:t}})},F=()=>{R({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=Q(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&R({type:6,time:Date.now()})},[r]),i=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:T,startPause:F,endPause:a,calculateOffset:i}}},V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,L=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,_=w("div")`
  position: absolute;
`,W=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement($,null,t):t:"blank"===r?null:n.createElement(W,null,n.createElement(G,{...a}),"loading"!==r&&n.createElement(_,null,"error"===r?n.createElement(V,{...a}):n.createElement(L,{...a})))},J=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,q=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(r),Y(r)];return{animation:t?`${x(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(K,{toast:e}),s=n.createElement(Z,{...e.ariaProps},k(e.message,e));return n.createElement(q,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});o=n.createElement,p.p=void 0,y=o,A=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=H(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,s=er(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?k(r.message,r):i?i(r):n.createElement(ee,{toast:r,position:o}))}))},eo=M}},function(e){e.O(0,[680,296,166,269,823,704,801,744],function(){return e(e.s=7343)}),_N_E=e.O()}]);