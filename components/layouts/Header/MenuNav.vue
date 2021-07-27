<template>
  <div class="bg-primary">
    <nav class="container">
      <NuxtLink to="/minha-conta" class="nuxt-link py-2 px-4">Minha Conta</NuxtLink>
      <NuxtLink to="/pre-matriculas" class="nuxt-link py-2 px-4">Pré-matrículas</NuxtLink>
      <NuxtLink to="/" class="nuxt-link py-2 px-4">Bolsas favoritas</NuxtLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class MenuNav extends Vue {}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
}

.nuxt-link {
  color: #fff;
  font-size: 1.4rem;
  transition: 0.25s;

  &:hover {
    background-color: darken($primary, 5%);
  }
}

.nuxt-link-active {
  background: $primary-variant;
  &:hover {
    background-color: $primary-variant;
  }
}
</style>
