import{I as u}from"./ImgBanner-c616bceb.js";import{_ as g}from"./Navbar-cfcfe00e.js";import{_ as b}from"./DarkFooter-48c3c4c5.js";import{bu as f,aJ as o,o as a,c as n,e as i,a as e,w as r,F as c,r as h,f as x,t as v,aC as w,az as k}from"./main-94c45711.js";const y="/build/assets/companies-banner-2f481594.png";const C={data(){return{companies:[]}},components:{ImgBanner:u,Navbar:g,DarkFooter:b},methods:{getAllCompanies(){axios.get("/api/companies").then(t=>{this.companies=t.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies()}},l=t=>(w("data-v-12d9e2ad"),t=t(),k(),t),$={class:"pt-32"},I=l(()=>e("img",{src:y},null,-1)),N={class:"company py-28 bg-background-section"},F={class:"container mx-auto"},S={class:"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-32"},B=["src"],D={class:"text-2xl font-bold"},L=["innerHTML"],T=l(()=>e("div",{class:"flex content-start flex-row justify-start w-full"},[e("a",{class:"special-button button bg-dark-brown text-white px-4 py-2 my-5 mb-14 ml-4 rtl:mr-4"},"زيارة الموقع ")],-1));function V(t,z,A,H,d,M){const m=o("Navbar"),_=o("img-banner"),p=o("DarkFooter");return a(),n(c,null,[i(m,{class:"bg-black fixed z-50 w-full"}),e("div",$,[i(_,null,{text:r(()=>[x("الشركات الخاصة بمسار التطوير العقاري ")]),default:r(()=>[I]),_:1})]),e("section",N,[e("div",F,[e("div",S,[(a(!0),n(c,null,h(d.companies,s=>(a(),n("div",{key:s.id,class:"rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light flex content-center flex-col pt-5 items-center bg-white mb-12 sm:w-3/4 md:w-full mx-auto"},[e("img",{class:"img-companies rounded-full mb-6",src:s.media[0].original_url,alt:"Sunset in the mountains"},null,8,B),e("h3",D,v(s.title[t.$i18n.locale]),1),e("p",{class:"text-base px-7 pb-6 pt-3",innerHTML:s.content[t.$i18n.locale]},null,8,L),T]))),128))])])]),i(p)],64)}const G=f(C,[["render",V],["__scopeId","data-v-12d9e2ad"]]);export{G as default};