import{N as v}from"./Navbar-b1a588d7.js";import{L as N}from"./LightFooter-b40819bd.js";import{u as U}from"./flowbite-vue-220c40a0.js";import{_ as L,r as f,o as R,c as V,a as _,b as e,t as r,l as n,bu as l,bt as x,n as k,d as F,F as j}from"./main-28462303.js";const G="/build/assets/location-c3b0b474.png",I="/build/assets/phone-d8906e81.png",z="/build/assets/email-21860ff5.png",B={components:{Navbar:v,LightFooter:N,Input:U},data(){return{contact:{},error:{name:"",email:"",phone:"",subject:"",content:""},first_name:"",last_name:"",mobile:"",email:"",region:"Eastern",status:"Buy"}},methods:{submit(){axios.post("https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{first_name:this.first_name,last_name:this.last_name,mobile:this.mobile,email:this.email,oid:"00D3G0000008knU",retURL:"http://google.com","00N3G00000IEQrA":this.status+"-"+this.region+" Region","00N3G00000FV0J9":""}).then(o=>{}).catch(o=>console.log(o))}},computed:{mapLink(){return"https://maps.google.com/maps?key=AIzaSyDWxa_rbz7ccvjsvxmbPR5Q_AEK14-D0sk&q=24.820366950,46.64352462&hl=es&z=14&amp&output=embed"}},mounted(){axios.get("/api/settings").then(o=>{this.contact=o.data.settings})}},D={class:"container mx-auto"},E={class:"pt-36 px-5 mx-5 mb-5 font-bold"},M={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap lg:mx-10 my-5"},A={class:"flex-auto"},S={class:"grid grid-cols-1 gap-5 lg:grid-cols-2"},T={class:"bg-[#57565B] rounded-xl h-[100%] lg:h-[90%]"},C={class:"text-dark-brown py-10 rounded-2xl text-lg px-5 text-sm"},Q={class:"grid gap-y-12 mx-5 pb-12"},O={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5"},W=["placeholder"],$=["placeholder"],q={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5"},J=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),P=e("input",{type:"hidden",name:"retURL",value:"https://ladun.visualinnovate.net/"},null,-1),K=e("input",{id:"a013G000001hMGOQA2",maxlength:"255",name:"a013G000001hMGOQA2",size:"20",type:"hidden"},null,-1),H=["placeholder"],X=["placeholder"],Y={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 gap-x-5"},Z={value:"Buy"},ee={value:"Rent"},oe={value:"Other"},te={value:"Eastern"},re={value:"Middle"},ae={value:"Northern"},se={value:"Western"},ne={class:"w-full"},le={class:"flex flex-row justify-start gap-x-5"},de=e("img",{class:"h-16",src:G},null,-1),ie={href:"https://maps.app.goo.gl/8p13Sqxo4kJMFtfy9",target:"_blank",class:"underline my-auto"},ce={class:"flex flex-row justify-start gap-x-5"},ge=e("img",{class:"h-16",src:I},null,-1),me={class:"flex flex-col"},ue={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},be={class:"font-bold inline"},pe=["href"],he={class:"font-bold inline"},fe=["href"],_e={class:"my-auto"},xe={class:"font-bold inline"},ke=["href"],ye={class:"flex flex-row justify-start gap-x-5"},we=e("img",{class:"h-16",src:z},null,-1),ve={class:"my-auto flex flex-row"},Ne={class:"font-bold"},Ue=["href"];function Le(o,a,Re,Ve,t,d){var i,c,g,m,u,b,p,h;const y=f("Navbar"),w=f("LightFooter");return R(),V(j,null,[_(y,{class:"bg-black fixed z-50 w-full"}),e("div",D,[e("h1",E,r(o.$t("contactUs")),1),e("div",M,[e("div",A,[e("div",S,[e("div",T,[e("div",C,r(o.$t("beInTouch")),1),e("form",Q,[e("div",O,[n(e("input",{type:"text",id:"first_name",maxlength:"40",name:"first_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":a[0]||(a[0]=s=>t.first_name=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:o.$t("FirstName")},null,8,W),[[l,t.first_name]]),n(e("input",{type:"text",id:"last_name",maxlength:"80",name:"last_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":a[1]||(a[1]=s=>t.last_name=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:o.$t("LastName")},null,8,$),[[l,t.last_name]])]),e("div",q,[J,P,K,n(e("input",{type:"text",id:"mobile",maxlength:"40",name:"mobile","onUpdate:modelValue":a[2]||(a[2]=s=>t.mobile=s),"aria-describedby":"helper-text-explanation",class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:o.$t("PhoneNumber")},null,8,H),[[l,t.mobile]]),n(e("input",{type:"email",id:"email",maxlength:"80",name:"email","aria-describedby":"helper-text-explanation","onUpdate:modelValue":a[3]||(a[3]=s=>t.email=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:o.$t("Email")},null,8,X),[[l,t.email]])]),e("div",Y,[n(e("select",{class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":a[4]||(a[4]=s=>t.status=s)},[e("option",Z,r(o.$t("ownership")),1),e("option",ee,r(o.$t("rent")),1),e("option",oe,r(o.$t("other")),1)],512),[[x,t.status]]),n(e("select",{class:"lg:w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":a[5]||(a[5]=s=>t.region=s)},[e("option",te,r(o.$t("easternRegion")),1),e("option",re,r(o.$t("middleRegion")),1),e("option",ae,r(o.$t("westernRegion")),1),e("option",se,r(o.$t("SouthernRegion")),1)],512),[[x,t.region]])]),e("button",{type:"submit",onClick:a[6]||(a[6]=(...s)=>d.submit&&d.submit(...s)),class:"bg-dark-brown h-10 mb-10 mx-2 rounded-3xl text-white"},r(o.$t("sendNow")),1)])]),e("div",ne,[e("iframe",{class:k(o.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"),src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d344.2481956219834!2d31.16179031626547!3d30.966030113535098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1698230142745!5m2!1sar!2seg",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,2)])]),e("div",{class:k(["flex flex-col gap-y-5 py-2",o.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e("div",le,[de,e("a",ie,r(o.$t("location")),1)]),e("div",ce,[ge,e("div",me,[e("div",ue,[e("p",be,r(o.$t("phone")),1),F(),e("a",{class:"underline",target:"_blank",href:"tel:"+((i=t.contact[0])==null?void 0:i.phone)},r((c=t.contact[0])==null?void 0:c.phone),9,pe),e("p",he,r(o.$t("ext")),1),e("a",{class:"underline",href:"tel:"+((g=t.contact[0])==null?void 0:g.convert),target:"_blank"}," : "+r((m=t.contact[0])==null?void 0:m.convert),9,fe)]),e("div",_e,[e("p",xe,r(o.$t("fax")),1),e("a",{class:"underline",href:"tel:"+((u=t.contact[0])==null?void 0:u.fax)}," : "+r((b=t.contact[0])==null?void 0:b.fax),9,ke)])])]),e("div",ye,[we,e("div",ve,[e("p",Ne,r(o.$t("email")),1),e("a",{href:(p=t.contact[0])==null?void 0:p.email,class:"underline"}," : "+r((h=t.contact[0])==null?void 0:h.email),9,Ue)])])],2)])])]),_(w)],64)}const ze=L(B,[["render",Le]]);export{ze as default};
