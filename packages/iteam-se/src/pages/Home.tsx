import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet-async'
import { StartQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import CTABlock from '../components/Blocks/CTABlock'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import HomeHeader from '../components/Header/HomeHeader'
import Team from '../components/Team/Team'
import howWeWorkImage from './img/illustrations-group-3.svg'

export const HOME_PAGE_QUERY = gql`
  query Start {
    pageStart2019 {
      team
      headerText1
      headerLead
      weAreTitle
      weAreText
      weOfferTitle
      weOfferText
      ourMethodTitle
      ourMethodText
      ctaButtonText
      ctaTitle
      ctaText
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
              <HomeHeader
                title={pageStart2019.headerText1}
                lead={pageStart2019.headerLead}
              />
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
              <CTABlock
                title={pageStart2019.ctaTitle}
                buttonText={pageStart2019.ctaButtonText}
              >
                {pageStart2019.ctaText}
              </CTABlock>
              <Team shortName={pageStart2019.team} />
            </>
          )
        }}
      </HomeQuery>
    </>
  )
}

export default Home
