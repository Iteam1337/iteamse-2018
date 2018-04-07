// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/WorkPage'
import { Query, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { filterByLocation } from '../utils/filterByLocation'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import Header from '../components/Header/Header'
import GridColumn from '../components/Grid/GridColumn'
import Block from '../components/Blocks/Block'
import Team from '../components/Team/Team'
import Link from '../components/Link/Link'
import { OpenPositionPageQuery } from './OpenPosition'

type Props = {
  client: {
    query: Function,
  },
}

type QueryProps = Iteam.ApolloBase<IteamCMS.WorkPage>

export const WorkPageQuery = gql`
  query WorkPage {
    pageWork {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
    }
    openpositions {
      id
      location
      role
      title
    }
  }
`

const Work = ({ client }: Props) => {
  return (
    <Query query={WorkPageQuery}>
      {({ loading, data: { openpositions, pageWork } }: QueryProps) => {
        if (loading) {
          return null
        }

        return (
          <React.Fragment>
            <Header
              backgroundImage={pageWork.headerImage}
              messageBgColor={pageWork.headerTextBgColor}
              messageOne={pageWork.headerText1}
              messageTwo={pageWork.headerText2}
            />

            <GridColumn>
              <FilterByLocation>
                {location => (
                  <React.Fragment>
                    {openpositions
                      .filter(filterByLocation(location))
                      .map(annons => (
                        <Block
                          data-test="location"
                          key={annons.title}
                          id={annons.id}
                          readMore={
                            <Link
                              onMouseOver={() =>
                                client.query({
                                  query: OpenPositionPageQuery,
                                  variables: {
                                    id: annons.id,
                                  },
                                })
                              }
                              to={`/jobba-hos-oss/${annons.id}`}
                            >
                              Läs mer
                            </Link>
                          }
                          subtitle={annons.location}
                          title={annons.title}
                        >
                          {annons.role}
                        </Block>
                      ))}
                  </React.Fragment>
                )}
              </FilterByLocation>
            </GridColumn>

            <Team bgColor="red" shortName={['rln', 'msr']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default withApollo(Work)
