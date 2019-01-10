const path = require('path')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireAliases = require('react-app-rewire-aliases')

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  config = rewireAliases.aliasesOptions({
      '~': path.resolve(__dirname, './src')
  })(config, env)
  
  return config
}