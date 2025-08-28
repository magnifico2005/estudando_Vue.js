<template>
    
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h4>Apresente a sua vaga para milhares de profissionais de graça</h4>
        </div>
      </div>


      <div class="row mt-3">
        <div class="col">
          <label class="form-label">Título da vaga</label>
          <input type="text" class="form-control" v-model="titulo">
          <div class="form-text">Por exemplo: Programador JavaScript e VueJS. </div>
        </div>

      </div>

       <div class="row mt-3">
        <div class="col">
          <label class="form-label">Descrição</label>
          <textarea type="text" class="form-control" v-model="descricao"></textarea>
          <div class="form-text">Descrição da vaga. </div>
        </div>

      </div>

        <div class="row mt-3">
        <div class="col">
          <label class="form-label">Salário</label>
          <input type="number" class="form-control" v-model="salario">
          <div class="form-text">Informe o salário</div>
        </div>

      

        
        <div class="col">
          <label class="form-label">Modalidade</label>
          <select class="form-select" v-model="modalidade">
            <option value="" disabled>--Selecione</option>
            <option value="1">Home Office</option>
            <option value="2">Hibrido</option>
            <option value="3">Residencial</option>
            </select>
          <div class="form-text">Informe a modalidade </div>
        </div>

     

         
        <div class="col">
          <label class="form-label">Tipo</label>
          <select class="form-select" v-model="tipo">
            <option value="" disabled>--Selecione</option>
            <option value="1">CLT</option>
            <option value="2">PJ</option>
            </select>
          <div class="form-text">Informe um tipo de contratação</div>
        </div>
      </div>
     

      <div class="row mt-3">
        {{ titulo }} | {{ descricao }} | {{ salario }} | {{ modalidade }} | {{ tipo }}
        <div class="col">
          <button type="submit" class="btn btn-primary" @click="salvarVaga">Cadastrar</button>
        </div>

      </div>
       
    </div>
  

 
</template>

<script>
export default{
    name: 'Publicar Vaga',
    data: () => ({
    
          titulo:'',
          descricao:'',
          salario:'',
          modalidade:'',
          tipo:'',
          

    }),
    methods:{
      salvarVaga(){

        let tempoDecorrido =  Date.now()
        let dataAtual = new Date(tempoDecorrido) 
        
        let vagas = JSON.parse(localStorage.getItem('vagas'))

            if(!vagas) vagas =[]

        vagas.push({
            titulo:this.titulo,
            descricao:this.descricao,
            salario:this.salario,
            modalidade:this.modalidade,
            tipo:this.tipo,
            publicacao:  dataAtual.toISOString()

        })
        localStorage.setItem('vagas', JSON.stringify(vagas))
      }

    }
  
}
</script>


<style>
</style>
