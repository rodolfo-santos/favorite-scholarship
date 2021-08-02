<template>
  <v-app>
    <Header />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '~/components/layouts/Header/Header.vue';
import Footer from '~/components/layouts/Footer/Footer.vue';

@Component({ components: { Header, Footer } })
export default class DefaultLayout extends Vue {}
</script>
