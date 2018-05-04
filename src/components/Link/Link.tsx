import { Link } from 'react-router-dom'
import styled from '../../theme'

const StyledLink = styled(Link)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  line-height: 1.75;
  padding-bottom: 2px;
  text-decoration: none;
`

export default StyledLink
