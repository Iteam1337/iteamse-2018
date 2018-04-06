// @flow

import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

type Props = {
  image: string,
}

const AvatarImage = styled.img`
  border-radius: 100%;
  max-width: 100%;
  vertical-align: top;
`

const Avatar = ({ image }: Props) => {
  return (
    <LazyLoad height={226} once>
      <AvatarImage src={image} />
    </LazyLoad>
  )
}

export default Avatar
