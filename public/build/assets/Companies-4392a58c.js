import{I as p}from"./ImgBanner-83fa7506.js";import{_}from"./Navbar-cc763fc9.js";import{_ as u}from"./DarkFooter-a74d2bf7.js";import{_ as g,r as n,o,c as a,d as r,a as t,F as i,b,ad as f,t as l}from"./main-dfb2f098.js";import"./flowbite-vue-589d81c5.js";const h="/build/assets/companies-banner-2f481594.png",v="/build/assets/ladun-logo-banner-b5c1a94a.png",x={data(){return{companies:[]}},components:{ImgBanner:p,Navbar:_,DarkFooter:u},methods:{getAllCompanies(){axios.get("/api/companies").then(e=>{this.companies=e.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies()}},w=f('<div class="pt-[4rem]"><div class="relative img-banner-slot"><div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div><img class="w-full" src="'+h+'"><div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3" src="'+v+'"></div></div></div>',1),k={class:"company py-28 bg-background-section"},y={class:"container mx-auto"},$={class:"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-32"},N=["src"],F={class:"justify-center font-bold text-[16x]"},B=["innerHTML"],C={class:"flex content-start flex-row justify-start w-full"},D=["href"];function j(e,z,I,L,c,S){const d=n("Navbar"),m=n("DarkFooter");return o(),a(i,null,[r(d,{class:"bg-black fixed z-50 w-full"}),w,t("section",k,[t("div",y,[t("div",$,[(o(!0),a(i,null,b(c.companies,s=>(o(),a("div",{key:s.id,class:"animate__animated animate__fadeInUp hover:border-dark-brown rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 w-[90%] md:w-[85%] mx-auto"},[t("img",{class:"img-companies w-[120px] h-[120px] rounded-full mb-4",src:s.media[0].original_url,alt:"Sunset in the mountains"},null,8,N),t("h3",F,l(s.title[e.$i18n.locale]),1),t("p",{class:"px-7 pb-6 pt-3 text-justify",innerHTML:s.content[e.$i18n.locale].slice(0,200)+"..."},null,8,B),t("div",C,[t("a",{href:s.url,target:"_blank",class:"special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4"},l(e.$t("visit")),9,D)])]))),128))])])]),r(m)],64)}const E=g(x,[["render",j]]);export{E as default};
