/*
 * @Author       : ADI
 * @Date         : 2021-04-17 11:02:00
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-17 16:44:27
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
