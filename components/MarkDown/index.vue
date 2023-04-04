<template>
  <div class="mdeditor_box">
    <MdEditor
      :toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
      v-model="text"
      :pageFullscreen="false"
      @onUploadImg="onUploadImg"
      @onChange="codeSave"
    >
    </MdEditor>
    <n-modal
      class="modalself"
      v-model:show="showModal"
      @update:show="modalChange"
      :mask-closable="false"
    >
      <n-card
        style="width: 600px"
        title="发布文章"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-form ref="formRef" :model="formModel" :rules="rules">
          <n-grid :cols="24">
            <n-form-item-gi :span="24" label="发布密钥" path="secret">
              <n-input
                v-model:value="formModel.secret"
                placeholder="请输入发布密钥，暂时只有博主本人可以发布文章"
              />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="文章分类" path="tag">
              <n-select
                :options="generalOptions"
                v-model:value="formModel.tag"
                placeholder="请选择文章分类"
              />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="是否置顶" path="isTop">
              <n-switch v-model:value="formModel.isTop" />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="编辑摘要" path="desc">
              <n-input
                v-model:value="formModel.desc"
                placeholder="请输入编辑摘要"
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 5,
                }"
              />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="文章封面" path="img">
              <div style="width: 100%">
                <upload v-model:value="formModel.img"></upload>
                <div class="excaltext">建议尺寸：1300*730px</div>
              </div>
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <template #footer>
          <n-space justify="end">
            <n-button @click="closeModal">取消</n-button>
            <n-button type="primary" :loading="loading" @click="handleConfirm"
              >确认并发布</n-button
            >
          </n-space>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import Upload from "../Upload";
import "md-editor-v3/lib/style.css";
import { imgUploadUrl, secret } from "@/config";

import {
  NModal,
  NCard,
  NForm,
  NFormItemGi,
  NGrid,
  NSelect,
  NInput,
  NUpload,
  NSpace,
  NButton,
  NSwitch,
  useMessage,
} from "naive-ui";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    modalshow: {
      type: Boolean,
      default: false,
    },
    uploadUrl: {
      type: String,
      default: imgUploadUrl,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isClear: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MdEditor,
    NModal,
    NCard,
    NForm,
    NFormItemGi,
    NGrid,
    NSelect,
    NInput,
    NUpload,
    NSpace,
    NButton,
    Upload,
    NSwitch,
  },
  setup(props, { emit }) {
    const message = useMessage();
    const text = ref(props.value);
    const loading = ref(props.loading);
    const isClear = ref(props.isClear);
    watchEffect(() => {
      loading.value = props.loading;
    });
    watchEffect(() => {
      isClear.value = props.isClear;
      if (isClear.value) {
        formModel.value = {
          secret: "",
          tag: "",
          desc: "",
          img: [],
          isTop: false,
        };
      }
    });
    const codeSave = (val) => {
      emit("update:value", val);
    };
    let showModal = ref(props.modalshow || false);
    const onUploadImg = async (files, callback) => {
      const res = await Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const form = new FormData();
            form.append("file", file);
            useFetch(props.uploadUrl, {
              key: new Date().getTime() + "",
              method: "POST",
              body: form,
            })
              .then((res) => resolve(res))
              .catch((err) => reject(err));
          });
        })
      );
      callback(res.map((item) => item.data.value.result));
    };
    const modalChange = (flag) => {
      if (!flag) {
        formModel.value = {
          secret: "",
          tag: "",
          desc: "",
          img: [],
          isTop: false,
        };
      }
      showModal.value = flag;
      emit("update:modalshow", flag);
    };
    watchEffect(() => {
      text.value = props.value;
    });
    watchEffect(() => {
      showModal.value = props.modalshow;
    });
    const formRef = ref(null);
    const formModel = ref({
      secret: "",
      tag: "",
      desc: "",
      img: [],
      isTop: false,
    });

    const handleConfirm = (e) => {
      e.preventDefault();
      formRef.value?.validate((error) => {
        if (!error) {
          if (formModel.value.secret != secret) {
            message.error("只有博主本人才可以发文章哦～");
            return;
          }
          emit("update:confirm", formModel.value);
        } else {
          console.log("error");
        }
      });
    };

    const closeModal = () => {
      formModel.value = {
        secret: "",
        tag: "",
        desc: "",
        img: [],
        isTop: false,
      };
      showModal.value = false;
      emit("update:modalshow", false);
    };

    return {
      text,
      codeSave,
      onUploadImg,
      showModal,
      modalChange,
      formRef,
      formModel,
      handleConfirm,
      isClear,
      rules: {
        secret: {
          required: true,
          trigger: ["blur", "input"],
          message: "请输入密钥",
        },
        tag: {
          required: true,
          trigger: ["blur", "change"],
          message: "请选择分类",
        },
        desc: {
          required: true,
          trigger: ["blur", "input"],
          message: "请输入摘要",
        },
        img: {
          required: true,
          type: "array",
          trigger: ["change"],
          message: "请上传图片",
        },
      },
      generalOptions: ["groode", "veli good", "emazing", "lidiculous"].map(
        (v) => ({
          label: v,
          value: v,
        })
      ),
      closeModal,
      loading,
    };
  },
};
</script>

<style lang="less">
.mdeditor_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.selfupload {
  .n-upload-file-list.n-upload-file-list--grid {
    grid-template-columns: repeat(auto-fill, 160px);
  }
  .n-upload-trigger {
    width: 160px;
  }
  .n-upload-file-list .n-upload-file.n-upload-file--image-card-type {
    width: 160px;
  }
}
.excaltext {
  color: #666;
  margin-top: 10px;
}
</style>
