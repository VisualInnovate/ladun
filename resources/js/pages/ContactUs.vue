<template>
    <Navbar class="bg-black fixed z-50 w-full "/>

    <div class="container mx-auto ">
        <h1 class="pt-36 px-5 mx-5 mb-5 font-bold  dark:text-white dark:bg-black">

            {{ $t("contactUs") }}
        </h1>

        <div
            class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap lg:mx-10 my-5"
        >

            <div class="flex-auto  ">
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
                    <div class="bg-[#57565B]  rounded-xl h-[100%] lg:h-[90%] dark:bg-gray-600">
                        <div class="text-dark-brown py-10 rounded-2xl text-lg px-5 text-sm">
                            {{ $t('beInTouch') }}
                        </div>


                        <form class="grid gap-y-12 mx-5 pb-12  "

                        >
                            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5 ">
                                <input
                                    type="text"
                                    id="first_name" maxlength="40" name="first_name"
                                    aria-describedby="helper-text-explanation"
                                    v-model="first_name"
                                    class="lg:w-full w-[95%] mx-auto  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('FirstName')"
                                />
                                <input
                                type="text"
                                id="last_name" maxlength="80" name="last_name"
                                aria-describedby="helper-text-explanation"
                                v-model="last_name"
                                class="lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('LastName')"
                            />



                            </div>
                            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center gap-x-5">
                                 <input type=hidden name="oid" value="00D8d0000060W7M">
                                <input type=hidden name="retURL" value="https://www.ladun.sa/ar">
                                <input id="a013G000001hMGOQA2" maxlength="255" name="a013G000001hMGOQA2" size="20"
                                       type="hidden"/>  <!-- Object Of Interest -->
                                <!-- This field should not appear to the user and shall be filled automatically -->
                                <!-- choose your inquiry -->
                                <input
                                type="number"

                                id="mobile" maxlength="40" name="mobile"
                                v-model="mobile"
                                aria-describedby="helper-text-explanation"
                                class="lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('PhoneNumber')"
                            />


                                <input
                                    type="email"
                                    id="email" maxlength="80" name="email"
                                    aria-describedby="helper-text-explanation"
                                    v-model="email"
                                    class="lg:w-full w-[95%]  mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('Email')"
                                />

                            </div>
                            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2  gap-x-5">
                                <select
                                class="lg:w-full w-[95%] mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                v-model="status"
                            >
                                <option value="Buy"> {{ $t('ownership') }}</option>
                                <option value="Rent"> {{ $t('rent') }}</option>
                                <option value="Other"> {{ $t('other') }}</option>


                            </select>
                                <select
                                    class="lg:w-full  mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    v-model="region"
                                >
                                    <option value="Eastern"> {{ $t('easternRegion') }}</option>
                                    <option value="Middle"> {{ $t('middleRegion') }}</option>
                                    <option value="Northern"> {{ $t('westernRegion') }}</option>
                                    <option value="Western"> {{ $t('SouthernRegion') }}</option>


                                </select>



                            </div>

                            <button
                                type="submit" @click="submit"
                                class="bg-dark-brown h-10 mb-10 mx-2 rounded-3xl text-white"
                            >
                                {{ $t("sendNow") }}
                            </button>
                        </form>

                    </div>
                    <div class="w-full  ">
                        <iframe   :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d906.3230424820638!2d46.6705705!3d24.6824812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b35533327%3A0x815af65663dafe63!2zUkdNQjI3NTHYjCAyNzUxINi02KfYsdi5INin2YTYo9mF2YrYsSDYs9mE2LfYp9mGINio2YYg2LnYqNiv2KfZhNi52LLZitiy2IwgNjc2OdiMINit2Yog2KfZhNmF2LnYsNixINin2YTYtNmF2KfZhNmKLCBSaXlhZGggMTIzMTIsIFNhdWRpIEFyYWJpYQ!5e0!3m2!1sen!2seg!4v1701034421466!5m2!1sen!2seg"

                       width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<!--                        <img src="../../img/contact_us/map.png" class="w-full h-[100%] lg:h-[90%]"-->
