<!--
 * @Author       : ADI
 * @Date         : 2021-04-20 21:37:26
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:37:27
-->
<template>
  <div>
    <span v-show="showSpan"> Parent Component </span>
    <Child v-if="showChild" />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Parent",

  components: { Child },

  data() {
    return {
      showSpan: false,
      showChild: false,
    };
  },
};
</script>
