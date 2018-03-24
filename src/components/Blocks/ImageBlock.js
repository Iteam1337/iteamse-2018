// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  column?: number,
  image: string,
}

const Content = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 480px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const ImageContainer = styled.img`
  grid-column: 3;
  max-width: 100%;

  @media (min-width: 480px) {
    grid-column: ${({ column }) => column};
    max-width: initial;
  }
`

const ImageBlock = ({ column = 6, image }: Props) => {
  return (
    <Content>
      <ImageContainer column={column} src={image} />
    </Content>
  )
}

export default ImageBlock
