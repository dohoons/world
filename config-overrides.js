const path = require('path')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireAliases = require('react-app-rewire-aliases')
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  config = rewireAliases.aliasesOptions({
    'react-dom': '@hot-loader/react-dom',
    '~': path.resolve(__dirname, './src')
  })(config, env)
  
  if(process.env.npm_lifecycle_event === 'build:stats') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    })
  }
  
  return config
}