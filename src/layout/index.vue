<template>
  <div class="container">
    <!-- 导航 -->
    <Navbar />
    <!--  -->
    <router-view></router-view>
    <!-- 底部信息 -->
    <LayoutFooter />
    <!-- 返回顶部 -->
    <div class="toTop-wrapper">
      <ToTop />
    </div>
  </div>
</template>

<script>
import ToTop from '@/components/ToTop/index.vue';
import Navbar from './components/Navbar/index.vue';
import LayoutFooter from './components/LayoutFooter/index.vue';

export default {
  name: 'index',
  components: { Navbar, LayoutFooter, ToTop },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.container {
  padding-top: 75px;
  @include padding-lr();
  @media (max-width: 768px) {
    @include padding-lr(0);
  }
  .toTop-wrapper {
    position: fixed;
    right: 50px;
    bottom: 55px;
  }
}
</style>
