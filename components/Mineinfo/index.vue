<template>
  <div>
    <div class="mine_info">
      <div class="center">
        <div class="avatar_img">
          <img src="../../static/img/header.jpg" alt="博客logo" onerror="" />
          <div class="author_info__name">Mr Zhang</div>
          <div class="author_info__description">小张很嚣张的博客</div>
        </div>
      </div>
      <div class="info_data">
        <NuxtLink to="/articles" class="data_box">
          <div class="headline">文章数</div>
          <div class="length-num">2</div>
        </NuxtLink>
        <NuxtLink to="/articles" class="data_box">
          <div class="headline">点赞数</div>
          <div class="length-num">2</div>
        </NuxtLink>
        <NuxtLink to="/articles" class="data_box">
          <div class="headline">评论数</div>
          <div class="length-num">2</div>
        </NuxtLink>
      </div>
      <div class="info_follow">
        <n-button type="success" ghost> GitHub Me </n-button>
      </div>
      <div class="info_icon">
        <NIcon size="25">
          <svg
            t="1680073993651"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1161"
            width="200"
            height="200"
          >
            <path
              d="M85.333333 256a85.333333 85.333333 0 0 1 85.333334-85.333333h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v512a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V256z m150.144 0L512 497.962667 788.522667 256H235.52zM853.333333 312.704l-313.216 274.090667a42.666667 42.666667 0 0 1-56.234666 0L170.666667 312.704V768h682.666666V312.704z"
              fill="#0D0D0D"
              p-id="1162"
            ></path>
          </svg>
        </NIcon>
        <NIcon size="25">
          <svg
            t="1680074024303"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1315"
            width="200"
            height="200"
          >
            <path
              d="M960 512c0 97.76-28.704 185.216-85.664 263.264-56.96 78.016-130.496 131.84-220.64 161.856-10.304 1.824-18.368 0.448-22.848-4.032a22.4 22.4 0 0 1-7.2-17.504v-122.88c0-37.632-10.304-65.44-30.464-82.912a409.856 409.856 0 0 0 59.616-10.368 222.752 222.752 0 0 0 54.72-22.816c18.848-10.784 34.528-23.36 47.104-38.592 12.544-15.232 22.848-35.904 30.912-61.44 8.096-25.568 12.128-54.688 12.128-87.904 0-47.072-15.232-86.976-46.208-120.16 14.368-35.456 13.024-74.912-4.48-118.848-10.752-3.616-26.432-1.344-47.072 6.272s-38.56 16.16-53.824 25.568l-21.984 13.888c-36.32-10.304-73.536-15.232-112.096-15.232s-75.776 4.928-112.096 15.232a444.48 444.48 0 0 0-24.672-15.68c-10.336-6.272-26.464-13.888-48.896-22.432-21.952-8.96-39.008-11.232-50.24-8.064-17.024 43.936-18.368 83.424-4.032 118.848-30.496 33.632-46.176 73.536-46.176 120.608 0 33.216 4.032 62.336 12.128 87.456 8.032 25.12 18.368 45.76 30.496 61.44 12.544 15.68 28.224 28.704 47.072 39.04 18.848 10.304 37.216 17.92 54.72 22.816a409.6 409.6 0 0 0 59.648 10.368c-15.712 13.856-25.12 34.048-28.704 60.064a99.744 99.744 0 0 1-26.464 8.512 178.208 178.208 0 0 1-33.184 2.688c-13.024 0-25.568-4.032-38.144-12.544-12.544-8.512-23.296-20.64-32.256-36.32a97.472 97.472 0 0 0-28.256-30.496c-11.232-8.064-21.088-12.576-28.704-13.92l-11.648-1.792c-8.096 0-13.92 0.928-17.056 2.688-3.136 1.792-4.032 4.032-2.688 6.72s3.136 5.408 5.376 8.096 4.928 4.928 7.616 7.168l4.032 2.688c8.544 4.032 17.056 11.232 25.568 21.984 8.544 10.752 14.368 20.64 18.4 29.6l5.824 13.44c4.928 14.816 13.44 26.912 25.568 35.872 12.096 8.992 25.088 14.816 39.008 17.504 13.888 2.688 27.36 4.032 40.352 4.032s23.776-0.448 32.288-2.24l13.472-2.24c0 14.784 0 32.288 0.416 52.032 0 19.744 0.48 30.496 0.48 31.392a22.624 22.624 0 0 1-7.648 17.472c-4.928 4.48-12.992 5.824-23.296 4.032-90.144-30.048-163.68-83.84-220.64-161.888C92.256 697.216 64 609.312 64 512c0-81.152 20.192-156.064 60.096-224.672s94.176-122.88 163.232-163.232C355.936 84.192 430.816 64 512 64s156.064 20.192 224.672 60.096 122.88 94.176 163.232 163.232C939.808 355.488 960 430.848 960 512"
              fill="#000000"
              p-id="1316"
            ></path>
          </svg>
        </NIcon>
        <!-- <n-icon size="40">
        <email-round />
      </n-icon> -->
      </div>
    </div>
    <div class="mine_notice">
      <div class="item_headline">
        <NIcon size="25">
          <svg
            t="1680074634496"
            class="icon fa_shake"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2735"
            width="200"
            height="200"
          >
            <path
              d="M874.839 475.363h-152.11c-8.298 0-16.242 3.353-22.07 9.273a31.544 31.544 0 0 0-9.09 22.156v9.798c0 17.302 14.034 31.342 31.247 31.342h152.023c17.216 0 31.161-14.04 31.161-31.342v-9.798a31.543 31.543 0 0 0-9.09-22.156c-5.828-5.92-13.774-9.273-22.071-9.273zM522.15 206.37c-47.318 37.607-146.28 90.312-217.436 141.074h-0.086c-0.798 0.53-1.59 3.353-2.475 3.794-8.384 4.767-12.181 17.747-57.913 17.747h-89.16c-22.955 0-37.081 10.768-37.081 34.96v214.788c0 24.187 12.98 36.106 37.08 36.106h89.515c45.468 0.091 49.175 13.066 57.56 17.747 0.797 0.44 1.59 3.263 2.383 3.793h0.09c69.036 50.762 168.62 107.53 217.523 143.635 14.748 10.858 63.656 29.93 63.656-37.166V240.8c0-67.182-49.353-45.733-63.656-34.43z m140.371 148.135c8.122 14.212 24.101 17.833 35.753 7.944l124.918-105.317c11.742-9.802 14.565-29.312 6.535-43.61l-4.59-8.035c-8.035-14.212-24.102-17.747-35.758-7.945L664.462 302.86c-11.65 9.889-14.565 29.312-6.53 43.611l4.59 8.035zM698.19 661.2c-11.656-9.803-27.635-6.182-35.667 7.944l-4.59 8.03c-8.035 14.217-5.12 33.727 6.53 43.616L789.38 826.196c11.656 9.798 27.635 6.268 35.667-7.944l4.59-8.035c8.035-14.212 5.122-33.727-6.53-43.61L698.189 661.198z"
              fill="#ff0000"
              p-id="2736"
            ></path>
          </svg>
        </NIcon>
        <span class="notice_name">公告</span>
      </div>
      <div class="announcement_content">This is my Blog</div>
    </div>
  </div>
