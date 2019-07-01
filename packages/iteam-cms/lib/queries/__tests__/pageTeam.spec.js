const resolver = require('../pageTeam')

describe('queries/pageTeam', () => {
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
            id: '3ilWR9mo0gqQUIqWIsiAqQ',
            type: 'Entry',
            createdAt: '2018-03-23T21:46:51.598Z',
            updatedAt: '2018-03-24T05:58:53.768Z',
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageTheTeam',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            headerImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '4l7Q40idLOOI6MCscS8o2C',
                type: 'Asset',
                createdAt: '2018-03-23T21:46:45.911Z',
                updatedAt: '2018-03-23T21:46:45.911Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'team',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/4l7Q40idLOOI6MCscS8o2C/d95c6f40226fd707eb692fdd806acdef/team.jpg',
                  details: {
                    size: 1054541,
                    image: {
                      width: 1399,
                      height: 695,
                    },
                  },
                  fileName: 'team.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerText1: 'Det är vi som är Iteam',
            headerTextBgColor: '#668CFF',
            contactTitle: 'Hör av dig till oss!',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageTheTeam')
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
