// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar from './Avatar'
import Mailto from '../Link/Mailto'

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

const Name = styled.div`
  font-weight: 500;
`

const TeamPageMember = ({ member }: Props) => {
  return (
    <Colleague key={member.name}>
      <Avatar image={member.avatar || member.gravatar} />
      <Name>{member.name}</Name>
      <Title>{member.title}</Title>
      {member.phoneNumber}
      <Mailto email={member.email}>{member.email}</Mailto>
    </Colleague>
  )
}

export default TeamPageMember
