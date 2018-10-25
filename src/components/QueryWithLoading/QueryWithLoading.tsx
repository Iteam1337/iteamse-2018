import React from 'react'
import styled from 'styled-components'
import { withProps } from '../../theme'

import GridColumn, { GridColumnClean } from '../Grid/GridColumn'

const HeaderIndicatorWrap = styled(GridColumnClean)`
  background: #f2f2f2;
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
  background-color: #f2f2f2;
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
    children,
    ...props
  }: {
    query: any
    children: any
    props?: any[]
  }) => (
    <QueryComponent query={query} {...props}>
      {({ loading, data }: { loading: boolean; data: any }) =>
        loading || !data ? <LoadingIndicator /> : children(data)}</QueryComponent>
  )
}

export default queryWithLoading
