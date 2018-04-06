// @flow

import styled from 'styled-components'

const PaddedRow = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`


export default PaddedRow