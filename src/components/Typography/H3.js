// @flow

import styled from 'styled-components'
import { media } from '../../theme'

const H3 = styled.h3`
  font-size: 25px;
  font-weight: 500;
  margin: 0;

  ${media.desktop`
    font-size: 36px;
  `};
`

export default H3
