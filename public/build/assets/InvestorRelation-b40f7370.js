import{N as c}from"./Navbar-a431435c.js";import{L as d}from"./LightFooter-1df0cbd4.js";import{g as u,bF as m,h as _,i as f,o as n,c as s,a as i,b as t,n as l,f as o,t as g,F as p}from"./main-582ffa54.js";import"./flowbite-vue-6c584d9b.js";const v={class:"company-info py-24 bg-background-section pt-40"},h={class:"container mx-auto"},b={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},x=["src"],y={key:0,class:"font-bold lg:text-3xl mb-4 text-center md:text-start"},k=["innerHTML"],F={__name:"InvestorRelation",setup(L){const e=u({}),r=m();return _(async()=>{const a=await f.get(`/api/investors/${r.params.id}`);e.value=a.data.investor,console.log(e.value)}),(a,I)=>(n(),s(p,null,[i(c,{class:"bg-black fixed z-50 w-full"}),t("section",v,[t("div",h,[t("div",b,[t("div",{class:l(["img-company-info flex justify-center",a.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e.value.media?(n(),s("img",{key:0,src:e.value.media[0].original_url,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,x)):o("",!0)],2),t("div",{class:l(["d-info h-full flex flex-col justify-center",a.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e.value.title?(n(),s("h1",y,g(e.value.title[a.$i18n.locale]),1)):o("",!0),e.value.content?(n(),s("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:e.value.content[a.$i18n.locale]},null,8,k)):o("",!0)],2)])])]),i(d)],64))}};export{F as default};