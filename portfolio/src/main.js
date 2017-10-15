// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import menus from './components/Menus';
import skills from './components/Skills';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.component('menus', menus);
Vue.component('skills', skills);

const store = new Vuex.Store({
  state: {
    areachoice: ['tech', 'biz'],
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
