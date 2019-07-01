const md5 = require('md5')

function gravatar (email) {
  return `https://www.gravatar.com/avatar/${md5(email)}?s=300`
}

module.exports = gravatar
