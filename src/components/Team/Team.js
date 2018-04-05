// @flow

import React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import * as IteamCMS from './__generated__/Team'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TeamMembersDuo from './TeamMembersDuo'
import TeamMembers from './TeamMembers'
import TeamMember from './TeamMember'
import { colors } from '../../theme'

type Props = {
  bgColor?: string | 'blue' | 'red' | 'green',
  shortName: string[],
}

type QueryProps = Iteam.ApolloBase<IteamCMS.Team>

const TeamQuery = gql`
  query Team($shortName: [String!]!) {
    teamMember(shortName: $shortName) {
      avatar
      email
      gravatar
      location
      name
      phoneNumber
      title
    }
  }
`

const handleColors = bgColor => {
  switch (bgColor) {
    case 'blue':
      return colors.cornflowerBlue
    case 'red':
      return colors.radicalRed
    case 'green':
      return colors.aquamarine
    default:
      return bgColor
  }
}

const Team = ({ bgColor = colors.radicalRed, shortName }: Props) => {
  const backgroundColor = handleColors(bgColor)

  return (
    <Query query={TeamQuery} variables={{ shortName }}>
      {({ loading, data: { teamMember } }: QueryProps) => {
        if (loading) {
          return null
        }

        if (shortName.length === 2) {
          return (
            <TeamMembersDuo bgColor={backgroundColor} teamMember={teamMember} />
          )
        }

        return (
          <TeamMembers bgColor={backgroundColor}>
            {teamMember.map(member => (
              <TeamMember key={member.name} member={member} />
            ))}
          </TeamMembers>
        )
      }}
    </Query>
  )
}

export default Team
