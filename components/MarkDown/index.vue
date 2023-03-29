<template>
  <div class="mdeditor_box">
    <MdEditor
      :toolbarsExclude="['link', 'mermaid', 'katex', 'github']"
      v-model="text"
      :pageFullscreen="true"
      :preview="true"
      :htmlPreview="true"
      @onUploadImg="onUploadImg"
      @onSave="codeSave"
    >
    </MdEditor>
  </div>
</template>

<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    change: () => {},
  },
  components: {
    MdEditor,
  },
  setup(props, { emit }) {
    const text = ref(props.value);
    const codeSave = (val) => {
      emit("change", val);
    };
    const onUploadImg = () => {};
    return {
      text,
      codeSave,
      onUploadImg,
    };
  },
};
</script>

<style scoped lang="less">
.mdeditor_box {
  width: 100%;
  height: 100%;
}
</style>
