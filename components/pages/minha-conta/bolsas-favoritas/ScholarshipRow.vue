<template>
  <div v-if="data" class="scholarship-row d-flex w-100">
    <div class="d-flex select-logo">
      <InputCheckBox id="my-check" :value.sync="checked" />
      <div class="d-flex center logo">
        <img :src="data.university.logoUrl" :alt="data.university.name" />
      </div>
    </div>
    <div class="name-value">
      <div class="mb-4">
        <p class="text-bold text-primary-variant mb-1">{{ data.course.name }}</p>
        <small>{{ data.course.level }}</small>
      </div>
      <div class="text-left text-lg-right">
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
  min-height: 200px;
  border-bottom: 1px solid $muted;
}

.select-logo {
  flex: 1;
  height: 50%;
}

.logo {
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 15px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.name-value {
  flex: 1;
}

@include extra-large {
  .logo {
    flex: 1;
    height: 100%;
    padding: 50px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .name-value {
    flex: 2;
    display: flex;
    justify-content: space-between;
  }
}
</style>
