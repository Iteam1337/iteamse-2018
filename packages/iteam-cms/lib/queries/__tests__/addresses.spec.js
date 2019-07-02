const resolver = require('../addresses')

describe('queries/addresses', () => {
  let context

  beforeEach(() => {
    context = {
      getByContentType: jest.fn().mockResolvedValue([
        {
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: 'rj4r6yfcesw5',
              },
            },
            id: '5SvbYg611YsgIWgyW6IOkU',
            type: 'Entry',
            createdAt: '2018-02-23T14:52:43.590Z',
            updatedAt: '2018-03-23T13:33:45.040Z',
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'address',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            title: 'Iteam Göteborg',
            address1: 'Haga Kyrkogata 28',
            zip: '411 23',
            city: 'Göteborg',
            contactPhone: '+46 734 029 112',
            contactMail: 'johanna.grahn@iteam.se',
            orgNumber: '556551-6928',
          },
        },
        {
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: 'rj4r6yfcesw5',
              },
            },
            id: '3715HjiJcQsW6wKUoAQQA4',
            type: 'Entry',
            createdAt: '2018-03-23T13:33:36.346Z',
            updatedAt: '2018-03-23T13:33:36.346Z',
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'address',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            title: 'Iteam Stockholm',
            address1: 'Östermalmsgatan 26A',
            zip: '114 26',
            city: 'Stockholm',
            contactPhone: '+46 826 70 90',
            contactMail: 'info@iteam.se',
            orgNumber: '556551-6928',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('address')
    } catch (error) {
      throw new Error(error)
    }
  })

  it('should return all fields', async () => {
    await expect(resolver(null, {}, context)).resolves.toMatchSnapshot()
  })

  it('should handle errors', async () => {
    expect.hasAssertions()
    context.getByContentType.mockRejectedValue('err')

    await expect(resolver(null, {}, context)).rejects.toThrowError('err')
  })
})
