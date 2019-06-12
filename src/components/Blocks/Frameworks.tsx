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

const Wrap = styled(GridColumnClean)`
  background-color: ${({ theme }) => theme.colors.alabaster};
  grid-column: -1 / 1;
  padding-bottom: 100px;
  padding-top: 100px;

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    max-width: none;

    display: flex;
    justify-content: center;

    > * {
      max-width: 1024px;
    }
  `)};
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
  switch (icon.toLowerCase()) {
    case '.net core':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/7kXFrkHsXeg2so8Uk6AYMQ/eee0016885250e0091ece79321692621/netcore.png'
    case 'angular':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/2wha2JlrsIcQG6U8AqO4AG/549dd8cebb672517592aece9c0690c0c/angular.png'
    case 'aws':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/2pfNGDxhuEMOwwKW2oECI8/a623d94b7b70a69cc282d164c883c9a0/aws.png'
    case 'docker':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3ipy8GBepacEyeKM0weI0i/39509f189b3f80400357320c6def15ad/docker.png'
    case 'elasticsearch':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/jmeL3zsuukSESmaC8YAW0/d5ba2837791378cf7043c569eba1dae3/elasticsearch.png'
    case 'graphql':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/KaXjqfppMi0E0qOOuqwc8/a5574ea7cfcfa42c69f45761e0e0e914/graphQL.png'
    case 'jasmine':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/4UL58bFxM4AOkq02yUiqIC/2c0b2966497c8f6bb11d3f64a543d0cb/jasmine.png'
    case 'jest':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/1Lco5Lr8s4624Ik0SCsO80/783d4222502a5fe5189a0e6037d0ab38/jest.png'
    case 'mandrill':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/4RmR16im884ykaUgEaiscA/411607987ba022b96e9a29d000821aef/mandrill.png'
    case 'metabase':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/5wKyIIwpFYgcYYSKcgYucq/705d6135de1724c3d49091b6c3558fac/metabase.png'
    case 'nodejs':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3CIQ81A1M4EueKkYA8YgMY/ff59095490dd17d1ab74282447e0a213/nodejs.png'
    case 'openshift':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/WymClub48oCM0cQKamAKS/bbe053282064e046e66d2e8ea836d436/openshift.png'
    case 'postgresql':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/4j4CzmEjg4CqyiQ4qCO2eq/f843278027464af0173ac95caba1c58c/postgres.png'
    case 'prismic':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/76Ogyky0iQSYYWmiuiGq60/88b1cb2e76b5749e2ac29a7b5d5e2916/prismic.png'
    case 'protractor':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/2g691MGmkw26MQAGe8ueuC/e6cc79ddc0f34a9731bc67a51e51c692/protractor.png'
    case 'rabbitmq':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/3Q1H5TMuaIUoEMCOSkgsIq/38a7ff5163046f1273f31acfe66800ba/rabbitmq.png'
    case 'react':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/6Khn8L48laAoQuCkaouyQG/08e4cf1fe02bd945c23807d5a8f29e87/react.png'
    case 'restify':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/572UfvNCK4kOEYWwy0u08i/c0fc3506ac26c2701fe489e4dc67e03f/resitfy.png'
    case 'rethinkdb':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/6h0zebM6NaiOmE4M2SMWWQ/aa5ae0045a5744cd1751d6eb4e1094b7/rethinkdb.png'
    case 'vue':
      return 'https://images.ctfassets.net/rj4r6yfcesw5/5EBgyxee0oiGqqOmAEmAUq/af8d1ae7d3d578197205205b2c33e8ff/Vue.png'
    default:
      return ''
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
