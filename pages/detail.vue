<template>
  <div class="detail_container">
    <n-back-top :bottom="100" :visibility-height="300"> </n-back-top>
    <NuxtLayout name="header"></NuxtLayout>
    <div class="content">
      <div class="article_title">{{ detailObj.title }}</div>
      <md-editor :previewOnly="true" v-model="detailObj.content"></md-editor>
    </div>
    <div class="left_opreation">
      <div class="lo_box">
        <div class="ope_item cussor" @click="handlePraise">
          <div :class="['badge', isClicked ? 'is_actived' : '']">
            {{ detailObj.parseNum || 0 }}
          </div>
          <svg
            t="1680758576346"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1511"
            width=".25rem"
            height=".25rem"
          >
            <path
              v-if="isClicked"
              d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0"
              p-id="1512"
              fill="#1e80ff"
            ></path>
            <path
              v-else
              d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0"
              p-id="1512"
              fill="#8a919f"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<script>
import MarkDown from "@/components/MarkDown";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { NBackTop } from "naive-ui";
import {
  getArticleDetail,
  operatArticlePraise,
  operatArticleView,
  getArticlePraiseNum,
} from "@/api";
export default {
  components: {
    MarkDown,
    MdEditor,
    NBackTop,
  },
  async setup() {
    const route = useRoute();
    const id = ref(route.query.id);
    const detailObj = ref({});
    const isClicked = ref(false);

    const getDetil = async () => {
      const res = await getArticleDetail({ id: id.value });
      if (res?.code == 200) {
        detailObj.value = res?.result;
        useHead({
          title: detailObj.value.title,
          viewport:
            "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
          charset: "utf-8",
          meta: [{ name: "description", content: detailObj.value.desc }],
        });
      }
      let parseNum = await getArticlePraiseNum({ id: id.value });
      detailObj.value.parseNum = parseNum.result;
      await operatArticleView({ id: id.value });
    };

    watchEffect(() => {
      id.value = route.query.id;
      isClicked.value = false
      getDetil();
    });

    const handlePraise = async () => {
      isClicked.value = !isClicked.value;
      let data = {
        id: id.value,
        isReduce: !isClicked.value,
      };
      await operatArticlePraise(data);
      let res = await getArticlePraiseNum({ id: id.value });
      detailObj.value.parseNum = res.result;
    };

    return {
      id,
      detailObj,
      isClicked,
      handlePraise,
    };
  },
};
</script>

<style lang="less" scoped>
.detail_container {
  position: relative;
  z-index: 10;
  overflow: hidden;
  .content {
    background-color: #fff;
    margin: 0.8rem 1.6rem;
    padding: 0.3rem;
    min-height: 20rem;
    border-radius: 0.05rem;
    .article_title {
      font-size: 0.32rem;
      font-weight: 600;
      line-height: 1.31;
      color: #252933;
    }
  }
  .left_opreation {
    position: fixed;
    left: 0.3rem;
    top: 1.5rem;
    height: 1rem;
    width: 1rem;
    .lo_box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .ope_item {
      position: relative;
      margin-bottom: 0.15rem;
      width: 0.5rem;
      height: 0.5rem;
      background-color: #fff;
      background-position: 50%;
      background-repeat: no-repeat;
      border-radius: 50%;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      .badge {
        position: absolute;
        top: 0;
        left: 75%;
        height: 17px;
        line-height: 17px;
        padding: 0 5px;
        border-radius: 9px;
        font-size: 11px;
        text-align: center;
        white-space: nowrap;
        background-color: #c2c8d1;
        color: #fff;
        user-select: none;
      }
    }
  }
  .is_actived {
    color: #fff !important;
    background-color: #1e80ff !important;
  }
}
</style>
