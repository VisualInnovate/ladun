import{_ as b}from"./Navbar-5271b54f.js";import{I as u}from"./ImgBanner-a9dffda6.js";import{_ as x,bv as w,aM as r,o as n,c as o,g as i,w as d,a as t,F as l,r as _,h as k,t as e}from"./main-4630d0ed.js";import{_ as v}from"./DarkFooter-d58e9dc6.js";const y="/build/assets/finncial-banner-035dab5d.png",$="/build/assets/financial-logo-770a3116.png",F={computed:{i18n(){return w}},components:{Navbar:b,ImgBanner:u,DarkFooter:v},data(){return{financials:[]}},methods:{getAllFincials(){axios.get("/api/financials").then(s=>{this.financials=s.data.financials,console.log(this.financials)})}},mounted(){this.getAllFincials()}},N=t("img",{src:y},null,-1),B={class:"media-center py-28 bg-background-section"},D={class:"container mx-auto"},V={class:"flex flex-wrap justify-between items-center mb-5"},j={class:"bg-subtraction-ltr-png rtl:bg-subtraction-png h-16 w-[80%] flex items-center rtl:pr-8 ltr:pl-8 text-xl"},A={class:"year flex items-center text-[50px] font-bold",dir:"rtl"},C={class:"text-dark-brown"},I={class:"card w-[80%] flex"},z=["href"],E={class:"flex flex-col items-center"},L=t("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[t("img",{class:"w-12 h-12",src:$,alt:"Bonnie image"})],-1),M={class:"mb-1 text-center text-xl font-medium text-gray-900 dark:text-white"},S={class:"text-sm text-gray-500 dark:text-gray-400"},T={class:"flex space-x-3 text-dark-brown font-bold"};function q(s,G,H,J,m,K){const f=r("Navbar"),p=r("img-banner"),g=r("DarkFooter");return n(),o(l,null,[i(f,{class:"bg-black fixed z-50 w-full"}),i(p,null,{text:d(()=>[k(e(s.$t("finncial_banner")),1)]),default:d(()=>[N]),_:1}),t("section",B,[t("div",D,[(n(!0),o(l,null,_(m.financials,(h,a)=>(n(),o("div",{key:a,class:"mb-12"},[t("header",V,[t("div",j,e(s.$t("header_finncial")),1),t("div",A,[t("span",C,e(a[2])+e(a[3]),1),t("span",null,e(a[0])+e(a[1]),1)])]),t("div",I,[(n(!0),o(l,null,_(h,c=>(n(),o("a",{href:"storage/"+c.financial_file,class:"mx-4 w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"},[t("div",E,[L,t("h5",M,e(s.$t("list_money")),1),t("span",S,e(c.title[s.$i18n.locale]),1),t("div",T,e(a),1)])],8,z))),256))])]))),128))])]),i(g)],64)}const U=x(F,[["render",q]]);export{U as default};