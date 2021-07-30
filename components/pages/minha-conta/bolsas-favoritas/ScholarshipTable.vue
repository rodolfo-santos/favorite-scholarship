<template>
  <div>
    <div class="table-header pb-4 d-flex between">
      <span class="text-bold">Resultado: </span>
      <span class="text-bold">
        Ordenar por <span class="text-primary-variant"> Nome da Faculdade <i class="fas fa-chevron-down"></i></span>
      </span>
    </div>
    <div class="w-100">
      <ScholarshipRow />
      <ScholarshipRow />
      <ScholarshipRow />
      <ScholarshipRow />
      <ScholarshipRow />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScholarshipRow from './ScholarshipRow.vue';

@Component({ components: { ScholarshipRow } })
export default class ScholarshipTable extends Vue {}
</script>

<style lang="scss" scoped>
.table-header {
  border-bottom: 1px solid $muted;
}
</style>
