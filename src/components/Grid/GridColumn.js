// @flow

import styled from 'styled-components'

export const GridColumnClean = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;

    > * {
      grid-column: 2;
    }
  }
`

const GridColumn = GridColumnClean.extend`
  grid-row-gap: 40px;
  margin-bottom: 40px;
  margin-top: 40px;

  @media (min-width: 1024px) {
    grid-row-gap: 100px;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`

export default GridColumn
