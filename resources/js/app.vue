<template>
  <div class="dark:bg-black">
    <RouterView />

    <!-- WhatsApp Floating Button - Shown only if whatsappNumber is available -->
    <a
      v-if="whatsappNumber"
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed ltr:right-6 ltr:bottom-6 rtl:left-6 rtl:bottom-6 z-50 transition-transform hover:scale-110"
    >
      <img
        src="../img/whatsaap.png"
        alt="Chat on WhatsApp"
        class="w-16 h-16 drop-shadow-2xl"
      />
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// Reactive WhatsApp number (fallback if API fails)
const whatsappNumber = ref('1234567890');

// Computed WhatsApp link (cleaner and safer)
const whatsappLink = computed(() => {
  if (!whatsappNumber.value) return '#';
  // Remove any non-digit characters and ensure proper formatting
  const cleanNumber = whatsappNumber.value.replace(/\D/g, '');
  return `https://api.whatsapp.com/send/?phone=${cleanNumber}&text=Hi!&type=phone_number&app_absent=0`;
});

// Fetch settings from API
const fetchSettings = async () => {
  try {
    const response = await axios.get('/api/settings');
    const settings = response.data.settings[0] ;
    console.log(settings.whatsapp_number)
    if (settings?.whatsapp_number) {
      whatsappNumber.value = settings.whatsapp_number;
    }
  } catch (error) {
    console.error('Failed to fetch settings:', error);
    // Fallback number already set above, so we keep it
  }
};

// Fetch on component mount
onMounted(() => {
  fetchSettings();
});
</script>

<style scoped>
/* Pulse animation for WhatsApp button */
a img {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

/* Optional: add a green WhatsApp-like ring */
a::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.3);
  animation: ripple 3s infinite;
  z-index: -1;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
</style>
