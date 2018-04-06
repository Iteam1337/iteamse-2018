// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/HomePage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import iteamStylized from './img/iteam_stylized.png'
import logoAf from './img/logo_af.png'
import logoTsab from './img/logo_tsab.png'
import logoSeb from './img/logo_seb.png'
import Header from '../components/Header/Header'
import Team from '../components/Team/Team'
import GridRow from '../components/Grid/GridRow'
import GridContent from '../components/Grid/GridContent'
import OperationsBanner from '../components/Banners/Operations'
import H1 from '../components/Typography/H1'
import Paragraph from '../components/Typography/Paragraph'
import Link from '../components/Link/Link'
import styled from 'styled-components'

type Props = Iteam.ApolloBase<IteamCMS.HomePage>

export const HomePageQuery = gql`
  query HomePage {
    pageStart {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      codeText
      codeTitle
      cultureText
      cultureTitle
      strategyText
      strategyTitle
    }
  }
`

const Content = GridContent.extend`
  grid-column-gap: 40px;
  grid-template-columns: 1fr;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1024px) {
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

const TextBlock = styled.div``

const StylizedIteam = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const CompanyLogo = styled.img`
  display: block;
  margin-bottom: 20px;
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

            <GridRow>
              <Content>
                <StylizedIteam src={iteamStylized} alt="" />
                <Texts>
                  <TextBlock>
                    <H1>{pageStart.codeTitle}</H1>
                    <Paragraph>{pageStart.codeText}</Paragraph>
                    <CompanyLogo src={logoAf} alt="" />
                    <Link to="/case/arbetsformedlingen">
                      Läs om hur vi hjälper Arbetsförmedlingen med kod
                    </Link>
                  </TextBlock>
                  <TextBlock>
                    <H1>{pageStart.strategyTitle}</H1>
                    <Paragraph>{pageStart.strategyText}</Paragraph>{' '}
                    <CompanyLogo src={logoTsab} alt="" />
                    <Link to="/case/tsab">
                      Läs om hur vi hjälper Taxi Stockholm med strategi
                    </Link>
                  </TextBlock>
                  <TextBlock>
                    <H1>{pageStart.cultureTitle}</H1>
                    <Paragraph>{pageStart.cultureText}</Paragraph>{' '}
                    <CompanyLogo src={logoSeb} alt="" />
                    <Link to="/case/seb">
                      Läs om hur vi hjälper SEB med kultur
                    </Link>
                  </TextBlock>
                </Texts>
              </Content>
            </GridRow>

            <OperationsBanner />
            <Team shortName={['met', 'rln']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Home
