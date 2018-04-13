// @flow

import styled from 'styled-components'
import { media } from '../../theme'

const H2 = styled.h2`
  font-size: 25px;
  font-weight: 400;
  margin: 0;

  ${media.desktop`
    font-size: 48px;
  `};
`

export default H2
