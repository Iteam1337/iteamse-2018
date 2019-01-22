import * as React from 'react'
import craneImage from '../../images/crane.png'
import styled from '../../theme'
import SecondaryButton from '../Button/SecondaryButton'
import GridColumn from '../Grid/GridColumn'
import PaddedRow from '../Grid/PaddedRow'
import H3 from '../Typography/H3'

interface CTABlockProps {
  'data-test'?: string
  title: string
  buttonText: string
}

const BlockWrapper = styled.div`
  background-color: #fafafa;
`

const Content = styled.div`
  display: grid;
  align-items: center;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: 320px 1fr;
  }

  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    display: flex;
  `)};
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 31px;
  margin-bottom: 40px;
  margin-top: 10px;

  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    flex: 1;
  `)};
`

const CTABlock: React.SFC<CTABlockProps> = ({
  children,
  'data-test': dataTest = '',
  title,
  buttonText,
}) => {
  return (
    <BlockWrapper>
      <GridColumn>
        <PaddedRow data-test={`block-${dataTest}`}>
          <Content>
            <img src={craneImage} />
            <div>
              <H3>{title}</H3>
              <Text>{children}</Text>
              <SecondaryButton to="/">{buttonText}</SecondaryButton>
            </div>
          </Content>
        </PaddedRow>
      </GridColumn>
    </BlockWrapper>
  )
}

export default CTABlock
