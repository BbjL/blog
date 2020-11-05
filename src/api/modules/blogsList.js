import requrest from '../../utils/request';

export function findBlogs({ title, date, tags }) {
  return requrest({
    url: '/findBlog',
    type: 'post',
    data: {
      title,
      date,
      tags,
    },
  });
}
