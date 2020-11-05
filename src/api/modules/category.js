import requrest from '../../utils/request';

export function getCateList() {
  return requrest({
    url: '/category/list',
  });
}

export function getBlogsInfo(pageNum, pageSize, category) {
  return requrest({
    url: '/category/blog_info',
    type: 'post',
    data: {
      pageNum,
      pageSize,
      category,
    },
  });
}
