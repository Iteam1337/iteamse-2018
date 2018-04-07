// @flow

import * as React from 'react'
import * as Iteam from '../typings/iteam.flow'
import * as IteamCMS from './__generated__/CasePage'
import Team from '../components/Team/Team'
import CaseHeader from '../components/Header/CaseHeader'
import Block from '../components/Blocks/Block'
import Quote from '../components/Blocks/Quote'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import GridColumn from '../components/Grid/GridColumn'

type Props = {
  match: {
    params: {
      slug: string,
    },
  },
}
type QueryProps = Iteam.ApolloBase<IteamCMS.CasePage>

export const CasePageQuery = gql`
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

const CasePage = ({ match }: Props) => {
  return (
    <Query query={CasePageQuery} variables={{ slug: match.params.slug }}>
      {({ loading, data: { workCase } }: QueryProps) => {
        if (loading || !workCase) {
          return null
        }

        return (
          <React.Fragment>
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
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default CasePage
