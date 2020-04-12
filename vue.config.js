module.exports = {
  publicPath: './',
  devServer: {
    // proxy: 'http://127.0.0.1：8001'
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    // webpack配置
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/variables.scss";'
      }
    }
  }
}
