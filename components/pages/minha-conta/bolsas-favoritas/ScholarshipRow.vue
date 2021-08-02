<template>
  <div v-if="data" class="row d-flex w-100">
    <div class="row__box d-flex">
      <InputCheckBox :value.sync="checked" />
      <div class="row__logo d-flex center">
        <img :src="data.university.logoUrl" :alt="data.university.name" />
      </div>
    </div>
    <div class="row__box">
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import InputCheckBox from '~/components/utils/InputCheckbox.vue';
import { IScholarship } from '~/models/IScholarship';

@Component({ components: { InputCheckBox } })
export default class ScholarshipRow extends Vue {
  @Prop({ default: () => [] }) data!: IScholarship;
  @Prop() selected!: boolean;
  public checked: boolean = false;

  @Watch('checked')
  public onCheckedChanged(): void {
    this.$emit('select', this.data, this.checked);
  }

  public mounted() {
    if (this.selected) this.checked = true;
  }
}
</script>

<style lang="scss" scoped>
.row {
  padding: 20px 0;
  min-height: 200px;
  border-bottom: 1px solid $muted;

  &__box {
    &:first-child {
      flex: 1;
    }

    &:last-child {
      flex: 1;
    }
  }

  &__logo {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 15px;
  }
}

@include extra-large {
  .row {
    &__logo {
      padding: 50px;
    }

    &__box:last-child {
      flex: 2;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
