import React from 'react'
import styled from 'styled-components'
import { withProps } from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import Navigation from './Navigation'

interface CaseHeaderProps {
  bgColor: string | null
  caseBackgroundImage: string | null
  caseImage: string | null
  logo: string
  tags: Array<string | null>
}

interface WrapProps {
  image?: string | null
}

const Wrap = withProps<WrapProps>()(GridColumnClean.extend)`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  display: block;
  height: 480px;
  padding: 30px;

  @media (min-width: 1025px) {
    display: grid;
    height: 500px;
    padding: 0px;
  }
`

const Content = styled.div`
  display: grid;
`

const Information = styled.div`
  align-items: center;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 100px;
  padding-bottom: 60px;

  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Meta = styled.div``
const ProjectImage = styled.img`
  margin-top: 100px;
  max-width: 100%;
  vertical-align: top;

  @media (min-width: 1025px) {
    margin-top: 50px;
  }
`
const Logo = styled.img`
  margin-bottom: 40px;
  max-width: 100%;
  vertical-align: top;
`

const Tags = styled.div`
  @media (min-width: 1025px) {
    max-width: 70%;
  }
`

const Tag = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 10px;
  padding: 5px 10px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: 1025px) {
    font-size: 16px;
    padding: 10px 30px;
  }
`

const CaseImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 300px;

  @media (min-width: 1025px) {
    height: 500px;
    width: 500px;
  }
`

const CaseHeader: React.SFC<CaseHeaderProps> = ({
  caseBackgroundImage,
  caseImage,
  logo,
  tags,
}) => {
  return (
    <Wrap data-test="header-case" image={caseBackgroundImage}>
      <Navigation />
      <Content>
        <Information>
          <Meta>
            <Logo alt="" src={logo} />
            <Tags>
              {tags.map(
                tag =>
                  typeof tag === 'string' ? <Tag key={tag}>{tag}</Tag> : null
              )}
            </Tags>
          </Meta>
          <CaseImage>
            {caseImage && <ProjectImage alt="" src={caseImage} />}
          </CaseImage>
        </Information>
      </Content>
    </Wrap>
  )
}

export default CaseHeader
