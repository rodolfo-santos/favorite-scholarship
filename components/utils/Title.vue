<template>
  <div>
    <h1 class="mb-2">{{ title }}</h1>
    <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop() public title!: string;
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.4rem;
}

p {
  font-size: 1.1em;
}
</style>
