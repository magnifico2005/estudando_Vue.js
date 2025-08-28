<template>
  <div>
     <h1>Componente App</h1>
     <button @click="desmontarComponente()">Desmontar o componente conteúdo.</button>
    <topo-padrao @nomeDoEventoQueSeraCapturadoNoComponentePai="acao($event)"/>
    <conteudo v-if="visibilidade"> </conteudo>
  </div>
 
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true
  }),
  methods:{
      desmontarComponente(){
        this.visibilidade =false

      },
      acao(p){
        console.log(p)
      }
  },
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style scoped>

</style>
