// @flow

import React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import * as IteamCMS from './__generated__/Footer'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Location from './Location'
import GridColumn from '../Grid/GridColumn'
import UnstyledList from '../List/UnstyledList'
import NativeLink from '../Link/NativeLink'
import styled from 'styled-components'
import iconFb from './img/icon_fb.svg'
import iconInstagram from './img/icon_instagram.svg'
import iconLinkedin from './img/icon_linkedin.svg'
import iconYoutube from './img/icon_youtube.svg'
import iconMynewsdesk from './img/icon_mynewsdesk.svg'
import { media } from '../../theme'

type Props = Iteam.ApolloBase<IteamCMS.Footer>

const FooterQuery = gql`
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

  ${media.desktop`
    padding-left: 0;
    padding-right: 0;
  `};
`

const FooterSections = styled.div`
  display: grid;
  grid-gap: 30px;

  ${media.desktop`
    grid-template-columns: repeat(2, 315px) 1fr;
  `};
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

const Footer = () => {
  return (
    <Query query={FooterQuery}>
      {({ loading, data: { addresses } }: Props) => {
        if (loading) {
          return null
        }

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
                    <NativeLink href="https://www.facebook.com/iteam1337/">
                      Facebook
                    </NativeLink>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconInstagram} alt="" />
                    <NativeLink href="https://instagram.com/iteam1337">
                      Instagram
                    </NativeLink>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconLinkedin} alt="" />
                    <NativeLink href="https://www.linkedin.com/company/270569/">
                      LinkedIn
                    </NativeLink>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconYoutube} alt="" />
                    <NativeLink href="https://www.youtube.com/channel/UCU2TdLZ7p0jEuuGUxaod4lw">
                      YouTube
                    </NativeLink>
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaIcon src={iconMynewsdesk} alt="" />
                    <NativeLink href="http://www.mynewsdesk.com/se/iteam">
                      MyNewsDesk
                    </NativeLink>
                  </SocialMediaItem>
                </UnstyledList>
              </SocialMedia>
            </FooterSections>
          </Wrap>
        )
      }}
    </Query>
  )
}

export default Footer
