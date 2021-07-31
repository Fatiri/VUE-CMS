const path = require("path");

module.exports = {
  lintOnSave: false,
  productionSourceMap: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/styles/global.scss")],
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('box-'),
        }
        return options
      })
  }
};
