import { Link } from 'react-router-dom'
import styled from '../../theme'

interface StyledLinkProps {
  black?: boolean | number
}

const StyledLink =
  styled(Link) <
  StyledLinkProps >
  `
  border-bottom: 2px solid ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  color: ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  line-height: 1.75;
  padding-bottom: 2px;
  text-decoration: none;
`

// tslint:disable-next-line:whitespace
export const StyledHashLink = styled(HashLink)<StyledLinkProps>`
  border-bottom: 2px solid ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  color: ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  line-height: 1.75;
  padding-bottom: 2px;
  text-decoration: none;
`

export default StyledLink
