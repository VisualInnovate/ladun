<<<<<<<< HEAD:public/build/assets/MediaCenterDetails-4496d59d.js
import{N as x}from"./Navbar-d476fe62.js";import{L as w}from"./LightFooter-6283442b.js";import{U as v}from"./flowbite-vue-37c4951a.js";import{o as s,c as n,a,u as k,F as g,b as o,_ as y,i as C,r as l,w as L,f as i,t as c,d as V,af as j}from"./main-a0d8e61e.js";const N=o("div",{class:"pt-[73px]"},null,-1),F={__name:"CarsoulWithPadding",setup(e){const d=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,p=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,m=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,t=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,r=[{src:d,alt:"Picture 1"},{src:t,alt:"Picture 4"},{src:p,alt:"Picture 2"},{src:m,alt:"Picture 3"}];return(u,f)=>(s(),n(g,null,[N,a(k(v),{pictures:r,class:"h-[360px] md:h-[500px] [&>div:first-child]:h-[360px] [&>div>div>img]:h-[360px] [&>div:first-child]:md:h-[500px] [&>div>div>img]:md:h-[500px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"})],64))}},R={components:{Navbar:x,LightFooter:w,Carsoul:F},data(){return{media:[],computedData:{}}},methods:{getData(){C.post(`/api/media-center/${this.$route.params.id}`).then(e=>{this.media=e.data.mediaCenter,console.log(this.media)})},getpic(e){return e.media[0].collection_name=="attachments"?e.media[0]:e.media[1]},getFile(e){return e.media[0].collection_name=="attachments"?e.media[1]:e.media[0]}},created(){this.getData()}},U={class:"py-20"},D={class:"w-full m-auto text-center py-[2%] text-4xl font-bold cursor-pointer"},P={class:"container mx-auto"},S={class:"flex flex-wrap flex-col lg:flex-row"},B={class:"lg:w-[30%] w-[100%] mb-10 lg:mb-0"},H=["src"],M={class:"lg:w-[70%] w-[100%] ltr:pl-12 rtl:pr-12"},G={key:0,class:"font-bold text-dark-brown mb-5"},T=["innerHTML"],$={class:"company-button"},z={key:0,class:"flex flex-wrap justify-between"},E=["href"],W=j('<svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" id="download-8" xmlns="http://www.w3.org/2000/svg" class="icon line my-auto"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline id="primary" points="15 14 12 17 9 14" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></polyline><path id="primary-2" data-name="primary" d="M12,17V3m4,7h3a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H8" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></path></g></svg>',1);function q(e,d,p,m,t,r){var _,h;const u=l("Navbar"),f=l("router-link"),b=l("LightFooter");return s(),n(g,null,[a(u,{class:"bg-black fixed z-50 w-full"}),o("section",U,[a(f,{to:"/media-center"},{default:L(()=>[o("p",D,c(e.$t("mediaCenter")),1)]),_:1}),o("div",P,[o("div",S,[o("div",B,[t.media[0]?(s(),n("img",{key:0,class:"rounded-xl w-full",src:(_=r.getpic(t.media[0]))==null?void 0:_.original_url,alt:""},null,8,H)):i("",!0)]),o("div",M,[t.media[0]?(s(),n("h1",G,c(t.media[0].title[e.$i18n.locale]),1)):i("",!0),t.media[0]?(s(),n("p",{key:1,innerHTML:t.media[0].content[e.$i18n.locale],class:"text-justify text-lg"},null,8,T)):i("",!0),o("div",$,[t.media[0]?(s(),n("div",z,[o("a",{href:`${(h=r.getFile(t.media[0]))==null?void 0:h.original_url}`,target:"_blank",class:"hover:bg-[#74642a] hover:cursor-pointer special-button text-xl button bg-dark-brown mx-auto rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4"},[W,V(" "+c(e.$t("download")),1)],8,E)])):i("",!0)])])])])]),a(b)],64)}const O=y(R,[["render",q]]);export{O as default};
========
import{N as x}from"./Navbar-78404d2b.js";import{L as w}from"./LightFooter-e4c77576.js";import{U as v}from"./flowbite-vue-34be9187.js";import{o as s,c as n,a,u as k,F as g,b as o,_ as y,i as C,r as l,w as L,f as i,t as c,d as V,af as j}from"./main-b47cf185.js";const N=o("div",{class:"pt-[73px]"},null,-1),F={__name:"CarsoulWithPadding",setup(e){const d=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,p=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,m=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,t=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,r=[{src:d,alt:"Picture 1"},{src:t,alt:"Picture 4"},{src:p,alt:"Picture 2"},{src:m,alt:"Picture 3"}];return(u,f)=>(s(),n(g,null,[N,a(k(v),{pictures:r,class:"h-[360px] md:h-[500px] [&>div:first-child]:h-[360px] [&>div>div>img]:h-[360px] [&>div:first-child]:md:h-[500px] [&>div>div>img]:md:h-[500px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"})],64))}},R={components:{Navbar:x,LightFooter:w,Carsoul:F},data(){return{media:[],computedData:{}}},methods:{getData(){C.post(`/api/media-center/${this.$route.params.id}`).then(e=>{this.media=e.data.mediaCenter,console.log(this.media)})},getpic(e){return e.media[0].collection_name=="attachments"?e.media[0]:e.media[1]},getFile(e){return e.media[0].collection_name=="attachments"?e.media[1]:e.media[0]}},created(){this.getData()}},U={class:"py-20"},D={class:"w-full m-auto text-center py-[2%] text-4xl font-bold cursor-pointer"},P={class:"container mx-auto"},S={class:"flex flex-wrap flex-col lg:flex-row"},B={class:"lg:w-[30%] w-[100%] mb-10 lg:mb-0"},H=["src"],M={class:"lg:w-[70%] w-[100%] ltr:pl-12 rtl:pr-12"},G={key:0,class:"font-bold text-dark-brown mb-5"},T=["innerHTML"],$={class:"company-button"},z={key:0,class:"flex flex-wrap justify-between"},E=["href"],W=j('<svg fill="white" width="30px" height="30px" viewBox="0 0 24 24" id="download-8" xmlns="http://www.w3.org/2000/svg" class="icon line my-auto"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline id="primary" points="15 14 12 17 9 14" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></polyline><path id="primary-2" data-name="primary" d="M12,17V3m4,7h3a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H8" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5;"></path></g></svg>',1);function q(e,d,p,m,t,r){var _,h;const u=l("Navbar"),f=l("router-link"),b=l("LightFooter");return s(),n(g,null,[a(u,{class:"bg-black fixed z-50 w-full"}),o("section",U,[a(f,{to:"/media-center"},{default:L(()=>[o("p",D,c(e.$t("mediaCenter")),1)]),_:1}),o("div",P,[o("div",S,[o("div",B,[t.media[0]?(s(),n("img",{key:0,class:"rounded-xl w-full",src:(_=r.getpic(t.media[0]))==null?void 0:_.original_url,alt:""},null,8,H)):i("",!0)]),o("div",M,[t.media[0]?(s(),n("h1",G,c(t.media[0].title[e.$i18n.locale]),1)):i("",!0),t.media[0]?(s(),n("p",{key:1,innerHTML:t.media[0].content[e.$i18n.locale],class:"text-justify text-lg"},null,8,T)):i("",!0),o("div",$,[t.media[0]?i("",!0):(s(),n("div",z,[o("a",{href:`${(h=r.getFile(t.media[0]))==null?void 0:h.original_url}`,target:"_blank",class:"hover:bg-[#74642a] hover:cursor-pointer special-button text-xl button bg-dark-brown mx-auto rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4"},[W,V(" "+c(e.$t("download")),1)],8,E)]))])])])])]),a(b)],64)}const O=y(R,[["render",q]]);export{O as default};
>>>>>>>> 31c6983ce7f42c6cf19cf70f7445fa629aad4c8d:public/build/assets/MediaCenterDetails-8095d6d4.js
