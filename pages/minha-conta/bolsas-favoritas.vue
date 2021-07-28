<template>
  <main class="container">
    <Title title="Bolsas Favoritas" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ICrumb } from '~/models/ICrumb';
import Title from '~/components/utils/Title.vue';

const store = namespace('Store');

@Component({ components: { Title } })
export default class BolsasFavoritas extends Vue {
  public breadcrumb: ICrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'Minha Conta', link: '/minha-conta' },
    { name: 'Bolsas Favoritas', link: '/minha-conta/bolsas-favoritas' },
  ];

  @store.Action
  public changeBreadcrumb!: (breadcrumbs: ICrumb[]) => void;

  public created(): void {
    this.changeBreadcrumb(this.breadcrumb);
  }
}
</script>

<style lang="scss" scoped></style>
