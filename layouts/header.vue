<template>
  <div>
    <div :class="['ztz-header', isShowTopBar ? '' : 'disvisible']">
      <div class="container">
        <div class="menu_box">
          <n-menu mode="horizontal" :options="menuData" value="/" />
        </div>
        <div class="right_box">
          <div class="header-box-search">
            <div class="header-search">
              <n-input-group>
                <n-select
                  :class="['hs-search', widthTrs ? 'search-width-trans' : '']"
                  @focus="searchFocus"
                  @blur="searchBlur"
                  :show-arrow="false"
                  placeholder="输入你想搜索的文章"
                  @search="handleSearch"
                  @change="handleChange"
                  filterable
                  clearable
                  v-model:value="selectValue"
                  :options="selectOptions"
                  remote
                />
              </n-input-group>
            </div>
            <div :class="['header_drop_menu']">
              <n-button type="primary" @click="toWrite">创作者中心</n-button>
            </div>
          </div>
          <NuxtLink to="/" class="logo">
            <img
              src="../static/img/header.jpg"
              alt="博客logo"
              class="logo-img"
            />
            <span class="logo-text">小张很嚣张</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
<script lang="tsx">
import {
  NButton,
  NMenu,
  NInputGroup,
  NInput,
  NDropdown,
  NIcon,
  NAvatar,
  NSelect,
} from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
import { getSearchByKeyword } from "@/api";
export default {
  components: {
    NButton,
    NMenu,
    NInputGroup,
    NInput,
    NDropdown,
    NIcon,
    NAvatar,
    NSelect,
  },
  setup() {
    const router = useRouter();
    const isShowTopBar = ref(true);
    const selectValue = ref(null);
    onMounted(() => {
      if (process.client) {
        window.onscroll = () => {
          let top = Math.floor(
            document.documentElement.scrollTop || document.body.scrollTop
          );
          if (top > 40) {
            isShowTopBar.value = false;
          } else {
            isShowTopBar.value = true;
          }
        };
      }
    });

    const menuData: MenuOption[] = [
      {
        label: () => <nuxt-link to="/">首页</nuxt-link>,
        key: "/",
      },
      {
        label: () => <nuxt-link to="/resource">资源中心</nuxt-link>,
        key: "/resource",
      },
      {
        label: () => <nuxt-link to="/link">友链</nuxt-link>,
        key: "/link",
      },
      {
        label: () => <nuxt-link to="/about">关于我</nuxt-link>,
        key: "/about",
      },
    ];

    const renderIcon = (icon: Component) => {
      return () => <NIcon>{<icon></icon>}</NIcon>;
    };

    const dropDownOptions = [
      {
        label: "用户资料",
        key: "profile",
        icon: renderIcon(UserIcon),
      },
      {
        label: "编辑用户资料",
        key: "editProfile",
        icon: renderIcon(EditIcon),
      },
      {
        label: "退出登录",
        key: "logout",
        icon: renderIcon(LogoutIcon),
      },
    ];

    const app = reactive({
      widthTrs: false,
    });

    const searchFocus = () => {
      app.widthTrs = true;
    };
    const searchBlur = () => {
      app.widthTrs = false;
    };
    const toWrite = () => {
      router.push("/write");
    };

    const selectOptions = ref([]);
    const handleSearch = async (val: string) => {
      if (!val) return;
      const res = await getSearchByKeyword({keyword:val});
      if (res?.code == 200) {
        selectOptions.value = res?.result?.map((item: any) => {
          return {
            ...item,
            label: item.title,
            value: item.id,
          };
        });
      }
    };

    const handleChange = (id: number) => {
      router.push("/detail?id=" + id);
      nextTick(() => {
        selectValue.value = null;
      });
    };
    return {
      isShowTopBar,
      menuData,
      searchFocus,
      searchBlur,
      ...toRefs(app),
      dropDownOptions,
      toWrite,
      handleSearch,
      handleChange,
      selectOptions,
      selectValue,
    };
  },
};
</script>

<style lang="less" scoped>
.ztz-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s;
  height: 0.6rem;
  width: 100%;
  z-index: 250;
  transform: translateY(0);
  background-color: rgba(255, 255, 255, 0.8);

  .container {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: space-between;
    color: #909090;
    z-index: 250;
    height: 0.6rem;
    padding: 0 0.5rem;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);

    .logo {
      margin-right: 0.24rem;
      margin-left: 0.24rem;
      display: inline-block;
      display: flex;
      align-items: center;
      color: #515767;
      .logo-img {
        width: 0.36rem;
        height: 0.36rem;
        margin-right: 0.06rem;
        flex-shrink: 0;
        border-radius: 50%;
      }
      .logo-text {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
        font-weight: bold;
      }
      .logo-text:hover {
        color: #49b1f5;
      }
    }
    .menu_box {
      ::v-deep(
          .n-menu.n-menu--horizontal
            .n-menu-item-content
            .n-menu-item-content-header
            a
        ) {
        color: #515767;
      }
      ::v-deep(
          .n-menu.n-menu--horizontal
            .n-menu-item-content
            .n-menu-item-content-header
            a:hover
        ) {
        color: #3ca5f6;
      }
    }
    .right_box {
      display: flex;
      align-items: center;
    }
    .header-box-search {
      width: 3.5rem;
      width: rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      .header-search {
        .hs-search {
          width: 2rem;
          transition: width 0.3s;
        }
        .search-width-trans {
          width: 3.5rem;
        }
      }
      .header_drop_menu {
        transition: width 0.3s;
        overflow: visible;
        margin-left: 0.15rem;
      }
      // .dropmenu-trans {
      //   width: 0;
      //   padding: 0;
      //   overflow: hidden !important;
      // }
    }
  }
}
.disvisible {
  transform: translate(0, -100%);
}
</style>
