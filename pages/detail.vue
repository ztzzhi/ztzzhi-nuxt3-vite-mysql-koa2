<template>
  <div class="detail_container">
    <NuxtLayout name="header"></NuxtLayout>
    <div class="content">
      <div class="article_title">{{ detailObj.title }}</div>
      <md-editor :previewOnly="true" v-model="detailObj.content"></md-editor>
    </div>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>

<script>
import MarkDown from "@/components/MarkDown";
import MarkdownIt from 'markdown-it';
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default {
  components: {
    MarkDown,
    MdEditor
  },
  async setup() {
    const route = useRoute();
    const id = route.query.id;
    const detailObj = ref({});
    const res = await useFetch("http://localhost:7001/v1/article/detail", {
      key: new Date().getTime() + "",
      method: "GET",
      params: {
        id: id,
      },
    });
    if (res?.data?.value?.code == 200) {
      detailObj.value = res?.data?.value?.result;
    }
    const md = new MarkdownIt();
    return {
      detailObj,
      md
    };
  },
};
</script>

<style lang="less" scoped>
.detail_container {
  overflow: hidden;
  .content {
    background-color: #fff;
    margin: .8rem 1rem;
    padding: 0.3rem;
    min-height: 20rem;
    .article_title {
      font-size: 0.32rem;
      font-weight: 600;
      line-height: 1.31;
      color: #252933;
    }
  }
}
</style>
