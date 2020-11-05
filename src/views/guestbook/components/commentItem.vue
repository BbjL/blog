<template>
  <div class="comment-item">
    <!-- 左侧头像 -->
    <a-avatar
      class="comment-avatar hide-avatar"
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"></a-avatar>
    <!-- 消息右侧 -->
    <div class="comment-right">
      <div class="comment-info">
        <span class="author">{{ comment.author }}</span>
        <span class="datetime">{{ comment.datetime }}</span>
        <span class="reply" :data-author="comment.author"><i class="iconfont icon-reply"></i>回复</span>
      </div>
      <!-- 内容区 -->
      <div class="comment-content">
        <div v-html="comment.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .comment-item {
    display: flex;
    margin-bottom: 25px;
    color: #888;

    .comment-avatar {
      margin-right: 12px;
    }

    .comment-right {
      flex: 1;
    }
  }

  .comment-info {
    position: relative;
    padding: 8px 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: #f6f8fa;
    font-size: 12px;
    line-height: 21px;
    z-index: 1111;

    span {
      margin-right: 5px;
    }

    .reply {
      float: right;
      cursor: pointer;

      &:hover {
        color: #333;
      }
    }

    &::before {
      content: " ";
      box-sizing: content-box;
      display: block;
      position: absolute;
      top: 11px;
      left: -16px;
      width: 0;
      height: 0;
      border-width: 8px;
      border-color: transparent;
      border-right-color: #f6f8fa;
      border-style: outset solid outset;
      z-index: 11;
      @media (max-width: 768px) {
        display: none;
      }
    }

    &::after {
      content: " ";
      box-sizing: content-box;
      display: block;
      position: absolute;
      top: 10px;
      left: -18px;
      width: 0;
      height: 0;
      border-width: 9px;
      border-color: transparent;
      border-right-color: rgba(0, 0, 0, 0.1);
      border-style: outset solid outset;
      z-index: 10;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .comment-content {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 15px;
  }
</style>
