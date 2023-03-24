<template>
  <div>
    {{ error.statusCode == 404 ? 404 : 500 }}
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="less"></style>
