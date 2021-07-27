<template>
  <header>
    <TopBar />
    <MenuNav />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from './Header/TopBar.vue';
import MenuNav from './Header/MenuNav.vue';

@Component({
  components: {
    TopBar,
    MenuNav,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped></style>
