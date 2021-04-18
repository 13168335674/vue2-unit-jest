/*
 * @Author       : ADI
 * @Date         : 2021-04-17 14:45:03
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-17 15:06:06
 */
import Vue from "vue";
import { mount, shallowMount } from "@vue/test-utils";

const Child = Vue.component("Child", {
  name: "Child",

  template: "<div>Child component</div>",
});

const Parent = Vue.component("Parent", {
  name: "Parent",

  template: "<div><child /></div>",
});

const testComponent = (comp = Child) => {
  const shallowWrapper = shallowMount(comp);
  const mountWrapper = mount(comp);

  // console.log(shallowWrapper.html());
  // console.log(mountWrapper.html());
};

describe("render-component", () => {
  it("testChild", () => {
    testComponent(Child);
  });
  it("testParent", () => {
    testComponent(Parent);
  });
});
