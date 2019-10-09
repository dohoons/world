const path = require('path')
const { addWebpackAlias, addBundleVisualizer, override } = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra')

module.exports = override(
  rewireReactHotLoader(),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
    '~': path.resolve(__dirname, './src')
  }),
  addBundleVisualizer({
    analyzerMode: 'static',
    reportFilename: 'report.html'
  }, true),
)