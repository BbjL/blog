<template>
  <div class="guestbook-wrap">
    <!-- 显示留言数 -->
    <div class="comments-top">
      <span v-if="comments.length === 0">暂无留言</span>
      <span v-else>
        <span style="margin: 0 1px">{{ comments.length }}</span>
        条留言
      </span>
    </div>
    <!-- 浏览编辑框 -->
    <div class="comments-content">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
      >
        <a-comment>
          <!-- 头像 -->
          <a-avatar
            class="hide-avatar"
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          <div slot="content">
            <!-- 发送者信息 -->
            <a-row
              style="margin-bottom: 15px"
              class="userInfo"
              type="flex"
              justify="space-between"
              align="top"
            >
              <a-col class="info-input-wrapper" :lg="10" :xs="24">
                <a-form-model-item prop="userName">
                  <a-input
                    v-model="form.userName"
                    placeholder="用户名"
                    allowClear
                  >
                    <a-icon slot="addonBefore" type="user"/>
                  </a-input>
                </a-form-model-item>
              </a-col>
              <a-col class="info-input-wrapper" :lg="10" :xs="24">
                <a-form-model-item prop="email">
                  <a-input v-model="form.email" placeholder="链接" allowClear>
                    <a-icon slot="addonBefore" type="link"/>
                  </a-input>
                </a-form-model-item>
              </a-col>
            </a-row>
            <!-- 编辑区内容 -->
            <a-form-model-item class="edit-content">
              <editor
                v-model="form.editingContent"
                ref="editor"
                height="150px"
                :options="editorConfig"
                previewStyle="tab"
              />
            </a-form-model-item>
            <!-- 提交盒子-->
            <div class="editor-submit">
              <a-button
                html-type="submit"
                :loading="submitting"
                type="primary"
                @click="handleSubmit"
              >
                发表留言
              </a-button>
            </div>
          </div>
        </a-comment>
      </a-form-model>
      <ul v-if="comments.length" @click="addReply">
        <li v-for="(item, index) in comments" :key="index">
          <commentItem :comment="item"/>
        </li>
      </ul>
      <!-- get more data -->
      <button class="next-btn">查看更多</button>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import commentItem from './components/commentItem.vue';

export default {
  components: { commentItem },
  data() {
    return {
      moment, // necessary component
      form: {
        userName: '', // send
        email: '', // email
        editingContent: '',
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户ID',
          },
          {
            max: 8,
            message: 'ID请别超过8个字',
          },
        ],
      },

      comments: [], // all comment
      submitting: false, // button loading

      editorConfig: {
        hideModeSwitch: true,
        usageStatistics: false,
        language: 'zh-CN',
        placeholder: '输入内容',
        previewHighlight: false,
        toolbarItems: [
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'divider',
          // 'image',
          'table',
          'link',
          'divider',
          'code',
          'codeblock',
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      let validate = false;
      // 输入内容为空或者用户id为空
      this.form.editorContent = this.$refs.editor.invoke('getHtml');
      this.$refs.ruleForm.validate((valid) => {
        // eslint-disable-next-line
        valid ? validate = true : validate = false;
      });

      if (!validate || this.form.editorContent === '') {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: this.form.userName,
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.form.editorContent,
            datetime: moment()
              .fromNow(),
          },
          ...this.comments,
        ];
        this.form.editorContent = '';
        this.$refs.editor.invoke('setHtml', '');
      }, 1000);
    },
    // 事件代理
    addReply(e) {
      const event = e || window.event;
      let { target } = event;
      const { currentTarget } = event;

      while (target !== currentTarget) { // 遍历查找父节点
        // 判断是否是目标子元素
        if (target.matches('.reply')) {
          // foo.call(target, Array.prototype.slice.call(arguments));
          const name = `回复${target.dataset.author}:<br/>`;
          // 添加恢复人到文本框
          this.$refs.editor.invoke('setHtml', name);
          return;
        }
        target = target.parentNode;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .guestbook-wrap {
    margin: 30px auto 0;
    width: 1012px;
    @media (max-width: 1212px) {
      width: 912px;
    }
    @media (max-width: 1012px) {
      width: 668px;
    }
    @media (max-width: 768px) {
      @include padding-lr(20px);
      width: 100%;
    }

    .comments-top {
      margin-bottom: 30px;
      font-size: 16px;
      font-weight: 600;
    }

    .comments-content {
      min-height: 85vh;
      @include padding-lr(20px);
      border-bottom: 1px double transparent;
      background-color: $theme;
    }
  }

  .editor-submit {
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid rgb(229, 229, 229);
    border-top-color: transparent;
  }

</style>

<style scoped>
  .ant-form-item {
    margin-bottom: 0;
  }
</style>
