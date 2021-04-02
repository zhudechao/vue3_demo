import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home'
import About from "../components/About";

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router