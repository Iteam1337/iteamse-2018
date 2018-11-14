import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styled, { withProps } from '../../theme'

interface StyledLinkProps {
  black?: boolean | number
}

const StyledLink = withProps<StyledLinkProps>()(styled(Link))`
  border-bottom: 2px solid ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  color: ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  line-height: 1.75;
  padding-bottom: 2px;
  text-decoration: none;
`

export const StyledHashLink = withProps<StyledLinkProps>()(styled(HashLink))`
  border-bottom: 2px solid ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  color: ${({ black, theme }) =>
    black ? '#000' : theme.colors.cornflowerBlue};
  line-height: 1.75;
  padding-bottom: 2px;
  text-decoration: none;
`

export default StyledLink
