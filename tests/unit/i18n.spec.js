/*
 * @Author       : ADI
 * @Date         : 2021-04-18 20:16:03
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-18 20:23:46
 */
import { shallowMount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(
      Bilingual
      // {
      // mosks: {
      //   $t: (key) => key,
      // },
      // }
    );
    expect(wrapper.find(".hello").text()).toBe("helloWorld");
  });
});
