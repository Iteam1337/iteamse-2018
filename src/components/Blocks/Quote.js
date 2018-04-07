// @flow

import * as React from 'react'
import styled from 'styled-components'
import { GridColumnClean } from '../Grid/GridColumn'

type Props = {
  children: string,
  'data-test'?: string,
  person: ?string,
}

const QuoteWrap = GridColumnClean.extend`
  background-color: ${({ theme }) => theme.colors.concrete};
  grid-column: -1 / 1;
  padding-bottom: 100px;
  padding-top: 100px;
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

const Quote = ({ children, 'data-test': dataTest = '', person }: Props) => {
  return (
    <QuoteWrap data-test={`block-${dataTest}`}>
      <ActualQuote>{`"${children}"`}</ActualQuote>
      <Person>{person}</Person>
    </QuoteWrap>
  )
}

export default Quote
