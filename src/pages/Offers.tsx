import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { OffersPageQuery } from '../../typings/iteamse'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import Header from '../components/Header/Header'
import StyledPrefetchLink from '../components/Link/StyledPrefetchLink'
import Team from '../components/Team/Team'
import { AI_PAGE_QUERY } from './Ai'
import { OPERATIONS_PAGE_QUERY } from './Ops'

export const OFFERS_PAGE_QUERY = gql`
  query OffersPage {
    pageOffers {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      team
    }
    pageAi {
      linkText
      shortDescription
      thumbnailImage
    }
    pageOps {
      linkText
      shortDescription
      thumbnailImage
    }
  }
`

const Offers = PaddedRow.extend`
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-column-gap: 30px;
  }
`

const Meta = styled.div`
  margin-bottom: 20px;

  @media (min-width: 1025px) {
    margin-bottom: 0;
  }
`

const Offer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-column-gap: 200px;
    grid-template-columns: 600px 1fr;
  }
`

const OfferImageWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    height: 200px;
    width: 200px;
  }
`

const OfferImage = styled.img`
  max-width: 90%;
`

class OffersQuery extends Query<OffersPageQuery> {}

export const OffersPage = () => {
  return (
    <OffersQuery query={OFFERS_PAGE_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { pageOffers, pageAi, pageOps } = data

        return (
          <>
            <Header
              backgroundImage={pageOffers.headerImage}
              messageBgColor={pageOffers.headerTextBgColor}
              messageOne={pageOffers.headerText1}
              messageTwo={pageOffers.headerText2}
            />
            <GridColumn>
              <Offers>
                <Offer>
                  <Meta>
                    <h2>AI</h2>
                    <p>{pageAi.shortDescription}</p>
                    <StyledPrefetchLink
                      query={AI_PAGE_QUERY}
                      to="/erbjudanden/ai"
                    >
                      {pageAi.linkText}
                    </StyledPrefetchLink>
                  </Meta>
                  <OfferImageWrap>
                    {pageAi.thumbnailImage && (
                      <OfferImage src={pageAi.thumbnailImage} alt="" />
                    )}
                  </OfferImageWrap>
                </Offer>
                <Offer>
                  <Meta>
                    <h2>Drift & Support</h2>
                    <p>{pageOps.shortDescription}</p>
                    <StyledPrefetchLink
                      query={OPERATIONS_PAGE_QUERY}
                      to="/erbjudanden/ops"
                    >
                      {pageOps.linkText}
                    </StyledPrefetchLink>
                  </Meta>
                  <OfferImageWrap>
                    {pageOps.thumbnailImage && (
                      <OfferImage src={pageOps.thumbnailImage} alt="" />
                    )}
                  </OfferImageWrap>
                </Offer>
              </Offers>
            </GridColumn>

            <Team
              bgColor="green"
              callToAction={pageOffers.contactTitle}
              shortName={pageOffers.team}
            />
          </>
        )
      }}
    </OffersQuery>
  )
}

export default OffersPage
