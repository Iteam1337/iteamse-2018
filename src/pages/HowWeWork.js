// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/HowWeWorkPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import howWeWorkImage from './img/block_howwework.png'
import howWeWorkFullImage from './img/bleed_howwework.jpg'
import howWeWorkImage2 from './img/block_howwework2.png'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import styled from 'styled-components'

type Props = Iteam.ApolloBase<IteamCMS.HowWeWorkPage>

export const HowWeWorkPageQuery = gql`
  query HowWeWorkPage {
    pageHowWeWork {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      customersText
      customersTitle
      hiringTitle
      methodText
      methodTitle
      sharingText
      sharingTitle
      teamText
      teamTitle
    }
  }
`

const Content = styled.div`
  display: grid;
  grid-row-gap: 40px;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1024px) {
    grid-row-gap: 100px;
    padding-bottom: 100px;
    padding-top: 100px;
  }
`

const HowWeWork = () => {
  return (
    <Query query={HowWeWorkPageQuery}>
      {({ loading, data: { pageHowWeWork } }: Props) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
            <Header
              backgroundImage={pageHowWeWork.headerImage}
              messageBgColor={pageHowWeWork.headerTextBgColor}
              messageOne={pageHowWeWork.headerText1}
              messageTwo={pageHowWeWork.headerText2}
            />
            <Content>
              <Block title={pageHowWeWork.teamTitle}>
                {pageHowWeWork.teamText}
              </Block>
              <ImageBlock image={howWeWorkImage} />
              <Block title={pageHowWeWork.methodTitle}>
                {pageHowWeWork.methodText}
              </Block>
              <ImageBleed image={howWeWorkFullImage} />
              <Block title={pageHowWeWork.sharingTitle}>
                {pageHowWeWork.sharingText}
              </Block>
              <ImageBlock image={howWeWorkImage2} />
              <Block title={pageHowWeWork.customersTitle}>
                {pageHowWeWork.customersText}
              </Block>
            </Content>
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default HowWeWork
