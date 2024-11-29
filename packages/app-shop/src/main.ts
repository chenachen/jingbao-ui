import { createApp } from 'vue'
import App from './App.vue'

import '@common/static/styles/index.scss'
import router from './router'
import { childAppSetup } from '@common/utils'

const app = createApp(App)
app.use(router)
app.mount('#app')

childAppSetup(app, router)
