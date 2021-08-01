import Vue from 'vue';

const filters = {
  filters: {
    currencyBRL: (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
  },
};

Vue.mixin(filters);
export default filters;
