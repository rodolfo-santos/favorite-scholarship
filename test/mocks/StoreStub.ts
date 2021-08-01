import Vue from 'vue';
import Vuex from 'vuex';
import Scholarship from '@/store/Scholarship';
import Breadcrumb from '@/store/Breadcrumb';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Scholarship,
    Breadcrumb,
  },
});
export default store;
