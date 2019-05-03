import * as React from 'react'
import { TeamQuery } from '../../../typings/iteamse'
import { TEAM_MEMBER_PAGE_QUERY } from '../../pages/TeamMember'
import styled from '../../theme'
import Mailto from '../Link/Mailto'
import PhoneNumber from '../Link/PhoneNumber'
import PrefetchLink from '../Link/PrefetchLink'
import Avatar, { AvatarImage } from './Avatar'

interface TeamMemberDuoProps {
  member: TeamQuery['teamMembers'][0]
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

  @media (min-width: 1025px) {
    grid-template-columns: 225px 1fr;
  }

  &:hover {
    transform: translateY(-5px);

    ${AvatarImage} {
      box-shadow: 0 5px 50px #33333333;
    }
  }

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    flex: 1 0 50%;

    display: flex;

    > * + * {
      padding-left: 40px;
    }
  `)};
`

const Meta = styled.div``
const Title = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
`

const Name = styled.div``

const TeamMemberDuo: React.SFC<TeamMemberDuoProps> = ({ member }) => {
  return (
    <Colleague>
      <PrefetchLink
        query={TEAM_MEMBER_PAGE_QUERY}
        to={`/medarbetare/${member.short}`}
        variables={{
          shortName: member.short,
        }}
      >
        <Avatar alt={member.name} image={member.avatar} />
      </PrefetchLink>
      <Meta>
        <Title>{member.title}</Title>
        <Name>{member.name}</Name>
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
