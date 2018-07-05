import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { AiPageQuery } from '../../typings/iteamse'
import AiTable from '../components/Blocks/AiTable'
import Block from '../components/Blocks/Block'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'

export const AI_PAGE_QUERY = gql`
  query AiPage {
    pageAi {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      team
      aboutTitle
      aboutText
      contentImage
      offersText
      offersTitle
      contactTitle
    }
  }
`

class AiQuery extends Query<AiPageQuery> {}

const Ai = () => {
  return (
    <AiQuery query={AI_PAGE_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { pageAi } = data

        return (
          <React.Fragment>
            <Header
              backgroundImage={pageAi.headerImage}
              messageBgColor={pageAi.headerTextBgColor}
              messageOne={pageAi.headerText1}
              messageTwo={pageAi.headerText2}
            />

            <GridColumn>
              <Block title={pageAi.aboutTitle}>{pageAi.aboutText}</Block>

              <AiTable title={pageAi.offersTitle} body={pageAi.offersText} />
            </GridColumn>

            <Team
              bgColor="red"
              shortName={pageAi.team}
              callToAction={pageAi.contactTitle}
            />
          </React.Fragment>
        )
      }}
    </AiQuery>
  )
}

export default Ai