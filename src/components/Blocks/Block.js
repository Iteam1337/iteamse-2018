// @flow

import * as React from 'react'
import styled from 'styled-components'
import H3 from '../Typography/H3'
import Paragraph from '../Typography/Paragraph'
import Link from '../Link/Link'

type Props = {
  children: React.Node,
  concrete?: boolean,
  'data-test'?: string,
  id?: string,
  subtitle?: string,
  title: string,
}

const Wrap = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`

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
  id,
  subtitle,
  title,
}: Props) => {
  return (
    <Wrap data-test={`block-${dataTest}`}>
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
    </Wrap>
  )
}

export default Block
