<template>
  <h5>Serviços</h5>
  <hr />
  <div class="row mt-5">
    <div class="col" mb-2 v-for="d in dadosRecebidos" :key="d.id">
      <div class="card" style="width: 11rem"></div>
      <img class="card-img-top" :src="`/img/${d.icone}`" />
      <div class="card-body text-center">
        <router-link :to="{ name: 'servico', params: { id: d.id } }">
          <p class="card-text">{{ d.servico }}</p></router-link
        >
      </div>
    </div>
    <router-view class="mt-3"></router-view>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ServicosComponent",
  mixins: [ApiMixin],
  created() {
    console.log("chegamos até aqui");
    this.getDadosApi("http://localhost:3000/servicos");
  },
};
</script>
