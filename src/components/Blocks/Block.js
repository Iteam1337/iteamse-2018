// @flow

import * as React from 'react'
import styled from 'styled-components'
import H3 from '../Typography/H3'
import Paragraph from '../Typography/Paragraph'
import PaddedRow from '../Grid/PaddedRow'
import Fade from 'react-reveal/Fade'

type Props = {
  children: React.Node,
  'data-test'?: string,
  readMore?: React.Node,
  subtitle?: string,
  title: string,
}

const Content = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-column-gap: 60px;
    grid-template-columns: 320px 1fr;
  }
`

const TitleWrap = styled.div``

const Subtitle = styled.div`
  font-size: 18px;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 31px;
`

const Block = ({
  children,
  'data-test': dataTest = '',
  readMore,
  subtitle,
  title,
}: Props) => {
  return (
    <Fade bottom>
      <PaddedRow data-test={`block-${dataTest}`}>
        <Content>
          <TitleWrap>
            <H3>{title}</H3>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </TitleWrap>

          <Text>
            <Paragraph>{children}</Paragraph>
            {readMore}
          </Text>
        </Content>
      </PaddedRow>
    </Fade>
  )
}

export default Block
