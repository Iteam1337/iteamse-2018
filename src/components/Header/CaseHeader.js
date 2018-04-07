// @flow

import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import { GridColumnClean } from '../Grid/GridColumn'

type Props = {
  bgColor: ?string,
  caseImage: string,
  logo: string,
  tags: Array<?string>,
}

const Wrap = GridColumnClean.extend`
  background-color: ${({ bgColor }) => bgColor};
  height: 430px;

  @media (min-width: 481px) {
    height: 700px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`

const Information = styled.div`
  align-items: center;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 100px;
  padding-bottom: 60px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Meta = styled.div``
const ProjectImage = styled.img`
  max-width: 100%;
  vertical-align: top;
`
const Logo = styled.img`
  margin-bottom: 40px;
  max-width: 100%;
  vertical-align: top;
`

const Tags = styled.div`
  @media (min-width: 1024px) {
    max-width: 70%;
  }
`

const Tag = styled.div`
  background-color: #fff;
  border-radius: 17px;
  display: inline-block;
  margin-bottom: 10px;
  padding: 10px 30px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const CaseImage = styled.div`
  align-items: center;
  display: none;
  height: 500px;
  justify-content: center;
  width: 500px;

  @media (min-width: 1024px) {
    display: flex;
  }
`

const CaseHeader = ({ bgColor, caseImage, logo, tags }: Props) => {
  return (
    <Wrap bgColor={bgColor} data-test="header-case">
      <Content>
        <Navigation />
        <Information>
          <Meta>
            <Logo alt="" src={logo} />
            <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
          </Meta>
          <CaseImage>
            <ProjectImage alt="" src={caseImage} />
          </CaseImage>
        </Information>
      </Content>
    </Wrap>
  )
}

export default CaseHeader
