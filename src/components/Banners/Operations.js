// @flow

import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import H2 from '../Typography/H2'
import banner from './img/banner_ops.jpg'

const Row = styled.div`
  align-items: center;
  background-image: ${`url(${banner})`};
  display: grid;
  grid-template-columns: 1fr;
  height: 360px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const Content = styled.div`
  align-items: center;
  color: #fff;
  display: grid;
  grid-column: 2;
  grid-column-gap: 80px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 350px;
    padding-left: 0;
    padding-right: 0;
  }
`

const OperationsBanner = () => {
  return (
    <Row>
      <Overlay />
      <Content>
        <H2>Visste du att vi även erbjuder drift & support?</H2>
        <Button to="/ops">Iteam Operations</Button>
      </Content>
    </Row>
  )
}

export default OperationsBanner
