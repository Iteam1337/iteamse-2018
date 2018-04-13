// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar from './Avatar'
import Mailto from '../Link/Mailto'
import PhoneNumber from '../Link/PhoneNumber'
import { TeamMemberPageQuery } from '../../pages/TeamMember'
import PrefetchLink from '../Link/PrefetchLink'

type Props = {
  member: IteamCMS.Team_teamMembers,
}

const Colleague = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`

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

const TeamPageMember = ({ member }: Props) => {
  return (
    <Colleague key={member.name}>
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
