<template>
  <div class="card d-flex center px-2 py-2 text-center" @click="$emit('click')">
    <img :src="data.university.logoUrl" :alt="data.university.name" />
    <div>{{ data.university.name }}</div>
    <div>{{ data.course.name }}</div>
    <div>{{ data.course.level }}</div>
    <hr />
    <div>{{ data.course.kind }} - {{ data.course.shift }}</div>
    <p>Início das Aulas em: {{ data.startDate }}</p>
    <hr />
    <div>{{ data.fullPrice | currencyBRL }}</div>
    <div>{{ data.fullPrice | currencyBRL }}/mês</div>
    <div class="d-flex">
      <button @click="removeFavorite(index)">Excluir</button>
      <button class="bg-secondary">Ver Oferta</button>
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
  min-height: 600px;
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
