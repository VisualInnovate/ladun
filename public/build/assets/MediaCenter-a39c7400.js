import{C as _}from"./CardLink-64d34a16.js";import{U as f}from"./flowbite-vue-74bb6ddf.js";import{N as b}from"./Navbar-df517a1a.js";import{L as v}from"./LightFooter-77c01193.js";import{bE as x,g as l,h as k,i as w,o,c,a as n,u as C,b as t,F as i,m as L,f as M,e as N,w as r,d as y,t as d}from"./main-ad1554f9.js";const B=t("div",{class:"pt-[73px]"},null,-1),V={class:"media-center py-28 bg-background-section"},$={class:"container mx-auto"},F=t("h1",{class:"text-3xl text-center mb-7"},"المركز الاعلامي",-1),T={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},U=["innerHTML"],j=["onClick"],D=["src"],G={__name:"MediaCenter",setup(E){const u=x(),s=l({}),g=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href;l("");const m=[{src:g,alt:"Picture 2"}],p=e=>{u.push({name:"Media Center Details",params:{id:e}})},h=e=>e.media[0].collection_name=="attachments"?e.media[0].original_url:e.media[1].original_url;return k(()=>{w.get("/api/media-center").then(e=>{s.value=e.data.mediaCenter})}),(e,H)=>(o(),c(i,null,[n(b,{class:"bg-black fixed z-50 w-full"}),B,n(C(f),{pictures:m,class:"h-[calc(60vh-73px)] [&>div:first-child]:h-[calc(60vh-73px)] [&>div>div>img]:h-[calc(60vh-73px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"}),t("section",V,[t("div",$,[F,t("div",T,[s.value.length?(o(!0),c(i,{key:0},L(s.value,a=>(o(),N(_,{key:a.id},{head:r(()=>[y(d(a.title[e.$i18n.locale].slice(0,20)+"..."),1)]),text:r(()=>[t("div",{innerHTML:a.content[e.$i18n.locale].slice(0,100)+"..."},null,8,U),t("div",null,[t("button",{onClick:R=>p(a.id),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown"},d(e.$t("readMore"))+" ...",9,j)])]),default:r(()=>[t("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-b-lg md:rounded-b-none rtl:pl-2 ltr:pr-2",src:h(a),alt:""},null,8,D)]),_:2},1024))),128)):M("",!0)])])]),n(v)],64))}};export{G as default};
