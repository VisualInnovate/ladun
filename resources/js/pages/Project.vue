<template>
    <Navbar class=" fixed z-50 w-full" :class="{ 'bg-black': !top}"/>
    <div class="relative img-banner-slot h-[50vh] md:h-auto">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <img class="h-[50vh] md:h-auto w-[100%]" src="../../img/real-state-management-banner.png">

        <div class="z-40 text-white absolute top-40 md:top-60 -translate-y-1/2 text-justify">
            <div class="flex md:mx-20 mx-5">
                <img class="animate__animated animate__backInDown max-w-[150px]"
                     id="logo-project"
                     v-if="project.logo"
                     :src="project.logo.original_url">
                <h2 class="my-auto mx-3 animate__animated animate__backInDown" v-if="project.title">
                    {{ project.title[$i18n.locale] }}</h2>
            </div>
        </div>

    </div>

    <section class="genaral-info bg-white">
        <div class="container mx-auto ">
            <div class="grid grid-cols-1  gap-12 md:grid-cols-2 md:gap-20  lg:grid-cols-4 lg:gap-16 text-white p-3">

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown ">
                    <!-- <img class="w-[24%] mx-auto" src="../../img/icon-area.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-area.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black ">{{ $t('areaOfLand') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.land_area }} m2</p>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/area-svgrepo-com.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-area-net.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black text-center ">{{ $t('Building_Area') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.building_area }} m2</p>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/buildings-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[20%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-commercials1.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black ">{{ $t('Floors_Number') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.units_number }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-resendial.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black ">{{ $t('Units_Number') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.models_number }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-services.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  ">{{ $t('facilities') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.facilities }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-mall.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  ">{{ $t('commercial') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.commercial }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-commercials.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black ">{{ $t('investment') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.investment }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-goverment.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black text-center">{{ $t('government') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.government }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <diV class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-learning.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black text-center">{{ $t('educational') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.educational }}</p>
                        </div>
                    </diV>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-gardens.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black ">{{ $t('gardens') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.gardens }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-mosques.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  ">{{ $t('mosque') }}</p>
                            <p class="font-bold text-center text-lg text-black">{{ project.mosque }}</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </section>


    <!-- navigation -->
    <section class="bg-white drop-shadow-md text-sm">
        <div class="container mx-auto">
            <div class="py-10 w-full lg:w-[66%]">
                <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 mx-auto items-center ">
                    <div class="mx-auto mb-3 md:mb-0 ">
                        <a class="   relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#project',
                            offset: -128
                        }">
                            {{ $t('project') }}
                        </a>
                    </div>
                    <!-- project phases -->
                    <div class="mx-auto mb-3 md:mb-0 ">
                        <a class="   relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#project_phases',
                            offset: -128
                        }">
                            {{ $t('projectPhases') }}
                        </a>
                    </div>

                    <div class="mx-auto mb-3 md:mb-0 ">
                        <a class="relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#utilities',
                            offset: -128
                        }">
                            {{ $t('utilities') }}
                        </a>
                    </div>

                    <div class="mx-auto mb-3 md:mb-0">
                        <a class="relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#downloads',
                            offset: -128
                        }">
                            {{ $t('downloads') }}
                        </a>
                    </div>

                    <div class="mx-auto mb-3 md:mb-0">
                        <a class="relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#project_models',
                            offset: -128
                        }">
                            {{ $t('projectModels') }}
                        </a>
                    </div>

                    <div class="mx-auto mb-3 md:mb-0">
                        <a class="relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#location',
                            offset: -128
                        }">
                            {{ $t('location') }}
                        </a>
                    </div>

                    <a
                        class="mx-auto button bg-light-brown text-white  w-full text-center py-2 hover:bg-dark-brown hover:shadow"
                        href="#" v-scroll-to="{
                            el: '#ask_us',
                            offset: -128
                        }">
                        {{ $t('askUs') }}
                    </a>


                </div>
            </div>

        </div>

    </section>


    <!-- project section -->
    <section class="company-info py-28 bg-background-section" id="project">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-20">

                <div class="d-info h-full flex flex-col justify-center  right"
                >
                    <h1 class=" text-2xl mb-6 font-extrabold " v-if="project.title">
                        {{ project.title[$i18n.locale] }}</h1>
                    <p class="mb-12 text-lg text-justify" v-if="project.text" v-html="project.text[$i18n.locale]"></p>

                </div>
                <div class="img-company-info  left" id="project_img"
                >
                    <img class="w-full max-h-[430px]" :src="project.attachment" alt="">
                    <!--     will change  project will added in filament-->

                </div>


            </div>
        </div>


    </section>

    <!-- project phases section -->
    <section id="project_phases " class="py-16 ">
        <h1 class="container text-light-brown mb-6">{{ $t('projectPhases') }}</h1>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3 container mx-auto right" v-if="project.phases">

            <div class=" right " v-for="phase in project.phases">


                <div class="  p-5 font-bold ">


                    <!--                        <Progress labelProgress="true" labelPosition="outside" :label="$t('achieve_percentage')" :progress="phase.achieve_percentage"></Progress>-->

                    <CircleProgressBar :value="phase.achieve_percentage" :max="100" percentage colorUnfilled="#AF9744"
                                       animationDuration="1s"
                                       rounded></CircleProgressBar>
                    <h5 class="pb-2 text-center mt-4">{{ phase.name[$i18n.locale] }}</h5>


                </div>
            </div>
        </div>
    </section>

    <!-- gallery section -->
    <section class="py-12 pb-16">
        <div class="container mx-auto">
            <div class=" flex lg:flex-row  flex-col">
                <div
                    class="lg:w-[20%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start ">
                    <!--                    <p class="text-dark-brown text-4xl">{{ $t('gallary_project') }}</p>-->
                    <div v-if="$i18n.locale=='en'" class="right">
                        <div class="flex items-center">
                            <p class="text-dark-brown text-2xl ">MEDIA </p>
                            <div class="w-[29px] h-[3px] bg-dark-brown  mx-5"></div>
                        </div>
                        <p class="text-dark-brown text-4xl ml-4"> Project </p>
                        <p class="text-dark-brown text-4xl ml-4">Gallery</p>
                    </div>
                    <p class="text-dark-brown text-4xl right" v-else>
                        معرض صور المشـــروع
                    </p>
                </div>
                <div class="flex flex-row-reverse w-[80%]  left" id="carsoul-project">
                    <div class="w-[90%]">
                        <vue-carousel :items="getGallery(project.gallery)"/>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <!-- utilities section  -->
    <!-- utilities section  will fetch from API-->
    <section
        id="utilities"
        class="relative bg-real-state-managemnt-utility-section bg-cover  pt-40 pb-16  text-white flex items-center right">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <div class="z-40   container mx-auto    ">
            <div id="utility">
                <h2 class="mb-5 text-light-brown text-3xl ">{{ $t('high_level_utility') }} </h2>
                <p class="mb-10 text-lg ">{{ $t('high_level_utility_p') }} </p>
                <div class="flex flex-wrap ">
                    <div
                        v-if="project.utilities"
                        v-for="utility in project.utilities" :key="utility.id"

                        class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]">
                        <div class=" p-7 rounded-full bg-white z-20 mb-2 right">
                            <img v-if="utility.image" :src="utility.image.original_url" class="w-[35px] h-[35px] z-40"
                                 alt="">
                        </div>

                        <p class="text-sm">{{ utility.title[$i18n.locale] }} </p>
                    </div>

                </div>


            </div>
        </div>

    </section>

    <!-- downloads sections -->
    <section class="company-info py-20 bg-background-section" id="downloads">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center right">
                    <h1 class=" text-3xl text-light-brown mb-6">{{ $t('Download_Project_Files') }}</h1>
                    <p class="mb-20 text-lg text-justify">
                        {{ $t('Download_Project_Files_p') }}
                    </p>

                    <div class="company-button ">
                        <div class="flex flex-wrap justify-between" v-if="project.downloads">
                            <div class="w-1/2 mb-5" v-for="file in project.downloads">
                                <a :href="`/storage/${file.project_attachment}`" target="_blank"
                                   class="hover:bg-green-400 hover:cursor-pointer special-button text-xl button bg-dark-brown  rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4">
                                    <ArrowDownTrayIcon class="text-white w-6 h-6 rtl:ml-6 ltr:mr-6"/>
                                    {{ file.name[$i18n.locale] }}
                                </a>
                            </div>


                        </div>


                    </div>


                </div>

                <div class="left">
                    <img src="../../img/video-real-state-management.png">

                </div>


            </div>
        </div>


    </section>

    <!-- project models -->
    <section class="company-info   py-28 pt-16  bg-background-section " id="project_models">

        <div class="container mx-auto">

            <div class="">

                <div class="d-info h-full flex flex-col justify-center right">
                    <h1 class="font-bold text-2xl mb-4 text-center md:text-start">{{ $t('Project_Models') }} </h1>
                    <tabs variant="underline" v-model="activeTab" class="p-5 text-lg">
                        <!-- class appends to content DIV for all tabs -->
                        <tab v-for="model in project.project_models" :name="model.title['en']"
                             :title="model.title[$i18n.locale]"
                             class="text-lg [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-12 [&>div]:lg:grid-cols-2 [&>div]:lg:gap-2">
                            <div>
                                <div class="text mb-5">
                                    <p class="mb-3">{{ $t('Land_Area') }}: {{ model.Land_area }}</p>
                                    <p class="mb-3">{{ $t('Building_Area') }}: {{ model.building_area }}</p>
                                    <p class="mb-3">{{ $t('Floors_Number') }}: {{ model.floors_number }}</p>
                                    <p>{{ $t('Units_Number') }}: {{ model.units_number }}</p>
                                </div>
                                <div class="flex flex-wrap">
                                    <div
                                        v-if="model.utilities"
                                        v-for="utility in model.utilities"
                                        class=" ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]">

                                        <div class=" p-7 rounded-full border-2 bg-white z-20 mb-2">
                                            <img v-if="utility.media[0]" :src="utility.media[0].original_url"
                                                 class="w-[35px] h-[35px] z-40">
                                            <!--                                            add dinamic img -->
                                        </div>

                                        <p class="text-sm whitespace-nowrap">{{ utility.title[$i18n.locale] }}</p>

                                    </div>

                                </div>

                            </div>

                            <div class="  left">
                                <Carousel :pictures="getGallery(model.media)"
                                          class="about-us-carousel h-[400px] [&>div:first-child]:h-[400px]  [&>div>div>img]:h-[400px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1  "/>

                            </div>

                        </tab>

                    </tabs>
                </div>


            </div>
        </div>
    </section>

    <!-- location -->
    <section class="company-info   py-28 bg-background-section" id="location">

        <div class="container mx-auto">

            <div class="grid grid-cols-1 gap-12  lg:grid-cols-2 lg:gap-10">

                <div class="d-info h-full flex flex-col justify-center right">
                    <h1 class="font-bold text-xl mb-4 text-center md:text-start">{{ $t('Location') }} </h1>
                    <p class="mb-12 text-lg text-dark-brown" v-if="project.location">
                        {{ project.location.city[$i18n.locale] }}

                    </p>

                    <p class="flex " v-if="project.location.address">
                        <MapPinIcon class="w-6 h-6 text-black"/>
                        {{ project.location.address[$i18n.locale] }}
                    </p>

                </div>

                <div class="img-company-info  left">
                    <iframe class="w-full h-[350px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8622.087051923865!2d46.67816517503699!3d24.68767766179772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b4ad55d0b%3A0x9724c2fb9fb4fce6!2sLadun%20Investment!5e0!3m2!1sen!2seg!4v1679391697436!5m2!1sen!2seg"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <!--                    map location  langtud and  -->
                </div>


            </div>
        </div>


    </section>

    <!-- ask_us -->
    <section class="text-center py-28" id="ask_us">
        <div class="container mx-auto">
            <h2 class="mb-5">{{ $t('inquiriesNotes') }}</h2>
            <p>{{ $t('forAllInquiries') }}</p>
            <p>{{ $t('outsideSaudia') }}</p>

            <div
                class="flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"
            >
                <div class="flex-auto md:w-1/2 right">
                    <div class="bg-black rounded-lg mb-14">
                        <div class="text-dark-brown py-10 px-5 text-sm">
                            {{ $t("pleaseFill") }}
                        </div>
                         <!--                              action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"-->
                        <!--                              method="POST"-->
                        <form class="grid gap-y-10 mx-5"

                        >

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
                                v-model="first_name"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('FirstName')"
                            />
                            <input
                                type="text"
                                id="last_name" maxlength="80" name="last_name"
                                aria-describedby="helper-text-explanation"
                                v-model="last_name"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('LastName')"
                            />
                        </div>
                        <div class="flex justify-center gap-x-5">
                            <input
                                type="text"
                                id="mobile" maxlength="40" name="mobile"
                                v-model="mobile"
                                aria-describedby="helper-text-explanation"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('PhoneNumber')"
                            />
                            <input
                                type="email"
                                id="email" maxlength="80" name="email"
                                aria-describedby="helper-text-explanation"
                                v-model="email"
                                class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                :placeholder="$t('Email')"
                            />
                        </div>
                            <div class="flex justify-center gap-x-5">

                                <select
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    v-model="status"
                                >
                                    <option value="Buy"> {{ $t('ownership') }}</option>
                                    <option value="Rent"> {{ $t('rent') }}</option>
                                    <option value="Other"> {{ $t('other') }}</option>


                                </select>

                                <select
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    v-model="region"
                                >
                                    <option value="Eastern"> {{ $t('easternRegion') }}</option>
                                    <option value="Middle"> {{ $t('middleRegion') }}</option>
                                    <option value="Northern"> {{ $t('westernRegion') }}</option>
                                    <option value="Western"> {{ $t('northernRegion') }}</option>


                                </select>

                            </div>
                        <button
                            type="submit" @click="submit"
                            class="bg-dark-brown h-10 mb-10 mx-2 text-white"
                        >
                            {{ $t("sendNow") }}
                        </button>
                        </form>
                    </div>
                </div>
            </div>

            <p dir="">
                {{ $t('ifYouFaceAProplem') }}<a href="#" class="text-dark-brown">{{ $t('sendUsNow') }}</a>
            </p>
        </div>

    </section>


    <LightFooter/>
