/*
 * @Author       : ADI
 * @Date         : 2021-04-20 21:54:55
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:59:25
 */
export default {
  SET_POST(state, { post }) {
    state.postIds.push(post.id);
  },
};
