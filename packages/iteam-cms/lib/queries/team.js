const { teamMemberInformation } = require('../services/teamMemberInformation')

module.exports = async (_, { limit }, { getByContentType }) => {
  try {
    const content = await getByContentType('teamMembers')

    return teamMemberInformation(content)
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, limit)
  } catch (error) {
    throw new Error(error)
  }
}
