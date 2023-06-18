import { createRouter,createWebHistory } from "vue-router"
import Home from './components/Home.vue/'
import signup from './components/signup.vue/'
import webdev from './components/webdev.vue/'
import About from './components/About.vue/'


const routes = [
    {
        name:"Home",
        path:"/Home",
        component:Home
    },
    {
        name:"About",
        path:"/About",
        component:About
    },
    {
        name:"signup",
        path:"/signup",
        component:signup
    },
    {
        name:"webdev",
        path:"/webdev",
        component:webdev
    }


]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router