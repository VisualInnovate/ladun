<<<<<<<< HEAD:public/build/assets/AboutPage-f5e7ffc9.js
import{N as v}from"./Navbar-1b646a0f.js";import{L as x}from"./LightFooter-3b8d9978.js";import{U as w}from"./flowbite-vue-f93725f4.js";import{P as y}from"./index-a1a2baab.js";import{g as u,h as k,i as f,o as n,c as r,a as c,b as t,n as p,u as _,f as d,t as m,F as L}from"./main-b7d7269e.js";const I="/build/assets/play-button-682e1928.png",j={class:"company-info py-24 bg-background-section dark:bg-black pt-40"},B={class:"container mx-auto dark:text-white dark:bg-black"},N={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$={key:0,class:"font-bold text-3xl mb-4 text-center dark:text-[white] md:text-start"},E=["innerHTML"],C={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},F={class:"flex items-center special-button text-2xl button rounded-3xl bg-dark-brown hover:bg-[#5d5a2e] cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-[200px]",href:"https://wa.me/920011560",target:"_blank"},M=["href"],P=t("img",{src:I,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),R={class:"font-bold text-3xl"},D={__name:"AboutPage",setup(T){const s=u([]),a=u({}),g=u({}),h=e=>e?Object.values(e).map(l=>({src:l.original_url,alt:l.name})):[];return k(async()=>{window.addEventListener("scroll",function(){let o=document.getElementsByClassName("strucre"),b=document.getElementById("header-strucre");console.log(o.length);for(let i=0;i<o.length;i++)window.scrollY>=b.offsetTop-700?o[i].classList.add("animate__animated","animate__fadeInLeft"):o[i].classList.remove("animate__animated","animate__fadeInLeft")});const e=await f.get("/api/about");a.value=e.data[0],s.value=h(a.value.media),e.data[0].media.length||s.value.push({src:"/storage/image_placeholder.jpg",alt:"brief"}),console.log(s.value);const l=await f.get("/api/structure");g.value=l.data.structure}),(e,l)=>(n(),r(L,null,[c(v,{class:"bg-black fixed z-50 w-full"}),t("section",j,[t("div",B,[t("div",N,[s.value?(n(),r("div",{key:0,class:p(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[c(_(w),{pictures:s.value,class:"about-us-carousel rounded-3xl h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>div>img]:rounded-3xl [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):d("",!0),t("div",{class:p(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[a.value.title?(n(),r("h1",$,m(a.value.title[e.$i18n.locale]),1)):d("",!0),a.value.content?(n(),r("p",{key:1,class:"mb-4 text-xl dark:text-[white] text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:a.value.content[e.$i18n.locale]},null,8,E)):d("",!0),t("div",C,[t("a",F,[c(_(y),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,m(e.$t("call_us")),1)]),a.value.video?(n(),r("a",{key:0,href:a.value.video,target:"_blank",class:"flex text-dark-brown items-center hover:text-[#5d5a2e] cursor-pointer"},[P,t("span",R,m(e.$t("video")),1)],8,M)):d("",!0)])],2)])])]),c(x)],64))}};export{D as default};
========
import{N as v}from"./Navbar-663efb16.js";import{L as x}from"./LightFooter-048c4e31.js";import{U as w}from"./flowbite-vue-d6310c92.js";import{P as y}from"./index-435864f1.js";import{g as u,h as k,i as f,o as n,c as r,a as c,b as t,n as p,u as _,f as d,t as m,F as L}from"./main-0c384395.js";const I="/build/assets/play-button-682e1928.png",j={class:"company-info py-24 bg-background-section dark:bg-black pt-40"},B={class:"container mx-auto dark:text-white dark:bg-black"},N={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$={key:0,class:"font-bold text-3xl mb-4 text-center dark:text-[white] md:text-start"},E=["innerHTML"],C={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},F={class:"flex items-center special-button text-2xl button rounded-3xl bg-dark-brown hover:bg-[#5d5a2e] cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-[200px]",href:"https://wa.me/920011560",target:"_blank"},M=["href"],P=t("img",{src:I,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),R={class:"font-bold text-3xl"},D={__name:"AboutPage",setup(T){const s=u([]),a=u({}),g=u({}),h=e=>e?Object.values(e).map(l=>({src:l.original_url,alt:l.name})):[];return k(async()=>{window.addEventListener("scroll",function(){let o=document.getElementsByClassName("strucre"),b=document.getElementById("header-strucre");console.log(o.length);for(let i=0;i<o.length;i++)window.scrollY>=b.offsetTop-700?o[i].classList.add("animate__animated","animate__fadeInLeft"):o[i].classList.remove("animate__animated","animate__fadeInLeft")});const e=await f.get("/api/about");a.value=e.data[0],s.value=h(a.value.media),e.data[0].media.length||s.value.push({src:"/storage/image_placeholder.jpg",alt:"brief"}),console.log(s.value);const l=await f.get("/api/structure");g.value=l.data.structure}),(e,l)=>(n(),r(L,null,[c(v,{class:"bg-black fixed z-50 w-full"}),t("section",j,[t("div",B,[t("div",N,[s.value?(n(),r("div",{key:0,class:p(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[c(_(w),{pictures:s.value,class:"about-us-carousel rounded-3xl h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>div>img]:rounded-3xl [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):d("",!0),t("div",{class:p(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[a.value.title?(n(),r("h1",$,m(a.value.title[e.$i18n.locale]),1)):d("",!0),a.value.content?(n(),r("p",{key:1,class:"mb-4 text-xl dark:text-[white] text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:a.value.content[e.$i18n.locale]},null,8,E)):d("",!0),t("div",C,[t("a",F,[c(_(y),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,m(e.$t("call_us")),1)]),a.value.video?(n(),r("a",{key:0,href:a.value.video,target:"_blank",class:"flex text-dark-brown items-center hover:text-[#5d5a2e] cursor-pointer"},[P,t("span",R,m(e.$t("video")),1)],8,M)):d("",!0)])],2)])])]),c(x)],64))}};export{D as default};
>>>>>>>> 63a9ca44ec6285840258ac2ab9c8764e010b7609:public/build/assets/AboutPage-096fd574.js
