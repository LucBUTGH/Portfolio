<template>
  <div class="bg-discord min-h-screen items-center justify-center" :class="{ 'flex flex-col': isMobile }">
    <h1 class="text-4xl text-center text-white font-bold mb-5"> Contact me! </h1>
    <form ref="form" @submit.prevent="sendEmail" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="name" class="mb-2 block text-white">Name :</label>
        <input class="text-black border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" name="name" id="name">
      </div>
      <div class="mb-4">
        <label for="email" class="mb-2 block text-white">Email :</label>
        <input class="text-black border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="email" name="email" id="email">
      </div>
      <div class="mb-4">
        <label for="subject" class="mb-2 block text-white">Subject :</label>
        <input class="text-black border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" type="text" name="subject" id="subject">
      </div>
      <div class="mb-4">
        <label for="message" class="mb-2 block text-white">Message :</label>
        <textarea class="text-black border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" name="message" id="message" rows="5"></textarea>
      </div>
      <div class="text-center">
        <input type="submit" value="Send" class="bg-discord_very_light hover:bg-discord_dark hover:cursor-pointer text-white font-bold py-2 px-4 rounded">
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_5q6nnax', 'template_zdlzzdy', this.$refs.form, 'GVvrvrd7Qx51HKmmB')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.$router.push('/contact/confirmation');
        }, (error) => {
            console.log('FAILED...', error.text);
            this.$router.push('/contact/error');
        });
    }
  },
  computed: {
    isMobile() {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      console.log("Is mobile?", isMobile);
      return isMobile;
    }
  }
}
</script>
