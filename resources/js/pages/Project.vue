<template>
    <Navbar class=" fixed z-50 w-full" :class="{ 'bg-black': !top}"/>
    <div class="relative img-banner-slot h-[50vh] md:h-auto">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <img class="h-full md:h-auto w-[100%] lg:h-[400px]" :src="getGallery(project.banner)[0]?.src"  >
        <!-- :src="getGallery(project.banner)[0]?.src" -->
        <div
            class="z-40   text-white absolute top-[100%] mx-auto -translate-y-[100%] :rtl:right-[3%] ltr:left-[3%] rtl:-translate-x-[30%] ">
            <img class="animate__animated animate__backInDown max-w-[170px] m-auto"
                 id="logo-project"
                 v-if="project.logo"
                 :src="project.logo.original_url">
        </div>

    </div>
    <section class="  bg-background-section  dark:text-white dark:bg-black"  id="project">

        <div class="container mx-auto">

            <div class="lg:w-[90%]">

                <div class=" h-full grid grid-cols-1  lg:grid-cols-9 items-center py-4 "
                >
                    <div class=" lg:col-span-2  px-4 ltr:border-l-2 rtl:border-r-2 border-dark-brown">

                        <router-link to="/projects"><p class="text-2xl font-bold truncate" v-if="project.department">
                            {{ project.department.title[$i18n.locale] }}</p></router-link>
                        <h1 class=" text-3xl text-[#AF9751] truncate" v-if="project.title">
                            {{ project.title[$i18n.locale] }}</h1>
                        <p v-if="project.number" class="text-lg">{{ $t('certified') }}</p>
                        <p class="  mb-12 text-sm px-2 py-4  " v-if="project.number"
                           v-html="project.number"></p>
                    </div>
                    <div class="lg:col-span-7 ">
                        <p class=" mb-12 text-xl px-2 py-4  h-full flex items-center" v-if="project.text"
                       v-html="project.text[$i18n.locale]"></p>
                    </div>


                </div>


            </div>
        </div>


    </section>


    <section class="  dark:text-white dark:bg-black text-sm m-auto ">
        <div class="container mx-auto pb-4">
            <div class=" w-full  m-auto ">
                <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 mx-auto items-center ">
                    <div class="lg:mx-auto mb-3 md:mb-0 flex" v-if="project.phases.length">
                        <img src="../../img/project_percentage.png" style="width: 28px;height: 28px">


                        <a class="   relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#project_phases',
                            offset: -128
                        }">
                            {{ $t('project') }}
                        </a>

                    </div>

                    <div class=" lg:mx-auto mb-3 md:mb-0 flex " v-if="project?.services?.length">
                        <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon my-auto" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M904.630857 240.054857c0.950857-9.435429-7.021714-19.382857-16.676571-24.283428L461.531429 2.633143a24.137143 24.137143 0 0 0-21.796572 0L13.531429 215.771429c-15.872 10.386286-13.385143 33.426286-13.385143 35.84V706.56c0 8.411429 4.388571 16.310857 11.702857 20.772571 0 0 417.060571 252.050286 424.228571 255.268572 14.628571 7.241143 23.844571 5.266286 30.72 1.755428L605.622857 904.045714c11.849143-6.948571 12.8-17.481143 11.264-35.693714-1.536-18.139429-17.408-28.013714-29.037714-21.284571-11.702857 6.656-103.497143 61.952-103.497143 61.952V493.568L852.114286 279.405714l38.692571-23.405714c7.68-4.973714 12.726857-11.337143 13.750857-15.945143z m-486.4 663.917714L63.780571 687.908571V290.230857L418.157714 493.714286v410.185143z m32.402286-476.525714L113.517714 236.324571 450.633143 67.876571l337.042286 168.448-337.042286 191.122286z m554.276571 335.872l-189.44 113.737143c-10.605714 7.387429-21.796571-0.877714-21.796571-0.877714-1.024-0.219429-188.635429-112.859429-188.635429-112.859429a18.139429 18.139429 0 0 1-8.850285-15.579428v-203.337143c0-6.582857 3.364571-18.066286 16.822857-23.259429l183.808-101.668571a18.870857 18.870857 0 0 1 16.091428 0l184.027429 101.668571h-1.462857c0.512 0 1.243429 0 1.755428 0.292572l4.754286 2.413714c5.997714 2.852571 11.556571 8.045714 11.556571 15.36v208.457143a18.432 18.432 0 0 1-8.630857 15.652571zM667.209143 540.818286l136.630857 76.726857 138.605714-76.726857L803.84 464.457143 667.209143 540.818286z m163.84 277.942857l139.702857-84.260572V582.802286l-139.702857 79.213714v156.672z m-49.517714-2.486857V662.747429l-136.996572-77.531429v148.48l136.996572 82.651429z"
                                    fill="#AF9751"></path>
                            </g>
                        </svg>
                        <a class="relative px-1 inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#serves',
                            offset: -128
                        }">
                            {{ $t('utilities') }}
                        </a>
                    </div>
                    <div class="lg:mx-auto mb-3 md:mb-0 flex truncate" v-if="project.phases.length">
                        <img src="../../img/models_icon.png" style="width: 26px;height: 26px">
                        <a class="  truncate relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#modale',
                            offset: -128
                        }">
                            {{ $t('modale') }}
                        </a>
                    </div>
                    <div class="lg:mx-auto mb-3 md:mb-0 flex" v-if="project.gallery != '' && project.gallery">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             fill="none">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path stroke="#AF9751" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 19v-9a1 1 0 011-1h11a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1zm0 0l4.293-4.293a1 1 0 011.414 0L14 20M7 6V5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-1m-7-4v.01"></path>
                            </g>
                        </svg>
                        <a class="relative inline-block px-1 after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#images',
                            offset: -128
                        }">
                            {{ $t('Image') }}
                        </a>
                    </div>
                    <div class="lg:mx-auto mb-3 md:mb-0 flex" v-if="videoo!='' && videoo">
                        <svg class="px-1" width="26px" height="26px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
                                      stroke="#AF9751" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                <path d="M2.52002 7.11011H21.48" stroke="#AF9751" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.52002 2.11011V6.97011" stroke="#AF9751" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15.48 2.11011V6.52011" stroke="#AF9751" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z"
                                    stroke="#AF9751" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <a class="relative inline-block px-1 after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#video',
                            offset: -128
                        }">
                            {{ $t('video') }}
                        </a>
                    </div>

                    <div class="lg:mx-auto  mb-3 md:mb-0 flex truncate"
                         v-if="project.project_video!='' && project.project_video">
                        <img src="../../img/360_video.jpg" style="width: 26px;height: 26px">

                        <a class="px-1 truncate relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#video3d',
                            offset: -128
                        }">
                            {{ $t('video_360') }}
                        </a>
                    </div>

                    <div class="lg:mx-auto  mb-3 md:mb-0 flex" v-if="project.location">
                        <svg class="my-auto" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                    stroke="#AF9751" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path
                                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                    stroke="#AF9751" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <a class="relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#location',
                            offset: -128
                        }">
                            {{ $t('location') }}
                        </a>
                    </div>


                    <div class="lg:mx-auto  mb-3 md:mb-0 flex" v-if="project.downloads.length">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.1198 22 8.79986 22H12.5M14 11H8M10 15H8M16 7H8M15 19L18 22M18 22L21 19M18 22V16"
                                    stroke="#AF9751" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <a class="relative inline-block px-1 after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#downloads',
                            offset: -128
                        }">
                            {{ $t('downloads') }}
                        </a>
                    </div>


                    <div class="lg:mx-auto  mb-3 md:mb-0 flex" v-if="project.partner_image != '' && project.partner_image">
                        <img src="../../img/Group.svg" style="width: 30px;height: 30px">

                        <a class="relative inline-block px-1 after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#partner',
                            offset: -128
                        }">
                            {{ $t('partners') }}
                        </a>
                    </div>

                    <a
                        class="lg:mx-auto button bg-light-brown text-white rounded-2xl w-full text-center py-2 hover:bg-dark-brown hover:shadow"
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


    <section class="genaral-info  dark:text-white dark:bg-black bg-white lg:p-[5%]">
        <div class="container mx-auto ">
            <div class="grid grid-cols-1   dark:text-white dark:bg-black  gap-12 md:grid-cols-2 md:gap-20  lg:grid-cols-4 lg:gap-16 text-white p-3">

                <div v-if="project.land_area && project.land_area!=0"

                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown ">
                    <!-- <img class="w-[24%] mx-auto" src="../../img/icon-area.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2  dark:text-white dark:bg-black">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="../../img/project_icon/Area.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  dark:text-white dark:bg-black ">{{ $t('areaOfLand') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.land_area }} {{ $t('areaUnit') }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="project.building_area && project.building_area!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown  dark:text-white dark:bg-black">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/area-svgrepo-com.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-area-net.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black text-center  dark:text-white dark:bg-black ">{{ $t('Building_Area') }}</p>
                            <p class="flex font-bold text-center text-lg text-black ">
                               <p >{{ project.building_area }}</p>
                               <p class="px-1  dark:text-white dark:bg-black">{{ $t('areaUnit') }}</p>
                             </p>
                        </div>
                    </div>
                </div>
                <div  v-if="project.units_number && project.units_number!=0"
                     class="grid  grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  dark:text-white dark:bg-black utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/buildings-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2  dark:text-white dark:bg-black">
                        <img class="w-[20%] md:w-[50%] m-auto"
                           src="../../img/project_icon/Residential.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  dark:text-white dark:bg-black  ">{{ $t('Floors_Number') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.units_number }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="project.models_number && project.models_number!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-resendial.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  dark:text-white dark:bg-black ">{{ $t('Units_Number') }}</p>
                            <p class="font-bold text-center text-lg  text-black  dark:text-white dark:bg-black">{{ project.models_number }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="project.facilities && project.facilities!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                                 src="../../img/project_icon/Facilities.svg">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black    dark:text-white dark:bg-black">{{ $t('facilities') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.facilities }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="project.commercial && project.commercial!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                           src="../../img/project_icon/Commercial.svg">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  dark:text-white dark:bg-black ">{{ $t('commercial')  }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.commercial }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="project.investment && project.investment!=0"

                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="https://sauditharwa.com/wp-content/uploads/2016/09/p-icons-c-commercials.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  dark:text-white dark:bg-black ">{{ $t('investment') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.investment }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="project.government && project.government!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                          src="../../img/project_icon/untitled.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black text-center  dark:text-white dark:bg-black">{{ $t('government') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black" >{{ project.government }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="project.government && project.government!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <diV class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[35%] md:w-[50%] m-auto"
                             src="../../img/project_icon/Educational.svg">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black text-center  dark:text-white dark:bg-black">{{ $t('educational') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.educational }}</p>
                        </div>
                    </diV>
                </div>

                <div v-if="project.gardens && project.gardens!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                             src="../../img/project_icon/Garden.png">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black  dark:text-white dark:bg-black ">{{ $t('gardens') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.gardens }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="project.mosque && project.mosque!=0"
                     class="grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto  utility-group animate__animated animate__backInDown">
                    <!-- <img class="w-[20%] mx-auto" src="../../img/pyramid-icon.png"> -->
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <img class="w-[24%] md:w-[50%] m-auto"
                        src="../../img/project_icon/Mosque.svg">
                        <div class="my-auto mx-auto text-[14px]">
                            <p class="text-black   dark:text-white dark:bg-black ">{{ $t('mosque') }}</p>
                            <p class="font-bold text-center text-lg text-black  dark:text-white dark:bg-black">{{ project.mosque }}</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4  dark:text-white dark:bg-black" style="border-bottom: 2px solid black; "></div>
    </section>


    <!-- navigation -->


    <!-- project section -->
    <!-- project phases section -->
    <section id="project_phases" class="py-16 bg-[white]  dark:text-white dark:bg-black " v-if="project.phases.length">
        <div class="flex w-[80%] m-auto  dark:text-white dark:bg-black">
            <img src="../../img/project_percentage.png" style="width: 30px;height: 30px">
            <h1 class="my-auto font-bold text-light-brown  ">{{ $t('projectPhases') }}</h1>
        </div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3 container mx-auto  dark:text-white dark:bg-black  dark:text-white dark:bg-black " v-if="project.phases">

            <div class="progress  dark:text-white dark:bg-black " v-for="phase in project.phases">


                <div class="  p-5 font-bold  dark:text-white dark:bg-black ">

                    <!--                        <Progress labelProgress="true" labelPosition="outside" :label="$t('achieve_percentage')" :progress="phase.achieve_percentage"></Progress>-->
                    <CircleProgressBar :value="phase?.achieve_percentage " style="color: #213350" :max="100" percentage
                                       colorUnfilled="rgba(25,83,177,1)"
                                       animationDuration="2s"
                                       class=" dark:text-white dark:bg-black"
                                       rounded>

                    </CircleProgressBar>

                    <h5 class="pb-2 text-center mt-4 font-light  dark:text-white dark:bg-black" style="color: #213350">{{
                            phase.name[$i18n.locale]
                        }}</h5>


                </div>
            </div>
        </div>
        <div class="lg:w-[60%] m-auto py-4  dark:text-white dark:bg-black" style="border-bottom: 2px solid black;"></div>
    </section>

    <section id="serves" class="bg-[white]   dark:text-white dark:bg-black py-[3%]" v-if="project?.services?.length" >
        <div class="container  mx-auto">
            <div class="flex">
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon px-1 my-auto" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M904.630857 240.054857c0.950857-9.435429-7.021714-19.382857-16.676571-24.283428L461.531429 2.633143a24.137143 24.137143 0 0 0-21.796572 0L13.531429 215.771429c-15.872 10.386286-13.385143 33.426286-13.385143 35.84V706.56c0 8.411429 4.388571 16.310857 11.702857 20.772571 0 0 417.060571 252.050286 424.228571 255.268572 14.628571 7.241143 23.844571 5.266286 30.72 1.755428L605.622857 904.045714c11.849143-6.948571 12.8-17.481143 11.264-35.693714-1.536-18.139429-17.408-28.013714-29.037714-21.284571-11.702857 6.656-103.497143 61.952-103.497143 61.952V493.568L852.114286 279.405714l38.692571-23.405714c7.68-4.973714 12.726857-11.337143 13.750857-15.945143z m-486.4 663.917714L63.780571 687.908571V290.230857L418.157714 493.714286v410.185143z m32.402286-476.525714L113.517714 236.324571 450.633143 67.876571l337.042286 168.448-337.042286 191.122286z m554.276571 335.872l-189.44 113.737143c-10.605714 7.387429-21.796571-0.877714-21.796571-0.877714-1.024-0.219429-188.635429-112.859429-188.635429-112.859429a18.139429 18.139429 0 0 1-8.850285-15.579428v-203.337143c0-6.582857 3.364571-18.066286 16.822857-23.259429l183.808-101.668571a18.870857 18.870857 0 0 1 16.091428 0l184.027429 101.668571h-1.462857c0.512 0 1.243429 0 1.755428 0.292572l4.754286 2.413714c5.997714 2.852571 11.556571 8.045714 11.556571 15.36v208.457143a18.432 18.432 0 0 1-8.630857 15.652571zM667.209143 540.818286l136.630857 76.726857 138.605714-76.726857L803.84 464.457143 667.209143 540.818286z m163.84 277.942857l139.702857-84.260572V582.802286l-139.702857 79.213714v156.672z m-49.517714-2.486857V662.747429l-136.996572-77.531429v148.48l136.996572 82.651429z"
                            fill="#AF9751"></path>
                    </g>
                </svg>
                <h2 class="text-3xl font-bold text-light-brown  dark:text-white dark:bg-black ">{{ $t("high_level_utility") }}</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-20 gap-5 lg:w-[70%] m-auto py-[3%]">
                <div v-for="service in project.services " style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <img :src="service.image.original_url" style="width: 80px ;height: 80px">
                    <p class="mx-4 text-xl  dark:text-white dark:bg-black"> {{service.title[$i18n.locale]}}</p>
                </div>


            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4  dark:text-white dark:bg-black" style="border-bottom: 2px solid black;"></div>

    </section >


    <!-- gallery section -->


    <!-- utilities section  -->
    <!-- utilities section  will fetch from API-->


    <!-- project models -->
    <section id="modale" class="company-info  dark:text-white dark:bg-black   py-20 pt-16  bg-background-section "
             v-if="project.project_models.length">

        <div class="container mx-auto  dark:text-white dark:bg-black">

            <div class="">

                <div class="d-info h-full flex flex-col justify-center right  dark:text-white dark:bg-black">
                    <div class="flex">
                        <img src="../../img/models_icon.png" style="width: 26px;height: 26px">
                        <h1 class=" my-auto font-bold text-3xl  text-center md:text-start text-[#AF9744]  dark:text-white dark:bg-black">
                            {{ $t('modale') }} </h1>
                    </div>
                    <div
                        class=" [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown  dark:text-white dark:bg-black [&>div>div>ul>li>.text-blue-600]:hover:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown">


                        <tabs variant="underline" v-model="activeTab" class="p-5 text-lg  dark:text-white dark:bg-black">
                            <!-- class appends to content DIV for all tabs -->
                            <tab v-for="model in project.project_models" :name="model.title['en']"
                                 :title="model.title[$i18n.locale]"
                                 class=" [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-12 [&>div]:lg:grid-cols-2 [&>div]:lg:gap-2">
                                <div>
                                    <div class="text mb-5">
                                        <p class="mb-3  dark:text-white dark:bg-black">{{ $t('Land_Area') }}: {{ model.Land_area }}</p>
                                        <p class="mb-3  dark:text-white dark:bg-black">{{ $t('Building_Area') }}: {{ model.building_area }}</p>
                                        <p class="mb-3  dark:text-white dark:bg-black">{{ $t('Floors_Number') }}: {{ model.floors_number }}</p>
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

                                            <p class="text-sm whitespace-nowrap  dark:text-white dark:bg-black">{{ utility.title[$i18n.locale] }}</p>

                                        </div>

                                    </div>

                                </div>

                                <div class="  left">
                                    <Carousel :pictures="getGallery(model.media)"
                                              class="about-us-carousel w-full   [&>div<li<img]:w-full [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1  "/>

                                </div>

                            </tab>

                        </tabs>


                    </div>

                </div>

            </div>
        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>


    <section id="images" class="py-12 pb-16 bg-[white]  dark:text-white dark:bg-black" v-if="project.gallery != '' && project.gallery">
        <div class="container mx-auto">
            <div class=" ">
                <div class="mb-5">
                    <div
                        class="lg:w-[50%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start ">
                        <!--                    <p class="text-dark-brown text-4xl">{{ $t('gallary_project') }}</p>-->
                        <div class="flex  dark:text-white dark:bg-black">
                            <svg class="my-auto" width="36px" height="36px" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" fill="none">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path stroke="#AF9751" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M3 19v-9a1 1 0 011-1h11a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1zm0 0l4.293-4.293a1 1 0 011.414 0L14 20M7 6V5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-1m-7-4v.01"></path>
                                </g>
                            </svg>
                            <p class="text-dark-brown text-4xl right  dark:text-white dark:bg-black ">
                                {{ $t("Image") }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex  w-[100%] lg:w-[85%]  dark:text-white dark:bg-black  m-auto " id="carsoul-project">
                    <div class=" w-[1200px]  dark:text-white dark:bg-black  m-auto">
                        <Carousel class="w-full h-full [&>div]:md:h-[600px]  [&>div]:h-[417px] [&>div>div>img]:h-[417px] [&>div>div>img]:md:h-[600px]" :pictures="getGallery(project.gallery)"/>
                    </div>
                </div>

            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4  dark:text-white dark:bg-black" style=" border-bottom: 2px solid black;"></div>
    </section>


    <!-- Video -->

    <section id="video" class=" bg-[white]  dark:text-white dark:bg-black" v-if="videoo!='' && videoo">
        <div class="container lg:w-[75%] m-auto  dark:text-white dark:bg-black">
            <div class="flex mx-auto  mb-10  dark:text-white dark:bg-black">

                <svg class="my-auto px-1" width="36px" height="36px" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
                              stroke="#AF9751" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M2.52002 7.11011H21.48" stroke="#AF9751" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                        <path d="M8.52002 2.11011V6.97011" stroke="#AF9751" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                        <path d="M15.48 2.11011V6.52011" stroke="#AF9751" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                        <path
                            d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z"
                            stroke="#AF9751" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </g>
                </svg>
                <div class="my-auto  dark:text-white dark:bg-black  text-3xl text-light-brown"><p> {{ $t("video") }}</p></div>
            </div>
            <div class="   dark:text-white dark:bg-black flex justify-center mx-auto">
                <!--            <iframe class="mx-auto h-[80%] w-[85%] rounded-xl"-->
                <!--                    :src="videoo">-->
                <!--            </iframe>-->
                <div class=" max-w-sm w-full    dark:text-white dark:bg-black">
               <div class="grid grid-cols-1  dark:text-white dark:bg-black" v-for="por in project.video ">
                <div class=" mt-4 rounded-md  dark:text-white dark:bg-black  "  v-html="por.url">
                </div>
               </div>
            </div>

                    <div   class="mx-auto   rounded-xl"></div>

            </div>
            <div class="lg:w-[60%] m-auto py-4  dark:text-white dark:bg-black" style="border-bottom: 2px solid black;"></div>
        </div>
    </section>
<div class=" dark:text-white dark:bg-black"  v-if=" project.video_url!=null">
 <section id="video3d" class="py-8 bg-[white] dark:text-white dark:bg-black" v-if="project.project_video && project.project_video.length && project.project_video[0].url">
    <div class="container lg:w-[75%] mx-auto">
      <div class="flex mx-auto mb-5">
        <img src="../../img/360_video.jpg" style="width: 26px;height: 26px">
        <div class="my-auto text-3xl text-light-brown"><p>{{ $t("project360") }}</p></div>
      </div>

      <div class="grid grid-cols-1" v-for="vid in project.project_video" :key="vid.id">
        <div class="relative pt-[56.25%] rounded-md overflow-hidden shadow-lg">
          <iframe
            :src="getYouTubeEmbedUrl(vid.url)"
            class="absolute top-0 left-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
    <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
  </section>

  <!-- Fallback for video_url (external link) -->
  <section v-else-if="project.video_url" id="video3d" class="py-8 bg-[white] dark:text-white dark:bg-black">
    <div class="container lg:w-[75%] mx-auto">
      <div class="flex mx-auto mb-5">
        <img src="../../img/360_video.jpg" style="width: 26px;height: 26px">
        <div class="my-auto text-3xl text-light-brown"><p>{{ $t("project360") }}</p></div>
      </div>
      <a :href="project.video_url" target="_blank" class="block">
        <img :src="'https://ladun.sa/storage/' + project.video_img" class="w-full rounded-lg shadow-lg" alt="360 Video">
      </a>
    </div>
    <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
  </section>
</div>
    <!-- end Video -->
    <!-- location -->
    <section class="company-info   dark:text-white dark:bg-black  py-20 bg-[white]" id="location" v-if="project.location">

        <div class=" container lg:w-[75%] mx-auto">

            <div class="  m-auto">

                <div class="d-info h-full flex flex-col justify-center right ">
                    <div class="flex">
                        <svg width="34px" height="34px" viewBox="-4 0 32 32" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"><title>location</title>
                                <desc>Created with Sketch Beta.</desc>
                                <defs></defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                   sketch:type="MSPage">
                                    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup"
                                       transform="translate(-106.000000, -413.000000)" fill="#AF9751">
                                        <path
                                            d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                                            id="location" sketch:type="MSShapeGroup"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h1 class="font-bold text-xl mb-4 px-2 text-center md:text-start">{{ $t('Location') }} </h1>
                    </div>
                    <p class="mb-12 text-lg text-dark-brown" v-if="project.location">
                        {{ project.location.city[$i18n.locale] }}

                    </p>
                    <!-- <p class="flex " v-if="project.location.address">
                        <MapPinIcon class="w-6 h-6 text-black"/>
                        {{ project.location.address[$i18n.locale] }}
                    </p> -->

                </div>

                <div class="img-company-info w-full m-auto left">

                    <iframe class="w-full h-[350px]"
                            :src="mapLink"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <!--                    map location  langtud and  -->
                </div>


            </div>
        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>

    </section>
    <section class=" dark:text-white dark:bg-black company-info  bg-[white]" id="downloads" v-if="project.downloads.length">

        <div class="container mx-auto w-[85%]">
            <div class="flex pb-[5%]">
                <p class="text-2xl my-auto px-2 text-dark-brown">{{ $t("Download_Project_Files") }}</p>
                <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                            stroke="#C4A94C" stroke-width="1.5" stroke-linecap="round"></path>
                        <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#C4A94C" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
            <div class="lg:w-[60%] grid grid-cols-1 lg:grid-cols-3 m-auto">
                <a :href="`/storage/${download.project_attachment}`" target="_blank" class="flex"
                   v-for="download in project.downloads">
                    <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                                stroke="#C4A94C" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#C4A94C" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <p class="text-2xl p-2 font-bold my-auto">{{ download.name[$i18n.locale] }}</p>
                </a>

            </div>

        </div>

        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>

    <section class=" company-info  dark:text-white dark:bg-black  bg-[white] mb-5" id="partner"
             v-if="project.partner_image != '' && project.partner_image">

        <div class="container w-[85%]  mx-auto mt-8">
            <div class="flex pb-[5%]">
                <img src="../../img/Group.svg" style="width: 40px;height: 40px">

                <p class="text-2xl my-auto px-2 text-dark-brown ">{{ $t("partners") }}</p>

            </div>
            <div class="grid grid-cols-1 gap-10 md:grid-cols-3 container mx-auto ">
                <img v-for="image in  getGallery(project.partner_image) " :src="image.src"
                     style="width: 100%;height:200px">


            </div>


        </div>

        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>

    <!-- ask_us -->
    <section class="text-center py-8  dark:text-white dark:bg-black" id="ask_us">
        <div class="container mx-auto lg:w-[75%]">
            <h2 class="mb-5">{{ $t('inquiriesNotes') }}</h2>
            <div
                class="flex rounded-3xl justify-between gap-x-14 flex-wrap md:flex-nowrap  my-5 w- pt-5"
            >
                <div class="flex-auto  right">
                    <div class="bg-[#57565B] rounded- mb-14 pt-12 rounded-xl  m-auto">
                        <h3 class="text-center mb-5 text-white">{{ $t('pleaseFill') }}</h3>

                        <!--                              action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"-->
                        <!--                              method="POST"-->
                        <form @submit.prevent="submit" class="grid gap-y-10 mx-5"

                        >

                            <div class=" grid grid-cols-1 md:grid-cols-2 gap-5 justify-center gap-x-5">
                                <!-- Object Of Interest -->
                                <!-- This field should not appear to the user and shall be filled automatically -->
                                <!-- choose your inquiry -->

                                <input
                                    required
                                    type="text"
                                    id="first_name" maxlength="40" name="first_name"
                                    aria-describedby="helper-text-explanation"
                                    v-model="first_name"
                                    class="rounded-3xl w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('FirstName')"
                                />
                                <input
                                    required
                                    type="text"
                                    id="last_name" maxlength="80" name="last_name"
                                    aria-describedby="helper-text-explanation"
                                    v-model="last_name"
                                    class="rounded-3xl w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('LastName')"
                                />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center gap-x-5">
                                <input

                                    type="text"
                                    id="mobile" maxlength="40" name="mobile"
                                    v-model="mobile"
                                    aria-describedby="helper-text-explanation"
                                    class="w-full  bg-gray-50 border rounded-3xl border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('PhoneNumber')"
                                />
                                <input

                                    type="email"
                                    id="email" maxlength="80" name="email"
                                    aria-describedby="helper-text-explanation"
                                    v-model="email"
                                    class="rounded-3xl w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('Email')"
                                />

                            </div>
                            <div class="grid hidden  grid-cols-1 md:grid-cols-2 gap-5 justify-center gap-x-5">

                                <select
                                    class="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    v-model="status"
                                >
                                    <option value="Buy"> {{ $t('ownership') }}</option>
                                    <option value="Rent"> {{ $t('rent') }}</option>
                                    <option value="Other"> {{ $t('other') }}</option>


                                </select>

                                <select
                                    class="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    v-model="region"
                                >

                                <option value="Buy-Eastern Region">{{$t('Buy_Eastern_Region')}} </option>
                                <option value="Buy-Middle Region">{{$t('Buy_Middle_Region')}} </option>
                                <option value="Buy-Western Region">{{$t('Buy_Western_Region')}} </option>
                                <option value="Buy-Northern Region">{{$t('Buy_Eastern_Region')}} </option>
                                <option value="Rent-Eastern Region">{{$t('Rent_Eastern_Region')}} </option>
                                <option value="Rent-Middle Region">{{$t('Rent_Middle_Region')}} </option>
                                <option value="Rent-Western Region">{{$t('Rent_Western_Region')}} </option>
                                <option value="Rent-Northern Region">{{$t('Rent_Eastern_Region')}} </option>


                                </select>

                            </div>
                            <div class="grid  grid-cols-1 md:grid-cols-2 gap-5 justify-center gap-x-5">
                            <input

                                    type="text"
                                    readonly
                                    id="project_name" maxlength="80" name="project_name"
                                    aria-describedby="helper-text-explanation"
                                    v-model="project_name"
                                    class="rounded-3xl w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder=" project.title[$i18n.locale]"
                                />
                            </div>

                            <button
                                type="submit"
                                class="bg-dark-brown mb-[1%] py-2 m-auto text-white w-[45%] rounded-3xl"
                            >
                                {{ $t("sendNow") }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <p dir="">
                {{ $t('ifYouFaceAProplem') }}
                <router-link to="/contact-us"><a href="#" class="text-dark-brown">{{ $t('sendUsNow') }}</a>
                </router-link>
            </p>
        </div>

    </section>
<div class="toast-container">
  <Toast
    v-for="toast in toasts"
    :key="toast.id"
    :message="toast.message"
    :description="toast.description"
    :type="toast.type"
    :position="toast.position"
    :duration="toast.duration"
    @close="removeToast(toast.id)"
  />
</div>

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
import Toast from '../components/Toast.vue'


import {CircleProgressBar} from 'circle-progress.vue';

export default {

    components: {
        Toast,
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
            first_name: "",
            last_name: "",
            mobile: "",

            email: "",
            region: "Eastern",
            status: "Buy",
            videoo: "",
            recompute: 0,
            rephases: [],
            flag: 1,
            toasts: []

        }
    },
    methods: {
        getGallery(gallery) {

            if (gallery) {

                console.log(gallery)
                return Object.values(gallery).map((image) => {
                    return {
                        src: image?.original_url,
                        alt: image.name
                    }
                })
            } else {
                return [];
            }

        },
       showToast(message, type = 'info', description = '', duration = 3000) {
            const id = Date.now()
            this.toasts.push({
                id,
                message,
                description,
                type,
                position: 'top-right',
                duration
            })
            },
    removeToast(id) {
      this.toasts = this.toasts.filter(toast => toast.id !== id)
    },
    submit() {
      axios.post(`/api/connect`, {
        "first_name": this.first_name,
        "last_name": this.last_name,
        "phone": this.mobile,
        "email": this.email,
        "message": this.project.title[this.$i18n.locale],
      })
      .then(res => {
        // Success toast
        this.showToast(
          this.$t('messageSentSuccessfully'),
          'success',
          this.$t('weWillContactYouSoon')
        )

        // Reset form
        this.first_name = ''
        this.last_name = ''
        this.mobile = ''
        this.email = ''
        this.status = 'Buy'
        this.region = 'Eastern'
      })
      .catch((error) => {
        console.log(error)
        // Error toast
        this.showToast(
          this.$t('errorSendingMessage') || 'Error sending message',
          'error',
          this.$t('pleaseTryAgain') || 'Please try again later'
        )
      })
    }


    },
    computed: {
        locale() {
            return this.$i18n.locale
        },
        phases() {
            if (this.recompute >= 3 && this.flag) {
                this.flag = 0
                let i = 0
                this.project.phases.forEach((elem) => {
                    elem.achieve_percentage = this.rephases[i]
                    i++
                })
                console.log(this.rephases)
            }

            return this.project.phases
        },
        mapLink() {
            return `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d226.5815642852766!2d${this.project.location.Longitude}!3d${this.project.location.Latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1711451887994!5m2!1sar!2seg`

        }
    },
    beforeMount() {


        axios.get(`/api/projects/${this.$route.params.id}`)
            .then(res => {
                // this.project = Vue.util.extend({}, res.data.data)
                this.project = res.data.data
                 console.log(this.project.project_video[0].url)
                this.videoo = this.project.video

                console.log(this.project.video)
                this.activeTab = this.project?.project_models[0]?.title['en']

                this.project.phases.forEach((elem) => {
                    this.rephases.push(elem.achieve_percentage)
                })
                this.project.phases.forEach((elem) => {
                    elem.achieve_percentage = 0


                })
                console.log(this.rephases)
            })
            .catch((error) => console.log(error))

    },
    mounted() {


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
            let progress = document.getElementsByClassName('progress')


            // if (window.scrollY >= utility.offsetTop - 210) {
            //
            //     if (this.locale == 'en') {
            //         utility.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow')
            //     } else {
            //         utility.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow')
            //     }
            //
            //
            // }

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
            console.log(progress)


            for (let i = 0; i < progress.length; i++) {
                console.log(progress[i].offsetTop)
                if (window.scrollY >= progress[i].offsetTop - 710) {
                    this.recompute++;

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

.carousel img {
    width: 100%;
}


</style>
