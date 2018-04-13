// @flow

import styled from 'styled-components'
import { media } from '../../theme'

export const GridColumnClean = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.desktop`
    grid-template-columns: 1fr 1024px 1fr;

    > * {
      grid-column: 2;
    }
  `};
`

const GridColumn = GridColumnClean.extend`
  grid-row-gap: 40px;
  padding-bottom: 40px;
  padding-top: 40px;

  ${media.desktop`
    grid-row-gap: 100px;
    padding-bottom: 100px;
    padding-top: 100px;
  `};
`

export default GridColumn
