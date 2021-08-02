<template>
  <header>
    <TopBar />
    <MenuNav />
    <Breadcrumb />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from './components/Topbar/TopBar.vue';
import MenuNav from './components/MenuNav.vue';
import Breadcrumb from './components/Breadcrumb.vue';

@Component({ components: { TopBar, MenuNav, Breadcrumb } })
export default class Header extends Vue {}
</script>

<style lang="scss" scoped></style>
