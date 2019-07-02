const resolver = require('../offers')

describe('queries/offers', () => {
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
            id: '2quIHDu7du0S8ayS8mQgOo',
            type: 'Entry',
            createdAt: '2018-11-13T10:14:41.320Z',
            updatedAt: '2018-11-13T10:14:41.320Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'offer',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            offerIntroImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '1oqMfeZBnuQAAGweIGCKEW',
                type: 'Asset',
                createdAt: '2018-04-13T07:57:52.421Z',
                updatedAt: '2018-04-13T14:45:26.383Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 3,
                locale: 'sv-SE',
              },
              fields: {
                title: 'Iteam-03-e',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/1oqMfeZBnuQAAGweIGCKEW/60143ba037ba021f0f1090f571207e8a/Laptop-Large.png',
                  details: {
                    size: 72037,
                    image: {
                      width: 546,
                      height: 665,
                    },
                  },
                  fileName: 'Laptop-Large.png',
                  contentType: 'image/png',
                },
              },
            },
            offerTitle: 'Strategi',
            offerOrder: 2,
            offerIntroText:
              'Vi digitaliserar Sverige. Pompigt! Men det betyder att vi hjälper dig att leda digitaliseringen istället för att vara den som blir lämnad på efterkälken. Både på den marknad där du verkar, och de marknader du inte ens visste att du borde verka på. ',
            offerLead:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis odio vel turpis pellentesque finibus.',
            offerUspOneTitle: 'Datadrivet beslutsfattande',
            offerOneUspText:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi.',
            offerUspTwoTitle: 'Koncept och business case',
            offerTwoUspText:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi.',
            offerUspThreeTitle: 'Förstudier',
            offerThreeUspText:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi.',
            offerUspFourTitle: 'Labb',
            offerFourUspText:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum.',
            offerIllustrationImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '6greZtlabmmQqsqoSE640m',
                type: 'Asset',
                createdAt: '2018-11-13T10:14:15.110Z',
                updatedAt: '2018-11-13T10:14:15.110Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'strategyIllustrationImage',
                description: 'Illustration strategi',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/6greZtlabmmQqsqoSE640m/2c0cf022b7b9f5c25f871905c6fe9a32/illustrations-group-1.png',
                  details: {
                    size: 65882,
                    image: {
                      width: 980,
                      height: 341,
                    },
                  },
                  fileName: 'illustrations-group-1.png',
                  contentType: 'image/png',
                },
              },
            },
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, variables, context)

      expect(context.getByContentType).toHaveBeenCalledWith('offer')
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
