import{N as r}from"./Navbar-b07f10ff.js";import{L as u}from"./LightFooter-6a790018.js";import{g as d,bF as m,h as g,i as _,o as n,c as s,a as i,b as t,n as l,f as o,t as p,F as f}from"./main-6b5f2936.js";import"./flowbite-vue-54e19971.js";const v={class:"company-info py-24 bg-background-section pt-40"},h={class:"container mx-auto"},b={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},x=["src"],y={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},k=["innerHTML"],I={__name:"Page",setup(L){const e=d({}),c=m();return g(async()=>{const a=await _.get(`/api/pages/${c.params.slug}`);e.value=a.data.page,console.log(e.value)}),(a,N)=>(n(),s(f,null,[i(r,{class:"bg-black fixed z-50 w-full"}),t("section",v,[t("div",h,[t("div",b,[t("div",{class:l(["img-company-info flex justify-center",a.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e.value.media?(n(),s("img",{key:0,src:e.value.media[0].original_url,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,x)):o("",!0)],2),t("div",{class:l(["d-info h-full flex flex-col justify-center",a.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e.value.title?(n(),s("h1",y,p(e.value.title[a.$i18n.locale]),1)):o("",!0),e.value.content?(n(),s("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:e.value.content[a.$i18n.locale]},null,8,k)):o("",!0)],2)])])]),i(u)],64))}};export{I as default};
