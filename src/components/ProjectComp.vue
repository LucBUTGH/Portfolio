<template>
  <div class="flex justify-center items-center flex-wrap">
    <div class="m-4 flex flex-col items-center transition-transform transform hover:scale-110" v-for="(project, index) in projects" :key="index">
      <router-link :to="{ name: 'project', params: { title: project.title }}" :key="index">
        <img :src="'/projects-pic/' + project.title + '.png'" :alt="project.title" class="w-80 h-48 rounded-xl mb-2">
        <h2 class="text-lg font-bold text-center">{{ project.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {title: 'GenshinAPI'},
        {title: 'Nautilus'},
        {title: 'PtiCuisto'},
      ],
    };
  },
};
</script>
