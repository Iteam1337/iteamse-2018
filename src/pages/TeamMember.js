// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/CasePage'
import Team from '../components/Team/Team'
import Header from '../components/Header/Header'
import Block from '../components/Blocks/Block'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import GridColumn from '../components/Grid/GridColumn'

type Props = {
  match: {
    params: {
      shortName: string,
    },
  },
}
type QueryProps = Iteam.ApolloBase<IteamCMS.CasePage>

export const TeamMemberPageQuery = gql`
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
      title
      why
      whyTitle
    }
  }
`

const TeamMemberPage = ({ match }: Props) => {
  return (
    <Query
      query={TeamMemberPageQuery}
      variables={{ shortName: match.params.shortName }}
    >
      {({ loading, data: { teamMember } }: QueryProps) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
            <Header
              backgroundImage={teamMember.headerImage}
              messageBgColor={teamMember.headerTextBgColor}
              messageOne={teamMember.name}
              messageTwo={teamMember.title}
            />

            <GridColumn>
              <Breadcrumbs title={teamMember.name} />

              <Block title="Kontakt">{teamMember.email}</Block>

              <Block title={teamMember.whyTitle}>{teamMember.why}</Block>
              <Block title={teamMember.backgroundTitle}>
                {teamMember.background}
              </Block>
              <Block title={teamMember.competenceTitle}>
                {teamMember.competence}
              </Block>
            </GridColumn>

            <Team bgColor="green" shortName={['hrn', 'jmn']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default TeamMemberPage
