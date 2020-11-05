const path = require('path');// 引入path模块
// var ImageminPlugin = require('imagemin-webpack-plugin').default 图片压缩

module.exports = {
  // 基本路径
  publicPath: './',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  configureWebpack: {
    resolve: {
      alias: {
        'src': '@',
        'src/components': '@c',
        'src/views': '@v',
      },
    },
  },

  chainWebpack: (config) => { // eslint 自动补齐
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = true;
        return options;
      })
      .end();

    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // resources: './src/styles/_variable.scss',

          // Or array of paths
          resources: [
            './src/styles/mixins.scss',
            './src/styles/common.scss',
            './src/styles/themes/light.scss',
          ],
        })
        .end();
    });
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        } 
      }
    },
    // requireModuleExtension: true,
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
    name: 'Blog',
    manifestOptions: {
      background_color: '#DB6C6C',
    },
  },

  // webpack-dev-server 相关配置
  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    hot: true,
    // proxy: null, // 设置代理
    // before: app => {}
    // eslint 报错展示在浏览器
    // overlay: {
    //   warnings: true,
    //   errors: true,
    // },
  },

  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [],
    },
  },
};
