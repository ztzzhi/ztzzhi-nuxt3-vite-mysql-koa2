<template>
  <div class="write_box">
    <div class="top_input">
      <n-input
        class="linput"
        type="text"
        size="large"
        placeholder="请输入文章标题..."
        :maxlength="50"
        :minlength="1"
        v-model:value="title"
      />
      <n-button class="rbtn" type="primary" @click="toSend">发布</n-button>
    </div>
    <div class="main_down">
      <MarkDown
        v-model:value="mytext"
        @update:value="handleChange"
        v-model:modalshow="modalshow"
        @update:modalshow="modalchange"
        @update:confirm="onConfirm"
        v-model:loading="loading"
        v-model:isClear="isClear"
      ></MarkDown>
    </div>
  </div>
</template>

<script>
import MarkDown from "@/components/MarkDown";
import { NInput, NButton, NModal, useMessage } from "naive-ui";
import { addArticle } from "@/api";
export default {
  components: {
    MarkDown,
    NInput,
    NButton,
    NModal,
  },
  setup() {
    const message = useMessage();
    const mytext = ref("");
    const title = ref("");
    const loading = ref(false);
    const modalshow = ref(false);
    const isClear = ref(false);
    const router = useRouter();
    const handleChange = (val) => {
      console.log(val, "val123");
    };
    const modalchange = (val) => {
      console.log(val, "va");
    };
    const toSend = () => {
      if (!title.value) {
        message.error("请输入文章标题！");
        return;
      }
      if (!mytext.value) {
        message.error("请输入文章内容！");
        return;
      }
      modalshow.value = true;
    };
    const onConfirm = (val) => {
      let data = {
        title: title.value,
        content: mytext.value,
        ...val,
        img: val.img.toString(),
      };
      loading.value = true;
      addArticle(data)
        .then((res) => {
          if (res?.code == 200) {
            message.success("新增成功");
            setTimeout(() => {
              router.push("/");
            });
            reset();
          }
        })
        .finally(() => {
          loading.value = false;
        });
    };
    const reset = () => {
      modalshow.value = false;
      title.value = "";
      mytext.value = "";
      isClear.value = true;
    };
    return {
      title,
      loading,
      isClear,
      mytext,
      handleChange,
      modalchange,
      modalshow,
      toSend,
      onConfirm,
      reset,
    };
  },
};
</script>
<style scoped lang="less">
.write_box {
  background-color: #fff;
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  .top_input {
    padding: 0.1rem 0.2rem;
    color: #1d2129;
    display: flex;
    align-items: center;
    .linput {
      flex: 1;
    }
    .rbtn {
      width: 0.7rem;
    }
    ::v-deep(.n-input__border) {
      display: none;
    }
    ::v-deep(.n-input__state-border) {
      display: none;
    }
    ::v-deep(.n-input__input) {
      font-size: 24px;
      .n-input__input-el {
        font-weight: 600;
      }
    }
    ::v-deep(.n-input__placeholder) {
      color: #86909c;
      span {
        font-weight: 600;
      }
    }
  }
  .main_down {
    height: calc(100vh - 0.6rem);
    ::v-deep(#md-editor-v3) {
      height: 100%;
    }
  }
}
</style>
