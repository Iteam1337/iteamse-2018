import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { OperationsPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'

export const OPERATIONS_PAGE_QUERY = gql`
  query OperationsPage {
    pageOps {
      body
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      team
      contactTitle
    }
  }
`

class OperationsQuery extends Query<OperationsPageQuery> {}

export class Operations extends React.Component {
  render() {
    return (
      <OperationsQuery query={OPERATIONS_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageOps } = data

          return (
            <>
              <Helmet>
                <title>Iteam | Operations</title>
                <meta name="og:title" content="Iteam | Operations" />
                <meta name="twitter:title" content="Iteam | Operations" />
              </Helmet>
              <Header
                backgroundImage={pageOps.headerImage}
                messageBgColor={pageOps.headerTextBgColor}
                messageOne={pageOps.headerText1}
                messageTwo={null}
              />

              <GridColumn>
                <Block title={pageOps.headerText2}>{pageOps.body}</Block>
              </GridColumn>

              <Team
                bgColor="red"
                shortName={pageOps.team}
                callToAction={pageOps.contactTitle}
              />
            </>
          )
        }}
      </OperationsQuery>
    )
  }
}

export default Operations
