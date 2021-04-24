/*
 * @Author       : ADI
 * @Date         : 2021-04-24 12:09:15
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:23:44
 */
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import ComponentWithVuex from "@/components/ComponentWithVuex.vue";
import ComponentWithVuexGetters from "@/components/ComponentWithVuexGetters";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ComponentWithVuex store", () => {
  const store = new Vuex.Store({
    state: {
      username: "alice",
    },
  });
  it("renders a username using a real Vuex store", () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue,
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });

  it("renders a username using a mock store", () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: { username: "alice" },
        },
      },
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });
});

describe("ComponentWithVuexGetters getters", () => {
  const store = new Vuex.Store({
    state: {
      firstName: "Alice",
      lastName: "Doe",
    },

    getters: {
      fullname: (state) => state.firstName + " " + state.lastName,
    },
  });

  it("renders a username using a real Vuex getter", () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, {
      store,
      localVue,
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });

  it("renders a username using a mock store", () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, {
      mocks: {
        $store: {
          getters: {
            fullname: "Alice Doe",
          },
        },
      },
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });

  it("renders a username using computed mounting options", () => {
    const wrapper = shallowMount(ComponentWithVuexGetters, {
      computed: {
        fullname: () => "Alice Doe",
      },
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });
});
