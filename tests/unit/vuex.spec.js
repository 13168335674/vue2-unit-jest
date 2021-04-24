/*
 * @Author       : ADI
 * @Date         : 2021-04-20 21:56:01
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 22:19:35
 */
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";

let url = "";
let body = {};
let mockError = false;

jest.mock("axios", () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw Error();

      url = _url;
      body = _body;
      resolve(true);
    });
  },
}));

describe("test vuex", () => {
  it("mutations, SET_POST, adds a post to the state", () => {
    const post = { id: 1, title: "Post" };
    const state = {
      postIds: [],
      posts: {},
    };

    mutations.SET_POST(state, { post });

    expect(state).toEqual({
      postIds: [1],
      posts: {},
    });
  });

  it("actions, authenticate, authenticated a user", async () => {
    const commit = jest.fn();
    const username = "alice";
    const password = "password";

    await actions.authenticate({ commit }, { username, password });
    expect(commit).toHaveBeenCalledWith("SET_AUTHENTICATED", true);
  });

  it("actions, authenticate, authenticated a user, error", async () => {
    mockError = true;

    await expect(
      actions.authenticate({ commit: jest.fn() }, {})
    ).rejects.toThrow("API Error occurred.");
  });
});
