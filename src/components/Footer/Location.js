// @flow

import React from 'react'
import * as IteamCMS from './__generated__/Footer'
import styled from 'styled-components'

type Props = {
  address: IteamCMS.Footer_addresses,
}

const Wrap = styled.div`
  color: #000;
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
        {address.address1}
        <br />
        {address.zip} {address.city}
      </Address>
      {address.contactPhone}
      <br />
      {address.contactMail}
      <br />
      ORG: {address.orgNumber}
      <br />
    </Wrap>
  )
}

export default Location
