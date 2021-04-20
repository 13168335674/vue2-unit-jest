/*
 * @Author       : ADI
 * @Date         : 2021-04-20 21:37:54
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:50:43
 */
import { mount, shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue";

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = shallowMount(Parent);

    expect(wrapper.find("span").isVisible()).toBe(false);
  });

  it("does render a span", () => {
    const wrapper = shallowMount(Parent, {
      data() {
        return { showSpan: true };
      },
    });

    expect(wrapper.find("span").isVisible()).toBe(true);
  });

  it("does not render a Child component, findComponent", () => {
    const wrapper = shallowMount(Parent);

    expect(wrapper.findComponent(Child).exists()).toBe(false);
  });

  it("renders a Child component, findComponent:name", () => {
    const wrapper = shallowMount(Parent, {
      data() {
        return { showChild: true };
      },
    });

    expect(wrapper.findComponent({ name: "Child" }).exists()).toBe(true);
  });

  it("renders many children", () => {
    const wrapper = shallowMount(ParentWithManyChildren);
    expect(wrapper.findAllComponents(Child).length).toBe(3);
  });
});
