const resolver = require('../pageWork')

describe('queries/pageWork', () => {
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
            id: '6mwA2k6DleEAmKEoa2W8sQ',
            type: 'Entry',
            createdAt: '2017-06-28T13:13:47.104Z',
            updatedAt: '2018-03-24T05:59:28.700Z',
            revision: 6,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageWorkWithUs',
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
                id: 'j9IXvqaJ32Uc0SWQeUQsi',
                type: 'Asset',
                createdAt: '2018-03-23T21:46:09.829Z',
                updatedAt: '2018-03-23T21:46:09.829Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'work',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/j9IXvqaJ32Uc0SWQeUQsi/e75bc2d9b05ae39fe71ec1b1c14600e0/work.jpg',
                  details: {
                    size: 1517667,
                    image: {
                      width: 1400,
                      height: 714,
                    },
                  },
                  fileName: 'work.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerText1: 'Bli en del av teamet',
            headerTextBgColor: '#FF405F',
            teamTitle: 'I team',
            teamText:
              'Vi jobbar alltid i team. Systemutvecklare, strateger, interaktionsdesigners, visuella designers och värdecoacher. Alla är vi värdefulla var och en för sig och ännu mer ihop. Vi jobbar alltid tillsammans. Alltid i tvärfunktionella team. Aldrig uthyrda. Aldrig ensamma.',
            methodTitle: 'Ständigt sökande',
            methodText:
              'Vi söker alltid efter den bästa processen. Den bästa metoden. Vi vågar ta risker, byta spår, byta teknik, experimentera och ifrågasätta både oss själva och våra kunder. Det är liksom det vi gör. Hela tiden.',
            sharingTitle: 'Delar allt',
            sharingText:
              'På våra kodluncher lär vi av varandra. Vi mentorerar och vi labbar ihop. Vi anordnar Lounge Hack, bidrar till open source, till forumet kodapor tillsammans med 12000 andra utvecklare och deltar på konferenser. Vår kunskap är din kunskap.',
            customersTitle: 'Långa strömmar, inte korta projekt.',
            customersText:
              'Våra kunder har alla stora möjligheter att göra skillnad på sina marknader. De är förbi datorisering och har redan lagt upp alla sina formulär på webben. Nu är de ute efter digitalisering. Och det tar tid. Därför har vi ofta långa relationer med våra kunder. Ofta blir vi vänner längs vägen.\n',
            hiringTitle: 'Just nu söker vi',
            contactTitle: 'Hör av dig till oss!',
            openApplicationText:
              'Gör en [spontanansökan](mailto:joinus@iteam.se)!',
            openApplicationLabel: 'Inget som passar?',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageWorkWithUs')
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
