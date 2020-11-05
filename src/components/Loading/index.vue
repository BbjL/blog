<template>
  <div class="loading">
    <span class="point"></span>
    <span class="point"></span>
    <span class="point"></span>
  </div>
</template>

<script>
export default {
  name: 'loading',
};
</script>

<style lang="scss" scope>
.loading {
  display: inline-block;
  span:nth-of-type(1).point {
    display: inline-block;
    height: 8px;
    width: 8px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: $activeColor;
    animation-name: bigger;
    animation-delay: 0.2s;
    animation-duration: .8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  span:nth-of-type(2).point {
    display: inline-block;
    height: 8px;
    width: 8px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: $activeColor;
    animation-name: bigger;
    animation-delay: 0.4s;
    animation-duration: .8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  span:nth-of-type(3).point {
    display: inline-block;
    height: 8px;
    width: 8px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: $activeColor;
    animation-name: bigger;
    animation-delay: 0.6s;
    animation-duration: .8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
}

@keyframes bigger {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(200%);
  }
}
</style>
