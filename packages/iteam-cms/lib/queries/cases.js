module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('cases')

    return content.map(item =>
      Object.assign({}, item.fields, {
        thumbnailImage:
          item.fields.thumbnailImage &&
          item.fields.thumbnailImage.fields.file.url,
        casePageImage:
          item.fields.casePageImage &&
          item.fields.casePageImage.fields.file.url,
        logo: item.fields.logo.fields.file.url,
      })
    )
  } catch (error) {
    throw new Error(error)
  }
}
