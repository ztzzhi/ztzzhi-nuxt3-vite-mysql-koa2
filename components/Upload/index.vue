<template>
  <div style="width: 100%">
    <n-upload
      accept="image/*"
      class="selfupload"
      :max="4"
      :action="imgUploadUrl"
      list-type="image-card"
      :on-finish="uploadChange"
      :default-file-list="fileList"
      :on-remove="handleRemove"
    >
      点击上传封面
    </n-upload>
  </div>
</template>

<script>
import { NUpload } from "naive-ui";
import { imgUploadUrl } from "@/config";
export default {
  props: {
    imgUploadUrl: {
      type: String,
      default: imgUploadUrl,
    },
    value: {
      type: Array,
      default: [],
    },
  },
  components: {
    NUpload,
  },
  setup(props, { emit }) {
    let fileList = ref(
      props.value.map((item, index) => {
        return {
          id: index,
          url: item,
          status: "finished",
        };
      })
    );
    const uploadChange = (event) => {
      if (event.event?.currentTarget?.response) {
        let url = JSON.parse(event.event.currentTarget.response)?.result;
        fileList.value = [
          ...fileList.value,
          { url, status: "finished", id: new Date().getTime() },
        ];
        emit(
          "update:value",
          fileList.value.map((item) => item.url)
        );
      }
    };
    const handleRemove = (item) => {
      let id = item.file.id;
      let index = fileList.value.findIndex((item) => item.id == id);
      fileList.value.splice(index, 1);
      emit(
        "update:value",
        fileList.value.map((item) => item.url)
      );
    };
    return {
      uploadChange,
      fileList,
      handleRemove,
    };
  },
};
</script>
