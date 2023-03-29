<template>
  <div class="index_box">
    <div class="index_out_box">
      <section class="top_box">
        <NuxtLayout name="header"></NuxtLayout>
        <div class="index_main">
          <vuetyped
            :strings="stringTextArr"
            :backSpeed="70"
            :loop="true"
            :startDelay="300"
            :backDelay="1500"
            :typeSpeed="100"
          >
            <div class="typing"></div>
          </vuetyped>
        </div>
      </section>
      <section class="btm_box">
        <div class="bb_mainbox">
          <div class="bbm_box">
            <Mineinfo></Mineinfo>
            <Articlelist></Articlelist>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import vuetyped from "vue3typed/libs/typed";
import Mineinfo from "@/components/Mineinfo";
import Articlelist from "@/components/Articlelist";
export default {
  components: {
    vuetyped,
    Mineinfo,
    Articlelist
  },
  setup() {
    const stringTextArr = ref([
      "人生就是不断取舍的过程，你可以拥有很多，但终究要放弃很多",
      "一个人的勇气，不是看他有多么强大，而是看他在多大的困难面前依然坚持",
    ]);
    return {
      stringTextArr,
    };
  },
};
</script>

<style lang="less">
.index_box {
  width: 100%;
  .index_out_box {
    .top_box {
      height: 100vh;
      position: relative;
      width: 100%;
      background: url("../static/img/index_box.jpeg") no-repeat;
      background-color: #49b1f5;
      background-position: center center;
      background-size: cover;
      transition: all 0.5s;
      z-index: 10;
    }
    .top_box::before {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
    }
    .btm_box {
      height: 100vh;
      position: relative;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(247, 149, 51, 0.1),
        rgba(243, 112, 85, 0.1) 15%,
        rgba(239, 78, 123, 0.1) 30%,
        rgba(161, 102, 171, 0.1) 44%,
        rgba(80, 115, 184, 0.1) 58%,
        rgba(16, 152, 173, 0.1) 72%,
        rgba(7, 179, 155, 0.1) 86%,
        rgba(109, 186, 130, 0.1)
      );
    }
    .index_main {
      position: absolute;
      width: 100%;
      padding: 0.5rem;
      height: 5rem;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.32rem; /* 要给容器设置font-size */
      color: #fff;
      line-height: 2;
      .typing {
        font-weight: 700;
      }
    }
  }
}
.bb_mainbox {
  margin: 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
  .bbm_box {
    margin-top: 0.5rem;
    display: flex;
  }
}
</style>
