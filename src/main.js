import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/styles/global.scss'
import  'boxicons'
import 'boxicons/css/boxicons.min.css'
import router from './router'
import store from './store'
import { dragscrollNext } from "vue-dragscroll";


const app = createApp(App)

app.use(store)
app.use(router)
app.directive('dragscroll', dragscrollNext);
app.mount('#app')
