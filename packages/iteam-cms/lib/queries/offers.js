module.exports = async (_, {}, { getByContentType }) => {
  try {
    const content = await getByContentType('offer')

    return content.map(item =>
      Object.assign({}, item.fields, {
        offerIntroImage:
          item.fields.offerIntroImage &&
          item.fields.offerIntroImage.fields.file.url,
        offerIllustrationImage:
          item.fields.offerIllustrationImage &&
          item.fields.offerIllustrationImage.fields.file.url,
        offerOrder: item.fields.offerOrder,
        offerUspOneText: item.fields.offerOneUspText,
        offerUspTwoText: item.fields.offerTwoUspText,
        offerUspThreeText: item.fields.offerThreeUspText,
        offerUspFourText: item.fields.offerFourUspText,
      })
    )
  } catch (error) {
    throw new Error(error)
  }
}
