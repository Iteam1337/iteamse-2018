// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar, { AvatarImage } from './Avatar'
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
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-5px);

    ${AvatarImage} {
      box-shadow: 0 5px 50px #33333333;
    }
  }
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
