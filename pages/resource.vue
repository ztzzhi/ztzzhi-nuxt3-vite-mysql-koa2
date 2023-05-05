<template>
  <div class="resourceme">
    <n-back-top :bottom="100" :visibility-height="300"></n-back-top>
    <NuxtLayout name="header"></NuxtLayout>
    <div class="hello_res">
      <div class="wahaha">
        <div class="xiaobaga">
          <p>操作指南</p>
          <p>
            第 一 步
            进入各大视频网站，找到想要观看的VIP视频vip会员，然后复制链接（浏览器上的视频地址）
          </p>
          <p>第 二 步 将复制的链接粘贴到本站播放地址，并点击开始解析</p>
          <p>第 三 步 等待解析完成，即可免费观看VIP视频vip会员</p>
          <p>
            支持的平台：优酷视频、腾讯视频、爱奇艺、芒果TV、PPTV、乐视TV、咪咕视频、搜狐视频、土豆视频等等
          </p>
        </div>
        <div class="img_box">
          <img src="../static/img/shili001.png" alt="" />
          <img src="../static/img/shili002.png" alt="" />
        </div>
      </div>
      <div class="mysearch">
        <n-input
          v-model:value="myurl"
          placeholder="请输入url解析视频,免费观看vip视频资源"
        ></n-input>
        <n-button type="primary" @click="handleIt">开始解析</n-button>
      </div>
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
    const router = useRouter();
    const myurl = ref("");
    const handleIt = () => {
      router.push("/vedio?url=" + myurl.value);
    };
    return {
      myurl,
      handleIt,
    };
  },
};
</script>

<style lang="less" scoped>
.resourceme {
  position: relative;
  z-index: 10;
  height: 100vh;
  background-color: #fff;
}
.hello_res {
  height: 100vh;
  overflow: hidden;
}
.wahaha {
  height: 80vh;
  overflow: hidden;
  .xiaobaga {
    width: 100%;
    padding: 100px;
  }
  p {
    line-height: 2;
  }
}
.mysearch {
  width: 80%;
  margin: 0 auto;
  height: 20vh;
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.img_box {
  display: flex;
  align-items: center;
  padding: 0 100px;
  img {
    width: 500px;
    height: 400px;
    margin-right: 30px;
  }
}
</style>
