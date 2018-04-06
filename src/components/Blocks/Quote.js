// @flow

import * as React from 'react'
import styled from 'styled-components'
import GridRow from '../Grid/GridRow'
import GridContent from '../Grid/GridContent'

type Props = {
  children: string,
  'data-test'?: string,
  person: string,
}

const QuoteWrap = GridRow.extend`
  background-color: ${({ theme }) => theme.colors.concrete};
  padding-bottom: 100px;
  padding-top: 100px;
`
const QuoteContent = GridContent.extend``

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
      <QuoteContent>
        <ActualQuote>{`"${children}"`}</ActualQuote>
        <Person>{person}</Person>
      </QuoteContent>
    </QuoteWrap>
  )
}

export default Quote
