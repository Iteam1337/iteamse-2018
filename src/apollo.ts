import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

const httpLink = createHttpLink({
  uri: process.env.RAZZLE_HOST,
})

export const client = new ApolloClient({
  cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__),
  link: httpLink,
  ssrForceFetchDelay: 100,
})
