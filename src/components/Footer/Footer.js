// @flow

import React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import * as IteamCMS from './__generated__/Footer'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Location from './Location'
import GridRow from '../Grid/GridRow'
import styled from 'styled-components'

type Props = Iteam.ApolloBase<IteamCMS.Footer>

const FooterQuery = gql`
  query Footer {
    addresses {
      address1
      city
      contactMail
      contactPhone
      orgNumber
      title
      zip
    }
  }
`

const Wrap = GridRow.extend`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const Locations = styled.div`
  display: grid;
  grid-gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 315px);
  }
`

const Footer = () => {
  return (
    <Query query={FooterQuery}>
      {({ loading, data: { addresses } }: Props) => {
        if (loading) {
          return null
        }

        return (
          <Wrap>
            <Locations>
              {addresses.map(address => (
                <Location key={address.zip} address={address} />
              ))}
            </Locations>
          </Wrap>
        )
      }}
    </Query>
  )
}

export default Footer
