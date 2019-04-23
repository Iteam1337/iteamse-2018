import * as React from 'react'
import Fade from 'react-reveal/Fade'
import { HowWeWorkPageQuery } from '../../../typings/iteamse'
import { OPEN_POSITION_PAGE_QUERY } from '../../pages/OpenPosition'
import styled from '../../theme'
import GridColumn from '../Grid/GridColumn'
import PaddedRow from '../Grid/PaddedRow'
import StyledPrefetchLink from '../Link/StyledPrefetchLink'
import UnstyledList from '../List/UnstyledList'
import H3 from '../Typography/H3'
import H4 from '../Typography/H4'
import Paragraph from '../Typography/Paragraph'

interface OpenPositionsBlockProps {
  'data-test'?: string
  openApplicationHeader: string
  openApplicationText: string
  openpositions: HowWeWorkPageQuery['openpositions']
  title: string
}

const ColoredGridColumn = GridColumn.extend`
  background-color: ${({ theme }) => theme.colors.alabaster};
`

const Content = styled.div`
  display: grid;
  grid-row-gap: 20px;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 0;
  }

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    display: flex;
    width: 1024px;
    
    > * {
      flex-basis: 50%;
    }
  `)};
`

const SideWrap = styled.div``

const UnstyledListWithMargin = styled(UnstyledList)`
  margin-top: 10px;
`

const ParagraphWrap = styled.div`
  margin-top: 20px;
`

const OpenPosition = styled.li`
  line-height: 44px;
`

const OpenPositionsBlock: React.SFC<OpenPositionsBlockProps> = ({
  'data-test': dataTest = '',
  openApplicationHeader,
  openApplicationText,
  openpositions,
  title,
}) => {
  return (
    <Fade bottom distance="50px">
      <ColoredGridColumn>
        <PaddedRow data-test={`block-${dataTest}`}>
          <Content>
            <SideWrap>
              <H3>{title}</H3>
              <UnstyledListWithMargin>
                {openpositions.map(position => (
                  <OpenPosition key={position.id}>
                    <StyledPrefetchLink
                      query={OPEN_POSITION_PAGE_QUERY}
                      to={`/jobba-hos-oss/${position.id}`}
                      variables={{
                        id: position.id,
                      }}
                    >
                      {position.title}
                    </StyledPrefetchLink>{' '}
                    ({position.location})
                  </OpenPosition>
                ))}
              </UnstyledListWithMargin>
            </SideWrap>
            <SideWrap>
              <H4>{openApplicationHeader}</H4>
              <ParagraphWrap>
                <Paragraph>{openApplicationText}</Paragraph>
              </ParagraphWrap>
            </SideWrap>
          </Content>
        </PaddedRow>
      </ColoredGridColumn>
    </Fade>
  )
}

export default OpenPositionsBlock
