// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/HomePage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import iteamStylized from './img/iteam_stylized.png'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import OperationsBanner from '../components/Banners/OperationsBanner'
import H1 from '../components/Typography/H1'
import Paragraph from '../components/Typography/Paragraph'
import Link from '../components/Link/Link'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { media } from '../theme'

type Props = Iteam.ApolloBase<IteamCMS.HomePage>

export const HomePageQuery = gql`
  query HomePage {
    pageStart {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      codeMobileImage
      codeText
      codeTitle
      codeLogo
      codeSlug
      codeLinkText
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

  ${media.desktop`
    grid-template-columns: 550px 1fr;
    padding-bottom: 100px;
    padding-top: 100px;
  `};
`

const Texts = styled.div`
  align-items: center;
  display: grid;
  grid-row-gap: 40px;
`

const TextBlock = PaddedRow.extend`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  ${media.desktop`
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `};
`

const StylizedIteam = styled.img`
  display: none;

  ${media.desktop`
    display: block;
  `};
`

const CompanyLogo = styled.img`
  display: block;
  margin-bottom: 20px;
`

const MobileImageWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const MobileImage = styled.img`
  margin-bottom: 20px;
  width: 50%;
`

const Home = () => {
  return (
    <Query query={HomePageQuery}>
      {({ loading, data: { pageStart } }: Props) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
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
                    <MediaQuery maxDeviceWidth={480}>
                      <MobileImageWrap>
                        <MobileImage src={pageStart.codeMobileImage} />
                      </MobileImageWrap>
                    </MediaQuery>
                    <H1>{pageStart.codeTitle}</H1>
                    <Paragraph>{pageStart.codeText}</Paragraph>
                    <CompanyLogo src={pageStart.codeLogo} />
                    <Link to={`/case/${pageStart.codeSlug}`}>
                      {pageStart.codeLinkText}
                    </Link>
                  </TextBlock>

                  <TextBlock>
                    <MediaQuery maxDeviceWidth={480}>
                      <MobileImageWrap>
                        <MobileImage src={pageStart.strategyMobileImage} />
                      </MobileImageWrap>
                    </MediaQuery>
                    <H1>{pageStart.strategyTitle}</H1>
                    <Paragraph>{pageStart.strategyText}</Paragraph>{' '}
                    <CompanyLogo src={pageStart.strategyLogo} />
                    <Link to={`/case/${pageStart.strategySlug}`}>
                      {pageStart.strategyLinkText}
                    </Link>
                  </TextBlock>

                  <TextBlock>
                    <MediaQuery maxDeviceWidth={480}>
                      <MobileImageWrap>
                        <MobileImage src={pageStart.cultureMobileImage} />
                      </MobileImageWrap>
                    </MediaQuery>
                    <H1>{pageStart.cultureTitle}</H1>
                    <Paragraph>{pageStart.cultureText}</Paragraph>{' '}
                    <CompanyLogo src={pageStart.cultureLogo} />
                    <Link to={`/case/${pageStart.cultureSlug}`}>
                      {pageStart.cultureLinkText}
                    </Link>
                  </TextBlock>
                </Texts>
              </Content>
            </HomeGridColumn>

            <OperationsBanner />
            <Team shortName={['met', 'rln', 'msr', 'jmn']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Home
