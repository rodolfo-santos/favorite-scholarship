<template>
  <main></main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ICrumb } from '~/models/ICrumb';

const store = namespace('Store');

@Component({ components: {} })
export default class MinhaConta extends Vue {
  public breadcrumb: ICrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'Minha Conta', link: '/minha-conta' },
  ];

  @store.Action
  public changeBreadcrumb!: (breadcrumbs: ICrumb[]) => void;

  public created(): void {
    this.changeBreadcrumb(this.breadcrumb);
  }
}
</script>
