const config = require('nconf-camel-cased')({
  file: {
    file: 'config.json',
    dir: '../',
  },
})

config.defaults = {
  contentful: {
    space: '',
    token: '',
  },
}

module.exports = {
  contentful: config.get('contentful'),
}
