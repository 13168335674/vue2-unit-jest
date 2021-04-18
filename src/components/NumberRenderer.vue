<!--
 * @Author       : ADI
 * @Date         : 2021-04-17 15:15:23
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-17 15:21:46
-->
<template>
  <div>
    {{ numbers }}
  </div>
</template>

<script>
export default {
  name: "NumberRenderer",
  props: {
    even: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    numbers() {
      const evens = [];
      const odds = [];

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }

      return this.even === true ? evens.join(", ") : odds.join(", ");
    },
  },
};
</script>
