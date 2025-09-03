import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'



const Vue = createApp(App)
Vue.use(router) //adicionando as configurações de rota ao APP
Vue.mount('#app')
