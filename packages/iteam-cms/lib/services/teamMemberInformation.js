const gravatar = require('../utils/gravatar')

const teamMemberInformation = content => {
  return content.map(item =>
    Object.assign({}, item.fields, {
      avatar: item.fields.avatar
        ? item.fields.avatar.fields.file.url
        : gravatar(item.fields.email),
      headerImage:
        item.fields.headerImage && item.fields.headerImage.fields.file.url,
    })
  )
}

module.exports = { teamMemberInformation }
