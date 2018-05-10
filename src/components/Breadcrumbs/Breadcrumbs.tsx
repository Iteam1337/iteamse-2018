import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import styled from '../../theme'
import PaddedRow from '../Grid/PaddedRow'

interface BreadcrumbsProps {
  title: string
}

const Wrap = PaddedRow.extend`
  > :not(:last-child):after {
    font-weight: 300;
    content: '/';
    margin-left: 5px;
    margin-right: 5px;
  }
`

const StyledLink = styled(Link)`
  color: #000;
  font-weight: 500;
  text-decoration: none;
`

const Breadcrumbs: React.SFC<BreadcrumbsProps & RouteComponentProps<{}>> = ({
  location,
  title,
}) => {
  return (
    <Wrap data-test="breadcrumbs">
      {location.pathname.split('/').map((pathLocation, i, self) => {
        if (i === self.length - 1) {
          return <span key={`link-${i}`}>{title}</span>
        }

        switch (pathLocation) {
          case 'case':
            return (
              <StyledLink key={`link-${i}`} to="/case">
                Våra case
              </StyledLink>
            )
          case 'jobba-hos-oss':
            return (
              <StyledLink key={`link-${i}`} to="/jobba-hos-oss">
                Jobba hos oss
              </StyledLink>
            )
          case 'teamet':
            return (
              <StyledLink key={`link-${i}`} to="/teamet">
                Teamet
              </StyledLink>
            )
          default:
            return null
        }
      })}
    </Wrap>
  )
}

export default withRouter(Breadcrumbs)
