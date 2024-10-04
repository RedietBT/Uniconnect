import { createRouter, createWebHistory } from 'vue-router';
import Home_page from "../components/Home_page.vue";
import About_uniconnect_page from "../components/About_uniconnect_page.vue";
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
      }
    ]
})
export default router; 