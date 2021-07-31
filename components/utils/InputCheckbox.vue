<template>
  <div>
    <label class="w-100 d-flex center" @click="syncedValue = !syncedValue">
      <i v-show="!syncedValue" class="far fa-square"></i>
      <i v-show="syncedValue" class="fas fa-check-square text-primary"></i>
      <span v-if="label" class="ml-1">{{ label }}</span>
    </label>
    <input v-model="syncedValue" :checked="syncedValue" type="checkbox" name="checkbox" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class InputCheckBox extends Vue {
  @PropSync('value') public syncedValue!: string;
  @Prop({ default: null }) public label!: string;
}
</script>

<style lang="scss" scoped>
input {
  display: none;
}

i {
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.25;
  left: 0;
}
</style>
