import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import AppLayout from '@/layouts/AppLayout.vue'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.component('AppLayout', AppLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
