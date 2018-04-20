// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/CasesPage'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import styled from 'styled-components'
import Team from '../components/Team/Team'
import Header from '../components/Header/Header'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { CasePageQuery } from './Case'
import PrefetchLink from '../components/Link/PrefetchLink'
import { media } from '../theme'

type QueryProps = Iteam.ApolloBase<IteamCMS.CasesPage>

export const CasesPageQuery = gql`
  query CasesPage {
    pageCases {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
    }
    cases {
      location
      shortDescription
      slug
      thumbnailImage
      title
    }
  }
`

const Cases = PaddedRow.extend`
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;

  ${media.desktop`
    grid-column-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  `};
`

const CaseImageWrap = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;

  ${media.desktop`
    height: 500px;
    width: 500px;
  `};
`

const CaseImage = styled.img`
  max-width: 90%;
`

const Meta = styled.div`
  border-left: 0px solid ${({ theme }) => theme.colors.aquamarine};
  margin-top: 30px;
  transition-property: border-left-width, padding-left;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`

const CaseLink = styled(PrefetchLink)`
  color: #000;
  text-decoration: none;
`

const Case = styled.div`
  &:hover {
    ${Meta} {
      border-left-width: 10px;
      padding-left: 10px;
    }
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

const ShortDescription = styled.div`
  font-size: 25px;
  font-weight: 300;
`

export const CasePage = () => {
  return (
    <Query query={CasesPageQuery}>
      {({ loading, data: { pageCases, cases } }: QueryProps) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
            <Header
              backgroundImage={pageCases.headerImage}
              messageBgColor={pageCases.headerTextBgColor}
              messageOne={pageCases.headerText1}
              messageTwo={pageCases.headerText2}
            />

            <GridColumn>
              <Cases>
                {cases.map(workCase => (
                  <CaseLink
                    query={CasePageQuery}
                    key={workCase.title}
                    to={`/case/${workCase.slug}`}
                    variables={{
                      slug: workCase.slug,
                    }}
                  >
                    <Case>
                      <CaseImageWrap>
                        {workCase.thumbnailImage && (
                          <CaseImage src={workCase.thumbnailImage} alt="" />
                        )}
                      </CaseImageWrap>
                      <Meta>
                        <Title>{workCase.title}</Title>
                        <ShortDescription>
                          {workCase.shortDescription}
                        </ShortDescription>
                      </Meta>
                    </Case>
                  </CaseLink>
                ))}
              </Cases>
            </GridColumn>

            <Team bgColor="green" shortName={['hrn', 'jmn']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default CasePage
