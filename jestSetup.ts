import Vue from 'vue';
import filters from '~/plugins/filters';

Vue.mixin(filters);
Vue.config.productionTip = false;
Vue.config.devtools = false;
