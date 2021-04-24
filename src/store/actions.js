/*
 * @Author       : ADI
 * @Date         : 2021-04-20 22:00:40
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 22:20:14
 */
import axios from "axios";

export default {
  async authenticate({ commit }, { username, password }) {
    try {
      const authenticated = await axios.post("/api/authenticate", {
        username,
        password,
      });

      commit("SET_AUTHENTICATED", authenticated);
    } catch (e) {
      throw Error("API Error occurred.");
    }
  },
};
