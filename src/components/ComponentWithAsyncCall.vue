<!--
 * @Author       : ADI
 * @Date         : 2021-04-20 21:29:53
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-20 21:30:05
-->
<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "ComponentWithAsyncCall",

  created() {
    this.makeApiCall();
  },

  methods: {
    async makeApiCall() {
      console.log("Making api call");
      await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    },
  },
};
</script>
