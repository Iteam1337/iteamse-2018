import * as React from 'react'
import NativeLink from './NativeLink'

interface MailtoProps {
  email: string
}

const Mailto: React.SFC<MailtoProps> = ({ children, email }) => {
  return <NativeLink href={`mailto:${email}`}>{children}</NativeLink>
}

export default Mailto
