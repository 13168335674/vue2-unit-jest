/*
 * @Author       : ADI
 * @Date         : 2021-04-17 15:44:52
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-18 20:15:21
 */
import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";
import flushPromises from "flush-promises";
import Emitter from "@/components/Emitter.vue";

let url = "";
let data = "";

// mock http
const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url;
      data = _data;
      resolve();
    });
  },
};

describe("emit", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp,
      },
    });
    // 使用 setValue 设置一个使用了 v-model 的 <input> 的值
    wrapper.find("[data-username]").setValue("alice");
    // trigger and prevent
    wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "alice" });
  });

  it("emits an event with two arguments", () => {
    const wrapper = shallowMount(Emitter);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
  });

  it("emits an event without mounting the component", () => {
    const events = {};
    const $emit = (event, ...args) => {
      events[event] = [...args];
    };

    // mock $emit
    Emitter.methods.emitEvent.call({ $emit });

    expect(events.myEvent).toEqual(["name", "password"]);
  });
});
