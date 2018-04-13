// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/OperationsPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import opsImage from './img/illustrations-group-4.svg'
import GridColumn from '../components/Grid/GridColumn'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import Team from '../components/Team/Team'

type Props = Iteam.ApolloBase<IteamCMS.OperationsPage>

export const OperationsPageQuery = gql`
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
    }
  }
`

const Operations = () => {
  return (
    <Query query={OperationsPageQuery}>
      {({ loading, data: { pageOps } }: Props) => {
        if (loading) {
          return null
        }

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

              <Block concrete title={pageOps.networkTitle}>
                {pageOps.networkText}
              </Block>

              <ImageBlock image={opsImage} />

              <Block concrete title={pageOps.softwareTitle}>
                {pageOps.softwareText}
              </Block>

              <Block concrete title={pageOps.hardwareTitle}>
                {pageOps.hardwareText}
              </Block>
            </GridColumn>

            <Team bgColor="red" shortName={['rln', 'msr']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Operations
