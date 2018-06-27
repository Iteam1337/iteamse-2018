import { DocumentNode } from 'graphql'
import * as React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface PrefetchLinkProps {
  onClick: () => void
  query: DocumentNode
  to: string
  variables?: object
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const PrefetchLink: React.SFC<WithApolloClient<PrefetchLinkProps>> = ({
  children,
  client,
  onClick,
  query,
  to,
  variables,
}) => {
  return (
    <StyledLink
      onClick={onClick}
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
