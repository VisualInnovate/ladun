import{N as h}from"./Navbar-8d0cb12f.js";import{I as v}from"./ImgBanner-2a961328.js";import{C as f}from"./CardLink-e1aef094.js";import{L as b}from"./LightFooter-ff2ff403.js";import{_ as k,r as n,o as a,c,a as i,b as t,w as s,F as l,m as x,d,t as r,e as $,q as L}from"./main-4531edd0.js";import{_ as w}from"./investors-page-e0a05228.js";import"./flowbite-vue-fdbfbd84.js";const N={data(){return{investors:[]}},components:{Navbar:h,ImgBanner:v,CardLink:f,LightFooter:b},methods:{getAllInvestors(){axios.get("/api/investors").then(e=>{this.investors=e.data.investors,console.log(this.investors)})}},mounted(){this.getAllInvestors()}},C={class:"pt-22"},I=t("img",{class:"p-2",src:w},null,-1),y={class:"media-center py-28 bg-background-section"},B={class:"container mx-auto"},F={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},A={class:"text-sm mb-2"},M=["innerHTML"],T={class:"rtl:text-end ltr:text-end"},V=["onClick"],H=["src"];function j(e,q,z,D,m,E){const _=n("Navbar"),p=n("img-banner"),g=n("card-link"),u=n("LightFooter");return a(),c(l,null,[i(_,{class:"bg-black fixed z-50 w-full"}),t("div",C,[i(p,null,{text:s(()=>[d(r(e.$t("companyAds")),1)]),default:s(()=>[I]),_:1})]),t("section",y,[t("div",B,[t("div",F,[(a(!0),c(l,null,x(m.investors,o=>(a(),$(g,{key:o.id},{head:s(()=>[d(r(o.title[e.$i18n.locale]),1)]),text:s(()=>[t("div",A,r(o.created_at),1),t("div",{innerHTML:o.content[e.$i18n.locale].slice(0,100)+"..."},null,8,M),t("div",T,[t("button",{onClick:L(R=>e.$router.push({name:"Investors Relation",params:{id:o.id}}),["prevent"]),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown"},r(e.$t("readMore")),9,V)])]),default:s(()=>[t("img",{class:"object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2",src:o.media[0].original_url,alt:""},null,8,H)]),_:2},1024))),128))])])]),i(u)],64)}const U=k(N,[["render",j]]);export{U as default};