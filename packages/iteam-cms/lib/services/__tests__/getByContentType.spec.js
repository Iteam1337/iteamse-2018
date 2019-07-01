const getByContentType = require('../getByContentType')

describe('#getByContentType', () => {
  let client

  beforeEach(() => {
    client = {
      getEntries: jest.fn().mockResolvedValue({
        items: 'items',
      }),
    }
  })

  it('should call client with default options', () => {
    getByContentType(client)('pageWork')

    expect(client.getEntries).toHaveBeenCalledWith({
      content_type: 'pageWork',
    })
  })

  it('should call client with additional options', () => {
    getByContentType(client)('pageWork', {
      'fields.id': 'test',
    })

    expect(client.getEntries).toHaveBeenCalledWith({
      content_type: 'pageWork',
      'fields.id': 'test',
    })
  })

  it('should return items', async () => {
    const result = await getByContentType(client)('pageWork', {
      'fields.id': 'test',
    })

    expect(result).toEqual('items')
  })
})
