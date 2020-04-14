module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
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
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
      scss: {
        prependData: '@import "~@/assets/variables.scss";'
      }
    }
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      cacheId: 'dodo-vue',
      cleanupOutdatedCaches: true,
      clientsClaim: true, // 激活后，立即控制客户端
      chunks: [],
      ignoreURLParametersMatching: [], // 忽略的请求参数清单
      skipWaiting: false,
      runtimeCaching: [
        {
          urlPattern: /.*$/,
          handler: 'staleWhileRevalidate', // 策略：cacheFirst, cacheOnly, networkFirst, networkOnly, staleWhileRevalidate
          options: {
            // 网络超时时间，networkFirst时使用
            // networkTimeoutSeconds: 10,
            // Use a custom cache name for this route.
            cacheName: 'dodo-cache',
            // Configure custom cache expiration.
            expiration: {
              maxEntries: 50000, // 缓存请求数
              maxAgeSeconds: 60 * 60 * 2 // 缓存时间（秒）
            },
            // Configure background sync. 后台重试
            backgroundSync: {
              name: 'dodo-queue',
              options: {
                maxRetentionTime: 30 // 一分钟内尝试请求次数
              }
            },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [0, 200]
            },
            // Configure the broadcast cache update plugin.
            // broadcastUpdate: {
            //   channelName: 'my-update-channel',
            // },
            // Add in any additional plugin logic you need.
            plugins: [
              // {cacheDidUpdate: () => /* custom plugin code */}
            ],
            // matchOptions and fetchOptions are used to configure the handler.
            fetchOptions: {
              // mode: 'no-cors',
            },
            matchOptions: {
              ignoreSearch: true
            }
          }
        }
      ]
    },
    themeColor: '#4DBA77',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    assetsVersion: '1.0',
    manifestPath: 'manifest.json',
    manifestOptions: {
      display: 'standalone'
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  }
}
