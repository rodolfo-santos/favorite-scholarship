<template>
  <div>
    <div class="d-none d-xl-flex info h-100">
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

    <div class="d-flex left d-xl-none h-100 how-it-works">
      <div class="d-flex column">
        <i class="far fa-question-circle"></i>
        <span>Ajuda</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class HowItWorks extends Vue {}
</script>

<style lang="scss" scoped>
i {
  font-size: 1.4rem;
}

span {
  font-size: 1.2rem;
}
</style>
