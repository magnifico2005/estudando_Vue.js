<template>
    <div class="card">

  <div class="card-header bg-dark text-white">{{titulo}}</div>
  <div class="card-body">
    <p>{{descricao}}</p>
  </div>
  <div class="card-footer p-1">
  <small class="text-muted p-1 m-1">Salário: R${{salario}} | Modalidade: {{modalidade}} | Tipo: {{ tipo }} | Publicação: {{publicacao}} </small>  
  </div>

</div>
</template>

<script>
export default {
    name: 'Vaga',
   // props: ['tituloVaga', 'descricao', 'salario', 'modalidade' , 'tipo', 'publicacao'],
   props:{
    titulo: {
      type:String,
      required: true,
      validator(p)
      {
          console.log('Prop: ', p,' tamanho', p.length)
          if(p.length < 6){
          return false
          }
          console.log('Testando props' , p , 'e' , p.length)
          return true
      }
    },
    descricao: {
      type:String,
      required: true,
      default(){
        return '*'.repeat(40)
      }
    },
    salario:  {
      type:[Number,String],
      required: true
    },
    modalidade:  {
      type:String,
      required: true
    },
    tipo:  {
      type:String,
      required: true
    },
    publicacao:  {
      type:String,
      required: true
    },
    
   },
   

}
</script>
