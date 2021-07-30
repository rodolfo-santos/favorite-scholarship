<template>
  <div class="scholarship-row d-flex w-100">
    <div class="d-flex select-logo">
      <InputCheckBox id="my-check" :value.sync="checked" class="mr-4" />
      <img src="~/static/images/anhanguera.png" alt="Anhanguera" />
    </div>
    <div class="d-flex between name-value">
      <div>
        <p class="text-bold text-primary-variant mb-1">Administração</p>
        <small>Bacherelado</small>
      </div>
      <div class="d-flex column">
        <p>Bolsa de <span class="text-bold text-success">50%</span></p>
        <p class="text-bold text-success">R$ 374/mês</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputCheckBox from '~/components/utils/InputCheckbox.vue';

@Component({ components: { InputCheckBox } })
export default class ScholarshipRow extends Vue {
  public checked: boolean = true;
}
</script>

<style lang="scss" scoped>
img {
  max-width: 150px;
}

.scholarship-row {
  padding: 20px 0;
  border-bottom: 1px solid $muted;
}

.select-logo {
  flex: 1;
}

.name-value {
  flex: 2;
}
</style>
