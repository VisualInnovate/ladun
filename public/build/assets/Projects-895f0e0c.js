import{b as y,a as C,_ as V}from"./rrr-2b801080.js";import{N as F}from"./Navbar-b07f10ff.js";import{L as $}from"./LightFooter-6a790018.js";import{a as g,L as w}from"./flowbite-vue-54e19971.js";import{g as f,E as L,h as M,i as B,r as N,o as a,c as _,a as l,b as e,w as i,u as v,F as h,m as p,e as b,n as T,t as o,d as k}from"./main-6b5f2936.js";const P={class:"[&>div>div>ul]:justify-center pt-24 [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown"},R={class:"grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto [&>div]:lg:h-[574px] [&>div]:md:h-[635px] [&>div]:h-[560px]"},S={class:"w-full relative z-10"},z=["src"],A={class:"flex"},G={class:"flex-initial my-auto text-[#636463] p-2 font-bold"},U=e("svg",{class:"my-auto",width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z",stroke:"#AF9744","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),k(),e("path",{d:"M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z",stroke:"#AF9744","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),D={class:"flex-initial my-auto text-[#636463] p-2 font-bold text-dark-brown"},E={class:"mb-4"},H=["innerHTML"],I={class:"flex justify-between py-4 ltr:text-start rtl:text-end w-full"},Z={class:"flex my-auto px-1 items-center"},j=e("img",{class:"w-6 h-6",src:y},null,-1),q={class:"text-gray-900 px-2"},J={class:"flex my-auto mx-1 items-center"},K=e("img",{class:"h-6 w-6",src:C},null,-1),O={class:"flex items-center"},Q={class:"whitespace-nowrap text-gray-800 px-2"},W={class:"text-gray-500"},X={class:"flex my-auto mx-1 items-center"},Y=e("img",{class:"h-6 w-6",src:V},null,-1),ee={class:"flex items-center"},te={class:"whitespace-nowrap text-gray-800 px-2"},se={class:"flex flex-row-reverse"},de={__name:"Projects",setup(ae){const n=f(""),r=f(""),d=f([]);return L(n,(t,c)=>{console.log(t),r.value=d.value[1].regions[0].title.en}),M(async()=>{const t=await B.get("/api/departments");console.log(t),d.value=t.data.data,n.value=d.value[0].title.en,r.value=d.value[0].regions[0].title.en,console.log(n.value,"----",r.value)}),(t,c)=>{const x=N("router-link");return a(),_(h,null,[l(F,{class:"bg-black fixed z-50 w-full"}),e("div",P,[l(v(g),{variant:"underline",modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u)},{default:i(()=>[(a(!0),_(h,null,p(d.value,u=>(a(),b(v(w),{name:u.title.en,title:u.title[t.$i18n.locale],class:"[&>div>div>div>ul]:justify-center [&>div>div>div]:border-0 [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown"},{default:i(()=>[l(v(g),{variant:"underline",modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=m=>r.value=m),class:"justify-center py-10"},{default:i(()=>[(a(!0),_(h,null,p(u.regions,m=>(a(),b(v(w),{name:m.title.en,title:m.title[t.$i18n.locale]},{default:i(()=>[e("div",R,[(a(!0),_(h,null,p(m.projects,s=>(a(),_("div",{class:T(["rounded-xl bg-[#FFF8F8] mx-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",S,[l(x,{to:{name:"Project",params:{id:s.id}}},{default:i(()=>[e("img",{class:"w-full rounded-t-xl lg:h-[243px]",src:s.attachment},null,8,z)]),_:2},1032,["to"])]),e("div",A,[l(x,{to:{name:"Project",params:{id:s.id}}},{default:i(()=>[e("h3",G,o(s.title[t.$i18n.locale]),1)]),_:2},1032,["to"]),U,e("h6",D,o(s.address[t.$i18n.locale]),1)]),e("div",E,[e("p",{class:"px-2 h-24 text-grey text-sm col-start-1 col-end-4",innerHTML:s.text[t.$i18n.locale].slice(0,190)},null,8,H)]),e("div",I,[e("div",Z,[j,e("small",q,o(s==null?void 0:s.type[t.$i18n.locale]),1)]),e("div",J,[K,e("div",O,[e("small",Q,o(s.land_area),1),e("p",W,o(t.$t("areaUnit")),1)])]),e("div",X,[Y,e("div",ee,[e("small",te,o(s.units_number),1)])])]),e("div",se,[l(x,{class:"w-[100px] bg-dark-brown text-white rounded-2xl h-8 max-w-20 text-center flex flex-col justify-center mx-2",to:{name:"Project",params:{id:s.id}}},{default:i(()=>[k(o(t.$t("readMore")),1)]),_:2},1032,["to"])])],2))),256))])]),_:2},1032,["name","title"]))),256))]),_:2},1032,["modelValue"])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),l($)],64)}}};export{de as default};
