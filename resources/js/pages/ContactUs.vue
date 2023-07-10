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
<!--                    <form class="grid gap-y-10 mx-5" @submit.prevent="submit" :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'">-->
<!--                        <div class="flex justify-center gap-x-5">-->

<!--                            <input v-model="contact.name" type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('fullName')">-->
<!--                            <div class="text-red-500 " v-if="error.name">{{error.name[0]}}</div>-->
<!--                            <input v-model="contact.email" type="email" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('email')">-->
<!--                            <div class="text-red-500" v-if="error.email">{{error.email[0]}}</div>-->
<!--                        </div>-->
<!--                        <div class="flex justify-center gap-x-5">-->

<!--                            <input v-model="contact.phone" type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('mobile')">-->
<!--                            <div class="text-red-500" v-if="error.phone">{{error.phone[0]}}</div>-->
<!--                            <input v-model="contact.subject" type="text" id="helper-text" aria-describedby="helper-text-explanation" class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('subject')">-->
<!--                            <div class="text-red-500" v-if="error.subject">{{error.subject[0]}}</div>-->
<!--                        </div>-->

<!--                        <textarea v-model="contact.content" id="message" rows="4" class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-brown focus:border-dark-brown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown" :placeholder="$t('content')"></textarea>-->
<!--                        <div class="text-red-500" v-if="error.content">{{error.content[0]}}</div>-->

<!--                        <button type="submit" class="bg-dark-brown h-10 mb-10 mx-2 text-white ">{{ $t('sendNow') }}</button>-->
<!--                    </form>-->

                    <form
                        class="grid gap-y-10 mx-5"
                        :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'"
                          action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                          method="POST">
                        <div class="flex justify-center gap-x-5">
                            <select
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"

                            >
                                <option value="Rent-Eastern Region"> {{ $t('easternRegion') }}</option>
                                <option value="Buy-Middle Region"> {{ $t('middleRegion') }}</option>
                                <option value="Buy-Western Region"> {{ $t('westernRegion') }}</option>
                                <option value="Buy-Northern Region"> {{ $t('northernRegion') }}</option>


                            </select>


                            <select
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                            >
                                <option> {{ $t('ownership') }}</option>
                                <option> {{ $t('rent') }}</option>
                                <option> {{ $t('other') }}</option>


                            </select>
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <input type=hidden name="oid" value="00D3G0000008knU">
                            <input type=hidden name="retURL" value="https://ladun.visualinnovate.net/">
                            <input id="a013G000001hMGOQA2" maxlength="255" name="a013G000001hMGOQA2" size="20"
                                   type="hidden"/>  <!-- Object Of Interest -->
                            <!-- This field should not appear to the user and shall be filled automatically -->
                            <!-- choose your inquiry -->

                            <input
                                type="text"
                                id="first_name" maxlength="40" name="first_name"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('FirstName')"
                            />
                            <input
                                type="text"
                                id="last_name" maxlength="80" name="last_name"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('LastName')"
                            />
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <input
                                type="text"
                                id="mobile" maxlength="40" name="mobile"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('PhoneNumber')"
                            />
                            <input
                                type="email"
                                id="email" maxlength="80" name="email"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('Email')"
                            />
                        </div>

                        <button
                            type="submit"
                            class="bg-dark-brown h-10 mb-10 mx-2 text-white"
                        >
                            {{ $t("sendNow") }}
                        </button>
                    </form>

                </div>
                <div class="flex flex-col gap-y-5 py-2" :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'">
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

                <img src="../../img/contact_us/map.png" class="drop-shadow-[-2rem_2rem_rgba(0,0,0,0.05)]" :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'"/>
                <div class="mt-10 text-center">
                    {{ $t('followUs') }}
                    <div class="flex justify-between px-10 mt-10">
                        <a href="https://www.facebook.com/Ladun.KSA" target="_blank">
                            <img class="h-10" src="../../img/contact_us/icons/facebook.svg" alt="facebook icon" />
                        </a>
                        <a href="https://www.instagram.com/ladun_sa/" target="_blank">
                            <img class="h-10" src="../../img/contact_us/icons/instagram.svg" alt="instagram icon" />
                        </a>
                        <a href="https://twitter.com/Ladun_sa" target="_blank">
                            <img class="h-10" src="../../img/contact_us/icons/twitter.svg" alt="twitter icon" />
                        </a>
                    </div>
                </div>
            </div>



        </div>
    </div>

    <LightFooter />
</template>

<script >
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue";
import { Input } from 'flowbite-vue'
export default {
    components:{
        Navbar,LightFooter,Input
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
