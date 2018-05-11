import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { WorkPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import StyledPrefetchLink from '../components/Link/StyledPrefetchLink'
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

export const Work = () => {
  return (
    <WorkQuery query={WORK_PAGE_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { openpositions, pageWork } = data

        return (
          <>
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
                              Läs mer
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
            </GridColumn>

            <Team bgColor="red" shortName={pageWork.team} />
          </>
        )
      }}
    </WorkQuery>
  )
}

export default Work
