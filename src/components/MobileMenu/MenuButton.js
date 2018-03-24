// @flow

import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  open: boolean,
  toggle: () => void,
}

const Button = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 0;
  bottom: 20px;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  position: fixed;
  right: 20px;
  z-index: 2;
  width: 60px;

  &:focus {
    outline: none;
  }
`

const Bar = styled.div`
  height: 2px;
  width: 25px;
  background-color: #000;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
`

const Hamburger = styled.div`
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

const MenuButton = ({ open, toggle }: Props) => {
  return (
    <Button data-test="btn-mobile-menu" onClick={toggle}>
      <Hamburger open={open}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
    </Button>
  )
}

export default MenuButton
