(function(){"use strict";var e={1176:function(e,n,t){var r=t(5130),o=t(6768);function i(e,n){const t=(0,o.g2)("router-link"),r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",null,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1}),(0,o.eW)(" | "),(0,o.bF)(t,{to:"/ResearchProject"},{default:(0,o.k6)((()=>[(0,o.eW)("Project")])),_:1}),(0,o.eW)(" | "),(0,o.bF)(t,{to:"/Music"},{default:(0,o.k6)((()=>[(0,o.eW)("Music")])),_:1}),(0,o.eW)(" | "),(0,o.bF)(t,{to:"/Resume"},{default:(0,o.k6)((()=>[(0,o.eW)("CV")])),_:1}),(0,o.eW)(" | ")]),(0,o.bF)(r)],64)}var a=t(1241);const u={},c=(0,a.A)(u,[["render",i]]);var s=c,l=t(1387);const f={class:"home"};function d(e,n,t,r,i,a){const u=(0,o.g2)("MyProfile");return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.bF)(u,{msg:"Welcome to Ruiyang Zhou's website"})])}var m=t(4232);const p=e=>((0,o.Qi)("data-v-c09f046a"),e=e(),(0,o.jt)(),e),h={class:"profile-container"},g=["href"],v=p((()=>(0,o.Lk)("i",{class:"fab fa-linkedin"},null,-1))),b=[v],y=["href"],k=p((()=>(0,o.Lk)("i",{class:"fab fa-github"},null,-1))),j=[k],w=["href"],P=p((()=>(0,o.Lk)("i",{class:"fab fa-instagram"},null,-1))),L=[P],C=p((()=>(0,o.Lk)("div",{class:"MyProfile"},[(0,o.Lk)("p",null," Hi there! I'm Ruiyang Zhou, and this is my personal website. Basically, this is a profortlio website showing my area of study, my projects, and even my music. I am A current student in University of Virginia. Majored in Computer Science(B.A). I am interested in many different fields like computer architecture, system, and digital signal processing. In addition to computer science, I also put a lot of effort learning music including production and mixing. Therefore, I also enjoy investigating into the intersection of computer science and music. Here are some of my basic information: "),(0,o.Lk)("p",null," Email: rz3zv@virginia.edu Tel: 434-257-7610"),(0,o.Lk)("p",null," Education: University of Virginia, Bachelor of Art, Computer Science"),(0,o.Lk)("p",null," Field of Interest: Computer architecture,Computer System, Digital Signal Processing, Music production, Sound Synthesis, Audio Engineering etc."),(0,o.Lk)("p",null," Programming Languages: C++, Python, X86 Assembly, HTML, Java, Javascript "),(0,o.Lk)("p",null," Technology/Environment: Xilinx Vitis, Linux, JUCE, Django, OpenCL, Vivado, Vue.js, SolidWorks, Ardruino, Latex, Ableton, Pure data"),(0,o.Lk)("p",null," Courses Taken : Software Development Method, Discrete Math, Program and Data Representation, Intro to Cybersecurity, Advanced Software Development, Discrete Math and Theory 2 , Data Structure and Algorithm 2, Computer Architecture, Hardware Security, Digital Signal Processing, Operating System.")],-1))),S=p((()=>(0,o.Lk)("h4",null,"This page will continue update",-1)));function A(e,n,t,r,i,a){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("h1",null,(0,m.v_)(t.msg),1),(0,o.Lk)("div",h,[(0,o.Lk)("div",null,[(0,o.Lk)("a",{href:i.linkedInUrl,target:"_blank",rel:"noopener noreferrer"},b,8,g),(0,o.Lk)("a",{href:i.githubUrl,target:"_blank",rel:"noopener noreferrer"},j,8,y),(0,o.Lk)("a",{href:i.instagramUrl,target:"_blank",rel:"noopener noreferrer"},L,8,w)]),C,S])],64)}var E={name:"MyProfile",props:{msg:String},data(){return{linkedInUrl:"https://www.linkedin.com/in/ruiyang-zhou",githubUrl:"https://github.com/Rayz0722",instagramUrl:"https://www.instagram.com/rayzry22/"}}};const M=(0,a.A)(E,[["render",A],["__scopeId","data-v-c09f046a"]]);var _=M,O={name:"HomeView",components:{MyProfile:_}};const R=(0,a.A)(O,[["render",d]]);var T=R;const F=[{path:"/",name:"home",component:T},{path:"/ResearchProject",name:"ResearchProject",component:()=>t.e(611).then(t.bind(t,3669))},{path:"/Music",name:"Music",component:()=>t.e(636).then(t.bind(t,6567))},{path:"/Resume",name:"Resume",component:()=>t.e(594).then(t.bind(t,7833))},{path:"/ResearchProject/project1",name:"Project1View",component:()=>t.e(447).then(t.bind(t,2525))},{path:"/ResearchProject/project2",name:"Project2View",component:()=>t.e(20).then(t.bind(t,3509))},{path:"/ResearchProject/project3",name:"Project3View",component:()=>t.e(829).then(t.bind(t,4381))},{path:"/ResearchProject/project4",name:"Project4View",component:()=>t.e(829).then(t.bind(t,9591))}],I=(0,l.aE)({history:(0,l.LA)("/"),routes:F});var x=I,D=t(782),V=(0,D.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.Ef)(s).use(V).use(x).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+{20:"Project2",447:"Project1",594:"about",611:"ResearchProject",636:"Music",829:"Project3"}[e]+"."+{20:"2a4083bc",447:"2ad83862",594:"66e98fa3",611:"22ddaf06",636:"3d697264",829:"d0f93c21"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+{20:"Project2",447:"Project1",611:"ResearchProject",636:"Music",829:"Project3"}[e]+"."+{20:"b8951741",447:"b46d0dc1",611:"ef8cb679",636:"97a70427",829:"aa51c5f4"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="my-web:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={20:1,447:1,611:1,636:1,829:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkmy_web"]=self["webpackChunkmy_web"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1176)}));r=t.O(r)})();
//# sourceMappingURL=app.3812d845.js.map