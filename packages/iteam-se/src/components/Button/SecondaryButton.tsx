import { Link } from 'react-router-dom'
import styled from '../../theme'

const SecondaryButton = styled(Link)`
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
`

export default SecondaryButton
