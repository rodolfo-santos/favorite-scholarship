<template>
  <transition v-if="show" name="fade" mode="out-in">
    <div class="overlay d-flex center" @click.self="closeModal">
      <div class="card">
        <div class="card-header">
          <h1 class="mb-1">{{ title }}</h1>
          <p v-if="subtitle">{{ subtitle }}</p>
        </div>

        <div class="card-body">
          <slot></slot>
        </div>

        <div class="d-flex right card-footer mt-4">
          <button class="mr-4" @click="closeModal">{{ cancelText }}</button>
          <button class="bg-primary text-white" disabled @click="$emit('confirm')">{{ confirmText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';
import ScholarshipTable from '../pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import InputSelect from './InputSelect.vue';
import InputCheckBox from './InputCheckbox.vue';
import InputRange from './InputRange.vue';

@Component({ components: { InputSelect, InputCheckBox, InputRange, ScholarshipTable } })
export default class Modal extends Vue {
  @Prop({ required: true }) show!: boolean;
  @Prop({ required: true }) title!: string;
  @Prop() subtitle!: string;
  @Prop({ default: 'Confirmar' }) confirmText!: string;
  @Prop({ default: 'Cancelar' }) cancelText!: string;

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

.card {
  width: 100%;
  height: 85vh;
  max-width: 900px;
  background-color: #ffffff;
  overflow-y: auto;

  position: relative;
  padding: 25px;
}

.card-header {
  margin-bottom: 50px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}

.grid-box {
  width: auto;
  grid-column: 1;
}

@include extra-large {
  .card {
    padding: 50px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  .grid-box {
    width: auto;
    &:nth-child(odd) {
      grid-column: 1;
    }
    &:nth-child(even) {
      grid-column: 2;
    }
  }
}
</style>
