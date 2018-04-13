// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import type { DocumentNode } from 'graphql'
import type { ApolloClient } from 'apollo-client'

type P = {
  children: React.Node,
  client: ApolloClient,
  query: DocumentNode,
  to: string,
  variables?: Object,
}

const PrefetchLink = ({ children, client, query, to, variables }: P) => {
  return (
    <Link
      onMouseEnter={() =>
        client.query({
          query,
          variables,
        })
      }
      to={to}
    >
      {children}
    </Link>
  )
}

export default withApollo(PrefetchLink)
