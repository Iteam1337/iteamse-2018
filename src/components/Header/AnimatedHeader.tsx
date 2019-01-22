import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../images/iteam_i.json'
import styled from '../../theme'
import GridColumn from '../Grid/GridColumn'

const Wrapper = styled.div`
  height: 650px;
`

const AnimationWrapper = styled.div`
  height: 650px;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

function AnimatedHeader() {
  return (
    <Wrapper>
      <GridColumn>
        <GridWrapper>
          <div>
            <h2>
              Hej! Vi är Iteam, vi digitaliserar företag genom kod, kultur och
              strategi.
            </h2>
            <p>Läs mer om våra erbjudanden eller se våra case</p>
          </div>
          <AnimationWrapper>
            <Lottie options={{ animationData }} />
          </AnimationWrapper>
        </GridWrapper>
      </GridColumn>
    </Wrapper>
  )
}

export default AnimatedHeader
