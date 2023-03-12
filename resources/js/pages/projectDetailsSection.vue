<template>
    <div class="text-center pt-10">
        <h2>للإستفسارات والملاحظات</h2>
        <p>
            لجميع الاستفسارات المتعلقة بمشاريع لدن يرجى الاتصال بنا على الرقم
            المجاني: 920011560
        </p>
        <p>
            في حال الاتصال من خارج المملكة العربية السعودية، يرجى الاتصال بنا
            على الرقم 9692001156
        </p>

        <div
            class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"
        >
            <div class="flex-auto md:w-1/2">
                <div class="bg-black rounded-lg mb-14">
                    <div class="text-dark-brown py-10 px-5 text-sm">
                        {{ $t("pleaseFill") }}
                    </div>
                    <form class="grid gap-y-10 mx-5">
                        <div class="flex justify-center gap-x-5">
                            <!-- choose your inquiry -->
                            <dropdown
                                text="Bottom"
                                class="hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"
                            >
                                <template #trigger class="w-full">
                                    <div
                                        class="flex justify-between px-4 text-white w-full"
                                    >
                                        <div>اختر طلبك</div>
                                        <svg
                                            class="my-auto w-4 h-4 ltr:ml-14 rtl:mr-14"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </div>
                                </template>
                            </dropdown>
                            <input
                                type="text"
                                id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('mobile')"
                            />
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <input
                                type="text"
                                id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('fullName')"
                            />
                            <input
                                type="email"
                                id="helper-text"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('email')"
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
            </div>
        </div>

        <p>
            اذا واجهتك أي مشكلة في التقديم <a href="#" class="text-dark-brown" >راسلنا الآن</a> 
        </p>
    </div>
</template>

<script setup>

import { Input, Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

</script>