<template>
  <div class="blogDetail">
    <div class="left-wrapper"></div>
    <div class="slider-wrapper">
      <div class="cate-wrapper">
        <h5 class="title">分类</h5>
        <div class="cate-icon">
          <i class="iconfont icon-js1" style="color: #00bb9c"></i>
          <span>JavaScript</span>
        </div>
        <router-link :to="{path: '/blog'}">
          <a-button type="dashed" block>
            全部6篇文章
          </a-button>
        </router-link>
      </div>
      <div :class="{'sticky-wrapper': sticky}">
        <div class="list-wrapper">
          <h5 class="title">目录</h5>
          <a-anchor :affix="false" :show-ink-in-fixed="true" :offset-top="75" :bounds="10">
            <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
            <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
            <a-anchor-link
              href="#components-anchor-demo-basic"
              title="Basic demo with Target"
              target="_blank"
            />
            <a-anchor-link href="#API" title="API">
              <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
              <a-anchor-link href="#Link-Props" title="Link Props" />
            </a-anchor-link>
          </a-anchor>
        </div>
        <div class="hot-wrapper">
          <div class="widget-header title">热门文章</div>
          <ul class="hot-list">
            <li>判断能否成功返回上一页</li>
            <li>自己动手开发 Node.js 模板引擎</li>
            <li>JavaScript 声明提升 (hoisting)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      sticky: false,
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
/*  $activeColorList: #ea8010, #00bb9c, #80bd01, #56abe4, #ab47bc, #ea8010;*/

  .blogDetail {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 25px;
  }

  .left-wrapper {
    width: 792px;
    height: 1500px;
    min-height: 80vh;
    padding: 30px;
    background-color: #fff;
    @media (max-width: 892px) {
      width: 80vh;
      padding: 0;
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .slider-wrapper {
    width: 260px;
    height: 500px;
    margin-left: 20px;
    .title {
      font-size: 16px;
    }
    @media (max-width: 892px) {
      display: none;
    }
  }

  .cate-wrapper, .list-wrapper, .hot-wrapper {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
  }

  .cate-wrapper {
    .title {
      margin-bottom: 20px;
    }
    .cate-icon {
      margin-bottom: 10px;
      line-height: 25px;
      font-size: 15px;
      .iconfont {
        font-size: 25px;
      }
    }
    a {
      display: inline-block;
    }
  }

  .hot-wrapper {
    padding: 0;
    .widget-header {
      padding: 20px;
      border-bottom: 1px solid #e7eaec;
    }
    .hot-list {
      padding: 20px;
      > li {
        line-height: 30px;
      }
    }
  }

  .sticky {
    position: fixed;
  }
</style>
