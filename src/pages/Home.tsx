import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet-async'
import { StartQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import Team from '../components/Team/Team'
import howWeWorkImage from './img/illustrations-group-3.svg'

export const HOME_PAGE_QUERY = gql`
  query Start {
    pageStart2019 {
      team
      weAreTitle
      weAreText
      weOfferTitle
      weOfferText
      ourMethodTitle
      ourMethodText
    }
  }
`

class HomeQuery extends Query<StartQuery> {}

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Iteam - There's a better way</title>
        <meta property="og:title" content="Iteam - There's a better way" />
        <meta property="twitter:title" content="Iteam - There's a better way" />
      </Helmet>

      <HomeQuery query={HOME_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageStart2019 } = data

          return (
            <>
              <GridColumn>
                <Block title={pageStart2019.weAreTitle}>
                  {pageStart2019.weAreText}
                </Block>
                <Block title={pageStart2019.weOfferTitle}>
                  {pageStart2019.weOfferText}
                </Block>
                <ImageBlock image={howWeWorkImage} />
                <Block title={pageStart2019.ourMethodTitle}>
                  {pageStart2019.ourMethodText}
                </Block>
              </GridColumn>
              <Team shortName={pageStart2019.team} />
            </>
          )
        }}
      </HomeQuery>
    </>
  )
}

export default Home
