<template>
  <div v-if="data" class="scholarship-row d-flex w-100">
    <div class="d-flex select-logo">
      <InputCheckBox id="my-check" :value.sync="checked" class="mr-4" />
      <div class="d-flex center logo">
        <img :src="data.university.logoUrl" :alt="data.university.name" />
      </div>
    </div>
    <div class="d-flex between name-value">
      <div>
        <p class="text-bold text-primary-variant mb-1">{{ data.course.name }}</p>
        <small>{{ data.course.level }}</small>
      </div>
      <div class="text-right">
        <p>
          Bolsa de <span class="text-bold text-success">{{ data.discountPercentage }}%</span>
        </p>
        <p class="text-bold text-success">{{ data.priceWithDiscount | currencyBRL }}/mês</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InputCheckBox from '~/components/utils/InputCheckbox.vue';
import { IScholarship } from '~/models/IScholarshop';

@Component({ components: { InputCheckBox } })
export default class ScholarshipRow extends Vue {
  @Prop({ default: () => [] }) data!: IScholarship;
  public checked: boolean = false;
}
</script>

<style lang="scss" scoped>
.scholarship-row {
  padding: 20px 0;
  height: 100px;
  border-bottom: 1px solid $muted;
}

.select-logo {
  flex: 1;
  height: 100%;
}

.logo {
  flex: 1;
  height: 100%;

  img {
    max-width: 150px;
    max-height: 100%;
  }
}

.name-value {
  flex: 2;
}
</style>
