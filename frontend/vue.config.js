// vue.config.js
module.exports = {
    // ...
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: process.env.VUE_APP_PORT,
      https: false,
      hotOnly: false,
    },
    // ...
  }