// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/AboutPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import aboutUsFullImage from './img/bleed_aboutus.jpg'
import aboutUsImage from './img/block_aboutus.png'
import Block from '../components/Blocks/Block'
import Team from '../components/Team/Team'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'

type Props = Iteam.ApolloBase<IteamCMS.AboutPage>

export const AboutPageQuery = gql`
  query AboutPage {
    pageAboutUs {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      funText
      funTitle
      goodText
      goodTitle
      stabilityText
      stabilityTitle
      valueText
      valueTitle
    }
  }
`

const About = () => {
  return (
    <Query query={AboutPageQuery}>
      {({ loading, data: { pageAboutUs } }: Props) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
            <Header
              backgroundImage={pageAboutUs.headerImage}
              messageBgColor={pageAboutUs.headerTextBgColor}
              messageOne={pageAboutUs.headerText1}
              messageTwo={pageAboutUs.headerText2}
            />

            <GridColumn>
              <Block title={pageAboutUs.valueTitle}>
                {pageAboutUs.valueText}
              </Block>
              <Block title={pageAboutUs.funTitle}>{pageAboutUs.funText}</Block>
              <ImageBlock image={aboutUsImage} />
              <Block title={pageAboutUs.goodTitle}>
                {pageAboutUs.goodText}
              </Block>
              <ImageBleed image={aboutUsFullImage} />
              <Block title={pageAboutUs.stabilityTitle}>
                {pageAboutUs.stabilityText}
              </Block>
            </GridColumn>

            <Team bgColor="green" shortName={['rln', 'msr']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default About
