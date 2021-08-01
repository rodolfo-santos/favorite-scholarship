<template>
  <div class="card d-flex column center px-2 py-4 text-center" @click="$emit('click')">
    <div class="card__logo mb-4">
      <img class="card__logo-image" :src="data.university.logoUrl" :alt="data.university.name" />
    </div>
    <div class="card__title mb-4">
      <div class="card__university text-bold text-uppercase">{{ data.university.name }}</div>
      <div class="card__course mb-1 text-bold text-primary">{{ data.course.name }}</div>
      <div class="card__level">
        <div class="d-flex center">
          <div class="text-bold mr-2">
            {{ data.university.score }}
          </div>
          <ul class="d-flex">
            <li><i class="fas fa-star text-secondary"></i></li>
            <li><i class="fas fa-star text-secondary"></i></li>
            <li><i class="fas fa-star text-secondary"></i></li>
            <li><i class="fas fa-star-half-alt text-secondary"></i></i></li>
            <li><i class="far fa-star text-secondary"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card__info d-flex column mb-4">
      <div class="text-uppercase text-bold mb-2">{{ data.course.kind }} . {{ data.course.shift }}</div>
      <p>Início das Aulas em: {{ data.startDate }}</p>
    </div>
    <div class="card__footer d-flex column">
      <p class="text-bold">Mensalidade com o Quero Bolsa:</p>
      <div class="my-2">
        <p class=" text-through">{{ data.fullPrice | currencyBRL }}</p>
        <p ><span class="card__price text-success text-bold">{{ data.fullPrice | currencyBRL }}</span>/mês</p>
      </div>

      <div class="d-flex">
        <button class="mr-2" @click="removeFavorite(index)">Excluir</button>
        <button v-if="data.enabled" class="btn-secondary">Ver Oferta</button>
        <button v-else disabled>Indisponível</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { IScholarship } from '~/models/IScholarship';

const scholarship = namespace('Scholarship');

@Component
export default class ScholarshipCard extends Vue {
  @Prop() public data!: IScholarship;
  @Prop() public index!: number;

  @scholarship.Action
  public removeFavorite!: (index: number) => void;
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 550px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }

  &__logo {
    height: 75px;
  }

  &__price {
    font-size: 1.5rem;
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
