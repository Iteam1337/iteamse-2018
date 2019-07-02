module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('pageAbout')

    return content.map(item =>
      Object.assign({}, item.fields, {
        headerImage: item.fields.headerImage.fields.file.url,
        imageBleed: item.fields.imageBleed.fields.file.url,
        stabilityIcons: item.fields.stabilityIcons.map(
          icon => icon.fields.file.url
        ),
      })
    )[0]
  } catch (error) {
    throw new Error(error)
  }
}
