import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import MediaQuery from 'react-responsive'
import { HomePageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import Header from '../components/Header/Header'
import Link from '../components/Link/Link'
import queryWithLoading from '../components/QueryWithLoading/QueryWithLoading'
import Team from '../components/Team/Team'
import H1 from '../components/Typography/H1'
import Paragraph from '../components/Typography/Paragraph'
import styled from '../theme'
import iteamStylized from './img/iteam_stylized.png'

export const HOME_PAGE_QUERY = gql`
  query HomePage {
    pageStart {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      aiTitle
      aiText
      aiSlug
      aiLinkText
      codeMobileImage
      codeText
      codeTitle
      codeLogo
      codeSlug
      codeLinkText
      contactTitle
      cultureMobileImage
      cultureText
      cultureTitle
      cultureLogo
      cultureSlug
      cultureLinkText
      strategyMobileImage
      strategyText
      strategyTitle
      strategyLogo
      strategySlug
      strategyLinkText
      team
    }
  }
`

const HomeGridColumn = GridColumn.extend`
  background-color: ${({ theme }) => theme.colors.concrete};
`

const Content = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1025px) {
    grid-template-columns: 550px 1fr;
    padding-bottom: 100px;
    padding-top: 100px;
  }
`

const Texts = styled.div`
  align-items: center;
  display: grid;
  grid-row-gap: 40px;
`

const TextBlock = PaddedRow.extend`
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media (min-width: 1025px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`

const NarrowLink = Link.extend`
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    letter-spacing: -0.5px;
  }
`

const AiTextBlock = styled.div``

const StylizedIteam = styled.img`
  display: none;

  @media (min-width: 1025px) {
    display: block;
  }
`

const CompanyLogo = styled.img`
  display: block;
  max-width: 260px;
  margin-top: 20px;

  @media (min-width: 1025px) {
    max-width: 60%;
  }
`

const MobileImageWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const MobileImage = styled.img`
  margin-bottom: 50px;
  width: 50%;
`

class HomeQuery extends Query<HomePageQuery> {}
const HomeQueryWithLoading = queryWithLoading(HomeQuery)

export class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Iteam - There's a better way</title>
          <meta property="og:title" content="Iteam - There's a better way" />
          <meta property="twitter:title" content="Iteam - There's a better way" />
        </Helmet>

        <HomeQueryWithLoading query={HOME_PAGE_QUERY}>
          {({ pageStart }: { pageStart: any }) => {
            return (
              <>
                <Header
                  backgroundImage={pageStart.headerImage}
                  messageBgColor={pageStart.headerTextBgColor}
                  messageOne={pageStart.headerText1}
                  messageTwo={pageStart.headerText2}
                />

                <HomeGridColumn>
                  <Content>
                    <StylizedIteam src={iteamStylized} />
                    <Texts>
                      <TextBlock>
                        {pageStart.codeMobileImage && (
                          <MediaQuery maxDeviceWidth={480}>
                            <MobileImageWrap>
                              <MobileImage src={pageStart.codeMobileImage} />
                            </MobileImageWrap>
                          </MediaQuery>
                        )}
                        <H1>{pageStart.codeTitle}</H1>
                        <Paragraph>{pageStart.codeText}</Paragraph>
                        <NarrowLink to={`/case/${pageStart.codeSlug}`}>
                          {pageStart.codeLinkText}
                        </NarrowLink>
                        {pageStart.codeLogo && (
                          <CompanyLogo src={pageStart.codeLogo} />
                        )}
                      </TextBlock>

                      <TextBlock>
                        {pageStart.strategyMobileImage && (
                          <MediaQuery maxDeviceWidth={480}>
                            <MobileImageWrap>
                              <MobileImage
                                src={pageStart.strategyMobileImage}
                              />
                            </MobileImageWrap>
                          </MediaQuery>
                        )}
                        <H1>{pageStart.strategyTitle}</H1>
                        <Paragraph>{pageStart.strategyText}</Paragraph>{' '}
                        <NarrowLink to={`/case/${pageStart.strategySlug}`}>
                          {pageStart.strategyLinkText}
                        </NarrowLink>
                        {pageStart.strategyLogo && (
                          <CompanyLogo src={pageStart.strategyLogo} />
                        )}
                      </TextBlock>

                      <TextBlock>
                        {pageStart.cultureMobileImage && (
                          <MediaQuery maxDeviceWidth={480}>
                            <MobileImageWrap>
                              <MobileImage src={pageStart.cultureMobileImage} />
                            </MobileImageWrap>
                          </MediaQuery>
                        )}
                        <H1>{pageStart.cultureTitle}</H1>
                        <Paragraph>{pageStart.cultureText}</Paragraph>{' '}
                        <NarrowLink to={`/case/${pageStart.cultureSlug}`}>
                          {pageStart.cultureLinkText}
                        </NarrowLink>
                        {pageStart.cultureLogo && (
                          <CompanyLogo src={pageStart.cultureLogo} />
                        )}
                      </TextBlock>
                    </Texts>
                  </Content>
                </HomeGridColumn>

                <GridColumn>
                  <Block title={pageStart.aiTitle}>
                    <AiTextBlock>{pageStart.aiText}</AiTextBlock>
                    <AiTextBlock>
                      <Link to={`${pageStart.aiSlug}`}>
                        {pageStart.aiLinkText}
                      </Link>
                    </AiTextBlock>
                  </Block>
                </GridColumn>

                <Team
                  callToAction={pageStart.contactTitle}
                  shortName={pageStart.team}
                />
              </>
            )
          }}
        </HomeQueryWithLoading>
      </>
    )
  }
}

export default Home
