import * as React from 'react'
import Helmet from 'react-helmet-async'
import { GridColumnClean } from '../components/Grid/GridColumn'
import HeaderClean from '../components/Header/HeaderClean'
import Link from '../components/Link/Link'
import Status from '../components/Status/Status'
import H1 from '../components/Typography/H1'
import Paragraph from '../components/Typography/Paragraph'
import styled from '../theme'
import brokenComputer from './img/illustrations-mac.png'

const Wrap = styled(GridColumnClean)`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: auto 1fr;
  background-color: #f3f2f2;
  overflow-y: scroll;
  @media (min-width: 1025px) {
    grid-template-columns: minmax(20px, 1fr) 1024px minmax(20px, 1fr);
  }
`

const Content = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  grid-gap: 50px;
  grid-template-rows: 200px 1fr;
  justify-items: center;

  @media (min-width: 480px) {
    justify-items: start;
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

const StyledH1 = styled(H1)`
  margin-bottom: 15px;
`

const Message = styled.div`
  margin-top: 20px;
  @media (min-width: 480px) {
    margin-top: 0;
    align-self: center;
  }
`
const NarrowLink = styled(Link)`
  display: inline-block;
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    letter-spacing: -0.5px;
  }
`

export const NotFound: React.SFC = () => {
  const message = `404 error. Eller som man säger på svenska, något har blivit fel.
    Tyvärr finns inte sidan du försökte nå, antingen är länken fel eller så har sidan flyttats.
    Men du behöver inte oroa dig, vi ska göra allt vi kan för att detta inte ska hända igen.`
  return (
    <Status code={404}>
      <Wrap>
        <Helmet>
          <title>Iteam | Page not found</title>
        </Helmet>
        <HeaderClean />
        <Content>
          <Broken alt="broken" src={brokenComputer} />
          <Message>
            <StyledH1>Oj, någonting gick snett!</StyledH1>
            <Paragraph>{message}</Paragraph>
            <NarrowLink to="/">Ta mig till startsidan</NarrowLink>
          </Message>
        </Content>
      </Wrap>
    </Status>
  )
}

export default NotFound
