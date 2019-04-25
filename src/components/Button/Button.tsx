import { Link } from 'react-router-dom'
import styled from '../../theme'

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

const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  padding: 12px 44px;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;

  &:hover {
  }
`

export { Button as default, SecondaryButton }
