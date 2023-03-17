<template>
    <Navbar class="bg-black fixed z-50 w-full" />

    <div class="container mx-auto ">
        <h1 class="pt-36 px-5 mx-5 mb-5 font-bold">

            {{ $t("contactUs") }}
        </h1>

        <div
            class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"
        >

            <div class="flex-auto md:w-1/2 ">
                <div class="bg-black rounded-lg mb-14">
                    <div class="text-dark-brown py-10 px-5 text-sm">
                        {{ $t('beInTouch') }}
                    </div>
                    <form class="grid gap-y-10 mx-5" @submit.prevent="submit">
                        <div class="flex justify-center gap-x-5">

                            <input v-model="contact.name" type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('fullName')">
                            <div class="text-red-500 " v-if="error.name">{{error.name[0]}}</div>
                            <input v-model="contact.email" type="email" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('email')">
                            <div class="text-red-500" v-if="error.email">{{error.email[0]}}</div>
                        </div>
                        <div class="flex justify-center gap-x-5">

                            <input v-model="contact.phone" type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('mobile')">
                            <div class="text-red-500" v-if="error.phone">{{error.phone[0]}}</div>
                            <input v-model="contact.subject" type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('subject')">
                            <div class="text-red-500" v-if="error.subject">{{error.subject[0]}}</div>
                        </div>

                        <textarea v-model="contact.content" id="message" rows="4" class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-brown focus:border-dark-brown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('content')"></textarea>
                        <div class="text-red-500" v-if="error.content">{{error.content[0]}}</div>

                        <button type="submit" class="bg-dark-brown h-10 mb-10 mx-2 text-white ">{{ $t('sendNow') }}</button>
                    </form>
                </div>
                <div class="flex flex-col gap-y-5 py-2">
                    <div class="flex flex-row justify-start gap-x-5">
                        <img class="h-16" src="../../img/contact_us/icons/location.png" />
                        <p class="my-auto">{{ $t('location') }}</p>
                    </div>
                    <div class="flex flex-row justify-start gap-x-5">
                        <img class="h-16" src="../../img/contact_us/icons/phone.png" />
                        <div class="flex flex-col">
                            <div class="flex flex-col md:flex md:flex-row my-auto gap-x-2">
                                <p class="font-bold inline">{{ $t('phone') }}</p> <span>: 920011560 </span>
                                <p class="font-bold inline">{{ $t('ext') }}</p><span> : 1555</span>
                            </div>
                            <div class="my-auto">
                                <p class="font-bold inline">{{ $t('fax') }}</p><span> : 4888567 - 011</span>
                            </div>
                        </div>

                    </div>
                    <div class="flex flex-row justify-start gap-x-5">
                        <img class="h-16" src="../../img/contact_us/icons/email.png" />
                        <div class="my-auto flex flex-row">
                            <p class="font-bold">{{ $t('email') }}</p><span> : investor@ladun.com</span>
                        </div>

                    </div>
                </div>



            </div>
            <div class="w-full md:w-1/2 mx-2 mb-5 ">

                <img src="../../img/contact_us/map.png" class="drop-shadow-[-2rem_2rem_rgba(0,0,0,0.05)]" />
                <div class="mt-10 text-center">
                    {{ $t('followUs') }}
                    <div class="flex justify-between px-10 mt-10">
                        <img class="h-10" src="../../img/contact_us/icons/facebook.svg" alt="facebook icon" />
                        <img class="h-10" src="../../img/contact_us/icons/instagram.svg" alt="instagram icon" />
                        <img class="h-10" src="../../img/contact_us/icons/twitter.svg" alt="twitter icon" />
                    </div>
                </div>
            </div>



        </div>
    </div>

    <DarkFooter />
</template>

<script >
import Navbar from "../components/Navbar.vue";
import DarkFooter from "../components/DarkFooter.vue";
import { Input } from 'flowbite-vue'
export default {
    components:{
        Navbar,DarkFooter,Input
    }
    ,data(){
        return{
           contact:
               {
                   'name':'',
                   'email':'',
                   'phone':'',
                   'subject':'',
                   'content':'',
               },
            error:
               {
                   'name':'',
                   'email':'',
                   'phone':'',
                   'subject':'',
                   'content':'',
               },


        }
    },
    methods:{
        submit(){
            axios.post("/api/contact",this.contact).then(res =>{


            }).catch(error=>{
                this.error=error.response.data.errors
                }

            )
        }
    }

}
</script>
