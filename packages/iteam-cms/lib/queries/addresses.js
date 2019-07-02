module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('address')

    return content.map(item => item.fields)
  } catch (e) {
    throw new Error(e)
  }
}
