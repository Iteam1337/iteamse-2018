// @flow

import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  children: React.Node,
  to: string,
}

const StyledButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.radicalRed};
  border-radius: 6px;
  color: #fff;
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
`

const Button = ({ children, to }: Props) => {
  return <StyledButton to={to}>{children}</StyledButton>
}

export default Button
