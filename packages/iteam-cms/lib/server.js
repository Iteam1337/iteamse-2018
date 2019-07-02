require('dotenv').config()
const cors = require('micro-cors')
const { ApolloServer } = require('apollo-server-micro')
const contentful = require('contentful')
const Query = require('./queries')
const typeDefs = require('./schema')
const getByContentType = require('./services/getByContentType')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

const resolvers = {
  Query,
}

const server = new ApolloServer({
  playground: true,
  introspection: true,
  typeDefs,
  resolvers,
  context: () => ({
    client,
    getByContentType: getByContentType(client),
  }),
})

module.exports = cors({ origin: '*' })((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  return server.createHandler({ path: '/api/graphql' })(req, res)
})
