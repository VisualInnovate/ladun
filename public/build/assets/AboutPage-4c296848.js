import{_ as b}from"./Navbar-f11039eb.js";import{_ as x}from"./DarkFooter-e03d8ade.js";import{U as v,P as w}from"./flowbite-vue-046a6a84.js";import{f as d,g as y,h as _,o as n,c as o,d as c,a as t,n as g,u as f,l as u,t as l,F as p,b as k}from"./main-c296c6be.js";const $="/build/assets/play-button-682e1928.png",j={class:"company-info py-24 bg-background-section pt-40"},L={class:"container mx-auto"},I={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},B={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},M=["innerHTML"],T={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},H={class:"flex items-center special-button text-2xl button bg-dark-brown hover:bg-green-500 cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-48"},U={class:"flex text-dark-brown items-center hover:hover:text-red-500 cursor-pointer"},E=t("img",{src:$,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),N={class:"font-bold text-3xl"},P={class:"company-manager py-24 bg-background-section"},R={class:"text-center font-bold mb-12 text-3xl"},V={class:"container mx-auto flex justify-center"},z={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20"},C={class:"max-w-sm border-2 border-gray-border-light rounded-xl p-2",id:"strucre"},D={class:"bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7 h-full"},F={class:"flex justify-center px-4 pt-4"},O={class:"flex flex-col items-center pb-10"},q=["src","alt"],A={class:"mb-1 text-xl text-gray-900 dark:text-white font-bold"},G={class:"text-sm text-gray-500 dark:text-gray-400"},S=["innerHTML"],X={__name:"AboutPage",setup(Y){const r=d([]),a=d({}),m=d({}),h=e=>e?Object.values(e).map(i=>({src:i.original_url,alt:i.name})):[];return y(async()=>{window.addEventListener("scroll",function(){let s=document.getElementById("strucre");window.scrollY>=s.offsetTop-200?s.classList.add("animate__animated","animate__fadeInUp"):s.classList.remove("animate__animated","animate__fadeInUp")});const e=await _.get("/api/about");a.value=e.data[0],r.value=h(a.value.media),e.data[0].media.length||r.value.push({src:"/storage/image_placeholder.jpg",alt:"brief"}),console.log(r.value);const i=await _.get("/api/structure");m.value=i.data.structure}),(e,i)=>(n(),o(p,null,[c(b,{class:"bg-black fixed z-50 w-full"}),t("section",j,[t("div",L,[t("div",I,[r.value?(n(),o("div",{key:0,class:g(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[c(f(v),{pictures:r.value,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):u("",!0),t("div",{class:g(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[a.value.title?(n(),o("h1",B,l(a.value.title[e.$i18n.locale]),1)):u("",!0),a.value.content?(n(),o("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:a.value.content[e.$i18n.locale]},null,8,M)):u("",!0),t("div",T,[t("a",H,[c(f(w),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,l(e.$t("call_us")),1)]),t("a",U,[E,t("span",N,l(e.$t("video")),1)])])],2)])])]),t("section",P,[t("h1",R,l(e.$t("boradOfDirectors")),1),t("div",V,[t("div",z,[(n(!0),o(p,null,k(m.value,s=>(n(),o("div",C,[t("div",D,[t("div",F,[t("div",O,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${s.image}`,alt:`/storage/${s.image}`},null,8,q),t("h5",A,l(s.name[e.$i18n.locale]),1),t("span",G,l(s.position[e.$i18n.locale]),1),t("div",{class:"flex text-justify mt-2",innerHTML:s.qualification[e.$i18n.locale]},null,8,S)])])])]))),256))])])]),c(x)],64))}};export{X as default};
