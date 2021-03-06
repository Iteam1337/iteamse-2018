import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet-async'
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
      contactTitle
      funText
      funTitle
      goodText
      goodTitle
      imageBleed
      stabilityIcons
      stabilityText
      stabilityTitle
      team
      valueText
      valueTitle
      valueeText
      valueIteam
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

export class About extends React.Component {
  render() {
    return (
      <AboutQuery query={ABOUT_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageAboutUs } = data

          return (
            <>
              <Helmet>
                <title>Iteam | Om oss</title>
                <meta property="og:title" content="Iteam | Om oss" />
                <meta property="twitter:title" content="Iteam | Om oss" />
                {pageAboutUs.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageAboutUs.headerImage}`}
                  />
                )}
              </Helmet>
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
                <Block title={pageAboutUs.funTitle}>
                  {pageAboutUs.funText}
                </Block>
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
                <Block title={pageAboutUs.valueeText}>
                  {pageAboutUs.valueIteam}
                </Block>
              </GridColumn>
              <Team
                bgColor="green"
                callToAction={pageAboutUs.contactTitle}
                shortName={pageAboutUs.team}
              />
            </>
          )
        }}
      </AboutQuery>
    )
  }
}

export default About
