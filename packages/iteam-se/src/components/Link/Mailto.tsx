import * as React from 'react'
import styled from '../../theme'
import NativeLink from './NativeLink'

const NativeLinkUnderlined = styled(NativeLink)`
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
