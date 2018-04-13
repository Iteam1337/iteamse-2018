import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import createMockedNetworkFetch from 'apollo-mocknetworkinterface'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

type P = {
  children: React.Node,
  loading?: boolean,
  response: Object,
}

const MockedQuery = ({ children, loading, response = {} }: P) => {
  const createResponse = () => {
    return {
      loading: !!loading,
      data: {
        ...response,
      },
    }
  }

  const mockedNetworkFetch = createMockedNetworkFetch(createResponse, {
    latency: 0,
  })

  const client = new ApolloClient({
    link: createHttpLink({
      uri: 'http://localhost:3000',
      fetch: mockedNetworkFetch,
    }),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MockedQuery
