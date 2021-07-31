<template>
  <div>
    <div class="table-header pb-4 d-flex between">
      <span class="text-bold">Resultado: </span>
      <span class="text-bold">
        Ordenar por <span class="text-primary-variant"> Nome da Faculdade <i class="fas fa-chevron-down"></i></span>
      </span>
    </div>
    <div class="w-100">
      <ScholarshipRow v-for="(item, index) in list" :key="index" :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ScholarshipRow from './ScholarshipRow.vue';
import ScholarshipService from '~/services/ScholarshipService';
import { IScholarship } from '~/models/IScholarship';

@Component({ components: { ScholarshipRow } })
export default class ScholarshipTable extends Vue {
  @Prop() public list!: IScholarship[];
  public scholarshipService = new ScholarshipService();
}
</script>

<style lang="scss" scoped>
.table-header {
  border-bottom: 1px solid $muted;
}
</style>
