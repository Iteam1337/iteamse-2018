import * as GraphQL from 'graphql'
import React from 'react'
import * as ReactApollo from 'react-apollo'

import LoadingIndicator from './LoadingIndicator'

const queryWithLoading = (QueryComponent: any) => {
  return ({
    query,
    variables,
    children,
    ...props
  }: {
    query: GraphQL.DocumentNode
    variables?: ReactApollo.OperationVariables
    children: any
    props?: any[]
  }) => (
    <QueryComponent query={query} variables={variables} {...props}>
      {({ loading, data }: { loading: boolean; data: any }) =>
        loading || !data ? <LoadingIndicator /> : children(data)}</QueryComponent>
  )
}

export default queryWithLoading
