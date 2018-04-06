// @flow

import * as React from 'react'
import styled from 'styled-components'
import H3 from '../Typography/H3'
import Paragraph from '../Typography/Paragraph'
import Link from '../Link/Link'
import GridRow from '../Grid/GridRow'
import GridContent from '../Grid/GridContent'

type Props = {
  children: React.Node,
  'data-test'?: string,
  id?: string,
  subtitle?: string,
  title: string,
}

const BlockRow = GridRow.extend`
  @media (min-width: 1024px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }
`

const Content = GridContent.extend`
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
    <BlockRow data-test={`block-${dataTest}`}>
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
    </BlockRow>
  )
}

export default Block
