module.exports = async (_, { id }, { getByContentType }) => {
  try {
    const content = await getByContentType('annons', {
      'fields.urlId': id,
    })

    return content.map(item =>
      Object.assign({}, item.fields, {
        id: item.fields.urlId,
        headerImage: item.fields.headerImage.fields.file.url,
        contentImage:
          item.fields.contentImage && item.fields.contentImage.fields.file.url,
      })
    )[0]
  } catch (error) {
    throw new Error(error)
  }
}
