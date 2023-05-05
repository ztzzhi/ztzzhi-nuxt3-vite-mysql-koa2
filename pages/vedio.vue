<template>
  <div class="vedio">
    <div class="vedio_res">
      <iframe
        style="height: 100vh; width: 100%"
        frameborder="0"
        :src="url"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { NBackTop, NInput, NButton } from "naive-ui";
export default {
  components: {
    NBackTop,
    NInput,
    NButton,
  },
  setup() {
    const route = useRoute();
    const url = ref(
      "//www.m3u8.tv.jiexi.8old.cn/api.php?url=" + route.query.url
    );
    return {
      url,
    };
  },
};
</script>

<style lang="less" scoped>
.vedio {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #fff;
}
.vedio_res {
  height: 100vh;
  overflow: hidden;
}
</style>
