import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Form from "../components/Form";

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
    },
    {
        path: '/Form',
        component: Form
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router