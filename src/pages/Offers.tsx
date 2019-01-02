import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Helmet } from 'react-helmet'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import { OffersPageQuery } from '../../typings/iteamse'
import GridColumn from '../components/Grid/GridColumn'
import PaddedRow from '../components/Grid/PaddedRow'
import Header from '../components/Header/Header'
import { StyledHashLink as HashLink } from '../components/Link/Link'
import Team from '../components/Team/Team'
import H1 from '../components/Typography/H1'
import H3 from '../components/Typography/H3'
import Paragraph from '../components/Typography/Paragraph'

export const OFFERS_PAGE_QUERY = gql`
  query OffersPage {
    pageOffers {
      headerImage
      headerText1
      headerText2
      headerTextBgColor
      contactTitle
      team
      offersLeadText
    }
    offers {
      offerIntroImage
      offerTitle
      offerIntroText
      offerLead
      offerUspOneTitle
      offerUspOneText
      offerUspTwoTitle
      offerUspTwoText
      offerUspThreeTitle
      offerUspThreeText
      offerUspFourTitle
      offerUspFourText
      offerIllustrationImage
    }
  }
`

const GridRow = styled(GridColumn)`
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const H1Margin = styled(H1)`
  margin-bottom: 20px;
`

const OfferIntroItem = styled.div`
  display: grid;
  grid-column: auto;
  grid-row-gap: 20px;
`

const OfferIntroImage = styled.img`
  height: 116px;
  width: auto;
`

const OfferIntroLink = styled(HashLink)`
  align-self: end;
  justify-self: start;
`

const OffersGridColumn = styled(GridColumn)`
  grid-row-gap: 60px;

  :nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.concrete};
  }
`

const OfferUspRow = styled(GridColumn)`
  grid-template-columns: 1fr;

  > * {
    grid-column: auto;
  }

  @media (min-width: 1025px) {
    grid-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const OfferUspItem = styled.div`
  display: grid;
  grid-row-gap: 20px;
`

const OfferIllustrationImage = styled.img`
  display: block;
  height: auto;
  margin: 0 auto;
  width: 256px;

  @media (min-width: 1025px) {
    width: 384px;
  }
`

class OffersQuery extends Query<OffersPageQuery> {}

export class Offers extends React.Component {
  render() {
    return (
      <OffersQuery query={OFFERS_PAGE_QUERY}>
        {({ loading, data }) => {
          if (loading || !data) {
            return null
          }

          const { pageOffers, offers } = data

          return (
            <>
              <Helmet>
                <title>Iteam | Erbjudanden</title>
                <meta property="og:title" content="Iteam | Erbjudanden" />
                <meta property="twitter:title" content="Iteam | Erbjudanden" />
                {pageOffers.headerImage && (
                  <meta
                    property="og:image"
                    content={`https:${pageOffers.headerImage}`}
                  />
                )}
              </Helmet>
              <Header
                backgroundImage={pageOffers.headerImage}
                messageBgColor={pageOffers.headerTextBgColor}
                messageOne={pageOffers.headerText1}
                messageTwo={pageOffers.headerText2}
              />
              <GridColumn>
                <PaddedRow>
                  <Fade bottom distance="50px">
                    <Paragraph>{pageOffers.offersLeadText}</Paragraph>
                    <GridRow>
                      {offers.map(offer => {
                        const linkTitle = offer.offerTitle.toLowerCase()

                        return (
                          <OfferIntroItem key={offer.offerTitle}>
                            <OfferIntroImage src={offer.offerIntroImage} />
                            <H3>{offer.offerTitle}</H3>
                            <Paragraph>{offer.offerIntroText}</Paragraph>
                            <OfferIntroLink
                              onClick={(e: React.SyntheticEvent<MouseEvent>) =>
                                e.preventDefault()
                              }
                              smooth
                              to={`#${linkTitle}`}
                            >
                              Läs mer om {linkTitle}
                            </OfferIntroLink>
                          </OfferIntroItem>
                        )
                      })}
                    </GridRow>
                  </Fade>
                </PaddedRow>
              </GridColumn>

              {offers.map(offer => {
                const linkTitle = offer.offerTitle.toLowerCase()
                const offerUsps = [
                  {
                    text: offer.offerUspOneText,
                    title: offer.offerUspOneTitle,
                  },
                  {
                    text: offer.offerUspTwoText,
                    title: offer.offerUspTwoTitle,
                  },
                  {
                    text: offer.offerUspThreeText,
                    title: offer.offerUspThreeTitle,
                  },
                  {
                    text: offer.offerUspFourText,
                    title: offer.offerUspFourTitle,
                  },
                ]

                return (
                  <OffersGridColumn id={linkTitle} key={offer.offerTitle}>
                    <PaddedRow>
                      <Fade bottom distance="50px">
                        <H1Margin>{offer.offerTitle}</H1Margin>
                        <Paragraph>{offer.offerLead}</Paragraph>
                        <OfferUspRow>
                          {offerUsps.map((usp: any) => (
                            <OfferUspItem key={usp.title}>
                              <H3>{usp.title}</H3>
                              <Paragraph>{usp.text}</Paragraph>
                            </OfferUspItem>
                          ))}
                        </OfferUspRow>
                      </Fade>
                      <OfferIllustrationImage
                        src={offer.offerIllustrationImage}
                      />
                    </PaddedRow>
                  </OffersGridColumn>
                )
              })}

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
}

export default Offers
