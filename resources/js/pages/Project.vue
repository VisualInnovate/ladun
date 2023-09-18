<template>
    <Navbar class=" fixed z-50 w-full" :class="{ 'bg-black': !top}"/>
    <div class="relative img-banner-slot h-[50vh] md:h-auto">
        <div class=" overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div>
        <img class="h-[50vh] md:h-auto w-[100%]" :src="getGallery(project.banner)[0]?.src" style="height: 400px">

        <div
            class="z-40 text-white absolute top-[100%] m-auto -translate-y-[100%] rtl:right-[3%] ltr:left-[20%] -translate-x-[100%] text-justify">

            <img class="animate__animated animate__backInDown max-w-[170px] "
                 id="logo-project"
                 v-if="project.logo"
                 :src="project.logo.original_url">

        </div>

    </div>
    <section class="  bg-background-section" id="project">

        <div class="container mx-auto">

            <div class="lg:w-[90%]">

                <div class=" h-full justify-between items-center py-4 flex"
                >
                    <div class="  mx-auto px-4 ltr:border-l-2 rtl:border-r-2 border-dark-brown">

                        <router-link to="/projects"><p class="text-2xl font-bold truncate" v-if="project.department">
                            {{ project.department.title[$i18n.locale] }}</p></router-link>
                        <h1 class=" text-3xl text-[#AF9751] truncate" v-if="project.title">
                            {{ project.title[$i18n.locale] }}</h1>
                        <p v-if="project.number" class="text-lg">{{ $t('certified') }}</p>
                        <p class=" w-[90%] mb-12 text-sm px-2 py-4  " v-if="project.number"
                           v-html="project.number"></p>
                    </div>
                    <p class=" w-[90%] mb-12 text-xl px-2 py-4  h-full flex items-center" v-if="project.text"
                       v-html="project.text[$i18n.locale]"></p>


                </div>


            </div>
        </div>


    </section>


    <section class=" text-sm m-auto ">
        <div class="container mx-auto pb-4">
            <div class=" w-full  m-auto ">
                <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 mx-auto items-center ">
                    <div class="mx-auto mb-3 md:mb-0 flex" v-if="project.phases.length">
                        <img src="../../img/project_percentage.png" style="width: 28px;height: 28px">


                        <a class="   relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#project_phases',
                            offset: -128
                        }">
                            {{ $t('project') }}
                        </a>

                    </div>

                    <div class=" mx-auto mb-3 md:mb-0 flex ">
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
                    <div class="mx-auto mb-3 md:mb-0 flex truncate" v-if="project.phases.length">
                        <img src="../../img/models_icon.png" style="width: 26px;height: 26px">
                        <a class="  truncate relative inline-block after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#modale',
                            offset: -128
                        }">
                            {{ $t('modale') }}
                        </a>
                    </div>
                    <div class="mx-auto mb-3 md:mb-0 flex" v-if="project.gallery">
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
                    <div class="mx-auto mb-3 md:mb-0 flex" v-if="videoo!='' && videoo">
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

                    <div class="mx-auto  mb-3 md:mb-0 flex truncate"
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

                    <div class="mx-auto  mb-3 md:mb-0 flex" v-if="project.location">
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


                    <div class="mx-auto  mb-3 md:mb-0 flex" v-if="project.downloads.length">
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


                    <div class="mx-auto  mb-3 md:mb-0 flex" v-if="project.partner_image != '' && project.partner_image">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55.415 55.415" xml:space="preserve"
                             width="27px" height="27px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <g> <path style="fill:#F8CF26;"
                                                                   d="M13.294,25.562l-0.672-0.672c-0.589-0.59-0.914-1.373-0.914-2.207c0-1.684,1.342-3.051,3.011-3.11 c0.058-1.632,1.368-2.942,3-3c0.058-1.632,1.368-2.942,3-3c0.043-1.223,0.787-2.121,1.847-2.593l-1.272-1.126h-1.172L9.708,19.976 v5.172l2,2L13.294,25.562z"></path>
                                <path style="fill:#66CEDB;"
                                      d="M14.708,4.976l-9.586,9.586l3.586,3.585l9.586-9.586L14.708,4.976z M12,9.854l2-2l1.414,1.414l-2,2 L12,9.854z"></path>
                                <path style="fill:#66CEDB;"
                                      d="M17.708,47.147l3.586-3.586l-9.586-9.585l-3.586,3.586L17.708,47.147z M16.415,40.854l2,2 l-1.414,1.414l-2-2L16.415,40.854z"></path>
                                <polygon style="fill:#F8CF26;"
                                         points="41.708,23.976 31.293,13.854 28.122,13.854 41.708,27.147 "></polygon>
                                <path style="fill:#66CEDB;"
                                      d="M33.122,42.562l3.586,3.585l9.586-9.586l-3.586-3.585L33.122,42.562z M41.415,39.269L40,37.854l2-2 l1.414,1.414L41.415,39.269z"></path>
                                <path style="fill:#F8CF26;"
                                      d="M20.708,36.562v-3.586l-6-6l-2,2v3.172l10.414,10.706h3.172L21,37.415 C20.813,37.227,20.708,36.827,20.708,36.562z"></path>
                                <path style="fill:#F8CF26;"
                                      d="M30.415,21.854L29,23.268l-7.379-7.379c-0.212-0.211-0.493-0.328-0.793-0.328 c-0.618,0-1.121,0.503-1.121,1.121c0,0.3,0.117,0.581,0.328,0.793l7.379,7.379L26,26.268l-7.379-7.379 c-0.212-0.211-0.493-0.328-0.793-0.328c-0.618,0-1.121,0.503-1.121,1.121c0,0.3,0.117,0.581,0.328,0.793l7.379,7.379L23,29.268 l-7.379-7.379c-0.212-0.211-0.493-0.328-0.793-0.328c-0.618,0-1.121,0.503-1.121,1.121c0,0.3,0.117,0.581,0.328,0.793 l11.379,11.379L24,36.268l-1.293-1.292v1.172l5.414,5.706h3.172l10.414-10.707v-1.172L25,13.268l-0.379-0.379 c-0.212-0.211-0.493-0.328-0.793-0.328c-0.618,0-1.121,0.503-1.121,1.121c0,0.3,0.117,0.581,0.328,0.793L30.415,21.854z"></path>
                                <path style="fill:#66CEDB;"
                                      d="M46.293,18.562l-9.586-9.586l-3.586,3.586l9.586,9.585L46.293,18.562z M38,15.268l-2-2l1.414-1.414 l2,2L38,15.268z"></path>
                                <g> <path
                                    d="M43.708,29.562c0-0.265-0.106-0.52-0.293-0.707l-0.293-0.293l0.293-0.293c0.187-0.188,0.293-0.442,0.293-0.707v-3.586 l11.707-11.707L54,10.854l-6.293,6.293l-9.586-9.586l6.293-6.293L43,0L31.293,11.854h-3.586c-0.265,0-0.52-0.041-0.707,0.147 l-0.293,0.22l-0.293-0.329l-0.379-0.397l-3.621-3.484c-0.188-0.189-0.442-0.157-0.707-0.157h-1.586l-7.707-7.853L11,1.342 l2.293,2.256l-9.586,9.568l-2.293-2.302L0,12.273l7.707,7.703v5.586c0,0.265,0.105,0.519,0.293,0.707l2.707,2.707v3.172 L0.001,42.854l1.414,1.414l5.293-5.292l9.586,9.586l-5.293,5.292l1.414,1.56l10.707-10.56h3.586c0.265,0,0.519-0.105,0.707-0.293 l0.707-0.707h3.172l11.707,11.561l1.414-1.487l-6.293-6.33l9.586-9.604L54,44.278l1.414-1.419L43.708,31.147V29.562z M36.708,8.976l9.586,9.586l-3.586,3.585l-9.586-9.586L36.708,8.976z M31.293,13.854l10.414,10.122v3.172L28.122,13.854H31.293z M41.708,29.976v1.172L31.293,41.854h-3.172l-5.414-5.707v-1.172L24,36.268l1.414-1.414L14.035,23.476 c-0.211-0.212-0.328-0.494-0.328-0.793c0-0.618,0.503-1.121,1.121-1.121c0.3,0,0.581,0.117,0.793,0.328L23,29.269l1.414-1.415 l-7.379-7.379c-0.211-0.211-0.328-0.493-0.328-0.792c0-0.618,0.503-1.121,1.121-1.121c0.3,0,0.581,0.117,0.793,0.328L26,26.269 l1.414-1.415l-7.379-7.379c-0.211-0.211-0.328-0.493-0.328-0.792c0-0.618,0.503-1.121,1.121-1.121c0.3,0,0.581,0.117,0.793,0.328 L29,23.269l1.414-1.415l-7.379-7.379c-0.211-0.211-0.328-0.493-0.328-0.792c0-0.618,0.503-1.121,1.121-1.121 c0.3,0,0.581,0.117,0.793,0.328L25,13.269L41.708,29.976z M14.708,4.976l3.586,3.586l-9.586,9.585l-3.586-3.586L14.708,4.976z M9.708,19.976L20.122,9.854h1.172l1.272,1.126c-1.06,0.472-1.804,1.443-1.847,2.666c-1.632,0.058-2.942,1.332-3,2.963 c-1.632,0.058-2.942,1.35-3,2.982c-1.669,0.059-3.011,1.417-3.011,3.101c0,0.834,0.325,1.613,0.914,2.202l0.672,0.67l-1.586,1.585 l-2-2.001V19.976z M17.708,47.147l-9.586-9.586l3.586-3.585l9.586,9.586L17.708,47.147z M23.122,42.854L12.708,32.147v-3.172l2-2 l6,6v3.586c0,0.265,0.105,0.666,0.293,0.853l5.293,5.44C26.294,42.854,23.122,42.854,23.122,42.854z M36.708,46.147l-3.586-3.586 l9.586-9.585l3.586,3.586L36.708,46.147z"></path>
                                    <rect x="40.294" y="36.562"
                                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.3442 40.4935)"
                                          width="2.828" height="2"></rect>
                                    <rect x="15.707" y="41.147"
                                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -25.2021 24.2795)" width="2"
                                          height="2.828"></rect>
                                    <rect x="12.293" y="8.562"
                                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.7466 12.4933)" width="2.828"
                                          height="2"></rect>
                                    <rect x="36.707" y="12.148"
                                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.4547 30.635)" width="2"
                                          height="2.828"></rect> </g> </g> </g></svg>
                        <a class="relative inline-block px-1 after:content-[''] after:absolute after:w-full after:h-[1.5px]  font-normal leading-6 after:rounded-lg after:bg-black after:-bottom-2 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100"
                           href="#" v-scroll-to="{
                            el: '#partner',
                            offset: -128
                        }">
                            {{ $t('partners') }}
                        </a>
                    </div>

                    <a
                        class="mx-auto button bg-light-brown text-white rounded-2xl w-full text-center py-2 hover:bg-dark-brown hover:shadow"
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


    <section class="genaral-info bg-white lg:p-[5%]">
        <div class="container mx-auto ">
            <div class="grid grid-cols-1  gap-12 md:grid-cols-2 md:gap-20  lg:grid-cols-4 lg:gap-16 text-white p-3">

                <div v-if="project.land_area && project.land_area!=0"

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
                <div v-if="project.building_area && project.building_area!=0"
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
                <div v-if="project.units_number && project.units_number!=0"
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
                <div v-if="project.models_number && project.models_number!=0"
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

                <div v-if="project.facilities && project.facilities!=0"
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

                <div v-if="project.commercial && project.commercial!=0"
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

                <div v-if="project.investment && project.investment!=0"

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

                <div v-if="project.government && project.government!=0"
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

                <div v-if="project.government && project.government!=0"
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

                <div v-if="project.gardens && project.gardens!=0"
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

                <div v-if="project.mosque && project.mosque!=0"
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
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>


    <!-- navigation -->


    <!-- project section -->
    <!-- project phases section -->
    <section id="project_phases" class="py-16 bg-[white]" v-if="project.phases.length">
        <div class="flex w-[80%] m-auto">
            <img src="../../img/project_percentage.png" style="width: 30px;height: 30px">
            <h1 class="my-auto font-bold text-light-brown  ">{{ $t('projectPhases') }}</h1>
        </div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3 container mx-auto " v-if="project.phases">

            <div class=" progress " v-for="phase in phases">


                <div class="  p-5 font-bold ">

                    <!--                        <Progress labelProgress="true" labelPosition="outside" :label="$t('achieve_percentage')" :progress="phase.achieve_percentage"></Progress>-->
                    <CircleProgressBar :value="phase.achieve_percentage " style="color: #213350" :max="100" percentage
                                       colorUnfilled="rgba(25,83,177,1)"
                                       animationDuration="2s"
                                       rounded>
                    </CircleProgressBar>

                    <h5 class="pb-2 text-center mt-4 font-light" style="color: #213350">{{
                            phase.name[$i18n.locale]
                        }}</h5>


                </div>
            </div>
        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>

    <section id="serves" class="bg-[white]  py-[3%]">
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
                <h2 class="text-3xl font-bold text-light-brown ">{{ $t("high_level_utility") }}</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-20 gap-5 lg:w-[70%] m-auto py-[3%]">
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M7.97,2.242l-5,20A1,1,0,0,1,2,23a1.025,1.025,0,0,1-.244-.03,1,1,0,0,1-.727-1.212l5-20a1,1,0,1,1,1.94.484Zm10-.484a1,1,0,1,0-1.94.484l5,20A1,1,0,0,0,22,23a1.017,1.017,0,0,0,.243-.03,1,1,0,0,0,.728-1.212ZM12,1a1,1,0,0,0-1,1V6a1,1,0,0,0,2,0V2A1,1,0,0,0,12,1Zm0,7.912a1,1,0,0,0-1,1v4.176a1,1,0,1,0,2,0V9.912A1,1,0,0,0,12,8.912ZM12,17a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V18A1,1,0,0,0,12,17Z"></path>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl">{{ $t('roads') }} <br>{{ $t('paved') }}</p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                         fill="#000000" class="bi bi-signpost-split">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"></path>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl"> {{ $t('sidewalks') }} <br>{{ $t('roads') }}</p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg width="64px" height="64px" viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M810.946385 398.138063V127.312332L763.491287 0H399.541305l-45.158883 127.567467v345.069997h76.54048v115.065854h0.127568v121.444229c19.262687 4.847564 37.75997 13.394584 54.34374 25.896195l28.957815 21.941605v-43.500507h83.811826c42.862669-15.308096 91.338306-10.715667 130.88422 14.032422V587.703318h78.198857v151.550151l5.485401-4.209727c23.089711-17.476743 50.134014-27.427005 77.816155-29.850787v-117.489637h109.197751V398.138063h-188.79985zM453.629911 76.54048h256.79331l19.517823 52.302661H435.005061L453.629911 76.54048z m-22.834576 319.684071V203.980379h303.61057v192.244172H641.664357v-104.73289h-113.79018v104.73289h-97.078842z m214.951181 284.347883h-131.394491v-30.871327h131.394491v30.871327z m0-63.783733h-131.394491v-29.085383h131.394491v29.085383z m277.459239-105.625862H507.463382V474.550976h415.742373v36.611863zM776.375601 1023.984054a112.004236 112.004236 0 0 1-67.865892-22.707009l-37.887537-28.70268c-12.756747-9.695127-30.488625-9.56756-43.117804 0l-37.887538 28.70268c-39.928617 30.23349-95.6756 30.361057-135.604217 0l-37.887537-28.70268c-12.756747-9.695127-30.488625-9.56756-43.117804 0l-37.887537 28.70268c-39.928617 30.23349-95.6756 30.361057-135.604217 0l-37.887538-28.70268c-12.756747-9.56756-30.488625-9.56756-43.117804 0l-49.496177 37.504835a38.244726 38.244726 0 1 1-46.179422-60.977249l49.496177-37.504835c39.928617-30.23349 95.803167-30.23349 135.604216 0l37.887538 28.70268c12.756747 9.56756 30.488625 9.56756 43.117804 0l37.887537-28.70268c39.928617-30.23349 95.6756-30.361057 135.604217 0l37.887538 28.70268c12.756747 9.56756 30.488625 9.56756 43.117804 0l37.887537-28.70268c39.928617-30.23349 95.6756-30.361057 135.604217 0l37.887538 28.70268c12.756747 9.56756 30.488625 9.56756 43.117803 0l37.887538-28.70268c39.928617-30.23349 95.6756-30.361057 135.604217 0l37.887537 28.70268a38.244726 38.244726 0 1 1-46.179422 60.977249l-37.887538-28.70268c-12.756747-9.56756-30.488625-9.56756-43.117804 0l-37.887537 28.70268a112.259371 112.259371 0 0 1-67.865893 22.707009zM776.375601 878.046872a112.004236 112.004236 0 0 1-67.865892-22.707009l-37.887537-28.70268c-12.756747-9.695127-30.488625-9.56756-43.117804 0l-37.887538 28.70268c-39.928617 30.23349-95.6756 30.361057-135.604217 0l-37.887537-28.70268c-12.756747-9.695127-30.488625-9.56756-43.117804 0l-37.887537 28.70268c-39.928617 30.23349-95.6756 30.361057-135.604217 0l-37.887538-28.70268c-12.756747-9.56756-30.488625-9.56756-43.117804 0l-49.496177 37.504835a38.244726 38.244726 0 1 1-46.179422-60.977249l49.496177-37.504835c39.928617-30.23349 95.6756-30.361057 135.604216 0l37.887538 28.70268c12.756747 9.56756 30.488625 9.56756 43.117804 0l37.887537-28.70268c39.928617-30.23349 95.6756-30.361057 135.604217 0l37.887538 28.70268c12.756747 9.56756 30.488625 9.56756 43.117804 0l37.887537-28.70268c39.928617-30.23349 95.6756-30.361057 135.604217 0l37.887538 28.70268c12.756747 9.56756 30.488625 9.56756 43.117803 0l37.887538-28.70268c39.928617-30.23349 95.6756-30.361057 135.604217 0l37.887537 28.70268a38.244726 38.244726 0 1 1-46.179422 60.977249l-37.887538-28.70268c-12.756747-9.56756-30.488625-9.56756-43.117804 0l-37.887537 28.70268a112.259371 112.259371 0 0 1-67.865893 22.707009zM179.870128 741.294548C80.622639 741.294548 0 660.671909 0 561.42442c0-17.221608 0-69.651837 86.10804-210.231185l93.762088-153.208527 93.762088 153.208527c86.10804 140.706916 86.10804 193.137144 86.10804 210.231185 0 99.247489-80.750206 179.870128-179.870128 179.870128z m0-396.607253l-28.447545 46.434557C83.811826 501.467711 76.54048 547.009297 76.54048 561.42442c0 56.89509 46.30699 103.329648 103.329648 103.329648s103.329648-46.30699 103.329648-103.329648c0-14.415124-7.271346-59.956709-74.882103-170.302568l-28.447545-46.434557zM220.436582 592.16818m-28.319977 0a28.319978 28.319978 0 1 0 56.639955 0 28.319978 28.319978 0 1 0-56.639955 0ZM138.538269 563.97577m-28.319978 0a28.319978 28.319978 0 1 0 56.639955 0 28.319978 28.319978 0 1 0-56.639955 0ZM192.116605 494.834203m-28.319978 0a28.319978 28.319978 0 1 0 56.639955 0 28.319978 28.319978 0 1 0-56.639955 0Z"></path>
                        </g>
                    </svg>

                    <p v-if="$i18n.locale == 'en' " class="mx-4 text-xl">{{ $t('sanitation') }} </p>
                    <p v-if="$i18n.locale == 'ar' " class="mx-4 text-xl">صرف <br>صحي</p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><title>network_3_round [#1084]</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -3399.000000)"
                                   fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path
                                            d="M173,3248 L181,3248 C181.552,3248 182,3248.448 182,3249 C182,3249.552 181.552,3250 181,3250 L173,3250 C172.448,3250 172,3249.552 172,3249 C172,3248.448 172.448,3248 173,3248 L173,3248 Z M173,3255 L181,3255 C181.552,3255 182,3255.448 182,3256 C182,3256.552 181.552,3257 181,3257 L173,3257 C172.448,3257 172,3256.552 172,3256 C172,3255.448 172.448,3255 173,3255 L173,3255 Z M173,3241 L181,3241 C181.552,3241 182,3241.448 182,3242 C182,3242.552 181.552,3243 181,3243 L173,3243 C172.448,3243 172,3242.552 172,3242 C172,3241.448 172.448,3241 173,3241 L173,3241 Z M170,3243 C170,3244.105 170.895,3245 172,3245 L182,3245 C183.105,3245 184,3244.105 184,3243 L184,3241 C184,3239.895 183.105,3239 182,3239 L172,3239 C170.895,3239 170,3239.895 170,3241 L166,3241 L166,3239 L164,3239 L164,3254.999 C164,3256.104 164.896,3257 166.001,3257 L166.219,3257 L170,3257 C170,3258.105 170.895,3259 172,3259 L182,3259 C183.105,3259 184,3258.105 184,3257 L184,3255 C184,3253.895 183.105,3253 182,3253 L172,3253 C170.895,3253 170,3253.895 170,3255 L166.996,3255 C166.446,3255 166,3254.554 166,3254.004 L166,3250 L170,3250 C170,3251.105 170.895,3252 172,3252 L182,3252 C183.105,3252 184,3251.105 184,3250 L184,3248 C184,3246.895 183.105,3246 182,3246 L172,3246 C170.895,3246 170,3246.895 170,3248 L166,3248 L166,3243 L170,3243 Z"
                                            id="network_3_round-[#1084]"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl">{{ $t('network') }} <br> {{ $t('fiber') }}</p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg fill="#000000" width="64px" height="64px" viewBox="0 0 32 32" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><title>battery-negative</title>
                            <path
                                d="M12.563 1c-0.937 0-1.25 0.211-1.25 1.25v0.937h-2.813c-1.847 0-2.187 0.341-2.187 2.187v23.438c0 1.847 0.341 2.187 2.187 2.187h15c1.847 0 2.187-0.341 2.187-2.187v-23.438c0-1.847-0.341-2.187-2.187-2.187h-2.813v-0.937c0-1.038-0.312-1.25-1.25-1.25h-6.875zM8.5 7.563c0-2.5-0.312-2.187 2.187-2.187 1.25 0 9.688 0 10.625 0 2.5 0 2.187-0.312 2.187 2.187 0 1.25 0 17.813 0 19.063 0 2.5 0.312 2.187-2.187 2.187-1.25 0-9.375 0-10.625 0-2.5 0-2.187 0.312-2.187-2.187 0-1.251 0-17.813 0-19.063zM10.687 14.75h10.625c0.345 0 0.625 0.28 0.625 0.625v3.125c0 0.345-0.28 0.625-0.625 0.625h-10.625c-0.345 0-0.625-0.28-0.625-0.625v-3.125c0-0.345 0.28-0.625 0.625-0.625z"></path>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl">{{ $t('network') }} <br>{{ $t('electric') }}</p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M12 10V11.5M12 14H12.01M10 16.584V18.9996C10 20.1042 10.8954 20.9996 12 20.9996C13.1046 20.9996 14 20.1042 14 18.9996L14 16.584M12 3V4M18.3643 5.63574L17.6572 6.34285M5.63574 5.63574L6.34285 6.34285M4 12H3M21 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl">{{ $t('network') }} <br>{{ $t('lighting') }}</p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M8 8.2C8 9.7464 7.11083 11 5.5 11C3.88917 11 3 9.7464 3 8.2C3 6.6536 5.5 3 5.5 3C5.5 3 8 6.6536 8 8.2Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl">{{ $t('network') }} <br>{{ $t('water') }} </p>
                </div>
                <div style="border-bottom:1px solid rgb(76, 73, 73);" class="m-auto flex w-full">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M19.3278 16C20.3478 15.1745 21 13.9119 21 12.4969C21 10.6503 19.8893 8.94488 18.3 8.25C18.1317 5.32251 15.684 3 12.6893 3C10.3514 3 8.34694 4.48637 7.5 6.5C4.8 6.9375 3 9.20008 3 11.6493C3 13.1613 3.63296 14.5269 4.65065 15.5M8 18V20M8 12V14M12 19V21M16 18V20M16 12V14M12 13V15"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <p class="mx-4 text-xl">{{ $t('rain') }} <br> {{ $t('drainage') }}</p>
                </div>

            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>

    </section>


    <!-- gallery section -->


    <!-- utilities section  -->
    <!-- utilities section  will fetch from API-->


    <!-- project models -->
    <section id="modale" class="company-info   py-20 pt-16  bg-background-section "
             v-if="project.project_models.length">

        <div class="container mx-auto">

            <div class="">

                <div class="d-info h-full flex flex-col justify-center right">
                    <div class="flex">
                        <img src="../../img/models_icon.png" style="width: 26px;height: 26px">
                        <h1 class=" my-auto font-bold text-3xl  text-center md:text-start text-[#AF9744]">
                            {{ $t('modale') }} </h1>
                    </div>
                    <div
                        class=" [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.text-blue-600]:hover:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown">


                        <tabs variant="underline" v-model="activeTab" class="p-5 text-lg">
                            <!-- class appends to content DIV for all tabs -->
                            <tab v-for="model in project.project_models" :name="model.title['en']"
                                 :title="model.title[$i18n.locale]"
                                 class=" [&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-12 [&>div]:lg:grid-cols-2 [&>div]:lg:gap-2">
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


    <section id="images" class="py-12 pb-16 bg-[white]" v-if="project.gallery">
        <div class="container mx-auto">
            <div class=" ">
                <div class="mb-5">
                    <div
                        class="lg:w-[50%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start ">
                        <!--                    <p class="text-dark-brown text-4xl">{{ $t('gallary_project') }}</p>-->
                        <div class="flex">
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
                            <p class="text-dark-brown text-4xl right">
                                {{ $t("Image") }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex  w-[85%] m-auto " id="carsoul-project">
                    <div class="w-[100%] m-auto">

                        <Carousel :pictures="getGallery(project.gallery)"/>
                    </div>


                </div>

            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>


    <!-- Video -->

    <section id="video" class=" bg-[white]" v-if="videoo!='' && videoo">
        <div class="flex mx-auto container mb-10">

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
            <div class="my-auto  text-3xl text-light-brown"><p> {{ $t("video") }}</p></div>
        </div>
        <div class="container mx-auto">

            <!--            <iframe class="mx-auto h-[80%] w-[85%] rounded-xl"-->
            <!--                    :src="videoo">-->
            <!--            </iframe>-->
            <div class="w-[90%]">
                <div v-html="videoo" class="mx-auto w-[85%] rounded-xl"></div>
            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>

    <section id="video3d" class="py-[3%] bg-[white]" v-if="project.project_video!='' && project.project_video">
        <div class="flex container mx-auto ">
            <img src="../../img/360_video.jpg" style="width: 26px;height: 26px">

            <div class=" my-auto text-3xl text-light-brown mb-5 "><p> {{ $t("project360") }}</p></div>
        </div>
        <div class="container mx-auto flex justify-center">
            <div class=" h-[70%] flex  " v-html="project.project_video">
            </div>

        </div>
        <div class="lg:w-[60%] m-auto py-4" style="border-bottom: 2px solid black;"></div>
    </section>
    <!-- end Video -->
    <!-- location -->
    <section class="company-info   py-20 bg-[white]" id="location" v-if="project.location">

        <div class=" container w-[85%] mx-auto">

            <div class="container  m-auto">

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

                <div class="img-company-info lg:w-[90%] m-auto left">
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
    <section class=" company-info  bg-[white]" id="downloads" v-if="project.downloads.length">

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

    <section class=" company-info  bg-[white] mb-5" id="partner"
             v-if="project.partner_image != '' && project.partner_image">

        <div class="container w-[85%] mx-auto mt-8">
            <div class="flex pb-[5%]">
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
    <section class="text-center py-28" id="ask_us">
        <div class="container mx-auto w-[75%]">
            <h2 class="mb-5">{{ $t('inquiriesNotes') }}</h2>
            <div
                class="flex rounded-3xl justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w- pt-5"
            >
                <div class="flex-auto  right">
                    <div class="bg-[#57565B] rounded- mb-14 pt-12 rounded-xl  m-auto">
                        <h3 class="text-center mb-5 text-white">{{ $t('pleaseFill') }}</h3>

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
                                    class="rounded-3xl w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('FirstName')"
                                />
                                <input
                                    type="text"
                                    id="last_name" maxlength="80" name="last_name"
                                    aria-describedby="helper-text-explanation"
                                    v-model="last_name"
                                    class="rounded-3xl w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('LastName')"
                                />
                            </div>
                            <div class="flex justify-center gap-x-5">
                                <input
                                    type="text"
                                    id="mobile" maxlength="40" name="mobile"
                                    v-model="mobile"
                                    aria-describedby="helper-text-explanation"
                                    class="w-full md:w-1/2 bg-gray-50 border rounded-3xl border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('PhoneNumber')"
                                />
                                <input
                                    type="email"
                                    id="email" maxlength="80" name="email"
                                    aria-describedby="helper-text-explanation"
                                    v-model="email"
                                    class="rounded-3xl w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    :placeholder="$t('Email')"
                                />
                            </div>
                            <div class="flex justify-center gap-x-5">

                                <select
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
                                    v-model="status"
                                >
                                    <option value="Buy"> {{ $t('ownership') }}</option>
                                    <option value="Rent"> {{ $t('rent') }}</option>
                                    <option value="Other"> {{ $t('other') }}</option>


                                </select>

                                <select
                                    class="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown"
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
                                class="bg-dark-brown mb-[1%] py-2 m-auto text-white lg:w-[45%] rounded-3xl"
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
            first_name: "",
            last_name: "",
            mobile: "",
            email: "",
            region: "Eastern",
            status: "Buy",
            videoo: "",
            recompute: 0,
            rephases: [],
            flag: 1


        }
    },
    methods: {
        getGallery(gallery) {

            if (gallery) {

                console.log(gallery)
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
            return `https://maps.google.com/maps?key=AIzaSyDWxa_rbz7ccvjsvxmbPR5Q_AEK14-D0sk&q=${this.project.location.Latitude},${this.project.location.Longitude}&hl=es&z=14&amp&output=embed`
        }
    },
    beforeMount() {


        axios.get(`/api/projects/${this.$route.params.id}`)
            .then(res => {
                // this.project = Vue.util.extend({}, res.data.data)
                this.project = res.data.data
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

.circle-progress__percentage {
    color:
}
</style>
