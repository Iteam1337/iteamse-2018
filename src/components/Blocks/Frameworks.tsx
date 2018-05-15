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
  max-height: 50px;
  padding: 25px;
`

const getFrameworkIconUrl = (icon: string) => {
  switch (icon) {
    case 'React':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/6Khn8L48laAoQuCkaouyQG/010beebb44b078c743eba23b829891b5/react.svg'
    case 'Docker':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3ipy8GBepacEyeKM0weI0i/ac970f2117388796ff65e03bfe6aa920/docker.png'
    case 'Vue':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/5EBgyxee0oiGqqOmAEmAUq/74ac41b3ca4fd0fc31c64bb8c0fe5329/vue.svg'
    case 'Mandrill':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/4RmR16im884ykaUgEaiscA/c0b0f2278827d738d060b1f5442d0bb5/mandrill.svg'
    case 'NodeJS':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3CIQ81A1M4EueKkYA8YgMY/f676e83c53791ccf15d3b35ab2e54fa6/node.svg'
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
