const resolver = require('../case')

describe('queries/case', () => {
  let context
  let variables

  beforeEach(() => {
    variables = {
      slug: 'Arbetsförmedlingen',
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
            id: '6yYI3MPQ6QSCsuIKscMEQ2',
            type: 'Entry',
            createdAt: '2018-04-06T06:06:06.512Z',
            updatedAt: '2018-05-25T11:27:50.369Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 15,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'cases',
              },
            },
            locale: 'sv-SE',
          },
          fields: {
            thumbnailImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '3Y7zZ25WbeOCU8w84kAEos',
                type: 'Asset',
                createdAt: '2018-04-06T08:30:18.815Z',
                updatedAt: '2018-04-07T05:29:22.671Z',
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
                title: 'af',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/3Y7zZ25WbeOCU8w84kAEos/b97ff1899cf6f2e4dca0eb2b4f0d5a44/af.png',
                  details: {
                    size: 161197,
                    image: {
                      width: 661,
                      height: 662,
                    },
                  },
                  fileName: 'af.png',
                  contentType: 'image/png',
                },
              },
            },
            casePageImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '4cWj2fKl3GOQgSKss0IW0q',
                type: 'Asset',
                createdAt: '2018-05-25T08:17:31.864Z',
                updatedAt: '2018-05-25T08:17:31.864Z',
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
                title: 'af-cropped-by-aeo',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/4cWj2fKl3GOQgSKss0IW0q/0b2322470ffb780b925c8e446e745540/af-cropped-by-aeo.png',
                  details: {
                    size: 168378,
                    image: {
                      width: 573,
                      height: 331,
                    },
                  },
                  fileName: 'af-cropped-by-aeo.png',
                  contentType: 'image/png',
                },
              },
            },
            logo: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '4p0ptdLj9SaECekOI4c6C2',
                type: 'Asset',
                createdAt: '2018-04-06T07:36:54.106Z',
                updatedAt: '2018-04-13T13:29:44.584Z',
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
                title: 'Arbetsförmedlingen logo',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/4p0ptdLj9SaECekOI4c6C2/dba908232e2db00219bba544930b91f6/AF_ordbild_vit.png',
                  details: {
                    size: 50480,
                    image: {
                      width: 3074,
                      height: 428,
                    },
                  },
                  fileName: 'AF_ordbild_vit.png',
                  contentType: 'image/png',
                },
              },
            },
            casePageBackgroundImage: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'rj4r6yfcesw5',
                  },
                },
                id: '1jhHJfYCtO0MwAS6c6GwQS',
                type: 'Asset',
                createdAt: '2018-05-25T11:27:40.276Z',
                updatedAt: '2018-05-25T11:27:40.276Z',
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
                title: 'arbetsformedlingen background',
                description: '',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/1jhHJfYCtO0MwAS6c6GwQS/fe0cdf95de0256b59f4c669b65bf0c5b/arbetsformedlingen_background.jpg',
                  details: {
                    size: 174999,
                    image: {
                      width: 1920,
                      height: 600,
                    },
                  },
                  fileName: 'arbetsformedlingen_background.jpg',
                  contentType: 'image/jpeg',
                },
              },
            },
            headerBgColor: '#1616B2',
            title: 'Arbetsförmedlingen',
            location: 'Stockholm',
            slug: 'arbetsformedlingen',
            tags: ['API', 'Docker', 'UX', 'React', 'Vue'],
            shortDescription:
              'Synliggörande av asylsökandes kompetens med digitala verktyg',
            introductionTitle: 'En ny digital tjänst',
            introduction:
              'Jobskills är en ny digital matchningstjänst där de som är nya i Sverige själva kan kartlägga sin kompetens och förbereda sig för ett jobb i Sverige. Arbetsgivare kan genom Jobskills sökverktyg hitta ny värdefull kompetens.',
            processTitle: 'Utmaning',
            process:
              'Under 2015 ledde oroligheterna runt om i världen till att Europa mottog ett stort antal asylsökande. Detta har ställt höga krav på Migrationsverket och Arbetsförmedlingen som ansvarar för mottagningen av flyktingar och etableringen av nyanlända. Arbetsförmedlingen fick i uppdrag av regeringen att kartlägga asylsökandes utbildningsbakgrund och arbetslivserfarenhet för att snabba på etableringsprocessen. Syftet med kompetenskartläggningen är även att på ett bättre sätt tillgodose rekryteringsbehoven till bristyrken.\n\nPå grund av det stora antalet ansökningar om asyl har även väntetiderna ökat och var som längst upp emot två år under 2016/2017. Det är viktigt att tiden då den enskilde befinner sig i asylprocessen kan tas tillvara och användas på ett meningsfullt sätt, bland annat för att korta vägarna till en framtida etablering för de som får uppehållstillstånd. Tidiga insatser under asylprocessen leder till att snabbare få asylsökande i arbete och att förbättra integrationen i samhället.',
            developmentTitle: 'Utveckling',
            development:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis odio vel turpis pellentesque finibus. Pellentesque cursus diam ac ligula placerat volutpat. Vivamus dictum augue eu rutrum efficitur. Suspendisse ut pellentesque ante. Suspendisse odio velit, fringilla eu porta vel, elementum ac libero. Nam eu vestibulum magna. Vestibulum quis risus elementum, lobortis sapien at, rhoncus enim. Nam accumsan odio lacus, at facilisis lacus rhoncus vel. Suspendisse sollicitudin a ipsum at cursus.',
            aboutCompanyTitle: 'Arbetsförmedlingen',
            aboutCompany:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis odio vel turpis pellentesque finibus. Pellentesque cursus diam ac ligula placerat volutpat. Vivamus dictum augue eu rutrum efficitur. Suspendisse ut pellentesque ante. Suspendisse odio velit, fringilla eu porta vel, elementum ac libero. Nam eu vestibulum magna. Vestibulum quis risus elementum, lobortis sapien at, rhoncus enim. Nam accumsan odio lacus, at facilisis lacus rhoncus vel. Suspendisse sollicitudin a ipsum at cursus.',
            partnersTitle: 'Samarbetspartners',
            partners: '[Digitalbyrån](https://hej.com)',
            contactTitle: 'Presskontakt',
            contact:
              '- [Hans Rollman](mailto:hans.rollman@iteam.se)\n- Johan Littorin, Telenor, 0123 456 789',
            quote:
              '"We feel that our crew at Iteam are more colleagues than suppliers. Rather than specifying a tech spec to work on, we collaborate, carefully chiseling out functionality as we go along. This way of working has minimized waste and it has also taken us further than we ever imagined”',
            quotePerson: 'Anna Andersson, chef Arbetsförmedlingen',
            quoteBgColor: '#1616B2',
            frameworksTitle: 'Tekniker vi använt',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, variables, context)

      expect(context.getByContentType).toHaveBeenCalledWith('cases', {
        'fields.slug': 'Arbetsförmedlingen',
      })
    } catch (error) {
      throw new Error(error)
    }
  })

  it('should return all fields', async () => {
    await expect(resolver(null, variables, context)).resolves.toMatchSnapshot()
  })

  it('should not return fields if slug dosent match', async () => {
    variables.slug = 'Arbete'
    await expect(resolver(null, variables, context)).resolves.toMatchSnapshot()
  })

  it('should handle errors', async () => {
    expect.hasAssertions()
    context.getByContentType.mockRejectedValue('err')

    await expect(resolver(null, variables, context)).rejects.toThrowError('err')
  })
})
