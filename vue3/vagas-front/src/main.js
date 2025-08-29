import { createApp } from 'vue'
import App from './App.vue'



import mitt from 'mitt'


const emitter = mitt()

//iniciando a instancia do vue com base no componente app
const app = createApp(App)


///configurar instancia do pacote mitt como sendo uma propriedade global.
//esta propriedade estara disponivel para todas as instancias do componente dentro do app


app.config.globalProperties.emitter = emitter

//associar a instância do vue com elemento html de id app
app.mount('#app')


//createApp(App).mount('#app')
