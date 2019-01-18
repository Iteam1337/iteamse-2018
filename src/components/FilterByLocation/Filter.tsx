import * as React from 'react'
import { ValidLocation } from '../../../typings/iteam'
import styled, { createGlobalStyle } from '../../theme'

interface FilterProps {
  children: React.ReactNode
  changeLocation: (location: ValidLocation) => void
  location: ValidLocation
  selected: boolean
}

interface WrapProps {
  selected: boolean
}

const Wrap = styled.div<WrapProps>`
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? '500' : '300')};

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:focus {
    outline: none;
  }
`

const GlobalStyle = createGlobalStyle`
  html[data-whatinput="keyboard"] {
    ${Wrap} {
      &:focus {
        border-bottom: 3px solid #000;
        color: #000;
      }
    }
  }
`

class Filter extends React.Component<FilterProps> {
  handleClick = () => {
    this.props.changeLocation(this.props.location)
  }

  handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode !== 13 && e.keyCode !== 32) {
      e.preventDefault()
      e.stopPropagation()

      return
    }

    this.props.changeLocation(this.props.location)
  }

  render() {
    return (
      <>
        <Wrap
          data-test={`filter-${this.props.location}`}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          selected={this.props.selected}
          tabIndex={0}
        >
          {this.props.children}
        </Wrap>
        <GlobalStyle selected={this.props.selected} />
      </>
    )
  }
}

export default Filter
