import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: process.env.RAZZLE_CMS_URL,
})

export const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: r => {
      if (r.uid) {
        return `${r.__typename}:${r.uid}`
      }

      return r.id
    },
  }).restore(window.__APOLLO_STATE__),
  link: httpLink,
  ssrForceFetchDelay: 100,
})
