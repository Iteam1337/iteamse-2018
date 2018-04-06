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
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 150px 1fr;
    text-align: left;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 225px 1fr;
  }
`

const Meta = styled.div``
const Title = styled.div`
  font-weight: 500;
`
const MetaSection = styled.div`
  margin-bottom: 20px;
`

const TeamMemberDuo = ({ member }: Props) => {
  return (
    <Colleague>
      <Avatar image={member.avatar || member.gravatar} />
      <Meta>
        <MetaSection>
          <Title>{member.title}</Title>
          <div>{member.location}</div>
        </MetaSection>
        <Title>{member.name}</Title>
        <div>{member.phoneNumber}</div>
        <Mailto email={member.email}>{member.email}</Mailto>
      </Meta>
    </Colleague>
  )
}

export default TeamMemberDuo
