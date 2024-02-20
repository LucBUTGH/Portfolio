<template>
  <footer class="bg-discord_dark p-4 px-6 text-center text-white mt-10">
    <div>
      <p>&copy; {{ currentYear }} - All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  name: 'FooterComp',
};
</script>

