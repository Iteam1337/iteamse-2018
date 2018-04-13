// @flow

import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

type Props = {
  alt: string,
  image: string,
}

export const AvatarImage = styled.img`
  border-radius: 100%;
  box-shadow: 0 5px 50px transparent;
  max-width: 100%;
  transition: box-shadow 200ms ease-in-out;
  vertical-align: top;
`

const Avatar = ({ alt, image }: Props) => {
  return (
    <LazyLoad height={226} once>
      <AvatarImage alt={alt} src={image} />
    </LazyLoad>
  )
}

export default Avatar
