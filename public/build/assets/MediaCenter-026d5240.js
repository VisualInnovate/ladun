import{C as g}from"./CardLink-56e62f47.js";import{U as m}from"./flowbite-vue-6d16c29e.js";import{_ as p}from"./Navbar-3c5bd719.js";import{L as _}from"./LightFooter-91857865.js";import{bw as h,r as f,o as v,a as b,c as o,d as c,e as n,u as x,f as e,F as l,k,j as C,l as w,h as r,g as L,t as B}from"./main-b7f15e8f.js";const M=e("div",{class:"pt-[73px]"},null,-1),j={class:"media-center py-28 bg-background-section"},y={class:"container mx-auto"},N=e("h1",{class:"text-3xl text-center mb-7"},"المركز الاعلامي",-1),V={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$=["innerHTML"],F=["src"],q={__name:"MediaCenter",setup(T){const i=h(),a=f({}),d=[{src:new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,alt:"Picture 2"}],u=t=>{i.push({name:"Media Center Details",params:{id:t}})};return v(()=>{b.get("/api/media-center").then(t=>{a.value=t.data.mediaCenter,console.log(a.value)})}),(t,D)=>(o(),c(l,null,[n(p,{class:"bg-black fixed z-50 w-full"}),M,n(x(m),{pictures:d,class:"h-[calc(60vh-73px)] [&>div:first-child]:h-[calc(60vh-73px)] [&>div>div>img]:h-[calc(60vh-73px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"}),e("section",j,[e("div",y,[N,e("div",V,[a.value.length?(o(!0),c(l,{key:0},k(a.value,s=>(o(),w(g,{key:s.id,onClick:H=>u(s.id)},{head:r(()=>[L(B(s.title[t.$i18n.locale].slice(0,20)+"..."),1)]),text:r(()=>[e("div",{innerHTML:s.content[t.$i18n.locale].slice(0,100)+"..."},null,8,$)]),default:r(()=>[e("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-b-lg md:rounded-b-none",src:s.media[0].original_url,alt:""},null,8,F)]),_:2},1032,["onClick"]))),128)):C("",!0)])])]),n(_)],64))}};export{q as default};
