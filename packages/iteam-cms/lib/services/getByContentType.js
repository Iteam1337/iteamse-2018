function getByContentType (client) {
  return async function (content_type, options = {}) {
    const content = await client.getEntries(
      Object.assign(
        {},
        {
          content_type,
        },
        options
      )
    )

    return content.items
  }
}

module.exports = getByContentType
