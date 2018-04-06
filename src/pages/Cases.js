// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/CasesPage'
import GridRow from '../components/Grid/GridRow'
import styled from 'styled-components'
import { filterByLocation } from '../utils/filterByLocation'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import Team from '../components/Team/Team'
import Header from '../components/Header/Header'
import { Query, withApollo } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { CasePageQuery } from './Case'

type Props = {
  client: {
    query: Function,
  },
}

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
const CaseLink = styled(Link)`
  color: #000;
  text-decoration: none;
`
const Case = styled.div``
const CaseImage = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  height: 500px;
  justify-content: center;
  width: 500px;
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

const CasePage = ({ client }: Props) => {
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

            <GridRow>
              <FilterByLocation>
                {location => (
                  <Cases>
                    {cases.filter(filterByLocation(location)).map(workCase => (
                      <CaseLink
                        key={workCase.title}
                        onMouseOver={() =>
                          client.query({
                            query: CasePageQuery,
                            variables: {
                              slug: workCase.slug,
                            },
                          })
                        }
                        to={`/case/${workCase.slug}`}
                      >
                        <Case>
                          <CaseImage>
                            <img src={workCase.thumbnailImage} alt="" />
                          </CaseImage>
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
            </GridRow>

            <Team bgColor="green" shortName={['hrn', 'jmn']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default withApollo(CasePage)
