import{B as pe,y as v,g as _,x,H,C as De,J as Ee,E as $e,A as ue,D as de,v as Le,G as N,o as u,e as me,w as R,a as A,u as K,c as f,m as Y,b as e,F as z,_ as Be,bx as Oe,r as D,k as Pe,n as Ve,f as I,t as l,l as V,d as E,ac as ze}from"./main-097be1ad.js";import{u as Re,N as Ue,U as Fe,b as Ye,L as He}from"./flowbite-vue-68164d1a.js";import{M as Xe,A as Ge}from"./index-cd7f871f.js";import{_ as We}from"./Navbar-775f8783.js";import{L as qe}from"./LightFooter-d72efdfd.js";/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const w={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Te={itemsToShow:{default:w.itemsToShow,type:Number},itemsToScroll:{default:w.itemsToScroll,type:Number},wrapAround:{default:w.wrapAround,type:Boolean},throttle:{default:w.throttle,type:Number},snapAlign:{default:w.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:w.transition,type:Number},breakpoints:{default:w.breakpoints,type:Object},autoplay:{default:w.autoplay,type:Number},pauseAutoplayOnHover:{default:w.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:w.mouseDrag,type:Boolean},touchDrag:{default:w.touchDrag,type:Boolean},dir:{default:w.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function Je({config:t,slidesCount:s}){const{snapAlign:a,wrapAround:r,itemsToShow:o=1}=t;if(r)return Math.max(s-1,0);let i;switch(a){case"start":i=s-o;break;case"end":i=s-1;break;case"center":case"center-odd":i=s-Math.ceil((o-.5)/2);break;case"center-even":i=s-Math.ceil(o/2);break;default:i=0;break}return Math.max(i,0)}function Ke({config:t,slidesCount:s}){const{wrapAround:a,snapAlign:r,itemsToShow:o=1}=t;let i=0;if(a||o>s)return i;switch(r){case"start":i=0;break;case"end":i=o-1;break;case"center":case"center-odd":i=Math.floor((o-1)/2);break;case"center-even":i=Math.floor((o-2)/2);break;default:i=0;break}return i}function fe({val:t,max:s,min:a}){return s<a?t:Math.min(Math.max(t,a),s)}function Qe({config:t,currentSlide:s,slidesCount:a}){const{snapAlign:r,wrapAround:o,itemsToShow:i=1}=t;let m=s;switch(r){case"center":case"center-odd":m-=(i-1)/2;break;case"center-even":m-=(i-2)/2;break;case"end":m-=i-1;break}return o?m:fe({val:m,max:a-i,min:0})}function Ze(t){var s,a,r,o;return t?((s=t[0])===null||s===void 0?void 0:s.children)==="v-if"||((r=(a=t[0])===null||a===void 0?void 0:a.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?t.filter(i=>{var m;return((m=i.type)===null||m===void 0?void 0:m.name)==="CarouselSlide"}):((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function Q({val:t,max:s,min:a=0}){return t>s?Q({val:t-(s+1),max:s,min:a}):t<a?Q({val:t+(s+1),max:s,min:a}):t}function et(t,s){let a;return s?function(...r){const o=this;a||(t.apply(o,r),a=!0,setTimeout(()=>a=!1,s))}:t}function tt(t,s){let a;return function(...r){a&&clearTimeout(a),a=setTimeout(()=>{t(...r),a=null},s)}}var ot=pe({name:"ARIA",setup(){const t=v("currentSlide",_(0)),s=v("slidesCount",_(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${t.value+1} of ${s.value}`)}}),st=pe({name:"Carousel",props:Te,setup(t,{slots:s,emit:a,expose:r}){var o;const i=_(null),m=_([]),y=_(0),g=_(0);let j=_({}),L=Object.assign({},w);const c=H(Object.assign({},L)),d=_((o=t.modelValue)!==null&&o!==void 0?o:0),C=_(0),O=_(0),k=_(0),p=_(0);let T,Z;N("config",c),N("slidesCount",g),N("currentSlide",d),N("maxSlide",k),N("minSlide",p),N("slideWidth",y);function ee(){const n=Object.assign(Object.assign({},t),t.settings);j=_(Object.assign({},n.breakpoints)),L=Object.assign(Object.assign({},n),{settings:void 0,breakpoints:void 0}),ge(L)}function X(){const n=Object.keys(j.value).map(b=>Number(b)).sort((b,M)=>+M-+b);let h=Object.assign({},L);n.some(b=>window.matchMedia(`(min-width: ${b}px)`).matches?(h=Object.assign(Object.assign({},h),j.value[b]),!0):!1),ge(h)}function ge(n){Object.entries(n).forEach(([h,b])=>c[h]=b)}const he=tt(()=>{Object.keys(j.value).length&&(X(),U()),G()},16);function G(){if(!i.value)return;const n=i.value.getBoundingClientRect();y.value=n.width/c.itemsToShow}function U(){g.value<=0||(O.value=Math.ceil((g.value-1)/2),k.value=Je({config:c,slidesCount:g.value}),p.value=Ke({config:c,slidesCount:g.value}),c.wrapAround||(d.value=fe({val:d.value,max:k.value,min:p.value})))}De(()=>{Object.keys(j.value).length&&X(),Ee(()=>{U(),G(),Me(),a("init")}),xe(),window.addEventListener("resize",he,{passive:!0})}),$e(()=>{Z&&clearTimeout(Z),T&&clearInterval(T),window.removeEventListener("resize",he,{passive:!0})});let S=!1;const W={x:0,y:0},q={x:0,y:0},$=H({x:0,y:0}),te=_(!1),Ae=()=>{te.value=!0},Ce=()=>{te.value=!1};function be(n){["INPUT","TEXTAREA"].includes(n.target.tagName)||(S=n.type==="touchstart",!(!S&&n.button!==0||P.value)&&(S||n.preventDefault(),W.x=S?n.touches[0].clientX:n.clientX,W.y=S?n.touches[0].clientY:n.clientY,document.addEventListener(S?"touchmove":"mousemove",oe,!0),document.addEventListener(S?"touchend":"mouseup",ve,!0)))}let oe=()=>{};function Me(){var n;oe=et(h=>{q.x=S?h.touches[0].clientX:h.clientX,q.y=S?h.touches[0].clientY:h.clientY;const b=q.x-W.x,M=q.y-W.y;$.y=M,$.x=b},(n=c.throttle)!==null&&n!==void 0?n:16)}function ve(){const n=c.dir==="rtl"?-1:1,h=Math.sign($.x)*.4,b=Math.round($.x/y.value+h)*n;if(b&&!S){const M=le=>{le.stopPropagation(),window.removeEventListener("click",M,!0)};window.addEventListener("click",M,!0)}B(d.value-b),$.x=0,$.y=0,document.removeEventListener(S?"touchmove":"mousemove",oe,!0),document.removeEventListener(S?"touchend":"mouseup",ve,!0)}function xe(){!c.autoplay||c.autoplay<=0||(T=setInterval(()=>{c.pauseAutoplayOnHover&&te.value||J()},c.autoplay))}function we(){T&&(clearInterval(T),T=null),xe()}const P=_(!1);function B(n){const h=c.wrapAround?n:fe({val:n,max:k.value,min:p.value});d.value===h||P.value||(a("slide-start",{slidingToIndex:n,currentSlideIndex:d.value,prevSlideIndex:C.value,slidesCount:g.value}),P.value=!0,C.value=d.value,d.value=h,Z=setTimeout(()=>{if(c.wrapAround){const b=Q({val:h,max:k.value,min:0});b!==d.value&&(d.value=b,a("loop",{currentSlideIndex:d.value,slidingToIndex:n}))}a("update:modelValue",d.value),a("slide-end",{currentSlideIndex:d.value,prevSlideIndex:C.value,slidesCount:g.value}),P.value=!1,we()},c.transition))}function J(){B(d.value+c.itemsToScroll)}function se(){B(d.value-c.itemsToScroll)}const ye={slideTo:B,next:J,prev:se};N("nav",ye),N("isSliding",P);const ke=ue(()=>Qe({config:c,currentSlide:d.value,slidesCount:g.value}));N("slidesToScroll",ke);const Ne=ue(()=>{const n=c.dir==="rtl"?-1:1,h=ke.value*y.value*n;return{transform:`translateX(${$.x-h}px)`,transition:`${P.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${g.value*y.value}px`:"",width:"100%"}});function je(){ee(),X(),U(),G(),we()}Object.keys(Te).forEach(n=>{["modelValue"].includes(n)||de(()=>t[n],je)}),de(()=>t.modelValue,n=>{n!==d.value&&B(Number(n))}),de(g,U),ee();const Se={config:c,slidesCount:g,slideWidth:y,next:J,prev:se,slideTo:B,currentSlide:d,maxSlide:k,minSlide:p,middleSlide:O};r({updateBreakpointsConfigs:X,updateSlidesData:U,updateSlideWidth:G,initDefaultConfigs:ee,restartCarousel:je,slideTo:B,next:J,prev:se,nav:ye,data:Se});const ae=s.default||s.slides,ne=s.addons,Ie=H(Se);return()=>{const n=Ze(ae==null?void 0:ae(Ie)),h=(ne==null?void 0:ne(Ie))||[];n.forEach((ie,re)=>ie.props.index=re);let b=n;if(c.wrapAround){const ie=n.map((ce,F)=>Le(ce,{index:-n.length+F,isClone:!0,key:`clone-before-${F}`})),re=n.map((ce,F)=>Le(ce,{index:n.length+F,isClone:!0,key:`clone-after-${F}`}));b=[...ie,...n,...re]}m.value=n,g.value=Math.max(n.length,1);const M=x("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:c.mouseDrag?be:null,onTouchstartPassiveCapture:c.touchDrag?be:null},b),le=x("div",{class:"carousel__viewport"},M);return x("section",{ref:i,class:{carousel:!0,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Ae,onMouseleave:Ce},[le,h,x(ot)])}}});const at={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},_e=t=>{const s=t.name;if(!s||typeof s!="string")return;const a=at[s],r=x("path",{d:a}),o=t.title||s,i=x("title",o);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[i,r])};_e.props={name:String,title:String};const nt=(t,{slots:s,attrs:a})=>{const{next:r,prev:o}=s||{},i=v("config",H(Object.assign({},w))),m=v("maxSlide",_(1)),y=v("minSlide",_(1)),g=v("currentSlide",_(1)),j=v("nav",{}),{dir:L,wrapAround:c}=i,d=L==="rtl",C=x("button",{type:"button",class:["carousel__prev",!c&&g.value<=y.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:j.prev},(o==null?void 0:o())||x(_e,{name:d?"arrowRight":"arrowLeft"})),O=x("button",{type:"button",class:["carousel__next",!c&&g.value>=m.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:j.next},(r==null?void 0:r())||x(_e,{name:d?"arrowLeft":"arrowRight"}));return[C,O]},lt=()=>{const t=v("maxSlide",_(1)),s=v("minSlide",_(1)),a=v("currentSlide",_(1)),r=v("nav",{}),o=m=>Q({val:a.value,max:t.value,min:0})===m,i=[];for(let m=s.value;m<t.value+1;m++){const y=x("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(m)},"aria-label":`Navigate to slide ${m+1}`,onClick:()=>r.slideTo(m)}),g=x("li",{class:"carousel__pagination-item",key:m},y);i.push(g)}return x("ol",{class:"carousel__pagination"},i)};var it=pe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:s}){const a=v("config",H(Object.assign({},w))),r=v("currentSlide",_(0)),o=v("slidesToScroll",_(0)),i=v("slideWidth",_(0)),m=v("isSliding",_(!1)),y=ue(()=>({width:i.value?`${i.value}px`:"100%"})),g=()=>t.index===r.value,j=()=>t.index===r.value-1,L=()=>t.index===r.value+1,c=()=>{const d=Math.floor(o.value),C=Math.ceil(o.value+a.itemsToShow-1);return t.index>=d&&t.index<=C};return()=>{var d;return x("li",{style:y.value,class:{carousel__slide:!0,"carousel_slide--clone":t.isClone,"carousel__slide--visible":c(),"carousel__slide--active":g(),"carousel__slide--prev":j(),"carousel__slide--next":L(),"carousel__slide--sliding":m.value},"aria-hidden":!c()},(d=s.default)===null||d===void 0?void 0:d.call(s))}}});const rt=["src","alt"],ct={__name:"VueCarousel",props:{items:{type:Object},msg:{type:String}},setup(t){return(s,a)=>(u(),me(K(st),{"items-to-show":2},{addons:R(()=>[A(K(nt)),A(K(lt))]),default:R(()=>[(u(!0),f(z,null,Y(t.items,(r,o)=>(u(),me(K(it),{key:o},{default:R(()=>[e("img",{src:r.src,alt:r.alt,class:"h-[350px] w-[500px]"},null,8,rt)]),_:2},1024))),128))]),_:1}))}},dt="/build/assets/real-state-management-banner-c1fa3f23.png",ut="/build/assets/icon-area-60f42131.png",mt="/build/assets/area-svgrepo-com-c4149577.png",ft="/build/assets/buildings-icon-b96f01bd.png",_t="/build/assets/pyramid-icon-957c5eb9.png",pt="/build/assets/video-real-state-management-2fee55ce.png",gt={components:{Input:Re,Dropdown:Ue,LightFooter:qe,MapPinIcon:Xe,Navbar:We,VueCarousel:ct,Carousel:Fe,ArrowDownTrayIcon:Ge,Tabs:Ye,Tab:He,useRoute:Oe},data(){return{activeTab:"",URL:"",route:"",project:{},top:1}},methods:{getGallery(t){return t?Object.values(t).map(s=>({src:s.original_url,alt:s.name})):[]}},computed:{locale(){return this.$i18n.locale}},beforeMount(){axios.get(`/api/projects/${this.$route.params.id}`).then(t=>{this.project=t.data.data,this.activeTab=this.project.project_models[0].title.en,console.log(t.data.data)}).catch(t=>console.log(t))},mounted(){window.addEventListener("scroll",function(){let t=document.getElementsByClassName("utility-group");if(document.getElementById("logo-project"),window.scrollY==0){this.top=1,document.getElementById("logo-project").classList.remove("animate__animated","animate__backInDown");for(let o=0;o<t.length;o++)t[o].classList.remove("animate__animated","animate__backInDown");document.getElementById("logo-project").classList.add("animate__animated","animate__backInDown");for(let o=0;o<t.length;o++)t[o].classList.add("animate__animated","animate__backInDown")}else{this.top=0,document.getElementById("logo-project").classList.remove("animate__animated","animate__backInDown");for(let o=0;o<t.length;o++)t[o].classList.remove("animate__animated","animate__backInDown")}let s=document.getElementById("carsoul-project");window.scrollY>=s.offsetTop-1e3?s.classList.add("animate__animated","animate__backInUp"):s.classList.remove("animate__animated","animate__backInUp");let a=document.getElementsByClassName("right"),r=document.getElementsByClassName("left");for(let o=0;o<a.length;o++)window.scrollY>=a[o].offsetTop-550?this.locale=="en"?(a[o].classList.add("animate__animated","animate__fadeInLeft"),r[o].classList.add("animate__animated","animate__fadeInRight")):(a[o].classList.add("animate__animated","animate__fadeInRight"),r[o].classList.add("animate__animated","animate__fadeInLeft")):this.locale=="en"?(a[o].classList.remove("animate__animated","animate__fadeInLeft"),r[o].classList.remove("animate__animated","animate__fadeInRight")):(a[o].classList.remove("animate__animated","animate__fadeInRight"),r[o].classList.remove("animate__animated","animate__fadeInLeft"))}.bind(this))}},ht={class:"relative img-banner-slot h-[50vh] md:h-auto"},bt=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),vt=e("img",{class:"h-[50vh] md:h-auto",src:dt},null,-1),xt={class:"z-40 text-white absolute top-40 md:top-60 -translate-y-1/2 text-justify"},wt={class:"flex md:mx-20 mx-5"},yt=["src"],kt={key:1,class:"my-auto mx-3 animate__animated animate__backInDown"},jt={class:"genaral-info bg-background-overlay"},St={class:"container mx-auto"},It={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 lg:grid-cols-4 lg:gap-16 text-white p-10"},Lt={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Tt=e("img",{class:"w-auto mx-auto",src:ut},null,-1),At={class:"my-auto mx-auto"},Ct={class:"font-bold"},Mt={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Nt=e("img",{class:"w-auto mx-auto",src:mt},null,-1),Dt={class:"my-auto mx-auto"},Et={class:"font-bold"},$t={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Bt=e("img",{class:"w-auto mx-auto",src:ft},null,-1),Ot={class:"my-auto mx-auto"},Pt={class:"font-bold"},Vt={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},zt=e("img",{class:"w-auto mx-auto",src:_t},null,-1),Rt={class:"my-auto mx-auto"},Ut={class:"font-bold"},Ft={class:"bg-white drop-shadow-md"},Yt={class:"container mx-auto"},Ht={class:"py-10 w-full lg:w-[60%]"},Xt={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mx-auto items-center"},Gt={class:"mx-auto font-bold mb-3 md:mb-0"},Wt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},qt={class:"mx-auto font-bold mb-3 md:mb-0"},Jt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},Kt={class:"mx-auto font-bold mb-3 md:mb-0"},Qt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},Zt={class:"mx-auto font-bold mb-3 md:mb-0"},eo={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},to={class:"mx-auto font-bold mb-3 md:mb-0"},oo={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},so={class:"mx-auto font-bold button bg-light-brown text-white w-full text-center py-2",href:"#"},ao={class:"company-info py-28 bg-background-section",id:"project"},no={class:"container mx-auto"},lo={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"},io={class:"d-info h-full flex flex-col justify-center right"},ro={key:0,class:"text-2xl mb-6 font-extrabold"},co=["innerHTML"],uo={class:"img-company-info left",id:"project_img"},mo=["src"],fo={class:"py-12 pb-16"},_o={class:"container mx-auto"},po={class:"flex lg:flex-row flex-col"},go={class:"lg:w-[20%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start"},ho={key:0},bo=ze('<div class="flex items-center"><p class="text-dark-brown text-2xl">MEDIA </p><div class="w-[29px] h-[3px] bg-dark-brown mx-5"></div></div><p class="text-dark-brown text-4xl ml-4"> Project </p><p class="text-dark-brown text-4xl ml-4">Gallery</p>',3),vo=[bo],xo={key:1,class:"text-dark-brown text-4xl"},wo={class:"flex flex-row-reverse w-[80%]",id:"carsoul-project"},yo={class:"w-[90%]"},ko={id:"utilities",class:"relative bg-real-state-managemnt-utility-section bg-cover pt-40 pb-16 text-white flex items-center"},jo=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),So={class:"z-40 container mx-auto"},Io={class:"mb-5 text-light-brown text-3xl"},Lo={class:"mb-10 text-lg"},To={class:"flex flex-wrap"},Ao={class:"p-7 rounded-full bg-white z-20 mb-2"},Co=["src"],Mo={class:"text-sm"},No={class:"company-info py-20 bg-background-section",id:"downloads"},Do={class:"container mx-auto"},Eo={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$o={class:"d-info h-full flex flex-col justify-center right"},Bo={class:"text-3xl text-light-brown mb-6"},Oo={class:"mb-20 text-lg text-justify"},Po={class:"company-button"},Vo={key:0,class:"flex flex-wrap justify-between"},zo={class:"w-1/2 mb-5"},Ro=["href"],Uo=e("div",{class:"left"},[e("img",{src:pt})],-1),Fo={class:"company-info py-28 pt-16 bg-background-section",id:"project_models"},Yo={class:"container mx-auto"},Ho={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},Xo={class:"d-info h-full flex flex-col justify-center right"},Go={class:"font-bold text-2xl mb-4 text-center md:text-start"},Wo={class:"text mb-5"},qo={class:"mb-3"},Jo={class:"mb-3"},Ko={class:"mb-3"},Qo={class:"flex flex-wrap"},Zo={class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]"},es={class:"p-7 rounded-full border-2 bg-white z-20 mb-2"},ts=["src"],os={class:"text-sm whitespace-nowrap"},ss={class:"img-company-info left"},as={class:"company-info py-28 bg-background-section",id:"location"},ns={class:"container mx-auto"},ls={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},is={class:"d-info h-full flex flex-col justify-center right"},rs={class:"font-bold text-xl mb-4 text-center md:text-start"},cs={key:0,class:"mb-12 text-lg text-dark-brown"},ds={key:1,class:"flex"},us=e("div",{class:"img-company-info left"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8622.087051923865!2d46.67816517503699!3d24.68767766179772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b4ad55d0b%3A0x9724c2fb9fb4fce6!2sLadun%20Investment!5e0!3m2!1sen!2seg!4v1679391697436!5m2!1sen!2seg",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),ms={class:"text-center py-28",id:"ask_us"},fs={class:"container mx-auto"},_s={class:"mb-5"},ps={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"},gs={class:"flex-auto md:w-1/2"},hs={class:"bg-black rounded-lg mb-14"},bs={class:"text-dark-brown py-10 px-5 text-sm"},vs={class:"grid gap-y-10 mx-5"},xs={class:"flex justify-center gap-x-5"},ws={class:"flex justify-between px-4 text-white w-full"},ys=e("svg",{class:"my-auto w-4 h-4 ltr:ml-14 rtl:mr-14","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),ks=["placeholder"],js={class:"flex justify-center gap-x-5"},Ss=["placeholder"],Is=["placeholder"],Ls={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},Ts={dir:""},As={href:"#",class:"text-dark-brown"};function Cs(t,s,a,r,o,i){const m=D("Navbar"),y=D("vue-carousel"),g=D("ArrowDownTrayIcon"),j=D("tab"),L=D("tabs"),c=D("Carousel"),d=D("MapPinIcon"),C=D("dropdown"),O=D("LightFooter"),k=Pe("scroll-to");return u(),f(z,null,[A(m,{class:Ve(["fixed z-50 w-full",{"bg-black":!o.top}])},null,8,["class"]),e("div",ht,[bt,vt,e("div",xt,[e("div",wt,[o.project.logo?(u(),f("img",{key:0,class:"w-[30%] animate__animated animate__backInDown",id:"logo-project",src:o.project.logo.original_url},null,8,yt)):I("",!0),o.project.title?(u(),f("h2",kt,l(o.project.title[t.$i18n.locale]),1)):I("",!0)])])]),e("section",jt,[e("div",St,[e("div",It,[e("div",Lt,[Tt,e("div",At,[e("p",null,l(t.$t("areaOfLand")),1),e("p",Ct,l(o.project.land_area)+" m2",1)])]),e("div",Mt,[Nt,e("div",Dt,[e("p",null,l(t.$t("Building_Area")),1),e("p",Et,l(o.project.building_area)+" m2",1)])]),e("div",$t,[Bt,e("div",Ot,[e("p",null,l(t.$t("Floors_Number")),1),e("p",Pt,l(o.project.units_number),1)])]),e("div",Vt,[zt,e("div",Rt,[e("p",null,l(t.$t("Units_Number")),1),e("p",Ut,l(o.project.models_number),1)])])])])]),e("section",Ft,[e("div",Yt,[e("div",Ht,[e("div",Xt,[e("div",Gt,[V((u(),f("a",Wt,[E(l(t.$t("project")),1)])),[[k,{el:"#project",offset:-128}]])]),e("div",qt,[V((u(),f("a",Jt,[E(l(t.$t("utilities")),1)])),[[k,{el:"#utilities",offset:-128}]])]),e("div",Kt,[V((u(),f("a",Qt,[E(l(t.$t("downloads")),1)])),[[k,{el:"#downloads",offset:-128}]])]),e("div",Zt,[V((u(),f("a",eo,[E(l(t.$t("projectModels")),1)])),[[k,{el:"#project_models",offset:-128}]])]),e("div",to,[V((u(),f("a",oo,[E(l(t.$t("location")),1)])),[[k,{el:"#location",offset:-128}]])]),V((u(),f("a",so,[E(l(t.$t("askUs")),1)])),[[k,{el:"#ask_us",offset:-128}]])])])])]),e("section",ao,[e("div",no,[e("div",lo,[e("div",io,[o.project.title?(u(),f("h1",ro,l(o.project.title[t.$i18n.locale]),1)):I("",!0),o.project.text?(u(),f("p",{key:1,class:"mb-12 text-lg text-justify",innerHTML:o.project.text[t.$i18n.locale]},null,8,co)):I("",!0)]),e("div",uo,[e("img",{class:"w-full max-h-[430px]",src:o.project.attachment,alt:""},null,8,mo)])])])]),e("section",fo,[e("div",_o,[e("div",po,[e("div",go,[t.$i18n.locale=="en"?(u(),f("div",ho,vo)):(u(),f("p",xo," معرض صور المشـــروع "))]),e("div",wo,[e("div",yo,[A(y,{items:i.getGallery(o.project.gallery)},null,8,["items"])])])])])]),e("section",ko,[jo,e("div",So,[e("h2",Io,l(t.$t("high_level_utility")),1),e("p",Lo,l(t.$t("high_level_utility_p")),1),e("div",To,[o.project.utilities?(u(!0),f(z,{key:0},Y(o.project.utilities,p=>(u(),f("div",{key:p.id,class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]"},[e("div",Ao,[p.image?(u(),f("img",{key:0,src:p.image.original_url,class:"w-[35px] h-[35px] z-40",alt:""},null,8,Co)):I("",!0)]),e("p",Mo,l(p.title[t.$i18n.locale]),1)]))),128)):I("",!0)])])]),e("section",No,[e("div",Do,[e("div",Eo,[e("div",$o,[e("h1",Bo,l(t.$t("Download_Project_Files")),1),e("p",Oo,l(t.$t("Download_Project_Files_p")),1),e("div",Po,[o.project.downloads?(u(),f("div",Vo,[(u(!0),f(z,null,Y(o.project.downloads,p=>(u(),f("div",zo,[e("a",{href:`/storage/${p.project_attachment}`,target:"_blank",class:"hover:bg-green-400 hover:cursor-pointer special-button text-xl button bg-dark-brown rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4"},[A(g,{class:"text-white w-6 h-6 rtl:ml-6 ltr:mr-6"}),E(" "+l(p.name[t.$i18n.locale]),1)],8,Ro)]))),256))])):I("",!0)])]),Uo])])]),e("section",Fo,[e("div",Yo,[e("div",Ho,[e("div",Xo,[e("h1",Go,l(t.$t("Project_Models")),1),A(L,{variant:"underline",modelValue:o.activeTab,"onUpdate:modelValue":s[0]||(s[0]=p=>o.activeTab=p),class:"p-5 text-lg"},{default:R(()=>[(u(!0),f(z,null,Y(o.project.project_models,p=>(u(),me(j,{name:p.title.en,title:p.title[t.$i18n.locale],class:"text-lg"},{default:R(()=>[e("div",Wo,[e("p",qo,l(t.$t("Land_Area"))+": "+l(p.Land_area),1),e("p",Jo,l(t.$t("Building_Area"))+": "+l(p.building_area),1),e("p",Ko,l(t.$t("Floors_Number"))+": "+l(p.floors_number),1),e("p",null,l(t.$t("Units_Number"))+": "+l(p.units_number),1)]),e("div",Qo,[p.utilities?(u(!0),f(z,{key:0},Y(p.utilities,T=>(u(),f("div",Zo,[e("div",es,[T.media[0]?(u(),f("img",{key:0,src:T.media[0].original_url,class:"w-[35px] h-[35px] z-40"},null,8,ts)):I("",!0)]),e("p",os,l(T.title[t.$i18n.locale]),1)]))),256)):I("",!0)])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),e("div",ss,[A(c,{pictures:i.getGallery(o.project.gallery),class:"about-us-carousel h-[400px] [&>div:first-child]:h-[400px] [&>div>div>img]:h-[400px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])])])]),e("section",as,[e("div",ns,[e("div",ls,[e("div",is,[e("h1",rs,l(t.$t("Location")),1),o.project.location?(u(),f("p",cs,l(o.project.location.city[t.$i18n.locale]),1)):I("",!0),o.project.location.address?(u(),f("p",ds,[A(d,{class:"w-6 h-6 text-black"}),E(" "+l(o.project.location.address[t.$i18n.locale]),1)])):I("",!0)]),us])])]),e("section",ms,[e("div",fs,[e("h2",_s,l(t.$t("inquiriesNotes")),1),e("p",null,l(t.$t("forAllInquiries")),1),e("p",null,l(t.$t("outsideSaudia")),1),e("div",ps,[e("div",gs,[e("div",hs,[e("div",bs,l(t.$t("pleaseFill")),1),e("form",vs,[e("div",xs,[A(C,{text:"Bottom",class:"hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:R(()=>[e("div",ws,[e("div",null,l(t.$t("chooseYourInquiry")),1),ys])]),_:1}),e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,ks)]),e("div",js,[e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,Ss),e("input",{type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,Is)]),e("button",Ls,l(t.$t("sendNow")),1)])])])]),e("p",Ts,[E(l(t.$t("ifYouFaceAProplem")),1),e("a",As,l(t.$t("sendUsNow")),1)])])]),A(O)],64)}const Bs=Be(gt,[["render",Cs]]);export{Bs as default};
