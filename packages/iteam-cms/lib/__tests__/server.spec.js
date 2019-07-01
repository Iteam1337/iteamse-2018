jest.mock('../services/getByContentType')
jest.mock('apollo-server-micro')

describe('#server', () => {
  let ApolloServer

  beforeEach(() => {
    ApolloServer = require('apollo-server-micro').ApolloServer
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
  })

  it('should setup server', () => {
    require('../server')

    expect(ApolloServer).toMatchSnapshot()
  })

  it('should setup context for GraphQL', () => {
    require('../server')

    expect(ApolloServer.mock.calls[0][0].context()).toMatchSnapshot()
  })
})
