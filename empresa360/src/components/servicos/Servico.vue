<template>
  <div class="card">
    <div class="card-header bg-primary text-white"></div>
    <div class="card-body">
      <p class="card-text">{{ dadosRecebidos.descricao }}</p>
    </div>
  </div>
</template>
<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Servico",
  mixins: [ApiMixin],

  created() {
    this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
  },
  watch: {
    $route(to) {
      console.log(to.params);
      if (to.params.id != undefined)
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
    },
  },
};
</script>
