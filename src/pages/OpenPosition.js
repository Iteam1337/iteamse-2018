// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/OpenPositionPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'

type Props = {
  match: {
    params: {
      id: string,
    },
  },
}

type QueryProps = Iteam.ApolloBase<IteamCMS.OpenPositionPage>

const OpenPositionPageQuery = gql`
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
      role
      roleTitle
      technicalities
      technicalitiesTitle
      title
    }
  }
`

const Work = ({ match }: Props) => {
  return (
    <Query query={OpenPositionPageQuery} variables={{ id: match.params.id }}>
      {({ loading, data: { pageOpenPosition } }: QueryProps) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
            <Header
              backgroundImage={pageOpenPosition.headerImage}
              messageBgColor={pageOpenPosition.headerTextBgColor}
              messageOne={pageOpenPosition.headerText1}
              messageTwo={pageOpenPosition.headerText2}
            />

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

            <Block concrete title={pageOpenPosition.aboutUsTitle}>
              {pageOpenPosition.aboutUs}
            </Block>

            <Block title={pageOpenPosition.technicalitiesTitle}>
              {pageOpenPosition.technicalities}
            </Block>

            <Block title={pageOpenPosition.applicationTitle}>
              {pageOpenPosition.application}
            </Block>
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Work
