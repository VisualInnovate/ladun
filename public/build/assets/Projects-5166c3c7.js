import{_ as V}from"./locationIcon-3842aafb.js";import{N as L}from"./Navbar-ff6492de.js";import{L as $}from"./LightFooter-81db9d89.js";import{b as x,L as h,U as B}from"./flowbite-vue-7d1477b2.js";import{g as b,h as I,j as M,r as N,o as s,c as r,a as n,b as e,w as d,u,F as _,m as g,e as p,n as T,t as f,d as w}from"./main-ec40c0c3.js";const j={class:"mb-4 pt-32 [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black"},U={class:"relative"},z=e("div",{class:"absolute w-full h-full top-0 left-0 bg-background-overlay z-20"},null,-1),C=["src","alt"],F={class:"grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto [&>div]:h-[532px]"},D=["src","alt"],H={class:"flex flex-col items-center"},P={class:"flex-initial p-2 font-bold"},A={class:"flex-initial flex p-2 text-dark-brown"},E=e("img",{src:V,alt:"locationIcon",class:"rtl:ml-2 ltr:mr-2"},null,-1),G={class:"flex-initial mb-2 text-dark-brown"},O={class:"grid grid-cols-4 mb-4"},R=["innerHTML"],S={class:"flex flex-col justify-end col-start-4 col-end-4"},q={class:"absolute bottom-0 w-full"},Z={__name:"Projects",setup(J){const k=l=>Object.values(l).map(a=>({src:a.original_url,alt:a.name})),c=b(""),m=b(""),v=b([]);return I(async()=>{const l=await M.get("/api/departments");v.value=l.data.data,c.value=v.value[0].title.en,m.value=v.value[0].regions[0].title.en,console.log(c.value,"----",m.value)}),(l,a)=>{const y=N("router-link");return s(),r(_,null,[n(L,{class:"bg-black fixed z-50 w-full"}),e("div",j,[n(u(x),{variant:"underline",modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=t=>c.value=t)},{default:d(()=>[(s(!0),r(_,null,g(v.value,t=>(s(),p(u(h),{name:t.title.en,title:t.title[l.$i18n.locale],class:"[&>div>div>div>ul]:justify-center [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown"},{default:d(()=>[e("div",U,[z,e("img",{src:t.mainImage.src,alt:t.mainImage.alt,class:"w-full"},null,8,C)]),n(u(x),{variant:"underline",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=o=>m.value=o),class:"justify-center py-10"},{default:d(()=>[(s(!0),r(_,null,g(t.regions,o=>(s(),p(u(h),{name:o.title.en,title:o.title[l.$i18n.locale]},{default:d(()=>[e("div",F,[(s(!0),r(_,null,g(o.projects,i=>(s(),r("div",{class:T(["rounded-xl border-2 border-gray-border-light bg-white relative mx-2",l.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("img",{class:"w-20 h-20 rounded-full mx-auto my-3 mb-0",src:i.logo.original_url,alt:i.logo.name},null,8,D),e("div",H,[e("h3",P,f(i.title[l.$i18n.locale]),1),e("h4",A,[E,w(" "+f(o.title[l.$i18n.locale]),1)]),e("small",G,f(t.title[l.$i18n.locale]),1)]),e("div",O,[e("p",{class:"px-2 text-grey text-xs col-start-1 col-end-4",innerHTML:i.text[l.$i18n.locale].slice(0,110)+" ..."},null,8,R),e("div",S,[n(y,{class:"bg-dark-brown text-white rounded-md h-6 max-w-20 text-xs text-center flex flex-col justify-center mx-2",to:{name:"Project",params:{id:i.id}}},{default:d(()=>[w(f(l.$t("readMore")),1)]),_:2},1032,["to"])])]),e("div",q,[n(u(B),{pictures:k(i.gallery),class:"[&>div>div>img]:h-full [&>div:first-child]:h-[243px] [&>div>button]:mx-2 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])],2))),256))])]),_:2},1032,["name","title"]))),256))]),_:2},1032,["modelValue"])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),n($)],64)}}};export{Z as default};