import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'

import '@common/static/styles/index.scss'
import 'virtual:uno.css'
import './index.scss'

import router from './router'

import App from './App.vue'

microApp.start({ 'router-mode': 'native' })

const app = createApp(App)

app.use(router)

app.mount('#base-app')
