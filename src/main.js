//import './assets/main.css'
import './assets/styles.scss'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'
import VueEasyLightbox from 'vue-easy-lightbox'
import DateFormat from '@voidsolutions/vue-dateformat'

//import axios from 'axios'
const app = createApp(App)
app.config.globalProperties.$apihostname='http://localhost:5072'//https://localhost:7104

app.use(createPinia())
app.use(DateFormat);
app.use(router)
app.use(VueScrollTo)
app.use(VueEasyLightbox)
//app.use(axios)
app.mount('#app')
