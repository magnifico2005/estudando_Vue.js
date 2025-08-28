<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
       </div>
    </div>
<div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
<div class="col">
    <vaga v-bind="vaga"></vaga>
  </div>
  </div>


<div class="row mt-5">
<div class="col-4">
  <indicador titulo="vagas Abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>


</div>
<div class="col-4">
<indicador titulo="Profissionais cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador>

</div>
<div class="col-4">
<indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-ligth" color="text-dark"></indicador>

</div>

</div>

  </div>
 
</template>

<script>
import Indicador from '@/components/comuns/Indicadores.vue'
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import Vaga from '@/components/comuns/Vaga.vue'
export default{
   name: 'Home',
  components: { 
    PesquisarVaga,
     Indicador,
    Vaga},
     data:() =>({
        usuariosOnline:0,
        vagas: []
     }),

     methods:{
        getUsuariosOnline(){
          this.usuariosOnline = Math.floor(Math.random() * 101)
        }
       },

    created(){
      console.log('Componente criado')
    },


    activated(){
      console.log("Componente é ativado")
      setInterval(this.getUsuariosOnline, 1000)
    },
    deactivated(){
      console.log("componente desativado")
    },
    beforeUnmount(){
      console.log("Antes de montar/destruir")
    }, 
      unmounted(){
      console.log("Desmontado/destruído")
    },

    mounted(){
      this.vagas = JSON.parse(localStorage.getItem('vagas'))
    }
}
</script>


<style scoped>

</style>
