<template>
  <div>
    <div class="d-none d-xl-flex right text-primary h-100">
      <span class="mr-2"> Nome Sobrenome </span>
      <i class="far fa-user-circle"></i>
    </div>

    <div class="d-flex right d-xl-none h-100 text-primary user">
      <div class="d-flex column">
        <i class="far fa-user-circle"></i>
        <span>Conta</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
i {
  font-size: 1.4rem;
}

span {
  font-size: 1.2rem;
}
</style>
