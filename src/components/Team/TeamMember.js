// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar from './Avatar'

type Props = {
  member: IteamCMS.Team_teamMember,
}

const Colleague = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.div`
  font-weight: 500;
`

const Location = styled.div``

const Name = styled.div`
  font-weight: 500;
`

const TeamMember = ({ member }: Props) => {
  return (
    <Colleague key={member.name}>
      <Title>{member.title}</Title>
      <Location data-test="team-member-location">{member.location}</Location>
      <Avatar image={member.avatar || member.gravatar} />
      <Name>{member.name}</Name>
      {member.email}
    </Colleague>
  )
}

export default TeamMember
