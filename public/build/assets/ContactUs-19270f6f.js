<<<<<<<< HEAD:public/build/assets/ContactUs-19270f6f.js
import{_ as h,u as f}from"./Navbar-de404da5.js";import{_ as k}from"./DarkFooter-063b1275.js";import{_ as x,r as p,o as n,c as d,d as u,a as e,t as r,m as y,bp as l,bf as c,k as i,j as m,F as w}from"./main-29c2d292.js";const v="/build/assets/location-c3b0b474.png",j="/build/assets/phone-d8906e81.png",N="/build/assets/email-21860ff5.png",V="/build/assets/map-b128fce8.png",U="/build/assets/facebook-be4c08e6.svg",D="/build/assets/instagram-3ca67b19.svg",F="/build/assets/twitter-a9319b75.svg",B={components:{Navbar:h,DarkFooter:k,Input:f},data(){return{contact:{name:"",email:"",phone:"",subject:"",content:""},error:{name:"",email:"",phone:"",subject:"",content:""}}},methods:{submit(){axios.post("/api/contact",this.contact).then(t=>{}).catch(t=>{this.error=t.response.data.errors})}}},C={class:"pt-32 mx-5 mb-5"},T={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"},I={class:"flex-auto md:w-1/2"},M={class:"bg-black rounded-lg mb-14"},S={class:"text-dark-brown py-10 px-5 text-sm"},z={class:"flex justify-center gap-x-5"},E=["placeholder"],q={key:0,class:"text-red-500"},A=["placeholder"],G={key:1,class:"text-red-500"},H={class:"flex justify-center gap-x-5"},J=["placeholder"],K={key:0,class:"text-red-500"},L=["placeholder"],O={key:1,class:"text-red-500"},P=["placeholder"],Q={key:0,class:"text-red-500"},R={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},W={class:"flex flex-col gap-y-5 py-2"},X={class:"flex flex-row justify-start gap-x-5"},Y=e("img",{class:"h-16",src:v},null,-1),Z={class:"my-auto"},$={class:"flex flex-row justify-start gap-x-5"},ee=e("img",{class:"h-16",src:j},null,-1),oe={class:"flex flex-col"},te={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},re={class:"font-bold inline"},se=e("span",null,": 920011560 ",-1),ae={class:"font-bold inline"},ne=e("span",null," : 1555",-1),de={class:"my-auto"},le={class:"font-bold inline"},ce=e("span",null," : 4888567 - 011",-1),ie={class:"flex flex-row justify-start gap-x-5"},be=e("img",{class:"h-16",src:N},null,-1),pe={class:"my-auto flex flex-row"},ue={class:"font-bold"},me=e("span",null," : investor@ladun.com",-1),_e={class:"w-full md:w-1/2 mx-2 mb-5"},ge=e("img",{src:V,class:"drop-shadow-[-2rem_2rem_rgba(0,0,0,0.05)]"},null,-1),he={class:"mt-10 text-center"},fe=e("div",{class:"flex justify-between px-10 mt-10"},[e("img",{class:"h-10",src:U,alt:"facebook icon"}),e("img",{class:"h-10",src:D,alt:"instagram icon"}),e("img",{class:"h-10",src:F,alt:"twitter icon"})],-1);function ke(t,s,xe,ye,o,b){const _=p("Navbar"),g=p("DarkFooter");return n(),d(w,null,[u(_,{class:"bg-black fixed z-50 w-full"}),e("h1",C,r(t.$t("contactUs")),1),e("div",T,[e("div",I,[e("div",M,[e("div",S,r(t.$t("beInTouch")),1),e("form",{class:"grid gap-y-10 mx-5",onSubmit:s[5]||(s[5]=y((...a)=>b.submit&&b.submit(...a),["prevent"]))},[e("div",z,[l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.contact.name=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,E),[[c,o.contact.name]]),o.error.name?(n(),d("div",q,r(o.error.name[0]),1)):i("",!0),l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.contact.email=a),type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,A),[[c,o.contact.email]]),o.error.email?(n(),d("div",G,r(o.error.email[0]),1)):i("",!0)]),e("div",H,[l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>o.contact.phone=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,J),[[c,o.contact.phone]]),o.error.phone?(n(),d("div",K,r(o.error.phone[0]),1)):i("",!0),l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>o.contact.subject=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("subject")},null,8,L),[[c,o.contact.subject]]),o.error.subject?(n(),d("div",O,r(o.error.subject[0]),1)):i("",!0)]),l(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=a=>o.contact.content=a),id:"message",rows:"4",class:"block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-brown focus:border-dark-brown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("content")},null,8,P),[[c,o.contact.content]]),o.error.content?(n(),d("div",Q,r(o.error.content[0]),1)):i("",!0),e("button",R,r(t.$t("sendNow")),1)],32)]),e("div",W,[e("div",X,[Y,e("p",Z,r(t.$t("location")),1)]),e("div",$,[ee,e("div",oe,[e("div",te,[e("p",re,r(t.$t("phone")),1),m(),se,e("p",ae,r(t.$t("ext")),1),ne]),e("div",de,[e("p",le,r(t.$t("fax")),1),ce])])]),e("div",ie,[be,e("div",pe,[e("p",ue,r(t.$t("email")),1),me])])])]),e("div",_e,[ge,e("div",he,[m(r(t.$t("followUs"))+" ",1),fe])])]),u(g)],64)}const Ne=x(B,[["render",ke]]);export{Ne as default};
========
import{_ as h,u as f}from"./Navbar-493bebb1.js";import{_ as k}from"./DarkFooter-9470d465.js";import{_ as x,r as p,o as n,c as d,d as u,a as e,t as r,m as y,bp as l,bf as c,k as i,j as m,F as w}from"./main-07736f51.js";const v="/build/assets/location-c3b0b474.png",j="/build/assets/phone-d8906e81.png",N="/build/assets/email-21860ff5.png",V="/build/assets/map-b128fce8.png",U="/build/assets/facebook-be4c08e6.svg",D="/build/assets/instagram-3ca67b19.svg",F="/build/assets/twitter-a9319b75.svg",B={components:{Navbar:h,DarkFooter:k,Input:f},data(){return{contact:{name:"",email:"",phone:"",subject:"",content:""},error:{name:"",email:"",phone:"",subject:"",content:""}}},methods:{submit(){axios.post("/api/contact",this.contact).then(t=>{}).catch(t=>{this.error=t.response.data.errors})}}},C={class:"pt-32 mx-5 mb-5"},T={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"},I={class:"flex-auto md:w-1/2"},M={class:"bg-black rounded-lg mb-14"},S={class:"text-dark-brown py-10 px-5 text-sm"},z={class:"flex justify-center gap-x-5"},E=["placeholder"],q={key:0,class:"text-red-500"},A=["placeholder"],G={key:1,class:"text-red-500"},H={class:"flex justify-center gap-x-5"},J=["placeholder"],K={key:0,class:"text-red-500"},L=["placeholder"],O={key:1,class:"text-red-500"},P=["placeholder"],Q={key:0,class:"text-red-500"},R={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},W={class:"flex flex-col gap-y-5 py-2"},X={class:"flex flex-row justify-start gap-x-5"},Y=e("img",{class:"h-16",src:v},null,-1),Z={class:"my-auto"},$={class:"flex flex-row justify-start gap-x-5"},ee=e("img",{class:"h-16",src:j},null,-1),oe={class:"flex flex-col"},te={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},re={class:"font-bold inline"},se=e("span",null,": 920011560 ",-1),ae={class:"font-bold inline"},ne=e("span",null," : 1555",-1),de={class:"my-auto"},le={class:"font-bold inline"},ce=e("span",null," : 4888567 - 011",-1),ie={class:"flex flex-row justify-start gap-x-5"},be=e("img",{class:"h-16",src:N},null,-1),pe={class:"my-auto flex flex-row"},ue={class:"font-bold"},me=e("span",null," : investor@ladun.com",-1),_e={class:"w-full md:w-1/2 mx-2 mb-5"},ge=e("img",{src:V,class:"drop-shadow-[-2rem_2rem_rgba(0,0,0,0.05)]"},null,-1),he={class:"mt-10 text-center"},fe=e("div",{class:"flex justify-between px-10 mt-10"},[e("img",{class:"h-10",src:U,alt:"facebook icon"}),e("img",{class:"h-10",src:D,alt:"instagram icon"}),e("img",{class:"h-10",src:F,alt:"twitter icon"})],-1);function ke(t,s,xe,ye,o,b){const _=p("Navbar"),g=p("DarkFooter");return n(),d(w,null,[u(_,{class:"bg-black fixed z-50 w-full"}),e("h1",C,r(t.$t("contactUs")),1),e("div",T,[e("div",I,[e("div",M,[e("div",S,r(t.$t("beInTouch")),1),e("form",{class:"grid gap-y-10 mx-5",onSubmit:s[5]||(s[5]=y((...a)=>b.submit&&b.submit(...a),["prevent"]))},[e("div",z,[l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.contact.name=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,E),[[c,o.contact.name]]),o.error.name?(n(),d("div",q,r(o.error.name[0]),1)):i("",!0),l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.contact.email=a),type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,A),[[c,o.contact.email]]),o.error.email?(n(),d("div",G,r(o.error.email[0]),1)):i("",!0)]),e("div",H,[l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>o.contact.phone=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,J),[[c,o.contact.phone]]),o.error.phone?(n(),d("div",K,r(o.error.phone[0]),1)):i("",!0),l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>o.contact.subject=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("subject")},null,8,L),[[c,o.contact.subject]]),o.error.subject?(n(),d("div",O,r(o.error.subject[0]),1)):i("",!0)]),l(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=a=>o.contact.content=a),id:"message",rows:"4",class:"block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-brown focus:border-dark-brown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("content")},null,8,P),[[c,o.contact.content]]),o.error.content?(n(),d("div",Q,r(o.error.content[0]),1)):i("",!0),e("button",R,r(t.$t("sendNow")),1)],32)]),e("div",W,[e("div",X,[Y,e("p",Z,r(t.$t("location")),1)]),e("div",$,[ee,e("div",oe,[e("div",te,[e("p",re,r(t.$t("phone")),1),m(),se,e("p",ae,r(t.$t("ext")),1),ne]),e("div",de,[e("p",le,r(t.$t("fax")),1),ce])])]),e("div",ie,[be,e("div",pe,[e("p",ue,r(t.$t("email")),1),me])])])]),e("div",_e,[ge,e("div",he,[m(r(t.$t("followUs"))+" ",1),fe])])]),u(g)],64)}const Ne=x(B,[["render",ke]]);export{Ne as default};
>>>>>>>> 9f21cdd4f939ce94da372ea3f6dea05b968c1016:public/build/assets/ContactUs-4424dbf4.js
