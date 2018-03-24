// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/OperationsPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import Content from '../components/Grid/Content'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'

type Props = Iteam.ApolloBase<IteamCMS.OperationsPage>

const OperationsPageQuery = gql`
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

            <Content>
              <Block title={pageOps.aboutTitle}>{pageOps.aboutText}</Block>
            </Content>

            <ImageBleed image={pageOps.contentImage} />

            <Content concrete>
              <Block title={pageOps.networkTitle}>{pageOps.networkText}</Block>

              <Block title={pageOps.softwareTitle}>
                {pageOps.softwareText}
              </Block>

              <Block title={pageOps.hardwareTitle}>
                {pageOps.hardwareText}
              </Block>
            </Content>
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Operations
