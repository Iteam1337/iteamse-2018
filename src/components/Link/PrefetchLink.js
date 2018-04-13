// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import type { DocumentNode } from 'graphql'
import type { ApolloClient } from 'apollo-client'
import styled from 'styled-components'

type P = {
  children: React.Node,
  client: ApolloClient,
  query: DocumentNode,
  to: string,
  variables?: Object,
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const PrefetchLink = ({ children, client, query, to, variables }: P) => {
  return (
    <StyledLink
      onMouseEnter={() =>
        client.query({
          query,
          variables,
        })
      }
      to={to}
    >
      {children}
    </StyledLink>
  )
}

export default withApollo(PrefetchLink)
