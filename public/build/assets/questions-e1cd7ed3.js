import{N as _}from"./Navbar-de13b6bf.js";import{L as u}from"./LightFooter-5c165760.js";import{_ as m,b as r,d as t,e as o,f as a,n as f,g as i,F as l,l as v,t as c,a$ as w,j as k,h as b,ac as d}from"./main-6029422f.js";import"./flowbite-vue-1b89bae2.js";const x={components:{LightFooter:u,Navbar:_},data(){return{isOpen:"",qusetion:{}}},props:{title:{type:String,required:!0}},methods:{toggleAccordion(e){this.isOpen==e?this.isOpen="":this.isOpen=e,console.log(this.isOpen)}},computed:{locale(){return this.$i18n.locale}},beforeMount(){axios.get("/api/faqs").then(e=>{this.qusetion=e.data.faqs,console.log(e)}).catch(e=>console.log(e))}},y={style:{"min-height":"46vh"},class:"cont w-[90%] lg:w-[80%] mx-auto py-[2%]"},C={style:{"border-bottom":".5px solid rgb(109, 105, 105)"},class:"rounded-md"},L=["onClick"],V={style:{"text-align":"justify"},class:"text-black"},S={key:0},N=d('<svg width="24px" height="24px" viewBox="0 0 1024.00 1024.00" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="51.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.928 387.16c7.24-7.991 17.58-7.898 24.782 0.333l270.568 309.222c7.759 8.867 21.237 9.765 30.103 2.007 8.867-7.759 9.766-21.237 2.007-30.103L566.82 359.397c-24-27.429-64.127-27.792-88.507-0.89L197.526 668.342c-7.912 8.73-7.249 22.221 1.482 30.133 8.73 7.912 22.221 7.249 30.133-1.482L509.928 387.16z" fill=""></path></g></svg>',1),F=[N],O={key:1},B=d('<svg width="24px" height="24px" viewBox="0 0 1024.00 1024.00" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="51.2" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.928 387.16c7.24-7.991 17.58-7.898 24.782 0.333l270.568 309.222c7.759 8.867 21.237 9.765 30.103 2.007 8.867-7.759 9.766-21.237 2.007-30.103L566.82 359.397c-24-27.429-64.127-27.792-88.507-0.89L197.526 668.342c-7.912 8.73-7.249 22.221 1.482 30.133 8.73 7.912 22.221 7.249 30.133-1.482L509.928 387.16z" fill=""></path></g></svg>',1),G=[B],R={key:0,class:"p-4 bg-[#F6F3EB]"};function $(e,j,q,z,n,p){const g=r("Navbar"),h=r("LightFooter");return t(),o(l,null,[a(g,{class:f(["z-50 w-full",{"bg-black":!e.top}])},null,8,["class"]),i("div",y,[(t(!0),o(l,null,v(n.qusetion,s=>(t(),o("div",{key:e.x},[i("div",C,[i("button",{onClick:A=>p.toggleAccordion(s.id),class:"flex justify-between items-center w-full px-4 py-2 bg-[#AE9643]"},[i("h2",V,c(s.question[e.$i18n.locale]),1),n.isOpen==s.id?(t(),o("span",S,F)):(t(),o("span",O,G))],8,L),n.isOpen==s.id?(t(),o("div",R,[w(e.$slots,"default",{},()=>[b(c(s.answer[e.$i18n.locale]),1)])])):k("",!0)])]))),128))]),a(h)],64)}const H=m(x,[["render",$]]);export{H as default};
