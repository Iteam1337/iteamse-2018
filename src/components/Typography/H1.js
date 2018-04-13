// @flow

import styled from 'styled-components'
import { media } from '../../theme'

const H1 = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin: 0;

  ${media.desktop`
    font-size: 52px;
  `};
`

export default H1
