const Mock = require('mockjs');

const { Random } = Mock;

// 根据日期获取博客列表
const fingBlogByDate = {
  url: '/findBlog',
  type: 'post',
  response: (options) => {
    const body = JSON.parse(options.body);
    const { title, date, tags } = body;

    const cateArr = ['全部分类', 'JavaScript', 'NodeJS', 'CSS', '实用工具', '未分类'];
    const iconList = ['icon-category2-fill', 'icon-js1', 'icon-js', 'icon-css', 'icon-tools', 'icon-category2'];
    let icon = '';
    let cate = '';

    const data = {
      blogsList: [],
    };

    // 按标题搜索
    if (title !== undefined) {
      const len = Random.natural(0, 2);

      for (let i = 0; i < len; i += 1) {
        const randomNum = Random.natural(1, 5);
        icon = iconList[randomNum];
        cate = cateArr[randomNum];

        data.blogsList.push({
          id: Random.id(),
          title,
          date: Random.date('2020/M/d'),
          category: cate,
          icon,
          link: Random.domain(),
          url: '',
          pViewCount: Random.natural(1000, 10000),
          commentsCount: Random.natural(10, 20),
        });
      }

      return {
        status: 200,
        msg: 'ok',
        data,
      };
    }

    if (date !== undefined) {
      const len = Random.natural(0, 2);

      for (let i = 0; i < len; i += 1) {
        const randomNum = Random.natural(1, 5);
        icon = iconList[randomNum];
        cate = cateArr[randomNum];

        data.blogsList.push({
          id: Random.id(),
          title: Random.ctitle(10, 15),
          date,
          category: cate,
          icon,
          link: Random.domain(),
          url: '',
          pViewCount: Random.natural(1000, 10000),
          commentsCount: Random.natural(10, 20),
        });
      }

      return {
        status: 200,
        msg: 'ok',
        data,
      };
    }

    if (tags !== undefined) {
      return {
        status: 200,
        msg: 'ok',
        data,
      };
    }
  },
};

module.exports = [
  fingBlogByDate,
];
