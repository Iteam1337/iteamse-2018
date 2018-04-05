// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Team'
import styled from 'styled-components'
import Avatar from './Avatar'
import Mailto from '../Link/Mailto'

type Props = {
  bgColor: string,
  teamMember: IteamCMS.Team_teamMember[],
}

const Wrap = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 40px;
  padding-right: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
    padding-left: 20px;
    padding-right: 20px;
  }

  a {
    color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
  }
`

const Content = styled.div`
  display: grid;
  grid-gap: 40px;
  padding-bottom: 40px;
  padding-top: 40px;
  text-align: center;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 100px;
    padding-top: 100px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 100px;
    padding-top: 100px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    grid-column: 2;
  }
`

const Coworker = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 150px 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 225px 1fr;
  }
`

const Meta = styled.div``
const MetaBold = styled.strong``
const MetaSection = styled.div`
  margin-bottom: 20px;
`

const TeamMembersDuo = ({ bgColor, teamMember }: Props) => {
  return (
    <Wrap bgColor={bgColor}>
      <Content>
        {teamMember.map(member => (
          <Coworker key={member.email}>
            <Avatar image={member.avatar || member.gravatar} />
            <Meta>
              <MetaSection>
                <MetaBold>{member.title}</MetaBold>
                <div>{member.location}</div>
              </MetaSection>
              <MetaBold>{member.name}</MetaBold>
              <div>{member.phoneNumber}</div>
              <Mailto email={member.email}>{member.email}</Mailto>
            </Meta>
          </Coworker>
        ))}
      </Content>
    </Wrap>
  )
}

export default TeamMembersDuo
