const resolver = require('../pageAboutUs')

describe('queries/pageAboutUs', () => {
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
            id: '1dZoRcqtJiSGA6iE6sasOS',
            type: 'Entry',
            createdAt: '2017-07-10T10:31:03.079Z',
            updatedAt: '2018-04-13T08:34:55.952Z',
            revision: 10,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageAbout',
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
                id: 'j8ng4HkakgMCyIMqeek2A',
                type: 'Asset',
                createdAt: '2018-03-23T21:45:01.859Z',
                updatedAt: '2018-03-23T21:45:01.859Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'AboutUs',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/j8ng4HkakgMCyIMqeek2A/82be3a1d363b21dd29b081e76d0fdfeb/about.jpg',
                  details: {
                    size: 798343,
                    image: {
                      width: 1400,
                      height: 714,
                    },
                  },
                  fileName: 'about.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerText1: 'Vi skapades ur en vilja att skapa värde,',
            headerText2: 'ha kul och göra något bra',
            headerTextBgColor: '#54FBAC',
            valueTitle: 'Skapa värde',
            valueText:
              'Vi ger dig det du behöver. Även när du tror du behöver något annat. Det kan låta kaxigt men vi vet att många företag och organisationer ofta blandar ihop det som är bråttom med det som är viktigt. Vi hjälper dig att fokusera på det som är viktigt och som skapar värde för dig och dina kunder.',
            funTitle: 'Ha kul',
            funText:
              'Vi utvecklar din tjänst tillsammans med dig. Det blir mycket bättre så. Och roligare. För oss är det viktigt att ha kul. Därför väljer vi uppdrag med omsorg. Det blir liksom ett löfte till våra kunder: “Vi lovar att bara jobba med dig så länge vi tycker det är kul och brinner för det du gör”. Det lovar vi därför att då blir resultatet bättre.',
            goodTitle: 'Göra något bra',
            valueeText: 'Om oss',
            valueIteam:
              '- Grundades 1995\n- 300 kunder sedan start, 10 aktiva kunder\n- AAA enligt Soliditet tio år i rad\n- Utsett till Superföretag av Veckans Affärer\n- Kontor i Stockholm och Göteborg\n- 34 anställda\n- 10 aktiva kunder, 300 totalt\n- Tre av våra utvecklare på Techworlds lista\n- “Sveriges bästa utvecklare”\n- DI Gasellföretag - 2018\n- Våra värderingar: Skapa värde, Ha kul, Göra något bra\n\n\n',
            goodText:
              'Teknik ska vara tillgänglig för alla. Teknik ska göra gott. Därför väljer vi kunder där vi tror att vi kan göra något bra och där vi kan göra skillnad. Det betyder också att om vi jobbar ihop så tror vi 100% på din tjänst.',
            contactTitle: 'Hör av dig till oss!',
            imageBleed: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '7bwz7g2GuQu8A68QmCQAMw',
                type: 'Asset',
                createdAt: '2018-04-13T08:34:50.054Z',
                updatedAt: '2018-04-13T08:34:50.054Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'bleed aboutus',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/7bwz7g2GuQu8A68QmCQAMw/2c6391a40ebe2d0bee958dacf72aa174/bleed_aboutus.jpg',
                  details: {
                    size: 756328,
                    image: {
                      width: 1400,
                      height: 685,
                    },
                  },
                  fileName: 'bleed_aboutus.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            stabilityTitle: 'Vi står stabilt',
            stabilityText:
              'Löksås ipsum plats upprätthållande från sorgliga se, denna precis från brunsås strand år dock, stig färdväg genom äng varit. Erfarenheter regn groda tidigare trevnadens hwila ännu dimma kunde mjuka sällan, oss genom tidigare annat sista stora tid plats inom.\n ',
            stabilityIcons: [
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'rj4r6yfcesw5',
                    },
                  },
                  id: '2jLXgnJMdqcMIWgiYAEyq2',
                  type: 'Asset',
                  createdAt: '2018-04-13T08:24:28.408Z',
                  updatedAt: '2018-04-13T08:24:28.408Z',
                  revision: 1,
                  locale: 'sv-SE',
                },
                fields: {
                  title: 'aaa logo web ny',
                  file: {
                    url:
                      '//images.ctfassets.net/rj4r6yfcesw5/2jLXgnJMdqcMIWgiYAEyq2/d88293e3899d0e65ad99754aa45f5f85/aaa_logo_web_ny.png',
                    details: {
                      size: 5368,
                      image: {
                        width: 185,
                        height: 84,
                      },
                    },
                    fileName: 'aaa_logo_web_ny.png',
                    contentType: 'image/png',
                  },
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
                  id: '6tIo0BhFEki6Iyc68AkgiQ',
                  type: 'Asset',
                  createdAt: '2018-04-13T08:24:45.573Z',
                  updatedAt: '2018-04-13T08:24:45.573Z',
                  revision: 1,
                  locale: 'sv-SE',
                },
                fields: {
                  title: 'vas-superforetagen-2016. 300dppipng',
                  file: {
                    url:
                      '//images.ctfassets.net/rj4r6yfcesw5/6tIo0BhFEki6Iyc68AkgiQ/98253a689d719382d5d13f4896f10941/vas-superforetagen-2016._300dppipng.png',
                    details: {
                      size: 30787,
                      image: {
                        width: 145,
                        height: 145,
                      },
                    },
                    fileName: 'vas-superforetagen-2016._300dppipng.png',
                    contentType: 'image/png',
                  },
                },
              },
            ],
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageAbout')
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