</template>

<script>
import "@/utils/canvasnext";
import { NButton, NIcon } from "naive-ui";
export default {
  components: {
    NButton,
    NIcon,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="less">
.mine_info {
  position: relative;
  width: 3.1rem;
  padding: 0.2rem 0.24rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
  transition: all 0.3s;
  box-sizing: border-box;
  z-index: 10;
  .center {
    text-align: center;
  }
  .avatar_img {
    transform: translateZ(0);
    overflow: hidden;
    margin: 0 auto;
    img {
      transition: filter 375ms ease-in 0.2s, transform 0.3s;
      object-fit: cover;
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
    }
    img:hover {
      transform: rotate(360deg);
    }
    .author_info__name {
      font-weight: 500;
      font-size: 1.57em;
      line-height: 2;
    }
  }
  .info_data {
    font-size: 14px;
    margin-top: 0.18rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-around;

    .data_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 2;
      .headline {
        color: #4c4948;
      }
      .length-num {
        margin-top: -0.32em;
        color: #1f2d3d;
        font-size: 1.4em;
      }
    }
  }
  .info_follow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.6rem;
  }
  .info_icon {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .n-icon {
      cursor: pointer;
      width: 0.4rem;
    }
  }
}
.mine_notice {
  position: relative;
  overflow: hidden;
  margin-top: 0.2rem;
  padding: 0.2rem 0.24rem;
  border-radius: 0.08rem;
  background: #fff;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
  transition: all 0.3s;
  width: 3.1rem;

  .fa_shake {
    animation-name: fa-shake;
    animation-duration: var(--fa-animation-duration, 1s);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-timing-function: var(--fa-animation-timing, linear);
  }
  .item_headline{
    display: flex;
    align-items: center;
    padding-bottom: 6px;
    line-height: 2;
  }
  .notice_name{
    margin-left: 0.05rem;
  }
  .announcement_content{
        line-height: 2;
  }
}

@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  4% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  8%,
  24% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  12%,
  28% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  16% {
    -webkit-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }

  20% {
    -webkit-transform: rotate(22deg);
    transform: rotate(22deg);
  }

  32% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  36% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  40%,
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
