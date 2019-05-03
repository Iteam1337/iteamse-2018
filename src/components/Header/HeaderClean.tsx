import React from 'react'
import { Link } from 'react-router-dom'
import styled from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import logo from './img/iteam_inverted.png'

const LogoLink = styled(Link)`
  &:focus {
    outline: none;
  }
`

const Wrap = styled(GridColumnClean)`
  grid-column: 2;
  grid-row: 1;
`

const Header = styled.div`
  display: grid;
  grid-row: 1;
  width: 150px;
  @media (min-width: 481px) {
    padding: 0;
  }
`

const Logo = styled.img`
  padding: 35px 0;
  max-width: 75%;
  @media (min-width: 1025px) {
    max-width: 100%;
  }
`

const Content = styled.div`
  display: grid;
  grid-column: -1 / 1;
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const HeaderClean = () => {
  return (
    <Wrap>
      <Content>
        <Header>
          <LogoLink to="/">
            <Logo alt="Logo" src={logo} />
          </LogoLink>
        </Header>
      </Content>
    </Wrap>
  )
}

export default HeaderClean
