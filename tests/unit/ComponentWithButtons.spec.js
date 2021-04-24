/*
 * @Author       : ADI
 * @Date         : 2021-04-24 12:29:05
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:43:40
 */
import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import ComponentWithButtons from "@/components/ComponentWithButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn(),
};

const store = new Vuex.Store({
  mutations,
});

describe("ComponentWithButtons", () => {
  it("commits a mutation when a button is clicked", async () => {
    const wrapper = shallowMount(ComponentWithButtons, {
      store,
      localVue,
    });

    wrapper.find(".commit").trigger("click");
    await wrapper.vm.$nextTick();

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      {
        msg: "Test Commit",
      }
    );
  });

  it("dispatches an action when a button is clicked", async () => {
    const mockStore = {
      dispatch: jest.fn(),
    };
    const wrapper = shallowMount(ComponentWithButtons, {
      mocks: {
        $store: mockStore,
      },
    });

    await wrapper.find(".dispatch").trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalledWith("testAction", {
      msg: "Test Dispatch",
    });
  });

  it("dispatch a namespaced action when button is clicked", async () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();

    const wrapper = shallowMount(ComponentWithButtons, {
      store,
      localVue,
    });

    wrapper.find(".namespaced-dispatch").trigger("click");
    await wrapper.vm.$nextTick();

    expect(store.dispatch).toHaveBeenCalledWith(
      "namespaced/very/deeply/testAction",
      {
        msg: "Test Namespaced Dispatch",
      }
    );
  });
});
