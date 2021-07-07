import React from 'react'
import styled from '../../theme'

interface TagComponentProps {
  tags: Array<string | null>
}

const Container = styled.div``

const Tag = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 5px;
  padding: 5px 10px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 5px;
  }

  @media (min-width: 1025px) {
    font-size: 16px;
    padding: 10px;
  }
`

const Tags: React.SFC<TagComponentProps> = ({ tags }) => (
  <Container>
    {tags.map(
      tag => (typeof tag === 'string' ? <Tag key={tag}>{tag}</Tag> : null)
    )}
  </Container>
)

export default Tags
