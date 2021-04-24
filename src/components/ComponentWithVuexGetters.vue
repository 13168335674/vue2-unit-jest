<!--
 * @Author       : ADI
 * @Date         : 2021-04-24 12:18:10
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-24 12:26:36
-->
<template>
  <div class="fullname">
    {{ fullname }}
  </div>
</template>

<script>
export default {
  name: "ComponentWithGetters",

  computed: {
    fullname() {
      return this.$store.getters.fullname;
    },
  },
  // // support mapGetters
  // import { mapGetters } from "vuex"

  // export default {
  //   name: "ComponentWithGetters",

  //   computed: {
  //     ...mapGetters([
  //       'fullname'
  //     ])
  //   }
  // }
};
</script>
