<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const searchQuery = ref('');
const backgroundImage = 'https://i.pinimg.com/236x/14/07/29/140729b1f0146860cd7887cce9d925a2.jpg'; // Replace with your image URL

const menuItems = ref(['About Uniconnect', 'New Internship', 'Scholarships', 'Researches', 'Blogs' , 'News']);

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
            <div>
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
                                <li v-for="(item, index) in menuItems" :key="item" :style="{ transitionDelay: `${index * 0.2}s` }" class="opacity-0 animate-fade-in-up font-medium text-slate-900">
                                    <RouterLink v-if="item === 'About Uniconnect'" to="/About_uniconnect">{{ item }}</RouterLink>
                                    <RouterLink v-else-if="item === 'New Internship'" to="/new-internship">{{ item }}</RouterLink>
                                    <RouterLink v-else-if="item === 'Scholarships'" to="/scholarships">{{ item }}</RouterLink>
                                    <RouterLink v-else-if="item === 'Researches'" to="/researches">{{ item }}</RouterLink>
                                    <RouterLink v-else-if="item === 'Blogs'" to="/blogs">{{ item }}</RouterLink>
                                    <RouterLink v-else-if="item === 'News'" to="/news">{{ item }}</RouterLink>
                                    <a v-else>{{ item }}</a> <!-- Fallback if no route is found -->
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
               <img src="https://i.pinimg.com/236x/a8/8d/46/a88d4685a031b5a470ef7817f1307205.jpg" class="mt-[100px] w-full h-[350px]">
            </header>
            <main>
                <div class="w-full bg-slate-900 h-35 flex justify-center space-x-10 mb-5 ">
                    <p class="text-center text-white text-lg p-5">Admision</p>
                    <div class="border-l-4 border-white h-8 w-15 mt-5"></div>
                    <p class="text-center text-white text-lg p-5">Blog</p>
                    <div class="border-l-4 border-white h-8 w-15 mt-5"></div>
                    <p class="text-center text-white text-lg p-5">Reserch</p>
                    <div class="border-l-4 border-white h-8 w-15 mt-5"></div>
                    <p class="text-center text-white text-lg p-5">Internships</p>
                    <div class="border-l-4 border-white h-8 w-15 mt-5"></div>
                    <p class="text-center text-white text-lg p-5">scholarships</p>
                </div>
                <div class="flex justify-center mt-10">
                    <p class="text-slate-900 font-bold text-2xl">Latest NEWS</p>
                </div>
                <div class="border-t-2 border-slate-900 w-15 h-0 mb-5"></div>
                <div class="grid grid-cols-4 gap-4 ml-5 mr-5 mb-5">
                    <!-- First Row -->
                     <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                        <div class="bg-[url('https://i.pinimg.com/236x/62/ea/92/62ea92884a7c7bc08faa546ce6102321.jpg')] bg-cover bg-center h-full"></div>
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span class="text-white text-xl">Text for Box 1</span>
                        </div>
                        <!-- Vertical Line -->
                         <div class="absolute top-0 right-0 h-full w-1 bg-black"></div>
                        </div>
                        <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                            <div class="bg-[url('https://i.pinimg.com/236x/43/97/4c/43974caa8c4f54e970ae55af2069e15e.jpg')] bg-cover bg-center h-full"></div>
                            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span class="text-white text-xl">Text for Box 2</span>
                            </div>
                            <!-- Vertical Line -->
                             <div class="absolute top-0 right-0 h-full w-1 bg-slate-900"></div>
                            </div>
                            <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                                <div class="bg-[url('https://i.pinimg.com/236x/39/c9/7a/39c97a6a61398b9807b791326a1b9850.jpg')] bg-cover bg-center h-full"></div>
                                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span class="text-white text-xl">Text for Box 3</span>
                                </div>
                                <!-- Vertical Line -->
                                 <div class="absolute top-0 right-0 h-full w-1 bg-slate-900"></div>
                                </div>
                                <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                                    <div class="bg-[url('https://i.pinimg.com/236x/96/53/d3/9653d39645cb011c77fd8ed6ceb9ebd0.jpg')] bg-cover bg-center h-full"></div>
                                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span class="text-white text-xl">Text for Box 4</span>
                                    </div>
                                </div>
                                <!-- Second Row -->
                                 <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                                    <div class="bg-[url('https://i.pinimg.com/236x/e2/2a/ab/e22aab00ef9b50d7b30e6a3f7e4c47cf.jpg')] bg-cover bg-center h-full"></div>
                                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span class="text-white text-xl">Text for Box 5</span>
                                    </div>
                                    <!-- Vertical Line -->
                                     <div class="absolute top-0 right-0 h-full w-1 bg-slate-900"></div>
                                    </div>
                                    <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                                        <div class="bg-[url('https://i.pinimg.com/236x/50/01/ec/5001ec3324a47a8f621fdf43d63a344d.jpg')] bg-cover bg-center h-full"></div>
                                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <span class="text-white text-xl">Text for Box 6</span>
                                        </div>
                                        <!-- Vertical Line -->
                                         <div class="absolute top-0 right-0 h-full w-1 bg-slate-900"></div>
                                        </div>
                                        <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                                            <div class="bg-[url('https://i.pinimg.com/236x/d3/5b/c3/d35bc3294662839009ca88b05a55479f.jpg')] bg-cover bg-center h-full">

                                            </div>
                                            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                <span class="text-white text-xl">Text for Box 7</span>
                                            </div>
                                            <!-- Vertical Line -->
                                             <div class="absolute top-0 right-0 h-full w-1 bg-slate-900"></div></div>
                                             <div class="relative aspect-[1/1] h-48 w-full overflow-hidden group">
                                                <div class="bg-[url('https://i.pinimg.com/236x/59/3a/d2/593ad2b7c09edf2e7ca7dda173e55aa4.jpg')] bg-cover bg-center h-full"></div>
                                                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <span class="text-white text-xl">Text for Box 8</span>
                                                </div>
                                            </div>
                                            <!-- Horizontal Lines -->
                                             <div class="col-span-4 h-1 bg-slate-900"></div>
                                            </div>
            </main>
        </div>
    </body>
    <!-- footer -->
    <footer class="text-white py-8 bg-slate-900">
            <div class="flex justify-center space-x-6 mb-4">
                <a href="#" class="text-xl"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-xl"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-xl"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-xl"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="text-center text-sm">
                © 2024 UniConnect. All rights reserved.
            </div>
        </footer>
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