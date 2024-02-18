<template>
  <div class="bg-discord min-h-screen flex flex-col items-center justify-center">

    <h1 class="text-5xl font-bold my-4">{{ project.title }}</h1>
    <img :src="`/projects-pic/${project.title}.png`" alt="Nom de l'image" class="w-2/3 h-auto mb-8 shadow-lg rounded-lg">
    
    <div class="flex">
  <a v-if="project.link" target="_blank" :href="project.link" class="bg-discord_very_light hover:bg-discord_dark text-white font-bold mr-2 py-2 px-4 rounded transition duration-300 ease-in-out">
    Go on the website
  </a>
  <a v-if="project.linkGH" target="_blank" :href="project.linkGH" class="bg-discord_very_light hover:bg-discord_dark text-white font-bold ml-2 py-2 px-4 rounded transition duration-300 ease-in-out">
    <i class="fa-brands fa-github"></i>
    GitHub Repository
  </a>
</div>



    <div class="border-t-2 border-gray-500 mt-16 w-4/5 justify-center">
      <div class="flex items-center my-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd" />
        </svg>
        <p class="font-bold text-3xl underline m-2">Description</p>
      </div>
      <p class="text-xl">{{ project.description }}</p>
    </div>

    <div class="border-t-2 border-gray-500 mt-16 w-4/5 justify-center">
      <div class="flex items-center my-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
        </svg>
        <p class="font-bold underline text-3xl ml-2">Tools used</p>
      </div>
      <div class="my-5">
        <span class="bg-discord_very_light rounded-full px-3 py-1 text-white font-semibold text-gray-700 mr-2 mb-2 hover:bg-discord_dark hover:text-white transition duration-300 ease-in-out cursor-pointer" v-for="tech in project.techs" :key="tech">{{ tech }}</span>
      </div>
    </div>

    <div class="border-t-2 border-gray-500 mt-16 w-4/5 justify-center">
      <div class="flex items-center my-3">
        <i class="fa-solid fa-users text-2xl"></i>
        <p class="font-bold underline text-3xl ml-2">Members of the project</p>
      </div>
      <div class="my-5 grid grid-cols-2 gap-1 w-fit">
        <a :href="mate[1]" target="_blank" :title="mate[0]" class="bg-discord_very_light px-3 py-1 w-fit text-white font-semibold text-gray-700 hover:bg-discord_dark hover:text-white transition duration-300 ease-in-out cursor-pointer" v-for="mate in project.mates" :key="mate[0]">
          {{ mate[0] }}
        </a>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'GenshinAPI', 
          description: 'GenshinAPI is a Laravel-based project serving as both a website and an API, consolidating comprehensive data on the game Genshin Impact. It offers users a user-friendly interface to explore character profiles, weapon stats, artifact sets, and more, while providing developers with convenient API endpoints for seamless data integration into their projects. With its dual functionality, GenshinAPI aims to streamline access to game information and foster innovation within the Genshin Impact community. ', 
          techs: ['Laravel', 'Tailwind CSS', 'MySQL', 'API', 'Swagger'],
          link: 'https://dev-leveque212.users.info.unicaen.fr/GenshinAPI/public/',
          linkGH: 'https://github.com/LucBUTGH/GenshinAPI/tree/master',
          mates: [['Luc Leveque', 'https://github.com/LucBUTGH/']
                ], 
        },
        {
          title: 'Nautilus', 
          description: 'Nautilus is a Laravel-based project tailored for registering and managing scuba diving expeditions. It offers an intuitive platform for divers to sign up for dives, manage their schedules, and track their underwater adventures. With Nautilus, diving enthusiasts can easily organize their diving experiences while dive operators streamline their booking processes, enhancing the overall diving experience for all involved.', 
          techs: ['Laravel', 'Tailwind CSS', 'MySQL', 'API', 'Swagger'],
          link: 'https://dev-sae301grp3.users.info.unicaen.fr/',
          linkGH: 'https://github.com/Tiercas/nautilus',
          mates: [
                  ['Clément Baratin', 'https://github.com/waterfox-dev/'],
                  ['Julien Sailly', 'https://github.com/juliensailly/'],
                  ['Luc Leveque', 'https://github.com/LucBUTGH/'],
                  ['Alenso Lopes', 'https://github.com/AlensoLopes/'], 
                  ['Julien Ait Azzouzene', 'https://github.com/PetitGens/'],
                  ['Andgel Brissaud', 'https://github.com/AndgelBrissaud/'],
                  ['Guilhem Saint-Gaudin', 'https://github.com/Mehliug-SG/'], 
                  ['Pou1', 'https://github.com/Pou-1/'],
                  ['Victor Friboulet', 'https://github.com/SirSoliloque/'], 
                  ['Elrigabel', 'https://github.com/Elrigabel/'],
                ]
        },
        {
          title: 'PtiCuisto', 
          description: 'PtiCuisto is a web application designed to help users find recipes based on the ingredients they have on hand. With PtiCuisto, users can easily search for recipes by entering the ingredients they have available, and the app will return a list of recipes that match their criteria. PtiCuisto also offers a user-friendly interface for viewing recipe details, including ingredients, preparation steps, and nutritional information. With its intuitive design and robust functionality, PtiCuisto aims to simplify the recipe search process and inspire users to get creative in the kitchen.', 
          techs: ['PHP', 'Tailwind CSS', 'MySQL'],
          link: 'https://dev-sailly221.users.info.unicaen.fr/projects/pti-cuisto',
          linkGH: 'https://github.com/juliensailly/ptit-cuisto',
          mates: [
                  ['Guillaume Bergerot', 'https://github.com/moustave/'],
                  ['Luc Leveque', 'https://github.com/LucBUTGH/'],
                  ['Alenso Lopes', 'https://github.com/AlensoLopes'],
                  ['Julien Sailly', 'https://github.com/juliensailly/'],    
                ]
        },
        {
          title: 'Instant-Weather', 
          description: 'Welcome to Instant-Weather, a web app that provides up-to-date meteorological ' +
          'information for any French city. With Instant-Weather, users can easily access current weather conditions, ' +
          'hourly forecasts, and extended forecasts for the next 7 days.', 
          techs: ['JS', 'API'],
          link: 'https://alensolopes.github.io/instant-weather/',
          linkGH: 'https://github.com/AlensoLopes/Instant-Weather',
          mates: [
                  ['Guillaume Bergerot', 'https://github.com/moustave/'],
                  ['Luc Leveque', 'https://github.com/LucBUTGH/'],
                  ['Alenso Lopes', 'https://github.com/AlensoLopes'],     
                  ['Julien Sailly', 'https://github.com/juliensailly/'],  
                ]
        },

        {
          title: 'Portfolio', 
          description: 'This is my portfolio website developed in order to showcase the projects I\'ve been involved in. Thus, I can show my skills to potentially interested targets.',
          techs: ['VueJS', 'Tailwind CSS'],
          link: 'https://lucleveque.fr',
          linkGH: '',
          mates: [['Luc Leveque', 'https://github.com/LucBUTGH/']
                ], 
        },
      ],
    };
  },
  computed: {
    project() {
      return this.projects.find(project => project.title === this.$route.params.title);
    }
  }
};
</script>
