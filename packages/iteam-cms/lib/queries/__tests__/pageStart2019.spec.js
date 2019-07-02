const resolver = require('../pageStart2019')

describe('queries/pageStart2019', () => {
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
            id: '4ESP9pmZ0eeImNQH6AJjFT',
            type: 'Entry',
            createdAt: '2019-01-22T08:25:35.350Z',
            updatedAt: '2019-02-12T16:23:05.554Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 11,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'pageStart2019',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            headerText1:
              'Hej! Vi är Iteam, en utvecklingbyrå som digitaliserar företag genom kod, kultur och strategi.',
            headerLead:
              'Läs mer om våra [erbjudanden](/erbjudanden "Erbjudanden") eller se våra [case](/case "Våra case")',
            weAreTitle: 'Vi är Iteam',
            weAreText:
              'Vi är en digital utvecklingsbyrå med kontor i Stockholm och Göteborg. Totalt är vi är 35 utvecklare, värdecoacher,  UX-designers och stateger som drivs av tre grundläggande värderingar - att göra något bra, att ha kul och att skapa värde. \n\nVi kombinerar strategi, kod och kultur för att ta fram digitala lösningar som möter användarnas behov. Vi utvecklar inte bara appar. Vi tar ett helhetligt perspektiv på din affär för att skapa förändring på riktigt. Vi leder förändringsarbetet och hjälper er att digitalisera er affär.\n\n',
            weOfferTitle: 'Vi erbjuder',
            weOfferText:
              'Med ett långsiktigt engagemang hjälper våra kunder att navigera i den digitala världen. Vi omvandlar visioner till verkliget, utmanar föråldrade metoder och tillsammans med er utvecklar vi digitala tjänster som era kunder älskar att använda.',
            ourMethodTitle: 'Vår metod',
            ourMethodText:
              'Vi har varit verksamma som digital innovationsbyrå i över 20 år. Så vi vet att glädje,  teknisk spetskompetens och strategiska perspektiv är viktigt. Mendet är när personer med olika kompetenser och varierande bakgrunder samarbetar i tvärfunktionella team som innovation verkligen sker. Det är därför som jobbar vi alltid i team tillsammans med våra kunder. ',
            team: ['hrn', 'mrs', 'jmn', 'jhn'],
            ctaButtonText: 'Kontakta oss',
            ctaText: 'Hör av dig till oss så pratar vi vidare.',
            ctaTitle: 'Nyfiken på vad vi kan åstadkomma tillsammans?',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('pageStart2019')
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
