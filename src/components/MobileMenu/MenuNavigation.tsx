import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

interface MenuNavigationProps {
  open: boolean
}

const StyledLink = styled(NavLink)`
  color: #000;
  font-size: 28px;
  font-weight: 300;
  text-decoration: none;
  border-bottom: 2px solid black;
  justify-self: right;

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
  padding: 20px 20px 150px;
  position: fixed;
  right: 0;
  text-align: right;
  top: 0;
  z-index: 1;
`

const MenuInner = styled.div`
  display: grid;

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    padding-top: 80px;
  }
`

const MenuNavigation: React.SFC<MenuNavigationProps> = ({ open }) => {
  if (!open) {
    return null
  }

  return (
    <Menu data-test="mobile-menu">
      <MenuInner>
        <StyledLink activeClassName="active-nav" to="/erbjudanden">
          Erbjudanden
        </StyledLink>
        <StyledLink activeClassName="active-nav" to="/case">
          Våra case
        </StyledLink>
        <StyledLink activeClassName="active-nav" to="/hur-vi-jobbar">
          Metod
        </StyledLink>
        <StyledLink activeClassName="active-nav" to="/medarbetare">
          Medarbetare
        </StyledLink>
        <StyledLink activeClassName="active-nav" to="/jobba-hos-oss">
          Karriär
        </StyledLink>
        <StyledLink activeClassName="active-nav" to="/om-oss">
          Om
        </StyledLink>
      </MenuInner>
    </Menu>
  )
}

export default MenuNavigation
