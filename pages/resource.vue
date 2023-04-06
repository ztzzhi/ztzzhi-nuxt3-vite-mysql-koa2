<template>
  <div class="resourceme">
    <n-back-top :bottom="100" :visibility-height="300"></n-back-top>
    <NuxtLayout name="header"></NuxtLayout>
    <div class="hello_res">
      <iframe
        style="min-height: 100vh; width: 100%"
        src="http://hepengwei.cn/#/html/visualDesign"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { NBackTop } from "naive-ui";

export default {
  components: {
    NBackTop,
  },
};
</script>

<style lang="less" scoped>
.resourceme {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  background-color: #fff;
}
.hello_res {
  padding-top: 60px;
  overflow: hidden;
}
</style>
