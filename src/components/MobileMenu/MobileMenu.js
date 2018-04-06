// @flow

import * as React from 'react'
import { withRouter, type ContextRouter } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import MenuNavigation from './MenuNavigation'

type Props = {
  ...ContextRouter,
}

type State = {
  open: boolean,
}

const Wrap = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`

class MobileMenu extends React.Component<Props, State> {
  props: Props

  state = {
    open: false,
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ open: false })
    }
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

export default withRouter(MobileMenu)
