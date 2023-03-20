import{B as ge,y as b,f as _,x as w,H,C as Ne,J as $e,E as Ee,A as ue,D as de,v as Le,G as M,o as u,q as me,w as R,d as A,u as K,c as g,b as Y,a as e,F as z,_ as Be,by as Oe,r as N,i as Pe,l as I,t as i,j as V,k as $}from"./main-40d304fc.js";import{u as Ve,N as ze,M as Re,U as Fe,A as Ue,c as Ye,L as He}from"./flowbite-vue-18397504.js";import{_ as Xe}from"./Navbar-ec1a6f9f.js";import{_ as We}from"./DarkFooter-76214ea2.js";/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const x={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Te={itemsToShow:{default:x.itemsToShow,type:Number},itemsToScroll:{default:x.itemsToScroll,type:Number},wrapAround:{default:x.wrapAround,type:Boolean},throttle:{default:x.throttle,type:Number},snapAlign:{default:x.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:x.transition,type:Number},breakpoints:{default:x.breakpoints,type:Object},autoplay:{default:x.autoplay,type:Number},pauseAutoplayOnHover:{default:x.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:x.mouseDrag,type:Boolean},touchDrag:{default:x.touchDrag,type:Boolean},dir:{default:x.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function Ge({config:t,slidesCount:s}){const{snapAlign:a,wrapAround:n,itemsToShow:o=1}=t;if(n)return Math.max(s-1,0);let r;switch(a){case"start":r=s-o;break;case"end":r=s-1;break;case"center":case"center-odd":r=s-Math.ceil((o-.5)/2);break;case"center-even":r=s-Math.ceil(o/2);break;default:r=0;break}return Math.max(r,0)}function qe({config:t,slidesCount:s}){const{wrapAround:a,snapAlign:n,itemsToShow:o=1}=t;let r=0;if(a||o>s)return r;switch(n){case"start":r=0;break;case"end":r=o-1;break;case"center":case"center-odd":r=Math.floor((o-1)/2);break;case"center-even":r=Math.floor((o-2)/2);break;default:r=0;break}return r}function _e({val:t,max:s,min:a}){return s<a?t:Math.min(Math.max(t,a),s)}function Je({config:t,currentSlide:s,slidesCount:a}){const{snapAlign:n,wrapAround:o,itemsToShow:r=1}=t;let m=s;switch(n){case"center":case"center-odd":m-=(r-1)/2;break;case"center-even":m-=(r-2)/2;break;case"end":m-=r-1;break}return o?m:_e({val:m,max:a-r,min:0})}function Ke(t){var s,a,n,o;return t?((s=t[0])===null||s===void 0?void 0:s.children)==="v-if"||((n=(a=t[0])===null||a===void 0?void 0:a.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?t.filter(r=>{var m;return((m=r.type)===null||m===void 0?void 0:m.name)==="CarouselSlide"}):((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function Q({val:t,max:s,min:a=0}){return t>s?Q({val:t-(s+1),max:s,min:a}):t<a?Q({val:t+(s+1),max:s,min:a}):t}function Qe(t,s){let a;return s?function(...n){const o=this;a||(t.apply(o,n),a=!0,setTimeout(()=>a=!1,s))}:t}function Ze(t,s){let a;return function(...n){a&&clearTimeout(a),a=setTimeout(()=>{t(...n),a=null},s)}}var et=ge({name:"ARIA",setup(){const t=b("currentSlide",_(0)),s=b("slidesCount",_(0));return()=>w("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${t.value+1} of ${s.value}`)}}),tt=ge({name:"Carousel",props:Te,setup(t,{slots:s,emit:a,expose:n}){var o;const r=_(null),m=_([]),y=_(0),f=_(0);let j=_({}),L=Object.assign({},x);const c=H(Object.assign({},L)),d=_((o=t.modelValue)!==null&&o!==void 0?o:0),C=_(0),O=_(0),k=_(0),p=_(0);let T,Z;M("config",c),M("slidesCount",f),M("currentSlide",d),M("maxSlide",k),M("minSlide",p),M("slideWidth",y);function ee(){const l=Object.assign(Object.assign({},t),t.settings);j=_(Object.assign({},l.breakpoints)),L=Object.assign(Object.assign({},l),{settings:void 0,breakpoints:void 0}),fe(L)}function X(){const l=Object.keys(j.value).map(v=>Number(v)).sort((v,D)=>+D-+v);let h=Object.assign({},L);l.some(v=>window.matchMedia(`(min-width: ${v}px)`).matches?(h=Object.assign(Object.assign({},h),j.value[v]),!0):!1),fe(h)}function fe(l){Object.entries(l).forEach(([h,v])=>c[h]=v)}const he=Ze(()=>{Object.keys(j.value).length&&(X(),F()),W()},16);function W(){if(!r.value)return;const l=r.value.getBoundingClientRect();y.value=l.width/c.itemsToShow}function F(){f.value<=0||(O.value=Math.ceil((f.value-1)/2),k.value=Ge({config:c,slidesCount:f.value}),p.value=qe({config:c,slidesCount:f.value}),c.wrapAround||(d.value=_e({val:d.value,max:k.value,min:p.value})))}Ne(()=>{Object.keys(j.value).length&&X(),$e(()=>{F(),W(),De(),a("init")}),we(),window.addEventListener("resize",he,{passive:!0})}),Ee(()=>{Z&&clearTimeout(Z),T&&clearInterval(T),window.removeEventListener("resize",he,{passive:!0})});let S=!1;const G={x:0,y:0},q={x:0,y:0},E=H({x:0,y:0}),te=_(!1),Ae=()=>{te.value=!0},Ce=()=>{te.value=!1};function ve(l){["INPUT","TEXTAREA"].includes(l.target.tagName)||(S=l.type==="touchstart",!(!S&&l.button!==0||P.value)&&(S||l.preventDefault(),G.x=S?l.touches[0].clientX:l.clientX,G.y=S?l.touches[0].clientY:l.clientY,document.addEventListener(S?"touchmove":"mousemove",oe,!0),document.addEventListener(S?"touchend":"mouseup",be,!0)))}let oe=()=>{};function De(){var l;oe=Qe(h=>{q.x=S?h.touches[0].clientX:h.clientX,q.y=S?h.touches[0].clientY:h.clientY;const v=q.x-G.x,D=q.y-G.y;E.y=D,E.x=v},(l=c.throttle)!==null&&l!==void 0?l:16)}function be(){const l=c.dir==="rtl"?-1:1,h=Math.sign(E.x)*.4,v=Math.round(E.x/y.value+h)*l;if(v&&!S){const D=le=>{le.stopPropagation(),window.removeEventListener("click",D,!0)};window.addEventListener("click",D,!0)}B(d.value-v),E.x=0,E.y=0,document.removeEventListener(S?"touchmove":"mousemove",oe,!0),document.removeEventListener(S?"touchend":"mouseup",be,!0)}function we(){!c.autoplay||c.autoplay<=0||(T=setInterval(()=>{c.pauseAutoplayOnHover&&te.value||J()},c.autoplay))}function xe(){T&&(clearInterval(T),T=null),we()}const P=_(!1);function B(l){const h=c.wrapAround?l:_e({val:l,max:k.value,min:p.value});d.value===h||P.value||(a("slide-start",{slidingToIndex:l,currentSlideIndex:d.value,prevSlideIndex:C.value,slidesCount:f.value}),P.value=!0,C.value=d.value,d.value=h,Z=setTimeout(()=>{if(c.wrapAround){const v=Q({val:h,max:k.value,min:0});v!==d.value&&(d.value=v,a("loop",{currentSlideIndex:d.value,slidingToIndex:l}))}a("update:modelValue",d.value),a("slide-end",{currentSlideIndex:d.value,prevSlideIndex:C.value,slidesCount:f.value}),P.value=!1,xe()},c.transition))}function J(){B(d.value+c.itemsToScroll)}function se(){B(d.value-c.itemsToScroll)}const ye={slideTo:B,next:J,prev:se};M("nav",ye),M("isSliding",P);const ke=ue(()=>Je({config:c,currentSlide:d.value,slidesCount:f.value}));M("slidesToScroll",ke);const Me=ue(()=>{const l=c.dir==="rtl"?-1:1,h=ke.value*y.value*l;return{transform:`translateX(${E.x-h}px)`,transition:`${P.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${f.value*y.value}px`:"",width:"100%"}});function je(){ee(),X(),F(),W(),xe()}Object.keys(Te).forEach(l=>{["modelValue"].includes(l)||de(()=>t[l],je)}),de(()=>t.modelValue,l=>{l!==d.value&&B(Number(l))}),de(f,F),ee();const Se={config:c,slidesCount:f,slideWidth:y,next:J,prev:se,slideTo:B,currentSlide:d,maxSlide:k,minSlide:p,middleSlide:O};n({updateBreakpointsConfigs:X,updateSlidesData:F,updateSlideWidth:W,initDefaultConfigs:ee,restartCarousel:je,slideTo:B,next:J,prev:se,nav:ye,data:Se});const ne=s.default||s.slides,ae=s.addons,Ie=H(Se);return()=>{const l=Ke(ne==null?void 0:ne(Ie)),h=(ae==null?void 0:ae(Ie))||[];l.forEach((ie,re)=>ie.props.index=re);let v=l;if(c.wrapAround){const ie=l.map((ce,U)=>Le(ce,{index:-l.length+U,isClone:!0,key:`clone-before-${U}`})),re=l.map((ce,U)=>Le(ce,{index:l.length+U,isClone:!0,key:`clone-after-${U}`}));v=[...ie,...l,...re]}m.value=l,f.value=Math.max(l.length,1);const D=w("ol",{class:"carousel__track",style:Me.value,onMousedownCapture:c.mouseDrag?ve:null,onTouchstartPassiveCapture:c.touchDrag?ve:null},v),le=w("div",{class:"carousel__viewport"},D);return w("section",{ref:r,class:{carousel:!0,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Ae,onMouseleave:Ce},[le,h,w(et)])}}});const ot={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},pe=t=>{const s=t.name;if(!s||typeof s!="string")return;const a=ot[s],n=w("path",{d:a}),o=t.title||s,r=w("title",o);return w("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[r,n])};pe.props={name:String,title:String};const st=(t,{slots:s,attrs:a})=>{const{next:n,prev:o}=s||{},r=b("config",H(Object.assign({},x))),m=b("maxSlide",_(1)),y=b("minSlide",_(1)),f=b("currentSlide",_(1)),j=b("nav",{}),{dir:L,wrapAround:c}=r,d=L==="rtl",C=w("button",{type:"button",class:["carousel__prev",!c&&f.value<=y.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:j.prev},(o==null?void 0:o())||w(pe,{name:d?"arrowRight":"arrowLeft"})),O=w("button",{type:"button",class:["carousel__next",!c&&f.value>=m.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:j.next},(n==null?void 0:n())||w(pe,{name:d?"arrowLeft":"arrowRight"}));return[C,O]},nt=()=>{const t=b("maxSlide",_(1)),s=b("minSlide",_(1)),a=b("currentSlide",_(1)),n=b("nav",{}),o=m=>Q({val:a.value,max:t.value,min:0})===m,r=[];for(let m=s.value;m<t.value+1;m++){const y=w("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(m)},"aria-label":`Navigate to slide ${m+1}`,onClick:()=>n.slideTo(m)}),f=w("li",{class:"carousel__pagination-item",key:m},y);r.push(f)}return w("ol",{class:"carousel__pagination"},r)};var at=ge({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:s}){const a=b("config",H(Object.assign({},x))),n=b("currentSlide",_(0)),o=b("slidesToScroll",_(0)),r=b("slideWidth",_(0)),m=b("isSliding",_(!1)),y=ue(()=>({width:r.value?`${r.value}px`:"100%"})),f=()=>t.index===n.value,j=()=>t.index===n.value-1,L=()=>t.index===n.value+1,c=()=>{const d=Math.floor(o.value),C=Math.ceil(o.value+a.itemsToShow-1);return t.index>=d&&t.index<=C};return()=>{var d;return w("li",{style:y.value,class:{carousel__slide:!0,"carousel_slide--clone":t.isClone,"carousel__slide--visible":c(),"carousel__slide--active":f(),"carousel__slide--prev":j(),"carousel__slide--next":L(),"carousel__slide--sliding":m.value},"aria-hidden":!c()},(d=s.default)===null||d===void 0?void 0:d.call(s))}}});const lt=["src","alt"],it={__name:"VueCarousel",props:{items:{type:Object},msg:{type:String}},setup(t){return(s,a)=>(u(),me(K(tt),{"items-to-show":2},{addons:R(()=>[A(K(st)),A(K(nt))]),default:R(()=>[(u(!0),g(z,null,Y(t.items,(n,o)=>(u(),me(K(at),{key:o},{default:R(()=>[e("img",{src:n.src,alt:n.alt,class:"h-[350px] w-[500px]"},null,8,lt)]),_:2},1024))),128))]),_:1}))}},rt="/build/assets/real-state-management-banner-c1fa3f23.png",ct="/build/assets/icon-area-60f42131.png",dt="/build/assets/area-svgrepo-com-c4149577.png",ut="/build/assets/buildings-icon-b96f01bd.png",mt="/build/assets/pyramid-icon-957c5eb9.png",_t="/build/assets/video-real-state-management-2fee55ce.png",pt={components:{Input:Ve,Dropdown:ze,DarkFooter:We,MapPinIcon:Re,Navbar:Xe,VueCarousel:it,Carousel:Fe,ArrowDownTrayIcon:Ue,Tabs:Ye,Tab:He,useRoute:Oe},data(){return{activeTab:"",URL:"",route:"",project:{}}},methods:{getGallery(t){return t?Object.values(t).map(s=>({src:s.original_url,alt:s.name})):[]}},computed:{locale(){return this.$i18n.locale}},beforeMount(){axios.get(`/api/projects/${this.$route.params.id}`).then(t=>{this.project=t.data.data,this.activeTab=this.project.project_models[0].title.en,console.log(t.data.data)}).catch(t=>console.log(t))},mounted(){window.addEventListener("scroll",function(){let t=document.getElementsByClassName("utility-group");if(document.getElementById("logo-project"),window.scrollY==0){document.getElementById("logo-project").classList.remove("animate__animated","animate__backInDown");for(let n=0;n<t.length;n++)t[n].classList.remove("animate__animated","animate__backInDown");document.getElementById("logo-project").classList.add("animate__animated","animate__backInDown");for(let n=0;n<t.length;n++)t[n].classList.add("animate__animated","animate__backInDown")}else{document.getElementById("logo-project").classList.remove("animate__animated","animate__backInDown");for(let n=0;n<t.length;n++)t[n].classList.remove("animate__animated","animate__backInDown")}let s=document.getElementsByClassName("right"),a=document.getElementsByClassName("left");console.log(a.length);for(let n=0;n<s.length;n++)window.scrollY>=s[n].offsetTop-300?this.locale=="en"?(s[n].classList.add("animate__animated","animate__fadeInLeft"),a[n].classList.add("animate__animated","animate__fadeInRight")):(s[n].classList.add("animate__animated","animate__fadeInRight"),a[n].classList.add("animate__animated","animate__fadeInLeft")):this.locale=="en"?(s[n].classList.remove("animate__animated","animate__fadeInLeft"),a[n].classList.remove("animate__animated","animate__fadeInRight")):(s[n].classList.remove("animate__animated","animate__fadeInRight"),a[n].classList.remove("animate__animated","animate__fadeInLeft"))}.bind(this))}},gt=e("div",{class:"pt-[76px]"},null,-1),ft={class:"relative img-banner-slot"},ht=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),vt=e("img",{class:"w-full",src:rt},null,-1),bt={class:"z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"},wt=["src"],xt={key:1,class:"text-center text-sm md:text-3xl"},yt={class:"genaral-info bg-brown-section"},kt={class:"container mx-auto"},jt={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 lg:grid-cols-4 lg:gap-16 text-white p-10"},St={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},It=e("img",{class:"w-auto mx-auto",src:ct},null,-1),Lt={class:"my-auto mx-auto"},Tt={class:"font-bold"},At={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Ct=e("img",{class:"w-auto mx-auto",src:dt},null,-1),Dt={class:"my-auto mx-auto"},Mt={class:"font-bold"},Nt={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},$t=e("img",{class:"w-auto mx-auto",src:ut},null,-1),Et={class:"my-auto mx-auto"},Bt={class:"font-bold"},Ot={class:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Pt=e("img",{class:"w-auto mx-auto",src:mt},null,-1),Vt={class:"my-auto mx-auto"},zt={class:"font-bold"},Rt={class:"bg-white drop-shadow-md"},Ft={class:"container mx-auto"},Ut={class:"py-10 w-full lg:w-[60%]"},Yt={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mx-auto items-center"},Ht={class:"mx-auto font-bold mb-3 md:mb-0"},Xt={href:"#"},Wt={class:"mx-auto font-bold mb-3 md:mb-0"},Gt={href:"#"},qt={class:"mx-auto font-bold mb-3 md:mb-0"},Jt={href:"#"},Kt={class:"mx-auto font-bold mb-3 md:mb-0"},Qt={href:"#"},Zt={class:"mx-auto font-bold mb-3 md:mb-0"},eo={href:"#"},to={class:"mx-auto font-bold button bg-light-brown text-white w-full text-center py-2",href:"#"},oo={class:"company-info py-28 bg-background-section",id:"project"},so={class:"container mx-auto"},no={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"},ao={class:"d-info h-full flex flex-col justify-center right"},lo={key:0,class:"text-2xl mb-6 font-extrabold"},io=["innerHTML"],ro={class:"img-company-info left",id:"project_img"},co=["src"],uo={class:"py-12 pb-16"},mo={class:"container mx-auto"},_o={class:"flex lg:flex-row flex-col"},po={class:"lg:w-[20%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start right"},go={class:"text-dark-brown text-4xl"},fo={class:"flex flex-row-reverse w-[80%] left"},ho={class:"w-[90%]"},vo={id:"utilities",class:"relative bg-real-state-managemnt-utility-section bg-cover pt-40 pb-16 text-white flex items-center"},bo=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),wo={class:"z-40 container mx-auto"},xo={class:"mb-5 text-light-brown text-3xl"},yo={class:"mb-10 text-lg"},ko={class:"flex flex-wrap"},jo={class:"p-7 rounded-full bg-white z-20 mb-2"},So=["src"],Io={class:"text-sm"},Lo={class:"company-info py-20 bg-background-section",id:"downloads"},To={class:"container mx-auto"},Ao={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},Co={class:"d-info h-full flex flex-col justify-center right"},Do={class:"text-3xl text-light-brown mb-6"},Mo={class:"mb-20 text-lg text-justify"},No={class:"company-button"},$o={key:0,class:"flex flex-wrap justify-between"},Eo={class:"w-1/2 mb-5"},Bo=["href"],Oo=e("div",{class:"left"},[e("img",{src:_t})],-1),Po={class:"company-info py-28 pt-16 bg-background-section",id:"project_models"},Vo={class:"container mx-auto"},zo={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},Ro={class:"d-info h-full flex flex-col justify-center right"},Fo={class:"font-bold text-2xl mb-4 text-center md:text-start"},Uo={class:"text mb-5"},Yo={class:"mb-3"},Ho={class:"mb-3"},Xo={class:"mb-3"},Wo={class:"flex flex-wrap"},Go={class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]"},qo={class:"p-7 rounded-full border-2 bg-white z-20 mb-2"},Jo=["src"],Ko={class:"text-sm whitespace-nowrap"},Qo={class:"img-company-info left"},Zo={class:"company-info py-28 bg-background-section",id:"location"},es={class:"container mx-auto"},ts={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},os={class:"d-info h-full flex flex-col justify-center right"},ss={class:"font-bold text-xl mb-4 text-center md:text-start"},ns={key:0,class:"mb-12 text-lg text-dark-brown"},as={key:1,class:"flex"},ls=e("div",{class:"img-company-info left"},[e("iframe",{class:"w-full h-[370px]",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.312148166532!2d46.668574651149!3d24.681794158394528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b4ad55d0b%3A0x9724c2fb9fb4fce6!2sLadun%20Investment!5e0!3m2!1sen!2seg!4v1678629276760!5m2!1sen!2seg",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),is={class:"text-center py-28",id:"ask_us"},rs={class:"container mx-auto"},cs={class:"mb-5"},ds={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"},us={class:"flex-auto md:w-1/2"},ms={class:"bg-black rounded-lg mb-14"},_s={class:"text-dark-brown py-10 px-5 text-sm"},ps={class:"grid gap-y-10 mx-5"},gs={class:"flex justify-center gap-x-5"},fs={class:"flex justify-between px-4 text-white w-full"},hs=e("svg",{class:"my-auto w-4 h-4 ltr:ml-14 rtl:mr-14","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),vs=["placeholder"],bs={class:"flex justify-center gap-x-5"},ws=["placeholder"],xs=["placeholder"],ys={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},ks={dir:""},js={href:"#",class:"text-dark-brown"};function Ss(t,s,a,n,o,r){const m=N("Navbar"),y=N("vue-carousel"),f=N("ArrowDownTrayIcon"),j=N("tab"),L=N("tabs"),c=N("Carousel"),d=N("MapPinIcon"),C=N("dropdown"),O=N("DarkFooter"),k=Pe("scroll-to");return u(),g(z,null,[A(m,{class:"bg-black fixed z-50 w-full"}),gt,e("div",ft,[ht,vt,e("div",bt,[o.project.logo?(u(),g("img",{key:0,class:"w-[30%] md:w-[45%] lg:w-[60%] mx-auto md:mb-3 rounded-full animate__animated animate__backInDown",id:"logo-project",src:o.project.logo.original_url},null,8,wt)):I("",!0),o.project.title?(u(),g("p",xt,i(o.project.title[t.$i18n.locale]),1)):I("",!0)])]),e("section",yt,[e("div",kt,[e("div",jt,[e("div",St,[It,e("div",Lt,[e("p",null,i(t.$t("areaOfLand")),1),e("p",Tt,i(o.project.land_area)+" m2",1)])]),e("div",At,[Ct,e("div",Dt,[e("p",null,i(t.$t("Building_Area")),1),e("p",Mt,i(o.project.building_area)+" m2",1)])]),e("div",Nt,[$t,e("div",Et,[e("p",null,i(t.$t("Floors_Number")),1),e("p",Bt,i(o.project.units_number),1)])]),e("div",Ot,[Pt,e("div",Vt,[e("p",null,i(t.$t("Units_Number")),1),e("p",zt,i(o.project.models_number),1)])])])])]),e("section",Rt,[e("div",Ft,[e("div",Ut,[e("div",Yt,[e("div",Ht,[V((u(),g("a",Xt,[$(i(t.$t("project")),1)])),[[k,{el:"#project",offset:-128}]])]),e("div",Wt,[V((u(),g("a",Gt,[$(i(t.$t("utilities")),1)])),[[k,{el:"#utilities",offset:-128}]])]),e("div",qt,[V((u(),g("a",Jt,[$(i(t.$t("downloads")),1)])),[[k,{el:"#downloads",offset:-128}]])]),e("div",Kt,[V((u(),g("a",Qt,[$(i(t.$t("projectModels")),1)])),[[k,{el:"#project_models",offset:-128}]])]),e("div",Zt,[V((u(),g("a",eo,[$(i(t.$t("location")),1)])),[[k,{el:"#location",offset:-128}]])]),V((u(),g("a",to,[$(i(t.$t("askUs")),1)])),[[k,{el:"#ask_us",offset:-128}]])])])])]),e("section",oo,[e("div",so,[e("div",no,[e("div",ao,[o.project.title?(u(),g("h1",lo,i(o.project.title[t.$i18n.locale]),1)):I("",!0),o.project.text?(u(),g("p",{key:1,class:"mb-12 text-lg text-justify",innerHTML:o.project.text[t.$i18n.locale]},null,8,io)):I("",!0)]),e("div",ro,[e("img",{class:"w-full max-h-[430px]",src:o.project.attachment,alt:""},null,8,co)])])])]),e("section",uo,[e("div",mo,[e("div",_o,[e("div",po,[e("p",go,i(t.$t("gallary_project")),1)]),e("div",fo,[e("div",ho,[A(y,{items:r.getGallery(o.project.gallery)},null,8,["items"])])])])])]),e("section",vo,[bo,e("div",wo,[e("h2",xo,i(t.$t("high_level_utility")),1),e("p",yo,i(t.$t("high_level_utility_p")),1),e("div",ko,[o.project.utilities?(u(!0),g(z,{key:0},Y(o.project.utilities,p=>(u(),g("div",{key:p.id,class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]"},[e("div",jo,[p.image?(u(),g("img",{key:0,src:p.image.original_url,class:"w-[35px] h-[35px] z-40",alt:""},null,8,So)):I("",!0)]),e("p",Io,i(p.title[t.$i18n.locale]),1)]))),128)):I("",!0)])])]),e("section",Lo,[e("div",To,[e("div",Ao,[e("div",Co,[e("h1",Do,i(t.$t("Download_Project_Files")),1),e("p",Mo,i(t.$t("Download_Project_Files_p")),1),e("div",No,[o.project.downloads?(u(),g("div",$o,[(u(!0),g(z,null,Y(o.project.downloads,p=>(u(),g("div",Eo,[e("a",{href:`/storage/${p.project_attachment}`,target:"_blank",class:"hover:bg-green-400 hover:cursor-pointer special-button text-xl button bg-dark-brown rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4"},[A(f,{class:"text-white w-6 h-6 rtl:ml-6 ltr:mr-6"}),$(" "+i(p.name[t.$i18n.locale]),1)],8,Bo)]))),256))])):I("",!0)])]),Oo])])]),e("section",Po,[e("div",Vo,[e("div",zo,[e("div",Ro,[e("h1",Fo,i(t.$t("Project_Models")),1),A(L,{variant:"underline",modelValue:o.activeTab,"onUpdate:modelValue":s[0]||(s[0]=p=>o.activeTab=p),class:"p-5 text-lg"},{default:R(()=>[(u(!0),g(z,null,Y(o.project.project_models,p=>(u(),me(j,{name:p.title.en,title:p.title[t.$i18n.locale],class:"text-lg"},{default:R(()=>[e("div",Uo,[e("p",Yo,i(t.$t("Land_Area"))+": "+i(p.Land_area),1),e("p",Ho,i(t.$t("Building_Area"))+": "+i(p.building_area),1),e("p",Xo,i(t.$t("Floors_Number"))+": "+i(p.floors_number),1),e("p",null,i(t.$t("Units_Number"))+": "+i(p.units_number),1)]),e("div",Wo,[p.utilities?(u(!0),g(z,{key:0},Y(p.utilities,T=>(u(),g("div",Go,[e("div",qo,[T.media[0]?(u(),g("img",{key:0,src:T.media[0].original_url,class:"w-[35px] h-[35px] z-40"},null,8,Jo)):I("",!0)]),e("p",Ko,i(T.title[t.$i18n.locale]),1)]))),256)):I("",!0)])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),e("div",Qo,[A(c,{pictures:r.getGallery(o.project.gallery),class:"about-us-carousel h-[400px] [&>div:first-child]:h-[400px] [&>div>div>img]:h-[400px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])])])]),e("section",Zo,[e("div",es,[e("div",ts,[e("div",os,[e("h1",ss,i(t.$t("Location")),1),o.project.location?(u(),g("p",ns,i(o.project.location.city),1)):I("",!0),o.project.location.address?(u(),g("p",as,[A(d,{class:"w-6 h-6 text-black"}),$(" "+i(o.project.location.address),1)])):I("",!0)]),ls])])]),e("section",is,[e("div",rs,[e("h2",cs,i(t.$t("inquiriesNotes")),1),e("p",null,i(t.$t("forAllInquiries")),1),e("p",null,i(t.$t("outsideSaudia")),1),e("div",ds,[e("div",us,[e("div",ms,[e("div",_s,i(t.$t("pleaseFill")),1),e("form",ps,[e("div",gs,[A(C,{text:"Bottom",class:"hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:R(()=>[e("div",fs,[e("div",null,i(t.$t("chooseYourInquiry")),1),hs])]),_:1}),e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,vs)]),e("div",bs,[e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,ws),e("input",{type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,xs)]),e("button",ys,i(t.$t("sendNow")),1)])])])]),e("p",ks,[$(i(t.$t("ifYouFaceAProplem")),1),e("a",js,i(t.$t("sendUsNow")),1)])])]),A(O)],64)}const Cs=Be(pt,[["render",Ss]]);export{Cs as default};
