<template>
  <div class="overlay d-flex center">
    <div class="card px-4 py-4">
      <i class="fas fa-times close-button text-white"></i>
      <h1 class="mb-1">Adicionar bolsa</h1>
      <p class="text-muted">Filtre e adicione as bolsas de seu interesse.</p>
      <InputSelect />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputSelect from './InputSelect.vue';

@Component({ components: { InputSelect } })
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(#000000, $alpha: 0.7);
}

.card {
  height: 100%;
  width: 100%;
  max-height: 700px;
  max-width: 900px;
  background-color: #ffffff;

  position: relative;
}

.close-button {
  position: absolute;
  right: 0;
  top: -50px;
  font-size: 3em;
}
</style>
