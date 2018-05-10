import { DocumentNode } from 'graphql'
import * as React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import Link from './Link'

interface StyledPrefetchLinkProps {
  query: DocumentNode
  to: string
  variables?: object
}

const StyledPrefetchLink: React.SFC<
  WithApolloClient<StyledPrefetchLinkProps>
> = ({ children, client, query, to, variables }) => {
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

export default withApollo(StyledPrefetchLink)
