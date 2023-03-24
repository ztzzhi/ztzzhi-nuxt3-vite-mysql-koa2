<template>
  <div>
    <n-config-provider
      :locale="zhCN"
      :date-locale="dateZhCN"
      :theme-overrides="themeOverrides"
    >
      <NuxtPage></NuxtPage>
    </n-config-provider>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import "@/static/css/reset.css"
export default defineComponent({
  components: {
    NConfigProvider,
  },
  setup() {
    return {
      zhCN,
      dateZhCN,
      themeOverrides: {
        common: {
          primaryColor: "#1e80ff",
          primaryColorHover: "#1e80e1",
        },
      },
    };
  },
});
</script>
<style>
html {
  font-size: 100px;
}
body {
  font-size: 16px;
}
</style>
