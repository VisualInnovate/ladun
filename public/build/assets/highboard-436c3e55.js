import{_ as u,i as g,r as n,o,c as r,a as i,b as t,t as a,F as c,m as h}from"./main-6b5f2936.js";import{N as m}from"./Navbar-b07f10ff.js";import{L as p}from"./LightFooter-6a790018.js";import"./flowbite-vue-54e19971.js";const b={name:"highboard",data(){return{structure:{}}},components:{Navbar:m,LightFooter:p},mounted(){g.get("/api/structure").then(s=>{this.structure=s.data.structure})}},f={class:"company-manager py-36 bg-background-section dark:bg-black pt-40"},x={class:"text-center font-bold mb-12 text-3xl dark:text-[white]"},v={class:"container mx-auto flex justify-center"},k={class:"grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20",id:"header-strucre"},w={class:"max-w-sm rounded-xl p-2 strucre animate__animated animate__fadeInUp"},$={class:"bg-white border border-light-brown rounded-xl shadow dark:border-gray-700 pb-12 pt-7 h-full"},L={class:"flex justify-center px-4 pt-4"},y={class:"flex flex-col items-center pb-10"},N=["src","alt"],F={class:"mb-1 text-xl text-gray-900 dark:text-white font-bold"},j={class:"text-sm text-gray-500 dark:text-gray-400"},B=["innerHTML"];function D(s,H,M,T,d,V){const l=n("Navbar"),_=n("LightFooter");return o(),r(c,null,[i(l,{class:"bg-black fixed z-50 w-full"}),t("section",f,[t("h1",x,a(s.$t("boradOfDirectors")),1),t("div",v,[t("div",k,[(o(!0),r(c,null,h(d.structure,e=>(o(),r("div",w,[t("div",$,[t("div",L,[t("div",y,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${e.image}`,alt:`/storage/${e.image}`},null,8,N),t("h5",F,a(e.name[s.$i18n.locale]),1),t("span",j,a(e.position[s.$i18n.locale]),1),t("div",{class:"flex text-justify mt-2",innerHTML:e.qualification[s.$i18n.locale]},null,8,B)])])])]))),256))])])]),i(_)],64)}const I=u(b,[["render",D]]);export{I as default};
