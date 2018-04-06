// @flow

import * as React from 'react'
import { colors } from '../../theme'
import styled from 'styled-components'
import { GridRowClean } from '../Grid/GridRow'

type Props = {
  bgColor: string,
  children: React.Node,
  teamMembers: number,
}

const Wrap = GridRowClean.extend`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  grid-column: -1 / 1;
  padding: 40px;

  a {
    color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  }

  @media (min-width: 1024px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }
`

const Members = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: ${({ teamMembers }) =>
      teamMembers === 2 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'};
  }
`

const TeamMembers = ({
  bgColor = colors.radicalRed,
  children,
  teamMembers,
}: Props) => {
  return (
    <Wrap bgColor={bgColor}>
      <Members teamMembers={teamMembers}>{children}</Members>
    </Wrap>
  )
}

export default TeamMembers
