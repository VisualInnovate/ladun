import{C as x,S as w,P as y,N as k}from"./carousel.es-09798241.js";import{N}from"./Navbar-02e01456.js";import{a as $}from"./flowbite-vue-c79a5a19.js";import{M as B}from"./index-7bf90e68.js";import{_ as P,a as I}from"./ladun-logo-banner-b39f7bc9.js";import{_ as j,r as o,o as n,c as i,a,b as t,F as c,m as _,ae as M,t as s,w as d,e as S,d as C}from"./main-55e70e20.js";const V="/build/assets/projects_3-85fe373b.png",z={name:"utilities",data(){return{units:{}}},components:{Carousel:x,Slide:w,Pagination:y,Navigation:k,Navbar:N,BuildingOffice2Icon:$,MapPinIcon:B},beforeMount(){axios.get(`/api/units/${this.$route.params.id}`).then(e=>{this.units=e.data.units,console.log(this.units)})}},O=M('<div class="pt-[4rem]"><div class="relative img-banner-slot"><div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div><img class="w-full" src="'+P+'"><div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3" src="'+I+'"></div></div></div>',1),F={class:"container mx-auto py-10"},D={class:"mb-5"},E={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project"},L=t("img",{class:"w-full rounded-lg",src:V,alt:"Project Photo"},null,-1),R={class:"flex flex-col p-2"},T={class:"ltr:text-start rtl:text-end mb-1"},U={class:"text-dark-brown flex rtl:flex-row-reverse"},q={class:"mx-1"},A={class:"flex flex-wrap m-2 justify-between rtl:flex-row-reverse"},G={class:"whitespace-nowrap text-gray-500"},H={class:""},J={class:"whitespace-nowrap text-gray-500"},K={class:"bg-dark-brown text-white rounded-lg px-4 py-[5px] text-[11px]"};function Q(e,W,X,Y,p,Z){const m=o("Navbar"),u=o("BuildingOffice2Icon"),h=o("MapPinIcon"),f=o("slide"),g=o("navigation"),b=o("pagination"),v=o("carousel");return n(),i(c,null,[a(m,{class:"bg-black fixed z-50 w-full"}),O,t("div",F,[(n(!0),i(c,null,_(p.units,(r,tt)=>(n(),i("div",null,[t("h2",D,s(r[0].type[e.$i18n.locale]),1),a(v,{"items-to-show":4},{addons:d(()=>[a(g),a(b)]),default:d(()=>[(n(!0),i(c,null,_(r,l=>(n(),S(f,{key:r.id},{default:d(()=>[t("div",E,[L,t("div",R,[t("h3",T,s(l.name[e.$i18n.locale]),1),t("div",U,[t("small",null,s(l.price),1),C(),t("span",q,s(e.$t("SR")),1)])]),t("div",A,[t("div",null,[a(u,{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",G,s(l.area)+" "+s(e.$t("areaUnit")),1)]),t("div",H,[a(h,{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",J,s(l.location_in_project),1)]),t("button",K,s(e.$t("book")),1)])])]),_:2},1024))),128))]),_:2},1024)]))),256))])],64)}const it=j(z,[["render",Q]]);export{it as default};
