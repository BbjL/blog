<template>
  <a :class="['to-top', {'hiddenToTop':hiddenToTop}]" href="#">
    <i class="iconfont icon-totop"></i>
  </a>
</template>

<script>
export default {
  name: 'ToTop',
  data() {
    return {
      hiddenToTop: true,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop !== 0 && this.hiddenToTop) {
        this.hiddenToTop = false;
      } else if (scrollTop === 0) {
        this.hiddenToTop = true;
      }
    });
  },
};
</script>

<style lang="scss" scope>
.to-top {
  display: inline-block;
  width: 45px;
  height: 45px;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  background-color: $theme;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all .3s;
  z-index: 99999;
  i {
    margin-right: 0;
  }
  &:hover {
    color: $theme;
    background-color: $activeColor;
  }
}

.hiddenToTop {
  display: none;
}
</style>
