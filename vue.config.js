module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/css/main.less` 这个文件
        data: `@import "~@/css/main.less";`,
        localIdentName: "[name]-[hash]",
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    config.module.rules.push({
      // 处理jquery
      test: /\.md$/,
      use: [
        {
          loader: "vue-loader"
        },
        {
          loader: require.resolve("./src/common/markdownLoader")
        }
      ],
    },
    );
  }
};
