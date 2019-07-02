const resolver = require('../team')

describe('queries/team', () => {
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
            id: '6FvzqbEEcE2IoAyiGAU4gE',
            type: 'Entry',
            createdAt: '2017-06-28T11:59:14.423Z',
            updatedAt: '2017-08-31T09:03:32.232Z',
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'teamMembers',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            name: 'Johanna Månsson Grahn',
            title: 'Samarbete & rekrytering',
            short: 'jmn',
            avatar: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '64biXO1wJ2MA6wqQqWsI4o',
                type: 'Asset',
                createdAt: '2017-08-31T09:03:16.638Z',
                updatedAt: '2017-08-31T09:03:16.638Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'jmn',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/64biXO1wJ2MA6wqQqWsI4o/2e3876889e13a9a1750c789b2b1e2a07/jmn.jpg',
                  details: {
                    size: 16518,
                    image: {
                      width: 225,
                      height: 225,
                    },
                  },
                  fileName: 'jmn.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            location: 'Göteborg',
            email: 'johanna.grahn@iteam.se',
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
            id: '4tyjybv5Yke2MskskygOa0',
            type: 'Entry',
            createdAt: '2017-06-28T11:57:40.999Z',
            updatedAt: '2017-08-31T09:02:00.223Z',
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'teamMembers',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            name: 'Hans Rollman',
            title: 'Samarbete',
            short: 'hrn',
            avatar: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '2uQtyFGphOCg4U6e2mm2oY',
                type: 'Asset',
                createdAt: '2017-08-31T09:01:43.832Z',
                updatedAt: '2017-08-31T09:01:43.832Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'hrn',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/2uQtyFGphOCg4U6e2mm2oY/c433294b7e3f0dfe9becd87c1c9907d3/hrn.jpg',
                  details: {
                    size: 14435,
                    image: {
                      width: 225,
                      height: 225,
                    },
                  },
                  fileName: 'hrn.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            location: 'Stockholm',
            email: 'hans.rollman@iteam.se',
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
            id: '2eap07OhAYIaU00kEMaSqs',
            type: 'Entry',
            createdAt: '2018-03-23T10:40:35.562Z',
            updatedAt: '2018-03-24T07:37:49.839Z',
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'teamMembers',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            name: 'Rickard Laurin',
            title: 'Webbutvecklare',
            short: 'rln',
            location: 'Stockholm',
            email: 'rickard.laurin@iteam.se',
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
            id: '6xrssgiXu0amGy4Qao22YS',
            type: 'Entry',
            createdAt: '2017-06-28T11:58:24.556Z',
            updatedAt: '2018-03-24T07:37:58.893Z',
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'teamMembers',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            name: 'Maria Sölscher',
            title: 'Rekrytering',
            short: 'msr',
            location: 'Stockholm',
            email: 'maria.solscher@iteam.se',
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
            id: '5jm03jKTNSAoCwyAI6q6eA',
            type: 'Entry',
            createdAt: '2017-06-28T12:00:17.501Z',
            updatedAt: '2018-03-24T07:37:40.913Z',
            revision: 4,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'teamMembers',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            name: 'Mats Egardt',
            title: 'Drift & support',
            short: 'met',
            location: 'Stockholm',
            email: 'mats.egardt@iteam.se',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('teamMembers')
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
