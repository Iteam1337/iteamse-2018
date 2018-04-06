// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  image: string,
}

const ImageContainer = styled.img`
  grid-column: -1 / 1 !important;
  vertical-align: top;
  width: 100%;
`

const ImageBleed = ({ image }: Props) => {
  return <ImageContainer src={image} />
}

export default ImageBleed
