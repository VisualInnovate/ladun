import{C as p}from"./CardLink-39f7e94e.js";import{_ as h,U as b}from"./Navbar-08b390a1.js";import{_ as v}from"./DarkFooter-04b58ec0.js";import{r as x,o as k,a as w,d as n,e as c,f as r,u as C,g as e,F as i,i as L,N as U,k as s,h as l,t as d}from"./main-fc886c46.js";const j={class:"media-center py-28 bg-background-section"},y={class:"container mx-auto"},B=e("h1",{class:"text-3xl text-center mb-7"},"المركز الاعلامي",-1),M={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},N=["innerHTML"],P=["src"],z={__name:"MediaCenter",setup(R){const o=x({}),u=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,_=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,m=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,f=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,g=[{src:u,alt:"Picture 1"},{src:f,alt:"Picture 4"},{src:_,alt:"Picture 2"},{src:m,alt:"Picture 3"},k(()=>{w.get("/api/media-center").then(t=>{o.value=t.data.mediaCenter})})];return(t,$)=>(n(),c(i,null,[r(h,{class:"bg-black fixed z-50 w-full"}),r(C(b),{pictures:g,class:"h-[100vh] [&>div:first-child]:h-[100vh] [&>div>div>img]:h-[100vh] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"}),e("section",j,[e("div",y,[B,e("div",M,[(n(!0),c(i,null,L(o.value,a=>(n(),U(p,null,{date:s(()=>[l(d(a.created_at),1)]),head:s(()=>[l(d(a.title[t.$i18n.locale]),1)]),text:s(()=>[e("div",{innerHTML:a.content[t.$i18n.locale].slice(0,100)+"..."},null,8,N)]),default:s(()=>[e("img",{class:"h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:a.media[0].original_url,alt:""},null,8,P)]),_:2},1024))),256))])])]),r(v)],64))}};export{z as default};
