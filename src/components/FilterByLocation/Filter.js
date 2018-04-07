// @flow

import * as React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import styled, { injectGlobal } from 'styled-components'

type Props = {
  children: React.Node,
  changeLocation: (location: Iteam.ValidLocation) => void,
  location: Iteam.ValidLocation,
  selected: boolean,
}

const Wrap = styled.div`
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

injectGlobal`
  html[data-whatinput="keyboard"] {
    ${Wrap} {
      &:focus {
        border-bottom: 3px solid #000;
        color: #000;
      }
    }
  }
`

class Filter extends React.Component<Props> {
  props: Props

  handleClick = () => {
    this.props.changeLocation(this.props.location)
  }

  handleKeyUp = (e: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode !== 13 && e.keyCode !== 32) {
      e.preventDefault()
      e.stopPropagation()

      return false
    }

    this.props.changeLocation(this.props.location)
  }

  render () {
    return (
      <Wrap
        data-test={`filter-${this.props.location}`}
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
        selected={this.props.selected}
        tabIndex="0"
      >
        {this.props.children}
      </Wrap>
    )
  }
}

export default Filter
