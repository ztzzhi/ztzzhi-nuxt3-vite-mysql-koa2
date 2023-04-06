<template>
  <div class="linkme">
    <n-back-top :bottom="100" :visibility-height="300"> </n-back-top>
    <NuxtLayout name="header"></NuxtLayout>
    <div class="hello_link">
      <div class="main_content">
        <NuxtLink to="mailto:ztzzkk2020@163.com">
          <div>欢迎大家发邮件附属你的blog或者插件库的名称以及访问地址~</div>
        </NuxtLink>
      </div>
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
.linkme {
  overflow: hidden;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.hello_link {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .main_content {
    margin: 0 auto;
    width: 70%;
    line-height: 2;
    a {
      display: flex;
      align-items: center;
      color: #333;
    }
  }
}
</style>
