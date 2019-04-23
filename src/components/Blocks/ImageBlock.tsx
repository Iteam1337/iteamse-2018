import * as React from 'react'
import styled from '../../theme'

interface ImageBlockProps {
  column?: number
  image: string
}

const Content = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 480px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

interface ImageContainerProps {
  column: number
}

const ImageContainer = styled.img<ImageContainerProps>`
  grid-column: 3;
  max-width: 100%;

  @media (min-width: 480px) {
    grid-column: ${({ column }) => column};
    max-width: initial;
  }
`

const ImageBlock: React.SFC<ImageBlockProps> = ({ column = 6, image }) => {
  return (
    <Content>
      <ImageContainer column={column} src={image} />
    </Content>
  )
}

export default ImageBlock
