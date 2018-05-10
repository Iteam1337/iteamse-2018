import React from 'react'
import { FooterQuery } from '../../../typings/iteamse'
import styled from '../../theme'
import UnstyledList from '../List/UnstyledList'

interface LocationProps {
  address: FooterQuery['addresses'][0]
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

const Location: React.SFC<LocationProps> = ({ address }) => {
  return (
    <Wrap key={address.zip}>
      <Title>{address.title}</Title>
      <Address>
        <UnstyledList>
          <li>{address.address1}</li>
          <li>
            {address.zip} {address.city}
          </li>
        </UnstyledList>
      </Address>
      <UnstyledList>
        <li>{address.contactPhone}</li>
        <li>{address.contactMail}</li>
        <li>ORG: {address.orgNumber}</li>
      </UnstyledList>
    </Wrap>
  )
}

export default Location
