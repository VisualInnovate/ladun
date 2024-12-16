import{I as b}from"./ImgBanner-030c29fc.js";import{N as u}from"./Navbar-de13b6bf.js";import{L as g}from"./LightFooter-5c165760.js";import{_ as p}from"./ladun-logo-banner-8ad13b58.js";import{_ as h,b as i,d as a,e as o,f as r,g as t,F as c,l as f,n as x,t as d,j as v}from"./main-6029422f.js";import"./flowbite-vue-1b89bae2.js";const w={data(){return{companies:[],banner:""}},components:{ImgBanner:b,Navbar:u,LightFooter:g},methods:{callbanner(){axios.get("/api/banners-pages").then(e=>{this.banner=e.data.pages[0].media[0].original_url,console.log(this.banner)})},getAllCompanies(){axios.get("/api/companies").then(e=>{this.companies=e.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies(),this.callbanner()}},k={class:"pt-[4rem] dark:text-white dark:bg-black"},y={class:"relative img-banner-slot"},L=t("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),N=["src"],C=t("div",{class:"z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"},[t("img",{class:"w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3",src:p})],-1),$={class:"company py-28 bg-background-section dark:bg-black"},F={class:"px-[5%] mx-auto"},j={class:"grid lg:grid-cols-4 gap-3 w-full"},z={class:"w-full md:w-[70%] m-auto"},B=["src"],I={class:"text-center w-full lg:h-[90%] p-2"},A={class:"justify-center font-bold text-[16x] dark:text-gray-300"},V=["innerHTML"],E={key:0,class:"absolute bottom-4 left-[50%] -translate-x-[50%] w-full"},H=["href"];function M(e,S,T,D,n,R){const m=i("Navbar"),_=i("LightFooter");return a(),o(c,null,[r(m,{class:"bg-black fixed z-50 w-full"}),t("div",k,[t("div",y,[L,t("img",{class:"w-full",style:{height:"450px"},src:n.banner},null,8,N),C])]),t("section",$,[t("div",F,[t("div",j,[(a(!0),o(c,null,f(n.companies,s=>{var l;return a(),o("div",{key:s.id,style:{border:"1px solid #AE9643"},class:x([e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight","relative rounded-2xl border border-light-brown overflow-hidden dark:bg-gray-800 content-center p-2 pb-8 pt-5 items-center bg-[#fbfbfb] mb-12 w-[100%] mx-auto"])},[t("div",z,[t("img",{style:{transform:"scale(1.05)"},class:"img-companies max-h-[171px] bg-[white] rounded-full border-2 mb-4 m-auto",src:(l=s.media[0])==null?void 0:l.original_url,alt:"Sunset in the mountains"},null,8,B)]),t("div",I,[t("h3",A,d(s.title[e.$i18n.locale]),1),t("p",{class:"text-[#6e6b6b] text-justify justify-start py-6 text-xs dark:text-gray-400",innerHTML:s.content[e.$i18n.locale]},null,8,V),s.url!=null?(a(),o("div",E,[t("a",{href:s.url,target:"_blank",class:"special-button button bg-dark-brown rounded-3xl text-white px-4 py-2 ml-4"},d(e.$t("visit")),9,H)])):v("",!0)])],2)}),128))])])]),r(_)],64)}const Q=h(w,[["render",M]]);export{Q as default};
