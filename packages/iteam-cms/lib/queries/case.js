module.exports = async (_, { slug }, { getByContentType }) => {
  try {
    const content = await getByContentType('cases', {
      'fields.slug': slug,
    })

    return content.map(item =>
      Object.assign({}, item.fields, {
        thumbnailImage:
          item.fields.thumbnailImage &&
          item.fields.thumbnailImage.fields.file.url,
        casePageImage:
          item.fields.casePageImage &&
          item.fields.casePageImage.fields.file.url,
        casePageBackgroundImage:
          item.fields.casePageBackgroundImage &&
          item.fields.casePageBackgroundImage.fields.file.url,
        logo: item.fields.logo.fields.file.url,
      })
    )[0]
  } catch (error) {
    throw new Error(error)
  }
}
