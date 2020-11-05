<template>
  <ul class="category">
    <li
      v-for="(item, index) in category"
      :key="index"
      :class="{active: item.param === $route.params.category}"
    >
      <router-link :to="{name: 'articles', params: {category: item.param}}">
        <i :class="['iconfont', item.cateIcon]"></i>
        <span>{{ item.cateName }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import apis from '@/api';

export default {
  name: 'index',
  data() {
    return {
      category: [],
    };
  },
  created() {
    apis.category.getCateList()
      .then((res) => {
        if (res.status === 200) {
          this.category = res.data;
        }
      });
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  $leftSliderSize: 15px;
  $activeColorList: #ea8010, #00bb9c, #80bd01, #56abe4, #ab47bc, #ea8010;

  .category {
    font-weight: 500;
    font-size: $leftSliderSize;
    @media (max-width: 1120px) {
      display: flex;
    }

    li {
      width: 100%;
      border-radius: 5px 0 0 5px;
      text-overflow: ellipsis;

      &.active, &:hover {
        background-color: #fff;
        box-shadow: 0 6px 10px 0 hsla(0, 0%, 91.8%, 0.8);

        a {
          transform: translateX(-2px);
        }
      }

      a {
        display: block;
        height: 54px;
        line-height: 54px;
        padding-left: 40px;
        margin-bottom: 3px;
        color: #4f6174;
        transition: all 0.3s;
        @media (max-width: 768px) {
          @include padding-lr(15px);
          text-align: center;
        }

        i {
          font-size: 22px;
          color: $iconColor;
          vertical-align: middle;
        }

        span {
          display: inline-block;
          padding-left: 7px;
          vertical-align: middle;
          @media (max-width: 992px) {
            display: none;
          }
        }

      }
    }
  }

  // icon active color
  @for $index from 1 through 6 {
    .category li:nth-of-type(#{$index}).active a i, .category li:nth-of-type(#{$index}) a:hover i {
      color: nth($activeColorList, $index);
    }
  }
</style>
