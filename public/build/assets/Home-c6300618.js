import{_ as U,r as S,o as m,c as k,a as o,w as n,b as e,t as a,d as r,e as N,f as T,F as R,g as c,h as D,i as P,j as O,k as J,n as Y,l as G,u as _,m as A,p as Q,q as Z,s as ee,v as te}from"./main-83a7b602.js";import{N as se}from"./Navbar-2092d996.js";import{L as oe}from"./LightFooter-cae2df14.js";import{K as ae,N as le,X as ne,Y as ie,u as re,C as de,B as ce,a as H,M as ue,L as _e,b as me}from"./flowbite-vue-dec68c0a.js";import{M as fe}from"./index-78148833.js";import{C as he,N as ge,S as pe}from"./carousel.es-c47321ec.js";const be="/build/assets/28mb_home_page_video-bf923b36.mp4",we="/build/assets/experience_years-5395469c.svg",ve="/build/assets/projects_revenue-8cc57d0f.svg",xe="/build/assets/affiliate-37c9af95.svg",ye="/build/assets/projects_units-6bcb97c6.svg",ke="/build/assets/projects_areas-820dff43.svg",$e="/build/assets/about_ladun_image-ed15c0a1.png",Se={data(){return{isShowModal:!1,data:""}},props:["formShow"],components:{Modal:ae,Dropdown:le,ListGroupItem:ne,ListGroup:ie,Input:re},methods:{closeModal(){this.isShowModal=!1},showModal(s){this.isShowModal=!0,console.log(this.data),this.data=s}},mounted(){console.log(this.formShow)},watch:{formShow:{immediate:!0,handler(s,i){this.isShowModal=s}}}},Le={class:"w-full inline-flex justify-between px-4 text-white"},je=e("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),Me={class:"mx-11 font-bold"},Ie={class:"mx-11 font-bold"},Ce={class:"flex items-center space-x-4 text-lg"},Pe={class:"space-y-4",action:"https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"},Re=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),Be=e("input",{type:"hidden",name:"retURL",value:"http://google.com"},null,-1),Ne=["value"],Te=e("input",{type:"hidden",name:"00N3G00000FV0J9",value:""},null,-1),Fe=["value"],ze=e("div",{class:"flex justify-between"},null,-1);function Ee(s,i,F,z,I,u){const f=S("list-group-item"),g=S("list-group"),d=S("dropdown"),w=S("Input"),L=S("Modal",!0);return m(),k(R,null,[o(d,{class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:n(()=>[e("span",Le,[e("span",null,a(s.$t("choose")),1),je])]),default:n(()=>[o(g,{class:"w-full"},{default:n(()=>[e("div",Me,a(s.$t("ownership")),1),o(f,{class:"mx-24",onClick:i[0]||(i[0]=p=>u.showModal("Buy-Eastern Region"))},{default:n(()=>[r(a(s.$t("easternRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:i[1]||(i[1]=p=>u.showModal("Buy-Middle Region"))},{default:n(()=>[r(a(s.$t("middleRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:i[2]||(i[2]=p=>u.showModal("Buy-Western Region"))},{default:n(()=>[r(a(s.$t("westernRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:i[3]||(i[3]=p=>u.showModal("Buy-Northern Region"))},{default:n(()=>[r(a(s.$t("northernRegion")),1)]),_:1}),e("div",Ie,a(s.$t("rent")),1),o(f,{class:"mx-24",onClick:i[4]||(i[4]=p=>u.showModal("Buy-Eastern Region"))},{default:n(()=>[r(a(s.$t("easternRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:i[5]||(i[5]=p=>u.showModal("Rent-Middle Region"))},{default:n(()=>[r(a(s.$t("middleRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:i[6]||(i[6]=p=>u.showModal("Rent-Western Region"))},{default:n(()=>[r(a(s.$t("westernRegion")),1)]),_:1}),o(f,{class:"mx-24",onClick:i[7]||(i[7]=p=>u.showModal("Rent-Northern Region"))},{default:n(()=>[r(a(s.$t("northernRegion")),1)]),_:1})]),_:1})]),_:1}),I.isShowModal?(m(),N(L,{key:0,size:s.size,onClose:u.closeModal},{header:n(()=>[e("div",Ce,a(s.$t("shareYourInterests")),1)]),body:n(()=>[e("form",Pe,[Re,Be,e("input",{type:"hidden",name:"00N3G00000IEQrA",value:I.data},null,8,Ne),Te,o(w,{size:"md",maxlength:"40",name:"first_name",placeholder:s.$t("FirstName"),label:s.$t("FirstName")},null,8,["placeholder","label"]),o(w,{size:"md",maxlength:"80",name:"last_name",placeholder:s.$t("LastName"),label:s.$t("LastName")},null,8,["placeholder","label"]),o(w,{size:"md",maxlength:"40",name:"mobile",placeholder:s.$t("PhoneNumber"),label:s.$t("PhoneNumber")},null,8,["placeholder","label"]),o(w,{size:"md",maxlength:"80",name:"email",placeholder:s.$t("Email"),label:s.$t("Email")},null,8,["placeholder","label"]),e("input",{type:"submit",class:"text-white bg-[#AF9744] hover:bg-[#764522] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",value:s.$t("submit")},null,8,Fe)])]),footer:n(()=>[ze]),_:1},8,["size","onClose"])):T("",!0)],64)}const Ve=U(Se,[["render",Ee]]);const h=s=>(ee("data-v-f46144ae"),s=s(),te(),s),De={class:"relative flex h-screen overflow-hidden"},Oe=h(()=>e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),Ye=h(()=>e("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[e("source",{src:be,type:"video/mp4"}),r(" Your browser does not support the video tag. ")],-1)),Ge={class:"animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},Ae={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},He={class:"flex justify-center"},Ue={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp animate__slow",href:"#"},We={id:"project-latest  bg-[white]"},Xe={class:"grid grid-cols-4 gap-4 my-10"},Ke={id:"latest_project_header",class:"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"},qe={class:"bg-[white] [&>div>div>ul]:justify-center [&>div>div]:border-0 [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black [&>div>div>ul>li>div]:font-bold"},Je={class:"w-full lg:w-[80%] h-full rounded-xl bg-[#FFFDF6] latest_project mx-5"},Qe=["src"],Ze={class:"flex text-right p-2"},et={class:"flex w-full flex-row-reverse"},tt={class:"text-dark-brown flex"},st={class:"text-right my-auto"},ot={class:"text-2xl font-bold"},at={class:""},lt=["innerHTML"],nt={class:"flex justify-between ltr:text-start rtl:text-end w-full"},it={class:""},rt={class:"text-gray-500 px-2"},dt={class:"flex"},ct={class:"whitespace-nowrap text-gray-500 px-2"},ut={class:"whitespace-nowrap text-gray-500 px-2"},_t={class:"ltr:text-end rtl:text-start w-full my-4"},mt=["onClick"],ft={class:""},ht=h(()=>e("svg",{fill:"#AF9744",height:"34px",width:"34px",version:"1.1",id:"XMLID_287_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24","xml:space":"preserve",stroke:"#AF9744"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("g",{id:"next"},[e("g",null,[e("polygon",{points:"6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "})])])])],-1)),gt=h(()=>e("svg",{fill:"#AF9744",height:"34px",width:"34px",version:"1.1",id:"XMLID_54_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24","xml:space":"preserve",stroke:"#AF9744"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("g",{id:"previous"},[e("g",null,[e("polygon",{points:"17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "})])])])],-1)),pt={class:"bg-[white] relative about-section mt-12",id:"aboutSection"},bt={class:"flex py-5"},wt={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 mx-auto container px-5"},vt={class:"right"},xt=["innerHTML"],yt={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},kt={class:"grid grid-cols-2 justify-center"},$t=h(()=>e("img",{src:we,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),St={class:"my-auto text-center"},Lt={class:"text-4xl text-dark-brown"},jt={class:"block text-sm"},Mt={class:"grid grid-cols-2 justify-center"},It=h(()=>e("img",{src:ve,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),Ct={class:"my-auto text-center"},Pt={class:"text-4xl text-dark-brown"},Rt={class:"block text-sm"},Bt={class:"grid grid-cols-2 justify-center"},Nt=h(()=>e("img",{src:xe,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),Tt={class:"my-auto text-center"},Ft={class:"text-4xl text-dark-brown"},zt={class:"block text-sm"},Et={class:"grid grid-cols-2 justify-center"},Vt=h(()=>e("img",{src:ye,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),Dt={class:"my-auto text-center"},Ot={class:"text-4xl text-dark-brown"},Yt={class:"block text-sm"},Gt={class:"grid grid-cols-2 justify-center"},At=h(()=>e("img",{src:ke,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),Ht={class:"my-auto text-center"},Ut={class:"text-4xl truncate text-dark-brown"},Wt={class:"block text-sm"},Xt=h(()=>e("img",{class:"w-[91%] left",src:$e,alt:"About Ladun"},null,-1)),Kt={class:"rounded-2xl border-2 border-yellow-300 mt-20 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5",id:"form"},qt={__name:"Home",setup(s){const i=c(!1),F=c(null),z=c(null),I=c(null),u=c(null),f=c(null),g=c(null),d=c({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),w=c(""),L=c([]),p={itemsToShow:1,snapAlign:"center"},W={700:{itemsToShow:2,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"center"}},X=c([]);var E=1;const B=c([]);D(()=>{window.addEventListener("scroll",q)});function K(){P.get("/api/projects/latest").then(t=>{console.log(t),X.value=t.data.data}).catch(t=>console.log(t)),P.get("/api/about").then(t=>{B.value=t.data[0]}).catch(t=>console.log(t))}K();const q=()=>{let t=document.getElementById("aboutSection"),$=document.getElementById("footerSection");scrollY>$.offsetTop-t.offsetTop+300&&E&&(E=0),window.pageYOffset>0?(d.value.topOfPage&&(d.value.topOfPage=!1),d.value.latestProjectsSection&&(d.value.latestProjectsSection=!1)):(d.value.topOfPage||(d.value.topOfPage=!0),d.value.latestProjectsSection||(d.value.latestProjectsSection=!0))};return D(async()=>{const t=await P.get("/api/settings");g.value=t.data.settings[0],console.log(g.value),window.addEventListener("scroll",function(){let b=document.getElementsByClassName("latest_project"),C=document.getElementById("latest_project_header"),j=this.document.getElementById("aboutLadunHeader"),v=document.getElementsByClassName("right"),x=document.getElementsByClassName("left");for(let l=0;l<v.length;l++)console.log(v[l].offsetTop),window.scrollY>=v[l].offsetTop-700&&(this.locale=="en"?v[l].classList.add("animate__animated","animate__fadeInLeft","animate__slow","animate__delay-2s"):v[l].classList.add("animate__animated","animate__fadeInRight","animate__slow","animate__delay-2s"));for(let l=0;l<x.length;l++)console.log(x[l].offsetTop),window.scrollY>=x[l].offsetTop-700&&(this.locale=="en",x[l].classList.add("animate__animated","animate__zoomIn","animate__slow","animate__delay-2s"));for(let l=0;l<b.length;l++)window.scrollY>=C.offsetTop-700&&(O.global.locale.value=="en"?b[l].classList.add("animate__animated","animate__fadeInLeft"):b[l].classList.add("animate__animated","animate__fadeInRight"));scrollY>footerSection.offsetTop-aboutSection.offsetTop+300&&(O.global.locale.value=="en"?j.classList.add("animate__animated","animate__fadeInLeft"):j.classList.add("animate__animated","animate__fadeInRight"))});const $=await P.get("/api/departments/latest/projects");L.value=$.data.data,w.value=L.value[0].title.en}),(t,$)=>{var j,v,x,l,V;const b=S("number"),C=J("scroll-to");return m(),k(R,null,[o(se,{class:Y(["fixed z-30 w-full animate__animated animate__backInDown animate__slow",{"bg-black":!d.value.topOfPage}])},null,8,["class"]),e("header",De,[Oe,Ye,e("div",Ge,[G((m(),k("button",Ae,[r(a(t.$t("shareYourInterests")),1)])),[[C,{el:"#form",offset:-128}]])])]),e("div",He,[G((m(),k("a",Ue,[r(a(t.$t("scrollDown"))+" ",1),o(_(de),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[C,{el:"#project-latest",offset:-128}]])]),e("section",We,[e("div",Xe,[e("h2",Ke,a(t.$t("latestProjects")),1)]),e("div",qe,[o(_(me),{variant:"underline",modelValue:w.value,"onUpdate:modelValue":$[0]||($[0]=M=>w.value=M)},{default:n(()=>[(m(!0),k(R,null,A(L.value,M=>(m(),N(_(_e),{name:M.title.en,title:M.title[t.$i18n.locale],class:"my-2"},{default:n(()=>[o(_(he),Q(p,{autoplay:!1,"wrap-around":!0,breakpoints:W}),{addons:n(()=>[o(_(ge),null,{next:n(()=>[ht]),prev:n(()=>[gt]),_:1})]),default:n(()=>[(m(!0),k(R,null,A(M.latest,y=>(m(),N(_(pe),{key:y.id,class:""},{default:n(()=>[e("div",Je,[y.attachment?(m(),k("img",{key:0,style:{border:"1px solid #d9d5d5",height:"80%px"},class:"w-full rounded-xl",src:y.attachment,alt:"Project Photo"},null,8,Qe)):T("",!0),e("div",Ze,[e("div",et,[e("div",tt,[e("small",st,a(),1),o(_(fe),{class:"h-8 w-8"})]),e("h3",ot,a(y.title[t.$i18n.locale]),1)])]),e("div",at,[e("p",{class:"p-2 h-32 text-grey text-sm ltr:text-start rtl:text-end",innerHTML:y.text[t.$i18n.locale].slice(0,200)},null,8,lt),e("div",nt,[e("div",it,[e("small",rt,a(t.$t("residentialLandPlots")),1),o(_(ce),{class:"inline-block h-6 w-6 text-light-brown"})]),e("div",dt,[e("small",ct,a(y.Land_area)+" "+a(t.$t("areaUnit")),1),o(_(H),{class:"inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"})]),e("div",null,[e("small",ut,a(y.units_number)+" "+a(t.$t("unit")),1),o(_(H),{class:"inline-block h-6 w-6 ltr:mr-2 rtl:ml-2 text-light-brown"})])]),e("div",_t,[e("button",{class:"bg-dark-brown text-white mx-4 rounded-2xl w-36 h-8",onClick:Z(Jt=>t.$router.push({name:"Project",params:{id:y.id}}),["prevent"])},[e("small",ft,[o(_(ue),{class:"inline-block h-6 w-6"}),r(" "+a(t.$t("exploreProject")),1)])],8,mt)])])])]),_:2},1024))),128))]),_:2},1040)]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),e("section",pt,[e("div",bt,[e("h2",{class:Y([{"animate__animated animate__fadeInLeft animate__slow":!d.value.aboutLadunSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 font-bold text-3xl"]),id:"aboutLadunHeader"},a(t.$t("aboutLadun")),3)]),e("div",wt,[e("div",vt,[B.value.content?(m(),k("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xl mb-7",innerHTML:B.value.content[t.$i18n.locale]},null,8,xt)):T("",!0),e("div",yt,[e("div",kt,[$t,e("div",St,[e("strong",Lt,[r("+ "),o(b,{ref_key:"number1",ref:F,from:0,to:(j=g.value)==null?void 0:j.experience,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",jt,a(t.$t("experienceYears")),1)])]),e("div",Mt,[It,e("div",Ct,[e("strong",Pt,[r("+ "),o(b,{ref_key:"number2",ref:z,from:0,to:(v=g.value)==null?void 0:v.project,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Rt,a(t.$t("projectsInvestment")),1)])]),e("div",Bt,[Nt,e("div",Tt,[e("strong",Ft,[r("+ "),o(b,{ref_key:"number3",ref:I,from:0,to:(x=g.value)==null?void 0:x.companies,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",zt,a(t.$t("affiliate")),1)])]),e("div",Et,[Vt,e("div",Dt,[e("strong",Ot,[r("+ "),o(b,{ref_key:"number4",ref:u,from:0,to:(l=g.value)==null?void 0:l.developed_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Yt,a(t.$t("projectsUnits")),1)])]),e("div",Gt,[At,e("div",Ht,[e("strong",Ut,[r("+ "),o(b,{ref_key:"number5",ref:f,from:0,to:(V=g.value)==null?void 0:V.developing_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Wt,a(t.$t("unitsUnderProcess")),1)])])])]),Xt]),e("div",Kt,a(t.$t("shareYourInterestWithUs")),1)]),o(Ve,{formShow:i.value},null,8,["formShow"]),o(oe,{id:"footerSection"})],64)}}},as=U(qt,[["__scopeId","data-v-f46144ae"]]);export{as as default};