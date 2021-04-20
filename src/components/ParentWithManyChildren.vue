<!--
 * @Author       : ADI
 * @Date         : 2021-04-20 21:42:17
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:44:55
-->
<template>
  <div>
    <Child v-for="id in [1, 2, 3]" :key="id" />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "ParentWithManyChildren",

  components: { Child },
};
</script>
