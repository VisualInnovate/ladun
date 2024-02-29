<template>
    <div class="bg-light-footer text-grey py-1 md:py-1 px-1 md:px-2 mb-1 md:mb-2" >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-8  py-0 md:py-0" >
            <!-- Logo and Social Icons -->
            <div class="flex flex-col justify-center items-center md:items-start">
                <img :src="DarkLogo" alt="Logo_darK" class="mb-4 h-[52%]" style="width:40%;padding-top:30px" />
                <div class="flex justify-center md:justify-start space-x-4 mb-4">
                    <template v-for="icon in icons">
                        <a :href="icon.href" target="_blank">
                            <img :src="`${icon.image}`" :alt="`${icon.image}`" class="w-4 h-6" />
                        </a>
                    </template>
                </div>
                <a href="https://wa.me/920011560" target="_blank" class="flex items-center text-gray-600 hover:text-gray-900">
                    <p class="mr-2" style="font-size: 20px;">920011560</p>
                    <img :src="`${whatsappIcon}`" :alt="`${whatsappIcon}`" class="w-4 h-6" />
                </a>
            </div>
            
            <!-- Navigation Links -->
            <div class="flex flex-col space-y-4  py-2 md:py-0 " style="padding-top:30px">
                <router-link :to="{ name: 'About Us' }" class="text-gray-600 hover:text-gray-900">{{ $t('aboutLadun') }}</router-link>
                <router-link :to="{ name: 'Projects' }" class="text-gray-600 hover:text-gray-900">{{ $t('projects') }}</router-link>
                <router-link :to="{ name: 'Projects' }" class="text-gray-600 hover:text-gray-900">{{ $t('realEstateManagement') }}</router-link>
                <router-link :to="{ name: 'Projects' }" class="text-gray-600 hover:text-gray-900">{{ $t('realEstateAssetManagement') }}</router-link>
            </div>
            
            <!-- Additional Links -->
            <div class="flex flex-col space-y-1  py-0 md:py-0" style="padding-top:30px">
                <router-link :to="{ name: 'Investors Ads' }" class="text-gray-600 hover:text-gray-900">{{ $t('investorsRelations') }}</router-link>
                <router-link :to="{ name: 'Media Center' }" class="text-gray-600 hover:text-gray-900">{{ $t('mediaCenter') }}</router-link>
                <router-link :to="{ name: 'questions' }" class="text-gray-600 hover:text-gray-900">{{ $t('questions') }}</router-link>
                <router-link :to="{ name: 'Join Us' }" class="text-gray-600 hover:text-gray-900">{{ $t('joinUs') }}</router-link>
                <router-link :to="{ name: 'Contact Us' }" class="text-gray-600 hover:text-gray-900">{{ $t('contactUs') }}</router-link>
            </div>
        </div>
        
        <hr class="border-gray-300 mx-6 md:mx-12" />
        
        <div class="mx-6 md:mx-12 py-5 flex justify-center space-x-4">
            <small class="flex after:content-[''] after:w-[1.5px] after:h-5 after:bg-dark-brown after:rounded after:my-auto">{{ $t('termsConditions') }}</small>
            <small class="flex after:content-[''] after:w-[1.5px] after:h-5 after:bg-dark-brown after:rounded after:my-auto">{{ $t('privacyPolicy') }}</small>
            <small>{{ $t('copyRights') }}</small>
        </div>
    </div>
    

</template>

<script setup>
import DarkLogo from "../../js/lolo1.png";
import facebookIcon from "../../img/light_footer_facebook.svg";
import twitterIcon from "../../img/light_footer_twitter.svg";
import instagramIcon from "../../img/light_footer_instagram.svg";
import linkedinIcon from "../../img/light_footer_linkedin.svg";
import youtubeIcon from "../../img/light_footer_youtube.svg";
import whatsappIcon from "../../img/light_footer_whatsapp.svg";

const icons = [
    {
        image:facebookIcon ,
        href: 'https://www.facebook.com/Ladun.KSA',
    },
    {
        image:instagramIcon ,
        href: 'https://www.instagram.com/ladun_sa/',
    },
    {
        image:twitterIcon ,
        href: 'https://twitter.com/Ladun_sa',
    },
    {
        image:youtubeIcon ,
        href: 'https://www.youtube.com/channel/UCNZqi9-p_HGDp_v7YtKsybg',
    },
    {
        image:linkedinIcon ,
        href: 'https://www.linkedin.com/company/ladun',
    },

];
</script>

<style scoped>
a:hover{
    text-decoration: underline;
}
</style>
