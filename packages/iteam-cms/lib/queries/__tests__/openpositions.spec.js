const resolver = require('../openpositions')

describe('queries/openpositions', () => {
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
            id: '4YS5osCpUsYskY4O6EUmeU',
            type: 'Entry',
            createdAt: '2017-07-03T11:26:15.333Z',
            updatedAt: '2018-03-24T10:34:52.317Z',
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'annons',
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
                id: '2VBOGPr664aWq4cEieYasY',
                type: 'Asset',
                createdAt: '2018-03-24T09:52:59.854Z',
                updatedAt: '2018-03-24T09:52:59.854Z',
                revision: 1,
                locale: 'sv-SE',
              },
              fields: {
                title: 'Junior UX',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/2VBOGPr664aWq4cEieYasY/7d824e86c44854559806e31e02c2e02a/juniorux.jpg',
                  details: {
                    size: 1151499,
                    image: {
                      width: 1382,
                      height: 714,
                    },
                  },
                  fileName: 'juniorux.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerText1: 'Junior UX Designer',
            headerText2: 'Stockholm',
            headerTextBgColor: '#668CFF',
            title: 'Junior UX Designer',
            urlId: 'junior-ux-designer',
            location: 'Stockholm',
            roleTitle: 'Din roll',
            role:
              'Som UX designer på Iteam är din roll att hjälpa våra kunder med digitala lösningar som skapar värde på riktigt. Som gör något bra både för kunden, slutanvändaren och samhället. Med hjälp av olika researchmetoder undersöker du både användarens och kundens behov och kontext, samt definierar och testar användarupplevelser.\n\nDu delar med dig av din kunskap inom user experience. Du förstår också att om lösningar ska vara verkligt användarvänliga behöver även arbetsprocesserna och kulturen vara användarcentrerad. Vi strävar mot att UX aldrig ska få vara bara en fas eller en eftertanke. Det ska genomsyra hela projektet. Alltid. ',
            knowledgeTitle: 'Du behöver kunna',
            knowledge:
              '- Kvalitativa researchmetoder (t.ex. användbarhetstester, observationer, intervjuer och workshops)\n- Kommunicera dina insikter med hjälp av lämpliga leverabler (t.ex. rapporter, användarresor, prototyper eller skrynkliga pappersskisser)\n- Interaktionsdesign\n- Vara användarens representant i projekt och stötta både kollegor och kunder med användarens perspektiv\n- Jobba agilt\n- Arbeta korsfunktionellt och förstå behoven hos kollegor ur andra yrkesgrupper\n- Goda kunskaper i engelska (för att kunna kommincera med dina kollegor)\n- Goda kunskaper i svenska (för att kunna genomföra användarstudier i kontexter där det primära användarspråket är svenska)',
            bonusKnowledgeTitle: 'Plus i kanten',
            bonusKnowledge:
              '- Kvantitativa researchmetoder (t.ex. enkäter och användningsdata i Google Analytics)\n- Förståelse för den tekniska miljö dina lösningar kommer att implementeras i (t.ex. grundläggande HTML och CSS)\n- Utbildning inom interaktionsdesign, människa-datorinteraktion, beteendevetenskap, kognitionspsykologi, digital design eller närliggande område',
            contentImage: {
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
            aboutUsTitle: 'Om oss',
            aboutUs:
              'Vi digitaliserar företag och organisationer genom strategi, kod och kultur. Med hjälp av de tre bitarna skapar vi innovativa tekniska lösningar som skapar värde, gör något bra för samhället och låter oss ha roligt längs vägen.\n\nVåra kunder har spännande utmaningar både tekniskt och affärsmässigt, och stor potential att göra skillnad inom sina områden. Vi jobbar bland annat med Taxi Stockholm, Vimla, Läkare utan gränser och Arbetsförmedlingen.\n\nVi är ca 30 personer fördelade i Stockholm och Göteborg. Hos oss tar du av dig skorna vid dörren och känner dig som hemma. Vi lär oss ständigt nya saker av varandra - genom mentorskap, utbyte inom projekt, måndagsfrukostar, kodlunch eller under labbtimmarna. Vi har kul tillsammans och tar hand om varandra i vardagen, löparspåret, på yogamattan, spelkvällar, after works och vid andra speciella tillfällen. Vi arbetar aktivt för att sätta ihop team med så varierande och kompletterande bakgrund som möjligt – oavsett om det gäller kön, könsidentitet och -uttryck, etnisk tillhörighet, religion och trosuppfattning, funktionalitet, sexuell läggning, ålder, utbildning eller social bakgrund. Våra team är alltid korsfunktionella. Alltid agila. Alltid nära beställaren, deras anställda, användare och intressenter.',
            technicalitiesTitle: 'Teknikaliteter',
            technicalities:
              '__Några av våra kunder:__ Taxi Stockholm, Vimla, Swedbank, Läkare Utan Gränser, Arbetsförmedlningen, Alcro Beckers, Scania, SoundIdeas.\n\n__Anställningsform:__ Tillsvidareanställning. 6 månaders provanställning, sedan fast anställning.\n\n__Plats:__ Stockholm.\n\n__Start:__ Omgående.',
            applicationTitle: 'Ansökan',
            application:
              'Maila CV, personligt brev och beskrivning av ett case till: [work@iteam.se](mailto:work@iteam.se)',
            perks: `6 veckors semester
              Kodluncher varje fredag för gemensamt lärande inkl lunch
              Ingen förväntad övertid
              Förmånligt friskvårdsbidrag och fokus på välmående
              Förmånligt pensionssystem
              Bonus vid slutet av ett bra år
              Mentorskap mellan arbetskamrater
              Individuell budget för kompetensutveckling`,
            perksTitle: 'Några av våra bonusar',
            contactTitle: 'Frågor?',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('annons')
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
