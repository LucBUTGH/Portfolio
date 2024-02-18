<template>
  <h1 class="bg-discord text-center text-3xl font-bold my-4">My Projects</h1>
  <div class="flex flex-wrap bg-discord items-center justify-center h-min-screen">
    <div class="m-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" v-for="(project, index) in projects" :key="index">
      <div class="flex flex-col items-center transition-transform transform hover:scale-110">
        <router-link :to="{ name: 'project', params: { title: project.title }}" :key="index">
          <img :src="'/projects-pic/' + project.title + '.png'" :alt="project.title" class="border-white border-2 w-72 h-40 object-cover rounded-xl mb-2">
          <h2 class="text-lg font-bold text-center">{{ project.title }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      projects: [
        { title: 'GenshinAPI' },
        { title: 'Nautilus' },
        { title: 'PtiCuisto' },
        { title: 'Instant-Weather' },
        { title: 'Portfolio'}
      ]
    };
  }
};
</script>
