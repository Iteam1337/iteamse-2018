import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { TeamPageQuery } from '../../typings/iteamse'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import queryWithLoading from '../components/QueryWithLoading/QueryWithLoading'
import Team from '../components/Team/Team'
import TeamMembers from '../components/Team/TeamMembers'
import TeamPageMember from '../components/Team/TeamPageMember'
import { filterByLocation } from '../utils/filterByLocation'

export const TEAM_PAGE_QUERY = gql`
  query TeamPage {
    pageTeam {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      team
    }
    team {
      avatar
      email
      location
      name
      phoneNumber
      short
      title
    }
  }
`

class TeamQuery extends Query<TeamPageQuery> {}
const TeamQueryWithLoading = queryWithLoading(TeamQuery)

export class TeamPage extends React.Component {
  render() {
    return (
      <TeamQueryWithLoading query={TEAM_PAGE_QUERY}>
        {({ pageTeam, team }: { pageTeam: any, team: any[] }) => {
          return (
            <>
              <Helmet>
                <title>Iteam | Medarbetare</title>
                <meta property="og:title" content="Iteam | Medarbetare" />
                <meta property="twitter:title" content="Iteam | Medarbetare" />
                {pageTeam.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageTeam.headerImage}`}
                  />
                )}
              </Helmet>
              <Header
                backgroundImage={pageTeam.headerImage}
                messageBgColor={pageTeam.headerTextBgColor}
                messageOne={pageTeam.headerText1}
                messageTwo={pageTeam.headerText2}
              />

              <GridColumn>
                <FilterByLocation>
                  {location => (
                    <TeamMembers bgColor="#fff" teamMembers={team.length}>
                      {team
                        .filter(filterByLocation(location))
                        .map(member => (
                          <TeamPageMember key={member.name} member={member} />
                        ))}
                    </TeamMembers>
                  )}
                </FilterByLocation>
              </GridColumn>

              <Team
                bgColor="red"
                callToAction={pageTeam.contactTitle}
                shortName={pageTeam.team}
              />
            </>
          )
        }}
      </TeamQueryWithLoading>
    )
  }
}

export default TeamPage
