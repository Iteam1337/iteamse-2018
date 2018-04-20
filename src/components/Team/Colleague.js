// @flow

import styled from 'styled-components'
import { AvatarImage } from './Avatar'

const Colleague = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-5px);

    ${AvatarImage} {
      box-shadow: 0 5px 50px #33333333;
    }
  }
`

export default Colleague
