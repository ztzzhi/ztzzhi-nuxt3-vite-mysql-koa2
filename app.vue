<template>
  <div class="app_out_box">
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
import "@/utils/clickEffect"
import "@/static/css/reset.css";
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
          primaryColorPressed:"#1e80c8"
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
  cursor:url(https://cdn.custom-cursor.com/db/10116/32/mochi-mochi-peach-cat-and-bubble-tea-cursor.png) , default!important
}
#__nuxt {
  min-height: 100vh;
}
.app_out_box {
  min-height: 100vh;
}
.n-config-provider {
  min-height: 100vh;
}
</style>
