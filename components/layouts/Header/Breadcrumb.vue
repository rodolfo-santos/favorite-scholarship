<template>
  <nav class="breadcrumb container d-flex">
    <div v-for="(crumb, index) in breadcrumb" :key="index">
      <NuxtLink :to="crumb.link" class="nuxt-link">{{ crumb.name }}</NuxtLink>
      <span v-if="index < breadcrumb.length - 1" class="mx-1"> / </span>
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
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 75px;
}

.nuxt-link {
  color: $primary;
}

.nuxt-link-exact-active {
  color: $textColor;
}
</style>
