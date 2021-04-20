/*
 * @Author       : ADI
 * @Date         : 2021-04-20 21:30:29
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:36:37
 */
import { shallowMount, mount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild.vue";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue";

describe("ParentWithAPICallChild.vue", () => {
  it("应该正确渲染ComponentWithAsyncCall.vue组件, mount", () => {
    const wrapper = mount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });

  it("应该正确渲染ComponentWithAsyncCall.vue组件, stub", () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true,
      },
    });

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });

  it("应该正确渲染ComponentWithAsyncCall.vue组件, shallowMount", () => {
    const wrapper = shallowMount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
