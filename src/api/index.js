// 获取modules所有请求
const modulesFiles = require.context('./modules', false, /\.js$/);
const apis = {};

modulesFiles.keys().forEach((key) => {
  const fileName = key.replace(/(\.js|\.\/)/g, '');
  apis[fileName] = modulesFiles(key);
});

export default {
  ...apis,
};
