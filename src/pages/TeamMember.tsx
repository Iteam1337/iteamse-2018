import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
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
import { set } from '../utils/googleAnalytics'

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

export class TeamMemberPage extends React.Component<
  RouteComponentProps<{ match: string; shortName: string }>
> {
  componentDidMount() {
    set(this.props.location.pathname)
  }

  render() {
    const { match } = this.props
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

          if (!teamMember) {
            return <div>Teammedlemmen existerar inte</div>
          }

          return (
            <>
              <Helmet>
                <title>Iteam | {teamMember.name}</title>
                <meta name="og:title" content={`Iteam | ${teamMember.name}`} />
                <meta
                  name="twitter:title"
                  content={`Iteam | ${teamMember.name}`}
                />
                {teamMember.headerImage && (
                  <meta
                    name="og:image"
                    content={`https:${teamMember.headerImage}`}
                  />
                )}
              </Helmet>
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
                        <Mailto email={teamMember.email}>
                          {teamMember.email}
                        </Mailto>
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
            </>
          )
        }}
      </TeamMemberQuery>
    )
  }
}

export default withRouter(TeamMemberPage)
