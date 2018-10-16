import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import { FooterQuery } from '../../../typings/iteamse'
import { OPERATIONS_PAGE_QUERY } from '../../pages/Ops'
import GridColumn from '../Grid/GridColumn'
import NativeLink from '../Link/NativeLink'
import StyledPrefetchLink from '../Link/StyledPrefetchLink'
import UnstyledList from '../List/UnstyledList'
import iconFb from './img/icon_fb.svg'
import iconInstagram from './img/icon_instagram.svg'
import iconLinkedin from './img/icon_linkedin.svg'
import iconMynewsdesk from './img/icon_mynewsdesk.svg'
import iconYoutube from './img/icon_youtube.svg'
import Location from './Location'

export const FOOTER_QUERY = gql`
  query Footer {
    addresses {
      address1
      city
      contactMail
      contactPhone
      orgNumber
      title
      zip
    }
  }
`

const Wrap = GridColumn.extend`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1025px) {
    grid-row-gap: 40px;
    padding-left: 0;
    padding-right: 0;
  }
`

const FooterSections = styled.div`
  display: grid;
  grid-gap: 30px;

  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 315px) 1fr;
  }

  /* IE 11 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-around;

    > * {
      flex: 1 0 25%;
    }
  }
`

const Title = styled.div`
  font-weight: 500;
  margin-bottom: 20px;
`

const SocialMedia = styled.div``
const SocialMediaItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`
const SocialMediaIcon = styled.img`
  margin-right: 15px;
`

const NativeLinkUnderlined = NativeLink.extend`
  border-bottom: 2px solid;
  color: black;
  text-decoration: none;
`

const SupportSection = styled.div`
  /* IE 11 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
    width: 100%;
  }
`

class FooterQueryComponent extends Query<FooterQuery> {}

const Footer = () => {
  return (
    <FooterQueryComponent query={FOOTER_QUERY}>
      {({ loading, data }) => {
        if (loading || !data) {
          return null
        }

        const { addresses } = data

        return (
          <Wrap>
            <FooterSections>
              {addresses.map(address => (
                <Location key={address.zip} address={address} />
              ))}

              <SocialMedia>
                <Title>Följ oss</Title>
                <UnstyledList>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconFb} alt="" />
                    <NativeLinkUnderlined href="https://www.facebook.com/iteam1337/">
                      Facebook
                    </NativeLinkUnderlined>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconInstagram} alt="" />
                    <NativeLinkUnderlined href="https://instagram.com/iteam1337">
                      Instagram
                    </NativeLinkUnderlined>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconLinkedin} alt="" />
                    <NativeLinkUnderlined href="https://www.linkedin.com/company/270569/">
                      LinkedIn
                    </NativeLinkUnderlined>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconYoutube} alt="" />
                    <NativeLinkUnderlined href="https://www.youtube.com/channel/UCU2TdLZ7p0jEuuGUxaod4lw">
                      YouTube
                    </NativeLinkUnderlined>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconMynewsdesk} alt="" />
                    <NativeLinkUnderlined href="http://www.mynewsdesk.com/se/iteam">
                      MyNewsDesk
                    </NativeLinkUnderlined>
                  </SocialMediaItem>
                </UnstyledList>
              </SocialMedia>
            </FooterSections>
            <SupportSection>
              <StyledPrefetchLink
                black={true}
                query={OPERATIONS_PAGE_QUERY}
                to="ops"
              >
                Behöver du supporthjälp?
              </StyledPrefetchLink>
            </SupportSection>
          </Wrap>
        )
      }}
    </FooterQueryComponent>
  )
}

export default Footer
