import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { WorkPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import StyledPrefetchLink from '../components/Link/StyledPrefetchLink'
import queryWithLoading from '../components/QueryWithLoading/QueryWithLoading'
import Team from '../components/Team/Team'
import { filterByLocation } from '../utils/filterByLocation'
import { OPEN_POSITION_PAGE_QUERY } from './OpenPosition'

export const WORK_PAGE_QUERY = gql`
  query WorkPage {
    pageWork {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      openApplicationText
      openApplicationLabel
      team
    }
    openpositions {
      id
      location
      role
      title
    }
  }
`

class WorkQuery extends Query<WorkPageQuery> {}
const WorkQueryWithLoading = queryWithLoading(WorkQuery)

export class Work extends React.Component {
  render() {
    return (
      <WorkQueryWithLoading query={WORK_PAGE_QUERY}>
        {({ openpositions, pageWork }: { openpositions: any[], pageWork: any }) => {
          return (
            <>
              <Helmet>
                <title>Iteam | Jobba hos oss</title>
                <meta property="og:title" content="Iteam | Jobba hos oss" />
                <meta property="twitter:title" content="Iteam | Jobba hos oss" />
                {pageWork.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageWork.headerImage}`}
                  />
                )}
              </Helmet>
              <Header
                backgroundImage={pageWork.headerImage}
                messageBgColor={pageWork.headerTextBgColor}
                messageOne={pageWork.headerText1}
                messageTwo={pageWork.headerText2}
              />

              <GridColumn>
                <FilterByLocation>
                  {location => (
                    <>
                      {openpositions
                        .filter(filterByLocation(location))
                        .map(annons => (
                          <Block
                            data-test="location"
                            key={annons.title}
                            readMore={
                              <StyledPrefetchLink
                                query={OPEN_POSITION_PAGE_QUERY}
                                to={`/jobba-hos-oss/${annons.id}`}
                                variables={{
                                  id: annons.id,
                                }}
                              >
                                Läs mer och ansök
                              </StyledPrefetchLink>
                            }
                            subtitle={annons.location}
                            title={annons.title}
                          >
                            {annons.role}
                          </Block>
                        ))}
                    </>
                  )}
                </FilterByLocation>

                <Block title={pageWork.openApplicationLabel}>
                  {pageWork.openApplicationText}
                </Block>
              </GridColumn>

              <Team
                bgColor="red"
                callToAction={pageWork.contactTitle}
                shortName={pageWork.team}
              />
            </>
          )
        }}
      </WorkQueryWithLoading>
    )
  }
}

export default Work
