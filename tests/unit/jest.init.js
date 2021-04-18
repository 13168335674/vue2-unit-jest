/*
 * @Author       : ADI
 * @Date         : 2021-04-18 20:22:54
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-18 20:23:18
 */
import VueTestUtils from "@vue/test-utils";

VueTestUtils.config.mocks["$t"] = (msg) => msg;
