// @flow

import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import H2 from '../Typography/H2'
import banner from './img/banner_ops.jpg'
import GridRow from '../Grid/GridRow'
import GridContent from '../Grid/GridContent'

const Row = GridRow.extend`
  align-items: center;
  background-image: ${`url(${banner})`};
  height: 360px;
  position: relative;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const Content = GridContent.extend`
  align-items: center;
  color: #fff;
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
