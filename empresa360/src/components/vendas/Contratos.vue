<template>
  <h5>Contratos</h5>

  <router-link
    class="btn btn-primary"
    :to="{ name: 'contratos', query: { leadId_like: 1 } }"
    >LeadID = 1</router-link
  >
  <router-link
    class="btn btn-primary"
    to="/home/vendas/contratos?servicosId_like=2"
    >LeadID = 2</router-link
  >
  <div class="row mt-5">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVICO</th>
          <th scope="col">DATA INÍCIO</th>
          <th scope="col">DATA FIM</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dadosRecebidos" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.lead.nome }}</td>
          <td>{{ d.servico.servico }}</td>
          <td>{{ d.data_inicio }}</td>
          <td>{{ d.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "Contratos",
  mixins: [ApiMixin],
  data: () => ({
    parametroDeRelacionamento: "_expand=lead&_expand=servico",
  }),
  created() {
    this.getDadosApi(
      `http://localhost:3000/contratos?${this.parametroDeRelacionamento}`
    );
  },
  beforeRouteUpdate(to, from, next) {
    const queryParams = new URLSearchParams(to.query).toString();
    const url =
      "http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&{$queryParams";
    console.log(url, queryParams);
    this.getDadosApi(url);
    next();
  },
};
</script>
