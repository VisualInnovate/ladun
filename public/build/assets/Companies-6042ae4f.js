import{I as u}from"./ImgBanner-f3713376.js";import{_ as b}from"./Navbar-da429132.js";import{_ as g}from"./DarkFooter-45e61d9c.js";import{_ as f,r as o,o as n,c as a,d as i,a as t,w as r,F as l,b as h,j as x,t as c,p as v,e as w}from"./main-7d35b1ac.js";const k="/build/assets/companies-banner-2f481594.png";const y={data(){return{companies:[]}},components:{ImgBanner:u,Navbar:b,DarkFooter:g},methods:{getAllCompanies(){axios.get("/api/companies").then(e=>{this.companies=e.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies()}},$=e=>(v("data-v-65551b9c"),e=e(),w(),e),C={class:"pt-32"},I=$(()=>t("img",{src:k},null,-1)),N={class:"company py-28 bg-background-section"},F={class:"container mx-auto"},S={class:"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-32"},B=["src"],D={class:"text-2xl font-bold"},j=["innerHTML"],L={class:"flex content-start flex-row justify-start w-full"},T={class:"special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4"};function V(e,A,H,M,d,z){const _=o("Navbar"),m=o("img-banner"),p=o("DarkFooter");return n(),a(l,null,[i(_,{class:"bg-black fixed z-50 w-full"}),t("div",C,[i(m,null,{text:r(()=>[x(c(e.$t("banner_company")),1)]),default:r(()=>[I]),_:1})]),t("section",N,[t("div",F,[t("div",S,[(n(!0),a(l,null,h(d.companies,s=>(n(),a("div",{key:s.id,class:"rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4 md:w-full mx-auto"},[t("img",{class:"img-companies rounded-full mb-6",src:s.media[0].original_url,alt:"Sunset in the mountains"},null,8,B),t("h3",D,c(s.title[e.$i18n.locale]),1),t("p",{class:"text-base px-7 pb-6 pt-3 text-justify",innerHTML:s.content[e.$i18n.locale].slice(0,200)+"..."},null,8,j),t("div",L,[t("a",T,c(e.$t("visit")),1)])]))),128))])])]),i(p)],64)}const K=f(y,[["render",V],["__scopeId","data-v-65551b9c"]]);export{K as default};
