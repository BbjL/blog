<template>
  <div class="blog-box">
    <!-- 列表顶部 -->
    <div class="blogList-top">
      <div class="sort-wrapper">
        <span
          :class="{ active: sortType === 'date' }"
          @click="sortType = 'date'"
        >日期</span
        >
        <span
          :class="{ active: sortType === 'pView' }"
          @click="sortType = 'pView'"
        >阅读量</span
        >
      </div>
      <div class="sort-direction">
        <span
          :class="['sort-up', { active: sortUp }]"
          @click="
            () => {
              blogsList.reverse();
              sortUp = !sortUp;
            }
          "
        >
          <i class="iconfont icon-paixu"></i
          ></span>
        <span
          :class="['sort-down', { active: !sortUp }]"
          @click="
            () => {
              blogsList.reverse();
              sortUp = !sortUp;
            }
          "
        >
          <i class="iconfont icon-paixu1"></i
          ></span>
      </div>
    </div>
    <ul class="blog-list" v-if="!listLoading">
      <!-- 搜索结果alert -->
      <li class="search-alert" v-if="searchAlert">
        <a-alert
          style="margin-bottom: 20px"
          :message="'共有' + blogsList.length + '条筛选结果'"
          type="info"
          :closable="true"
          @close="closeAlert"
          close-text="清空搜索"
        />
      </li>
      <!-- 博客列表 -->
      <li class="blog-info" v-for="(item, index) in blogsList" :key="index">
        <!-- 日期 -->
        <div class="date">{{ item.date }}</div>
        <!-- 标题 -->
        <h4 class="title" >
          <!-- 转载连接 -->
          <a v-if="item.url !== ''" :href="item.url" >
            <i class="iconfont icon-ExternalLinkexternal"></i>
            <span>{{ item.title }}</span>
          </a>
          <!-- 原创链接 -->
          <router-link v-else :to="{path: '/detail', query: {id: item.id}}">
            <i class="iconfont icon-ExternalLinkexternal"></i>
            <span>{{ item.title }}</span>
          </router-link>
        </h4>
        <!-- 所属分类 -->
        <div class="classify">
          <!-- 博文阅读量等基本信息 -->
          <div class="classify-left">
            <a :href="item.path" class="left-item">
              <i :class="['iconfont', item.icon]"></i>
              <span>{{ item.category }}</span>
            </a>
            <div class="left-item">
              <i class="iconfont icon-view-copy"></i>
              <span>{{ item.pViewCount }}</span>
            </div>
            <div class="left-item">
              <i class="iconfont icon-huabanfuben"></i>
              <span>{{ item.commentsCount }}</span>
            </div>
          </div>
          <!-- 转载网站 -->
          <a :href="item.link">
            <i class="iconfont icon-globe-americas"></i>
            <span>{{ item.link }}</span>
          </a>
        </div>
        <!-- 分割线 -->
        <div class="hr-line-dashed"></div>
      </li>
      <!-- 暂无内容 -->
      <li class="empty-li" v-if="blogsList.length === 0">
        <a-empty/>
      </li>
      <!-- next page -->
      <li v-if="moreFlag && !searchAlert" @click="moreData">
        <button class="next-btn">
          <Loading v-if="btnLoading"/>
          <span v-else>下一页</span>
        </button>
      </li>
      <!-- no more -->
      <li v-else-if="blogsList.length !== 0">
        <div class="no-more">没有更多数据</div>
      </li>
    </ul>
    <!-- 加载中 -->
    <div class="list-loading" v-else style="text-align: center">
      <Loading/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from '@/components/Loading/index.vue';

export default {
  name: 'indiex',
  components: { Loading },
  data() {
    return {
      sortUp: false, // 是否升序
      sortType: 'date', // 分类方法
      moreFlag: false, // 是否还有数据
      btnLoading: false, // 加载按钮的loading
    };
  },
  created() {
    this.defaultReq();
  },
  computed: {
    // ...mapState(['blogsList', 'searchAlert', 'listLoading']),
    ...mapState('client', {
      blogsList: (state) => state.blogsList,
      searchAlert: (state) => state.searchAlert,
      listLoading: (state) => state.listLoading,
    }),
  },
  methods: {
    // ...mapActions(['getBlogsList', 'resortBlogsList']),
    ...mapActions('client', [
      'getBlogsList', // -> this.foo()
      'resortBlogsList', // -> this.bar()
    ]),
    // 默认请求
    defaultReq() {
      this.getBlogsList({
        pageNum: 1,
        pageSize: 5,
      })
        .then((res) => {
          this.moreFlag = res.data.more;
        });
    },
    // 加载更多数据
    async moreData() {
      const { category } = this.$route.params;
      this.btnLoading = true; // 显示loading

      try {
        const res = await this.getBlogsList({
          pageNum: 1,
          pageSize: 5,
          category,
          type: 'add',
        });

        this.moreFlag = res.data.more;
        this.btnLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
    // 关闭搜索提示框
    closeAlert() {
      this.$store.state.searchAlert = false;

      this.getBlogsList({
        pageNum: 1,
        pageSize: 5,
        category: this.$route.params.category,
      })
        .then((res) => {
          this.moreFlag = res.data.more;
        });
    },
  },
  watch: {
    $route(to) {
      // 对路由变化作出响应...
      this.getBlogsList({
        pageNum: 1,
        pageSize: 5,
        category: to.params.category,
      })
        .then((res) => {
          this.moreFlag = res.data.more;
        });
    },
    // 监听排序
    sortType() {
      this.resortBlogsList({ type: this.sortType });
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
  .blog-box {
    .blogList-top {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      font-size: 16px;

      span {
        margin-right: 8px;
        cursor: pointer;

        &.active,
        &:hover {
          color: #444;
        }
      }

      .sort-direction {
        position: relative;
        height: 25px;
        width: 25px;

        .sort-up,
        .sort-down {
          position: absolute;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -ms-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          background-color: #fff;
          opacity: 0;

          &.active {
            z-index: 1;
            opacity: 1;
          }
        }
      }
    }

    .blog-list {
      padding-top: 20px;
      @include padding-lr(20px);
      min-height: 100vh;

      .no-more {
        text-align: center;
        padding: 20px;
      }
    }
  }

  .blog-info {
    .date {
      margin-bottom: 12px;
    }

    .title {
      a {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7em;
        color: #444;
        word-break: break-all;

        &:hover {
          color: $activeColor;
        }
      }
    }

    .classify {
      display: flex;
      justify-content: space-between;

      .classify-left {
        display: flex;

        .left-item {
          margin-right: 30px;
          @media (max-width: 568px) {
            margin-right: 15px;
          }
        }
      }

      i {
        color: $iconColor;
      }
    }

    .hr-line-dashed {
      background-color: #fff;
      border-top: 1px dashed #e7eaec;
      color: #fff;
      height: 1px;
      margin: 20px 0;
    }
  }

  .next-btn {
    display: block;
    width: 100%;
    height: 38px;
    color: $skinFontColor;
    background-color: #fff;
    margin-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: $activeColor;
      border-color: $activeColor;
    }

    &:focus {
      outline: none;
    }
  }

  .empty-li {
    text-align: center;

    svg {
      font-size: 130px;
    }
  }

  @keyframes sortTypeChange {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<style>
  .ant-alert-close-text {
    color: #1890ff;
  }
</style>
