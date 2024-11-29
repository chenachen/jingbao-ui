import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import '@common/static/styles/index.scss'
import { childAppSetup } from '@common/utils'

const app = createApp(App)
app.use(router)
app.mount('#app')

childAppSetup(app, router)
