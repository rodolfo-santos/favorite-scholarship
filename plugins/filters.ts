import Vue from 'vue';

Vue.filter('currencyBRL', (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
