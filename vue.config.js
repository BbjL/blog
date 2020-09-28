const path = require('path');//引入path模块

module.exports = {
  publicPath: './', // 基本路径
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        'src': '@',
        'src/components': '@c',
        'src/views': '@/v'
      }
    }
  },
  chainWebpack: config => {   // eslint 自动补齐
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options =>{
        options.fix = true;
        return options
      })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项 配置全局变量
    // loaderOptions: {
    //   sass: {
    //     data: "@/styles/variable.scss"
    //   }
    // },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false,
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
      favicon32     : 'favicon.ico',
      favicon16     : 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon      : 'favicon.ico',
      msTileImage   : 'favicon.ico'
    }
  }
  // webpack-dev-server 相关配置
  // devServer: {
  //   // open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   // proxy: null, // 设置代理
  //   // before: app => {}
  // },
  // 第三方插件配置
  // pluginOptions: {
  //   // ...
  // },
};
