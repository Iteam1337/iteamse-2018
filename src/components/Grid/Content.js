// @flow

import styled from 'styled-components'

const Content = styled.div`
  background-color: ${({ concrete, theme }) =>
    concrete ? theme.colors.concrete : '#fff'};
  display: grid;
  grid-row-gap: 40px;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1024px) {
    grid-row-gap: 100px;
    padding-bottom: 60px;
    padding-top: 60px;
  }
`

export default Content
