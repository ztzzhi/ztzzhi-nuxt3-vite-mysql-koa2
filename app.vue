<template>
  <div class="app_out_box">
    <n-config-provider
      :locale="zhCN"
      :date-locale="dateZhCN"
      :theme-overrides="themeOverrides"
    >
      <n-message-provider>
        <NuxtPage></NuxtPage>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import "@/utils/clickEffect";
import "@/static/css/reset.css";
import "@/static/css/media.less";
export default defineComponent({
  components: {
    NConfigProvider,
    NMessageProvider,
  },
  setup() {
    return {
      zhCN,
      dateZhCN,
      themeOverrides: {
        common: {
          primaryColor: "#1e80ff",
          primaryColorHover: "#1e80e1",
          primaryColorPressed: "#1e80c8",
        },
      },
    };
  },
});
</script>
<style>
html {
  font-size: 100px;
  cursor: url(./static/img/cursor.png), default !important;
  background-color: #f1f1f1;
}
body {
  font-size: 16px;
  cursor: url(./static/img/cursor.png), default !important;
}
a,
.cussor {
  cursor: url(./static/img/link_select.cur), auto;
}

a:active {
  cursor: url(./static/img/person_select.cur), auto;
}

p {
  cursor: url(./static/img/normal_select.cur), auto;
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
