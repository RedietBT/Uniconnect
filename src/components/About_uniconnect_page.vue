<script setup>
import { ref } from 'vue';
import {onMounted, onBeforeUnmount } from 'vue';

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

const sections = ref([
  { 
    title: "Introduction", 
    content: `
      <p class="text-lg text-slate-900 font-medium">In many developing countries, such as Ethiopia, universities face challenges in connecting students, researchers, and industries for innovation and collaboration. Despite the presence of great ideas within academic institutions, limited access to resources, partnerships, and funding hinders the ability to transform those ideas into impactful solutions.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">What is UniConnect?</h3>
      <p class="text-lg text-slate-900 font-medium">UniConnect is designed to bridge these gaps by providing a digital platform where students, faculty, startups, and industries can connect, collaborate, and innovate.</p>
    ` 
  },
  { 
    title: "Key Challenges Faced by Universities", 
    content: `
      <h3 class="text-xl font-semibold mt-4 mb-2">Lack of Collaboration Opportunities</h3>
      <p class="text-lg text-slate-900 font-medium">Many universities, particularly in Ethiopia, lack a structured system for connecting students, researchers, and industries. As a result, academic projects often remain confined to theoretical discussions and never evolve into practical solutions.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Limited Access to Resources and Funding</h3>
      <p class="text-lg text-slate-900 font-medium">Even when students and faculty have innovative ideas, accessing the necessary resources and funding can be difficult. Without strong partnerships and investment from industries or government bodies, many groundbreaking projects fail to materialize.</p>
    ` 
  },
  { title: "UniConnect's Solution", content: `<h3 class="text-xl font-semibold mt-4 mb-2">1. Digital Collaboration Platform</h3>
  <p class="text-lg text-slate-900 font-medium">UniConnect serves as a dynamic platform that allows users to create profiles, showcase their projects, and search for opportunities. It facilitates networking between students, faculty, industries, and investors, making it easier for individuals and teams to collaborate on research and innovation projects.</p>
  <h3 class="text-xl font-semibold mt-4 mb-2">2. Research Project Marketplace</h3>
  <p class="text-lg text-slate-900 font-medium">The platform features a marketplace where university research projects can be displayed, attracting potential investors, industries, or collaborators. This helps convert academic ideas into practical solutions with real-world applications.</p>
  <h3 class="text-xl font-semibold mt-4 mb-2">3. Innovation Competitions and Hackathons</h3>
  <p class="text-lg text-slate-900 font-medium">UniConnect hosts regular competitions and hackathons, encouraging students and researchers to present their innovative ideas. These competitions serve as a platform for showcasing creativity and problem-solving skills, and they provide an avenue for industries and investors to discover talent and fresh ideas.</p>
  <h3 class="text-xl font-semibold mt-4 mb-2">4. Industry Internships and Collaborative Workspaces</h3>
  <p class="text-lg text-slate-900 font-medium">Students and faculty can connect with industry partners for internships, apprenticeships, and real-world projects. UniConnect also offers virtual and physical collaborative workspaces where interdisciplinary teams can work together, building stronger ties between universities and industries.</p>
  `},
  { title: "Benefits of UniConnect", content: `<h3 class="text-xl font-semibold mt-4 mb-2">1. Empowering Students and Faculty</h3>
  <p class="text-lg text-slate-900 font-medium">UniConnect provides students and faculty with the tools and networks needed to turn their ideas into viable products and solutions. The platform fosters a culture of innovation and entrepreneurship, where academic projects can lead to real-world change.</p>
  <h3 class="text-xl font-semibold mt-4 mb-2">2. Strengthening University-Industry Relationships</h3>
  <p class="text-lg text-slate-900 font-medium">Through UniConnect, industries can easily identify university talents and research that align with their business goals. This strengthens the bond between academic institutions and the private sector, driving forward technological advancement and economic growth.</p>
  <h3 class="text-xl font-semibold mt-4 mb-2">3. Attracting Funding and Investment</h3>
  <p class="text-lg text-slate-900 font-medium">UniConnect serves as a bridge between research projects and potential investors, offering a structured platform where innovators can present their work and attract the resources necessary for scaling their solutions.</p>` },
  { title: "Conclusion", content: `<p class="text-lg text-slate-900 font-medium">UniConnect is more than just a platform; it is a catalyst for transforming academic knowledge into real-world impact. By fostering collaboration, offering funding opportunities, and connecting universities with industries, UniConnect is poised to revolutionize the landscape of higher education and innovation in Ethiopia and beyond.</p>` }
]);

const activeSection = ref(0);
const sectionRefs = ref([]);

const scrollToSection = (index) => {
  const section = sectionRefs.value[index];
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = index;
  }
};

const onScroll = () => {
  sectionRefs.value.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      activeSection.value = index;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
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
              <p class=" text-slate-900 font-bold text-4xl mt-[100px] ml-10 mb-4">About UniConnect – A University Collaboration & Innovation Hub</p>
            </header>
            <main class="flex">
              <!-- Table of Contents -->
    <div class="sticky top-5 w-1/5 h-[75vh] p-5 bg-slate-900 text-white shadow-lg ml-10">
      <p class="font-bold text-lg mb-4">Table of Contents</p>
      <ul class="space-y-4">
        <li
          v-for="(section, index) in sections"
          :key="index"
          :class="{'text-blue-500': activeSection === index}"
        >
          <a href="#" @click.prevent="scrollToSection(index)">
            {{ section.title }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="w-4/5 p-5 overflow-y-auto">
      <section
        v-for="(section, index) in sections"
        :key="index"
        :ref="el => sectionRefs[index] = el"
        class="mb-12"
      >
        <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
        <!-- Render content with sub-sections using v-html -->
        <div v-html="section.content"></div>
      </section>
    </div>
  </main>
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
  