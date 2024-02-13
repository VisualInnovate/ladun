<template>
    <Navbar class="  z-50 w-full" :class="{ 'bg-black': !top}"/>
    <div style="height: 46vh; overflow: scroll;" class="cont w-[90%] lg:w-[80%]  mx-auto py-[2%]">
      <div v-for="q in qusetion" :key="x">
        <div style="border-bottom: .5px solid rgb(109, 105, 105); " class="rounded-md">
    <button
      @click="toggleAccordion(q.id)"
      class="flex justify-between items-center w-full px-4 py-2 bg-[#AE9643]"
    >
      <h2 class="text-black">{{ q.question[$i18n.locale] }}</h2>
      <span v-if="isOpen == q.id "><svg width="24px" height="24px" viewBox="0 0 1024.00 1024.00" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="51.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.928 387.16c7.24-7.991 17.58-7.898 24.782 0.333l270.568 309.222c7.759 8.867 21.237 9.765 30.103 2.007 8.867-7.759 9.766-21.237 2.007-30.103L566.82 359.397c-24-27.429-64.127-27.792-88.507-0.89L197.526 668.342c-7.912 8.73-7.249 22.221 1.482 30.133 8.73 7.912 22.221 7.249 30.133-1.482L509.928 387.16z" fill=""></path></g></svg></span>
      <span v-else><svg width="24px" height="24px" viewBox="0 0 1024.00 1024.00" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="51.2" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.928 387.16c7.24-7.991 17.58-7.898 24.782 0.333l270.568 309.222c7.759 8.867 21.237 9.765 30.103 2.007 8.867-7.759 9.766-21.237 2.007-30.103L566.82 359.397c-24-27.429-64.127-27.792-88.507-0.89L197.526 668.342c-7.912 8.73-7.249 22.221 1.482 30.133 8.73 7.912 22.221 7.249 30.133-1.482L509.928 387.16z" fill=""></path></g></svg></span>
    </button>

    <div v-if="isOpen == q.id " class="p-4 bg-[#F6F3EB]">
      <slot>{{  q.answer[$i18n.locale]}}</slot>
    </div>
        </div>
      </div>
    </div>
    <LightFooter/>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import LightFooter from "../components/LightFooter.vue";
export default {
    components: {
        LightFooter,
        Navbar

    },
    data() {
        return {
      isOpen: '',
      qusetion: {},
    };
    },
    props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleAccordion(edite) {
     if( this.isOpen == edite){
        this.isOpen = ''
     }
     else{
        this.isOpen = edite;
     }
      console.log(this.isOpen)
    },
  },

    computed: {
        locale() {
            return this.$i18n.locale
        },


    },
    beforeMount() {


axios.get(`/api/faqs`)
    .then(res => {
        this.qusetion=res.data.faqs
     console.log(res)
    })
    .catch((error) => console.log(error))

},

}

</script>
<style>
.cont::-webkit-scrollbar {
    display: none;
  }
  </style>
