<template>
  <div class="select" tabindex="1">
    <input class="selectopt" name="test" type="radio" id="opt1" checked />
    <label for="opt1" class="option">Oranges</label>
    <input class="selectopt" name="test" type="radio" id="opt2" />
    <label for="opt2" class="option">Apples</label>
    <input class="selectopt" name="test" type="radio" id="opt3" />
    <label for="opt3" class="option">Grapefruit</label>
    <input class="selectopt" name="test" type="radio" id="opt4" />
    <label for="opt4" class="option">Bananas</label>
    <input class="selectopt" name="test" type="radio" id="opt5" />
    <label for="opt5" class="option">Watermelon</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class InputSelect extends Vue {}
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 40px;
  border: $muted solid 1px;
}

.option {
  padding: 0 30px 0 10px;
  min-height: 40px;
  display: flex;
  align-items: center;
  border: $muted solid 1px;
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
  order: 2;
  z-index: 1;
  transition: background 0.4s ease-in-out;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
}

.option:hover {
  background: #eee;
}

.select:focus .option {
  position: relative;
  pointer-events: all;
}

input {
  opacity: 0;
  position: absolute;
  left: -99999px;
}

input:checked + label {
  order: 1;
  z-index: 2;
  border-top: none;
  position: relative;
}

input:checked + label:after {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid $textColor;
  position: absolute;
  right: 10px;
  top: calc(50% - 2.5px);
  pointer-events: none;
  z-index: 3;
}

input:checked + label:before {
  position: absolute;
  right: 0;
  height: 40px;
  width: 40px;
  content: '';
}
</style>
