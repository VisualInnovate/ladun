import{B as ge,y as b,f as _,x,H as X,C as Ie,J as De,E as Oe,A as ue,D as de,v as Ae,G as $,o as u,q as pe,w as R,d as M,u as K,c as g,b as H,a as e,F as z,_ as Ee,by as Be,r as I,i as Pe,l as T,t as a,j as V,k as D}from"./main-e0afe917.js";import{u as Ve,N as ze,M as Re,U as Fe,A as Ue,c as He,L as Xe}from"./flowbite-vue-616ac164.js";import{_ as Ye}from"./Navbar-8682b917.js";import{_ as We}from"./DarkFooter-75b6c7ad.js";/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const w={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Ce={itemsToShow:{default:w.itemsToShow,type:Number},itemsToScroll:{default:w.itemsToScroll,type:Number},wrapAround:{default:w.wrapAround,type:Boolean},throttle:{default:w.throttle,type:Number},snapAlign:{default:w.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:w.transition,type:Number},breakpoints:{default:w.breakpoints,type:Object},autoplay:{default:w.autoplay,type:Number},pauseAutoplayOnHover:{default:w.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:w.mouseDrag,type:Boolean},touchDrag:{default:w.touchDrag,type:Boolean},dir:{default:w.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function Ge({config:t,slidesCount:s}){const{snapAlign:n,wrapAround:c,itemsToShow:o=1}=t;if(c)return Math.max(s-1,0);let r;switch(n){case"start":r=s-o;break;case"end":r=s-1;break;case"center":case"center-odd":r=s-Math.ceil((o-.5)/2);break;case"center-even":r=s-Math.ceil(o/2);break;default:r=0;break}return Math.max(r,0)}function qe({config:t,slidesCount:s}){const{wrapAround:n,snapAlign:c,itemsToShow:o=1}=t;let r=0;if(n||o>s)return r;switch(c){case"start":r=0;break;case"end":r=o-1;break;case"center":case"center-odd":r=Math.floor((o-1)/2);break;case"center-even":r=Math.floor((o-2)/2);break;default:r=0;break}return r}function _e({val:t,max:s,min:n}){return s<n?t:Math.min(Math.max(t,n),s)}function Je({config:t,currentSlide:s,slidesCount:n}){const{snapAlign:c,wrapAround:o,itemsToShow:r=1}=t;let p=s;switch(c){case"center":case"center-odd":p-=(r-1)/2;break;case"center-even":p-=(r-2)/2;break;case"end":p-=r-1;break}return o?p:_e({val:p,max:n-r,min:0})}function Ke(t){var s,n,c,o;return t?((s=t[0])===null||s===void 0?void 0:s.children)==="v-if"||((c=(n=t[0])===null||n===void 0?void 0:n.type)===null||c===void 0?void 0:c.name)==="CarouselSlide"?t.filter(r=>{var p;return((p=r.type)===null||p===void 0?void 0:p.name)==="CarouselSlide"}):((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function Q({val:t,max:s,min:n=0}){return t>s?Q({val:t-(s+1),max:s,min:n}):t<n?Q({val:t+(s+1),max:s,min:n}):t}function Qe(t,s){let n;return s?function(...c){const o=this;n||(t.apply(o,c),n=!0,setTimeout(()=>n=!1,s))}:t}function Ze(t,s){let n;return function(...c){n&&clearTimeout(n),n=setTimeout(()=>{t(...c),n=null},s)}}var et=ge({name:"ARIA",setup(){const t=b("currentSlide",_(0)),s=b("slidesCount",_(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${t.value+1} of ${s.value}`)}}),tt=ge({name:"Carousel",props:Ce,setup(t,{slots:s,emit:n,expose:c}){var o;const r=_(null),p=_([]),y=_(0),f=_(0);let j=_({}),A=Object.assign({},w);const i=X(Object.assign({},A)),d=_((o=t.modelValue)!==null&&o!==void 0?o:0),N=_(0),B=_(0),k=_(0),m=_(0);let C,Z;$("config",i),$("slidesCount",f),$("currentSlide",d),$("maxSlide",k),$("minSlide",m),$("slideWidth",y);function ee(){const l=Object.assign(Object.assign({},t),t.settings);j=_(Object.assign({},l.breakpoints)),A=Object.assign(Object.assign({},l),{settings:void 0,breakpoints:void 0}),fe(A)}function Y(){const l=Object.keys(j.value).map(v=>Number(v)).sort((v,L)=>+L-+v);let h=Object.assign({},A);l.some(v=>window.matchMedia(`(min-width: ${v}px)`).matches?(h=Object.assign(Object.assign({},h),j.value[v]),!0):!1),fe(h)}function fe(l){Object.entries(l).forEach(([h,v])=>i[h]=v)}const he=Ze(()=>{Object.keys(j.value).length&&(Y(),F()),W()},16);function W(){if(!r.value)return;const l=r.value.getBoundingClientRect();y.value=l.width/i.itemsToShow}function F(){f.value<=0||(B.value=Math.ceil((f.value-1)/2),k.value=Ge({config:i,slidesCount:f.value}),m.value=qe({config:i,slidesCount:f.value}),i.wrapAround||(d.value=_e({val:d.value,max:k.value,min:m.value})))}Ie(()=>{Object.keys(j.value).length&&Y(),De(()=>{F(),W(),Le(),n("init")}),xe(),window.addEventListener("resize",he,{passive:!0})}),Oe(()=>{Z&&clearTimeout(Z),C&&clearInterval(C),window.removeEventListener("resize",he,{passive:!0})});let S=!1;const G={x:0,y:0},q={x:0,y:0},O=X({x:0,y:0}),te=_(!1),Me=()=>{te.value=!0},Ne=()=>{te.value=!1};function ve(l){["INPUT","TEXTAREA"].includes(l.target.tagName)||(S=l.type==="touchstart",!(!S&&l.button!==0||P.value)&&(S||l.preventDefault(),G.x=S?l.touches[0].clientX:l.clientX,G.y=S?l.touches[0].clientY:l.clientY,document.addEventListener(S?"touchmove":"mousemove",oe,!0),document.addEventListener(S?"touchend":"mouseup",be,!0)))}let oe=()=>{};function Le(){var l;oe=Qe(h=>{q.x=S?h.touches[0].clientX:h.clientX,q.y=S?h.touches[0].clientY:h.clientY;const v=q.x-G.x,L=q.y-G.y;O.y=L,O.x=v},(l=i.throttle)!==null&&l!==void 0?l:16)}function be(){const l=i.dir==="rtl"?-1:1,h=Math.sign(O.x)*.4,v=Math.round(O.x/y.value+h)*l;if(v&&!S){const L=ae=>{ae.stopPropagation(),window.removeEventListener("click",L,!0)};window.addEventListener("click",L,!0)}E(d.value-v),O.x=0,O.y=0,document.removeEventListener(S?"touchmove":"mousemove",oe,!0),document.removeEventListener(S?"touchend":"mouseup",be,!0)}function xe(){!i.autoplay||i.autoplay<=0||(C=setInterval(()=>{i.pauseAutoplayOnHover&&te.value||J()},i.autoplay))}function we(){C&&(clearInterval(C),C=null),xe()}const P=_(!1);function E(l){const h=i.wrapAround?l:_e({val:l,max:k.value,min:m.value});d.value===h||P.value||(n("slide-start",{slidingToIndex:l,currentSlideIndex:d.value,prevSlideIndex:N.value,slidesCount:f.value}),P.value=!0,N.value=d.value,d.value=h,Z=setTimeout(()=>{if(i.wrapAround){const v=Q({val:h,max:k.value,min:0});v!==d.value&&(d.value=v,n("loop",{currentSlideIndex:d.value,slidingToIndex:l}))}n("update:modelValue",d.value),n("slide-end",{currentSlideIndex:d.value,prevSlideIndex:N.value,slidesCount:f.value}),P.value=!1,we()},i.transition))}function J(){E(d.value+i.itemsToScroll)}function se(){E(d.value-i.itemsToScroll)}const ye={slideTo:E,next:J,prev:se};$("nav",ye),$("isSliding",P);const ke=ue(()=>Je({config:i,currentSlide:d.value,slidesCount:f.value}));$("slidesToScroll",ke);const $e=ue(()=>{const l=i.dir==="rtl"?-1:1,h=ke.value*y.value*l;return{transform:`translateX(${O.x-h}px)`,transition:`${P.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${f.value*y.value}px`:"",width:"100%"}});function je(){ee(),Y(),F(),W(),we()}Object.keys(Ce).forEach(l=>{["modelValue"].includes(l)||de(()=>t[l],je)}),de(()=>t.modelValue,l=>{l!==d.value&&E(Number(l))}),de(f,F),ee();const Se={config:i,slidesCount:f,slideWidth:y,next:J,prev:se,slideTo:E,currentSlide:d,maxSlide:k,minSlide:m,middleSlide:B};c({updateBreakpointsConfigs:Y,updateSlidesData:F,updateSlideWidth:W,initDefaultConfigs:ee,restartCarousel:je,slideTo:E,next:J,prev:se,nav:ye,data:Se});const ne=s.default||s.slides,le=s.addons,Te=X(Se);return()=>{const l=Ke(ne==null?void 0:ne(Te)),h=(le==null?void 0:le(Te))||[];l.forEach((re,ie)=>re.props.index=ie);let v=l;if(i.wrapAround){const re=l.map((ce,U)=>Ae(ce,{index:-l.length+U,isClone:!0,key:`clone-before-${U}`})),ie=l.map((ce,U)=>Ae(ce,{index:l.length+U,isClone:!0,key:`clone-after-${U}`}));v=[...re,...l,...ie]}p.value=l,f.value=Math.max(l.length,1);const L=x("ol",{class:"carousel__track",style:$e.value,onMousedownCapture:i.mouseDrag?ve:null,onTouchstartPassiveCapture:i.touchDrag?ve:null},v),ae=x("div",{class:"carousel__viewport"},L);return x("section",{ref:r,class:{carousel:!0,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Me,onMouseleave:Ne},[ae,h,x(et)])}}});const ot={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},me=t=>{const s=t.name;if(!s||typeof s!="string")return;const n=ot[s],c=x("path",{d:n}),o=t.title||s,r=x("title",o);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[r,c])};me.props={name:String,title:String};const st=(t,{slots:s,attrs:n})=>{const{next:c,prev:o}=s||{},r=b("config",X(Object.assign({},w))),p=b("maxSlide",_(1)),y=b("minSlide",_(1)),f=b("currentSlide",_(1)),j=b("nav",{}),{dir:A,wrapAround:i}=r,d=A==="rtl",N=x("button",{type:"button",class:["carousel__prev",!i&&f.value<=y.value&&"carousel__prev--disabled",n==null?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:j.prev},(o==null?void 0:o())||x(me,{name:d?"arrowRight":"arrowLeft"})),B=x("button",{type:"button",class:["carousel__next",!i&&f.value>=p.value&&"carousel__next--disabled",n==null?void 0:n.class],"aria-label":"Navigate to next slide",onClick:j.next},(c==null?void 0:c())||x(me,{name:d?"arrowLeft":"arrowRight"}));return[N,B]},nt=()=>{const t=b("maxSlide",_(1)),s=b("minSlide",_(1)),n=b("currentSlide",_(1)),c=b("nav",{}),o=p=>Q({val:n.value,max:t.value,min:0})===p,r=[];for(let p=s.value;p<t.value+1;p++){const y=x("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(p)},"aria-label":`Navigate to slide ${p+1}`,onClick:()=>c.slideTo(p)}),f=x("li",{class:"carousel__pagination-item",key:p},y);r.push(f)}return x("ol",{class:"carousel__pagination"},r)};var lt=ge({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:s}){const n=b("config",X(Object.assign({},w))),c=b("currentSlide",_(0)),o=b("slidesToScroll",_(0)),r=b("slideWidth",_(0)),p=b("isSliding",_(!1)),y=ue(()=>({width:r.value?`${r.value}px`:"100%"})),f=()=>t.index===c.value,j=()=>t.index===c.value-1,A=()=>t.index===c.value+1,i=()=>{const d=Math.floor(o.value),N=Math.ceil(o.value+n.itemsToShow-1);return t.index>=d&&t.index<=N};return()=>{var d;return x("li",{style:y.value,class:{carousel__slide:!0,"carousel_slide--clone":t.isClone,"carousel__slide--visible":i(),"carousel__slide--active":f(),"carousel__slide--prev":j(),"carousel__slide--next":A(),"carousel__slide--sliding":p.value},"aria-hidden":!i()},(d=s.default)===null||d===void 0?void 0:d.call(s))}}});const at=["src","alt"],rt={__name:"VueCarousel",props:{items:{type:Object},msg:{type:String}},setup(t){return(s,n)=>(u(),pe(K(tt),{"items-to-show":2},{addons:R(()=>[M(K(st)),M(K(nt))]),default:R(()=>[(u(!0),g(z,null,H(t.items,(c,o)=>(u(),pe(K(lt),{key:o},{default:R(()=>[e("img",{src:c.src,alt:c.alt,class:"h-[350px] w-[500px]"},null,8,at)]),_:2},1024))),128))]),_:1}))}},it="/build/assets/real-state-management-banner-c1fa3f23.png",ct="/build/assets/icon-area-60f42131.png",dt="/build/assets/area-svgrepo-com-c4149577.png",ut="/build/assets/buildings-icon-b96f01bd.png",pt="/build/assets/pyramid-icon-957c5eb9.png",_t="/build/assets/video-real-state-management-2fee55ce.png",mt={components:{Input:Ve,Dropdown:ze,DarkFooter:We,MapPinIcon:Re,Navbar:Ye,VueCarousel:rt,Carousel:Fe,ArrowDownTrayIcon:Ue,Tabs:He,Tab:Xe,useRoute:Be},data(){return{activeTab:"",URL:"",route:"",project:{}}},methods:{getGallery(t){return t?Object.values(t).map(s=>({src:s.original_url,alt:s.name})):[]}},beforeMount(){axios.get(`/api/projects/${this.$route.params.id}`).then(t=>{this.project=t.data.data,this.activeTab=this.project.project_models[0].title.en,console.log(t.data.data)}).catch(t=>console.log(t))}},gt=e("div",{class:"pt-[76px]"},null,-1),ft={class:"relative img-banner-slot"},ht=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),vt=e("img",{class:"w-full",src:it},null,-1),bt={class:"z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"},xt=["src"],wt={key:1,class:"text-center text-sm md:text-3xl"},yt={class:"genaral-info bg-brown-section"},kt={class:"container mx-auto"},jt={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 lg:grid-cols-4 lg:gap-16 text-white p-10"},St={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto"},Tt=e("img",{class:"w-auto mx-auto",src:ct},null,-1),At={class:"my-auto mx-auto"},Ct={class:"font-bold"},Mt={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto"},Nt=e("img",{class:"w-auto mx-auto",src:dt},null,-1),Lt={class:"my-auto mx-auto"},$t={class:"font-bold"},It={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto"},Dt=e("img",{class:"w-auto mx-auto",src:ut},null,-1),Ot={class:"my-auto mx-auto"},Et={class:"font-bold"},Bt={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto"},Pt=e("img",{class:"w-auto mx-auto",src:pt},null,-1),Vt={class:"my-auto mx-auto"},zt={class:"font-bold"},Rt={class:"bg-white drop-shadow-md"},Ft={class:"container mx-auto"},Ut={class:"py-10 w-full lg:w-[60%]"},Ht={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mx-auto items-center"},Xt={class:"mx-auto font-bold"},Yt={href:"#"},Wt={class:"mx-auto font-bold"},Gt={href:"#"},qt={class:"mx-auto font-bold"},Jt={href:"#"},Kt={class:"mx-auto font-bold"},Qt={href:"#"},Zt={class:"mx-auto font-bold"},eo={href:"#"},to={class:"mx-auto font-bold button bg-light-brown text-white w-full text-center py-2",href:"#"},oo={class:"company-info py-28 bg-background-section",id:"project"},so={class:"container mx-auto"},no={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"},lo={class:"d-info h-full flex flex-col justify-center"},ao={key:0,class:"text-2xl mb-6 font-extrabold"},ro=["innerHTML"],io={class:"img-company-info"},co=["src"],uo={class:"py-12 pb-16"},po={class:"container mx-auto"},_o={class:"flex lg:flex-row flex-col"},mo={class:"lg:w-[20%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start"},go={class:"text-dark-brown text-4xl"},fo={class:"flex flex-row-reverse w-[80%]"},ho={class:"w-[90%]"},vo={id:"utilities",class:"relative bg-real-state-managemnt-utility-section bg-cover pt-40 pb-16 text-white flex items-center"},bo=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),xo={class:"z-40 container mx-auto"},wo={class:"mb-5 text-light-brown text-3xl"},yo={class:"mb-10 text-lg"},ko={class:"flex flex-wrap"},jo={class:"p-7 rounded-full bg-white z-20 mb-2"},So=["src"],To={class:"text-sm"},Ao={class:"company-info py-20 bg-background-section",id:"downloads"},Co={class:"container mx-auto"},Mo={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},No={class:"d-info h-full flex flex-col justify-center"},Lo={class:"text-3xl text-light-brown mb-6"},$o={class:"mb-20 text-lg text-justify"},Io={class:"company-button"},Do={key:0,class:"flex flex-wrap justify-between"},Oo={class:"w-1/2 mb-5"},Eo=["href"],Bo=e("div",{class:"img-company-info"},[e("img",{src:_t})],-1),Po={class:"company-info py-28 pt-16 bg-background-section",id:"project_models"},Vo={class:"container mx-auto"},zo={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},Ro={class:"d-info h-full flex flex-col justify-center"},Fo={class:"font-bold text-2xl mb-4 text-center md:text-start"},Uo={class:"text mb-5"},Ho={class:"mb-3"},Xo={class:"mb-3"},Yo={class:"mb-3"},Wo={class:"flex flex-wrap"},Go={class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]"},qo={class:"p-7 rounded-full border-2 bg-white z-20 mb-2"},Jo=["src"],Ko={class:"text-sm whitespace-nowrap"},Qo={class:"img-company-info"},Zo={class:"company-info py-28 bg-background-section",id:"location"},es={class:"container mx-auto"},ts={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},os={class:"d-info h-full flex flex-col justify-center"},ss={class:"font-bold text-xl mb-4 text-center md:text-start"},ns={key:0,class:"mb-24 text-lg text-dark-brown"},ls={key:1,class:"flex"},as=e("div",{class:"img-company-info"},[e("iframe",{class:"w-full h-[450px]",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.312148166532!2d46.668574651149!3d24.681794158394528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b4ad55d0b%3A0x9724c2fb9fb4fce6!2sLadun%20Investment!5e0!3m2!1sen!2seg!4v1678629276760!5m2!1sen!2seg",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),rs={class:"text-center py-28",id:"ask_us"},is={class:"container mx-auto"},cs={class:"mb-5"},ds={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"},us={class:"flex-auto md:w-1/2"},ps={class:"bg-black rounded-lg mb-14"},_s={class:"text-dark-brown py-10 px-5 text-sm"},ms={class:"grid gap-y-10 mx-5"},gs={class:"flex justify-center gap-x-5"},fs={class:"flex justify-between px-4 text-white w-full"},hs=e("svg",{class:"my-auto w-4 h-4 ltr:ml-14 rtl:mr-14","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),vs=["placeholder"],bs={class:"flex justify-center gap-x-5"},xs=["placeholder"],ws=["placeholder"],ys={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},ks={dir:""},js={href:"#",class:"text-dark-brown"};function Ss(t,s,n,c,o,r){const p=I("Navbar"),y=I("vue-carousel"),f=I("ArrowDownTrayIcon"),j=I("tab"),A=I("tabs"),i=I("Carousel"),d=I("MapPinIcon"),N=I("dropdown"),B=I("DarkFooter"),k=Pe("scroll-to");return u(),g(z,null,[M(p,{class:"bg-black fixed z-50 w-full"}),gt,e("div",ft,[ht,vt,e("div",bt,[o.project.logo?(u(),g("img",{key:0,class:"w-[30%] md:w-[45%] lg:w-[60%] mx-auto md:mb-3 rounded-full",src:o.project.logo.original_url},null,8,xt)):T("",!0),o.project.title?(u(),g("p",wt,a(o.project.title[t.$i18n.locale]),1)):T("",!0)])]),e("section",yt,[e("div",kt,[e("div",jt,[e("div",St,[Tt,e("div",At,[e("p",null,a(t.$t("areaOfLand")),1),e("p",Ct,a(o.project.land_area)+" m2",1)])]),e("div",Mt,[Nt,e("div",Lt,[e("p",null,a(t.$t("Building_Area")),1),e("p",$t,a(o.project.building_area)+" m2",1)])]),e("div",It,[Dt,e("div",Ot,[e("p",null,a(t.$t("Floors_Number")),1),e("p",Et,a(o.project.units_number),1)])]),e("div",Bt,[Pt,e("div",Vt,[e("p",null,a(t.$t("Units_Number")),1),e("p",zt,a(o.project.models_number),1)])])])])]),e("section",Rt,[e("div",Ft,[e("div",Ut,[e("div",Ht,[e("div",Xt,[V((u(),g("a",Yt,[D(a(t.$t("project")),1)])),[[k,{el:"#project",offset:-128}]])]),e("div",Wt,[V((u(),g("a",Gt,[D(a(t.$t("utilities")),1)])),[[k,{el:"#utilities",offset:-128}]])]),e("div",qt,[V((u(),g("a",Jt,[D(a(t.$t("downloads")),1)])),[[k,{el:"#downloads",offset:-128}]])]),e("div",Kt,[V((u(),g("a",Qt,[D(a(t.$t("projectModels")),1)])),[[k,{el:"#project_models",offset:-128}]])]),e("div",Zt,[V((u(),g("a",eo,[D(a(t.$t("location")),1)])),[[k,{el:"#location",offset:-128}]])]),V((u(),g("a",to,[D(a(t.$t("askUs")),1)])),[[k,{el:"#ask_us",offset:-128}]])])])])]),e("section",oo,[e("div",so,[e("div",no,[e("div",lo,[o.project.title?(u(),g("h1",ao,a(o.project.title[t.$i18n.locale]),1)):T("",!0),o.project.text?(u(),g("p",{key:1,class:"mb-12 text-lg text-justify",innerHTML:o.project.text[t.$i18n.locale]},null,8,ro)):T("",!0)]),e("div",io,[e("img",{class:"w-full max-h-[430px]",src:o.project.attachment,alt:""},null,8,co)])])])]),e("section",uo,[e("div",po,[e("div",_o,[e("div",mo,[e("p",go,a(t.$t("gallary_project")),1)]),e("div",fo,[e("div",ho,[M(y,{items:r.getGallery(o.project.gallery)},null,8,["items"])])])])])]),e("section",vo,[bo,e("div",xo,[e("h2",wo,a(t.$t("high_level_utility")),1),e("p",yo,a(t.$t("high_level_utility_p")),1),e("div",ko,[o.project.utilities?(u(!0),g(z,{key:0},H(o.project.utilities,m=>(u(),g("div",{key:m.id,class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]"},[e("div",jo,[m.image?(u(),g("img",{key:0,src:m.image.original_url,class:"w-[35px] h-[35px] z-40",alt:""},null,8,So)):T("",!0)]),e("p",To,a(m.title[t.$i18n.locale]),1)]))),128)):T("",!0)])])]),e("section",Ao,[e("div",Co,[e("div",Mo,[e("div",No,[e("h1",Lo,a(t.$t("Download_Project_Files")),1),e("p",$o,a(t.$t("Download_Project_Files_p")),1),e("div",Io,[o.project.downloads?(u(),g("div",Do,[(u(!0),g(z,null,H(o.project.downloads,m=>(u(),g("div",Oo,[e("a",{href:`/storage/${m.project_attachment}`,target:"_blank",class:"hover:bg-green-400 hover:cursor-pointer special-button text-xl button bg-dark-brown rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4"},[M(f,{class:"text-white w-6 h-6 rtl:ml-6 ltr:mr-6"}),D(" "+a(m.name[t.$i18n.locale]),1)],8,Eo)]))),256))])):T("",!0)])]),Bo])])]),e("section",Po,[e("div",Vo,[e("div",zo,[e("div",Ro,[e("h1",Fo,a(t.$t("Project_Models")),1),M(A,{variant:"underline",modelValue:o.activeTab,"onUpdate:modelValue":s[0]||(s[0]=m=>o.activeTab=m),class:"p-5 text-lg"},{default:R(()=>[(u(!0),g(z,null,H(o.project.project_models,m=>(u(),pe(j,{name:m.title.en,title:m.title[t.$i18n.locale],class:"text-lg"},{default:R(()=>[e("div",Uo,[e("p",Ho,a(t.$t("Land_Area"))+": "+a(m.Land_area),1),e("p",Xo,a(t.$t("Building_Area"))+": "+a(m.building_area),1),e("p",Yo,a(t.$t("Floors_Number"))+": "+a(m.floors_number),1),e("p",null,a(t.$t("Units_Number"))+": "+a(m.units_number),1)]),e("div",Wo,[m.utilities?(u(!0),g(z,{key:0},H(m.utilities,C=>(u(),g("div",Go,[e("div",qo,[C.media[0]?(u(),g("img",{key:0,src:C.media[0].original_url,class:"w-[35px] h-[35px] z-40"},null,8,Jo)):T("",!0)]),e("p",Ko,a(C.title[t.$i18n.locale]),1)]))),256)):T("",!0)])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),e("div",Qo,[M(i,{pictures:r.getGallery(o.project.gallery),class:"about-us-carousel h-[400px] [&>div:first-child]:h-[400px] [&>div>div>img]:h-[400px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])])])]),e("section",Zo,[e("div",es,[e("div",ts,[e("div",os,[e("h1",ss,a(t.$t("Location")),1),o.project.location?(u(),g("p",ns,a(o.project.location.city),1)):T("",!0),o.project.location.address?(u(),g("p",ls,[M(d,{class:"w-6 h-6 text-black"}),D(" "+a(o.project.location.address),1)])):T("",!0)]),as])])]),e("section",rs,[e("div",is,[e("h2",cs,a(t.$t("inquiriesNotes")),1),e("p",null,a(t.$t("forAllInquiries")),1),e("p",null,a(t.$t("outsideSaudia")),1),e("div",ds,[e("div",us,[e("div",ps,[e("div",_s,a(t.$t("pleaseFill")),1),e("form",ms,[e("div",gs,[M(N,{text:"Bottom",class:"hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:R(()=>[e("div",fs,[e("div",null,a(t.$t("chooseYourInquiry")),1),hs])]),_:1}),e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,vs)]),e("div",bs,[e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,xs),e("input",{type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,ws)]),e("button",ys,a(t.$t("sendNow")),1)])])])]),e("p",ks,[D(a(t.$t("ifYouFaceAProplem")),1),e("a",js,a(t.$t("sendUsNow")),1)])])]),M(B)],64)}const Ns=Ee(mt,[["render",Ss]]);export{Ns as default};
