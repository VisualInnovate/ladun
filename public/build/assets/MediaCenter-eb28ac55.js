import{C as f}from"./CardLink-16e3ac8d.js";import"./flowbite-vue-d93ebb4a.js";import{N as y}from"./Navbar-94c31dc9.js";import{L as v}from"./LightFooter-09da33a1.js";import{L as w,g,h as C,i as M,r as $,o as l,c as u,a as c,b as t,d as m,t as r,w as o,F as p,m as L,f as N,e as D}from"./main-9441f950.js";const B={class:"media-center dark:bg-black py-28 bg-background-section dark:bg-black dark:text-[white]",style:{color:"rgb(255, 255, 255)",height:"300px","background-image":"url('http://[::1]:5173/resources/js/new.jpg')","background-size":"cover","background-position":"center","text-align":"center"}},F={style:{color:"rgb(255, 255, 255)","padding-top":"20px","font-size":"16px"}},V={href:"",class:"dark:text-[white]"},j=t("div",{class:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8"},[t("template",null,[t("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-t-lg md:rounded-t-none rtl:pl-2 ltr:pr-2",src:"",alt:""})])],-1),z={class:"media-center py-28 bg-background-section dark:text-white dark:bg-black"},A={class:"container mx-auto"},H={class:"text-4xl text-center mb-10 dark:text-[white]"},J={class:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8"},T={class:"text-xl"},R=["src"],S=["innerHTML"],E={style:{opacity:"80% !important"},class:"rtl:text-end ltr:text-end"},O=["onClick"],U={class:"dark:text-white dark:bg-black"},Q={__name:"MediaCenter",setup(Y){const _=w(),n=g({});new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,g("");const h=e=>{const i=["January","February","March","April","May","June","July","August","September","October","November","December"],s=new Date(e),a=s.getFullYear(),d=i[s.getMonth()],x=("0"+s.getDate()).slice(-2);return`${d} ${x}, ${a}`},b=e=>{_.push({name:"Media Center Details",params:{id:e}})},k=e=>e.media[0].collection_name=="attachments"?e.media[0].original_url:e.media[1].original_url;return C(()=>{M.get("/api/media-center").then(e=>{n.value=e.data.mediaCenter})}),(e,i)=>{const s=$("router-link");return l(),u(p,null,[c(y,{class:"bg-black fixed z-50 w-full"}),t("section",B,[m(r(e.$t("mediaCenter"))+" ",1),t("div",F,[c(s,{to:{name:"Home"}},{default:o(()=>[t("a",V,r(e.$t("companyAds")),1),m(" / "+r(e.$t("main")),1)]),_:1})]),j]),t("section",z,[t("div",A,[t("h1",H,r(e.$t("mediaCenter")),1),t("div",J,[n.value.length?(l(!0),u(p,{key:0},L(n.value,a=>(l(),D(f,{key:a.id,class:"dark:text-white dark:bg-black"},{date:o(()=>[t("p",T,[t("img",{class:"rounded-t-lg",src:k(a),alt:"",style:{width:"250px",height:"210px"}},null,8,R)])]),text:o(()=>[t("div",{innerHTML:a.content[e.$i18n.locale].slice(0,155)+"...",class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},null,8,S),t("div",E,[t("button",{onClick:d=>b(a.id),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown text-cecter"},r(e.$t("readMore")),9,O)])]),head:o(()=>[t("p",U,r(h(a.created_at)),1)]),_:2},1024))),128)):N("",!0)])])]),c(v)],64)}}};export{Q as default};