</template>

<script>

import {useRoute} from 'vue-router';

import {Input, Dropdown} from 'flowbite-vue'
import {ArrowDownTrayIcon} from "@heroicons/vue/24/solid";
import {Tabs, Tab} from 'flowbite-vue'
import {Carousel} from 'flowbite-vue'
import {MapPinIcon} from "@heroicons/vue/24/solid";
import Navbar from '../components/Navbar.vue';
import LightFooter from '../components/LightFooter.vue';
import VueCarousel from "@/components/VueCarousel.vue";
import {Progress} from 'flowbite-vue'
import {ref} from "vue";
import {element} from "tw-elements/dist/src/js/util";


import {CircleProgressBar} from 'circle-progress.vue';

export default {
    components: {
        Input,
        Dropdown,
        LightFooter,
        MapPinIcon,
        Navbar,
        VueCarousel,
        Carousel,
        ArrowDownTrayIcon,
        Tabs,
        Tab,
        useRoute,
        Progress,
        CircleProgressBar
    },
    data() {
        return {
            activeTab: '',
            URL: '',
            route: '',
            project: {},
            top: 1,
            first_name:"",
            last_name:"",
            mobile:"",
            email:"",
            region:"Eastern",
            status:"Buy"



        }
    },
    methods: {
        getGallery(gallery) {
            if (gallery) {
                return Object.values(gallery).map((image) => {
                    return {
                        src: image.original_url,
                        alt: image.name
                    }
                })
            } else {
                return [];
            }

        },
        submit() {
            // alert(this.status)
            axios.post(`https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8`,{
                "first_name":this.first_name,
                "last_name":this.last_name,
                "mobile":this.mobile,
                "email":this.email,
                "oid":"00D3G0000008knU",
                "retURL":"http://google.com",
                "00N3G00000IEQrA":this.status+"-"+this.region+" Region",
                "00N3G00000FV0J9":'',

            })
                .then(res => {
                    // this.project = Vue.util.extend({}, res.data.data)

                })
                .catch((error) => console.log(error))
        }

    },
    computed: {
        locale() {
            return this.$i18n.locale
        }
    },
    beforeMount() {


        axios.get(`/api/projects/${this.$route.params.id}`)
            .then(res => {
                // this.project = Vue.util.extend({}, res.data.data)
                this.project = res.data.data
                this.activeTab = this.project.project_models[0].title['en']
                console.log(res.data.data)
            })
            .catch((error) => console.log(error))

    }, mounted() {


        window.addEventListener('scroll', function () {
            let utility_project = document.getElementsByClassName('utility-group')
            document.getElementById('logo-project')
            if (window.scrollY == 0) {
                this.top = 1
            } else {
                this.top = 0

            }


            let right = document.getElementsByClassName('right')
            let left = document.getElementsByClassName('left')
            let utility = document.getElementById('utility')


            if (window.scrollY >= utility.offsetTop - 210) {

                if (this.locale == 'en') {
                    utility.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow')
                } else {
                    utility.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow')
                }


            }

            // console.log(left.length)
            for (let i = 0; i < right.length; i++) {
                console.log(right[i].offsetTop)
                if (window.scrollY >= right[i].offsetTop - 710) {
                    if (this.locale == 'en') {
                        right[i].classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow')
                    } else {
                        right[i].classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow')
                    }


                }
            }
            for (let i = 0; i < left.length; i++) {
                console.log(left[i].offsetTop)
                if (window.scrollY >= left[i].offsetTop - 710) {
                    if (this.locale == 'en') {
                        left[i].classList.add('animate__animated', 'animate__zoomIn', 'animate__slow')
                    } else {
                        left[i].classList.add('animate__animated', 'animate__zoomIn', 'animate__slow')
                    }


                }
            }
        }.bind(this))
    }
}


</script>

<style scoped>


</style>
