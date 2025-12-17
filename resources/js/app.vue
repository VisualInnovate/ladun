<template>
  <div class="dark:bg-black">
    <RouterView />

    <!-- WhatsApp Floating Button - Shown only if whatsappNumber is available -->
    <a
      v-if="whatsappNumber"
      :href="`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=&type=phone_number&app_absent=0`"
      target="_blank"
      class="fixed ltr:right-14 ltr:bottom-16 rtl:left-14 rtl:bottom-16 z-50 transition-transform hover:scale-110"
    >
      <img src="../img/whatsaap.png" alt="WhatsApp" class="w-16 h-16 drop-shadow-lg" />
    </a>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'AppLayout', // or whatever your component name is

  setup() {
    const whatsappNumber = ref('920011560'); // Default fallback number (from your original code)

    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings');

        // The response structure: { settings: [ { ... } ] }
        const settings = response.data.settings;

        if (settings && settings.length > 0) {
          const mainSetting = settings[0];

          // Update whatsappNumber if available and valid
          if (mainSetting.whatsapp_number && mainSetting.whatsapp_number.trim() !== '') {
            // Remove any non-digit characters if needed (optional)
            const cleanedNumber = mainSetting.whatsapp_number.replace(/\D/g, '');
            if (cleanedNumber) {
              whatsappNumber.value = cleanedNumber.startsWith('966')
                ? cleanedNumber
                : '966' + cleanedNumber.replace(/^0/, ''); // Ensure Saudi format if needed
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error);
        // Keep the fallback number if API fails
      }
    };

    // Fetch settings when component is mounted
    onMounted(() => {
      fetchSettings();
    });

    return {
      whatsappNumber,
    };
  },
};
</script>

<style scoped>
/* Optional: Add a subtle pulse animation for the WhatsApp button */
a img {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
