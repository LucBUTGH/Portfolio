<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <div class="text-white min-h-screen">
        <HeaderComp />
        <RouterView />
    </div>
    <FooterComp />
</template>
