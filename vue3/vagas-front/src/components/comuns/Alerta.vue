<template>
  <div :class="estiloAlerta" role="Alerta">
    <slot name="titulo">
      <h3>Título da mensagem de feedback</h3>
    </slot>
    <slot name="descricao">
      <p>Mesnagem de feedback</p>
    </slot>
    <slot name="tipo"></slot>
    <slot name="salario"></slot>
    <slot name="modalidade"></slot>
  </div>
</template>

<script>
export default {
  name: "Alerta",
  props: {
    tipo: String,
  },
  computed: {
    estiloAlerta() {
      switch (this.tipo) {
        case "erro":
          return "alert alert-damger";
        case "sucesso":
          return "alert alert-success";
        default:
          return "alert alert-success";
      }
    },
  },
};
</script>
