import React from 'react'
import styled from '../../theme'

interface ImageBleedProps {
  alt?: string
  image: string
}

const ImageContainer = styled.img`
  grid-column: -1 / 1 !important;
  vertical-align: top;
  width: 100%;
`

const ImageBleed = ({ alt = '', image }: ImageBleedProps) => {
  return <ImageContainer alt={alt} src={image} />
}

export default ImageBleed
