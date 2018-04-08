// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/TeamPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { filterByLocation } from '../utils/filterByLocation'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import TeamMembers from '../components/Team/TeamMembers'
import TeamPageMember from '../components/Team/TeamPageMember'
import Header from '../components/Header/Header'
import GridColumn from '../components/Grid/GridColumn'

type Props = Iteam.ApolloBase<IteamCMS.TeamPage>

export const TeamPageQuery = gql`
  query TeamPage {
    pageTeam {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
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

const Team = () => {
  return (
    <Query query={TeamPageQuery}>
      {({ loading, data: { pageTeam, team } }: Props) => {
        if (loading) {
          return null
        }

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
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Team
