import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { OpenPositionPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'

export const OPEN_POSITION_PAGE_QUERY = gql`
  query OpenPositionPage($id: String!) {
    pageOpenPosition(id: $id) {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      application
      applicationTitle
      aboutUs
      aboutUsTitle
      bonusKnowledge
      bonusKnowledgeTitle
      contentImage
      knowledge
      knowledgeTitle
      location
      perks
      perksTitle
      role
      roleTitle
      team
      technicalities
      technicalitiesTitle
      title
    }
  }
`

class OpenPositionQuery extends Query<OpenPositionPageQuery> {}

const OpenPosition: React.SFC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  return (
    <OpenPositionQuery
      query={OPEN_POSITION_PAGE_QUERY}
      variables={{ id: match.params.id }}
    >
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { pageOpenPosition } = data

        return (
          <>
            <Header
              backgroundImage={pageOpenPosition.headerImage}
              messageBgColor={pageOpenPosition.headerTextBgColor}
              messageOne={pageOpenPosition.headerText1}
              messageTwo={pageOpenPosition.headerText2}
            />

            <GridColumn>
              <Breadcrumbs title={pageOpenPosition.roleTitle} />

              <Block title={pageOpenPosition.roleTitle}>
                {pageOpenPosition.role}
              </Block>

              <Block title={pageOpenPosition.knowledgeTitle}>
                {pageOpenPosition.knowledge}
              </Block>

              <Block title={pageOpenPosition.bonusKnowledgeTitle}>
                {pageOpenPosition.bonusKnowledge}
              </Block>

              <ImageBleed image={pageOpenPosition.contentImage} />

              <Block title={pageOpenPosition.aboutUsTitle}>
                {pageOpenPosition.aboutUs}
              </Block>

              <Block title={pageOpenPosition.perksTitle}>
                {pageOpenPosition.perks}
              </Block>

              <Block title={pageOpenPosition.technicalitiesTitle}>
                {pageOpenPosition.technicalities}
              </Block>

              <Block title={pageOpenPosition.applicationTitle}>
                {pageOpenPosition.application}
              </Block>
            </GridColumn>

            <Team bgColor="green" shortName={pageOpenPosition.team} />
          </>
        )
      }}
    </OpenPositionQuery>
  )
}

export default withRouter(OpenPosition)
