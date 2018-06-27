import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { OperationsPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import opsImage from './img/illustrations-group-4.svg'

export const OPERATIONS_PAGE_QUERY = gql`
  query OperationsPage {
    pageOps {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      aboutText
      aboutTitle
      contentImage
      hardwareText
      hardwareTitle
      networkText
      networkTitle
      softwareText
      softwareTitle
      team
      contactTitle
    }
  }
`

class OperationsQuery extends Query<OperationsPageQuery> {}

const Operations = () => {
  return (
    <>
      <Helmet>
        <title>Iteam - There's a better way | Om oss</title>
      </Helmet>
      <OperationsQuery query={OPERATIONS_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageOps } = data

          return (
            <React.Fragment>
              <Header
                backgroundImage={pageOps.headerImage}
                messageBgColor={pageOps.headerTextBgColor}
                messageOne={pageOps.headerText1}
                messageTwo={pageOps.headerText2}
              />

              <GridColumn>
                <Block title={pageOps.aboutTitle}>{pageOps.aboutText}</Block>

                <ImageBleed image={pageOps.contentImage} />

                <Block title={pageOps.networkTitle}>
                  {pageOps.networkText}
                </Block>

                <ImageBlock image={opsImage} />

                <Block title={pageOps.softwareTitle}>
                  {pageOps.softwareText}
                </Block>

                <Block title={pageOps.hardwareTitle}>
                  {pageOps.hardwareText}
                </Block>
              </GridColumn>

              <Team
                bgColor="red"
                shortName={pageOps.team}
                callToAction={pageOps.contactTitle}
              />
            </React.Fragment>
          )
        }}
      </OperationsQuery>
    </>
  )
}

export default Operations
