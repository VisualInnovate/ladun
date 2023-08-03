import{_ as I}from"./locationIcon-75fddb16.js";import{N as L}from"./Navbar-e3ddbb62.js";import{bG as V,r as y,o as l,c as i,b as e,F as b,m as g,a as d,w as h,t as o,u as p,d as x,g as v,h as j,i as T,e as k}from"./main-c346dbbb.js";import{b as w,L as $,U as N}from"./flowbite-vue-70583c93.js";const P="http://127.0.0.1:8000/build/assets/dark_footer_logo-06458faf.svg",U="http://127.0.0.1:8000/build/assets/dark_footer_linkedin-775b4ac4.svg",B="http://127.0.0.1:8000/build/assets/dark_footer_twitter-e9821aed.svg",M="http://127.0.0.1:8000/build/assets/dark_footer_whatsapp-80ed9c56.svg",C="http://127.0.0.1:8000/build/assets/dark_footer_facebook-a39dc3d7.svg",D={class:"text-white flex flex-col flex-wrap md:flex-nowrap py-10 px-10 rounded-t-2xl w-full bg-blend-multiply bg-dark-footer-image bg-black bg-no-repeat bg-cover bg-fixed"},z={class:"flex justify-between gap-x-36 flex-wrap md:flex-nowrap"},A={class:"flex-auto md:max-w-[15rem] py-5 md:py-10"},E={class:"w-full border-white border-2 mb-5"},G={class:"flex justify-between"},H=["href"],S=["src","alt"],K={class:"flex-auto md:w-64"},O={class:"flex py-5 md:py-0 gap-3"},R=["src"],q={class:"self-center md:px-5"},J={class:"text-dark-footer-text-color py-5 md:py-10 text-justify"},Q={class:"py-2"},W={class:"py-2"},X={class:"text-center text-dark-footer-text-color pt-4"},Y={__name:"DarkFooter",setup(F){const{t:c}=V(),u=[{name:c("mostImportantProjects"),href:{name:"Projects"}},{name:c("companies"),href:{name:"Companies"}},{name:c("contactUs"),href:{name:"Contact Us"}},{name:c("licenses"),href:{name:"Page",params:{slug:"license-and-agreement"}}}],m=[{image:U,href:"https://www.linkedin.com/company/ladun"},{image:B,href:"https://twitter.com/Ladun_sa"},{image:M,href:"https://wa.me/920011560"},{image:C,href:"https://www.facebook.com/Ladun.KSA"}];return(s,t)=>{const a=y("router-link");return l(),i("div",D,[e("div",z,[e("div",A,[(l(),i(b,null,g(u,n=>e("div",null,[d(a,{to:n.href},{default:h(()=>[e("button",E,[e("small",null,o(n.name),1)])]),_:2},1032,["to"])])),64)),e("div",G,[(l(),i(b,null,g(m,n=>e("a",{href:n.href,target:"_blank"},[e("img",{src:`${n.image}`,alt:`${n.image}`,class:"w-10 h-10"},null,8,S)],8,H)),64))])]),e("div",K,[e("div",O,[e("img",{src:p(P),alrt:"darkFooterLogo"},null,8,R),x(),e("h3",q,o(s.$t("darkFooterTitle")),1)]),e("p",J,o(s.$t("darkFooterText")),1),e("h3",Q,o(s.$t("darkFooterPhone"))+": 920011560 ",1),e("h3",W,o(s.$t("darkFooterEmail"))+": investor@ladun.sa",1)])]),e("div",X,o(s.$t("copyRights")),1)])}}},Z={class:"bg-light-beige-background mb-4 pt-32 [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black"},ee={class:"relative"},te=e("div",{class:"absolute w-full h-full top-0 left-0 bg-background-overlay z-20"},null,-1),se=["src","alt"],le={class:"grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto [&>div]:h-[532px]"},oe={class:"rounded-xl border-2 border-gray-border-light bg-white relative mx-2"},ae=["src","alt"],ne={class:"flex flex-col items-center"},re={class:"flex-initial p-2 font-bold"},ie={class:"flex-initial flex p-2 text-dark-brown"},de=e("img",{src:I,alt:"locationIcon",class:"rtl:ml-2 ltr:mr-2"},null,-1),ce={class:"flex-initial mb-2 text-dark-brown"},ue={class:"grid grid-cols-4 mb-4"},me=["innerHTML"],_e={class:"flex flex-col justify-end col-start-4 col-end-4"},fe={class:"absolute bottom-0 w-full"},ve={__name:"ProjectsNew",setup(F){const c=t=>Object.values(t).map(a=>({src:a.original_url,alt:a.name})),u=v(""),m=v(""),s=v([]);return j(async()=>{const t=await T.get("/api/departments");s.value=t.data.data,u.value=s.value[0].title.en,m.value=s.value[0].regions[0].title.en,console.log(u.value,"----",m.value)}),(t,a)=>{const n=y("router-link");return l(),i(b,null,[d(L,{class:"bg-black fixed z-50 w-full"}),e("div",Z,[d(p(w),{variant:"underline",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=r=>u.value=r)},{default:h(()=>[(l(!0),i(b,null,g(s.value,r=>(l(),k(p($),{name:r.title.en,title:r.title[t.$i18n.locale],class:"[&>div>div>div>ul]:justify-center [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown"},{default:h(()=>[e("div",ee,[te,e("img",{src:r.mainImage.src,alt:r.mainImage.alt},null,8,se)]),d(p(w),{variant:"underline",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=_=>m.value=_),class:"justify-center py-10"},{default:h(()=>[(l(!0),i(b,null,g(r.regions,_=>(l(),k(p($),{name:_.title.en,title:_.title[t.$i18n.locale]},{default:h(()=>[e("div",le,[(l(!0),i(b,null,g(_.projects,f=>(l(),i("div",oe,[e("img",{class:"w-20 h-20 rounded-full mx-auto my-3 mb-0",src:f.logo.original_url,alt:f.logo.name},null,8,ae),e("div",ne,[e("h3",re,o(f.title[t.$i18n.locale]),1),e("h4",ie,[de,x(" "+o(_.title[t.$i18n.locale]),1)]),e("small",ce,o(r.title[t.$i18n.locale]),1)]),e("div",ue,[e("p",{class:"px-2 text-grey text-xs col-start-1 col-end-4",innerHTML:f.text[t.$i18n.locale].slice(0,110)+" ..."},null,8,me),e("div",_e,[d(n,{class:"bg-dark-brown text-white rounded-md h-6 max-w-20 text-xs text-center flex flex-col justify-center mx-2",to:{name:"Project",params:{id:f.id}}},{default:h(()=>[x(o(t.$t("readMore")),1)]),_:2},1032,["to"])])]),e("div",fe,[d(p(N),{pictures:c(f.gallery),class:"[&>div>div>img]:h-full [&>div:first-child]:h-[243px] [&>div>button]:mx-2 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])]))),256))])]),_:2},1032,["name","title"]))),256))]),_:2},1032,["modelValue"])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),d(Y)],64)}}};export{ve as default};