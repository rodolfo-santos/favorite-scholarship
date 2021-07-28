<template>
  <div class="topbar container d-flex-between">
    <div class="d-flex">
      <div class="text-primary d-flex how-it-works pr-4">
        <i class="far fa-question-circle mr-2"></i>
        <span class="text-bold"> Como funciona </span>
      </div>
      <div class="d-flex px-4">
        <i class="fab fa-whatsapp mr-2 text-success"></i>
        <div class="text-primary d-flex-column">
          <span class="text-bold mb-1">0800 123 2222</span>
          <p class="text-bold">Envie mensagem ou ligue</p>
        </div>
      </div>
    </div>

    <div class="d-flex-center">
      <img src="~/static/images/logo_quero_bolsa.jpg" alt="Logotipo Quero Bolsa" class="py-1" />
    </div>

    <div class="d-flex-right text-primary">
      <div class="d-flex">
        <span class="mr-2"> Nome Sobrenome </span>
        <i class="far fa-user-circle"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
i {
  font-size: 1.4rem;
}

span {
  font-size: 1.2rem;
}

img {
  max-height: 100%;
}

.topbar {
  height: 100px;
}

.topbar > div {
  height: 100%;
  width: 33%;
}

.how-it-works {
  height: 70%;
  border-right: solid $muted 3px;
}
</style>
