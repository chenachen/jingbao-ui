import { createApp } from 'vue'
import '@common/static/styles/index.scss'
import 'virtual:uno.css'
import './index.scss'
import router from './router'
import App from './App.vue'
import { initMicroApp } from './micro-app'

initMicroApp(router)

const app = createApp(App)
app.use(router)
app.mount('#base-app')
