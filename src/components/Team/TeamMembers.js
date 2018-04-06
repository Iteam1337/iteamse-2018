// @flow

import * as React from 'react'
import { colors } from '../../theme'
import GridRow from '../Grid/GridRow'
import GridContent from '../Grid/GridContent'

type Props = {
  bgColor: string,
  children: React.Node,
  teamMembers: number,
}

const Wrap = GridRow.extend`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor, theme }) => theme.contrast(bgColor)};

  a {
    color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  }
`

const Members = GridContent.extend`
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: ${({ teamMembers }) =>
      teamMembers === 2 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'};
    padding-bottom: 60px;
    padding-top: 60px;
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
