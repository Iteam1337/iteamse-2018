// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar from './Avatar'
import Mailto from '../Link/Mailto'
import { TeamMemberPageQuery } from '../../pages/TeamMember'
import PrefetchLink from '../Link/PrefetchLink'
import Colleague from './Colleague'

type Props = {
  member: IteamCMS.Team_teamMembers,
}

const Title = styled.div`
  font-weight: 500;
`

const Location = styled.div``
const AvatarWrap = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`

const TeamMember = ({ member }: Props) => {
  return (
    <Colleague>
      <Title>{member.title}</Title>
      <Location data-test="team-member-location">{member.location}</Location>
      <PrefetchLink
        query={TeamMemberPageQuery}
        to={`/teamet/${member.short}`}
        variables={{
          shortName: member.short,
        }}
      >
        <AvatarWrap>
          <Avatar image={member.avatar} />
        </AvatarWrap>
      </PrefetchLink>
      <Title>{member.name}</Title>
      <Mailto email={member.email}>{member.email}</Mailto>
    </Colleague>
  )
}

export default TeamMember
