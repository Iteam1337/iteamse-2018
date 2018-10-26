import { DocumentNode } from 'graphql'
import React from 'react'
import { OperationVariables } from 'react-apollo'
import styled from 'styled-components'
import { withProps } from '../../theme'

import GridColumn, { GridColumnClean } from '../Grid/GridColumn'

const HeaderIndicatorWrap = styled(GridColumnClean)`
  background-color: ${({ theme }) => theme.colors.concrete};
  height: 430px;

  @media (min-width: 481px) {
    height: 800px;
  }
`

const HeaderIndicatorContent = styled.div`
  display: grid;
  grid-column: -1 / 1;
  grid-template-rows: auto 1fr;
  grid-template-columns: 30px 1fr 30px;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const LoadingIndicatorGridColum = styled(GridColumn)`
  grid-row-gap: 35px;
`

interface ContentIndicatorProps {
  width?: number
}

const ContentIndicator = withProps<ContentIndicatorProps>()(styled.div)`
  height: 18px;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme }) => theme.colors.concrete};
`

const LoadingIndicator = () => (
  <>
    <HeaderIndicatorWrap>
      <HeaderIndicatorContent />
    </HeaderIndicatorWrap>
    <LoadingIndicatorGridColum>
      <ContentIndicator width={100} />
      <ContentIndicator width={100} />
      <ContentIndicator width={75} />
    </LoadingIndicatorGridColum>
  </>
)

const queryWithLoading = (QueryComponent: any) => {
  return ({
    query,
    variables,
    children,
    ...props
  }: {
    query: DocumentNode
    variables?: OperationVariables
    children: any
    props?: any[]
  }) => (
    <QueryComponent query={query} variables={variables} {...props}>
      {({ loading, data }: { loading: boolean; data: any }) =>
        loading || !data ? <LoadingIndicator /> : children(data)}</QueryComponent>
  )
}

export default queryWithLoading
