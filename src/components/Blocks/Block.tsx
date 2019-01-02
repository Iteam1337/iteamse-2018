import * as React from 'react'
import Fade from 'react-reveal/Fade'
import styled from '../../theme'
import PaddedRow from '../Grid/PaddedRow'
import H3 from '../Typography/H3'
import Paragraph from '../Typography/Paragraph'

interface BlockProps {
  'data-test'?: string
  readMore?: React.ReactNode
  subtitle?: string
  title: string
}

const Content = styled.div`
  display: grid;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: 320px 1fr;
  }

  ${({ theme }) => theme.browsers.ie10Or11(`
    display: flex;
  `)}
`

const TitleWrap = styled.div`
  ${({ theme }) => theme.browsers.ie10Or11(`
    flex-basis: 30%;
    margin-right: 60px;
  `)}
`

const Subtitle = styled.div`
  font-size: 18px;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 31px;

  ${({ theme }) => theme.browsers.ie10Or11(`
    flex: 1;
  `)}
`

const Block: React.SFC<BlockProps> = ({
  children,
  'data-test': dataTest = '',
  readMore,
  subtitle,
  title,
}) => {
  return (
    <Fade bottom distance="50px">
      <PaddedRow data-test={`block-${dataTest}`}>
        <Content>
          <TitleWrap>
            <H3>{title}</H3>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </TitleWrap>

          <Text>
            {typeof children === 'string' ? (
              <Paragraph>{children}</Paragraph>
            ) : (
              children
            )}
            {readMore}
          </Text>
        </Content>
      </PaddedRow>
    </Fade>
  )
}

export default Block
