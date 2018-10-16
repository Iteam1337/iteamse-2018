import * as React from 'react'
import styled from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import PaddedRow from '../Grid/PaddedRow'

interface QuoteProps {
  children: string
  'data-test'?: string
  person: string | null
}

const QuoteWrap = GridColumnClean.extend`
  background-color: ${({ theme }) => theme.colors.concrete};
  grid-column: -1 / 1;
  padding-bottom: 100px;
  padding-top: 100px;

  /* IE 11 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: none;
    display: flex;
    justify-content: center;

    > * {
      max-width: 1024px;
    }
  }
`

const ActualQuote = styled.div`
  font-size: 36px;
  line-height: 1.3;
  font-weight: 300;
`

const Person = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-top: 20px;
`

const Quote: React.SFC<QuoteProps> = ({
  children,
  'data-test': dataTest = '',
  person,
}) => {
  return (
    <QuoteWrap data-test={`block-${dataTest}`}>
      <PaddedRow>
        <ActualQuote>{`"${children}"`}</ActualQuote>
        <Person>{person}</Person>
      </PaddedRow>
    </QuoteWrap>
  )
}

export default Quote
