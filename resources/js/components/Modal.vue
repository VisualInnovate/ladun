<template>
    <dropdown
        class="hover:cursor-pointer z-30 [&>div]:w-full w-[30%] lg:w-[20%] h-10 bottom-0 origin-top  dark:text-[white] rtl:-translate-x-[100%] ltr:translate-x-[100%] lg:rtl:-translate-x-[199%] lg:ltr:translate-x-[199%] -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50  dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800  bg-dark-brown ">
        <template #trigger>
                    <span class="w-full inline-flex justify-between px-4 text-white">
                        <span class="m-auto">{{ $t('choose') }}</span>
                        <svg class="my-auto w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 9l-7 7-7-7"></path></svg>
                    </span>
        </template>
        <list-group class="w-28 m-auto lg:w-full   ">

            <div class="mx-11 font-bold">{{ $t('ownership') }}</div>

            <list-group-item class="mx-24" @click="showModal('Buy-Eastern Region')">{{ $t('easternRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal('Buy-Middle Region')">{{ $t('middleRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal('Buy-Western Region')">{{ $t('westernRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal('Buy-Northern Region')">{{ $t('SouthernRegion') }}</list-group-item>

            <div class="mx-11 font-bold">{{ $t('rent') }}</div>
            <list-group-item class="mx-24" @click="showModal('Buy-Eastern Region')">{{ $t('easternRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal('Rent-Middle Region')">{{ $t('middleRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal('Rent-Western Region')">{{ $t('westernRegion') }}</list-group-item>

        </list-group>
    </dropdown>
    <Modal class="dark:bg-black z-30"  v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center  text-lg">
                {{$t('shareYourInterests')}}
            </div>
        </template>
            <template #body >
                <form class=" space-y-2 z-30" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                    <input type=hidden name="oid" value="00D8d0000060W7M">
                      <input type=hidden name="retURL" value="https://www.ladun.sa/ar">

                    <Input size="md" id="first_name" maxlength="40" name="first_name" :placeholder="$t('FirstName')" :label="$t('FirstName')"/>
                    <Input size="md"  maxlength="80" id="last_name" name="last_name" :placeholder="$t('LastName')" :label="$t('LastName')"/>

                    <Input size="md" maxlength="40" id="mobile" name="mobile" :placeholder="$t('PhoneNumber')" :label="$t('PhoneNumber')"/>
                    <Input size="md" maxlength="80" id="email" name="email" :placeholder="$t('Email')" :label="$t('Email')"/>
                    <label class="my-auto">{{ $t('Buy_Rent') }}</label>
                     <select
                           :aria-label="saccsa"  id="salutation"     class="lg:w-full  mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"

                                >


                                <option value="Eastern">{{$t('Buy_Eastern_Region')}} </option>
                                <option value="Eastern">{{$t('Buy_Middle_Region')}} </option>
                                <option value="Eastern">{{$t('Buy_Western_Region')}} </option>

                                <option value="Eastern">{{$t('Rent_Eastern_Region')}} </option>
                                <option value="Eastern">{{$t('Rent_Middle_Region')}} </option>
                                <option value="Eastern">{{$t('Rent_Western_Region')}} </option>


                     </select>

                     <input  id="00N8d00000RMxGu" maxlength="255" name="00N8d00000RMxGu" size="20" type=hidden  />
                    <input type="submit" class="text-white bg-[#AF9744] hover:bg-[#764522] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :value="$t('submit')">
                </form>


            </template>
            <template #footer>
                <div class="flex justify-between">


                </div>
            </template>
    </Modal>
</template>

<script>
import {Modal} from 'flowbite-vue'
import {Dropdown, ListGroup, ListGroupItem} from 'flowbite-vue'
import {Input} from 'flowbite-vue'


export default {
    data() {
        return {
            isShowModal: false,
            data:''
        }
    },
    props: ['formShow'],
    components: {
        Modal, Dropdown, ListGroupItem, ListGroup, Input
    },
    methods: {
        closeModal() {
            this.isShowModal = false
        },
        showModal(data) {
            this.isShowModal = true
            console.log(this.data)

            this.data=data
        }
    },
    mounted() {
        console.log(this.formShow)
    },
    watch: {
        formShow: {
            // the callback will be called immediately after the start of the observation
            immediate: true,
            handler(val, oldVal) {
                this.isShowModal = val
            }
        }
    }
}


</script>

<style scoped>

</style>
