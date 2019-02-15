import React from 'react'
import LazyLoad from 'react-lazyload'
import Markdown from 'react-markdown'
import cloudImage from '../../images/cloud.svg'
import greenBlob from '../../images/green-blob.svg'
import styled, { keyframes } from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import H1 from '../Typography/H1'
import iteamI from './img/iteam_i.svg'
import Navigation from './Navigation'

interface HomeHeaderProps {
  title: string
  lead: string
}

const HomeContent = styled.div`
  background-image: url('${greenBlob}');
  background-position: calc(50% - -20px) -130px;
  background-repeat: no-repeat;
  background-size: 560px;
  display: grid;
  grid-column: -1 / 1;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: auto 1fr;

  @media (min-width: 1025px) {
    background-position: calc(50% - -220px) -170px;
    background-size: 960px;
    grid-template-columns: 1fr 1024px 1fr;
  }
`

export const HomeMessageRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  grid-column: 2;
  justify-content: center;

  @media (min-width: 481px) {
    flex-direction: row;
    padding: 80px 0;
  }
`

const IllustrationWrap = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 40%;
  justify-content: center;
  margin-top: -60px;
  transform: scale(0.6, 0.6);

  @media (min-width: 1025px) {
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    transform: scale(1, 1);
  }
`

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`

const Cloud = styled.span`
  animation: ${float} 6s ease-in-out infinite;
  background-image: url(${cloudImage});
  background-repeat: no-repeat;
  background-size: contain;
  height: 76px;
  position: absolute;
  right: -80px;
  top: 20px;
  transform: scale(-1, 1);
  width: 136px;
`

const SmallCloud = styled(Cloud)`
  animation-direction: reverse;
  left: 40px;
  top: -60px;
  transform: scale(1, 1);
  height: 53px;
  width: 96px;
`

const IllustrationImage = styled.img`
  height: auto;
  margin: 0;
  width: 100%;
`

const IntroWrap = styled.div`
  flex-basis: 60%;
  z-index: 1;
`

const HomeH1 = styled(H1)`
  font-size: 24px;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 32px;

  @media (min-width: 1025px) {
    font-size: 30px;
    margin-bottom: 64px;
  }
`

const HomeLead = styled.div`
  font-size: 18px;
  line-height: 1.5;

  @media (min-width: 481px) {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
  }

  a {
    border-bottom: 1px solid #000;
    color: inherit;
    text-decoration: none;
  }
`

const HomeHeader: React.SFC<HomeHeaderProps> = ({ title, lead }) => {
  return (
    <>
      <LazyLoad height={700} once>
        <GridColumnClean>
          <HomeContent>
            <Navigation isInverted noShadow />
            <HomeMessageRow>
              <IntroWrap>
                <HomeH1>{title}</HomeH1>
                <HomeLead>
                  <Markdown source={lead} />
                </HomeLead>
              </IntroWrap>
              <IllustrationWrap>
                <Cloud />
                <SmallCloud />
                <IllustrationImage src={iteamI} />
              </IllustrationWrap>
            </HomeMessageRow>
          </HomeContent>
        </GridColumnClean>
      </LazyLoad>
    </>
  )
}

export default HomeHeader
