import{_ as h,u as f}from"./Navbar-ae1b3e5d.js";import{_ as x}from"./DarkFooter-48808d4a.js";import{_ as k,r as p,o as n,c as d,d as u,a as e,t as r,s as y,k as l,bg as c,m as i,l as m,F as w}from"./main-6a7e1e62.js";const v="/build/assets/location-c3b0b474.png",j="/build/assets/phone-d8906e81.png",N="/build/assets/email-21860ff5.png",V="/build/assets/map-b128fce8.png",U="/build/assets/facebook-be4c08e6.svg",D="/build/assets/instagram-3ca67b19.svg",F="/build/assets/twitter-a9319b75.svg",B={components:{Navbar:h,DarkFooter:x,Input:f},data(){return{contact:{name:"",email:"",phone:"",subject:"",content:""},error:{name:"",email:"",phone:"",subject:"",content:""}}},methods:{submit(){axios.post("/api/contact",this.contact).then(t=>{}).catch(t=>{this.error=t.response.data.errors})}}},C={class:"container mx-auto"},T={class:"pt-36 px-5 mx-5 mb-5 font-bold"},I={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"},M={class:"flex-auto md:w-1/2"},S={class:"bg-black rounded-lg mb-14"},z={class:"text-dark-brown py-10 px-5 text-sm"},E={class:"flex justify-center gap-x-5"},q=["placeholder"],A={key:0,class:"text-red-500"},G=["placeholder"],H={key:1,class:"text-red-500"},J={class:"flex justify-center gap-x-5"},K=["placeholder"],L={key:0,class:"text-red-500"},O=["placeholder"],P={key:1,class:"text-red-500"},Q=["placeholder"],R={key:0,class:"text-red-500"},W={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},X={class:"flex flex-col gap-y-5 py-2"},Y={class:"flex flex-row justify-start gap-x-5"},Z=e("img",{class:"h-16",src:v},null,-1),$={class:"my-auto"},ee={class:"flex flex-row justify-start gap-x-5"},oe=e("img",{class:"h-16",src:j},null,-1),te={class:"flex flex-col"},re={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},se={class:"font-bold inline"},ae=e("span",null,": 920011560 ",-1),ne={class:"font-bold inline"},de=e("span",null," : 1555",-1),le={class:"my-auto"},ce={class:"font-bold inline"},ie=e("span",null," : 4888567 - 011",-1),be={class:"flex flex-row justify-start gap-x-5"},pe=e("img",{class:"h-16",src:N},null,-1),ue={class:"my-auto flex flex-row"},me={class:"font-bold"},_e=e("span",null," : investor@ladun.com",-1),ge={class:"w-full md:w-1/2 mx-2 mb-5"},he=e("img",{src:V,class:"drop-shadow-[-2rem_2rem_rgba(0,0,0,0.05)]"},null,-1),fe={class:"mt-10 text-center"},xe=e("div",{class:"flex justify-between px-10 mt-10"},[e("img",{class:"h-10",src:U,alt:"facebook icon"}),e("img",{class:"h-10",src:D,alt:"instagram icon"}),e("img",{class:"h-10",src:F,alt:"twitter icon"})],-1);function ke(t,s,ye,we,o,b){const _=p("Navbar"),g=p("DarkFooter");return n(),d(w,null,[u(_,{class:"bg-black fixed z-50 w-full"}),e("div",C,[e("h1",T,r(t.$t("contactUs")),1),e("div",I,[e("div",M,[e("div",S,[e("div",z,r(t.$t("beInTouch")),1),e("form",{class:"grid gap-y-10 mx-5",onSubmit:s[5]||(s[5]=y((...a)=>b.submit&&b.submit(...a),["prevent"]))},[e("div",E,[l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.contact.name=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,q),[[c,o.contact.name]]),o.error.name?(n(),d("div",A,r(o.error.name[0]),1)):i("",!0),l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.contact.email=a),type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,G),[[c,o.contact.email]]),o.error.email?(n(),d("div",H,r(o.error.email[0]),1)):i("",!0)]),e("div",J,[l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>o.contact.phone=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,K),[[c,o.contact.phone]]),o.error.phone?(n(),d("div",L,r(o.error.phone[0]),1)):i("",!0),l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>o.contact.subject=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("subject")},null,8,O),[[c,o.contact.subject]]),o.error.subject?(n(),d("div",P,r(o.error.subject[0]),1)):i("",!0)]),l(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=a=>o.contact.content=a),id:"message",rows:"4",class:"block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-brown focus:border-dark-brown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("content")},null,8,Q),[[c,o.contact.content]]),o.error.content?(n(),d("div",R,r(o.error.content[0]),1)):i("",!0),e("button",W,r(t.$t("sendNow")),1)],32)]),e("div",X,[e("div",Y,[Z,e("p",$,r(t.$t("location")),1)]),e("div",ee,[oe,e("div",te,[e("div",re,[e("p",se,r(t.$t("phone")),1),m(),ae,e("p",ne,r(t.$t("ext")),1),de]),e("div",le,[e("p",ce,r(t.$t("fax")),1),ie])])]),e("div",be,[pe,e("div",ue,[e("p",me,r(t.$t("email")),1),_e])])])]),e("div",ge,[he,e("div",fe,[m(r(t.$t("followUs"))+" ",1),xe])])])]),u(g)],64)}const Ve=k(B,[["render",ke]]);export{Ve as default};
