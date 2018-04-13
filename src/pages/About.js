// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/AboutPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header/Header'
import aboutUsImage from './img/block_aboutus.png'
import Block from '../components/Blocks/Block'
import Team from '../components/Team/Team'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import styled from 'styled-components'

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
      imageBleed
      stabilityIcons
      stabilityText
      stabilityTitle
      valueText
      valueTitle
    }
  }
`

const StabilityIcons = styled.div`
  align-items: center;
  display: flex;
  margin-top: 40px;
`

const StabilityIcon = styled.img`
  &:not(:last-child) {
    margin-right: 20px;
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
              <ImageBleed image={pageAboutUs.imageBleed} />
              <Block title={pageAboutUs.stabilityTitle}>
                {pageAboutUs.stabilityText}

                <StabilityIcons>
                  {pageAboutUs.stabilityIcons.map(icon => (
                    <StabilityIcon key={icon} src={icon} alt="" />
                  ))}
                </StabilityIcons>
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
