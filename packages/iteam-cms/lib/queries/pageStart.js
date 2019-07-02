module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('pageStart')

    return content.map(item =>
      Object.assign({}, item.fields, {
        headerImage: item.fields.headerImage.fields.file.url,
        codeMobileImage:
          item.fields.codeMobileImage &&
          item.fields.codeMobileImage.fields.file.url,
        codeLogo: item.fields.codeLogo && item.fields.codeLogo.fields.file.url,
        cultureMobileImage:
          item.fields.cultureMobileImage &&
          item.fields.cultureMobileImage.fields.file.url,
        cultureLogo:
          item.fields.cultureLogo && item.fields.cultureLogo.fields.file.url,
        strategyMobileImage:
          item.fields.strategyMobileImage &&
          item.fields.strategyMobileImage.fields.file.url,
        strategyLogo:
          item.fields.strategyLogo && item.fields.strategyLogo.fields.file.url,
      })
    )[0]
  } catch (error) {
    throw new Error(error)
  }
}
