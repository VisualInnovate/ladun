import{_ as x,U as h,P as f}from"./Navbar-cfcfe00e.js";import{_ as v}from"./DarkFooter-48c3c4c5.js";import{b as d,d as w,bw as _,o,c as a,e as i,a as t,u as g,A as u,t as r,F as p,r as y}from"./main-94c45711.js";const k="/build/assets/play-button-682e1928.png",$={class:"company-info py-28 bg-background-section pt-36"},j={class:"container mx-auto"},B={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},N={key:0,class:"img-company-info"},P={class:"d-info h-full flex flex-col justify-center"},V={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},A={key:1,class:"mb-24 text-2xl text-center md:text-start"},D={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},F={class:"flex items-center special-button text-2xl button bg-dark-brown text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-48"},U={class:"flex text-dark-brown items-center"},z=t("img",{src:k,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),C={class:"font-bold text-3xl"},E={class:"company-manager py-24 bg-background-section"},G=t("h1",{class:"text-center font-bold mb-12 text-3xl"},"Board of Directors",-1),I={class:"container mx-auto flex justify-center"},L={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20"},M={class:"max-w-sm border-2 border-gray-border-light rounded-xl p-2"},O={class:"bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7"},R={class:"flex justify-center px-4 pt-4"},S={class:"flex flex-col items-center pb-10"},q=["src","alt"],H={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white font-bold"},J={class:"text-sm text-gray-500 dark:text-gray-400 text-light-brown"},K=t("div",{class:"flex text-center mt-2"}," يحمل شهادة الماجستير في إدارة الأعمال كما لديه العديد من الخبرات المهنية التي تتجاوز 30 عاماً. تنقل خلالها في العديد من الشركات في مجال الصناعة والتطوير العقاري والاستثمار المالي. ",-1),Y={__name:"AboutPage",setup(Q){const l=d([]),e=d({}),m=d({}),b=s=>s?Object.values(s).map(n=>({src:n.original_url,alt:n.name})):[];return w(async()=>{const s=await _.get("/api/about");e.value=s.data[0],l.value=b(e.value.media),s.data[0].media.length||l.value.push({src:"/storage/brief.png",alt:"brief"}),console.log(l.value);const n=await _.get("/api/structure");m.value=n.data.structure}),(s,n)=>(o(),a(p,null,[i(x,{class:"bg-black fixed z-50 w-full"}),t("section",$,[t("div",j,[t("div",B,[l.value?(o(),a("div",N,[i(g(h),{pictures:l.value,class:"about-us-carousel h-[690px] [&>div:first-child]:h-[690px] [&>div>div>img]:h-[690px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])):u("",!0),t("div",P,[e.value.title?(o(),a("h1",V,r(e.value.title[s.$i18n.locale]),1)):u("",!0),e.value.content?(o(),a("p",A,r(e.value.content[s.$i18n.locale]),1)):u("",!0),t("div",D,[t("a",F,[i(g(f),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,r(s.$t("call_us")),1)]),t("a",U,[z,t("span",C,r(s.$t("video")),1)])])])])])]),t("section",E,[G,t("div",I,[t("div",L,[(o(!0),a(p,null,y(m.value,c=>(o(),a("div",M,[t("div",O,[t("div",R,[t("div",S,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${c.image}`,alt:`/storage/${c.image}`},null,8,q),t("h5",H,r(c.name[s.$i18n.locale]),1),t("span",J,r(c.position[s.$i18n.locale]),1),K])])])]))),256))])])]),i(v)],64))}};export{Y as default};
