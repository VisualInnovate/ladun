import{a as y,_ as C}from"./rrr-fe1b8e3d.js";import{N as V}from"./Navbar-3c97cbdc.js";import{L as $}from"./LightFooter-244a941d.js";import{a as g,L as w}from"./flowbite-vue-f23b88bb.js";import{g as p,E as L,h as M,i as B,r as F,o as l,c as _,a as o,b as e,w as i,u as v,F as f,m as x,e as b,n as N,t as s,d as k}from"./main-dea1e1b3.js";const T="/build/assets/mm-af07c480.jpeg",P={class:"[&>div>div>ul]:justify-center pt-24 [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown"},R={class:"grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto [&>div]:lg:h-[574px] [&>div]:md:h-[635px] [&>div]:h-[560px]"},S={class:"w-full relative z-10"},z=["src"],A={class:"flex"},G={class:"flex-initial my-auto text-[#636463] p-2 font-bold"},U=e("svg",{class:"my-auto",width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z",stroke:"#AF9744","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),k(),e("path",{d:"M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z",stroke:"#AF9744","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),D={class:"flex-initial my-auto text-[#636463] p-2 font-bold text-dark-brown"},E={class:"mb-4"},H=["innerHTML"],I={class:"flex justify-between py-4 ltr:text-start rtl:text-end w-full"},Z={class:"flex my-auto"},j=e("img",{class:"w-6 h-6",src:y},null,-1),q={class:"text-gray-900 px-2"},J={class:"flex my-auto"},K=e("img",{class:"w-7 h-7",src:T},null,-1),O={class:"whitespace-nowrap text-gray-500 px-2"},Q={class:"flex my-auto"},W=e("img",{class:"h-6 w-6",src:C},null,-1),X={class:"whitespace-nowrap my-auto text-gray-500 px-2"},Y={class:"flex flex-row-reverse"},ie={__name:"Projects",setup(ee){const n=p(""),r=p(""),d=p([]);return L(n,(t,u)=>{console.log(t),r.value=d.value[1].regions[0].title.en}),M(async()=>{const t=await B.get("/api/departments");console.log(t),d.value=t.data.data,n.value=d.value[0].title.en,r.value=d.value[0].regions[0].title.en,console.log(n.value,"----",r.value)}),(t,u)=>{const h=F("router-link");return l(),_(f,null,[o(V,{class:"bg-black fixed z-50 w-full"}),e("div",P,[o(v(g),{variant:"underline",modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=c=>n.value=c)},{default:i(()=>[(l(!0),_(f,null,x(d.value,c=>(l(),b(v(w),{name:c.title.en,title:c.title[t.$i18n.locale],class:"[&>div>div>div>ul]:justify-center [&>div>div>div]:border-0 [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown"},{default:i(()=>[o(v(g),{variant:"underline",modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=m=>r.value=m),class:"justify-center py-10"},{default:i(()=>[(l(!0),_(f,null,x(c.regions,m=>(l(),b(v(w),{name:m.title.en,title:m.title[t.$i18n.locale]},{default:i(()=>[e("div",R,[(l(!0),_(f,null,x(m.projects,a=>(l(),_("div",{class:N(["rounded-xl bg-[#fff8f8] mx-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",S,[o(h,{to:{name:"Project",params:{id:a.id}}},{default:i(()=>[e("img",{class:"w-full rounded-t-xl lg:h-[243px]",src:a.attachment},null,8,z)]),_:2},1032,["to"])]),e("div",A,[o(h,{to:{name:"Project",params:{id:a.id}}},{default:i(()=>[e("h3",G,s(a.title[t.$i18n.locale]),1)]),_:2},1032,["to"]),U,e("h6",D,s(a.address[t.$i18n.locale]),1)]),e("div",E,[e("p",{class:"px-2 h-24 text-grey text-sm col-start-1 col-end-4",innerHTML:a.text[t.$i18n.locale].slice(0,190)},null,8,H)]),e("div",I,[e("div",Z,[j,e("small",q,s(a==null?void 0:a.type[t.$i18n.locale]),1)]),e("div",J,[K,e("small",O,s(a.land_area)+" "+s(t.$t("areaUnit")),1)]),e("div",Q,[W,e("small",X,s(a.units_number)+" "+s(t.$t("unit")),1)])]),e("div",Y,[o(h,{class:"w-[100px] bg-dark-brown text-white rounded-2xl h-8 max-w-20 text-center flex flex-col justify-center mx-2",to:{name:"Project",params:{id:a.id}}},{default:i(()=>[k(s(t.$t("readMore")),1)]),_:2},1032,["to"])])],2))),256))])]),_:2},1032,["name","title"]))),256))]),_:2},1032,["modelValue"])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),o($)],64)}}};export{ie as default};
