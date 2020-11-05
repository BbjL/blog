<template>
  <div class="layout-footer">
    2020 © Powered by
    <a href="" target="_blank">iBlog</a>
    <span class="record-info">
      |
      <a href="http://www.beian.miit.gov.cn">浙ICP备15032882号</a></span
    >
    <span class="admin-link">
      |
      <a href="#" class=""> 后台管理 </a></span
    >
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter',
};
</script>

<style lang="scss" scope>
    .layout-footer {
        padding: 24px 0;
        text-align: center;
        a {
            color: $activeColor;
        }
    }
</style>
