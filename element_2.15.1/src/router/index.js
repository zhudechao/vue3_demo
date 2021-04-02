import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home";
import Layout from "../components/Layout";
import Table from "../components/Table";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Layout',
        component: Layout
    },
    {
        path: '/Table',
        component: Table
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router