<template>
  <div>
    <div class="table-header pb-4 d-flex between">
      <span class="text-bold">Resultado: </span>
      <span class="text-bold">
        Ordenar por <span class="text-primary-variant"> Nome da Faculdade <i class="fas fa-chevron-down"></i></span>
      </span>
    </div>
    <div class="w-100">
      <ScholarshipRow v-for="(scholarship, index) in scholarships" :key="index" :data="scholarship" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScholarshipRow from './ScholarshipRow.vue';
import ScholarshipService from '~/services/ScholarshipService';
import { IScholarship } from '~/models/IScholarshop';

@Component({ components: { ScholarshipRow } })
export default class ScholarshipTable extends Vue {
  public scholarshipService = new ScholarshipService();
  public scholarships: IScholarship[] = [];

  public mounted(): void {
    this.scholarships = this.scholarshipService.get();
  }
}
</script>

<style lang="scss" scoped>
.table-header {
  border-bottom: 1px solid $muted;
}
</style>
