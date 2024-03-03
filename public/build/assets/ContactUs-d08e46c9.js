import{N as y}from"./Navbar-5d34887d.js";import{L as v}from"./LightFooter-16ff6df3.js";import{u as N}from"./flowbite-vue-591b3e80.js";import{_ as I,r as b,o as L,c as Y,a as _,b as e,t as a,l as n,bu as l,bt as f,n as x,d as U,F,s as R,v as j}from"./main-766e27ab.js";const z="/build/assets/location-c3b0b474.png",M="/build/assets/phone-d8906e81.png",S="/build/assets/email-21860ff5.png";const T={components:{Navbar:y,LightFooter:v,Input:N},data(){return{contact:{},error:{name:"",email:"",phone:"",subject:"",content:""},first_name:"",last_name:"",mobile:"",email:"",region:"Eastern",status:"Buy"}},methods:{submit(){axios.post("https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{first_name:this.first_name,last_name:this.last_name,mobile:this.mobile,email:this.email,oid:"00D3G0000008knU",retURL:"http://google.com","00N3G00000IEQrA":this.status+"-"+this.region+" Region","00N3G00000FV0J9":""}).then(t=>{}).catch(t=>console.log(t))}},computed:{mapLink(){return"https://maps.google.com/maps?key=AIzaSyDWxa_rbz7ccvjsvxmbPR5Q_AEK14-D0sk&q=24.820366950,46.64352462&hl=es&z=14&amp&output=embed"}},mounted(){axios.get("/api/settings").then(t=>{this.contact=t.data.settings})}},d=t=>(R("data-v-fad28322"),t=t(),j(),t),V={class:"container mx-auto"},G={class:"pt-36 px-5 mx-5 mb-5 font-bold dark:text-white dark:bg-black"},E={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap lg:mx-10 my-5"},A={class:"flex-auto"},B={class:"grid grid-cols-1 gap-5 lg:grid-cols-2"},C={class:"bg-[#57565B] rounded-xl h-[100%] lg:h-[90%]"},D={class:"text-dark-brown py-10 rounded-2xl text-lg px-5 text-sm"},K={class:"grid gap-y-12 mx-5 pb-12"},Q={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5"},W=["placeholder"],Z=["placeholder"],O={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5"},$=d(()=>e("input",{type:"hidden",name:"oid",value:"00D8d0000060W7M"},null,-1)),q=d(()=>e("input",{type:"hidden",name:"retURL",value:"https://www.ladun.sa/ar"},null,-1)),J=d(()=>e("input",{id:"a013G000001hMGOQA2",maxlength:"255",name:"a013G000001hMGOQA2",size:"20",type:"hidden"},null,-1)),P=["placeholder"],H=["placeholder"],X={class:"grid grid-cols-1 gap-5 lg:grid-cols-2 gap-x-5"},ee={value:"Buy"},te={value:"Rent"},oe={value:"Other"},ae={value:"Eastern"},re={value:"Middle"},se={value:"Northern"},ne={value:"Western"},de={class:"w-full"},le={class:"flex flex-row justify-start gap-x-5"},ie=d(()=>e("img",{class:"h-16",src:z},null,-1)),ce={href:"https://maps.app.goo.gl/8p13Sqxo4kJMFtfy9",target:"_blank",class:"underline my-auto dark:text-[white]"},ge={class:"flex flex-row justify-start gap-x-5"},me=d(()=>e("img",{class:"h-16",src:M},null,-1)),pe={class:"flex flex-col"},ue={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},he={class:"font-bold inline dark:text-[white]"},be=["href"],_e={class:"my-auto"},fe={class:"font-bold inline dark:text-[white]"},xe=["href"],ke={class:"flex flex-row justify-start gap-x-5"},we=d(()=>e("img",{class:"h-16",src:S},null,-1)),ye={class:"my-auto flex flex-row"},ve={class:"font-bold dark:text-[white]"},Ne=["href"];function Ie(t,r,Le,Ye,o,i){var c,g,m,p,u,h;const k=b("Navbar"),w=b("LightFooter");return L(),Y(F,null,[_(k,{class:"bg-black fixed z-50 w-full"}),e("div",V,[e("h1",G,a(t.$t("contactUs")),1),e("div",E,[e("div",A,[e("div",B,[e("div",C,[e("div",D,a(t.$t("beInTouch")),1),e("form",K,[e("div",Q,[n(e("input",{type:"text",id:"first_name",maxlength:"40",name:"first_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":r[0]||(r[0]=s=>o.first_name=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("FirstName")},null,8,W),[[l,o.first_name]]),n(e("input",{type:"text",id:"last_name",maxlength:"80",name:"last_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":r[1]||(r[1]=s=>o.last_name=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("LastName")},null,8,Z),[[l,o.last_name]])]),e("div",O,[$,q,J,n(e("input",{type:"number",id:"mobile",maxlength:"40",name:"mobile","onUpdate:modelValue":r[2]||(r[2]=s=>o.mobile=s),"aria-describedby":"helper-text-explanation",class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("PhoneNumber")},null,8,P),[[l,o.mobile]]),n(e("input",{type:"email",id:"email",maxlength:"80",name:"email","aria-describedby":"helper-text-explanation","onUpdate:modelValue":r[3]||(r[3]=s=>o.email=s),class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("Email")},null,8,H),[[l,o.email]])]),e("div",X,[n(e("select",{class:"lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":r[4]||(r[4]=s=>o.status=s)},[e("option",ee,a(t.$t("ownership")),1),e("option",te,a(t.$t("rent")),1),e("option",oe,a(t.$t("other")),1)],512),[[f,o.status]]),n(e("select",{class:"lg:w-full mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":r[5]||(r[5]=s=>o.region=s)},[e("option",ae,a(t.$t("easternRegion")),1),e("option",re,a(t.$t("middleRegion")),1),e("option",se,a(t.$t("westernRegion")),1),e("option",ne,a(t.$t("SouthernRegion")),1)],512),[[f,o.region]])]),e("button",{type:"submit",onClick:r[6]||(r[6]=(...s)=>i.submit&&i.submit(...s)),class:"bg-dark-brown h-10 mb-10 mx-2 rounded-3xl text-white"},a(t.$t("sendNow")),1)])]),e("div",de,[e("iframe",{class:x(t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"),src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d906.3230424820638!2d46.6705705!3d24.6824812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b35533327%3A0x815af65663dafe63!2zUkdNQjI3NTHYjCAyNzUxINi02KfYsdi5INin2YTYo9mF2YrYsSDYs9mE2LfYp9mGINio2YYg2LnYqNiv2KfZhNi52LLZitiy2IwgNjc2OdiMINit2Yog2KfZhNmF2LnYsNixINin2YTYtNmF2KfZhNmKLCBSaXlhZGggMTIzMTIsIFNhdWRpIEFyYWJpYQ!5e0!3m2!1sen!2seg!4v1701034421466!5m2!1sen!2seg",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,2)])]),e("div",{class:x(["flex flex-col gap-y-5 py-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e("div",le,[ie,e("a",ce,a(t.$t("location")),1)]),e("div",ge,[me,e("div",pe,[e("div",ue,[e("p",he,a(t.$t("phone")),1),U(),e("a",{class:"underline dark:text-[white]",target:"_blank",href:"tel:"+((c=o.contact[0])==null?void 0:c.phone)},a((g=o.contact[0])==null?void 0:g.phone),9,be)]),e("div",_e,[e("p",fe,a(t.$t("fax")),1),e("a",{class:"underline dark:text-[white]",href:"tel:"+((m=o.contact[0])==null?void 0:m.fax)}," : "+a((p=o.contact[0])==null?void 0:p.fax),9,xe)])])]),e("div",ke,[we,e("div",ye,[e("p",ve,a(t.$t("email")),1),e("a",{href:(u=o.contact[0])==null?void 0:u.email,class:"underline dark:text-[white]"}," : "+a((h=o.contact[0])==null?void 0:h.email),9,Ne)])])],2)])])]),_(w)],64)}const ze=I(T,[["render",Ie],["__scopeId","data-v-fad28322"]]);export{ze as default};
