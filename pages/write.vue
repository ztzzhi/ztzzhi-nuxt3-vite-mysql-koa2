<template>
  <div class="write_box">
    <MarkDown :value="mytext" @change="handleChange"></MarkDown>
  </div>
</template>

<script>
import MarkDown from "@/components/MarkDown";
export default {
  components: {
    MarkDown,
  },
  setup(){
    const mytext = ref("1231")
    const handleChange = (val)=>{
      console.log(val,'val123');
    }
    return {
      mytext,
      handleChange
    }
  }
};
</script>
<style scoped>
.write_box{
  background-color: #fff;
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 10;
}
</style>
