import styled, { media } from '../../theme'

const PaddedRow = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  ${media.desktop`
    padding-left: 0;
    padding-right: 0;
  `};
`

export default PaddedRow