<!--                             :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'"/>-->
                        <!-- <iframe class="w-full  h-[555px] rounded-3xl lg:h-[90%]"
                                :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'"
                                :src="mapLink"

                                frameborder="0"
                                style="border:0;"  loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe> -->

                    </div>
                </div>
                <div class="flex flex-col gap-y-5 py-2"
                     :class="($i18n.locale=='en' )  ? 'animate__animated animate__fadeInRight':'animate__animated animate__fadeInLeft'">
                    <div class="flex flex-row justify-start gap-x-5">
                        <img class="h-16" src="../../img/contact_us/icons/location.png"/>
                        <a  href="https://maps.app.goo.gl/8p13Sqxo4kJMFtfy9" target="_blank" class="underline my-auto dark:text-[white]">{{ $t('location') }}</a>
                    </div>
                    <div class="flex flex-row justify-start gap-x-5">
                        <img class="h-16" src="../../img/contact_us/icons/phone.png"/>
                        <div class="flex flex-col">
                            <div class="flex flex-col md:flex md:flex-row my-auto gap-x-2">

                                <p class="font-bold inline dark:text-[white]">{{ $t('phone') }}</p> <a  class="underline dark:text-[white]" target="_blank" :href="'tel:' + contact[0]?.phone ">{{ contact[0]?.phone }}</a>
                                <!-- <p class="font-bold inline">{{ $t('ext') }}</p><a class="underline"  :href="'tel:'+contact[0]?.convert" target="_blank"> : {{ contact[0]?.convert }}</a> -->
                            </div>
                            <div class="my-auto">
                                <p class="font-bold inline dark:text-[white]">{{ $t('fax') }}</p><a class="underline dark:text-[white]" :href="'tel:'+ contact[0]?.fax "> : {{ contact[0]?.fax }}</a>
                            </div>
                        </div>

                    </div>
                    <div class="flex flex-row justify-start gap-x-5">
                        <img class="h-16" src="../../img/contact_us/icons/email.png"/>
                        <div class="my-auto flex flex-row">
                            <p class="font-bold dark:text-[white]">{{ $t('email') }}</p><a :href="contact[0]?.email" class="underline dark:text-[white]"> : {{ contact[0]?.email }}</a>
                        </div>

                    </div>
                </div>


            </div>



        </div>
    </div>

    <LightFooter/>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import LightFooter from "../components/LightFooter.vue";
import {Input} from 'flowbite-vue'

export default {
    components: {
        Navbar, LightFooter, Input
    }
    , data() {
        return {

            contact:
                {

                },
            error:
                {
                    'name': '',
                    'email': '',
                    'phone': '',
                    'subject': '',
                    'content': '',
                },
            first_name: "",
            last_name: "",
            mobile: "",
            email: "",
            region: "Eastern",
            status: "Buy"


        }
    },

    methods: {
        // submit(){
        //     axios.post("/api/contact",this.contact).then(res =>{
        //
        //
        //     }).catch(error=>{
        //         this.error=error.response.data.errors
        //         }
        //
        //     )
        // }

        submit() {
            // alert(this.status)
            axios.post(`https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8`, {
                "first_name": this.first_name,
                "last_name": this.last_name,
                "mobile": this.mobile,
                "email": this.email,
                "oid": "00D3G0000008knU",
                "retURL": "http://google.com",
                "00N3G00000IEQrA": this.status + "-" + this.region + " Region",
                "00N3G00000FV0J9": '',

            })
                .then(res => {
                    // this.project = Vue.util.extend({}, res.data.data)

                })
                .catch((error) => console.log(error))
        }

    },
    computed:{
        mapLink() {
            return `https://maps.google.com/maps?key=AIzaSyDWxa_rbz7ccvjsvxmbPR5Q_AEK14-D0sk&q=24.820366950,46.64352462&hl=es&z=14&amp&output=embed`
        }
    },
    mounted() {
        axios.get('/api/settings')
        .then((response) => {
       this.contact=response.data.settings

        })
  },

}
</script>
<style scoped>
nput::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none !important;
    margin: 0 !important; /* <-- Apparently some margin are still there even though it's hidden */
}


</style>
