import{_ as h}from"./Navbar-fbaa7e48.js";import{I as v}from"./ImgBanner-287ac6fd.js";import{C as f}from"./CardLink-33db1129.js";import{_ as k}from"./DarkFooter-c0afd698.js";import{_ as b,r as n,o as r,c as i,d as a,a as e,w as o,F as c,b as $,k as l,t as d,q as x,s as C}from"./main-e44838bf.js";import"./flowbite-vue-ebd131a6.js";const I="/build/assets/investors-page-50d242b8.png",N={data(){return{investors:[]}},components:{Navbar:h,ImgBanner:v,CardLink:f,DarkFooter:k},methods:{getAllInvestors(){axios.get("/api/investors").then(s=>{this.investors=s.data.investors,console.log(this.investors)})}},mounted(){this.getAllInvestors()}},w={class:"pt-22"},B=e("img",{src:I},null,-1),F={class:"media-center py-28 bg-background-section"},D={class:"container mx-auto"},L={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},y=["innerHTML"],A=["src"];function M(s,T,V,H,m,j){const _=n("Navbar"),p=n("img-banner"),g=n("card-link"),u=n("DarkFooter");return r(),i(c,null,[a(_,{class:"bg-black fixed z-50 w-full"}),e("div",w,[a(p,null,{text:o(()=>[l(d(s.$t("investor_banner")),1)]),default:o(()=>[B]),_:1})]),e("section",F,[e("div",D,[e("div",L,[(r(!0),i(c,null,$(m.investors,t=>(r(),x(g,{key:t.id,onClick:C(q=>s.$router.push({name:"Investors Relation",params:{id:t.id}}),["prevent"])},{head:o(()=>[l(d(t.title[s.$i18n.locale]),1)]),text:o(()=>[e("div",{innerHTML:t.content[s.$i18n.locale].slice(0,100)+"..."},null,8,y)]),default:o(()=>[e("img",{class:"object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:t.media[0].original_url,alt:""},null,8,A)]),_:2},1032,["onClick"]))),128))])])]),a(u)],64)}const K=b(N,[["render",M]]);export{K as default};
