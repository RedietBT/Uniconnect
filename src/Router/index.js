import { createRouter, createWebHistory } from 'vue-router';
import Home_page from "../components/Home_page.vue";
import About_uniconnect_page from "../components/About_uniconnect_page.vue";
import NewInternship from "../components/NewInternship.vue";
import Scholarships from '../components/Scholarships.vue';    
import Researches from '../components/Researches.vue';
import Blogs from '../components/Blogs.vue';             
import News from '../components/News.vue';
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       {
         path:"/",
         name:"Home",
         component:Home_page
       },
       {
        path:"/About_uniconnect/",
        name:"About_uniconnect",
        component:About_uniconnect_page
      },
      {
        path:"/new_internship/",
        name:"New Internship",
        component:NewInternship
      },
      {
        path:"/scholarships/",
        name:"Scholarships",
        component:Scholarships
      },
      {
        path:"/researches/",
        name:"Researches",
        component:Researches
      },
      {
        path:"/blogs/",
        name:"Blogs",
        component:Blogs
      },
      {
        path:"/news/",
        name:"News",
        component:News
      }
    ]
})
export default router; 