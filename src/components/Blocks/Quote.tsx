import * as React from 'react'
import styled, { contrastCheck } from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import PaddedRow from '../Grid/PaddedRow'

interface QuoteProps {
  quoteBgColor: string | null
  children: string
  'data-test'?: string
  person: string | null
}

interface QuoteWrapProps {
  backgroundColor?: string | null
}

const QuoteWrap =
  styled(GridColumnClean) <
  QuoteWrapProps >
  `
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.alabaster};
  color: ${({ theme, backgroundColor }) =>
    backgroundColor
      ? contrastCheck(backgroundColor)
      : contrastCheck(theme.colors.alabaster)};
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
  `)}
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
  quoteBgColor,
  children,
  'data-test': dataTest = '',
  person,
}) => {
  return (
    <QuoteWrap backgroundColor={quoteBgColor} data-test={`block-${dataTest}`}>
      <PaddedRow>
        <ActualQuote>{`"${children}"`}</ActualQuote>
        <Person>{person}</Person>
      </PaddedRow>
    </QuoteWrap>
  )
}

export default Quote
