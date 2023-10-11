import{N as h}from"./Navbar-477e25bc.js";import{I as u}from"./ImgBanner-ced04992.js";import{C as b}from"./CardLink-12423db7.js";import{L as v}from"./LightFooter-211b5189.js";import{_ as f,r as n,o as r,c,a,b as e,w as o,F as d,m as x,d as k,t as i,e as w,q as L}from"./main-8b6f80fa.js";import"./flowbite-vue-853d9249.js";const N={data(){return{investors:[],banner:""}},components:{Navbar:h,ImgBanner:u,CardLink:b,LightFooter:v},methods:{callbanner(){axios.get("/api/banners-pages").then(t=>{this.banner=t.data.pages[2].media[2].original_url,console.log(this.banner)})},getAllInvestors(){axios.get("/api/investors").then(t=>{this.investors=t.data.investors,console.log(this.investors)})}},mounted(){this.getAllInvestors(),this.callbanner()}},$={class:"pt-22"},y=["src"],C={class:"media-center py-28 bg-background-section"},I={class:"container mx-auto"},B={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},F={class:"text-sm mb-2"},A=["innerHTML"],M={class:"rtl:text-end ltr:text-end"},T=["onClick"],V=["src"];function H(t,j,q,z,l,D){const m=n("Navbar"),_=n("img-banner"),g=n("card-link"),p=n("LightFooter");return r(),c(d,null,[a(m,{class:"bg-black fixed z-50 w-full"}),e("div",$,[a(_,null,{text:o(()=>[k(i(t.$t("companyAds")),1)]),default:o(()=>[e("img",{class:"w-full",style:{height:"450px"},src:l.banner},null,8,y)]),_:1})]),e("section",C,[e("div",I,[e("div",B,[(r(!0),c(d,null,x(l.investors,s=>(r(),w(g,{key:s.id},{text:o(()=>[e("div",F,i(s.created_at),1),e("div",{innerHTML:s.content[t.$i18n.locale].slice(0,100)+"..."},null,8,A),e("div",M,[e("button",{onClick:L(E=>t.$router.push({name:"Investors Relation",params:{id:s.id}}),["prevent"]),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown"},i(t.$t("readMore")),9,T)])]),default:o(()=>[e("img",{class:"object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2",src:s.media[0].original_url,alt:""},null,8,V)]),_:2},1024))),128))])])]),a(p)],64)}const P=f(N,[["render",H]]);export{P as default};
