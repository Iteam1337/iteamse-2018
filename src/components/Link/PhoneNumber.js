// @flow

import * as React from 'react'
import NativeLink from './NativeLink'
import { normalize, parse } from 'telefonnummer'
import { media } from '../../theme'

type Props = {
  children: string,
  phoneNumber: string,
}

const PhoneNumberLink = NativeLink.extend`
  ${media.desktop`
    text-decoration: none;
  `};
`

const PhoneNumber = ({ children, phoneNumber }: Props) => {
  return (
    <PhoneNumberLink href={`tel:${normalize(phoneNumber)}`}>
      {parse(children)}
    </PhoneNumberLink>
  )
}

export default PhoneNumber
