/*
 * @Author       : ADI
 * @Date         : 2021-04-17 11:02:00
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:01:48
 */
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters,
  modules: {},
});
