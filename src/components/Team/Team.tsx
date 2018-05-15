import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { TeamQuery, TeamQueryVariables } from '../../../typings/iteamse'
import { handleColors } from '../../utils/handleColors'
import TeamMember from './TeamMember'
import TeamMemberDuo from './TeamMemberDuo'
import TeamMembers from './TeamMembers'

interface TeamProps {
  bgColor?: string | 'blue' | 'red' | 'green'
  shortName: string[] | null
  callToAction?: string
}

export const TEAM_QUERY = gql`
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

class TeamQueryComponent extends Query<TeamQuery, TeamQueryVariables> {}

const Team: React.SFC<TeamProps> = ({
  bgColor = 'red',
  shortName,
  callToAction,
}) => {
  if (shortName == null) {
    return null
  }

  const backgroundColor = handleColors(bgColor)

  return (
    <TeamQueryComponent query={TEAM_QUERY} variables={{ shortName }}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { teamMembers } = data

        return (
          <TeamMembers
            bgColor={backgroundColor}
            teamMembers={shortName.length}
            callToAction={callToAction}
          >
            {teamMembers.map(member => {
              if (shortName.length === 2) {
                return <TeamMemberDuo key={member.name} member={member} />
              }

              return <TeamMember key={member.name} member={member} />
            })}
          </TeamMembers>
        )
      }}
    </TeamQueryComponent>
  )
}

export default Team
