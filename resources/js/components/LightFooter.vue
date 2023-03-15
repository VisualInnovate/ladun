<template>
    <div class="bg-light-footer text-grey ">
        
        <div class="grid grid-cols-1 md:grid-cols-8 mt-10 px-11 py-12">
            <div class="flex flex-col mx-auto ">
                <img :src="DarkLogo" alt="Logo_darK" class=" mb-5" />
                <div class="inline-flex justify-between w-28">
                    <template v-for="icon in icons">
                        <img :src="`${icon}`" :alt="`${icon}`" class="w-4 h-6" />
                    </template>
                </div>
            </div>
            <div class="flex flex-col justify-between h-32 pt-8">
                <small>{{ $t('aboutLadun') }}</small>
                <small>{{ $t('whoWeAre') }}</small>
                <small>{{ $t('aboutOurCompany') }}</small>
            </div>
            <div class="flex flex-col justify-between h-32 pt-8">
                <small>{{ $t('projects') }}</small>
                <small>{{ $t('realEstateManagement') }}</small>
                <small>{{ $t('realEstateAssetManagement') }}</small>
            </div>
            <div class="flex flex-col justify-between md:h-32 pt-8">
                <small>{{ $t('investorsRelations') }}</small>
            </div>
            <div class="flex flex-col justify-between md:h-32 pt-8">
                <small>{{ $t('mediaCenter') }}</small>
            </div>
            <div class="flex flex-col justify-between md:h-32 pt-8">
                <small>{{ $t('joinUs') }}</small>
            </div>
            <div class="flex flex-col justify-between md:h-32 pt-8">
                <small>{{ $t('contactUs') }}</small>
            </div>
            <div class="flex flex-col-reverse justify-between md:h-32 pt-8">
                <div class="inline-flex">
                    <p>920011560</p>
                    <img :src="`${whatsappIcon}`" :alt="`${whatsappIcon}`" class="w-4 h-6 mx-2" />
                </div>
            </div>
        
        </div>
        <hr class="border-gray-300 mx-11"/>
        <div class="mx-11 py-5 flex justify-center">
            <small class="ltr:mr-2 rtl:ml-2 flex text-center after:content-['']  after:w-[1.5px] after:h-5   after:bg-dark-brown after:rounded rtl:after:mr-2 ltr:after:ml-2 after:my-auto">
                    {{ $t('termsConditions') }}
                </small>

                <small class="ltr:mr-2 rtl:ml-2 flex text-center after:content-['']  after:w-[1.5px] after:h-5   after:bg-dark-brown after:rounded rtl:after:mr-2 ltr:after:ml-2 after:my-auto">
                    {{ $t('privacyPolicy') }}
                </small>
                <small class="ltr:mr-2 rtl:ml-2">
                    {{ $t('copyRights') }}
                </small>
        </div>
    </div>

</template>

<script setup>
import DarkLogo from "../../img/ladun_logo_dark.png";
import facebookIcon from "../../img/light_footer_facebook.svg";
import twitterIcon from "../../img/light_footer_twitter.svg";
import instagramIcon from "../../img/light_footer_instagram.svg";
import linkedinIcon from "../../img/light_footer_linkedin.svg";
import youtubeIcon from "../../img/light_footer_youtube.svg";
import whatsappIcon from "../../img/light_footer_whatsapp.svg";

const icons = [
    facebookIcon,
    instagramIcon,
    twitterIcon,
    youtubeIcon,
    linkedinIcon,
];
</script>
