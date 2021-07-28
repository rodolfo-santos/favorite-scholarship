<template>
  <div class="d-flex-between">
    <i class="text-white mr-2" :class="icon"></i>
    <div class="d-flex-column text-white">
      <span>{{ text }}</span>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class FooterWidget extends Vue {
  @Prop() public icon!: string;
  @Prop() public text!: string;
  @Prop() public description!: string;
}
</script>

<style lang="scss" scoped>
i {
  font-size: 2.5rem;
}
</style>
