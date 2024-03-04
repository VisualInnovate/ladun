import{N as y}from"./Navbar-f4703c96.js";import{L as v}from"./LightFooter-80710c26.js";import{u as N}from"./flowbite-vue-bb211e24.js";import{_ as I,r as u,o as L,c as Y,a as _,b as e,t as r,l as n,bu as l,bt as f,n as x,d as U,F,s as R,v as j}from"./main-34000e13.js";const z="/build/assets/location-c3b0b474.png",M="/build/assets/phone-d8906e81.png",S="/build/assets/email-21860ff5.png";const T={components:{Navbar:y,LightFooter:v,Input:N},data(){return{contact:{},error:{name:"",email:"",phone:"",subject:"",content:""},first_name:"",last_name:"",mobile:"",email:"",region:"Eastern",status:"Buy"}},methods:{submit(){axios.post("https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{first_name:this.first_name,last_name:this.last_name,mobile:this.mobile,email:this.email,oid:"00D3G0000008knU",retURL:"http://google.com","00N3G00000IEQrA":this.status+"-"+this.region+" Region","00N3G00000FV0J9":""}).then(t=>{}).catch(t=>console.log(t))}},computed:{mapLink(){return"https://maps.google.com/maps?key=AIzaSyDWxa_rbz7ccvjsvxmbPR5Q_AEK14-D0sk&q=24.820366950,46.64352462&hl=es&z=14&amp&output=embed"}},mounted(){axios.get("/api/settings").then(t=>{this.contact=t.data.settings})}},d=t=>(R("data-v-d20b7454"),t=t(),j(),t),V={class:"container mx-auto"},G={class:"pt-36 px-5 mx-5 mb-5 font-bold dark:text-white dark:bg-black"},E={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap lg:mx-10 my-5"},A={class:"flex-auto"},B={class:"grid grid-cols-1 gap-5 lg:grid-cols-2"},C={class:"bg-[#57565B] dark:bg-white rounded-xl h-[100%] lg:h-[90%]"},D={class:"text-dark-brown py-10 rounded-2xl text-lg px-5 text-sm"},K={class:"grid gap-y-12 mx-5 pb-12"},Q={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5"},W=["placeholder"],Z=["placeholder"],O={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5"},$=d(()=>e("input",{type:"hidden",name:"oid",value:"00D8d0000060W7M"},null,-1)),q=d(()=>e("input",{type:"hidden",name:"retURL",value:"https://www.ladun.sa/ar"},null,-1)),J=d(()=>e("input",{id:"a013G000001hMGOQA2",maxlength:"255",name:"a013G000001hMGOQA2",size:"20",type:"hidden"},null,-1)),P=["placeholder"],H=["placeholder"],X={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 gap-x-5"},ee={value:"Buy"},te={value:"Rent"},oe={value:"Other"},re={value:"Eastern"},ae={value:"Middle"},se={value:"Northern"},ne={value:"Western"},de={class:"w-full"},le={class:"flex flex-row justify-start gap-x-5"},ie=d(()=>e("img",{class:"h-16",src:z},null,-1)),ce={href:"https://maps.app.goo.gl/8p13Sqxo4kJMFtfy9",target:"_blank",class:"underline my-auto dark:text-[white]"},ge={class:"flex flex-row justify-start gap-x-5"},me=d(()=>e("img",{class:"h-16",src:M},null,-1)),pe={class:"flex flex-col"},be={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},he={class:"font-bold inline dark:text-[white]"},ue=["href"],_e={class:"my-auto"},fe={class:"font-bold inline dark:text-[white]"},xe=["href"],ke={class:"flex flex-row justify-start gap-x-5"},we=d(()=>e("img",{class:"h-16",src:S},null,-1)),ye={class:"my-auto flex flex-row"},ve={class:"font-bold dark:text-[white]"},Ne=["href"];function Ie(t,a,Le,Ye,o,i){var c,g,m,p,b,h;const k=u("Navbar"),w=u("LightFooter");return L(),Y(F,null,[_(k,{class:"bg-black fixed z-50 w-full"}),e("div",V,[e("h1",G,r(t.$t("contactUs")),1),e("div",E,[e("div",A,[e("div",B,[e("div",C,[e("div",D,r(t.$t("beInTouch")),1),e("form",K,[e("div",Q,[n(e("input",{type:"text",id:"first_name",maxlength:"40",name:"first_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":a[0]||(a[0]=s=>o.first_name=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("FirstName")},null,8,W),[[l,o.first_name]]),n(e("input",{type:"text",id:"last_name",maxlength:"80",name:"last_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":a[1]||(a[1]=s=>o.last_name=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("LastName")},null,8,Z),[[l,o.last_name]])]),e("div",O,[$,q,J,n(e("input",{type:"number",id:"mobile",maxlength:"40",name:"mobile","onUpdate:modelValue":a[2]||(a[2]=s=>o.mobile=s),"aria-describedby":"helper-text-explanation",class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("PhoneNumber")},null,8,P),[[l,o.mobile]]),n(e("input",{type:"email",id:"email",maxlength:"80",name:"email","aria-describedby":"helper-text-explanation","onUpdate:modelValue":a[3]||(a[3]=s=>o.email=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("Email")},null,8,H),[[l,o.email]])]),e("div",X,[n(e("select",{class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":a[4]||(a[4]=s=>o.status=s)},[e("option",ee,r(t.$t("ownership")),1),e("option",te,r(t.$t("rent")),1),e("option",oe,r(t.$t("other")),1)],512),[[f,o.status]]),n(e("select",{class:"lg:w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":a[5]||(a[5]=s=>o.region=s)},[e("option",re,r(t.$t("easternRegion")),1),e("option",ae,r(t.$t("middleRegion")),1),e("option",se,r(t.$t("westernRegion")),1),e("option",ne,r(t.$t("SouthernRegion")),1)],512),[[f,o.region]])]),e("button",{type:"submit",onClick:a[6]||(a[6]=(...s)=>i.submit&&i.submit(...s)),class:"bg-dark-brown h-10 mb-10 mx-2 rounded-3xl text-white"},r(t.$t("sendNow")),1)])]),e("div",de,[e("iframe",{class:x(t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"),src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d906.3230424820638!2d46.6705705!3d24.6824812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b35533327%3A0x815af65663dafe63!2zUkdNQjI3NTHYjCAyNzUxINi02KfYsdi5INin2YTYo9mF2YrYsSDYs9mE2LfYp9mGINio2YYg2LnYqNiv2KfZhNi52LLZitiy2IwgNjc2OdiMINit2Yog2KfZhNmF2LnYsNixINin2YTYtNmF2KfZhNmKLCBSaXlhZGggMTIzMTIsIFNhdWRpIEFyYWJpYQ!5e0!3m2!1sen!2seg!4v1701034421466!5m2!1sen!2seg",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,2)])]),e("div",{class:x(["flex flex-col gap-y-5 py-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e("div",le,[ie,e("a",ce,r(t.$t("location")),1)]),e("div",ge,[me,e("div",pe,[e("div",be,[e("p",he,r(t.$t("phone")),1),U(),e("a",{class:"underline dark:text-[white]",target:"_blank",href:"tel:"+((c=o.contact[0])==null?void 0:c.phone)},r((g=o.contact[0])==null?void 0:g.phone),9,ue)]),e("div",_e,[e("p",fe,r(t.$t("fax")),1),e("a",{class:"underline dark:text-[white]",href:"tel:"+((m=o.contact[0])==null?void 0:m.fax)}," : "+r((p=o.contact[0])==null?void 0:p.fax),9,xe)])])]),e("div",ke,[we,e("div",ye,[e("p",ve,r(t.$t("email")),1),e("a",{href:(b=o.contact[0])==null?void 0:b.email,class:"underline dark:text-[white]"}," : "+r((h=o.contact[0])==null?void 0:h.email),9,Ne)])])],2)])])]),_(w)],64)}const ze=I(T,[["render",Ie],["__scopeId","data-v-d20b7454"]]);export{ze as default};
