<template>
  <div class="desc">
    <div class="widget-container">
      <div class="widget-title splite-line">博客简介</div>
      <div class="widget-content intro">
        <p>
          iBlog 是基于 Node.js 的开源个人博客系统，采用 Nuxt + Vue + TypeScript
          技术栈。
        </p>
      </div>
    </div>
    <div class="widget-container">
      <div class="widget-title splite-line">博客日历</div>
      <div class="widget-content calendar">
        <a-calendar
          :fullscreen="false"
          @panelChange="onPanelChange"
          @change="selectDate"
        />
      </div>
    </div>
    <div class="widget-container">
      <div class="widget-title splite-line">热门文章</div>
      <ul class="widget-content hotBlog">
        <li><a href="">判断能否成功返回上一页</a></li>
        <li><a href="">自己动手开发 Node.js 模板引擎</a></li>
        <li><a href="">JavaScript 声明提升 (hoisting)</a></li>
        <li><a href="">JavaScript 学习笔记：引用类型</a></li>
        <li><a href="">自己实现模板字符串</a></li>
        <li><a href="">JavaScript 学习笔记：创建对象的几种模式</a></li>
        <li><a href="">Windows 下创建文件名为空的文件</a></li>
      </ul>
    </div>
    <div class="widget-container">
      <div class="widget-title splite-line">热门标签</div>
      <ul class="widget-content tags clearfix">
        <li>const</li>
        <li>constreadonly</li>
        <li>try catch finally</li>
        <li>作用域</li>
        <li>内存</li>
        <li>变量</li>
        <li>声明提升</li>
        <li>压缩</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Descrition',
  methods: {
    ...mapActions('client', ['findBlog']),
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    selectDate(value) {
      // eslint-disable-next-line
      const date = value._d.toISOString().replace(/T.*/, "").replace(/-/g, "/");

      this.findBlog({ date }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss" scope>
.desc {
  .widget-container {
    margin-bottom: 20px;
    background-color: $theme;

    .widget-title {
      padding-left: 20px;
      padding-right: 20px;
      line-height: 50px;
      font-size: 15px;
    }

    .widget-content {
      padding: 20px;
    }
  }

  div:nth-last-child(1).widget-container {
    margin-bottom: 0;
  }

  .intro {
    height: 120px;
    margin-bottom: 20px;
  }

  .hotBlog {
    li {
      a {
        display: block;
        height: 35px;
        line-height: 35px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:hover {
          color: $activeColor;
        }
      }
    }
  }

  .tags {
    li {
      float: left;
      padding: 3px 15px;
      margin-right: 7px;
      margin-bottom: 15px;
      border-radius: 20px;
      background-color: #eee;
      color: #555;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: $theme;
        background-color: $activeColor;
      }
    }
  }
}
</style>
