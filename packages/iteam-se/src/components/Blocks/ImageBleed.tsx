import React from 'react'
import styled from '../../theme'

interface ImageBleedProps {
  image: string
}

const ImageContainer = styled.img`
  grid-column: -1 / 1 !important;
  vertical-align: top;
  width: 100%;
`

const ImageBleed = ({ image }: ImageBleedProps) => {
  return <ImageContainer src={image} />
}

export default ImageBleed
