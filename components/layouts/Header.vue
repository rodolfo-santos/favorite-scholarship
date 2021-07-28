<template>
  <header>
    <TopBar />
    <MenuNav />
    <Breadcrumb />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from './Header/TopBar.vue';
import MenuNav from './Header/MenuNav.vue';
import Breadcrumb from './Header/Breadcrumb.vue';

@Component({
  components: {
    TopBar,
    MenuNav,
    Breadcrumb,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped></style>
