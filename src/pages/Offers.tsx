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
// import { CASE_PAGE_QUERY } from './Case'
// TODO: Import Ops page query and AI page query for prefetch link

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
    grid-template-columns: repeat(2, 1fr);
  }
`

const OfferImageWrap = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    height: 500px;
    width: 500px;
  }
`

const OfferImage = styled.img`
  max-width: 90%;
`

// const Meta = styled.div`
//   border-left: 0px solid ${({ theme }) => theme.colors.aquamarine};
//   margin-top: 30px;
//   transition-property: border-left-width, padding-left;
//   transition-duration: 300ms;
//   transition-timing-function: ease-in-out;
// `

// const OfferLink = styled(PrefetchLink)`
//   color: #000;
//   text-decoration: none;
// `

// const Offer = styled.div`
//   &:hover {
//     ${Meta} {
//       border-left-width: 10px;
//       padding-left: 10px;
//     }
//   }
// `

// const Title = styled.div`
//   font-size: 18px;
//   font-weight: 500;
//   margin-bottom: 10px;
// `

// const ShortDescription = styled.div`
//   font-size: 25px;
//   font-weight: 300;
// `

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
            {console.log(pageAi, pageOps)}
            <GridColumn>
              <Offers>
                <div>
                  <h2>AI</h2>
                  <p>{pageAi.shortDescription}</p>
                  <StyledPrefetchLink
                    query={AI_PAGE_QUERY}
                    to="/erbjudanden/ai"
                  >
                    {pageAi.linkText}
                  </StyledPrefetchLink>
                  <OfferImageWrap>
                    {pageAi.thumbnailImage && (
                      <OfferImage src={pageAi.thumbnailImage} alt="" />
                    )}
                  </OfferImageWrap>
                </div>
                <div>
                  <h2>Drift & Support</h2>
                  <p>{pageOps.shortDescription}</p>
                  <StyledPrefetchLink
                    query={OPERATIONS_PAGE_QUERY}
                    to="/erbjudanden/ops"
                  >
                    {pageOps.linkText}
                  </StyledPrefetchLink>
                  <OfferImageWrap>
                    {pageOps.thumbnailImage && (
                      <OfferImage src={pageOps.thumbnailImage} alt="" />
                    )}
                  </OfferImageWrap>
                </div>
                {/* {cases.map(workOffer => {
                  if (!workOffer) {
                    return null
                  }

                  return (
                    <OfferLink
                      query={CASE_PAGE_QUERY}
                      key={workOffer.title}
                      to={`/case/${workOffer.slug}`}
                      variables={{
                        slug: workOffer.slug,
                      }}
                    >
                      <Offer>
                        <OfferImageWrap>
                          {workOffer.thumbnailImage && (
                            <OfferImage src={workOffer.thumbnailImage} alt="" />
                          )}
                        </OfferImageWrap>
                        <Meta>
                          <Title>{workOffer.title}</Title>
                          <ShortDescription>
                            {workOffer.shortDescription}
                          </ShortDescription>
                        </Meta>
                      </Offer>
                    </OfferLink>
                  )
                })} */}
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
