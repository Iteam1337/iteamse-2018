const resolver = require('../pageStart')

describe('queries/pageStart', () => {
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
            id: '6laFmSMRsA2cScW8wmEkO0',
            type: 'Entry',
            createdAt: '2017-05-22T11:37:23.279Z',
            updatedAt: '2018-07-03T11:25:25.612Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 16,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageStart',
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
                id: '6WZT7iYMZGkuEUIc4S0KgK',
                type: 'Asset',
                createdAt: '2018-03-23T21:32:57.717Z',
                updatedAt: '2018-04-13T13:18:10.950Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 4,
                locale: 'sv-SE',
              },
              fields: {
                title: 'Startbild',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/6WZT7iYMZGkuEUIc4S0KgK/a7bd9adbf261421465fa03ef7a49a065/Mikael-Nisse-Mimmi-Highres.jpg',
                  details: {
                    size: 322240,
                    image: {
                      width: 1920,
                      height: 1216,
                    },
                  },
                  fileName: 'Mikael-Nisse-Mimmi-Highres.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerText1: 'Vi digitaliserar företag och organisationer',
            headerText2: 'genom strategi, kod och kultur',
            headerTextBgColor: '#FF3B5C',
            codeMobileImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '2mxfqVCqiw4CQYguMSYwYU',
                type: 'Asset',
                createdAt: '2018-04-13T07:56:48.375Z',
                updatedAt: '2018-04-13T14:47:19.209Z',
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
                title: 'dator',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/2mxfqVCqiw4CQYguMSYwYU/7da84bff9b325ddb8ce9fd7e1f90e78e/Mac-Medium.png',
                  details: {
                    size: 32022,
                    image: {
                      width: 283,
                      height: 402,
                    },
                  },
                  fileName: 'Mac-Medium.png',
                  contentType: 'image/png',
                },
              },
            },
            codeTitle: 'Kod',
            codeText:
              'Systemutveckling, automatisering, artificiell intelligens, maskininlärning. Vi har alla redskap du behöver för att bygga vad du vill. Det du vill. Och vet du inte vad du behöver så hjälper vi dig med det med.',
            codeLogo: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '3qnZSfySW4cEGoUo6KCAae',
                type: 'Asset',
                createdAt: '2018-04-13T07:57:29.177Z',
                updatedAt: '2018-04-13T13:23:06.216Z',
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
                title: 'logo af',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/3qnZSfySW4cEGoUo6KCAae/dd66159c0de05dca84b18e497efd831d/AF_ordbild_bla__.png',
                  details: {
                    size: 49074,
                    image: {
                      width: 3074,
                      height: 428,
                    },
                  },
                  fileName: 'AF_ordbild_blå.png',
                  contentType: 'image/png',
                },
              },
            },
            codeSlug: 'arbetsformedlingen',
            codeLinkText: 'Läs om hur vi hjälper Arbetsförmedlingen med kod',
            strategyMobileImage: {
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
            strategyTitle: 'Strategi',
            strategyText:
              'Vi digitaliserar Sverige. Pompigt! Men det betyder att vi hjälper dig att leda digitaliseringen istället för att vara den som blir lämnad på efterkälken. Både på den marknad där du verkar, och de marknader du inte ens visste att du borde verka på.',
            strategyLogo: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '1mv5fxBGLmeyWom4OI2WsI',
                type: 'Asset',
                createdAt: '2018-04-13T07:58:20.251Z',
                updatedAt: '2018-04-13T13:27:25.752Z',
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
                title: 'logo tsab',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/1mv5fxBGLmeyWom4OI2WsI/fe6d2c6d19544cff23b033cba5ce221a/logo-footer_2x.png',
                  details: {
                    size: 13273,
                    image: {
                      width: 233,
                      height: 149,
                    },
                  },
                  fileName: 'logo-footer@2x.png',
                  contentType: 'image/png',
                },
              },
            },
            strategySlug: 'tsab',
            strategyLinkText:
              'Läs om hur vi hjälper Taxi Stockholm med strategi',
            cultureMobileImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '2y9WBlATsssIcSQmuQ6Ky8',
                type: 'Asset',
                createdAt: '2018-04-13T07:58:41.764Z',
                updatedAt: '2018-04-13T14:40:01.007Z',
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
                title: 'chat',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/2y9WBlATsssIcSQmuQ6Ky8/03ba2f2c9cfcd6a67ffd112c8b703759/Video-Call-Large.png',
                  details: {
                    size: 58386,
                    image: {
                      width: 754,
                      height: 925,
                    },
                  },
                  fileName: 'Video-Call-Large.png',
                  contentType: 'image/png',
                },
              },
            },
            cultureTitle: 'Kultur',
            cultureText:
              'Ibland ser vi oss som kulturarbetare. Det räcker inte att bygga digitala tjänster åt sina användare. Det är först när hela din organisation tänker, andas och lever digitalt som ni digitaliseras. på riktigt. Vi rustar dig för framtiden helt enkelt.',
            cultureLogo: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '4D844WR1v20ICIOG4SK0y8',
                type: 'Asset',
                createdAt: '2018-04-13T07:59:18.337Z',
                updatedAt: '2018-04-13T13:28:59.611Z',
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
                title: 'logo seb',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/4D844WR1v20ICIOG4SK0y8/717c7385b8c47355f25183f4b7efca5d/SEB_2.png',
                  details: {
                    size: 808216,
                    image: {
                      width: 1725,
                      height: 1725,
                    },
                  },
                  fileName: 'SEB_2.png',
                  contentType: 'image/png',
                },
              },
            },
            cultureSlug: 'seb',
            cultureLinkText: 'Läs om hur vi hjälper SEB med kultur',
            team: ['hrn', 'met', 'mrs', 'jmn'],
            contactTitle: 'Hör av dig till oss!',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageStart')
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
