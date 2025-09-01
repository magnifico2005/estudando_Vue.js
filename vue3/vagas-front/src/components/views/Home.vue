<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <lista-vagas> </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <indicador
          titulo="vagas Abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-ligth"
          color="text-dark"
        ></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicadores.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas,
  },
  data: () => ({
    usuariosOnline: 0,
  }),

  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101 + (10 / 3) * 5 + 17);
    },
  },

  created() {
    console.log("Componente criado");
  },

  deactivated() {
    console.log("componente desativado");
  },
  beforeUnmount() {
    console.log("Antes de montar/destruir");
  },
  unmounted() {
    console.log("Desmontado/destruído");
  },
};
</script>

<style scoped></style>
