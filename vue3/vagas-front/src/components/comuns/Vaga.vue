<template>
    <div class="card">

  <div class="card-header bg-dark text-white">{{titulo}}</div>
  <div class="card-body">
    <p>{{descricao}}</p>
  </div>
  <div class="card-footer p-1">
  <small class="text-muted p-1 m-1">Salário: R${{salario}} | Modalidade: {{modalidade}} | Tipo: {{ tipo }} | Publicação: {{piublicacao}} </small>  
  </div>

</div>
</template>

<script>
export default {
    name: 'Vaga',
    props: ['titulo', 'descricao', 'salario', 'modalidade' , 'tipo', 'publicacao']

}
</script>
