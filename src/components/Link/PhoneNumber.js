// @flow

import * as React from 'react'
import NativeLink from './NativeLink'
import { normalize, parse } from 'telefonnummer'

type Props = {
  children: string,
  phoneNumber: string,
}

const PhoneNumber = ({ children, phoneNumber }: Props) => {
  return (
    <NativeLink href={`tel:${normalize(phoneNumber)}`}>
      {parse(children)}
    </NativeLink>
  )
}

export default PhoneNumber
