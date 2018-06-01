import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from '../../theme'

interface AvatarProps {
  alt: string
  image: string
}

export const AvatarImage = styled.img`
  border-radius: 100%;
  box-shadow: 0 5px 50px transparent;
  max-height: 300px;
  max-width: 100%;
  transition: box-shadow 200ms ease-in-out;
  vertical-align: top;
`

const Avatar: React.SFC<AvatarProps> = ({ alt, image }) => {
  return (
    <LazyLoad height={226} once>
      <AvatarImage alt={alt} src={image} />
    </LazyLoad>
  )
}

export default Avatar
