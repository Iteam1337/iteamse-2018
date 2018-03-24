// @flow

import * as React from 'react'
import styled from 'styled-components'
import H3 from '../Typography/H3'
import Paragraph from '../Typography/Paragraph'
import Link from '../Link/Link'

type Props = {
  children: React.Node,
  'data-test'?: string,
  id?: string,
  subtitle?: string,
  title: string,
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const Content = styled.div`
  display: grid;
  grid-column: 2;

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
  id,
  subtitle,
  title,
}: Props) => {
  return (
    <Row data-test={`block-${dataTest}`}>
      <Content>
        <TitleWrap>
          <H3>{title}</H3>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TitleWrap>

        <Text>
          <Paragraph>{children}</Paragraph>
          {id && <Link to={`/jobba-hos-oss/${id}`}>Läs mer</Link>}
        </Text>
      </Content>
    </Row>
  )
}

export default Block
