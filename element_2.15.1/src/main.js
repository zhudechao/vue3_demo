import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')
