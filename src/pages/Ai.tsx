import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet'
import { AiPageQuery } from '../../typings/iteamse'
import AiTable from '../components/Blocks/AiTable'
import Block from '../components/Blocks/Block'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import { set } from '../utils/googleAnalytics'

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

export class Ai extends React.Component {
  componentDidMount() {
    set('ai')
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Iteam - There's a better way |AI</title>
          <meta name="og:title" content="Iteam - There's a better way | AI" />
          <meta
            name="twitter:title"
            content="Iteam - There's a better way | AI"
          />
        </Helmet>
        <AiQuery query={AI_PAGE_QUERY}>
          {({ loading, data }) => {
            if (loading || !data) {
              return null
            }

            const { pageAi } = data

            return (
              <>
                <Header
                  backgroundImage={pageAi.headerImage}
                  messageBgColor={pageAi.headerTextBgColor}
                  messageOne={pageAi.headerText1}
                  messageTwo={pageAi.headerText2}
                />

                <GridColumn>
                  <Block title={pageAi.aboutTitle}>{pageAi.aboutText}</Block>

                  <AiTable
                    title={pageAi.offersTitle}
                    body={pageAi.offersText}
                  />
                </GridColumn>

                <Team
                  bgColor="red"
                  shortName={pageAi.team}
                  callToAction={pageAi.contactTitle}
                />
              </>
            )
          }}
        </AiQuery>
      </>
    )
  }
}

export default Ai
