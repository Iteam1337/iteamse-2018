import { DocumentNode } from 'graphql'
import React from 'react'
import PrefetchLink from '../Link/PrefetchLink'

interface WithLinkProps {
  to: string
  query: DocumentNode
  variables: object
}

const WithLink: React.SFC<WithLinkProps> = ({
  children,
  to,
  query,
  variables = {},
}) => {
  return (
    <PrefetchLink to={to} query={query} variables={variables}>
      {children}
    </PrefetchLink>
  )
}
export default WithLink
