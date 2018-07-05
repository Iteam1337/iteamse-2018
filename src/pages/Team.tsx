import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { TeamPageQuery } from '../../typings/iteamse'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import TeamMembers from '../components/Team/TeamMembers'
import TeamPageMember from '../components/Team/TeamPageMember'
import { filterByLocation } from '../utils/filterByLocation'
import { set } from '../utils/googleAnalytics'

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

export class TeamPage extends React.Component {
  componentDidMount() {
    set('teamet')
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Iteam - There's a better way | Teamet</title>
        </Helmet>
        <TeamQuery query={TEAM_PAGE_QUERY}>
          {({ loading, data }) => {
            if (loading || !data) {
              return null
            }

            const { pageTeam, team } = data

            return (
              <React.Fragment>
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
              </React.Fragment>
            )
          }}
        </TeamQuery>
      </>
    )
  }
}

export default TeamPage
