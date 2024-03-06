<template>
    <Navbar class="bg-black fixed z-50 w-full"/>
    <div  class="dark:text-white lg:w-[80%] pt-40 m-auto px-4">
        <div>
            <h3 class="py-2 font-bold">{{ $t('Terms_Conditions') }}</h3>
            <p>{{ $t('Terms_Conditions_text') }}</p>

<!--        </div>-->
<!--        <div class="py-4">-->
<!--            <p class="py-1"></p>-->
<!--        <p class="py-1"> تطبيق الهاتف الجوال الخاص بنا.</p>-->
<!--        <p class="py-1"> صفحاتنا على منصات التواصل الاجتماعي.</p>-->
<!--        <p class="py-1"></p>-->
<!--        </div>-->

<!--        <div class="">-->
<!--            <p></p>-->
<!--        </div>-->
        <div class="py-8">
            <h3 class="py-2 font-bold">{{ $t('Age_Restriction') }}</h3>
            <p>{{ $t('Age_Restriction_text') }}</p>
        </div>
        <div class="">
            <h3 class="py-2 font-bold">{{ $t('Intellectual_Property_Rights') }}</h3>
            <p>{{ $t('Intellectual_Property_Rights_text') }}</p>
        </div>
        <div class="py-8">
            <h3 class="py-2 font-bold">{{ $t('Use_of_Contents_on_the_Platforms') }}</h3>
            <p>{{ $t('Use_of_Contents_on_the_Platforms_text') }}</p>
        </div>
        <div class="">
            <h3 class="py-2 font-bold">{{ $t('Our_Site_I_Not_an_Offer_to_Sell_Securities') }}</h3>
            <p>{{ $t('Our_Site_I_Not_an_Offer_to_Sell_Securities_text') }}</p>
        </div>
        <div class="py-8">
            <h3 class="py-2 font-bold">{{ $t('Accessing_Our_Platforms') }}</h3>
            <p>{{ $t('Accessing_Our_Platforms_text') }}</p>
        </div>
        <div class="">
            <h3 class="py-2 font-bold">{{ $t('Third_Party_Services') }}</h3>
            <p>{{ $t('Third_Party_Services_text') }}</p>
        </div>
<!--        <div class="py-8">-->
<!--            <p class="py-1"></p>-->
<!--            <p class="py-1"></p>-->
<!--            <p class="py-1"></p>-->
<!--        </div>-->
        <div class="">
            <h3 class="py-2 font-bold">{{ $t('Changes_and_Updates_to_These_Terms_of_Use') }}</h3>
            <p>{{ $t('Changes_and_Updates_to_These_Terms_of_Use_text') }}</p>
        </div>
        <div class="py-8">
            <h3 class="py-2 font-bold">{{ $t('Changes_and_Updates_to_Our_Platforms') }}</h3>
            <p>{{ $t('Changes_and_Updates_to_Our_Platforms_text') }}</p>
        </div>
        <div class="">
            <h3 class="py-2 font-bold">{{ $t('Viruses') }}</h3>
            <p>{{ $t('Viruses_text') }}</p>
        </div>
        <div class="pt-8 pb-2">
            <h3 class="py-2 font-bold">{{ $t('Exclusion_of_Liabilities') }}</h3>
            <p>{{ $t('Exclusion_of_Liabilities_text') }}</p>
        </div>
<!--        <div class="py-2">-->
<!--            <p class="py-1"></p>-->
<!--            <p class="py-1"></p>-->
<!--            <p class="py-1"></p>-->
<!--            <p class="py-1"></p>-->
<!--        </div>-->
        <div class="py-8">
            <h3 class="py-2 font-bold">{{ $t('Applicable_Law') }}</h3>
            <p>{{ $t('Applicable_Law_text') }}</p>
        </div>
        <div class="pb-16">
            <h3 class="py-2 font-bold">{{ $t('Entire_agreement') }}</h3>
            <p>{{ $t('Entire_agreement_text') }}</p>
        </div>
    </div>
    <LightFooter></LightFooter>
</template>
<script>

import Navbar from "../components/Navbar.vue"
import LightFooter from "../components/LightFooter.vue";
export default {

    data() {

    },
    components: {
        Navbar, LightFooter
    },


}


</script>
