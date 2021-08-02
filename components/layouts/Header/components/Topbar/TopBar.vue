<template>
  <div class="topbar container">
    <HowItWorks class="topbar__box" />
    <div class="topbar__box d-flex center logo">
      <img src="~/static/images/logo-querobolsa.svg" alt="Logotipo Quero Bolsa" class="py-1" />
    </div>
    <Profile class="topbar__box" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HowItWorks from './HowItWorks.vue';
import Profile from './Profile.vue';

@Component({ components: { HowItWorks, Profile } })
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
.topbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@include small {
  img {
    max-height: 100px;
  }
}

@include large {
  .topbar {
    grid-template-columns: repeat(12, 1fr);

    &__box:first-child {
      grid-column: 1 / 6;
    }

    &__box {
      grid-column: 6 / 8;
    }

    &__box:last-child {
      grid-column: 8 / 13;
    }
  }
}
</style>
