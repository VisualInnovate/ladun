import{C as x,S as w,P as k,N as y}from"./carousel.es-90292216.js";import{N}from"./Navbar-de13b6bf.js";import{d as $}from"./flowbite-vue-1b89bae2.js";import{M as B}from"./index-4b78f0e0.js";import{_ as P}from"./ladun-logo-banner-8ad13b58.js";import{_ as I,b as o,d as n,e as i,f as a,g as t,F as c,l as _,ac as j,t as s,k as d,m as M,h as S}from"./main-6029422f.js";const C="/build/assets/companies-banner-2f481594.png",V="/build/assets/projects_3-85fe373b.png",z={name:"utilities",data(){return{units:{}}},components:{Carousel:x,Slide:w,Pagination:k,Navigation:y,Navbar:N,BuildingOffice2Icon:$,MapPinIcon:B},beforeMount(){axios.get(`/api/units/${this.$route.params.id}`).then(e=>{this.units=e.data.units,console.log(this.units)})}},O=j('<div class="pt-[4rem]"><div class="relative img-banner-slot"><div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div><img class="w-full" src="'+C+'"><div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3" src="'+P+'"></div></div></div>',1),F={class:"container mx-auto py-10"},D={class:"mb-5"},E={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project"},L=t("img",{class:"w-full rounded-lg",src:V,alt:"Project Photo"},null,-1),R={class:"flex flex-col p-2"},T={class:"ltr:text-start rtl:text-end mb-1"},U={class:"text-dark-brown flex rtl:flex-row-reverse"},q={class:"mx-1"},A={class:"flex flex-wrap m-2 justify-between rtl:flex-row-reverse"},G={class:"whitespace-nowrap text-gray-500"},H={class:""},J={class:"whitespace-nowrap text-gray-500"},K={class:"bg-dark-brown text-white rounded-lg px-4 py-[5px] text-[11px]"};function Q(e,W,X,Y,p,Z){const m=o("Navbar"),u=o("BuildingOffice2Icon"),h=o("MapPinIcon"),f=o("slide"),g=o("navigation"),b=o("pagination"),v=o("carousel");return n(),i(c,null,[a(m,{class:"bg-black fixed z-50 w-full"}),O,t("div",F,[(n(!0),i(c,null,_(p.units,(r,tt)=>(n(),i("div",null,[t("h2",D,s(r[0].type[e.$i18n.locale]),1),a(v,{"items-to-show":4},{addons:d(()=>[a(g),a(b)]),default:d(()=>[(n(!0),i(c,null,_(r,l=>(n(),M(f,{key:r.id},{default:d(()=>[t("div",E,[L,t("div",R,[t("h3",T,s(l.name[e.$i18n.locale]),1),t("div",U,[t("small",null,s(l.price),1),S(),t("span",q,s(e.$t("SR")),1)])]),t("div",A,[t("div",null,[a(u,{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",G,s(l.area)+" "+s(e.$t("areaUnit")),1)]),t("div",H,[a(h,{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",J,s(l.location_in_project),1)]),t("button",K,s(e.$t("book")),1)])])]),_:2},1024))),128))]),_:2},1024)]))),256))])],64)}const it=I(z,[["render",Q]]);export{it as default};
