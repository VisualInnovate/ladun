import{_,i as u,r as n,o as r,c as o,a as i,b as t,t as a,F as c,m as h}from"./main-c346dbbb.js";import{N as m}from"./Navbar-e3ddbb62.js";import{L as b}from"./LightFooter-8bb0edc8.js";import"./flowbite-vue-70583c93.js";const p={name:"highboard",data(){return{structure:{}}},components:{Navbar:m,LightFooter:b},mounted(){u.get("/api/structure").then(s=>{this.structure=s.data.structure})}},f={class:"company-manager py-36 bg-background-section"},x={class:"text-center font-bold mb-12 text-3xl"},v={class:"container mx-auto flex justify-center"},w={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20",id:"header-strucre"},$={class:"max-w-sm border-2 border-gray-border-light rounded-xl p-2 strucre animate__animated animate__fadeInUp"},k={class:"bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7 h-full"},y={class:"flex justify-center px-4 pt-4"},L={class:"flex flex-col items-center pb-10"},N=["src","alt"],F={class:"mb-1 text-xl text-gray-900 dark:text-white font-bold"},j={class:"text-sm text-gray-500 dark:text-gray-400"},B=["innerHTML"];function D(s,H,M,T,d,V){const l=n("Navbar"),g=n("LightFooter");return r(),o(c,null,[i(l,{class:"bg-black fixed z-50 w-full"}),t("section",f,[t("h1",x,a(s.$t("boradOfDirectors")),1),t("div",v,[t("div",w,[(r(!0),o(c,null,h(d.structure,e=>(r(),o("div",$,[t("div",k,[t("div",y,[t("div",L,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${e.image}`,alt:`/storage/${e.image}`},null,8,N),t("h5",F,a(e.name[s.$i18n.locale]),1),t("span",j,a(e.position[s.$i18n.locale]),1),t("div",{class:"flex text-justify mt-2",innerHTML:e.qualification[s.$i18n.locale]},null,8,B)])])])]))),256))])])]),i(g)],64)}const I=_(p,[["render",D]]);export{I as default};