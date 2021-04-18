<!--
 * @Author       : ADI
 * @Date         : 2021-04-18 20:07:09
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-18 20:07:10
-->
<template>
  <div></div>
</template>

<script>
export default {
  name: "Emitter",

  methods: {
    emitEvent() {
      this.$emit("myEvent", "name", "password");
    },
  },
};
</script>

<style scoped></style>
