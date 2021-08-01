<template>
  <div class="menu bg-primary">
    <nav class="container d-none d-lg-flex">
      <NuxtLink to="/minha-conta" class="menu__account py-2 pr-4 text-bold">Minha Conta</NuxtLink>
      <NuxtLink v-for="(link, index) in menuItens" :key="index" :to="link.link" class="nuxt-link py-2 px-4">{{ link.label }}</NuxtLink>
    </nav>

    <nav class="container d-flex between d-lg-none">
      <NuxtLink to="/minha-conta" class="menu__account py-2 text-bold text-white">Minha Conta</NuxtLink>
      <DropdownButton label="Menu" :links="menuItens" />
      <div class="d-none d-lg-flex-column">
        <NuxtLink v-for="(link, index) in menuItens" :key="index" :to="link.link" class="nuxt-link py-2 px-4">{{ link.label }}</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DropdownButton from '~/components/utils/DropdownButton.vue';
import { IMenuLink } from '~/models/IMenuLink';

@Component({ components: { DropdownButton } })
export default class MenuNav extends Vue {
  public menuItens: IMenuLink[] = [
    { label: 'Pré-matrículas', link: '/pre-matriculas' },
    { label: 'Bolsas favoritas', link: '/minha-conta/bolsas-favoritas' },
  ];
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;

  &__account {
    color: #fff;
    font-size: 1.2rem;
  }
}

.nuxt-link {
  color: #fff;
  font-size: 1.2rem;
  transition: 0.25s;

  &:hover {
    background-color: darken($primary, 5%);
  }
}

.nuxt-link-exact-active:not(.menu__account) {
  background: $primary-variant;
  &:hover {
    background-color: $primary-variant;
  }
}
</style>
