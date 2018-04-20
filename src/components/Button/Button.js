// @flow

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  background-color: ${({ theme }) => theme.colors.radicalRed};
  border: 3px solid transparent;
  border-radius: 6px;
  color: #fff;
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  transition-property: background-color, border-color;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;

  &:hover {
    background-color: transparent;
    border-color: #fff;
  }
`

export default Button
