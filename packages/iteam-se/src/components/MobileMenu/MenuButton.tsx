import React from 'react'
import styled, { css } from '../../theme'

interface MenuButtonProps {
  open: boolean
  toggle: () => void
}

const Button = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 0;
  bottom: 20px;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  height: 60px;
  position: fixed;
  right: 20px;
  z-index: 2;
  width: 60px;

  &:focus {
    outline: none;
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    bottom: 0;
    top: 20px;
  }
`

const Bar = styled.div`
  height: 2px;
  width: 25px;
  background-color: #000;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
`

interface HamburgerProps {
  open: boolean
}

const Hamburger = styled.div<HamburgerProps>`
  ${({ open }) =>
    open &&
    css`
      ${Bar}:first-child {
        transform: translateY(7px) rotate(45deg);
      }

      ${Bar}:nth-child(2) {
        opacity: 0;
      }

      ${Bar}:last-child {
        transform: translateY(-7px) rotate(-45deg);
      }
    `};
`

const MenuButton: React.SFC<MenuButtonProps> = ({ open, toggle }) => {
  return (
    <Button
      aria-label="Menu button"
      data-testid="btn-mobile-menu"
      onClick={toggle}
      role="button"
    >
      <Hamburger open={open}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
    </Button>
  )
}

export default MenuButton
