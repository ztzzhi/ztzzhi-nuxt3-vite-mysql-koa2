<template>
  <div>
    <div :class="['ztz-header', isShowTopBar ? '' : 'disvisible']">
      <div class="container">
        <div class="menu_box">
          <n-menu mode="horizontal" :options="menuData" />
        </div>
        <div class="header-box-search">
          <div class="header-search">
            <n-input-group>
              <n-input
                :class="['hs-search', widthTrs ? 'search-width-trans' : '']"
                @focus="searchFocus"
                @blur="searchBlur"
                placeholder="输入你想搜索的文章"
              />
            </n-input-group>
          </div>
          <div :class="['header_drop_menu']">
            <n-button type="primary">创作者中心</n-button>
            <!-- <n-dropdown :options="dropDownOptions" placement="bottom-end">
              
            </n-dropdown> -->
          </div>
        </div>
        <NuxtLink to="/" class="logo">
          <img src="../static/img/header.jpg" alt="博客logo" class="logo-img" />
          <span class="logo-text">小张很嚣张</span>
        </NuxtLink>
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
} from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
export default {
  components: {
    NButton,
    NMenu,
    NInputGroup,
    NInput,
    NDropdown,
    NIcon,
    NAvatar,
  },
  setup() {
    const isShowTopBar = ref(true);
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
        label: () => <nuxt-link to="/mine">首页</nuxt-link>,
        key: "hear-the-wind-sing",
      },
      {
        label: () => <nuxt-link to="/center">我的</nuxt-link>,
        key: "pinball-1973",
      },
      {
        label: () => <nuxt-link to="/link">友链</nuxt-link>,
        key: "pinball-1972",
      },
      {
        label: () => <nuxt-link to="/about">关于我</nuxt-link>,
        key: "pinball-1971",
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
    return {
      isShowTopBar,
      menuData,
      searchFocus,
      searchBlur,
      ...toRefs(app),
      dropDownOptions,
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
  z-index: 250;
  transform: translateY(0);

  .container {
    width: 100%;
    max-width: 14.4rem;
    margin: auto;
    display: flex;
    align-items: center;
    background: transparent;
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
      color: #fff;
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
    }
    .menu_box {
      width: 7rem;
      color: #fff;
      ::v-deep(
          .n-menu.n-menu--horizontal
            .n-menu-item-content
            .n-menu-item-content-header
            a
        ) {
        color: #fff;
      }
    }
    .header-box-search {
      width: 4rem;
      width: rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      .header-search {
        .hs-search {
          width: 2.16rem;
          transition: width 0.3s;
        }
        .search-width-trans {
          width: 3.48rem;
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
