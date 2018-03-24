// @flow

import React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import * as IteamCMS from './__generated__/Team'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TeamMembers from './TeamMembers'
import TeamMember from './TeamMember'
import { colors } from '../../theme'

type Props = {
  bgColor?: string,
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

const Team = ({ bgColor = colors.radicalRed, shortName }: Props) => {
  return (
    <Query query={TeamQuery} variables={{ shortName }}>
      {({ loading, data: { teamMember } }: QueryProps) => {
        if (loading) {
          return null
        }

        return (
          <TeamMembers bgColor={bgColor}>
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
