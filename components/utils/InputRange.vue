<template>
  <div>
    <div>
      <label class="text-bold text-uppercase d-flex mb-1">Até quanto pode pagar ?</label>
      <span>{{ syncedPrice | currencyBRL }}</span>
    </div>
    <input v-model.number="syncedPrice" type="range" :min="min" :max="max" class="w-100" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class InputRange extends Vue {
  @PropSync('price', { type: Number }) public syncedPrice!: number;
  @Prop({ default: 0 }) public min!: string;
  @Prop({ default: 1000 }) public max!: string;
}
</script>

<style lang="scss" scoped>
input[type='range'] {
  -webkit-appearance: none;
  margin: 20px 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: $primary;
    border-radius: 1.3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: solid 3px $primary;
    background: #ffffff;
    cursor: pointer;
    margin-top: -15px;
  }
}
</style>
