module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('pageStart2019')

    return content[0].fields
  } catch (error) {
    throw new Error(error)
  }
}
