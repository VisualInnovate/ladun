import{_ as f}from"./Navbar-fc604358.js";import{I as h}from"./ImgBanner-555e7600.js";import{C as v}from"./CardLink-1c966b21.js";import{_ as b}from"./DarkFooter-a5d4ef94.js";import{bu as k,aJ as o,o as a,c as i,e as r,a as e,w as s,F as c,r as $,f as l,t as d,z as x}from"./main-884fcdd8.js";const N="/build/assets/investors-page-50d242b8.png",B={data(){return{investors:[]}},components:{Navbar:f,ImgBanner:h,CardLink:v,DarkFooter:b},methods:{getAllInvestors(){axios.get("/api/investors").then(t=>{this.investors=t.data.investors,console.log(this.investors)})}},mounted(){this.getAllInvestors()}},F={class:"pt-32"},I=e("img",{src:N},null,-1),w={class:"media-center py-28 bg-background-section"},C={class:"container mx-auto"},D={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},L=["innerHTML"],A=["src"];function T(t,V,y,z,_,H){const m=o("Navbar"),u=o("img-banner"),g=o("card-link"),p=o("DarkFooter");return a(),i(c,null,[r(m,{class:"bg-black fixed z-50 w-full"}),e("div",F,[r(u,null,{text:s(()=>[l(d(t.$t("investor_banner")),1)]),default:s(()=>[I]),_:1})]),e("section",w,[e("div",C,[e("div",D,[(a(!0),i(c,null,$(_.investors,n=>(a(),x(g,null,{head:s(()=>[l(d(n.title[t.$i18n.locale]),1)]),text:s(()=>[e("div",{innerHTML:n.content[t.$i18n.locale]},null,8,L)]),default:s(()=>[e("img",{class:"h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:n.media[0].original_url,alt:""},null,8,A)]),_:2},1024))),256))])])]),r(p)],64)}const q=k(B,[["render",T]]);export{q as default};