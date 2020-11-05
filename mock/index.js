import Mock from 'mockjs';
/*
directory {String} -读取文件的路径

useSubdirectories {Boolean} -是否遍历文件的子目录

regExp {RegExp} -匹配文件的正则

*/
const moduleFiles = require.context('./modules', false, /\.js$/);

const mocks = [];

moduleFiles.keys()
  .forEach((key) => {
    mocks.push(...moduleFiles(key));
  });

mocks.forEach((item) => {
  Mock.mock(item.url, item.type, item.response);
});
