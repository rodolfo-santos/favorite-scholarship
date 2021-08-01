<template>
  <div class="select">
    <label v-if="label" class="text-bold text-uppercase d-flex mb-1"> {{ label }}</label>
    <div class="d-flex between px-2 py-2" :class="{ select__text: type === 'text', select__box: type === 'box' }" @click="toogleList">
      <span class="mr-1">{{ syncedValue.label }}</span>
      <i class="fas fa-chevron-down"></i>
    </div>

    <div class="select__options w-100" :class="{ 'd-none': !showList }">
      <div v-for="option in options" :key="option.id" class="select__option d-flex">
        <input :id="option.id" v-model="syncedValue" type="radio" name="option" :value="option" />
        <label :for="option.id" class="w-100 py-1 px-2" @click="toogleList"> {{ option.label }} </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

type option = { label: string; id: string };

@Component({ components: {} })
export default class InputSelect extends Vue {
  @PropSync('value') public syncedValue!: option;
  @Prop({ required: true }) public options!: option[];
  @Prop({ default: 'box' }) public type!: string;
  @Prop() public label!: string;

  public showList: boolean = false;
  public element!: EventTarget;

  public mounted(): void {
    this.startObserver();
  }

  public startObserver(): void {
    document.addEventListener('click', e => {
      if (e.target !== this.element) this.showList = false;
    });
  }

  public toogleList($event: Event): void {
    this.showList = !this.showList;
    this.element = $event.target as EventTarget;
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &__text {
    color: $primary;
    cursor: pointer;
    i {
      font-size: 0.75rem;
    }
  }

  &__box {
    border: solid 1px $muted;
    border-radius: 5px;

    i {
      font-size: 0.75rem;
    }
  }

  &__options {
    border: solid 1px $muted;
    position: absolute;
    background: #fff;
    max-height: 250px;
    overflow-y: auto;
    z-index: 99;
    min-width: 200px;
    right: 0;
  }

  &__option {
    input[type='radio'] {
      display: none;
    }

    label {
      cursor: pointer;
    }

    &:hover {
      background-color: #eee;
    }
  }
}
</style>
