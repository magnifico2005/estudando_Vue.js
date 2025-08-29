<template>



  <keep-alive>
   <component :is="conteudo"></component>
   </keep-alive>
</template>

<script>

import PublicarVaga from '@/components/views/PublicarVaga.vue';
import Home from '@/components/views/Home.vue';
export default{
    name: 'Conteudo',
    props:{
      conteudo:{
          type:String,
          required: true

      }
    },
    components: {
      Home,
      PublicarVaga
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
