import{_ as V}from"./locationIcon-3842aafb.js";import{_ as $,c as x,L as h,U as B}from"./Navbar-3e10ee22.js";import{_ as L}from"./DarkFooter-decabc9a.js";import{f as b,g as M,h as T,r as N,o as s,c as r,d as n,a as e,w as d,u as c,F as _,b as g,O as p,t as f,l as k}from"./main-eda8d0fe.js";const U={class:"bg-light-beige-background mb-4 pt-32 [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black"},j={class:"relative"},I=e("div",{class:"absolute w-full h-full top-0 left-0 bg-background-overlay z-20"},null,-1),z=["src","alt"],C={class:"grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto [&>div]:h-[532px]"},D={class:"rounded-xl border-2 border-gray-border-light bg-white relative mx-2"},F=["src","alt"],H={class:"flex flex-col items-center"},O={class:"flex-initial p-2 font-bold"},P={class:"flex-initial flex p-2 text-dark-brown"},A=e("img",{src:V,alt:"locationIcon",class:"rtl:ml-2 ltr:mr-2"},null,-1),E={class:"flex-initial mb-2 text-dark-brown"},G={class:"grid grid-cols-4 mb-4"},S=["innerHTML"],q={class:"flex flex-col justify-end col-start-4 col-end-4"},J={class:"absolute bottom-0 w-full"},Y={__name:"ProjectsNew",setup(K){const w=l=>Object.values(l).map(a=>({src:a.original_url,alt:a.name})),u=b(""),m=b(""),v=b([]);return M(async()=>{const l=await T.get("/api/departments");v.value=l.data.data,u.value=v.value[0].title.en,m.value=v.value[0].regions[0].title.en,console.log(u.value,"----",m.value)}),(l,a)=>{const y=N("router-link");return s(),r(_,null,[n($,{class:"bg-black fixed z-50 w-full"}),e("div",U,[n(c(x),{variant:"underline",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=t=>u.value=t)},{default:d(()=>[(s(!0),r(_,null,g(v.value,t=>(s(),p(c(h),{name:t.title.en,title:t.title[l.$i18n.locale],class:"[&>div>div>div>ul]:justify-center [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown"},{default:d(()=>[e("div",j,[I,e("img",{src:t.mainImage.src,alt:t.mainImage.alt},null,8,z)]),n(c(x),{variant:"underline",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=o=>m.value=o),class:"justify-center py-10"},{default:d(()=>[(s(!0),r(_,null,g(t.regions,o=>(s(),p(c(h),{name:o.title.en,title:o.title[l.$i18n.locale]},{default:d(()=>[e("div",C,[(s(!0),r(_,null,g(o.projects,i=>(s(),r("div",D,[e("img",{class:"w-20 h-20 rounded-full mx-auto my-3 mb-0",src:i.logo.original_url,alt:i.logo.name},null,8,F),e("div",H,[e("h3",O,f(i.title[l.$i18n.locale]),1),e("h4",P,[A,k(" "+f(o.title[l.$i18n.locale]),1)]),e("small",E,f(t.title[l.$i18n.locale]),1)]),e("div",G,[e("p",{class:"px-2 text-grey text-xs col-start-1 col-end-4",innerHTML:i.text[l.$i18n.locale].slice(0,110)+" ..."},null,8,S),e("div",q,[n(y,{class:"bg-dark-brown text-white rounded-md h-6 max-w-20 text-xs text-center flex flex-col justify-center mx-2",to:{name:"Project",params:{id:i.id}}},{default:d(()=>[k(f(l.$t("readMore")),1)]),_:2},1032,["to"])])]),e("div",J,[n(c(B),{pictures:w(i.gallery),class:"[&>div>div>img]:h-full [&>div:first-child]:h-[243px] [&>div>button]:mx-2 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])]))),256))])]),_:2},1032,["name","title"]))),256))]),_:2},1032,["modelValue"])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),n(L)],64)}}};export{Y as default};
