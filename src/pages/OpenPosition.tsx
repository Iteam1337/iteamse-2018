import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { OpenPositionPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import queryWithLoading from '../components/QueryWithLoading/QueryWithLoading'
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
      contactTitle
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
const OpenPositionQueryWithLoading = queryWithLoading(OpenPositionQuery)

export class OpenPosition extends React.Component<
  RouteComponentProps<{ id: string; match: string }>
> {
  render() {
    const { match } = this.props
    return (
      <OpenPositionQueryWithLoading
        query={OPEN_POSITION_PAGE_QUERY}
        variables={{ id: match.params.id }}
      >
        {({ pageOpenPosition }: { pageOpenPosition: any }) => {
          return (
            <>
              <Helmet>
                <title>
                  Iteam | {pageOpenPosition.headerText1} | {
                    pageOpenPosition.headerText2
                  }
                </title>
                <meta
                  property="og:title"
                  content={`Iteam | ${pageOpenPosition.headerText1} | ${
                    pageOpenPosition.headerText2
                  }`}
                />
                <meta
                  property="twitter:title"
                  content={`Iteam | ${pageOpenPosition.headerText1} | ${
                    pageOpenPosition.headerText2
                  }`}
                />
                {pageOpenPosition.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageOpenPosition.headerImage}`}
                  />
                )}
              </Helmet>
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

              <Team
                bgColor="green"
                callToAction={pageOpenPosition.contactTitle}
                shortName={pageOpenPosition.team}
              />
            </>
          )
        }}
      </OpenPositionQueryWithLoading>
    )
  }
}

export default withRouter(OpenPosition)
