module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('annons')

    return content.map(item =>
      Object.assign({}, item.fields, {
        id: item.fields.urlId,
        headerImage: item.fields.headerImage.fields.file.url,
        contentImage:
          item.fields.contentImage && item.fields.contentImage.fields.file.url,
      })
    )
  } catch (error) {
    throw new Error(error)
  }
}
