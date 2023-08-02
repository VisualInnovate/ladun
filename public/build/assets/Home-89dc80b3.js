import{_ as G,r as L,o as m,c as v,a as o,w as i,b as e,t as a,d as r,e as T,f as N,F as R,g as c,h as D,i as C,j as H,k as J,n as U,l as V,u,m as F,p as Q,q as Z,s as ee,v as te}from"./main-e7da6bff.js";import{N as oe}from"./Navbar-a0abcc3b.js";import{L as se}from"./LightFooter-1168f10b.js";import{K as ae,N as le,X as ne,Y as ie,u as re,C as de,M as ce,B as ue,a as A,L as me,b as _e}from"./flowbite-vue-dbf40013.js";import{M as fe}from"./index-d0c288b3.js";import{C as he,N as ge,P as pe,S as be}from"./carousel.es-13dd30a4.js";const ve="/build/assets/28mb_home_page_video-bf923b36.mp4",we="/build/assets/experience_years-5395469c.svg",ye="/build/assets/projects_revenue-8cc57d0f.svg",xe="/build/assets/affiliate-37c9af95.svg",ke="/build/assets/projects_units-6bcb97c6.svg",$e="/build/assets/projects_areas-820dff43.svg",Le="/build/assets/about_ladun_image-ed15c0a1.png",Se={data(){return{isShowModal:!1,data:""}},props:["formShow"],components:{Modal:ae,Dropdown:le,ListGroupItem:ne,ListGroup:ie,Input:re},methods:{closeModal(){this.isShowModal=!1},showModal(s){this.isShowModal=!0,console.log(this.data),this.data=s}},mounted(){console.log(this.formShow)},watch:{formShow:{immediate:!0,handler(s,n){this.isShowModal=s}}}},Me={class:"w-full inline-flex justify-between px-4 text-white"},je=e("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),Ie={class:"mx-11 font-bold"},Pe={class:"mx-11 font-bold"},Ce={class:"flex items-center space-x-4 text-lg"},Ne={class:"space-y-4",action:"https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"},Re=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),Be=e("input",{type:"hidden",name:"retURL",value:"http://google.com"},null,-1),Te=["value"],ze=e("input",{type:"hidden",name:"00N3G00000FV0J9",value:""},null,-1),Ee=["value"],Oe=e("div",{class:"flex justify-between"},null,-1);function Ye(s,n,z,E,I,_){const f=L("list-group-item"),g=L("list-group"),d=L("dropdown"),w=L("Input"),S=L("Modal",!0);return m(),v(R,null,[o(d,{class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:i(()=>[e("span",Me,[e("span",null,a(s.$t("choose")),1),je])]),default:i(()=>[o(g,{class:"w-full"},{default:i(()=>[e("div",Ie,a(s.$t("ownership")),1),o(f,{class:"mx-24",onClick:n[0]||(n[0]=p=>_.showModal("Buy-Eastern Region"))},{default:i(()=>[r(a(s.$t("easternRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:n[1]||(n[1]=p=>_.showModal("Buy-Middle Region"))},{default:i(()=>[r(a(s.$t("middleRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:n[2]||(n[2]=p=>_.showModal("Buy-Western Region"))},{default:i(()=>[r(a(s.$t("westernRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:n[3]||(n[3]=p=>_.showModal("Buy-Northern Region"))},{default:i(()=>[r(a(s.$t("northernRegion")),1)]),_:1}),e("div",Pe,a(s.$t("rent")),1),o(f,{class:"mx-24",onClick:n[4]||(n[4]=p=>_.showModal("Buy-Eastern Region"))},{default:i(()=>[r(a(s.$t("easternRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:n[5]||(n[5]=p=>_.showModal("Rent-Middle Region"))},{default:i(()=>[r(a(s.$t("middleRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:n[6]||(n[6]=p=>_.showModal("Rent-Western Region"))},{default:i(()=>[r(a(s.$t("westernRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:n[7]||(n[7]=p=>_.showModal("Rent-Northern Region"))},{default:i(()=>[r(a(s.$t("northernRegion")),1)]),_:1})]),_:1})]),_:1}),I.isShowModal?(m(),T(S,{key:0,size:s.size,onClose:_.closeModal},{header:i(()=>[e("div",Ce,a(s.$t("shareYourInterests")),1)]),body:i(()=>[e("form",Ne,[Re,Be,e("input",{type:"hidden",name:"00N3G00000IEQrA",value:I.data},null,8,Te),ze,o(w,{size:"md",maxlength:"40",name:"first_name",placeholder:s.$t("FirstName"),label:s.$t("FirstName")},null,8,["placeholder","label"]),o(w,{size:"md",maxlength:"80",name:"last_name",placeholder:s.$t("LastName"),label:s.$t("LastName")},null,8,["placeholder","label"]),o(w,{size:"md",maxlength:"40",name:"mobile",placeholder:s.$t("PhoneNumber"),label:s.$t("PhoneNumber")},null,8,["placeholder","label"]),o(w,{size:"md",maxlength:"80",name:"email",placeholder:s.$t("Email"),label:s.$t("Email")},null,8,["placeholder","label"]),e("input",{type:"submit",class:"text-white bg-[#AF9744] hover:bg-[#764522] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",value:s.$t("submit")},null,8,Ee)])]),footer:i(()=>[Oe]),_:1},8,["size","onClose"])):N("",!0)],64)}const De=G(Se,[["render",Ye]]);const k=s=>(ee("data-v-4927a192"),s=s(),te(),s),He={class:"relative flex h-screen overflow-hidden"},Ue=k(()=>e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),Ve=k(()=>e("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[e("source",{src:ve,type:"video/mp4"}),r(" Your browser does not support the video tag. ")],-1)),Fe={class:"animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},Ae={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},Ge={class:"flex justify-center"},We={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp animate__slow",href:"#"},Ke={id:"project-latest"},Xe={class:"grid grid-cols-4 gap-4 my-10"},qe={id:"latest_project_header",class:"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"},Je={class:"[&>div>div>ul]:justify-center [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black [&>div>div>ul>li>div]:font-bold"},Qe={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project mx-5"},Ze=["src"],et={class:"flex flex-col p-2"},tt={class:"flex-initial"},ot={class:"text-dark-brown flex"},st={key:0},at=["innerHTML"],lt={class:"flex justify-center my-4 mx-2"},nt=["onClick"],it={class:"text-center"},rt={class:"flex flex-wrap m-2"},dt={class:"whitespace-nowrap text-gray-500"},ct={class:"whitespace-nowrap text-gray-500"},ut={class:"whitespace-nowrap text-gray-500"},mt={class:"relative about-section mt-12",id:"aboutSection"},_t={class:"flex py-5"},ft={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 mx-auto container px-5"},ht={class:"right"},gt=["innerHTML"],pt={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},bt={class:"grid grid-cols-2 justify-center"},vt=k(()=>e("img",{src:we,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),wt={class:"my-auto text-center"},yt={class:"text-xl text-dark-brown"},xt={class:"block text-xl"},kt={class:"grid grid-cols-2 justify-center"},$t=k(()=>e("img",{src:ye,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),Lt={class:"my-auto text-center"},St={class:"text-xl text-dark-brown"},Mt={class:"block text-xl"},jt={class:"grid grid-cols-2 justify-center"},It=k(()=>e("img",{src:xe,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),Pt={class:"my-auto text-center"},Ct={class:"text-xl text-dark-brown"},Nt={class:"block text-xl"},Rt={class:"grid grid-cols-2 justify-center"},Bt=k(()=>e("img",{src:ke,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),Tt={class:"my-auto text-center"},zt={class:"text-xl text-dark-brown"},Et={class:"block text-xl"},Ot={class:"grid grid-cols-2 justify-center"},Yt=k(()=>e("img",{src:$e,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),Dt={class:"my-auto text-center"},Ht={class:"text-xl text-dark-brown"},Ut={class:"block text-xl"},Vt=k(()=>e("img",{class:"w-[91%] left",src:Le,alt:"About Ladun"},null,-1)),Ft={class:"rounded-2xl border-2 border-yellow-300 mt-20 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5",id:"form"},At={__name:"Home",setup(s){const n=c(!1),z=c(null),E=c(null),I=c(null),_=c(null),f=c(null),g=c(null),d=c({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),w=c(""),S=c([]),p={itemsToShow:1,snapAlign:"center"},W={700:{itemsToShow:2,snapAlign:"center"},1024:{itemsToShow:4,snapAlign:"center"}},K=c([]);var O=1;const B=c([]);D(()=>{window.addEventListener("scroll",q)});function X(){C.get("/api/projects/latest").then(t=>{K.value=t.data.data}).catch(t=>console.log(t)),C.get("/api/about").then(t=>{B.value=t.data[0]}).catch(t=>console.log(t))}X();const q=()=>{let t=document.getElementById("aboutSection"),$=document.getElementById("footerSection");scrollY>$.offsetTop-t.offsetTop+300&&O&&(O=0),window.pageYOffset>0?(d.value.topOfPage&&(d.value.topOfPage=!1),d.value.latestProjectsSection&&(d.value.latestProjectsSection=!1)):(d.value.topOfPage||(d.value.topOfPage=!0),d.value.latestProjectsSection||(d.value.latestProjectsSection=!0))};return D(async()=>{const t=await C.get("/api/settings");g.value=t.data.settings[0],console.log(g.value),window.addEventListener("scroll",function(){let b=document.getElementsByClassName("latest_project"),P=document.getElementById("latest_project_header"),M=this.document.getElementById("aboutLadunHeader"),y=document.getElementsByClassName("right"),x=document.getElementsByClassName("left");for(let l=0;l<y.length;l++)console.log(y[l].offsetTop),window.scrollY>=y[l].offsetTop-700&&(this.locale=="en"?y[l].classList.add("animate__animated","animate__fadeInLeft","animate__slow","animate__delay-2s"):y[l].classList.add("animate__animated","animate__fadeInRight","animate__slow","animate__delay-2s"));for(let l=0;l<x.length;l++)console.log(x[l].offsetTop),window.scrollY>=x[l].offsetTop-700&&(this.locale=="en",x[l].classList.add("animate__animated","animate__zoomIn","animate__slow","animate__delay-2s"));for(let l=0;l<b.length;l++)window.scrollY>=P.offsetTop-700&&(H.global.locale.value=="en"?b[l].classList.add("animate__animated","animate__fadeInLeft"):b[l].classList.add("animate__animated","animate__fadeInRight"));scrollY>footerSection.offsetTop-aboutSection.offsetTop+300&&(H.global.locale.value=="en"?M.classList.add("animate__animated","animate__fadeInLeft"):M.classList.add("animate__animated","animate__fadeInRight"))});const $=await C.get("/api/departments/latest/projects");S.value=$.data.data,w.value=S.value[0].title.en}),(t,$)=>{var M,y,x,l,Y;const b=L("number"),P=J("scroll-to");return m(),v(R,null,[o(oe,{class:U(["fixed z-30 w-full animate__animated animate__backInDown animate__slow",{"bg-black":!d.value.topOfPage}])},null,8,["class"]),e("header",He,[Ue,Ve,e("div",Fe,[V((m(),v("button",Ae,[r(a(t.$t("shareYourInterests")),1)])),[[P,{el:"#form",offset:-128}]])])]),e("div",Ge,[V((m(),v("a",We,[r(a(t.$t("scrollDown"))+" ",1),o(u(de),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[P,{el:"#project-latest",offset:-128}]])]),e("section",Ke,[e("div",Xe,[e("h2",qe,a(t.$t("latestProjects")),1)]),e("div",Je,[o(u(_e),{variant:"underline",modelValue:w.value,"onUpdate:modelValue":$[0]||($[0]=j=>w.value=j)},{default:i(()=>[(m(!0),v(R,null,F(S.value,j=>(m(),T(u(me),{name:j.title.en,title:j.title[t.$i18n.locale],class:""},{default:i(()=>[o(u(he),Q(p,{autoplay:2e3,"wrap-around":!0,breakpoints:W}),{addons:i(()=>[o(u(ge)),o(u(pe))]),default:i(()=>[(m(!0),v(R,null,F(j.latest,h=>(m(),T(u(be),{key:h.id},{default:i(()=>[e("div",Qe,[h.attachment?(m(),v("img",{key:0,class:"w-full rounded-lg",src:h.attachment,alt:"Project Photo"},null,8,Ze)):N("",!0),e("div",et,[e("h3",tt,a(h.title[t.$i18n.locale]),1),e("div",ot,[o(u(fe),{class:"h-4 w-4"}),h.location?(m(),v("small",st,a(h.location.address[t.$i18n.locale]),1)):N("",!0)])]),e("p",{class:"px-2 text-grey text-sm text-start",innerHTML:h.text[t.$i18n.locale].slice(0,200)+" ..."},null,8,at),e("div",lt,[e("button",{class:"bg-dark-brown text-white text-center rounded-2xl w-36 h-8",onClick:Z(Gt=>t.$router.push({name:"Project",params:{id:h.id}}),["prevent"])},[e("small",it,[o(u(ce),{class:"inline-block h-4 w-4 justify-end"}),r(" "+a(t.$t("exploreProject")),1)])],8,nt)]),e("div",rt,[e("div",null,[o(u(ue),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",dt,a(t.$t("residentialLandPlots")),1)]),e("div",null,[o(u(A),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",ct,a(h.Land_area)+" "+a(t.$t("areaUnit")),1)]),e("div",null,[o(u(A),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",ut,a(h.units_number)+" "+a(t.$t("unit")),1)])])])]),_:2},1024))),128))]),_:2},1040)]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),e("section",mt,[e("div",_t,[e("h2",{class:U([{"animate__animated animate__fadeInLeft animate__slow":!d.value.aboutLadunSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3"]),id:"aboutLadunHeader"},a(t.$t("aboutLadun")),3)]),e("div",ft,[e("div",ht,[B.value.content?(m(),v("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xl mb-7",innerHTML:B.value.content[t.$i18n.locale]},null,8,gt)):N("",!0),e("div",pt,[e("div",bt,[vt,e("div",wt,[e("strong",yt,[r("+ "),o(b,{ref_key:"number1",ref:z,from:0,to:(M=g.value)==null?void 0:M.experience,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",xt,a(t.$t("experienceYears")),1)])]),e("div",kt,[$t,e("div",Lt,[e("strong",St,[r("+ "),o(b,{ref_key:"number2",ref:E,from:0,to:(y=g.value)==null?void 0:y.project,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Mt,a(t.$t("projectsInvestment")),1)])]),e("div",jt,[It,e("div",Pt,[e("strong",Ct,[r("+ "),o(b,{ref_key:"number3",ref:I,from:0,to:(x=g.value)==null?void 0:x.companies,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Nt,a(t.$t("affiliate")),1)])]),e("div",Rt,[Bt,e("div",Tt,[e("strong",zt,[r("+ "),o(b,{ref_key:"number4",ref:_,from:0,to:(l=g.value)==null?void 0:l.developed_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Et,a(t.$t("projectsUnits")),1)])]),e("div",Ot,[Yt,e("div",Dt,[e("strong",Ht,[r("+ "),o(b,{ref_key:"number5",ref:f,from:0,to:(Y=g.value)==null?void 0:Y.developing_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Ut,a(t.$t("unitsUnderProcess")),1)])])])]),Vt]),e("div",Ft,a(t.$t("shareYourInterestWithUs")),1)]),o(De,{formShow:n.value},null,8,["formShow"]),o(se,{id:"footerSection"})],64)}}},Zt=G(At,[["__scopeId","data-v-4927a192"]]);export{Zt as default};
