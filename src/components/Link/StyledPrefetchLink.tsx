import { DocumentNode } from 'graphql'
import * as React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import Link from './Link'

interface StyledPrefetchLinkProps {
  black?: boolean
  query: DocumentNode
  to: string
  variables?: object
}

const StyledPrefetchLink: React.SFC<
  WithApolloClient<StyledPrefetchLinkProps>
> = ({ black, children, client, query, to, variables }) => {
  return (
    <Link
      black={black ? 1 : 0}
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
