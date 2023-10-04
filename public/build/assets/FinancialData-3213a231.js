import{N as j}from"./Navbar-c58c66c5.js";import{I as E}from"./ImgBanner-964c1ace.js";import{_ as B,j as I,r as u,o as s,c as a,a as g,w as y,b as e,F as i,m as o,d as $,t,n as p}from"./main-3bbcade7.js";import{L as F}from"./LightFooter-7e0cfe0c.js";import"./flowbite-vue-a889162a.js";const L="http://127.0.0.1:8000/build/assets/finncial-banner-035dab5d.png",b="http://127.0.0.1:8000/build/assets/financial-logo-770a3116.png",N={computed:{i18n(){return I}},components:{Navbar:j,ImgBanner:E,LightFooter:F},data(){return{financials:[],reports:[],financialAndReports:[]}},methods:{getAllFincials(){axios.get("/api/financials").then(n=>{const x=Object.values(n.data.financials).reverse();var w=Object.keys(n.data.financials).reverse();const v=Object.values(n.data.reports).reverse();var d=Object.keys(n.data.reports).reverse();console.log(n.data.financials);var _=0;x.forEach(f=>{let c={};c[w[_]]=f,this.financials.push(c),_+=1}),console.log(this.financials),_=0,v.forEach(f=>{let c={};c[d[_]]=f,this.reports.push(c),_+=1}),console.log(this.financialAndReports)})}},mounted(){this.getAllFincials()}},R=e("img",{src:L},null,-1),V={class:"media-center py-28 bg-background-section pt-32"},A={class:"container mx-auto"},O={class:"grid grid-cols-1 lg:grid-cols-2 gap-5 flex-wrap"},C={key:0,class:""},z={class:"h-16 w-[80%] flex items-center px-4 text-xl justify-between"},D={class:"w-[100%] flex bg-[#E6E6E6] justify-between p-2"},K={class:"bg-[#E6E6E6] text-center my-auto truncate"},S={class:"year flex items-center text-[50px] font-bold",dir:"rtl"},T={class:"text-dark-brown"},q={class:""},G={class:"card flex flex-wrap md:flex-nowrap"},H=["href"],J={class:"flex flex-col items-center"},M=e("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[e("img",{class:"w-12 h-12",src:b,alt:"Bonnie image"})],-1),P={class:"mb-1 text-center text-lg font-medium text-gray-900 dark:text-white"},Q={class:"flex space-x-3 text-dark-brown font-bold"},U=e("div",{class:"justify-items-start card card flex flex-wrap lg:flex-nowrap"},null,-1),W={key:1,class:""},X={class:"h-16 w-[80%] items-center px-4 text-xl justify-between"},Y={class:"w-[100%] flex bg-[#E6E6E6] justify-between p-2"},Z={class:"bg-[#E6E6E6] w-[80%] text-center my-auto truncate"},ee={class:"year flex items-center text-[50px] font-bold my-auto",dir:"rtl"},te={class:"text-dark-brown"},se={class:""},ae={class:"card flex flex-wrap lg:flex-nowrap"},ne=["href"],le={class:"space-y-4 flex flex-col items-center"},ie=e("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[e("img",{class:"w-12 h-12",src:b,alt:"Bonnie image"})],-1),oe={class:"mb-1 text-center text-lg font-medium text-gray-900 dark:text-white"},re={class:"flex space-x-3 text-dark-brown font-bold"},ce=e("div",{class:"justify-items-start card card flex flex-wrap lg:flex-nowrap"},null,-1),de={class:""},_e={class:"h-16 w-[80%] text-right mt-2 flex items-start px-4 text-xl justify-between"},fe={class:"w-[100%] flex bg-[#E6E6E6] justify-between p-2"},he={class:"bg-[#E6E6E6] w-full text-center my-auto truncate"},me={class:"year flex items-center text-[50px] font-bold",dir:"rtl"},ue={class:"text-dark-brown"},ge={class:"grid grid-cols-4"},pe={class:"card flex flex-wrap lg:flex-nowrap"},be=["href"],xe={class:"flex flex-col items-center"},we=e("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[e("img",{class:"w-12 h-12",src:b,alt:"Bonnie image"})],-1),ve={class:"mb-1 text-center text-xl font-medium text-gray-900 dark:text-white"},ye={class:"flex space-x-3 text-dark-brown font-bold"},ke=e("div",{class:"justify-items-start card card flex flex-wrap lg:flex-nowrap"},null,-1);function je(n,x,w,v,d,_){const f=u("Navbar"),c=u("img-banner"),k=u("LightFooter");return s(),a(i,null,[g(f,{class:"bg-black fixed z-50 w-full"}),g(c,null,{text:y(()=>[$(t(n.$t("finncial_banner")),1)]),default:y(()=>[R]),_:1}),e("section",V,[e("div",A,[e("div",O,[d.reports.length!=0?(s(),a("div",C,[(s(!0),a(i,null,o(d.financials,h=>(s(),a("div",{key:n.index,class:"mb-12"},[(s(!0),a(i,null,o(h,(m,l)=>(s(),a("div",null,[e("header",{class:p(["flex w-full justify-between items-center mb-5",n.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",z,[e("div",D,[e("div",K,t(n.$t("header_finncial")),1)])]),e("div",S,[e("span",T,t(l[2])+t(l[3]),1),e("span",null,t(l[0])+t(l[1]),1)])],2),e("div",q,[e("div",G,[(s(!0),a(i,null,o(m,r=>(s(),a("a",{href:"storage/"+r.financial_file,class:"animate__animated animate__bounceIn mx-5 w-60 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"},[e("div",J,[M,e("h5",P,t(r.title[n.$i18n.locale]),1),e("div",Q,t(l),1)])],8,H))),256))]),U])]))),256))]))),128))])):(s(),a("div",W,[(s(!0),a(i,null,o(d.financials,h=>(s(),a("div",{key:n.index,class:"mb-12"},[(s(!0),a(i,null,o(h,(m,l)=>(s(),a("div",null,[e("header",{class:p(["flex flex-wrap justify-between mb-5",n.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",X,[e("div",Y,[e("div",Z,t(n.$t("header_finncial")),1)])]),e("div",ee,[e("span",te,t(l[2])+t(l[3]),1),e("span",null,t(l[0])+t(l[1]),1)])],2),e("div",se,[e("div",ae,[(s(!0),a(i,null,o(m,r=>(s(),a("a",{href:"storage/"+r.financial_file,class:"animate__animated animate__bounceIn mx-5 w-60 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"},[e("div",le,[ie,e("h5",oe,t(r.title[n.$i18n.locale]),1),e("div",re,t(l),1)])],8,ne))),256))]),ce])]))),256))]))),128))])),e("div",de,[(s(!0),a(i,null,o(d.reports,h=>(s(),a("div",{key:n.index,class:"mb-12"},[(s(!0),a(i,null,o(h,(m,l)=>(s(),a("div",null,[e("header",{class:p(["flex justify-between mb-5",n.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",_e,[e("div",fe,[e("div",he,t(n.$t("reports")),1)])]),e("div",me,[e("span",ue,t(l[2])+t(l[3]),1),e("span",null,t(l[0])+t(l[1]),1)])],2),e("div",ge,[e("div",pe,[(s(!0),a(i,null,o(m,r=>(s(),a("a",{href:"storage/"+r.year_file,class:"animate__animated animate__bounceIn mx-5 w-60 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"},[e("div",xe,[we,e("h5",ve,t(r.title[n.$i18n.locale]),1),e("div",ye,t(l),1)])],8,be))),256))]),ke])]))),256))]))),128))])])])]),g(k)],64)}const Le=B(N,[["render",je]]);export{Le as default};