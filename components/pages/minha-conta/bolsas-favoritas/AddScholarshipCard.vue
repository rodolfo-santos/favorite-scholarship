<template>
  <div class="card d-flex center px-2 py-2 text-center" @click="openAddModal()">
    <div class="d-flex center">
      <div class="card__add d-flex center mb-4">
        <i class="fas fa-plus"></i>
      </div>
      <div>
        <span class="card__title text-bold"> Adicionar bolsa </span>
        <p class="card__description px-2">Clique para adicionar bolsas de cursos do seu interesse</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddScholarshipCard extends Vue {
  public openAddModal(): void {
    this.$router.push('/minha-conta/bolsas-favoritas/adicionar');
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 550px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.25s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }

  &__add {
    border: solid 5px $primary;
    height: 75px;
    width: 75px;
    border-radius: 50%;

    i {
      font-size: 2.5em;
      color: $primary;
    }
  }

  &__title {
    font-size: 1.3em;
  }

  &__description {
    font-weight: 100;
    line-height: 1.5em;
  }
}
</style>
