import{_ as r}from"./Navbar-fbaa7e48.js";import{_ as d}from"./DarkFooter-c0afd698.js";import{f as m,by as u,g as _,h as f,o as n,c as s,d as i,a as t,n as l,l as o,t as p,F as g}from"./main-e44838bf.js";import"./flowbite-vue-ebd131a6.js";const v={class:"company-info py-24 bg-background-section pt-40"},h={class:"container mx-auto"},x={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},b=["src"],y={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},k=["innerHTML"],j={__name:"InvestorRelation",setup($){const e=m({}),c=u();return _(async()=>{const a=await f.get(`/api/investors/${c.params.id}`);e.value=a.data.investor,console.log(e.value)}),(a,I)=>(n(),s(g,null,[i(r,{class:"bg-black fixed z-50 w-full"}),t("section",v,[t("div",h,[t("div",x,[t("div",{class:l(["img-company-info flex justify-center",a.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e.value.media?(n(),s("img",{key:0,src:e.value.media[0].original_url,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,b)):o("",!0)],2),t("div",{class:l(["d-info h-full flex flex-col justify-center",a.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e.value.title?(n(),s("h1",y,p(e.value.title[a.$i18n.locale]),1)):o("",!0),e.value.content?(n(),s("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:e.value.content[a.$i18n.locale]},null,8,k)):o("",!0)],2)])])]),i(d)],64))}};export{j as default};
