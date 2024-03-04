import{N as u}from"./Navbar-7892c833.js";import{I as b}from"./ImgBanner-3ee0c867.js";import{C as k}from"./CardLink-d27a83a3.js";import{L as v}from"./LightFooter-02d1b3dc.js";import{_ as x,r as o,o as r,c as d,a as l,b as e,w as n,F as c,m as f,d as m,t as a,e as w,q as L}from"./main-13305495.js";import"./flowbite-vue-a8aa33eb.js";const $={data(){return{investors:[],banner:""}},components:{Navbar:u,ImgBanner:b,CardLink:k,LightFooter:v},methods:{callbanner(){axios.get("/api/banners-pages").then(t=>{this.banner=t.data.pages[2].media[2].original_url,console.log(this.banner)})},getAllInvestors(){axios.get("/api/investors").then(t=>{this.investors=t.data.investors,console.log(this.investors)})}},mounted(){this.getAllInvestors(),this.callbanner()}},N={class:"pt-22 dark:text-white dark:bg-black"},y=["src"],C={class:"media-center py-28 bg-background-section dark:text-white dark:bg-black"},I={class:"container mx-auto dark:text-white dark:bg-black"},B={class:"grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-10 dark:text-white dark:bg-black"},F=["src"],A=["src"],M={class:"text-sm mb-2"},T=["innerHTML"],V={class:"rtl:text-end ltr:text-end"},j=["onClick"];function H(t,q,z,D,i,E){const g=o("Navbar"),_=o("img-banner"),h=o("card-link"),p=o("LightFooter");return r(),d(c,null,[l(g,{class:"bg-black fixed z-50 w-full"}),e("div",N,[l(_,null,{text:n(()=>[m(a(t.$t("companyAds")),1)]),default:n(()=>[e("img",{class:"w-full",style:{height:"300px"},src:i.banner},null,8,y)]),_:1})]),e("section",C,[e("div",I,[e("div",B,[(r(!0),d(c,null,f(i.investors,s=>(r(),w(h,{key:s.id,class:"dark:text-black dark:bg-white"},{date:n(()=>[e("div",null,[e("img",{class:"object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2",src:s.media[0].original_url,alt:""},null,8,F)])]),head:n(()=>[m(a(s.title[t.$i18n.locale]),1)]),text:n(()=>[e("div",M,a(s.created_at),1),e("div",{innerHTML:s.content[t.$i18n.locale].slice(0,100)+"..."},null,8,T),e("div",V,[e("button",{onClick:L(R=>t.$router.push({name:"Investors Relation",params:{id:s.id}}),["prevent"]),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown"},a(t.$t("readMore")),9,j)])]),default:n(()=>[e("template",null,[e("img",{class:"object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2",src:s.media[0].original_url,alt:""},null,8,A)])]),_:2},1024))),128))])])]),l(p)],64)}const Q=x($,[["render",H]]);export{Q as default};
