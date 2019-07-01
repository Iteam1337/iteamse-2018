const resolver = require('../teamMember')

describe('queries/teamMember', () => {
  let context
  let variables

  beforeEach(() => {
    variables = {
      shortName: 'rln',
    }

    context = {
      getByContentType: jest.fn().mockResolvedValue([
        {
          sys: {
            space: [{}],
            id: '2eap07OhAYIaU00kEMaSqs',
            type: 'Entry',
            createdAt: '2018-03-23T10:40:35.562Z',
            updatedAt: '2018-03-24T07:37:49.839Z',
            revision: 2,
            contentType: [{}],
            locale: 'sv-SE',
          },
          fields: {
            name: 'Rickard Laurin',
            title: 'Webbutvecklare',
            short: 'rln',
            location: 'Stockholm',
            email: 'rickard.laurin@iteam.se',
          },
        },
      ]),
    }
  })

  it('should call getContentType with correct content type', async () => {
    try {
      await resolver(null, variables, context)

      expect(context.getByContentType).toHaveBeenCalledWith('teamMembers', {
        'fields.short': 'rln',
      })
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
