const resolver = require('../pageHowWeWork')

describe('queries/pageHowWeWork', () => {
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
            id: '47T6dNHaneYeuoMYgm8E2a',
            type: 'Entry',
            createdAt: '2018-03-24T06:26:20.683Z',
            updatedAt: '2018-04-13T08:39:23.539Z',
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageHowWeWork',
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
            headerText1: 'Så här jobbar vi ',
            headerTextBgColor: '#668CFF',
            teamTitle: 'I team',
            teamText:
              'Vi jobbar alltid i team. Systemutvecklare, strateger, interaktionsdesigners, visuella designers och värdecoacher. Alla är vi värdefulla var och en för sig och ännu mer ihop. Vi jobbar alltid tillsammans. Alltid i tvärfunktionella team. Aldrig uthyrda. Aldrig ensamma.',
            methodTitle: 'Ständigt sökande',
            methodText:
              'Vi söker alltid efter den bästa processen. Den bästa metoden. Vi vågar ta risker, byta spår, byta teknik, experimentera och ifrågasätta både oss själva och våra kunder. Det är liksom det vi gör. Hela tiden.',
            imageBleed: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '62hgzE8G3ueMa2YSEuG4og',
                type: 'Asset',
                createdAt: '2018-03-24T10:34:41.850Z',
                updatedAt: '2018-03-24T10:34:41.850Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'bleed howwework',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/62hgzE8G3ueMa2YSEuG4og/db2b643db6041f9d26936bc2d6006607/bleed_howwework.jpg',
                  details: {
                    size: 862501,
                    image: {
                      width: 1399,
                      height: 598,
                    },
                  },
                  fileName: 'bleed_howwework.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            sharingTitle: 'Delar allt',
            sharingText:
              'På våra kodluncher lär vi av varandra. Vi mentorerar och vi labbar ihop. Vi anordnar Lounge Hack, bidrar till open source, till forumet kodapor tillsammans med 12000 andra utvecklare och deltar på konferenser. Vår kunskap är din kunskap.',
            customersTitle: 'Långa strömmar, inte korta projekt',
            customersText:
              'Våra kunder har alla stora möjligheter att göra skillnad på sina marknader. De är förbi datorisering och har redan lagt upp alla sina formulär på webben. Nu är de ute efter digitalisering. Och det tar tid. Därför har vi ofta långa relationer med våra kunder. Ofta blir vi vänner längs vägen.',
            hiringTitle: 'Just nu söker vi',
            openApplicationText: '[Spontanansök](mailto:joinus@iteam.se)',
            openApplicationHeader: 'Inget som passar?',
            contactTitle: 'Hör av dig till oss!',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageHowWeWork')
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
