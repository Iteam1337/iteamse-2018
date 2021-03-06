module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('pageOffers')

    return content.map(item =>
      Object.assign({}, item.fields, {
        headerImage: item.fields.headerImage.fields.file.url,
      })
    )[0]
  } catch (error) {
    throw new Error(error)
  }
}
