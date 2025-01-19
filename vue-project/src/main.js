import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";
import App from './App.vue'
import router from './router'
Vue.prototype.$axios = axios
const app = createApp(App)
app.use(axios)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')


