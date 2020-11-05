<template>
  <div id="app">
    <!-- ant 组件国际化 -->
    <a-config-provider :locale="chinese">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import chinese from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'app',
  data() {
    return {
      chinese,
      percent: 0,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
