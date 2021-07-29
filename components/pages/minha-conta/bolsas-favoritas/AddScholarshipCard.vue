<template>
  <div class="card d-flex center px-2 py-2 text-center">
    <div class="d-flex center">
      <div class="add-icon d-flex center mb-4">
        <i class="fas fa-plus"></i>
      </div>
      <div>
        <span class="text-bold"> Adicionar bolsa </span>
        <p class="px-2">Clique para adicionar bolsas de cursos do seu interesse</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddScholarshipCard extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  min-height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
}

.add-icon {
  border: solid 5px $primary;
  height: 75px;
  width: 75px;
  border-radius: 50%;

  i {
    font-size: 2.5em;
    color: $primary;
  }
}

span {
  font-size: 1.3em;
}

p {
  font-weight: 100;
  line-height: 1.5em;
}
</style>
