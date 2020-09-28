<template>
  <div class="container">
    <Navbar/>

    <router-view></router-view>

    <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/navbar/index.vue';

export default {
  name: 'index',
  components: { Navbar },
};
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '@/styles/mixins/index';
  .container {
    padding-top: 75px;
    @include padding-lr();
  }
</style>
