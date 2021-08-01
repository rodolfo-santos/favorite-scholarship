<template>
  <div class="widget py-3 bg-primary-variant">
    <div class="widget__mobile d-xl-none" :class="{ 'd-flex center': !fixedLargeContent, 'd-none': fixedLargeContent }">
      <div class="widget__content d-flex column text-white">
        <i class="mb-1" :class="icon"></i>
        <span class="w-100 mb-1 text">{{ shortText }}</span>
      </div>
    </div>

    <div class="widget__desktop d-xl-flex" :class="{ 'd-none': !fixedLargeContent, 'd-flex center': fixedLargeContent }">
      <i class="text-white mr-2" :class="icon"></i>
      <div class="d-flex column text-white">
        <span class="widget__title text-bold w-100 mb-1">{{ text }}</span>
        <span class="widget__description text-bold w-100">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class FooterWidget extends Vue {
  @Prop() public icon!: string;
  @Prop() public text!: string;
  @Prop() public shortText!: string;
  @Prop() public description!: string;
  @Prop({ default: false }) public fixedLargeContent!: boolean;
}
</script>

<style lang="scss" scoped>
.widget {
  &__title {
    font-size: 1.3rem;
  }

  &__description {
    font-size: 1.1rem;
  }
}

i {
  font-size: 3rem;
}
</style>
