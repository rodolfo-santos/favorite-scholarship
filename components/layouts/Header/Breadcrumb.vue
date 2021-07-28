<template>
  <nav class="breadcrumb container d-flex mb-3">
    <div v-for="(crumb, index) in breadcrumb" :key="index" class="d-none d-xl-flex">
      <NuxtLink :to="crumb.link" class="nuxt-link">{{ crumb.name }}</NuxtLink>
      <span v-if="index < breadcrumb.length - 1" class="mx-1"> / </span>
    </div>

    <div class="d-flex d-xl-none">
      <NuxtLink :to="backPage.link" class="nuxt-link"><i class="fas fa-chevron-left mr-1"></i> {{ backPage.name }}</NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ICrumb } from '~/models/ICrumb';
const store = namespace('Store');

@Component({ components: {} })
export default class extends Vue {
  @store.State
  public breadcrumb!: ICrumb[];

  public get backPage(): ICrumb {
    const crumb: ICrumb = this.breadcrumb[this.breadcrumb.length - 2];
    if (crumb) return crumb;
    return this.breadcrumb[0];
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 75px;
}

.nuxt-link {
  color: $primary;
  font-weight: bold;
}

.nuxt-link-exact-active {
  font-weight: 100;
  color: $textColor;
}
</style>
