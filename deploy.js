const ghpages = require('gh-pages')

ghpages.publish('build', function() {
  console.log('deploy complete')
})