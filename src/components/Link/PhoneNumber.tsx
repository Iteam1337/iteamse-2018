import * as React from 'react'
import { normalize, parse } from 'telefonnummer'
import NativeLink from './NativeLink'

interface PhoneNumberProps {
  children: string
  phoneNumber: string
}

const PhoneNumberLink = NativeLink.extend`
  @media (min-width: 1025px) {
    text-decoration: none;
  }
`

const PhoneNumber: React.SFC<PhoneNumberProps> = ({
  children,
  phoneNumber,
}) => {
  return (
    <PhoneNumberLink href={`tel:${normalize(phoneNumber)}`}>
      {parse(children)}
    </PhoneNumberLink>
  )
}

export default PhoneNumber
