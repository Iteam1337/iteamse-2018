const { teamMemberInformation } = require('../services/teamMemberInformation')

module.exports = async (_, { shortName }, { getByContentType }) => {
  try {
    const content = await getByContentType('teamMembers', {
      'fields.short': shortName,
    })

    return teamMemberInformation(content)[0]
  } catch (error) {
    throw new Error(error)
  }
}
