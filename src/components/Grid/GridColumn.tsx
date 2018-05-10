import styled from '../../theme'

export const GridColumnClean = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;

    > * {
      grid-column: 2;
    }
  }
`

const GridColumn = GridColumnClean.extend`
  grid-row-gap: 40px;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1025px) {
    grid-row-gap: 100px;
    padding-bottom: 100px;
    padding-top: 100px;
  }
`

export default GridColumn
