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

// List of internships
const internships = ref([
  {
    title: 'Frontend Developer Internship',
    skills: 'HTML, CSS, JavaScript, Vue.js',
    shortDescription: 'Work on exciting frontend projects with modern technologies.',
    fullDescription:
      'In this role, you will be responsible for building responsive web interfaces using Vue.js and Tailwind CSS. You will collaborate with designers and backend developers to create seamless user experiences.',
    connectLink: 'https://linkedin.com/internship/frontend', // Example connect link
    showMore: false, // Used to toggle the full description
  },
  {
    title: 'Backend Developer Internship',
    skills: 'Node.js, Express, MongoDB',
    shortDescription: 'Join our backend team to build scalable API services.',
    fullDescription:
      'As a backend intern, you will develop and optimize server-side logic, manage databases, and ensure high performance of backend services. You will work closely with the frontend team to deliver complete solutions.',
    connectLink: 'https://linkedin.com/internship/backend', // Example connect link
    showMore: false, // Used to toggle the full description
  },
  {
    title: 'UI/UX Design Internship',
    skills: 'Figma, Adobe XD, User Research',
    shortDescription: 'Design user-friendly interfaces with a focus on usability.',
    fullDescription:
      'Your role as a UI/UX intern will involve creating wireframes, prototypes, and conducting user research to inform design decisions. You will work with the product and development teams to ensure user-centric design.',
    connectLink: 'https://linkedin.com/internship/design', // Example connect link
    showMore: false, // Used to toggle the full description
  },
]);

// Toggle the 'See More' feature for each internship
const toggleSeeMore = (index) => {
  internships.value[index].showMore = !internships.value[index].showMore;
};

// Save the internship for later (you can enhance this to store in local storage or a database)
const saveForLater = (internship) => {
  alert(`Saved ${internship.title} for later!`);
};
</script>
<template>
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
<div class="container mx-auto p-5">
    <h1 class="text-3xl font-bold mb-8">Internship Opportunities</h1>

    <div v-for="(internship, index) in internships" :key="index" class="mb-8">
      <!-- Internship Card -->
      <div class="bg-white shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">{{ internship.title }}</h2>
          <button
            @click="saveForLater(internship)"
            class="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          >
            Read Later
          </button>
        </div>

        <p class="text-gray-700 mb-4"><span class="font-semibold">Skills Required:</span> {{ internship.skills }}</p>
        <p class="text-gray-600">{{ internship.shortDescription }}</p>

        <div class="mt-4 flex justify-between items-center">
          <!-- See More button toggles full description -->
          <button @click="toggleSeeMore(index)" class="text-blue-500 hover:underline">
            {{ internship.showMore ? "See Less" : "See More" }}
          </button>

          <!-- Connect button -->
          <a
            :href="internship.connectLink"
            target="_blank"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Connect
          </a>
        </div>

        <!-- Full description (only shown when 'See More' is clicked) -->
        <div v-if="internship.showMore" class="mt-4">
          <p class="text-gray-700">{{ internship.fullDescription }}</p>
        </div>
      </div>
    </div>
  </div>
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
</template>
<style>
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