// @flow

import React from 'react'
import styled from 'styled-components'
import { withRouter, Link, type ContextRouter } from 'react-router-dom'
import PaddedRow from '../Grid/PaddedRow'

type Props = {
  ...ContextRouter,
  title: string,
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

const Breadcrumbs = ({ location, title }: Props) => {
  return (
    <Wrap data-test="breadcrumbs">
      {location.pathname.split('/').map((location, i, self) => {
        if (i === self.length - 1) {
          return <span key={`link-${i}`}>{title}</span>
        }

        switch (location) {
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
          default:
            return null
        }
      })}
    </Wrap>
  )
}

export default withRouter(Breadcrumbs)
