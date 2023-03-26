<template>
    <dropdown
        class="hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50  dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800  bg-dark-brown ">
        <template #trigger>
                    <span class="w-full inline-flex justify-between px-4 text-white">
                        <span>{{ $t('choose') }}</span>
                        <svg class="my-auto w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 9l-7 7-7-7"></path></svg>
                    </span>
        </template>
        <list-group class="w-full">

            <div class="mx-11 font-bold">{{ $t('ownership') }}</div>

            <list-group-item class="mx-24" @click="showModal">{{ $t('easternRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal">{{ $t('middleRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal">{{ $t('westernRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal">{{ $t('northernRegion') }}</list-group-item>

            <div class="mx-11 font-bold">{{ $t('rent') }}</div>

            <list-group-item class="mx-24" @click="showModal">{{ $t('middleRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal">{{ $t('westernRegion') }}</list-group-item>
            <list-group-item class="mx-24" @click="showModal">{{ $t('northernRegion') }}</list-group-item>


        </list-group>
    </dropdown>
    <Modal :size="size" v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                Terms of Service
            </div>
        </template>
            <template #body>
                    <Input size="md" :placeholder="$t('FirstName')" :label="$t('FirstName')"/>
                    <Input size="md" :placeholder="$t('FatherName')" :label="$t('FatherName')"/>
                    <Input size="md" :placeholder="$t('LastName')" :label="$t('LastName')"/>
                    <Input size="md" :placeholder="$t('PhoneNumber')" :label="$t('PhoneNumber')"/>
                    <Input size="md" :placeholder="$t('Email')" :label="$t('Email')"/>


            </template>
            <template #footer>
                <div class="flex justify-between">
                    <button @click="closeModal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Decline
                    </button>
                    <button @click="closeModal" type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        submit
                    </button>
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
            isShowModal: false
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
        showModal() {
            this.isShowModal = true
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
