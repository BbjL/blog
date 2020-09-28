<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import layout from '@/layout/index.vue';

export default {
  name: 'app',
  components: { layout },
  data() {
    return {
      color1: '#409EFF',
      color2: null,
    };
  },

};
</script>

<style lang="scss">
  @import "styles/main";
</style>
