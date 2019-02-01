import React from 'react'
import LazyLoad from 'react-lazyload'
// import Lottie from 'react-lottie'
import styled from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import H1 from '../Typography/H1'
import Navigation from './Navigation'

import greenBlob from '../../images/green-blob.svg'
// import animationData from '../../images/iteam_i.json'
import iteamI from './img/iteam_i.png'

const HomeGridColumn = styled(GridColumnClean)``

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

const HomeIllustrationWrap = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 40%;
  justify-content: center;
  transform: scale(-1, 1);
  /* transform: scale(-1.4, 1.4) translateY(-60px); for animation */

  @media (min-width: 1025px) {
    /* transform: scale(-2, 2); for animation */
    transform: scale(-1, 1);
    align-items: center;
    justify-content: flex-end;
  }
`

const HomeIllustrationImage = styled.img`
  height: auto;
  margin-bottom: 50px;
  width: 60%;

  @media (min-width: 1025px) {
    margin: 0;
    width: 100%;
  }
`

const HomeIntroWrap = styled.div`
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

const HomeLead = styled.p`
  font-size: 18px;
  line-height: 1.5;

  @media (min-width: 481px) {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid #000;
  }
`

const HomeHeader: React.SFC = () => {
  return (
    <>
      <LazyLoad height={700} once>
        <HomeGridColumn>
          <HomeContent>
            <Navigation isInverted noShadow />
            <HomeMessageRow>
              <HomeIntroWrap>
                <HomeH1>
                  Hej! Vi är Iteam, en utvecklingbyrå som digitaliserar företag
                  genom kod, kultur och strategi.
                </HomeH1>
                <HomeLead>
                  Läs mer om våra <a href="/erbjudanden">erbjudanden</a> eller
                  se våra <a href="/case">case</a>
                </HomeLead>
              </HomeIntroWrap>
              <HomeIllustrationWrap>
                {/* <Lottie options={{ animationData }} /> */}
                <HomeIllustrationImage src={iteamI} />
              </HomeIllustrationWrap>
            </HomeMessageRow>
          </HomeContent>
        </HomeGridColumn>
      </LazyLoad>
    </>
  )
}

export default HomeHeader
