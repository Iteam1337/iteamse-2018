// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/CasesPage'
import GridColumn from '../components/Grid/GridColumn'
import styled from 'styled-components'
import { filterByLocation } from '../utils/filterByLocation'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import Team from '../components/Team/Team'
import Header from '../components/Header/Header'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { CasePageQuery } from './Case'
import PrefetchLink from '../components/Link/PrefetchLink'

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

const Cases = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
`

const CaseLink = styled(PrefetchLink)`
  color: #000;
  text-decoration: none;
`

const Case = styled.div``

const CaseImageWrap = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  height: 500px;
  justify-content: center;
  width: 500px;
`

const CaseImage = styled.img`
  max-width: 90%;
`

const Meta = styled.div`
  margin-top: 30px;
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
              <FilterByLocation>
                {location => (
                  <Cases>
                    {cases.filter(filterByLocation(location)).map(workCase => (
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
                )}
              </FilterByLocation>
            </GridColumn>

            <Team bgColor="green" shortName={['hrn', 'jmn']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default CasePage
