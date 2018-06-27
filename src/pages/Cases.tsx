import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { CasesPageQuery } from '../../typings/iteamse'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import Header from '../components/Header/Header'
import PrefetchLink from '../components/Link/PrefetchLink'
import Team from '../components/Team/Team'
import { set } from '../utils/googleAnalytics'
import { CASE_PAGE_QUERY } from './Case'

export const CASES_PAGE_QUERY = gql`
  query CasesPage {
    pageCases {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      team
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

  @media (min-width: 1025px) {
    grid-column-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const CaseImageWrap = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    height: 500px;
    width: 500px;
  }
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

class CasesQuery extends Query<CasesPageQuery> {}

export const CasePage = () => {
  return (
    <>
      <Helmet>
        <title>Iteam - There's a better way | Case</title>
      </Helmet>
      <CasesQuery query={CASES_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageCases, cases } = data

          return (
            <>
              <Header
                backgroundImage={pageCases.headerImage}
                messageBgColor={pageCases.headerTextBgColor}
                messageOne={pageCases.headerText1}
                messageTwo={pageCases.headerText2}
              />

              <GridColumn>
                <Cases>
                  {cases.map(workCase => {
                    if (!workCase) {
                      return null
                    }

                    return (
                      <CaseLink
                        query={CASE_PAGE_QUERY}
                        key={workCase.title}
                        onClick={() => set(`/case/${workCase.slug}`)}
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
                    )
                  })}
                </Cases>
              </GridColumn>

              <Team
                bgColor="green"
                callToAction={pageCases.contactTitle}
                shortName={pageCases.team}
              />
            </>
          )
        }}
      </CasesQuery>
    </>
  )
}

export default CasePage
