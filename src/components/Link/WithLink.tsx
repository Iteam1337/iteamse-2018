import { DocumentNode } from 'graphql'
import React from 'react'
import PrefetchLink from '../Link/PrefetchLink'

interface WithLinkProps {
  to: string
  query: DocumentNode
  variables: object
}

const WithLink: React.SFC<WithLinkProps> = ({ children, ...rest }) => {
  return <PrefetchLink {...rest}>{children}</PrefetchLink>
}
export default WithLink
