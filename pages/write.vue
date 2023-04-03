<template>
  <div class="write_box">
    <div class="top_input">
      <n-input
        class="linput"
        type="text"
        size="large"
        placeholder="请输入文章标题..."
        :maxlength="30"
        :minlength="1"
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
      ></MarkDown>
    </div>
  </div>
</template>

<script>
import MarkDown from "@/components/MarkDown";
import { NInput, NButton, NModal } from "naive-ui";
export default {
  components: {
    MarkDown,
    NInput,
    NButton,
    NModal,
  },
  setup() {
    const mytext = ref("");
    const modalshow = ref(false);
    const handleChange = (val) => {
      console.log(val, "val123");
    };
    const modalchange = (val) => {
      console.log(val, "va");
    };
    const toSend = () => {
      modalshow.value = true;
    };
    const onConfirm = (val) => {
      console.log(val,'asdasd');
    };
    return {
      mytext,
      handleChange,
      modalchange,
      modalshow,
      toSend,
      onConfirm
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
