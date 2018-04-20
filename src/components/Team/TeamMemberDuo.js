// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar, { AvatarImage } from './Avatar'
import Mailto from '../Link/Mailto'
import PhoneNumber from '../Link/PhoneNumber'
import { TeamMemberPageQuery } from '../../pages/TeamMember'
import PrefetchLink from '../Link/PrefetchLink'
import { media } from '../../theme'

type Props = {
  member: IteamCMS.Team_teamMembers,
}

const Colleague = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  text-align: center;
  transition: transform 200ms ease-in-out;

  @media (min-width: 768px) {
    grid-template-columns: 150px 1fr;
    text-align: left;
  }

  ${media.desktop`
    grid-template-columns: 225px 1fr;
  `};

  &:hover {
    transform: translateY(-5px);

    ${AvatarImage} {
      box-shadow: 0 5px 50px #33333333;
    }
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
      <PrefetchLink
        query={TeamMemberPageQuery}
        to={`/teamet/${member.short}`}
        variables={{
          shortName: member.short,
        }}
      >
        <Avatar image={member.avatar} />
      </PrefetchLink>
      <Meta>
        <MetaSection>
          <Title>{member.title}</Title>
          <div>{member.location}</div>
        </MetaSection>
        <Title>{member.name}</Title>
        {member.phoneNumber && (
          <div>
            <PhoneNumber phoneNumber={member.phoneNumber}>
              {member.phoneNumber}
            </PhoneNumber>
          </div>
        )}
        <Mailto email={member.email}>{member.email}</Mailto>
      </Meta>
    </Colleague>
  )
}

export default TeamMemberDuo
