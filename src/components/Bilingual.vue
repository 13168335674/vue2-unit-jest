<!--
 * @Author       : ADI
 * @Date         : 2021-04-18 20:16:28
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-18 20:17:55
-->
<template>
  <div class="hello">
    {{ $t("helloWorld") }}
  </div>
</template>

<script>
export default {
  name: "Bilingual",
  methods: {
    $t(key) {
      return key;
    },
  },
};
</script>
