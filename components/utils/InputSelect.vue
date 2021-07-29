<template>
  <div class="select">
    <label class="text-bold text-uppercase d-flex mb-1"> {{ label }}</label>
    <div class="select-box d-flex between px-2 py-2" @click="toogleList">
      <span>{{ value }}</span>
      <i class="fas fa-chevron-down"></i>
    </div>

    <div class="select-options" :class="{ 'd-none': !showList }">
      <div v-for="option in options" :key="option.id" class="option d-flex">
        <input :id="option.id" v-model="value" type="radio" name="option" :value="option.label" />
        <label :for="option.id" class="w-100 py-1 px-2" @click="toogleList"> {{ option.label }} </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type option = { label: string; id: string };

@Component({ components: {} })
export default class InputSelect extends Vue {
  @Prop({ required: true }) public value!: string;
  @Prop({ required: true }) public options!: option[];
  @Prop({ required: true }) public label!: string;
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
  width: 250px;
  cursor: pointer;
}

.select > label {
  font-size: 0.9rem;
}

.select-box {
  font-size: 1rem;
  border: solid 1px $muted;
  border-radius: 5px;

  i {
    font-size: 0.75rem;
  }
}

.select-options {
  border: solid 1px $muted;

  input[type='radio'] {
    display: none;
  }

  label {
    cursor: pointer;
  }
}

.option {
  &:hover {
    background-color: #eee;
  }
}
</style>
