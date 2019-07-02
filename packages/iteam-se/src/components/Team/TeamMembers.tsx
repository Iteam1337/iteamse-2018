import * as React from 'react'
import styled, { colors } from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import H2 from '../Typography/H2'

interface TeamMembersProps {
  bgColor: string
  teamMembers: number
  callToAction?: string
}

interface WrapProps {
  bgColor: string
  teamMembers: number
}

const Wrap = styled(GridColumnClean)<WrapProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  grid-column: -1 / 1;
  padding: 40px;

  a {
    color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  }

  @media (min-width: 1025px) {
    padding: ${({ teamMembers }) => (teamMembers <= 4 ? '100px 0' : '0px')};
  }

  /* IE 11 */
  ${({ theme }) => theme.browsers.ie10Or11(`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;

    > * {
      max-width: 1024px;
    }
  `)}
`

const Header = styled(H2)`
  font-weight: 500;
  margin-bottom: 50px;

  /* IE 11 */
  ${({ theme }) => theme.browsers.ie10Or11(`
    width: 100%;
  `)}
`

interface MembersProps {
  teamMembers: number
}

const Members = styled.div<MembersProps>`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-template-columns: ${({ teamMembers }) =>
      teamMembers === 2 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'};
  }

  /* IE 11 */
  ${({ theme }) => theme.browsers.ie10Or11(`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    > * {
      box-sizing: border-box;
      flex: 1 0 25%;
    }
  `)}
`

const TeamMembers: React.SFC<TeamMembersProps> = ({
  bgColor = colors.radicalRed,
  children,
  teamMembers,
  callToAction,
}) => {
  return (
    <Wrap bgColor={bgColor} teamMembers={teamMembers}>
      {callToAction && <Header>{callToAction}</Header>}
      <Members teamMembers={teamMembers}>{children}</Members>
    </Wrap>
  )
}

export default TeamMembers
