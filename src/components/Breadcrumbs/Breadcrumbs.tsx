import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import styled from '../../theme'
import PaddedRow from '../Grid/PaddedRow'

interface BreadcrumbsProps {
  title: string
}

const Wrap = styled(PaddedRow)`
  > :not(:last-child):after {
    font-weight: 300;
    content: '/';
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
  }
`

const StyledSpan = styled.span`
  color: #000;
  font-weight: 500;
  border-bottom: 2px solid black;
  display: inline-block;
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
              <Link key={`link-${i}`} to="/case">
                <StyledSpan>Case</StyledSpan>
              </Link>
            )
          case 'karriar':
            return (
              <Link key={`link-${i}`} to="/karriar">
                <StyledSpan>Karriär</StyledSpan>
              </Link>
            )
          case 'medarbetare':
            return (
              <Link key={`link-${i}`} to="/medarbetare">
                <StyledSpan>Medarbetare</StyledSpan>
              </Link>
            )
          default:
            return null
        }
      })}
    </Wrap>
  )
}

export default withRouter(Breadcrumbs)
