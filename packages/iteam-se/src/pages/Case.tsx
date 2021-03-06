import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet-async'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CasePageQuery, CasePageQueryVariables } from '../../typings/iteamse'
import Block from '../components/Blocks/Block'
import Frameworks from '../components/Blocks/Frameworks'
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
      casePageImage
      casePageBackgroundImage
      frameworks
      frameworksTitle
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
      team
      quote
      quotePerson
      quoteBgColor
    }
  }
`

class CaseQuery extends Query<CasePageQuery, CasePageQueryVariables> {}

export class CasePage extends React.Component<
  RouteComponentProps<{ match: string; slug: string }>
> {
  render() {
    const { match } = this.props
    return (
      <CaseQuery
        query={CASE_PAGE_QUERY}
        variables={{ slug: match.params.slug }}
      >
        {({ loading, data }) => {
          if (loading || !data || !data.workCase) {
            return null
          }

          const { workCase } = data

          return (
            <>
              <Helmet>
                <title>Iteam | {workCase.title}</title>
                <meta
                  property="og:title"
                  content={`Iteam | ${workCase.title}`}
                />
                <meta
                  property="twitter:title"
                  content={`Iteam | ${workCase.title}`}
                />
                {workCase.casePageBackgroundImage && (
                  <meta
                    property="og:image"
                    content={`https:${workCase.casePageBackgroundImage}`}
                  />
                )}
              </Helmet>
              <CaseHeader
                caseImage={workCase.casePageImage}
                caseBackgroundImage={workCase.casePageBackgroundImage}
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
                  <Quote
                    quoteBgColor={workCase.quoteBgColor}
                    person={workCase.quotePerson}
                  >
                    {workCase.quote}
                  </Quote>
                )}

                <Block title={workCase.developmentTitle}>
                  {workCase.development}
                </Block>

                <Block title={workCase.aboutCompanyTitle}>
                  {workCase.aboutCompany}
                </Block>

                {workCase.partners && workCase.partnersTitle && (
                  <Block title={workCase.partnersTitle}>
                    {workCase.partners}
                  </Block>
                )}

                {workCase.contact && workCase.contactTitle && (
                  <Block title={workCase.contactTitle}>
                    {workCase.contact}
                  </Block>
                )}

                {workCase.frameworks && (
                  <Frameworks
                    frameworks={workCase.frameworks}
                    title={workCase.frameworksTitle}
                  />
                )}
              </GridColumn>

              <Team bgColor="green" shortName={workCase.team} />
            </>
          )
        }}
      </CaseQuery>
    )
  }
}

export default withRouter(CasePage)
