import{_ as Y,r as v,o as d,c as h,a,w as r,b as e,t as s,d as n,e as E,f as M,F as S,g as c,h as z,i as B,j as C,k as V,n as N,l as F,u as g,m as O,p as H,q as U,s as G}from"./main-93f4e0ce.js";import{N as K}from"./Navbar-058b81ab.js";import{L as X}from"./LightFooter-1a92f698.js";import{K as q,N as A,X as W,Y as J,u as Q,C as Z,M as ee,B as te,a as D,L as oe,b as se}from"./flowbite-vue-5c5e254e.js";import{M as ae}from"./index-28e0bee0.js";const le="/build/assets/28mb_home_page_video-bf923b36.mp4",ne="/build/assets/experience_years-5395469c.svg",re="/build/assets/projects_revenue-8cc57d0f.svg",ie="/build/assets/affiliate-37c9af95.svg",ce="/build/assets/projects_units-6bcb97c6.svg",de="/build/assets/projects_areas-820dff43.svg",ue="/build/assets/about_ladun_image-ed15c0a1.png",_e={data(){return{isShowModal:!1}},props:["formShow"],components:{Modal:q,Dropdown:A,ListGroupItem:W,ListGroup:J,Input:Q},methods:{closeModal(){this.isShowModal=!1},showModal(){this.isShowModal=!0}},mounted(){console.log(this.formShow)},watch:{formShow:{immediate:!0,handler(o,x){this.isShowModal=o}}}},me={class:"w-full inline-flex justify-between px-4 text-white"},fe=e("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),he={class:"mx-11 font-bold"},be={class:"mx-11 font-bold"},ge={class:"flex items-center text-lg"},pe={class:"flex justify-between"};function we(o,x,L,I,j,i){const u=v("list-group-item"),l=v("list-group"),y=v("dropdown"),m=v("Input"),P=v("Modal",!0);return d(),h(S,null,[a(y,{class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:r(()=>[e("span",me,[e("span",null,s(o.$t("choose")),1),fe])]),default:r(()=>[a(l,{class:"w-full"},{default:r(()=>[e("div",he,s(o.$t("ownership")),1),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("easternRegion")),1)]),_:1},8,["onClick"]),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("middleRegion")),1)]),_:1},8,["onClick"]),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("westernRegion")),1)]),_:1},8,["onClick"]),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("northernRegion")),1)]),_:1},8,["onClick"]),e("div",be,s(o.$t("rent")),1),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("middleRegion")),1)]),_:1},8,["onClick"]),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("westernRegion")),1)]),_:1},8,["onClick"]),a(u,{class:"mx-24",onClick:i.showModal},{default:r(()=>[n(s(o.$t("northernRegion")),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),j.isShowModal?(d(),E(P,{key:0,size:o.size,onClose:i.closeModal},{header:r(()=>[e("div",ge,s(o.$t("shareYourInterests")),1)]),body:r(()=>[a(m,{size:"md",placeholder:o.$t("FirstName"),label:o.$t("FirstName")},null,8,["placeholder","label"]),a(m,{size:"md",placeholder:o.$t("FatherName"),label:o.$t("FatherName")},null,8,["placeholder","label"]),a(m,{size:"md",placeholder:o.$t("LastName"),label:o.$t("LastName")},null,8,["placeholder","label"]),a(m,{size:"md",placeholder:o.$t("PhoneNumber"),label:o.$t("PhoneNumber")},null,8,["placeholder","label"]),a(m,{size:"md",placeholder:o.$t("Email"),label:o.$t("Email")},null,8,["placeholder","label"])]),footer:r(()=>[e("div",pe,[e("button",{onClick:x[0]||(x[0]=(...k)=>i.closeModal&&i.closeModal(...k)),type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},s(o.$t("submit")),1)])]),_:1},8,["size","onClose"])):M("",!0)],64)}const ve=Y(_e,[["render",we]]);const p=o=>(U("data-v-8c8fe576"),o=o(),G(),o),xe={class:"relative flex h-screen overflow-hidden"},ye=p(()=>e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),ke=p(()=>e("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[e("source",{src:le,type:"video/mp4"}),n(" Your browser does not support the video tag. ")],-1)),$e={class:"animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},je={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},Me={class:"flex justify-center"},Se={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp animate__slow",href:"#"},Le={id:"project-latest"},Ie={class:"grid grid-cols-4 gap-4 my-10"},Pe={class:"[&>div>div>ul]:justify-center [&>div>div>ul>li]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black"},Ce={class:"grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 lg:grid-cols-4 mx-auto container px-5"},Ne={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project"},ze=["src"],Be={class:"flex flex-col p-2"},Oe={class:"flex-initial"},De={class:"text-dark-brown flex"},Ye={key:0},Ee=["innerHTML"],Re={class:"flex justify-center my-4 mx-2"},Te=["onClick"],Ve={class:"text-center"},Fe={class:"flex flex-wrap m-2"},He={class:"whitespace-nowrap text-gray-500"},Ue={class:"whitespace-nowrap text-gray-500"},Ge={class:"whitespace-nowrap text-gray-500"},Ke={class:"relative about-section",id:"aboutSection"},Xe={class:"flex py-5"},qe={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-3 mx-auto container px-5"},Ae=["innerHTML"],We={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},Je={class:"grid grid-cols-2 justify-center"},Qe=p(()=>e("img",{src:ne,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),Ze={class:"my-auto text-center"},et={class:"text-xl text-dark-brown"},tt={class:"block text-xs"},ot={class:"grid grid-cols-2 justify-center"},st=p(()=>e("img",{src:re,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),at={class:"my-auto text-center"},lt={class:"text-xl text-dark-brown"},nt={class:"block text-xs"},rt={class:"grid grid-cols-2 justify-center"},it=p(()=>e("img",{src:ie,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),ct={class:"my-auto text-center"},dt={class:"text-xl text-dark-brown"},ut={class:"block text-xs"},_t={class:"grid grid-cols-2 justify-center"},mt=p(()=>e("img",{src:ce,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),ft={class:"my-auto text-center"},ht={class:"text-xl text-dark-brown"},bt={class:"block text-xs"},gt={class:"grid grid-cols-2 justify-center"},pt=p(()=>e("img",{src:de,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),wt={class:"my-auto text-center"},vt={class:"text-xl text-dark-brown"},xt={class:"block text-xs"},yt=p(()=>e("img",{class:"w-full",src:ue,alt:"About Ladun"},null,-1)),kt={class:"rounded-2xl border-2 border-yellow-300 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5"},$t={__name:"Home",setup(o){const x=c(!1),L=c(null),I=c(null),j=c(null),i=c(null),u=c(null),l=c({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),y=c(""),m=c([]),P=c([]),k=c([]);z(()=>{window.addEventListener("scroll",T)});function R(){C.get("/api/projects/latest").then(t=>{P.value=t.data.data}).catch(t=>console.log(t)),C.get("/api/about").then(t=>{k.value=t.data[0]}).catch(t=>console.log(t))}R();const T=()=>{let t=document.getElementById("aboutSection"),_=document.getElementById("footerSection");scrollY>_.offsetTop-t.offsetTop+300&&(L.value.restart(),I.value.restart(),j.value.restart(),i.value.restart(),u.value.restart()),window.pageYOffset>0?(l.value.topOfPage&&(l.value.topOfPage=!1),l.value.latestProjectsSection&&(l.value.latestProjectsSection=!1),l.value.aboutLadunSection&&(l.value.aboutLadunSection=!1)):(l.value.topOfPage||(l.value.topOfPage=!0),l.value.latestProjectsSection||(l.value.latestProjectsSection=!0),l.value.aboutLadunSection||(l.value.aboutLadunSection=!0))};return z(async()=>{window.addEventListener("scroll",function(){let _=document.getElementsByClassName("latest_project"),w=document.getElementById("latest_project_header");for(let b=0;b<_.length;b++)window.scrollY>=w.offsetTop-700?B.global.locale.value=="en"?_[b].classList.add("animate__animated","animate__fadeInLeft"):_[b].classList.add("animate__animated","animate__fadeInRight"):B.global.locale.value=="en"?_[b].classList.remove("animate__animated","animate__fadeInLeft"):_[b].classList.remove("animate__animated","animate__fadeInRight")});const t=await C.get("/api/departments/latest/projects");m.value=t.data.data,y.value=m.value[0].title.en}),(t,_)=>{const w=v("number"),b=V("scroll-to");return d(),h(S,null,[a(K,{class:N(["fixed z-30 w-full animate__animated animate__backInDown animate__slow",{"bg-black":!l.value.topOfPage}])},null,8,["class"]),e("header",xe,[ye,ke,e("div",$e,[e("button",je,s(t.$t("shareYourInterests")),1)])]),e("div",Me,[F((d(),h("a",Se,[n(s(t.$t("scrollDown"))+" ",1),a(g(Z),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[b,{el:"#project-latest",offset:-128}]])]),e("section",Le,[e("div",Ie,[e("h2",{id:"latest_project_header",class:N([{"animate__animated animate__fadeInLeft animate__slow":!l.value.latestProjectsSection},"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"])},s(t.$t("latestProjects")),3)]),e("div",Pe,[a(g(se),{variant:"underline",modelValue:y.value,"onUpdate:modelValue":_[0]||(_[0]=$=>y.value=$)},{default:r(()=>[(d(!0),h(S,null,O(m.value,$=>(d(),E(g(oe),{name:$.title.en,title:$.title[t.$i18n.locale]},{default:r(()=>[e("div",Ce,[(d(!0),h(S,null,O($.latest,f=>(d(),h("div",Ne,[f.attachment?(d(),h("img",{key:0,class:"w-full rounded-lg",src:f.attachment,alt:"Project Photo"},null,8,ze)):M("",!0),e("div",Be,[e("h3",Oe,s(f.title[t.$i18n.locale]),1),e("div",De,[a(g(ae),{class:"h-4 w-4"}),n(),f.location?(d(),h("small",Ye,s(f.location.address[t.$i18n.locale]),1)):M("",!0)])]),e("p",{class:"px-2 text-grey text-xs",innerHTML:f.text[t.$i18n.locale].slice(0,200)+" ..."},null,8,Ee),e("div",Re,[e("button",{class:"bg-dark-brown text-white text-center rounded-2xl w-36 h-8",onClick:H(jt=>t.$router.push({name:"Project",params:{id:f.id}}),["prevent"])},[e("small",Ve,[a(g(ee),{class:"inline-block h-4 w-4 justify-end"}),n(" "+s(t.$t("exploreProject")),1)])],8,Te)]),e("div",Fe,[e("div",null,[a(g(te),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",He,s(t.$t("residentialLandPlots")),1)]),e("div",null,[a(g(D),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",Ue,s(f.Land_area)+" "+s(t.$t("areaUnit")),1)]),e("div",null,[a(g(D),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",Ge,s(f.units_number)+" "+s(t.$t("unit")),1)])])]))),256))])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),e("section",Ke,[e("div",Xe,[e("h2",{class:N([{"animate__animated animate__fadeInLeft animate__slow":!l.value.aboutLadunSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3"])},s(t.$t("aboutLadun")),3)]),e("div",qe,[k.value.content?(d(),h("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xs",innerHTML:k.value.content[t.$i18n.locale]},null,8,Ae)):M("",!0),e("div",We,[e("div",Je,[Qe,e("div",Ze,[e("strong",et,[n("+"),a(w,{ref_key:"number1",ref:L,from:0,to:50,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",tt,s(t.$t("experienceYears")),1)])]),e("div",ot,[st,e("div",at,[e("strong",lt,[n("+"),a(w,{ref_key:"number2",ref:I,from:0,to:15,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",nt,s(t.$t("projectsInvestment")),1)])]),e("div",rt,[it,e("div",ct,[e("strong",dt,[n("+"),a(w,{ref_key:"number3",ref:j,from:0,to:11,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",ut,s(t.$t("affiliate")),1)])]),e("div",_t,[mt,e("div",ft,[e("strong",ht,[n("+"),a(w,{ref_key:"number4",ref:i,from:0,to:250,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",bt,s(t.$t("projectsUnits")),1)])]),e("div",gt,[pt,e("div",wt,[e("strong",vt,[n("+"),a(w,{ref_key:"number5",ref:u,from:0,to:19673,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",xt,s(t.$t("unitsUnderProcess")),1)])])]),yt]),e("div",kt,s(t.$t("shareYourInterestWithUs")),1)]),a(ve,{formShow:x.value},null,8,["formShow"]),a(X,{id:"footerSection"})],64)}}},Ct=Y($t,[["__scopeId","data-v-8c8fe576"]]);export{Ct as default};
