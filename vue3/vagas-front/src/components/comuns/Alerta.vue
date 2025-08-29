<template>
  <div>
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
};
</script>
