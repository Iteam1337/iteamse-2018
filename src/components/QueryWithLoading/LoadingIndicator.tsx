import React from 'react'

import styled, { keyframes } from 'styled-components'
import { withProps } from '../../theme'

import GridColumn, { GridColumnClean } from '../Grid/GridColumn'

const loadingShimmer = keyframes`
  from {
    background-position: -100vw 0;
  }
  to {
    background-position: 100vw 0;
  }
`

const LoadingWrap = styled.div`
  background: white;

  > * > span {
    position: relative;
    background-color: ${({ theme }) => theme.colors.concrete};
    background: linear-gradient(
      to right, 
      ${({ theme }) => theme.colors.concrete} 8%, 
      #ececec 24%, 
      ${({ theme }) => theme.colors.concrete} 40%
    );
    background-size: 100vw 128px;
    animation: 2s ${loadingShimmer} infinite forwards;
  }
`

const HeaderLoadingIndicatorWrap = styled(GridColumnClean)`
  background-color: ${({ theme }) => theme.colors.concrete};
  height: 430px;

  @media (min-width: 481px) {
    height: 800px;
  }
`

const HeaderLoadingIndicatorHero = styled.span`
  display: grid;
  grid-column: -1 / 1;
  grid-template-rows: auto 1fr;
  grid-template-columns: 30px 1fr 30px;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const ContentLoadingIndicatorWrap = styled(GridColumn)`
  grid-row-gap: 35px;

  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1025px) {
    padding-left: 0;
    padding-right: 0;
  }
`
interface ContentLoadingIndicatorProps {
  width?: number
}

const ContentLoadingIndicator = withProps<ContentLoadingIndicatorProps>()(styled.span)`
  height: 18px;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme }) => theme.colors.concrete};
`

const LoadingIndicator = () => (
  <LoadingWrap>
    <HeaderLoadingIndicatorWrap>
      <HeaderLoadingIndicatorHero />
    </HeaderLoadingIndicatorWrap>
    <ContentLoadingIndicatorWrap>
      <ContentLoadingIndicator width={100} />
      <ContentLoadingIndicator width={100} />
      <ContentLoadingIndicator width={75} />
    </ContentLoadingIndicatorWrap>
  </LoadingWrap>
)

export default LoadingIndicator