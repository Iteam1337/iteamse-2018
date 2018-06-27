import * as React from 'react'
import NativeLink from './NativeLink'

const NativeLinkUnderlined = NativeLink.extend`
  border-bottom: 2px solid;
  text-decoration: none;
`

interface MailtoProps {
  email: string
}

const Mailto: React.SFC<MailtoProps> = ({ children, email }) => {
  return (
    <NativeLinkUnderlined href={`mailto:${email}`}>
      {children}
    </NativeLinkUnderlined>
  )
}

export default Mailto
