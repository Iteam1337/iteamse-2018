// @flow

import * as React from 'react'
import NativeLink from './NativeLink'
import { parse } from 'telefonnummer'

type Props = {
  children: string,
  phoneNumber: string,
}

const PhoneNumber = ({ children, phoneNumber }: Props) => {
  return <NativeLink href={`tel:${phoneNumber}`}>{parse(children)}</NativeLink>
}

export default PhoneNumber
