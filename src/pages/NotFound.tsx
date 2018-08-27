import * as React from 'react'
import { Helmet } from 'react-helmet'
import { GridColumnClean } from '../components/Grid/GridColumn'
import HeaderClean from '../components/Header/HeaderClean'
import Link from '../components/Link/Link'
import H1 from '../components/Typography/H1'
import Paragraph from '../components/Typography/Paragraph'
import styled from '../theme'
import brokenComputer from './img/illustrations-mac.png'

const Wrap = GridColumnClean.extend`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: auto 1fr;
  background-color: #F3F2F2;
  overflow-y: scroll;
`

const Content = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  grid-column-gap: 50px;
  grid-template-rows: 200px 1fr;

  @media (min-width: 480px) {
    margin-top: 150px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 2fr;
  }
`

const Broken = styled.img`
  height: 100%;
  @media (min-width: 480px) {
    height: auto;
  }
`

const StyledH1 = H1.extend`
  margin-bottom: 15px;
`

const Message = styled.div`
  margin-top: 20px;
  @media (min-width: 480px) {
    margin-top: 0;
    align-self: center;
  }
`
const NarrowLink = Link.extend`
  display: inline-block;
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    letter-spacing: -0.5px;
  }
`

export class NotFound extends React.Component {
  render() {
    const message =  `Det blir inte alltid som man tänkt sig.
    Tyvärr finns inte sidan du försökte nå, antingen är länken fel eller så har sidan flyttats.
    Men du behöver inte oroa dig, vi ska göra allt vi kan för att detta inte ska hända igen.`
    return (
      <>
        <Wrap>
          <Helmet>
            <title>Iteam | Page not found</title>
          </Helmet>
          <HeaderClean />
          <Content>
            <Broken alt="broken" src={brokenComputer} />
            <Message>
              <StyledH1>
                Oj, någonting gick snett!
              </StyledH1>
              <Paragraph>{message}
              </Paragraph>
              <NarrowLink to="/">
                Ta mig tillbaka till startsidan
              </NarrowLink>
            </Message>
          </Content>
        </Wrap>
      </>
    )
  }
}

export default NotFound
