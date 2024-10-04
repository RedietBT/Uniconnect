<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const searchQuery = ref('');
const backgroundImage = 'https://i.pinimg.com/236x/14/07/29/140729b1f0146860cd7887cce9d925a2.jpg'; // Replace with your image URL

const menuItems = ref(['About Uniconnect', 'New Internship ', 'Scholarships', 'Researches', 'Blogs' , 'News']);

const handleSearch = () => {
  console.log(searchQuery.value);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UniConnect</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="bg-white">
        <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 h-25 bg-white drop-shadow-lg">
                    <h1 class="text-slate-900 text-5xl font-bold ml-8">UniConnect</h1>
                    <!-- Search Bar, Menu Icon, and Login/SignUp shifted to the right -->
                     <div class="flex items-center ml-auto space-x-4"> <!-- Added ml-auto to shift content to the right -->
                        <form @submit.prevent="handleSearch" class="flex items-center">
                            <input v-model="searchQuery" type="text" placeholder="Search..." class="w-full px-4 py-2 border border-blue-950 rounded-full shadow-sm focus:outline-none bg-slate-900 text-white "/>
                            <button class="rounded-full bg-slate-600 w-8 h-8 flex items-center justify-center hover:bg-slate-700 hover:shadow-lg transition-all duration-300 ml-2">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        <button @click="toggleMenu" class="rounded-full bg-slate-600 w-8 h-8 flex items-center justify-center hover:bg-slate-700 hover:shadow-lg transition-all duration-300">
                            <i class="fa-solid fa-list"></i>
                        </button>
                        <button class="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-700 transition-all duration-300">Log In</button>
                        <button class="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-700 transition-all duration-300">Sign Up</button>
                    </div>
                </nav>
                <!-- Sliding Menu -->
                 <transition name="slide">
                    <div v-if="isMenuOpen" class="fixed inset-0 flex z-40">
                        <!-- Left Side: Background Image (65% width) -->
                         <div class="w-2/3 bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
                         <!-- Right Side: Menu (35% width) -->
                          <div class="bg-white w-1/3 flex flex-col justify-center items-center text-blue-950 p-8">
                            <ul class="space-y-4 text-lg">
                                <li v-for="(item, index) in menuItems" :key="item" :style="{transitionDelay: `${index * 0.2}s` }" class="opacity-0 animate-fade-in-up font-medium text-slate-900">
                    <RouterLink v-if="item === 'About Uniconnect'" to="/about-uniconnect/">{{ item }}</RouterLink>
                    <a v-else>{{ item }}</a>
                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <!-- Overlay Background -->
                 <transition name="fade">
                    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50" @click="toggleMenu"></div>
                </transition>
            </div>
            <header>
              <p class=" text-slate-900 font-bold text-4xl mt-[100px] ml-5">About UniConnect</p>
            </header>
    </body>
    </html>
  </template>
  <style scoped>
  /* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

/* Animation for menu items */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s forwards;
}
  </style>
  