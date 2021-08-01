<template>
  <div v-if="show" class="overlay d-flex center" @click.self="closeModal">
    <div class="modal__card">
      <div class="modal__header mb-4">
        <h1 class="mb-1">{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>

      <div class="modal__body">
        <slot></slot>
      </div>

      <div class="modal__footer d-flex right mt-4">
        <button class="mr-4" @click="closeModal">{{ cancelText }}</button>
        <button class="btn-secondary text-white" :disabled="disableConfirmButton" @click="$emit('confirm')">{{ confirmText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScholarshipTable from '../pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';

@Component({ components: { ScholarshipTable } })
export default class Modal extends Vue {
  @Prop({ required: true }) show!: boolean;
  @Prop({ required: true }) title!: string;
  @Prop() subtitle!: string;

  @Prop({ default: 'Confirmar' }) confirmText!: string;
  @Prop({ default: 'Cancelar' }) cancelText!: string;
  @Prop({ default: false }) disableConfirmButton!: boolean;
  public test: boolean = false;

  @Watch('show')
  public onShowChanged() {
    this.disableOverflowY();
  }

  public disableOverflowY(): void {
    const body: HTMLElement = document.querySelector('body') as HTMLElement;
    if (this.show) {
      body.style.overflowY = 'hidden';
      body.style.paddingRight = '10px';
    } else {
      body.style.overflowY = 'auto';
      body.style.paddingRight = '0px';
    }
  }

  public closeModal(): void {
    this.$emit('close');
  }
}
</script>

<style lang="scss">
.overlay {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(#000000, $alpha: 0.7);
}

.modal {
  &__card {
    width: 100%;
    height: 85vh;
    max-width: 900px;
    background-color: #ffffff;
    overflow-y: auto;

    position: relative;
    padding: 25px;
  }

  &__header {
    margin-bottom: 50px;
  }
}

@include extra-large {
  .modal {
    &__card {
      padding: 50px;
    }
  }
}
</style>
