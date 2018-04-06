// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/WorkPage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { filterByLocation } from '../utils/filterByLocation'
import FilterByLocation from '../components/FilterByLocation/FilterByLocation'
import Header from '../components/Header/Header'
import GridRow from '../components/Grid/GridRow'
import Block from '../components/Blocks/Block'
import Team from '../components/Team/Team'

type Props = Iteam.ApolloBase<IteamCMS.WorkPage>

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

const Work = () => {
  return (
    <Query query={WorkPageQuery}>
      {({ loading, data: { openpositions, pageWork } }: Props) => {
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

            <GridRow>
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
                          title={annons.title}
                          subtitle={annons.location}
                        >
                          {annons.role}
                        </Block>
                      ))}
                  </React.Fragment>
                )}
              </FilterByLocation>
            </GridRow>

            <Team bgColor="red" shortName={['rln', 'msr']} />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default Work
