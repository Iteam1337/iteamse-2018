import React from 'react'
import { TeamQuery } from '../../../typings/iteamse'
import { TEAM_MEMBER_PAGE_QUERY } from '../../pages/TeamMember'
import styled from '../../theme'
import { set } from '../../utils/googleAnalytics'
import Mailto from '../Link/Mailto'
import PhoneNumber from '../Link/PhoneNumber'
import PrefetchLink from '../Link/PrefetchLink'
import Avatar from './Avatar'
import Colleague from './Colleague'

interface TeamPageMemberProps {
  member: TeamQuery['teamMembers'][0]
}

const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-top: 5px;
`

const AvatarWrap = styled.div`
  margin-bottom: 20px;
`

const PhoneNumberWrap = styled.div`
  margin-bottom: 5px;
`

const TeamPageMember: React.SFC<TeamPageMemberProps> = ({ member }) => {
  return (
    <Colleague key={member.name}>
      <PrefetchLink
        onClick={() => set(`/teamet/${member.short}`)}
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
      <Name>{member.name}</Name>
      <Title>{member.title}</Title>
      {member.phoneNumber && (
        <PhoneNumberWrap>
          <PhoneNumber phoneNumber={member.phoneNumber}>
            {member.phoneNumber}
          </PhoneNumber>
        </PhoneNumberWrap>
      )}
      <Mailto email={member.email}>{member.email}</Mailto>
    </Colleague>
  )
}

export default TeamPageMember
