<template>
  <div class="dropdown">
    <span class="text-white py-2">{{ label }} <i class="fas fa-chevron-down"></i></span>
    <div class="dropdown-content">
      <p v-for="(link, index) in links" :key="index" class="px-3 py-1">
        <NuxtLink :to="link.link">{{ link.label }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMenuLink } from '~/models/IMenuLink';

@Component
export default class DropdownButton extends Vue {
  @Prop() public label!: string;
  @Prop() public links!: IMenuLink[];
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  top: 25px;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover > .dropdown-content {
  display: block;
}

p {
  line-height: 2em;
  transition: 0.25s;
  &:hover {
    background-color: #eeeeee;
  }
}
</style>
