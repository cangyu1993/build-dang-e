// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/until'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import VueLazyload from 'vue-lazyload'
import store from '@/store';
Vue.use(Vant);

Vue.use(VueLazyload,{
  preLoad:1.3,
  error:require('./assets/error.jpg'),
  loading:require('./assets/load.gif'),
  attempt:1
});

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
