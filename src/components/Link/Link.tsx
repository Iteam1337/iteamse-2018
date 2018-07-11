import { Link } from 'react-router-dom'
import styled, { withProps } from '../../theme'

interface StyledLinkProps {
  black?: boolean
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

export default StyledLink
