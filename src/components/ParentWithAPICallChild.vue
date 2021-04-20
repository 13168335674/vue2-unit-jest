<!--
 * @Author       : ADI
 * @Date         : 2021-04-20 21:29:40
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:29:40
-->
<template>
  <ComponentWithAsyncCall />
</template>

<script>
import ComponentWithAsyncCall from "./ComponentWithAsyncCall.vue";

export default {
  name: "ParentWithAPICallChild",

  components: {
    ComponentWithAsyncCall,
  },
};
</script>
