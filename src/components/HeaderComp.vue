<script>
export default {
    name: 'HeaderComp',
    
}
</script>

<template>
  <header class="bg-discord_dark text-white p-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="hover: cursor-pointer">
        <a href="/">
          <img src="/me.jpeg" class="rounded-full w-8 h-8" alt="">
        </a>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <a href="/" class="font-display max-w-sm text-2xl font-bold leading-tight group transition-all duration-100 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all ease-out">
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="/projects" class="font-display max-w-sm text-2xl font-bold leading-tight group transition-all duration-100 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all ease-out">
                Projects
              </span>
            </a>
          </li>
          <li>
            <a href="/contact" class="font-display max-w-sm text-2xl font-bold leading-tight group transition-all duration-100 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all ease-out">
                Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


