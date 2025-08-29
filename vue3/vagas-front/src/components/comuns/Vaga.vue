<template>
    <div class="card">

  <div class="card-header bg-dark text-white">
    <div class="row">
      <div class="col d-flex justify-content-between">
        <div>
          {{titulo}} 
        </div>
        <div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="favoritada">
            <label class="form-check-label">Favoritar</label>
         
          
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="card-body">
    <p>{{descricao}}</p>
  </div>
  <div class="card-footer p-1">
  <small class="text-muted p-1 m-1">Salário: R${{salario}} | Modalidade: {{getModalidade}} | getTipo: {{ getTipo }} | Publicação: {{getPublicacao}} </small>  
  </div>

</div>
</template>

<script>
export default {
    name: 'Vaga',

    data: () =>({
      favoritada: false
    }),
 watch:{

  favoritada(valorNovo){
    if(valorNovo){
      this.emitter.emit('favoritarVaga', this.titulo)
    }else{
      this.emitter.emit('desFavoritarVaga', this.titulo)
    }
  }

 },

     props:{
    titulo: {
      type:String,
      required: true,
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
   computed:{
      getModalidade(){
        switch(this.modalidade){
          case '1': return 'Home office'
          case '2': return 'Presencial'
        }
            return ''
      },

      getTipo(){
        switch(this.tipo){
          case '1': return 'clt'
          case '2': return 'pj'
        }
return ''
      },
      getPublicacao(){

        let dataPublicacao = new Date(this.publicacao)
        return dataPublicacao.toLocaleString('pt-BR')

      }
   },
   methods:{
  
   }
   

}
</script>
