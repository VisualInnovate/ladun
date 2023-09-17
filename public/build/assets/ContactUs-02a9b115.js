import{N as p}from"./Navbar-9a211af5.js";import{L as h}from"./LightFooter-3e0384ed.js";import{u as _}from"./flowbite-vue-51ffeb08.js";import{_ as f,r as i,o as k,c as x,a as c,b as e,t as o,l as n,bu as l,bt as m,n as u,d as y,F as w}from"./main-97e06be6.js";const v="/build/assets/map-b128fce8.png",N="/build/assets/location-c3b0b474.png",U="/build/assets/phone-d8906e81.png",$="/build/assets/email-21860ff5.png",L={components:{Navbar:p,LightFooter:h,Input:_},data(){return{contact:{name:"",email:"",phone:"",subject:"",content:""},error:{name:"",email:"",phone:"",subject:"",content:""},first_name:"",last_name:"",mobile:"",email:"",region:"Eastern",status:"Buy"}},methods:{submit(){axios.post("https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{first_name:this.first_name,last_name:this.last_name,mobile:this.mobile,email:this.email,oid:"00D3G0000008knU",retURL:"http://google.com","00N3G00000IEQrA":this.status+"-"+this.region+" Region","00N3G00000FV0J9":""}).then(t=>{}).catch(t=>console.log(t))}}},R={class:"container mx-auto"},V={class:"pt-36 px-5 mx-5 mb-5 font-bold"},j={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"},F={class:"flex-auto"},G={class:"grid grid-cols-1 gap-5 lg:grid-cols-2"},I={class:"bg-[#57565B] rounded-xl h-[100%] lg:h-[90%]"},B={class:"text-dark-brown py-10 rounded-2xl text-lg px-5 text-sm"},E={class:"grid gap-y-12 mx-5"},M={class:"flex justify-center gap-x-5"},T=["placeholder"],C=["placeholder"],D={class:"flex justify-center gap-x-5"},z=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),A=e("input",{type:"hidden",name:"retURL",value:"https://ladun.visualinnovate.net/"},null,-1),O=e("input",{id:"a013G000001hMGOQA2",maxlength:"255",name:"a013G000001hMGOQA2",size:"20",type:"hidden"},null,-1),Q=["placeholder"],S=["placeholder"],W={class:"flex justify-center gap-x-5"},J={value:"Buy"},P={value:"Rent"},q={value:"Other"},H={value:"Eastern"},K={value:"Middle"},X={value:"Northern"},Y={value:"Western"},Z={class:"w-full"},ee={class:"flex flex-row justify-start gap-x-5"},te=e("img",{class:"h-16",src:N},null,-1),oe={href:"geo:latitude,longitude",target:"_blank",class:"underline my-auto"},re={class:"flex flex-row justify-start gap-x-5"},ae=e("img",{class:"h-16",src:U},null,-1),se={class:"flex flex-col"},ne={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},le={class:"font-bold inline"},de=e("a",{class:"underline",target:"_blank",href:"https://wa.me/920011560"},": 920011560 ",-1),ie={class:"font-bold inline"},ce=e("a",{class:"underline",href:"tel:+4888567,1555",target:"_blank"}," : 1555",-1),me={class:"my-auto"},ue={class:"font-bold inline"},be=e("a",{class:"underline",href:"tel:+4888567"}," : 4888567 - 011",-1),ge={class:"flex flex-row justify-start gap-x-5"},pe=e("img",{class:"h-16",src:$},null,-1),he={class:"my-auto flex flex-row"},_e={class:"font-bold"},fe=e("a",{href:"investor@ladun.com",class:"underline"}," : investor@ladun.com",-1);function ke(t,r,xe,ye,s,d){const b=i("Navbar"),g=i("LightFooter");return k(),x(w,null,[c(b,{class:"bg-black fixed z-50 w-full"}),e("div",R,[e("h1",V,o(t.$t("contactUs")),1),e("div",j,[e("div",F,[e("div",G,[e("div",I,[e("div",B,o(t.$t("beInTouch")),1),e("form",E,[e("div",M,[n(e("input",{type:"text",id:"first_name",maxlength:"40",name:"first_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":r[0]||(r[0]=a=>s.first_name=a),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("FirstName")},null,8,T),[[l,s.first_name]]),n(e("input",{type:"text",id:"mobile",maxlength:"40",name:"mobile","onUpdate:modelValue":r[1]||(r[1]=a=>s.mobile=a),"aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("PhoneNumber")},null,8,C),[[l,s.mobile]])]),e("div",D,[z,A,O,n(e("input",{type:"text",id:"last_name",maxlength:"80",name:"last_name","aria-describedby":"helper-text-explanation","onUpdate:modelValue":r[2]||(r[2]=a=>s.last_name=a),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("LastName")},null,8,Q),[[l,s.last_name]]),n(e("input",{type:"email",id:"email",maxlength:"80",name:"email","aria-describedby":"helper-text-explanation","onUpdate:modelValue":r[3]||(r[3]=a=>s.email=a),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("Email")},null,8,S),[[l,s.email]])]),e("div",W,[n(e("select",{class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":r[4]||(r[4]=a=>s.status=a)},[e("option",J,o(t.$t("ownership")),1),e("option",P,o(t.$t("rent")),1),e("option",q,o(t.$t("other")),1)],512),[[m,s.status]]),n(e("select",{class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown","onUpdate:modelValue":r[5]||(r[5]=a=>s.region=a)},[e("option",H,o(t.$t("easternRegion")),1),e("option",K,o(t.$t("middleRegion")),1),e("option",X,o(t.$t("westernRegion")),1),e("option",Y,o(t.$t("northernRegion")),1)],512),[[m,s.region]])]),e("button",{type:"submit",onClick:r[6]||(r[6]=(...a)=>d.submit&&d.submit(...a)),class:"bg-dark-brown h-10 mb-10 mx-2 rounded-3xl text-white"},o(t.$t("sendNow")),1)])]),e("div",Z,[e("img",{src:v,class:u(["w-full h-[100%] lg:h-[90%]",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},null,2)])]),e("div",{class:u(["flex flex-col gap-y-5 py-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e("div",ee,[te,e("a",oe,o(t.$t("location")),1)]),e("div",re,[ae,e("div",se,[e("div",ne,[e("p",le,o(t.$t("phone")),1),y(),de,e("p",ie,o(t.$t("ext")),1),ce]),e("div",me,[e("p",ue,o(t.$t("fax")),1),be])])]),e("div",ge,[pe,e("div",he,[e("p",_e,o(t.$t("email")),1),fe])])],2)])])]),c(g)],64)}const $e=f(L,[["render",ke]]);export{$e as default};
