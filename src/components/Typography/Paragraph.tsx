import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from '../../theme'

const StyledParagraph = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 27px;

  a {
    border-bottom: 2px solid #668cff;
    color: #668cff;
    line-height: 1.75;
    padding-bottom: 2px;
    text-decoration: none;
  }

  p:first-of-type {
    margin-top: 0;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 5px;
    }

    &:before {
      content: '•';
      display: inline-block;
      margin-left: -1em;
      width: 1em;
    }
  }
`

const Paragraph: React.SFC<{}> = ({ children }) => {
  return (
    <StyledParagraph>
      <ReactMarkdown source={children} />
    </StyledParagraph>
  )
}

export default Paragraph
