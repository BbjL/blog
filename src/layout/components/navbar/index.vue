<template>
  <nav class="nav-wrapper">
    <!--logo-->
    <div class="logo-box">
      <a href="#" class="logo">
        <img src="../../../../public/img/icon.png" alt="blog">
        <h4>hiBlog</h4>
      </a>
    </div>
    <!--导航栏-->
    <div class="navbar-collapse">
      <!--搜索-->
      <div class="search-box">
        <div :class="['search-input-box', {active: toggleSearch}]">
          <input type="text" placeholder="搜索文章">
          <button class="search-toggler-btn" @click="toggleSearch = !toggleSearch">×</button>
        </div>
        <div class="search-toggler-box">
          <a href="#"   @click="toggleSearch = !toggleSearch">
            <font-awesome-icon icon="search" />
          </a>
        </div>
      </div>
      <!--路由连接-->
      <ul :class="['navbar-list', {toggle:toggle}]" @click="changeRoute" >
        <li :class="['navbar', {active: active === route.meta.id}]"
            :data-route="route.meta.id"
            v-for="(route, index) in filterRoutes"
            :key="index">
          <router-link :to="route.path">
            <font-awesome-icon :icon="route.meta.icon" />
            {{route.meta.title}}</router-link>
        </li>
        <li style="color:#efbb35;">
          <font-awesome-icon icon="sun" />
        </li>
      </ul>
      <!--切换按钮-->
      <button class="navbar-toggler" @click="toggle = !toggle">
        <font-awesome-icon icon="align-justify" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      active: 'articles',
      colorList: [],
      toggle: false,
      toggleSearch: false,
    };
  },
  computed: {
    filterRoutes() {
      const { routes } = this.$router.options;

      const filter = routes.filter((item) => !(item.hidden && item.hidden === true));

      return filter;
    },
  },
  methods: {
    changeRoute(event) {
      // eslint-disable-next-line
      event = event || window.event;
      // eslint-disable-next-line
      let { target, currentTarget } = event;

      while (target !== currentTarget) {
        if (target.dataset.route) {
          this.active = target.dataset.route;
          return;
        }
        target = target.parentNode;
      }
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "@/styles/mixins/index";
  @import "@/styles/themes/light";

  $navFontSize: 18px;
  $navHeight: 70px;
  $navColorList: #f60,#d24,#1890ff,#da8ec5,#78bfc2,#bec278;

  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: $navHeight;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: $navFontSize;
    border-bottom: 1px solid hsla(0,0%,91.8%,.8);
    background-color: #fff;
  }

  .logo-box {
    @include padding-lr();
    .logo {
      text-decoration: none;
      img {
        margin-right: 5px;
        height: 46px;
        vertical-align: middle;
      }
      h4 {
        display: inline-block;
        vertical-align: middle;
        font-weight: 400;
      }
    }
  }

  .navbar-collapse {
    display: flex;
    align-items: center;
    .navbar-list {
      text-decoration: none;
      list-style: none;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      transition: all .3s;
      @media (min-width: 768px){
        display: flex;
      }
      @media (max-width: 768px) {
        position: fixed;
        top: $navHeight;
        left: 0;
        right: 0;
        height: 0;
        overflow: hidden;
        background-color: #fff;
        &.toggle {
          height: 4 * $navHeight;
          opacity: 1;
        }
      }
      & > li {
        line-height: $navHeight;
        opacity: .7;
        @include padding-lr();
        &:hover {
          opacity: 1;
        }
        & > a {
          position: relative;
          display: block;
          &:after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 35px;
            margin-left: 5px;
            opacity: 0;
            transition: all .7s;
          }
        }
      }
    }
  }

  .search-box {
      display: flex;
      justify-content: space-between;
      width: 250px;
      height: 50px;
      justify-items: center;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 80px;
      border: 1px solid rgba(217, 217, 217, 0.91);
      @media (max-width: 568px) {
        width: auto;
        margin: 0 auto;
        border: none;
      }
      .search-input-box {
        display: flex;
        transition: all .5s;
        .search-toggler-btn {
          display: none;
        }
        @media (max-width: 568px) {
          position: fixed;
          top: -$navHeight;
          left: 0;
          width: 100%;
          height: $navHeight;
          background-color: #fff;
          &.active {
            top: 0;
          }
          .search-toggler-btn {
            display: inline-block;
            position: absolute;
            right: 20px;
            top: 50%;
            height: 70px;
            transform: translateY(-50%);
            padding-left: 15px;
            padding-right: 15px;
            color: #333;
            font-size: 30px;
            line-height: 70px;
            text-align: center;
            border: none;
            background-color: transparent;
            &:focus {
              outline: 0;
              color: #000;
            }
          }
        }
        & > input[type='text'] {
          width: 150px;
          padding: 5px 15px;
          /*border: 1px solid rgba(234, 234, 234, 0.91);*/
          border: none;
          outline: none;
          border-radius: 50px;
          background-color: transparent;
          &::-webkit-input-placeholder {
            color: #999;
          }
          @media (max-width: 568px) {
            width: 100%;
            padding-left: 35px;
            padding-right: 65px;
          }
        }
      }
      .search-toggler-box {
        display: flex;
        align-items: center;
        & > a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 38px;
          width: 38px;
          margin-left: 8px;
          border-radius: 50%;
          opacity: .7;
          &:hover {
            opacity: 1;
          }
        }
      }
  }

  .navbar-toggler {
    @media (max-width: 768px){
      display: block;
      width: 56px;
      height: 40px;
      padding: 4px 12px;
      margin-left: 15px;
      margin-right: 15px;
      font-size: 28px;
      line-height: 1;
      color: rgba(0,0,0,.5);
      border: 1px solid #ccc;
      cursor: pointer;
      background: #fff;
    }
    @media (min-width: 768px){
      display: none;
    }
  }

  @for $li from 1 through 3 {
    .navbar-list li:nth-of-type( #{$li} ).active {
      & > a {
        color: nth($navColorList, $li );
        @media (min-width: 768px) {
          &:after {
            margin-left: 22px;
            background-color: nth($navColorList, $li) ;
            opacity: 1;
          }
        }
      }
    }
  }

</style>
