import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import styled from '../../theme'
import MenuButton from './MenuButton'
import MenuNavigation from './MenuNavigation'

type MobileMenuProps = RouteComponentProps<{}>

type State = {
  open: boolean
}

const Wrap = styled.div`
  padding-left: 40px;
  padding-right: 40px;

  @media (min-width: 1025px) {
    display: none;
  }
`

export class MobileMenu extends React.Component<MobileMenuProps, State> {
  state = {
    open: false,
  }

  componentDidUpdate(prevProps: MobileMenuProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ open: false })
    }
  }

  toggleMenu = () => {
    this.setState(state => ({
      open: !state.open,
    }))
  }

  render() {
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
