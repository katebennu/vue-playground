// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import menus from './components/Menus';
import skills from './components/Skills';
import store from './store';

Vue.config.productionTip = false;

Vue.component('menus', menus);
Vue.component('skills', skills);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
