<template>
  <div class="table">
    <div class="table__header pb-4 d-flex between">
      <span class="text-bold">Resultado: </span>
      <span class="text-bold d-flex">
        <span> Ordenar por</span>
        <InputSelect :value.sync="orderBy" :options="orderOptions" type="text" />
      </span>
    </div>
    <div v-if="list.length > 0" class="w-100">
      <ScholarshipRow v-for="(item, index) in list" :key="index" :data="item" @select="selectItem" />
    </div>
    <div v-else class="table__notfound d-flex center">Nenhum resultado encontrado.</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScholarshipRow from './ScholarshipRow.vue';
import ScholarshipService from '~/services/ScholarshipService';
import { IScholarship } from '~/models/IScholarship';
import InputSelect from '~/components/utils/InputSelect.vue';

@Component({ components: { ScholarshipRow, InputSelect } })
export default class ScholarshipTable extends Vue {
  @Prop() public list!: IScholarship[];
  public scholarshipService = new ScholarshipService();
  public orderBy = { id: 'nomedafaculdade', label: 'Nome da Faculdade' };
  public listToAdd: IScholarship[] = [];
  public orderOptions = [
    { id: 'nomedafaculdade', label: 'Nome da Faculdade' },
    { id: 'preco', label: 'Preço' },
  ];

  @Watch('orderBy')
  public onOrderByChanged(): void {
    this.list = this.list.sort((a, b) => {
      type orderResult = -1 | 1 | 0;
      const orderByPrice: orderResult = a.priceWithDiscount < b.priceWithDiscount ? -1 : a.priceWithDiscount > b.priceWithDiscount ? 1 : 0;
      const orderByUniversity: orderResult = a.university.name < b.university.name ? -1 : a.university.name > b.university.name ? 1 : 0;

      if (this.orderBy.label === 'Preço') return orderByPrice;
      return orderByUniversity;
    });
  }

  public selectItem(scholarship: IScholarship, checked: boolean) {
    if (checked) this.listToAdd.push(scholarship);
    else this.listToAdd = this.listToAdd.filter(el => JSON.stringify(el) !== JSON.stringify(scholarship));

    this.$emit('updateListToAdd', this.listToAdd);
  }
}
</script>

<style lang="scss" scoped>
.table__header {
  border-bottom: 1px solid $muted;
}

.table__notfound {
  min-height: 300px;
}
</style>
