import * as React from 'react'
import styled from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import PaddedRow from '../Grid/PaddedRow'
import H3 from '../Typography/H3'

interface FrameworksProps {
  'data-test'?: string
  frameworks: Array<string | null>
  title: string
}

const Wrap = GridColumnClean.extend`
  background-color: ${({ theme }) => theme.colors.concrete};
  grid-column: -1 / 1;
  padding-bottom: 100px;
  padding-top: 100px;
`

const FrameworksWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`

const Framework = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const FrameworkIcon = styled.img`
  max-height: 75px;
  padding: 25px;
`

const getFrameworkIconUrl = (icon: string) => {
  switch (icon) {
    case 'React':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/6Khn8L48laAoQuCkaouyQG/08e4cf1fe02bd945c23807d5a8f29e87/react.png'
    case 'Docker':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3ipy8GBepacEyeKM0weI0i/39509f189b3f80400357320c6def15ad/docker.png'
    case 'Vue':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/5EBgyxee0oiGqqOmAEmAUq/af8d1ae7d3d578197205205b2c33e8ff/Vue.png'
    case 'Mandrill':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/4RmR16im884ykaUgEaiscA/411607987ba022b96e9a29d000821aef/mandrill.png'
    case 'NodeJS':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3CIQ81A1M4EueKkYA8YgMY/ff59095490dd17d1ab74282447e0a213/nodejs.png'
    case 'OpenShift':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/WymClub48oCM0cQKamAKS/bbe053282064e046e66d2e8ea836d436/openshift.png'
    case 'Angular':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/2wha2JlrsIcQG6U8AqO4AG/549dd8cebb672517592aece9c0690c0c/angular.png'
    default:
      return undefined
  }
}

const Frameworks: React.SFC<FrameworksProps> = ({
  frameworks,
  'data-test': dataTest = '',
  title,
}) => {
  return (
    <Wrap data-test={`block-${dataTest}`}>
      <PaddedRow>
        <H3>{title}</H3>
        <FrameworksWrap>
          {frameworks.map(
            framework =>
              typeof framework === 'string' ? (
                <Framework key={framework}>
                  <FrameworkIcon src={getFrameworkIconUrl(framework)} />
                  {framework}
                </Framework>
              ) : null
          )}
        </FrameworksWrap>
      </PaddedRow>
    </Wrap>
  )
}

export default Frameworks
