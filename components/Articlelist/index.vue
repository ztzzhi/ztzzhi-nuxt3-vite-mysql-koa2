<template>
  <div style="width: 100%">
    <n-back-top :bottom="100" :visibility-height="300"> </n-back-top>
    <div class="notice_list cussor">
      <div
        v-for="item in listData"
        :key="item.id"
        class="nl_item"
        @click="handleNavigate(item)"
      >
        <div class="nli_img">
          <img :src="item.img" alt="img" />
          <div class="img_mask">{{item.tag}}</div>
        </div>
        <div class="nli_right">
          <div class="nli_title">
            <span class="badge" style="display: inline-block" v-if="item.isTop"
              >置顶</span
            >{{ item.title }}
          </div>
          <div class="nli_des">
            {{ item.desc }}
          </div>
          <div class="operation_btn">
            <div class="ob_l">
              <ul class="items">
                <li>
                  <n-icon>
                    <svg
                      t="1680081943042"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="10620"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M979.222 415.474C894.954 332.02 776.31 192.004 509.958 192.004c-266.316 0-384.962 140.016-469.23 223.47-19.86 19.682-30.788 45.784-30.788 73.534 0 27.728 10.93 53.85 30.788 73.51 84.27 83.476 202.896 223.47 469.23 223.47 266.368 0 384.996-139.994 469.264-223.47 19.86-19.66 30.79-45.784 30.79-73.51C1010.01 461.256 999.082 435.156 979.222 415.474zM940.882 524.282C862.556 601.838 756.802 732 509.958 732c-246.81 0-352.564-130.164-430.89-207.718-9.548-9.468-14.8-22.01-14.8-35.276 0-13.288 5.252-25.806 14.8-35.252 78.344-77.578 184.098-207.764 430.89-207.764 246.826 0 352.58 130.186 430.924 207.764 9.55 9.446 14.802 21.966 14.802 35.252C955.684 502.272 950.432 514.812 940.882 524.282zM509.974 335.996c-84.868 0-153.928 68.652-153.928 152.988 0 84.358 69.06 153.01 153.928 153.01 84.872 0 153.93-68.652 153.93-153.01C663.904 404.648 594.846 335.996 509.974 335.996zM509.974 588.008c-54.912 0-99.6-44.428-99.6-99.024 0-54.574 44.69-98.978 99.6-98.978 54.912 0 99.6 44.404 99.6 98.978C609.576 543.58 564.888 588.008 509.974 588.008z"
                        p-id="10621"
                        fill="#666666"
                      ></path>
                    </svg>
                  </n-icon>
                  <span>{{ item.viewNum }}</span>
                </li>
                <li>
                  <n-icon>
                    <svg
                      t="1680081828776"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3965"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M939.358251 423.424662c-23.01825-37.252439-62.924121-60.779272-107.019409-63.209624-2.755764-0.38681-5.510504-0.579191-8.347109-0.579191l-152.202471-0.121773c6.649444-28.975938 10.015098-58.653865 10.015098-88.657202 0-28.223808-3.213181-57.139372-9.556657-85.952604-0.447185-2.043542-1.098008-4.006244-1.932002-5.866614-15.820314-57.302077-67.37755-96.841605-127.282918-96.841605-72.827679 0-132.081201 59.254545-132.081201 132.081201 0 3.334955 0.132006 6.66991 0.406253 10.015098-2.196015 57.211003-32.108279 109.947088-80.269162 141.363611-14.447037 9.42465-18.524912 28.773324-9.099239 43.220361 9.414417 14.437827 28.752858 18.535145 43.220361 9.099239 65.811892-42.925648 106.429984-115.325585 108.656699-193.684234 0.030699-1.332345-0.010233-2.663666-0.14224-3.996011-0.203638-2.012843-0.304945-4.016477-0.304945-6.019087 0-38.381146 31.233352-69.614497 69.614497-69.614497 32.57593 0 60.474326 22.204721 67.824735 53.997821 0.356111 1.534959 0.823761 3.019777 1.402953 4.453429 4.696975 22.814612 7.076162 45.579081 7.076162 67.743894 0 37.485753-6.222725 74.352405-18.494213 109.592001-3.324722 9.546424-1.819438 20.111037 4.02671 28.345582 5.856381 8.245801 15.332197 13.146415 25.448602 13.156648l193.226816 0.101307c1.423419 0.264013 2.857071 0.426719 4.300956 0.477884 24.116257 0.9967 45.935192 13.614066 58.603723 34.090423 7.838525 12.31242 11.438517 26.800389 10.431583 41.939181-0.080841 0.945535-0.121773 1.911536-0.11154 2.877537 0 0.854461 0.040932 1.697665 0.11154 2.53166 0.010233 0.335644-0.030699 0.661056-0.11154 0.976234-0.101307 0.376577-0.193405 0.772596-0.284479 1.159406l-74.972529 330.391802c-0.914836 1.281179-1.738597 2.6432-2.449795 4.046153-5.937223 11.762905-14.660908 21.48329-25.346271 28.172643-10.746762 6.812149-23.059182 10.614755-35.757388 11.06194-0.854461-0.061398-513.766226-0.224104-513.766226-0.224104-0.467651-0.020466-0.935302-0.030699-1.402953-0.030699 0 0-111.01542 0.172939-112.718201 0.457418-1.932002 0-3.446495-1.50426-3.446495-3.415796l0.299829-416.334173c0-1.901303 1.545192-3.446495 3.01466-3.456728l1.245364 0.121773c1.174756 0.132006 2.653433 0.284479 3.52836 0.193405l83.82822-0.222057 0 339.367221c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352L281.009092 435.350273c0-1.778506 0-8.631588 0-10.411117 0-17.253966-13.979386-30.928407-31.233352-30.928407-1.50426 0-117.547183 0.304945-119.402437 0.304945-36.34272 0-65.913199 29.566386-65.913199 65.893756l-0.299829 416.334173c0 36.337603 29.571503 65.902966 65.913199 65.902966 2.541893 0 111.406323-0.457418 111.406323-0.457418 0.457418 0.020466 0.925069 0.030699 1.382487 0.030699 0 0 511.458671 0.274246 512.505513 0.274246 25.469068 0 50.296523-7.197936 71.647807-20.73116 19.612687-12.281721 35.777855-29.881564 46.839795-50.967812 3.660366-5.622044 6.435573-11.875468 8.256034-18.615986 0.11154-0.416486 0.213871-0.823761 0.304945-1.240247l74.881454-330.340637c1.596358-6.212492 2.257413-12.586666 2.00261-18.992563C960.892707 473.366098 953.948551 446.331371 939.358251 423.424662z"
                        fill="#666666"
                        p-id="3966"
                      ></path>
                      <path
                        d="M450.027553 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C481.260905 532.629853 467.281519 518.650467 450.027553 518.650467z"
                        fill="#666666"
                        p-id="3967"
                      ></path>
                      <path
                        d="M693.805696 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C725.039048 532.629853 711.058638 518.650467 693.805696 518.650467z"
                        fill="#666666"
                        p-id="3968"
                      ></path>
                      <path
                        d="M648.940882 660.09492c-14.304797-9.393951-33.592073-5.398964-43.159986 8.763594-0.132006 0.193405-13.614066 19.754926-34.171264 19.754926-19.98824 0-32.423457-18.09717-33.266661-19.368116-9.17087-14.427594-28.254507-18.809391-42.834574-9.770528-14.650675 9.109472-19.155269 28.366048-10.055007 43.016723 11.214413 18.047028 41.96988 48.588625 86.156242 48.588625 43.962258 0 75.104535-30.318516 86.572728-48.222281C667.404396 688.461991 663.216004 669.500127 648.940882 660.09492z"
                        fill="#666666"
                        p-id="3969"
                      ></path>
                    </svg>
                  </n-icon>
                  <span>{{ item.praiseNum }}</span>
                </li>
                <!-- <li>
                  <n-icon>
                    <svg
                      t="1680081858924"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5165"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M512 65.536C230.4 65.536 1.024 257.024 1.024 492.544c0 99.328 39.936 190.464 108.544 263.168l0 0c0 0-5.12 180.224-43.008 203.776 0 0 138.24 0 226.304-79.872 66.56 26.624 140.288 40.96 219.136 40.96 281.6 0 510.976-191.488 510.976-427.008C1022.976 257.024 793.6 65.536 512 65.536zM512 878.592c-71.68 0-140.288-13.312-203.776-37.888-5.12-2.048-10.24-3.072-15.36-3.072-10.24 0-19.456 4.096-27.648 10.24-38.912 35.84-91.136 53.248-132.096 61.44 4.096-16.384 7.168-34.816 9.216-56.32 5.12-40.96 7.168-78.848 7.168-92.16 2.048-12.288-2.048-24.576-10.24-33.792-63.488-67.584-97.28-149.504-97.28-234.496 0-212.992 210.944-386.048 470.016-386.048s470.016 173.056 470.016 386.048C982.016 705.536 771.072 878.592 512 878.592z"
                        p-id="5166"
                        fill="#666666"
                      ></path>
                      <path
                        d="M321.536 512m-55.296 0a5.4 5.4 0 1 0 110.592 0 5.4 5.4 0 1 0-110.592 0Z"
                        p-id="5167"
                        fill="#666666"
                      ></path>
                      <path
                        d="M527.36 512m-55.296 0a5.4 5.4 0 1 0 110.592 0 5.4 5.4 0 1 0-110.592 0Z"
                        p-id="5168"
                        fill="#666666"
                      ></path>
                      <path
                        d="M733.184 512m-55.296 0a5.4 5.4 0 1 0 110.592 0 5.4 5.4 0 1 0-110.592 0Z"
                        p-id="5169"
                        fill="#666666"
                      ></path></svg></n-icon
                  ><span>{{ item.commentNum }}</span>
                </li> -->
              </ul>
            </div>
            <div class="ob_r">
              {{ dayjs(item.createdAt).format("YYYY/MM/DD HH:ss:mm") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="look_more">
      <span class="cussor" @click="lookmore">{{
        !noMore ? "查看更多" : "没有更多了～"
      }}</span>
    </div>
  </div>
</template>

<script>
import "@/utils/canvasnext";
import { NButton, NIcon, NBackTop } from "naive-ui";
import dayjs from "dayjs";
export default {
  components: {
    NButton,
    NIcon,
    NBackTop,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
    noMore: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    let listData = ref([]);
    let noMore = ref(false);
    watchEffect(() => {
      console.log(12313);
      listData.value = props.data;
    });
    watchEffect(() => {
      noMore.value = props.noMore;
    });
    const handleNavigate = (item) => {
      router.push("/detail?id=" + item.id);
    };
    const lookmore = () => {
      if (noMore.value) return;
      emit("load");
    };
    return {
      listData,
      dayjs,
      handleNavigate,
      lookmore,
      noMore,
    };
  },
};
</script>

<style lang="less">
.notice_list {
  margin-left: 0.1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;

  .nl_item {
    display: flex;
    background-color: #fff;
    padding: 0.2rem;
    border-radius: 10px;
    margin-bottom: 0.1rem;
    animation: slideInUp 0.5s ease;
    .nli_img {
      width: 2.1rem;
      height: 1.4rem;
      margin-right: 0.1rem;
      flex-shrink: 0;
      border-radius: 4px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        object-fit: cover;
        transition: all 0.35s;
      }
      img:hover {
        transform: scale(1.1);
      }
    }
    .img_mask {
      position: absolute;
      z-index: 1;
      top: 5px;
      right: 5px;
      background-image: -webkit-linear-gradient(0deg, #3ca5f6 0, #a86af9 100%);
      height: 20px;
      line-height: 20px;
      padding: 0 15px;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      transition: transform 0.35s;
      transition: transform 0.35s, -webkit-transform 0.35s;
      transform: translate3d(120%, 0, 0);
    }
    .nli_right {
      width: 100%;
      .nli_title {
        padding-bottom: 0.05rem;
        width: 98%;
        color: #303133;
        font-size: 0.18rem;
        line-height: 0.24rem;
        max-height: 0.48rem;
        -webkit-transition: color 0.35s;
        transition: color 0.35s;
        position: relative;
        .badge {
          height: 0.2rem;
          padding: 0 6px;
          margin-right: 5px;
          line-height: 20px;
          font-size: 12px;
          white-space: nowrap;
          vertical-align: 2px;
          color: #fff;
          background-image: -webkit-linear-gradient(
            0deg,
            #3ca5f6 0,
            #a86af9 100%
          );
          border-radius: 2px 6px;
        }
      }
      .nli_title::after {
        background-color: #6bc30d;
        background-image: linear-gradient(90deg, #2db7f5, #6bc30d);
        bottom: -1px;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        transition: width 0.3s;
        width: 0%;
      }
      .nli_des {
        line-height: 0.24rem;
        margin-top: 0.05rem;
        height: 75px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
    .operation_btn {
      margin-top: 0.17rem;
      display: flex;
      align-items: center;
      color: #666;
      .ob_l {
        flex: 1;
        .items {
          display: flex;
          align-items: center;
          li {
            display: flex;
            align-items: center;
            margin-right: 0.1rem;
            span {
              font-size: 0.14rem;
              margin-left: 0.03rem;
            }
          }
        }
      }
      .ob_r {
        color: #999;
        width: 1.5rem;
        text-align: right;
      }
    }
  }
}
.look_more {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 1.2rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0px 10px -5px #949494;
    color: #888;
    font-size: 0.13rem;
    -webkit-user-select: none;
  }
}

.nl_item:hover .nli_title::after {
  width: 100% !important;
}
.nl_item:hover .img_mask {
  transform: translate3d(0, 0, 0);
}
@keyframes slideOutDown {
  0% {
    transform: translateZ(0);
  }

  to {
    transform: translate3d(0, 100%, 0);
    visibility: hidden;
  }
}
@keyframes slideInUp {
  0% {
    transform: translateY(100px);
    visibility: hidden;
  }

  to {
    transform: translateY(0);
    visibility: visible;
  }
}
</style>
