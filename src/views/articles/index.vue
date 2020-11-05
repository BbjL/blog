<template>
  <div class="article-content">
    <!-- 分类标签 -->
    <div class="category-wrap">
      <LeftSlider />
    </div>
    <!-- 博客列表 -->
    <div class="post-wrap">
      <BlogList />
    </div>
    <!-- 简介热门标签博客日历 -->
    <div class="desc-wrap">
      <Description  />
    </div>
  </div>
</template>

<script>
import LeftSlider from './components/LeftSlider/index.vue';
import Description from './components/Description/index.vue';
import BlogList from './components/BlogList/index.vue';

export default {
  name: 'index',
  components: { LeftSlider, BlogList, Description },
};
</script>

<style lang="scss" scoped>
$sliderWidth: 250px;
$rightSliderSize: 14px;
$blogContentSize: 18px;

.article-content {
  display: flex;
  padding: 25px 20px 0;
  .category-wrap {
    width: 250px;
  }
  .post-wrap {
    flex: 1;
    // height: 200px;
    background-color: $theme;
  }
  .desc-wrap {
    width: 300px;
    margin-left: 15px;
  }
  @media (max-width: 1112px) {
    flex-direction: column;
    .category-wrap {
      width: 100%;
      background-color: #fff;
    }
    .post-wrap {
      flex: 0 1 auto;
      width: 100%;
    }
    .desc-wrap {
      display: none;
    }
  }
}
</style>
