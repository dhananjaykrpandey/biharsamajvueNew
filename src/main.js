import './assets/main.css'
import './assets/styles.scss';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueScrollTo)
app.mount('#app')
