import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CasePageQuery, CasePageQueryVariables } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import Quote from '../components/Blocks/Quote'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import GridColumn from '../components/Grid/GridColumn'
import CaseHeader from '../components/Header/CaseHeader'
import Team from '../components/Team/Team'

export const CASE_PAGE_QUERY = gql`
  query CasePage($slug: String!) {
    workCase: case(slug: $slug) {
      headerBgColor
      logo
      slug
      thumbnailImage
      tags
      title
      introduction
      introductionTitle
      process
      processTitle
      development
      developmentTitle
      aboutCompany
      aboutCompanyTitle
      partners
      partnersTitle
      contact
      contactTitle
      quote
      quotePerson
    }
  }
`

class CaseQuery extends Query<CasePageQuery, CasePageQueryVariables> {}

const CasePage: React.SFC<RouteComponentProps<{ slug: string }>> = ({
  match,
}) => {
  return (
    <CaseQuery query={CASE_PAGE_QUERY} variables={{ slug: match.params.slug }}>
      {({ loading, data }) => {
        if (loading || !data || !data.workCase) {
          return null
        }

        const { workCase } = data

        return (
          <>
            <CaseHeader
              bgColor={workCase.headerBgColor}
              caseImage={workCase.thumbnailImage}
              logo={workCase.logo}
              tags={workCase.tags}
            />

            <GridColumn>
              <Breadcrumbs title={workCase.title} />

              <Block title={workCase.introductionTitle}>
                {workCase.introduction}
              </Block>

              <Block title={workCase.processTitle}>{workCase.process}</Block>

              {workCase.quote && (
                <Quote person={workCase.quotePerson}>{workCase.quote}</Quote>
              )}

              <Block title={workCase.developmentTitle}>
                {workCase.development}
              </Block>

              <Block title={workCase.aboutCompanyTitle}>
                {workCase.aboutCompany}
              </Block>

              <Block title={workCase.partnersTitle}>{workCase.partners}</Block>

              <Block title={workCase.contactTitle}>{workCase.contact}</Block>
            </GridColumn>

            <Team bgColor="green" shortName={['hrn', 'jmn']} />
          </>
        )
      }}
    </CaseQuery>
  )
}

export default withRouter(CasePage)
