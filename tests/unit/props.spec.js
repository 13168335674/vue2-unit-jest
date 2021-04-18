/*
 * @Author       : ADI
 * @Date         : 2021-04-17 15:04:49
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-17 15:13:32
 */
import Vue from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

// describe("props", () => {
//   it("SubmitButton.vue, displays a non authorized message", () => {
//     const msg = "submit";
//     const wrapper = shallowMount(SubmitButton, {
//       propsData: {
//         msg,
//       },
//     });
//     // console.log(`wrapper.html()`, wrapper.html());

//     expect(wrapper.find("span").text()).toBe("Not Authorized");
//     expect(wrapper.find("button").text()).toBe("submit");
//   });
// });

// describe("props", () => {
//   it("SubmitButton.vue, displays a non authorized message", () => {
//     const msg = "submit";
//     const isAdmin = true;
//     const wrapper = shallowMount(SubmitButton, {
//       propsData: {
//         msg,
//         isAdmin,
//       },
//     });
//     // console.log(`wrapper.html()`, wrapper.html());

//     expect(wrapper.find("span").text()).toBe("Admin Privileges");
//     expect(wrapper.find("button").text()).toBe("submit");
//   });
// });

// 使用工厂模式重构
const msg = "submit";
const factory = (propsData) => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData,
    },
  });
};
describe("props", () => {
  it("SubmitButton.vue, displays a non authorized message", () => {
    const wrapper = factory();

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});

describe("props", () => {
  it("SubmitButton.vue, displays a non authorized message", () => {
    const wrapper = factory({ isAdmin: true });

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});
