// @flow

import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

type Props = {
  bgColor: string,
  children: React.Node,
}

const Wrap = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
  }

  a {
    color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  }
`

const Members = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-column: 2;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: 60px;
    padding-top: 60px;
  }
`

const TeamMembers = ({ bgColor = colors.radicalRed, children }: Props) => {
  return (
    <Wrap bgColor={bgColor}>
      <Members>{children}</Members>
    </Wrap>
  )
}

export default TeamMembers
