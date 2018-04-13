// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/HowWeWorkPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import howWeWorkImage from './img/illustrations-group-3.svg'
import howWeWorkImage2 from './img/illustrations-group-2.svg'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import Team from '../components/Team/Team'

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
      imageBleed
      methodText
      methodTitle
      sharingText
      sharingTitle
      teamText
      teamTitle
    }
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

            <GridColumn>
              <Block title={pageHowWeWork.teamTitle}>
                {pageHowWeWork.teamText}
              </Block>
              <ImageBlock image={howWeWorkImage} />
              <Block title={pageHowWeWork.methodTitle}>
                {pageHowWeWork.methodText}
              </Block>
              <ImageBleed image={pageHowWeWork.imageBleed} />
              <Block title={pageHowWeWork.sharingTitle}>
                {pageHowWeWork.sharingText}
              </Block>
              <ImageBlock image={howWeWorkImage2} />
              <Block title={pageHowWeWork.customersTitle}>
                {pageHowWeWork.customersText}
              </Block>
            </GridColumn>

            <Team bgColor="blue" shortName={['rln', 'msr']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default HowWeWork
