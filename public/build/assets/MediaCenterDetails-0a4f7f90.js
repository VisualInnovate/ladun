import{N as h}from"./Navbar-e6ca0148.js";import{L as g}from"./LightFooter-61e08d7e.js";import{U as b}from"./flowbite-vue-8522a63e.js";import{o,c as a,a as n,u as x,F as _,b as t,_ as v,j as w,r,f as c,t as C}from"./main-c307413b.js";const L=t("div",{class:"pt-[73px]"},null,-1),k={__name:"CarsoulWithPadding",setup(s){const i=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,l=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,d=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,e=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,m=[{src:i,alt:"Picture 1"},{src:e,alt:"Picture 4"},{src:l,alt:"Picture 2"},{src:d,alt:"Picture 3"}];return(u,p)=>(o(),a(_,null,[L,n(x(b),{pictures:m,class:"h-[calc(60vh-73px)] [&>div:first-child]:h-[calc(60vh-73px)] [&>div>div>img]:h-[calc(60vh-73px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"})],64))}},y={components:{Navbar:h,LightFooter:g,Carsoul:k},data(){return{media:{},computedData:{}}},methods:{getData(){w.post(`/api/media-center/${this.$route.params.id}`).then(s=>{this.media=s.data.mediaCenter,console.log(this.media)})}},created(){this.getData()},computed:{comp(){return this.media[0]}}},N={class:"py-28"},j={class:"container mx-auto"},U={class:"flex flex-wrap flex-col lg:flex-row"},D={class:"lg:w-[30%] w-[100%] mb-10 lg:mb-0"},F=["src"],P={class:"lg:w-[70%] w-[100%] ltr:pl-12 rtl:pr-12"},R={key:0,class:"font-bold text-dark-brown mb-5"},$=["innerHTML"];function B(s,i,l,d,e,m){const u=r("Navbar"),p=r("Carsoul"),f=r("LightFooter");return o(),a(_,null,[n(u,{class:"bg-black fixed z-50 w-full"}),n(p),t("section",N,[t("div",j,[t("div",U,[t("div",D,[e.media[0].media?(o(),a("img",{key:0,class:"rounded-xl w-full",src:e.media[0].media[0].original_url,alt:""},null,8,F)):c("",!0)]),t("div",P,[e.media[0].title?(o(),a("h1",R,C(e.media[0].title[s.$i18n.locale]),1)):c("",!0),e.media[0].title?(o(),a("p",{key:1,innerHTML:e.media[0].content[s.$i18n.locale],class:"text-justify text-lg"},null,8,$)):c("",!0)])])])]),n(f)],64)}const z=v(y,[["render",B]]);export{z as default};
