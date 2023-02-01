import { createApp } from 'vue'
import devtools from '@vue/devtools'

import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
devtools.connect('127.0.0.1', '4000')
