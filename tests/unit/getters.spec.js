/*
 * @Author       : ADI
 * @Date         : 2021-04-24 12:02:21
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:07:43
 */
import getters from "../../src/store/getters.js";

const dogs = [
  { name: "lucky", breed: "poodle", age: 1 },
  { name: "pochy", breed: "dalmatian", age: 2 },
  { name: "blackie", breed: "poodle", age: 4 },
];
const state = { dogs };

describe("getters test", () => {
  it("return poodles", () => {
    const actual = getters.poodles(state);

    expect(actual).toEqual([dogs[0], dogs[2]]);
  });

  it("return poodles", () => {
    const poodles = [dogs[0], dogs[2]];
    const actual = getters.poodlesByAge(state, { poodles })(1);

    expect(actual).toEqual([dogs[0]]);
  });
});
