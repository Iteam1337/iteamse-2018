const { teamMemberInformation } = require('../services/teamMemberInformation')

module.exports = async (_, { shortName }, { getByContentType }) => {
  try {
    const content = await getByContentType('teamMembers', {
      'fields.short[in]': shortName.join(','),
    })

    return teamMemberInformation(content)
  } catch (error) {
    throw new Error(error)
  }
}
