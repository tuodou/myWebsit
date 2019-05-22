module.exports = {
  css: {
    loaderOptions: {
      postcss: {}
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.97.118.178:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: true
}
