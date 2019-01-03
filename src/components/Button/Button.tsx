import { Link } from 'react-router-dom'
import styled, { Theme, withProps } from '../../theme'

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

type AccentColor = 'primary' | 'default' | undefined
interface SecondaryButtonProps {
  color?: AccentColor
}

const getAccentColour = (theme: Theme, color: AccentColor): string => {
  switch (color) {
    case 'primary':
      return theme.colors.radicalRed
    default:
      return '#fff'
  }
}

const SecondaryButton = withProps<SecondaryButtonProps>()(styled.button)`
  background: transparent;
  border: 1px solid ${({ theme, color }) => getAccentColour(theme, color)};
  border-radius: 5px;
  color: ${({ theme, color }) => getAccentColour(theme, color)};
  cursor: pointer;
  font-size: 18px;
  font-family: inherit;
  font-weight: 500;
  outline: none;
  padding: 12px 72px;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;
  width: 100%;

  &:hover {
    background-color: ${({ theme, color }) => getAccentColour(theme, color)};
    color: #fff;
  }

  @media (min-width: 1025px) {
    width: auto;
  }
`

export { Button as default, SecondaryButton }
