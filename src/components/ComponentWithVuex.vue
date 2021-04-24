<!--
 * @Author       : ADI
 * @Date         : 2021-04-24 12:08:42
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:08:43
-->
<template>
  <div>
    <div class="username">
      {{ username }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentWithVuex",

  data() {
    return {
      username: this.$store.state.username,
    };
  },
};
</script>
