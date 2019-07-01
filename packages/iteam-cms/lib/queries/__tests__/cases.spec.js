const resolver = require('../cases')

describe('queries/cases', () => {
  let context

  beforeEach(() => {
    context = {
      getByContentType: jest.fn().mockResolvedValue([
        {
          sys: {
            space: [
              { sys: { type: 'Link', linkType: 'Space', id: 'rj4r6yfcesw5' } },
            ],
            id: '6yYI3MPQ6QSCsuIKscMEQ2',
            type: 'Entry',
            createdAt: '2018-04-06T06:06:06.512Z',
            updatedAt: '2018-04-06T08:37:24.044Z',
            revision: 7,
            contentType: [
              { sys: { type: 'Link', linkType: 'ContentType', id: 'cases' } },
            ],
            locale: 'sv-SE',
          },
          fields: {
            thumbnailImage: {
              fields: {
                title: 'af',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/3Y7zZ25WbeOCU8w84kAEos/284ae63715e1dde9090eb0ae8fb667c2/af.png',
                  details: {},
                  fileName: 'af.png',
                  contentType: 'image/png',
                },
              },
            },
            logo: {
              fields: {
                title: 'af',
                file: {
                  url:
                    '//images.ctfassets.net/rj4r6yfcesw5/4p0ptdLj9SaECekOI4c6C2/c2cdeab1cebc9650ebb0e7778357c231/AF_ordbild_vit.png',
                  details: {},
                  fileName: 'AF_ordbild_vit.png',
                  contentType: 'image/png',
                },
              },
            },
            headerBgColor: '#9E9EF0',
            title: 'Arbetsförmedlingen',
            slug: 'Arbetsförmedlingen',
            tags: ['API', 'Docker', 'UX', 'React', 'Vue'],
            shortDescription:
              'Synliggörande av asylsökandes kompetens med digitala verktyg',
            introductionTitle: 'En ny digital tjänst',
            introduction:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis odio vel turpis pellentesque finibus. Pellentesque cursus diam ac ligula placerat volutpat. Vivamus dictum augue eu rutrum efficitur. Suspendisse ut pellentesque ante. Suspendisse odio velit, fringilla eu porta vel, elementum ac libero. Nam eu vestibulum magna. Vestibulum quis risus elementum, lobortis sapien at, rhoncus enim. Nam accumsan odio lacus, at facilisis lacus rhoncus vel. Suspendisse sollicitudin a ipsum at cursus.',
            processTitle: 'Process',
            process:
              'Aeneanurutrum, erat at tempus porttitor, mi eros vestibulum magna, eget semper mauris ipsum a nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis odio vel turpis pellentesque finibus. Pellentesque cursus diam ac ligula placerat volutpat. Vivamus dictum augue eu rutrum efficitur. Suspendisse ut pellentesque ante. Suspendisse odio velit, fringilla eu porta vel, elementum ac libero. Nam eu vestibulum magna. Vestibulum quis risus elementum, lobortis sapien at, rhoncus enim. Nam accumsan odio lacus, at facilisis lacus rhoncus vel. Suspendisse sollicitudin a ipsum at cursus.',
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
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, {}, context)

      expect(context.getByContentType).toHaveBeenCalledWith('cases')
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
