import{_ as U,r as k,o as _,c as p,a as s,w as i,b as e,t as a,d as r,e as B,f as M,F as I,g,h as z,i as E,j as R,k as A,n as O,l as Y,u as m,m as D,p as W,q as K,s as X,v as q}from"./main-205a31b4.js";import{N as J}from"./Navbar-3d9be34f.js";import{L as Q}from"./LightFooter-8d173254.js";import{K as Z,N as ee,X as te,Y as se,u as oe,C as ae,M as le,B as ne,a as H,L as ie,b as re}from"./flowbite-vue-0d9003ab.js";import{M as de}from"./index-cf99f86e.js";import{C as ce,N as ue,P as me,S as _e}from"./carousel.es-3b2971e9.js";const fe="/build/assets/28mb_home_page_video-bf923b36.mp4",he="/build/assets/experience_years-5395469c.svg",ge="/build/assets/projects_revenue-8cc57d0f.svg",be="/build/assets/affiliate-37c9af95.svg",pe="/build/assets/projects_units-6bcb97c6.svg",we="/build/assets/projects_areas-820dff43.svg",ve="/build/assets/about_ladun_image-ed15c0a1.png",ye={data(){return{isShowModal:!1,data:""}},props:["formShow"],components:{Modal:Z,Dropdown:ee,ListGroupItem:te,ListGroup:se,Input:oe},methods:{closeModal(){this.isShowModal=!1},showModal(o){this.isShowModal=!0,console.log(this.data),this.data=o}},mounted(){console.log(this.formShow)},watch:{formShow:{immediate:!0,handler(o,l){this.isShowModal=o}}}},xe={class:"w-full inline-flex justify-between px-4 text-white"},ke=e("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),$e={class:"mx-11 font-bold"},Le={class:"mx-11 font-bold"},Se={class:"flex items-center text-lg"},Me={class:"",action:"https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"},Ie=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),je=e("input",{type:"hidden",name:"retURL",value:"http://google.com"},null,-1),Pe=["value"],Ce=e("input",{type:"hidden",name:"00N3G00000FV0J9",value:""},null,-1),Ne=e("input",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",name:"submit"},null,-1),Re=e("div",{class:"flex justify-between"},null,-1);function Be(o,l,j,P,$,c){const f=k("list-group-item"),u=k("list-group"),L=k("dropdown"),w=k("Input"),C=k("Modal",!0);return _(),p(I,null,[s(L,{class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:i(()=>[e("span",xe,[e("span",null,a(o.$t("choose")),1),ke])]),default:i(()=>[s(u,{class:"w-full"},{default:i(()=>[e("div",$e,a(o.$t("ownership")),1),s(f,{class:"mx-24",onClick:l[0]||(l[0]=b=>c.showModal("Buy-Eastern Region"))},{default:i(()=>[r(a(o.$t("easternRegion")),1)]),_:1}),s(f,{class:"mx-24",onClick:l[1]||(l[1]=b=>c.showModal("Buy-Middle Region"))},{default:i(()=>[r(a(o.$t("middleRegion")),1)]),_:1}),s(f,{class:"mx-24",onClick:l[2]||(l[2]=b=>c.showModal("Buy-Western Region"))},{default:i(()=>[r(a(o.$t("westernRegion")),1)]),_:1}),s(f,{class:"mx-24",onClick:l[3]||(l[3]=b=>c.showModal("Buy-Northern Region"))},{default:i(()=>[r(a(o.$t("northernRegion")),1)]),_:1}),e("div",Le,a(o.$t("rent")),1),s(f,{class:"mx-24",onClick:l[4]||(l[4]=b=>c.showModal("Buy-Eastern Region"))},{default:i(()=>[r(a(o.$t("easternRegion")),1)]),_:1}),s(f,{class:"mx-24",onClick:l[5]||(l[5]=b=>c.showModal("Rent-Middle Region"))},{default:i(()=>[r(a(o.$t("middleRegion")),1)]),_:1}),s(f,{class:"mx-24",onClick:l[6]||(l[6]=b=>c.showModal("Rent-Western Region"))},{default:i(()=>[r(a(o.$t("westernRegion")),1)]),_:1}),s(f,{class:"mx-24",onClick:l[7]||(l[7]=b=>c.showModal("Rent-Northern Region"))},{default:i(()=>[r(a(o.$t("northernRegion")),1)]),_:1})]),_:1})]),_:1}),$.isShowModal?(_(),B(C,{key:0,size:o.size,onClose:c.closeModal},{header:i(()=>[e("div",Se,a(o.$t("shareYourInterests")),1)]),body:i(()=>[e("form",Me,[Ie,je,e("input",{type:"hidden",name:"00N3G00000IEQrA",value:$.data},null,8,Pe),Ce,s(w,{size:"md",maxlength:"40",name:"first_name",placeholder:o.$t("FirstName"),label:o.$t("FirstName")},null,8,["placeholder","label"]),s(w,{size:"md",maxlength:"80",name:"last_name",placeholder:o.$t("LastName"),label:o.$t("LastName")},null,8,["placeholder","label"]),s(w,{size:"md",maxlength:"40",name:"mobile",placeholder:o.$t("PhoneNumber"),label:o.$t("PhoneNumber")},null,8,["placeholder","label"]),s(w,{size:"md",maxlength:"80",name:"email",placeholder:o.$t("Email"),label:o.$t("Email")},null,8,["placeholder","label"]),Ne])]),footer:i(()=>[Re]),_:1},8,["size","onClose"])):M("",!0)],64)}const Te=U(ye,[["render",Be]]);const y=o=>(X("data-v-1ea5cafc"),o=o(),q(),o),ze={class:"relative flex h-screen overflow-hidden"},Ee=y(()=>e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),Oe=y(()=>e("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[e("source",{src:fe,type:"video/mp4"}),r(" Your browser does not support the video tag. ")],-1)),Ye={class:"animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},De={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},He={class:"flex justify-center"},Ue={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp animate__slow",href:"#"},Ve={id:"project-latest"},Fe={class:"grid grid-cols-4 gap-4 my-10"},Ge={id:"latest_project_header",class:"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"},Ae={class:"[&>div>div>ul]:justify-center [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black [&>div>div>ul>li>div]:font-bold"},We={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project mx-5"},Ke=["src"],Xe={class:"flex flex-col p-2"},qe={class:"flex-initial"},Je={class:"text-dark-brown flex"},Qe={key:0},Ze=["innerHTML"],et={class:"flex justify-center my-4 mx-2"},tt=["onClick"],st={class:"text-center"},ot={class:"flex flex-wrap m-2"},at={class:"whitespace-nowrap text-gray-500"},lt={class:"whitespace-nowrap text-gray-500"},nt={class:"whitespace-nowrap text-gray-500"},it={class:"relative about-section mt-12",id:"aboutSection"},rt={class:"flex py-5"},dt={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 mx-auto container px-5"},ct={class:"right"},ut=["innerHTML"],mt={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},_t={class:"grid grid-cols-2 justify-center"},ft=y(()=>e("img",{src:he,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),ht={class:"my-auto text-center"},gt={class:"text-xl text-dark-brown"},bt={class:"block text-xl"},pt={class:"grid grid-cols-2 justify-center"},wt=y(()=>e("img",{src:ge,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),vt={class:"my-auto text-center"},yt={class:"text-xl text-dark-brown"},xt={class:"block text-xl"},kt={class:"grid grid-cols-2 justify-center"},$t=y(()=>e("img",{src:be,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),Lt={class:"my-auto text-center"},St={class:"text-xl text-dark-brown"},Mt={class:"block text-xl"},It={class:"grid grid-cols-2 justify-center"},jt=y(()=>e("img",{src:pe,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),Pt={class:"my-auto text-center"},Ct={class:"text-xl text-dark-brown"},Nt={class:"block text-xl"},Rt={class:"grid grid-cols-2 justify-center"},Bt=y(()=>e("img",{src:we,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),Tt={class:"my-auto text-center"},zt={class:"text-xl text-dark-brown"},Et={class:"block text-xl"},Ot=y(()=>e("img",{class:"w-[91%] left",src:ve,alt:"About Ladun"},null,-1)),Yt={class:"rounded-2xl border-2 border-yellow-300 mt-12 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5",id:"form"},Dt={__name:"Home",setup(o){const l=g(!1),j=g(null),P=g(null),$=g(null),c=g(null),f=g(null),u=g({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),L=g(""),w=g([]),C={itemsToShow:1,snapAlign:"center"},b={700:{itemsToShow:2,snapAlign:"center"},1024:{itemsToShow:4,snapAlign:"center"}},V=g([]);var T=1;const N=g([]);z(()=>{window.addEventListener("scroll",G)});function F(){R.get("/api/projects/latest").then(t=>{V.value=t.data.data}).catch(t=>console.log(t)),R.get("/api/about").then(t=>{N.value=t.data[0]}).catch(t=>console.log(t))}F();const G=()=>{let t=document.getElementById("aboutSection"),v=document.getElementById("footerSection");scrollY>v.offsetTop-t.offsetTop+300&&T&&(T=0,j.value.restart(),P.value.restart(),$.value.restart(),c.value.restart(),f.value.restart()),window.pageYOffset>0?(u.value.topOfPage&&(u.value.topOfPage=!1),u.value.latestProjectsSection&&(u.value.latestProjectsSection=!1)):(u.value.topOfPage||(u.value.topOfPage=!0),u.value.latestProjectsSection||(u.value.latestProjectsSection=!0))};return z(async()=>{window.addEventListener("scroll",function(){let v=document.getElementsByClassName("latest_project"),x=document.getElementById("latest_project_header"),S=this.document.getElementById("aboutLadunHeader"),h=document.getElementsByClassName("right"),d=document.getElementsByClassName("left");for(let n=0;n<h.length;n++)console.log(h[n].offsetTop),window.scrollY>=h[n].offsetTop-700&&(this.locale=="en"?h[n].classList.add("animate__animated","animate__fadeInLeft","animate__slow","animate__delay-2s"):h[n].classList.add("animate__animated","animate__fadeInRight","animate__slow","animate__delay-2s"));for(let n=0;n<d.length;n++)console.log(d[n].offsetTop),window.scrollY>=d[n].offsetTop-700&&(this.locale=="en",d[n].classList.add("animate__animated","animate__zoomIn","animate__slow","animate__delay-2s"));for(let n=0;n<v.length;n++)window.scrollY>=x.offsetTop-700&&(E.global.locale.value=="en"?v[n].classList.add("animate__animated","animate__fadeInLeft"):v[n].classList.add("animate__animated","animate__fadeInRight"));scrollY>footerSection.offsetTop-aboutSection.offsetTop+300&&(E.global.locale.value=="en"?S.classList.add("animate__animated","animate__fadeInLeft"):S.classList.add("animate__animated","animate__fadeInRight"))});const t=await R.get("/api/departments/latest/projects");w.value=t.data.data,L.value=w.value[0].title.en}),(t,v)=>{const x=k("number"),S=A("scroll-to");return _(),p(I,null,[s(J,{class:O(["fixed z-30 w-full animate__animated animate__backInDown animate__slow",{"bg-black":!u.value.topOfPage}])},null,8,["class"]),e("header",ze,[Ee,Oe,e("div",Ye,[Y((_(),p("button",De,[r(a(t.$t("shareYourInterests")),1)])),[[S,{el:"#form",offset:-128}]])])]),e("div",He,[Y((_(),p("a",Ue,[r(a(t.$t("scrollDown"))+" ",1),s(m(ae),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[S,{el:"#project-latest",offset:-128}]])]),e("section",Ve,[e("div",Fe,[e("h2",Ge,a(t.$t("latestProjects")),1)]),e("div",Ae,[s(m(re),{variant:"underline",modelValue:L.value,"onUpdate:modelValue":v[0]||(v[0]=h=>L.value=h)},{default:i(()=>[(_(!0),p(I,null,D(w.value,h=>(_(),B(m(ie),{name:h.title.en,title:h.title[t.$i18n.locale],class:""},{default:i(()=>[s(m(ce),W(C,{autoplay:2e3,"wrap-around":!0,breakpoints:b}),{addons:i(()=>[s(m(ue)),s(m(me))]),default:i(()=>[(_(!0),p(I,null,D(h.latest,d=>(_(),B(m(_e),{key:d.id},{default:i(()=>[e("div",We,[d.attachment?(_(),p("img",{key:0,class:"w-full rounded-lg",src:d.attachment,alt:"Project Photo"},null,8,Ke)):M("",!0),e("div",Xe,[e("h3",qe,a(d.title[t.$i18n.locale]),1),e("div",Je,[s(m(de),{class:"h-4 w-4"}),d.location?(_(),p("small",Qe,a(d.location.address[t.$i18n.locale]),1)):M("",!0)])]),e("p",{class:"px-2 text-grey text-sm",innerHTML:d.text[t.$i18n.locale].slice(0,200)+" ..."},null,8,Ze),e("div",et,[e("button",{class:"bg-dark-brown text-white text-center rounded-2xl w-36 h-8",onClick:K(n=>t.$router.push({name:"Project",params:{id:d.id}}),["prevent"])},[e("small",st,[s(m(le),{class:"inline-block h-4 w-4 justify-end"}),r(" "+a(t.$t("exploreProject")),1)])],8,tt)]),e("div",ot,[e("div",null,[s(m(ne),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",at,a(t.$t("residentialLandPlots")),1)]),e("div",null,[s(m(H),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",lt,a(d.Land_area)+" "+a(t.$t("areaUnit")),1)]),e("div",null,[s(m(H),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",nt,a(d.units_number)+" "+a(t.$t("unit")),1)])])])]),_:2},1024))),128))]),_:2},1040)]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),e("section",it,[e("div",rt,[e("h2",{class:O([{"animate__animated animate__fadeInLeft animate__slow":!u.value.aboutLadunSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3"]),id:"aboutLadunHeader"},a(t.$t("aboutLadun")),3)]),e("div",dt,[e("div",ct,[N.value.content?(_(),p("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xl mb-7",innerHTML:N.value.content[t.$i18n.locale]},null,8,ut)):M("",!0),e("div",mt,[e("div",_t,[ft,e("div",ht,[e("strong",gt,[r("+ "),s(x,{ref_key:"number1",ref:j,from:0,to:50,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",bt,a(t.$t("experienceYears")),1)])]),e("div",pt,[wt,e("div",vt,[e("strong",yt,[r("+ "),s(x,{ref_key:"number2",ref:P,from:0,to:15,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",xt,a(t.$t("projectsInvestment")),1)])]),e("div",kt,[$t,e("div",Lt,[e("strong",St,[r("+ "),s(x,{ref_key:"number3",ref:$,from:0,to:11,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",Mt,a(t.$t("affiliate")),1)])]),e("div",It,[jt,e("div",Pt,[e("strong",Ct,[r("+ "),s(x,{ref_key:"number4",ref:c,from:0,to:250,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",Nt,a(t.$t("projectsUnits")),1)])]),e("div",Rt,[Bt,e("div",Tt,[e("strong",zt,[r("+ "),s(x,{ref_key:"number5",ref:f,from:0,to:19673,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",Et,a(t.$t("unitsUnderProcess")),1)])])])]),Ot]),e("div",Yt,a(t.$t("shareYourInterestWithUs")),1)]),s(Te,{formShow:l.value},null,8,["formShow"]),s(Q,{id:"footerSection"})],64)}}},Wt=U(Dt,[["__scopeId","data-v-1ea5cafc"]]);export{Wt as default};
