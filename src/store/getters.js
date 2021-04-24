/*
 * @Author       : ADI
 * @Date         : 2021-04-24 12:01:29
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:01:30
 */
export default {
  poodles: (state) => {
    return state.dogs.filter((dog) => dog.breed === "poodle");
  },

  poodlesByAge: (state, getters) => (age) => {
    return getters.poodles.filter((dog) => dog.age === age);
  },
};
