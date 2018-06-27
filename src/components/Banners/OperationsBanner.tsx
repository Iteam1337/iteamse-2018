import React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import { OPERATIONS_PAGE_QUERY } from '../../pages/Ops'
import styled from '../../theme'
import Button from '../Button/Button'
import { GridColumnClean } from '../Grid/GridColumn'
import H2 from '../Typography/H2'
import banner from './img/banner_ops.jpg'

const Row = GridColumnClean.extend`
  align-items: center;
  background-image: ${`url(${banner})`};
  background-size: cover;
  height: 360px;
  position: relative;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  bottom: 0;
  grid-column: -1 / 1;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const Content = styled.div`
  align-items: center;
  color: #fff;
  display: grid;
  grid-column-gap: 80px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  z-index: 1;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 350px;
    padding-left: 0;
    padding-right: 0;
  }
`

const Header = H2.extend`
  font-weight: 500;
  margin-bottom: 50px;
`

export const OperationsBanner: React.SFC<WithApolloClient<{}>> = ({
  client,
}) => {
  return (
    <Row>
      <Overlay />

      <Content>
        <Header>Visste du att vi även erbjuder drift & support?</Header>

        <Button
          onMouseEnter={() =>
            client.query({
              query: OPERATIONS_PAGE_QUERY,
            })
          }
          to="/ops"
        >
          Iteam Operations
        </Button>
      </Content>
    </Row>
  )
}

export default withApollo<{}>(OperationsBanner)
