import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { mockSingleLink } from 'react-apollo/test-utils'
import MockRouter from 'react-mock-router'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

interface MockedQueryProps {
  location?: object
  mocks: any[]
  params?: object
}

const MockedQuery: React.SFC<MockedQueryProps> = ({
  children,
  location,
  mocks,
  params,
}) => {
  const link = mockSingleLink.apply(null, mocks)

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MockRouter location={location} params={params}>
          {children}
        </MockRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MockedQuery
