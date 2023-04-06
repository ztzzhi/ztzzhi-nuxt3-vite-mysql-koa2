<template>
  <div class="aboutme">
    <n-back-top :bottom="100" :visibility-height="300"> </n-back-top>
    <NuxtLayout name="header"></NuxtLayout>
    <div class="hello_it">
      <div class="main_center">
        <img src="../static/img/header.png" alt="博客logo" class="logo_img" />
        <span class="tit">小张很嚣张</span>
        <span>年少才轻狂✨</span>
      </div>
      <div class="all_box">
        <div class="content">
          <div class="title1">你好，很高兴认识你👋</div>
          <div class="title2">我叫<span class="inline-word"> 小张 </span></div>
          <div class="title1">
            是一名在杭州买不起房的程序员，当然也是一位BUG创造者，<span class="inline-word"
              >我的理想就是赚更多的钱～</span
            >
          </div>
        </div>
        <div class="contro">
          <div>属于自己的,</div>
          <div>不要放弃;</div>
          <div>已经失去的,</div>
          <div>留作回忆。</div>
        </div>
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
.hello_it {
  padding: 0 100px;
}
.aboutme {
  position: relative;
  z-index: 10;
  overflow: hidden;
  min-height: 100vh;
  background-color: #fff;
  .main_center {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.8rem;
    span {
      line-height: 2;
      color: #4c4948;
    }
    .tit {
      font-size: 0.28rem;
    }
  }
  .logo_img {
    /* 图片大小 */
    --s: 1.5rem;
    /* 边框大小 */
    --b: 5px;
    /* 边框颜色 */
    --c: #ddd;
    /* 背景颜色 */
    --bg: #e2eedf;
    /* 默认缩放比例 */
    --f: 1;
    box-sizing: content-box;
    width: var(--s);
    aspect-ratio: 1;
    object-fit: contain;
    padding-top: calc(var(--s) / 5);
    cursor: pointer;
    transform: scale(var(--f));
    transition: 0.5s;
    border-radius: 0 0 999px 999px;
    --o: calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b));
    outline: var(--b) solid var(--c);
    outline-offset: var(--o);
    --g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
    background: radial-gradient(
        circle closest-side,
        var(--bg) calc(99% - var(--b)),
        var(--c) calc(100% - var(--b)) 99%,
        #0000
      )
      var(--g);
    mask: linear-gradient(#000 0 0) no-repeat 50% calc(1px - var(--o)) /
        calc(100% / var(--f) - 2 * var(--b) - 2px) 50%,
      radial-gradient(circle closest-side, #000 99%, #0000) var(--g);
  }
  .logo_img:hover {
    /* 缩放比例 */
    --f: 1.35;
  }
  .all_box {
    display: flex;
    align-items: center;
    margin-top: 30px;
    column-gap: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    height: 2rem;
    background: linear-gradient(120deg, #5b27ff 0, #00d4ff 100%);
    background-size: 200%;
    animation: gradient 15s ease infinite;
    border-radius: 24px;
    border: 1px solid #c0c6d8;
    box-shadow: 0 8px 16px -4px #2c2d300c;
    position: relative;
    padding: 0.5rem 0.5rem;
    overflow: hidden;
    flex: 3;
    div {
      line-height: 2;
    }
  }
  .contro {
    display: flex;
    flex: 2;
    height: 2rem;
    flex-direction: column;
    justify-content: center;
    color: #333;
    background: #fff;
    background-size: 200%;
    animation: gradient 15s ease infinite;
    border-radius: 24px;
    border: 1px solid #c0c6d8;
    box-shadow: 0 8px 16px -4px #2c2d300c;
    position: relative;
    padding: 0.5rem 0.5rem;
    overflow: hidden;
    div{
      line-height: 1.5;
      font-size: 22px;
      font-weight: 800;
    }
  }
}
</style>
