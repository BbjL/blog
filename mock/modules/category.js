// modules/categorry.js
const Mock = require('mockjs');

const { Random } = Mock;

const allCategory = {
  url: '/category/list',
  type: 'get',
  response: () => {
    const data = [];
    const cateArr = ['全部分类', 'JavaScript', 'NodeJS', 'CSS', '实用工具', '未分类'];
    const iconList = ['icon-category2-fill', 'icon-js1', 'icon-js', 'icon-css', 'icon-tools', 'icon-category2'];
    const pathList = ['all', 'js', 'nodejs', 'css', 'tools', 'unclassfied'];

    for (let i = 0, len = cateArr.length; i < len; i += 1) {
      data.push({
        id: i,
        cateName: cateArr[i],
        cateIcon: iconList[i],
        param: pathList[i],
      });
    }
    return {
      status: 200,
      data,
    };
  },
};

const blogsInfo = {
  url: '/category/blog_info',
  type: 'post',
  response: (options) => {
    const data = {
      blogsList: [],
      more: true,
    };
    const cateArr = ['全部分类', 'JavaScript', 'NodeJS', 'CSS', '实用工具', '未分类'];
    const pathList = ['all', 'js', 'nodejs', 'css', 'tools', 'unclassfied'];
    const iconList = ['icon-category2-fill', 'icon-js1', 'icon-js', 'icon-css', 'icon-tools', 'icon-category2'];
    let icon = '';
    let localCate = '';

    const body = JSON.parse(options.body);
    const { pageNum, pageSize, category } = body;
    console.log(body);

    const listIndex = pathList.findIndex((item) => item === category);
    icon = iconList[listIndex];
    localCate = cateArr[listIndex];

    // 制造一个空数据
    if (localCate === cateArr[4]) {
      data.more = false;
      return {
        status: 200,
        msg: 'no data',
        data,
      };
    }

    for (let i = 0; i < pageSize; i += 1) {
      const randomNum = Math.ceil(Math.random() * 5);

      if (!category || category === 'all') {
        localCate = cateArr[randomNum];
        icon = iconList[randomNum];
      }

      data.more = Random.boolean(7, 3, true);
      data.blogsList.push({
        pageNum,
        pageSize,
        total: Random.natural(10, 100),
        id: Random.id(),
        title: Random.ctitle(10, 15),
        date: Random.date('2020/M/d'),
        category: localCate,
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
  },
};

const blogContent = {};

module.exports = [
  allCategory,
  blogsInfo,
];
