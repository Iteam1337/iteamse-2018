import React from 'react'
import { TeamQuery } from '../../../typings/iteamse'
import { TEAM_MEMBER_PAGE_QUERY } from '../../pages/TeamMember'
import styled from '../../theme'
import Mailto from '../Link/Mailto'
import PrefetchLink from '../Link/PrefetchLink'
import Avatar from './Avatar'
import Colleague from './Colleague'

interface TeamMemberProps {
  member: TeamQuery['teamMembers'][0]
}

const Title = styled.div`
  font-weight: 500;
`

const Wrap = styled.div``

const Location = styled.div``

const AvatarWrap = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`

const TeamMember: React.SFC<TeamMemberProps> = ({ member }) => {
  return (
    <Colleague>
      <Wrap>
        <Title>{member.title}</Title>
        <Location data-test="team-member-location">{member.location}</Location>
      </Wrap>
      <Wrap>
        <PrefetchLink
          query={TEAM_MEMBER_PAGE_QUERY}
          to={`/teamet/${member.short}`}
          variables={{
            shortName: member.short,
          }}
        >
          <AvatarWrap>
            <Avatar alt={member.name} image={member.avatar} />
          </AvatarWrap>
        </PrefetchLink>
        <Title>{member.name}</Title>
        <Mailto email={member.email}>{member.email}</Mailto>
      </Wrap>
    </Colleague>
  )
}

export default TeamMember
