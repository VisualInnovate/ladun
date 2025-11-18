<template>
  <section id="ask_us" class="py-16 text-center bg-gray-50 dark:bg-black">
    <div class="container mx-auto lg:w-3/4">
      <h2 class="text-3xl font-bold mb-8">{{ $t('inquiriesNotes') }}</h2>

      <form @submit.prevent="submitForm" class="bg-[#57565B] text-white p-10 rounded-3xl max-w-2xl mx-auto">
        <div class="grid md:grid-cols-2 gap-6">
          <input v-model="form.first_name" required :placeholder="$t('FirstName')" class="rounded-3xl p-4">
          <input v-model="form.last_name" required :placeholder="$t('LastName')" class="rounded-3xl p-4">
          <input v-model="form.mobile" :placeholder="$t('PhoneNumber')" class="rounded-3xl p-4">
          <input v-model="form.email" type="email" :placeholder="$t('Email')" class="rounded-3xl p-4">
          <input :value="project.title[$i18n.locale]" readonly class="rounded-3xl p-4 bg-gray-700">
        </div>
        <button type="submit" class="mt-8 bg-dark-brown text-white py-3 px-12 rounded-3xl hover:bg-[#8d7a42]">
          {{ $t('sendNow') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps(['project'])
const emit = defineEmits(['toast'])

const form = ref({
  first_name: '',
  last_name: '',
  mobile: '',
  email: ''
})

const submitForm = () => {
  axios.post('/api/connect', {
    first_name: form.value.first_name,
    last_name: form.value.last_name,
    phone: form.value.mobile,
    email: form.value.email,
    message: props.project.title[useI18n().locale.value]
  })
  .then(() => {
    emit('toast', useI18n().t('messageSentSuccessfully'), 'success')
    form.value = { first_name: '', last_name: '', mobile: '', email: '' }
  })
  .catch(() => emit('toast', useI18n().t('errorSendingMessage'), 'error'))
}
</script>
