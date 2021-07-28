<template>
  <main></main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class Home extends Vue {
  public beforeMount(): void {
    this.$router.push('/minha-conta/bolsas-favoritas');
  }
}
</script>
