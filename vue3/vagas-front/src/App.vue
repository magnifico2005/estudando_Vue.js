<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event" />
    <Alerta v-if="exibirAlerta">
      <template v-slot:titulo>
        <p>Nescessário preencer o título</p>
      </template>
      <template v-slot:descricao>
        <slot>
          <p>Nescessário preencher a descrição</p>
        </slot>
      </template>
      <template v-slot:tipo>
        <slot>
          <p>Nescessário preencher a tipo</p>
        </slot>
      </template>
      <template v-slot:modalidade>
        <slot>
          <p>Nescessário preencher a modalidade</p>
        </slot>
      </template>
      <template v-slot:salario>
        <slot>
          <p>Nescessário preencher a salario</p>
        </slot>
      </template>
    </Alerta>
    <conteudo v-if="visibilidade" :conteudo="componente"> </conteudo>
  </div>
</template>

<script>
import Alerta from "@/components/comuns/Alerta.vue";
import Conteudo from "@/components/layouts/Conteudo.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import VagasFavoritas from "./components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
    Alerta,
  },
  data: () => ({
    visibilidade: true,
    componente: "home",
    exibirAlerta: false,
  }),
  mounted() {
    this.emitter.on("Alerta", () => {
      this.exibirAlerta = true;
      setTimeout(() => (this.exibirAlerta = false), 4000);
      console.log("Apresentar a mensagem de alerta customisado.");
    });
  },
};
</script>

<style scoped></style>
