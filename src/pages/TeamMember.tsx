import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { TeamMemberPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Mailto from '../components/Link/Mailto'
import PhoneNumber from '../components/Link/PhoneNumber'
import UnstyledList from '../components/List/UnstyledList'
import Team from '../components/Team/Team'
import styled from '../theme'

export const TEAM_MEMBER_PAGE_QUERY = gql`
  query TeamMemberPage($shortName: String!) {
    teamMember(shortName: $shortName) {
      avatar
      background
      backgroundTitle
      competence
      competenceTitle
      email
      headerImage
      headerTextBgColor
      location
      name
      phoneNumber
      team
      title
      why
      whyTitle
    }
  }
`

const TeamMember = styled.div`
  h1:first-of-type {
    font-weight: 300;
  }
`

class TeamMemberQuery extends Query<TeamMemberPageQuery> {}

const TeamMemberPage: React.SFC<RouteComponentProps<{ shortName: string }>> = ({
  match,
}) => {
  return (
    <TeamMemberQuery
      query={TEAM_MEMBER_PAGE_QUERY}
      variables={{ shortName: match.params.shortName }}
    >
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { teamMember } = data

        return (
          <TeamMember>
            <Header
              backgroundImage={teamMember.headerImage}
              messageBgColor={teamMember.headerTextBgColor}
              messageOne={teamMember.name}
              messageTwo={teamMember.title}
            />

            <GridColumn>
              <Breadcrumbs title={teamMember.name} />

              <Block title="Kontakt">
                <UnstyledList>
                  {teamMember.phoneNumber && (
                    <li>
                      <PhoneNumber phoneNumber={teamMember.phoneNumber}>
                        {teamMember.phoneNumber}
                      </PhoneNumber>
                    </li>
                  )}
                  <li>
                    <Mailto email={teamMember.email}>{teamMember.email}</Mailto>
                  </li>
                </UnstyledList>
              </Block>

              <Block title={teamMember.whyTitle}>{teamMember.why}</Block>

              <Block title={teamMember.backgroundTitle}>
                {teamMember.background}
              </Block>

              <Block title={teamMember.competenceTitle}>
                {teamMember.competence}
              </Block>
            </GridColumn>

            <Team bgColor="green" shortName={teamMember.team} />
          </TeamMember>
        )
      }}
    </TeamMemberQuery>
  )
}

export default withRouter(TeamMemberPage)