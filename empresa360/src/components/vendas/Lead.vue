<template>
  <h5>{{ dadosRecebidos.id }} - {{ dadosRecebidos.nome }}</h5>
  <table class="table table-hover">
    <tr class="mt-5">
      <th scope="col">ID</th>
      <th scope="col">NOME</th>
      <th scope="col">TELEFONE</th>
    </tr>
    <tr class="mt-3">
      <td v-text="dadosRecebidos.id"></td>
      <td v-text="dadosRecebidos.nome"></td>
      <td v-text="dadosRecebidos.telefone"></td>
    </tr>
  </table>
  <br />
  <br />
  <br />
  <hr />
  <br />
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">ID</label>
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control-plaintext"
        :value="dadosRecebidos.id"
      />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">NOME</label>
    <div class="col-sm-10">
      <input type="text" Class="form-control" :value="dadosRecebidos.nome" />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">TELEFONE</label>
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        :value="dadosRecebidos.telefone"
      />
    </div>
    <div class="col d-flex justify-content-between">
      <button type="button" class="btn btn-primary">Botão</button>
      <button
        type="button"
        class="btn btn-warning"
        @click="$router.push({ name: 'leads' })"
      >
        Voltar
      </button>
    </div>
  </div>
</template>
<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Lead",
  mixins: [ApiMixin],

  created() {
    this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`);
  },
};
</script>
