import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { set } from '../../utils/googleAnalytics'

interface MenuNavigationProps {
  open: boolean
}

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

const fadeIn = keyframes`
  from {
  opacity: 0;
  }

  to {
  opacity: 1;
  }
`

const Menu = styled.div`
  align-items: flex-end;
  animation: ${fadeIn} 150ms ease-in-out 1;
  background-color: rgba(255, 255, 255, 0.93);
  bottom: 0;
  display: grid;
  left: 0;
  padding: 20px 20px 100px;
  position: fixed;
  right: 0;
  text-align: right;
  top: 0;
  z-index: 1;
`

const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuNavigation: React.SFC<MenuNavigationProps> = ({ open }) => {
  if (!open) {
    return null
  }

  return (
    <Menu data-test="mobile-menu">
      <MenuInner>
        <StyledLink
          activeClassName="active-nav"
          onClick={() => set('om-oss')}
          to="/om-oss"
        >
          Om oss
        </StyledLink>
        <StyledLink
          activeClassName="active-nav"
          onClick={() => set('hur-vi-jobbar')}
          to="/hur-vi-jobbar"
        >
          Hur vi jobbar
        </StyledLink>
        <StyledLink
          activeClassName="active-nav"
          onClick={() => set('teamet')}
          to="/teamet"
        >
          Teamet
        </StyledLink>
        <StyledLink
          activeClassName="active-nav"
          onClick={() => set('case')}
          to="/case"
        >
          Våra case
        </StyledLink>
        <StyledLink
          activeClassName="active-nav"
          onClick={() => set('jobba-hos-oss')}
          to="/jobba-hos-oss"
        >
          Jobba hos oss
        </StyledLink>
        <StyledLink
          activeClassName="active-nav"
          onClick={() => set('ops')}
          to="/ops"
        >
          Drift & Support
        </StyledLink>
      </MenuInner>
    </Menu>
  )
}

export default MenuNavigation
