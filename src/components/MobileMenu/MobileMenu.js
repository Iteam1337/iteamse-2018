// @flow

import * as React from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import MenuNavigation from './MenuNavigation'

type State = {
  open: boolean,
}

const Wrap = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`

class MobileMenu extends React.Component<*, State> {
  state = {
    open: false,
  }

  toggleMenu = () => {
    this.setState(state => ({
      open: !state.open,
    }))
  }

  render () {
    const { open } = this.state

    return (
      <Wrap>
        <MenuNavigation open={open} />
        <MenuButton open={open} toggle={this.toggleMenu} />
      </Wrap>
    )
  }
}

export default MobileMenu
