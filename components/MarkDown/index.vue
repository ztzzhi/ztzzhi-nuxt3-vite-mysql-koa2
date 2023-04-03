<template>
  <div class="mdeditor_box">
    <MdEditor
      :toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
      v-model="text"
      :pageFullscreen="false"
      @onUploadImg="onUploadImg"
      @onSave="codeSave"
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
            <n-button type="primary" @click="handleConfirm"
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
  },
  setup(props, { emit }) {
    const text = ref(props.value);
    const codeSave = (val) => {
      emit("update:value", val);
    };
    let showModal = ref(props.modalshow || false);
    const onUploadImg = () => {};
    const modalChange = (flag) => {
      if (!flag) {
        formModel.value = {
          secret: "",
          tag: "",
          desc: "",
          img: [],
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
    });

    const handleConfirm = (e) => {
      e.preventDefault();
      formRef.value?.validate((error) => {
        if (!error) {
          emit("update:confirm",formModel.value)
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
      rules: {
        secret: {
          required: true,
          trigger: ["blur", "input"],
          message: "请输入密钥",
        },
        tag: {
          required: true,
          trigger: ["blur", "change"],
          message: "请选择标签",
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
