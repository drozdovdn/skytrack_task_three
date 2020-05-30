const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  devServer: {
    port: 4000,
    overlay: true,
    hot: true
  }
};