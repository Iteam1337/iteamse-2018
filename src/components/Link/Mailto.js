// @flow

import * as React from 'react'
import NativeLink from './NativeLink'

type Props = {
  children: React.Node,
  email: string,
}

const Mailto = ({ children, email }: Props) => {
  return <NativeLink href={`mailto:${email}`}>{children}</NativeLink>
}

export default Mailto
