import"./flowbite-vue-ec9fe421.js";import{N as v}from"./Navbar-102b3153.js";import{I as C}from"./ImgBanner-3381321e.js";import{L as M}from"./LightFooter-d65dd5e1.js";import{L as $,g as i,h as L,i as u,o as l,c as d,a as g,b as a,w as h,t as s,F as m,m as N,f as B,d as D}from"./main-5baca8b9.js";const F={class:"pt-26 dark:text-white dark:bg-black"},S=["src"],T={class:"media-center py-28 bg-background-section dark:bg-black"},V={class:"container mx-auto"},J={class:"text-4xl text-center mb-10 dark:text-[white]"},z={class:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8"},A=["src"],E={class:"p-1 px-3"},H={class:"mb-2 font-normal text-gray-700 dark:text-gray-400"},I=["innerHTML"],R=["onClick"],G={__name:"MediaCenter",setup(W){const b=$(),o=i({}),n=i("");new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,i("");const _=e=>String(e).split(/\s+/).slice(0,15).join(" "),p=e=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date(e),c=t.getFullYear(),w=r[t.getMonth()],y=("0"+t.getDate()).slice(-2);return`${w} ${y}, ${c}`},f=e=>{b.push({name:"Media Center Details",params:{id:e}})},k=e=>{var r,t;return e.media[0].collection_name=="attachments"?(r=e.media[0])==null?void 0:r.original_url:(t=e.media[1])==null?void 0:t.original_url},x=()=>{u.get("/api/banners-pages").then(e=>{n.value=e.data.pages[3].media[0].original_url,console.log(n.value)}).then(e=>{n.value=e}).catch(e=>{console.error("Error fetching banner:",e)})};return L(()=>{u.get("/api/media-center").then(e=>{o.value=e.data.mediaCenter}),x()}),(e,r)=>(l(),d(m,null,[g(v,{class:"bg-black fixed z-50 w-full"}),a("div",F,[g(C,null,{text:h(()=>[D(s(e.$t("mediaCenter")),1)]),default:h(()=>[a("img",{class:"w-full",style:{height:"300px"},src:n.value},null,8,S)]),_:1})]),a("section",T,[a("div",V,[a("h1",J,s(e.$t("mediaCenter")),1),a("div",z,[o.value.length?(l(!0),d(m,{key:0},N(o.value,t=>(l(),d("div",{key:t.id,class:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},[a("img",{class:"rounded-t-lg",style:{width:"100%",height:"200px"},src:k(t),alt:""},null,8,A),a("div",E,[a("p",H,s(p(t.created_at)),1),a("p",{innerHTML:_(t==null?void 0:t.title[e.$i18n.locale]),style:{"min-height":"90px","font-size":"15px"},class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},null,8,I)]),a("div",null,[a("p",{onClick:c=>f(t.id),class:"mx-4 cursor-pointer py-2 my-2 w-[90%] text-sm font-medium text-center text-white bg-dark-brown rounded-lg hover:bg-dark-brownfocus:ring-4 focus:outline-none focus:bg-dark-brown dark:bg-dark-brown dark:hover:bg-dark-brown dark:focus:bg-dark-brown"},s(e.$t("readMore")),9,R)])]))),128)):B("",!0)])])]),g(M)],64))}};export{G as default};
