<template>
  <slot name="titulo" :dadosTitulo="{ titulo: 'Título Lista', nroVagas: 15 }">
    <p>Título da Lista de vagas</p>
  </slot>

  <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga"></vaga>
      </div>
    </div>
  </slot>

  <slot
    name="rodape"
    :dadosRodape="{
      titulo: 'Rodapé Lista',
      paginacao: { nroPaginas: 10, paginaAtual: 5 },
    }"
  >
    <p>rodapé da lista de vagas</p>
  </slot>
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";
export default {
  name: "ListaVagas",
  data: () => ({
    vagas: [],
  }),
  components: {
    Vaga,
  },

  activated() {
    console.log("Componente é ativado");
    setInterval(this.getUsuariosOnline, 1000);
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (tituloVaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      console.log(vagas);
      console.log(tituloVaga);

      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(tituloVaga.titulo.toLowerCase())
      );
    });
  },
};
</script>
