const resolver = require('../pageOffers')

describe('queries/pageOffers', () => {
  let context
  let variables

  beforeEach(() => {
    variables = {
      id: 'test',
    }

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
            id: '3p9vMmj7VK2icIeUS2WKW',
            type: 'Entry',
            createdAt: '2018-11-13T10:03:18.542Z',
            updatedAt: '2018-11-13T15:14:23.595Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 4,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageOffers',
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
                id: '45ST2zZeFqgYuaSuM8yKy0',
                type: 'Asset',
                createdAt: '2018-04-06T11:16:05.655Z',
                updatedAt: '2018-04-13T13:08:12.491Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 2,
                locale: 'sv-SE',
              },
              fields: {
                title: 'Maria-Desk-2-Highres',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/45ST2zZeFqgYuaSuM8yKy0/d7d62b50748a05f1f9f540198390077a/Maria-Desk-2-Highres.jpg',
                  details: {
                    size: 199469,
                    image: {
                      width: 1920,
                      height: 1005,
                    },
                  },
                  fileName: 'Maria-Desk-2-Highres.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerText1: 'Våra erbjudanden',
            headerTextBgColor: 'green',
            offersLeadText:
              'Kod, kultur och strategi är nödvändliga beståndsdelar för att skapa innovation. Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
            contactTitle: 'Vill du veta mer?',
            team: ['msr', 'jmn'],
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, variables, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageOffers')
    } catch (error) {
      throw new Error(error)
    }
  })

  it('should return all fields', async () => {
    await expect(resolver(null, variables, context)).resolves.toMatchSnapshot()
  })

  it('should handle errors', async () => {
    expect.hasAssertions()
    context.getByContentType.mockRejectedValue('err')

    await expect(resolver(null, variables, context)).rejects.toThrowError('err')
  })
})
