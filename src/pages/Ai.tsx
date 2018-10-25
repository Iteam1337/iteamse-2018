import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet'
import { AiPageQuery } from '../../typings/iteamse'
import AiTable from '../components/Blocks/AiTable'
import Block from '../components/Blocks/Block'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import queryWithLoading from '../components/QueryWithLoading/QueryWithLoading'
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

class AiQuery extends Query<AiPageQuery> { }
const AiQueryWithLoading = queryWithLoading(AiQuery)

export class Ai extends React.Component {
  render() {
    return (
      <AiQueryWithLoading query={AI_PAGE_QUERY}>
        {({ pageAi }: { pageAi: any }) => {
          return (
            <>
              <Helmet>
                <title>Iteam | AI</title>
                <meta property="og:title" content="Iteam | AI" />
                <meta property="twitter:title" content="Iteam | AI" />
                {pageAi.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageAi.headerImage}`}
                  />
                )}
              </Helmet>
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
            </>
          )
        }}
      </AiQueryWithLoading>
    )
  }
}

export default Ai
