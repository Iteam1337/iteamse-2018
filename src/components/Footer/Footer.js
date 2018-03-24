// @flow

import React from 'react'
import * as Iteam from '../../typings/iteam.flow'
import * as IteamCMS from './__generated__/Footer'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Location from './Location'

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

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
    padding-bottom: 150px;
    padding-top: 150px;
  }
`

const Locations = styled.div`
  display: grid;
  grid-gap: 30px;

  @media (min-width: 1024px) {
    grid-column: 2;
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
