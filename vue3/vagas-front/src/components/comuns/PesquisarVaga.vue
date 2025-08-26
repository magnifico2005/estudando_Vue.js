<template>
           <div class="h-100 p-5 bg-light border rouded-3">
                      <h2>Pesquisar vagas</h2>
    <div class="row">
    <div class="col">
        <div class="form-group">
          <label> Título da vaga</label>
            <input type="text" class="form-control" placeholder="Pesquise por palavras chaves">
            <small class="form-text text-muted">Informe palavras que estejam relacionadas com o título da vaga</small>
    </div>
  </div>
  <div class="row">
  <div class="col">
    <button class="btn btn-outline-dark mt-4" type="button">Buscar</button>
  </div>
        </div>
  </div>
</div>
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
export default {
    name: 'PesquisarVaga',
    componetes: {
        PesquisarVaga
    }
}

</script>
