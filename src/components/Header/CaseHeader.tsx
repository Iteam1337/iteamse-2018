import React from 'react'
import styled from 'styled-components'
import { withProps } from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import Navigation from './Navigation'

interface CaseHeaderProps {
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
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: 320px 1fr;
  }
`

const Meta = styled.div`
  align-self: flex-end;
  padding-bottom: 20px;

  @media (min-width: 1025px) {
    padding-bottom: 40px;
  }
`

const ProjectImage = styled.img`
  max-width: 100%;
  vertical-align: top;

  @media (min-width: 1025px) {
    margin-bottom: -80px;
  }
`

const Logo = styled.img`
  margin-bottom: 20px;
  max-width: 100%;
  vertical-align: top;

  @media (min-width: 1025px) {
    margin-bottom: 40px;
    max-width: none;
  }
`

const Tags = styled.div``

const Tag = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  display: inline-block;
  font-size: 12px;
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

const CaseImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
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
            <Logo alt="Logo" src={logo} />
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
