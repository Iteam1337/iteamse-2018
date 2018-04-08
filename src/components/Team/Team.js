// @flow

import React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import * as IteamCMS from './__generated__/Team'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TeamMemberDuo from './TeamMemberDuo'
import TeamMembers from './TeamMembers'
import TeamMember from './TeamMember'
import { colors } from '../../theme'
import { handleColors } from '../../utils/handleColors'

type Props = {
  bgColor?: string | 'blue' | 'red' | 'green',
  shortName: string[],
}

type QueryProps = Iteam.ApolloBase<IteamCMS.Team>

const TeamQuery = gql`
  query Team($shortName: [String!]!) {
    teamMembers(shortName: $shortName) {
      avatar
      email
      location
      name
      phoneNumber
      short
      title
    }
  }
`

const Team = ({ bgColor = colors.radicalRed, shortName }: Props) => {
  const backgroundColor = handleColors(bgColor)

  return (
    <Query query={TeamQuery} variables={{ shortName }}>
      {({ loading, data: { teamMembers } }: QueryProps) => {
        if (loading) {
          return null
        }

        return (
          <TeamMembers bgColor={backgroundColor} teamMembers={shortName.length}>
            {teamMembers.map(member => {
              if (shortName.length === 2) {
                return <TeamMemberDuo key={member.name} member={member} />
              }

              return <TeamMember key={member.name} member={member} />
            })}
          </TeamMembers>
        )
      }}
    </Query>
  )
}

export default Team
