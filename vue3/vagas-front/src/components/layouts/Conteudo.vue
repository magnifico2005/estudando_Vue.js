<template>
  <div>
<h1>{{titulo}}</h1></div>
<button @click="atualizarComponente()">Atualizar</button>
<button @click="conteudo = 'home'">Componente Home</button>
<button @click="conteudo = 'publicarVaga'">Componente publicar vaga</button>

  <keep-alive>
   <component :is="conteudo"></component>
   </keep-alive>
   
 <!--<home> </home>
 <publicar-vaga></publicar-vaga>-->
</template>

<script>

import PublicarVaga from '@/components/views/PublicarVaga.vue';
import Home from '@/components/views/Home.vue';
export default{
    name: 'Conteudo',

    data: () => ({
      teste: "o componente foi criado",
      titulo: "Componente Conteúdo",
      conteudo:'home'
    }),
    components: {
      Home,
      PublicarVaga
    },
    methods:{
atualizarComponente(){
  this.titulo += '*'
}
    },
    /*
    beforeCreate(){
      console.log("Componente criado", this.teste)

    },
    created(){
      console.log("criado" , this.teste)
    },
    beforeMount(){
      console.log("antes de montar o template")
    },    
    beforeUpdate(){
      console.log("antes de atualizar")
    },
    mounted(){
      console.log("Montado")
    }
    
    updated(){
      console.log("Atualizado")
    },
    beforeUnmount(){
      console.log("Antes de montar/destruir")
    },
    unmounted(){
      console.log("Desmontado/Destruído")
    },
    errorCaptured(){
      console.log("Error")
    },
    renderTracked(){
      console.log("Re-renderização rastreada")
    },
    renderTriggered(){
      console.log("Re-renderização acionada")
    },
    */
    activated(){
      console.log("Componente é ativado")
    },
    deactivated(){
      console.log("desativado")
    }
}
</script>


<style module>

.teste1{
  background-color: red;
}
#teste2{
  background-color: yellow;
}
</style>
