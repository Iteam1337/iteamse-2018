import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { CasesPageQuery } from '../../typings/iteamse'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import Header from '../components/Header/Header'
import PrefetchLink from '../components/Link/PrefetchLink'
import Team from '../components/Team/Team'
import styled from '../theme'
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

const Cases = styled(PaddedRow)`
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-column-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    > * {
      flex: 1 0 50%;
      box-sizing: border-box;
    }

    > a {
      display: block;
      margin-bottom: 25px;
    }
  `)};
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

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    max-width: 396px;
    border: none;
  `)};
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

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    max-width: 496px;
  `)};
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

export class CasePage extends React.Component {
  render() {
    return (
      <CasesQuery query={CASES_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageCases, cases } = data

          return (
            <>
              <Helmet>
                <title>Iteam | Case</title>
                <meta property="og:title" content="Iteam | Case" />
                <meta property="twitter:title" content="Iteam | Case" />
                {pageCases.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageCases.headerImage}`}
                  />
                )}
              </Helmet>
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
    )
  }
}

export default CasePage
