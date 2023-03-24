<template>
  <div>
    <div class="ztz-header">
      <div class="container">
        <NuxtLink to="/" class="logo">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt="稀土掘金"
            class="logo-img"
            data-v-d16a6810=""
          />
        </NuxtLink>
        <div class="header-menu">
          <n-menu
            v-model:value="activeKey"
            mode="horizontal"
            :options="menuData"
          />
        </div>

        <div class="header-box-search">
          <div class="header-search">
            <n-input-group>
              <n-input
                :class="['hs-search', widthTrs ? 'search-width-trans' : '']"
                @focus="searchFocus"
                @blur="searchBlur"
              />
              <n-button type="primary" ghost> 搜索 </n-button>
            </n-input-group>
          </div>
          <div :class="['header_drop_menu']">
            <n-dropdown :options="dropDownOptions" placement="bottom-end">
              <n-button type="primary">创作者中心</n-button>
            </n-dropdown>
          </div>
        </div>

        <div class="header-box-right">
          <div class="header_vip">
            <img
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
              alt=""
            />
            会员
          </div>

          <div class="header_notice">
            <n-icon size="30">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                xml:space="preserve"
              >
                <path
                  d="M256,464c22.779,0,41.411-18.719,41.411-41.6h-82.823C214.588,445.281,233.221,464,256,464z M390.589,339.2V224.8
	c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2s-31.059,13.518-31.059,31.2v14.559
	c-59.015,13.523-103.53,67.601-103.53,131.041v114.4L80,380.8v20.8h352v-20.8L390.589,339.2z"
                ></path>
              </svg>
            </n-icon>
          </div>

          <div class="header_avatar">
            <n-avatar
              round
              size="medium"
              src="https://p3-passport.byteimg.com/img/mosaic-legacy/3792/5112637127~100x100.awebp"
            />
          </div>
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
    const menuData: MenuOption[] = [
      {
        label: () => <nuxt-link to="/detail">首页</nuxt-link>,
        key: "hear-the-wind-sing",
      },
      {
        label: () => <nuxt-link to="/pins">沸点</nuxt-link>,
        key: "pinball-1973",
      },
      {
        label: () => <nuxt-link to="/course">课程</nuxt-link>,
        key: "pinball-1972",
      },
      {
        label: () => <nuxt-link to="/live">直播</nuxt-link>,
        key: "pinball-1971",
      },
      {
        label: () => <nuxt-link to="/live">活动</nuxt-link>,
        key: "pinball-1970",
      },
      {
        label: () => <nuxt-link to="/challenge">活动</nuxt-link>,
        key: "pinball-1969",
      },
      {
        label: () => <nuxt-link to="/shop">商城</nuxt-link>,
        key: "pinball-1968",
      },
      {
        label: () => <nuxt-link to="/app">APP</nuxt-link>,
        key: "pinball-1967",
      },
      {
        label: () => <nuxt-link to="/chajian">插件</nuxt-link>,
        key: "pinball-1966",
      },
      {
        label: () => (
          <nuxt-link to="/buy">
            <img
              class="buyimage"
              src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7482b3ad2cd14edda31f05399c2ae759~tplv-k3u1fbpfcp-no-mark:230:230:230:0.awebp"
            />
          </nuxt-link>
        ),
        key: "pinball-1965",
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
      menuData,
      searchFocus,
      searchBlur,
      ...toRefs(app),
      dropDownOptions,
    };
  },
};
</script>

<style lang="less">
.ztz-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s;
  height: 0.6rem;

  .container {
    max-width: 14.4rem;
    margin: auto;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    z-index: 250;
    height: 0.6rem;

    .logo {
      margin-right: 0.24rem;
      margin-left: 0.24rem;
      display: inline-block;
      height: 0.22rem;
      width: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header-menu {
      width: 6.5rem;
      .n-menu.n-menu--horizontal .n-menu-item-content {
        padding: 0 0.115rem;
      }
      .buyimage {
        height: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .header-box-search {
      width: 4.1rem;
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
    .header-box-right {
      margin: 0 0.2rem;
      display: flex;
      align-items: center;
      .header_vip {
        width: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        font-size: 0.14rem;
        color: #86909c;
      }
      .header_notice {
        width: 0.6rem;
        height: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .header_avatar {
        height: 100%;
        display: flex;
        align-items: center;
        margin: 0.1rem;
      }
    }
  }
}
</style>
