module.exports = {
  chainWebpack: config => {
    // markdown Loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
        .loader('vue-loader')
        .end()
      .use('@vant/markdown-loader')
        .loader('@vant/markdown-loader')
        .end()

  }
}