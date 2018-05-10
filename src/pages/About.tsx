import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { AboutPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import ImageBleed from '../components/Blocks/ImageBleed'
import ImageBlock from '../components/Blocks/ImageBlock'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import styled from '../theme'
import aboutUsImage from './img/illustrations-group-1.svg'

export const ABOUT_PAGE_QUERY = gql`
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
  max-width: 145px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`

class AboutQuery extends Query<AboutPageQuery> {}

const About = () => {
  return (
    <AboutQuery query={ABOUT_PAGE_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { pageAboutUs } = data

        return (
          <>
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
                  {pageAboutUs.stabilityIcons.map(icon => {
                    return typeof icon === 'string' ? (
                      <StabilityIcon alt="" key={icon} src={icon} />
                    ) : null
                  })}
                </StabilityIcons>
              </Block>
            </GridColumn>

            <Team bgColor="green" shortName={['rln', 'msr']} />
          </>
        )
      }}
    </AboutQuery>
  )
}

export default About
