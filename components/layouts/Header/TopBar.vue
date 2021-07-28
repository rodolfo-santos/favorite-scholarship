<template>
  <div class="topbar container d-flex-between">
    <HowItWorks class="how-it-works" />
    <div class="d-flex center logo">
      <img src="~/static/images/logo_quero_bolsa.jpg" alt="Logotipo Quero Bolsa" class="py-1" />
    </div>
    <Profile class="profile" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HowItWorks from './Topbar/HowItWorks.vue';
import Profile from './Topbar/Profile.vue';

@Component({ components: { HowItWorks, Profile } })
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
img {
  max-height: 75px;
}

.topbar {
  height: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.topbar > div {
  height: 100%;
}

@include small {
  img {
    max-height: 100px;
  }
}

@include large {
  .topbar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .how-it-works {
    grid-column: 1 / 6;
  }

  .logo {
    grid-column: 6 / 8;
  }

  .profile {
    grid-column: 8 / 13;
  }
}
</style>
