<template>
    <div class="bg-discord min-h-screen items-center justify-center text-center" :class="{ 'flex flex-col': isMobile }">
        <h1 class="text-4xl text-white font-bold my-5">Oops!</h1>
        <p class="text-white mb-3">Something wrong happened...</p>
        <div class="text-center">
            <a href="/contact" class="bg-discord_very_light hover:bg-discord_dark hover:cursor-pointer text-white font-bold py-2 px-4 rounded">Back</a>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
        isMobile() {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        console.log("Is mobile?", isMobile);
        return isMobile;
        }
    }
  }
  </script>