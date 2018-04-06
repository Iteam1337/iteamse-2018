// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Footer'
import styled from 'styled-components'

type Props = {
  address: IteamCMS.Footer_addresses,
}

const Wrap = styled.div`
  color: #000;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const Title = styled.div`
  font-weight: 500;
  margin-bottom: 20px;
`

const Address = styled.div`
  margin-bottom: 20px;
`

const Location = ({ address }: Props) => {
  return (
    <Wrap key={address.zip}>
      <Title>{address.title}</Title>
      <Address>
        <ul>
          <li>{address.address1}</li>
          <li>
            {address.zip} {address.city}
          </li>
        </ul>
      </Address>
      <ul>
        <li>{address.contactPhone}</li>
        <li>{address.contactMail}</li>
        <li>ORG: {address.orgNumber}</li>
      </ul>
    </Wrap>
  )
}

export default Location
