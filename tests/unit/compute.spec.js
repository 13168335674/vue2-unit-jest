/*
 * @Author       : ADI
 * @Date         : 2021-04-17 15:14:40
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-17 15:22:48
 */
import { shallowMount } from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer.vue";

describe("compute", () => {
  // render
  it("NumberRenderer, renders even numbers", () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true,
      },
    });
    expect(wrapper.text()).toBe("2, 4, 6, 8");
  });

  // local
  it("NumberRenderer, renders odd numbers", () => {
    const localThis = {
      even: false,
    };
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe(
      "1, 3, 5, 7, 9"
    );
  });
});
