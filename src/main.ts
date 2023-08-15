import { createApp } from 'vue'
import './assets/styles/main.css';
import App from './App.vue'
import './samples/node-api'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
