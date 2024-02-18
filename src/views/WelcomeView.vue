<script>
import BorderComp from '@/components/BorderComp.vue';
import ProjectComp from '@/components/ProjectComp.vue';

export default {
    components: {
        BorderComp,
        ProjectComp
    },
    computed: {
        isMobile() {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            console.log("Is mobile?", isMobile);
            return isMobile;
        }
    }
};
</script>

<template>
    <div>
        <div class="bg-discord min-h-screen min-w-screen flex flex-col items-center justify-center">
            <div class="flex flex-col md:flex-row items-center mb-4">
                <div class="md:mr-12 mb-4 md:mb-0 text-center md:text-left">
                    <h1 class="text-4xl text-gray-400 font-bold">Luc Leveque</h1>
                    <h2 class="text-2xl text-gray-400 mt-1">Student🧑‍🎓 | Developer 💻</h2>
                </div>
                <div v-if="!isMobile">
                    <BorderComp/>
                </div>
                <img src="/me.jpeg" alt="me pic" title="Picture of me" class="mx-auto md:ml-4 rounded-full w-32 h-32">
            </div>
  
            <p class="text-lg mt-5  text-center">I'm a 2nd year student at IUT Grand Ouest Normandie at Caen.</p>
            <p class="text-lg  text-center">I'm looking for an 8-10 week internship in web development.</p>
            <p class="text-lg mb-10 text-center">I'm motivated, curious, and versatile.</p>

  
            <div class="flex flex-wrap justify-center md:justify-between">
                <a href="https://www.linkedin.com/in/luc-leveque-17675b252/" target="_blank" class="social-link">
                <div class="h-12 w-12 mx-3 md:mx-5">
                <i class="fa-brands fa-linkedin fa-3x" title="LinkedIn"></i>
                </div>
                </a>
                <a href="https://github.com/LucBUTGH/" target="_blank" class="social-link">
                    <div class="h-12 w-12 mx-3 md:mx-5">
                        <i class="fa-brands fa-github fa-3x" title="GitHub"></i>
                    </div>
                </a>
                <a href="mailto:luc.leveque@etu.unicaen.fr" target="_blank" class="social-link">
                    <div class="h-12 w-12 mx-3 md:mx-5">
                        <i class="fa-solid fa-envelope fa-3x" title="Mail"></i>
                    </div>
                </a>
                <a href="../src/assets/LucLEVEQUE_CV.pdf" download="LucLEVEQUE_CV.pdf" class="social-link">
                    <div class="mx-3 md:mx-5">
                        <img src="/cv.svg" alt="cv" title="Télécharger CV" class="w-12 h-12">
                    </div>
                </a>
            </div>
        </div>
  
        <div class="bg-discord flex flex-col items-center justify-center">
            <div class="border-t-2 border-gray-500 mx-2 w-4/5">
                <div class="flex flex-col items-center justify-center text-center text-gray-400 my-8">
                    <h2 class="text-3xl font-bold mb-4">
                        My Skills 
                        <i class="fas fa-code text-xl mb-2"></i>
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-32 mb-12">
                    <ul class="text-lg text-gray-400">
                        <li class="text-2xl underline mb-2">
                            Back-end
                            <i class="fa-solid fa-gears ml-3"></i>
                        </li>
                        <li>PHP</li>
                        <li>MySQL</li>
                    </ul>
                    <ul class="text-lg text-gray-400">
                        <li class="text-2xl underline mb-2">
                            Front-end
                            <i class="fa-solid fa-paintbrush ml-3"></i>
                        </li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript/Typescript</li>
                    </ul>
                    <ul class="text-lg text-gray-400">
                        <li class="text-2xl underline mb-2">
                            Frameworks
                            <i class="fa-solid fa-desktop ml-3"></i>
                        </li>
                        <li>Laravel</li>
                        <li>VueJS</li>
                    </ul>
                    <ul class="text-lg text-gray-400">
                        <li class="text-2xl underline mb-2">
                            Utilities
                            <i class="fa-solid fa-screwdriver-wrench ml-3"></i>
                        </li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
  
        <div class="bg-discord flex flex-col items-center justify-center">
            <div class="border-t-2 border-gray-500 mx-2 w-4/5">
                <div class="flex flex-col items-center text-gray-400 my-8">
                    <h2 class="text-3xl font-bold mb-4">
                        My Projects
                        <i class="fa-solid fa-project-diagram text-xl mb-2"></i>
                    </h2>
                </div>
                <div class="flex justify-center">
                    <ProjectComp/>
                </div>  
            </div>
        </div>
    </div>
</template>

  