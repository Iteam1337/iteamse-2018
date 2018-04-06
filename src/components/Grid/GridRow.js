// @flow

import styled from 'styled-components'

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

export default GridRow
