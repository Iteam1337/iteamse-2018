import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet-async'
import { WorkPageQuery } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import GridColumn from '../components/Grid/GridColumn'
import Header from '../components/Header/Header'
import StyledPrefetchLink from '../components/Link/StyledPrefetchLink'
import Team from '../components/Team/Team'

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

const Work: React.SFC = () => {
  return (
    <WorkQuery query={WORK_PAGE_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { openpositions, pageWork } = data

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
              {openpositions.map(annons => (
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
    </WorkQuery>
  )
}

export default Work
