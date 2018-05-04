import React from 'react'
import styled from 'styled-components'
import { withProps } from '../../theme'
import { GridColumnClean } from '../Grid/GridColumn'
import Navigation from './Navigation'

interface CaseHeaderProps {
  bgColor: string | null
  caseImage: string | null
  logo: string
  tags: Array<string | null>
}

interface WrapProps {
  bgColor: string | null
}

const Wrap = withProps<WrapProps>()(GridColumnClean.extend)`
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

  @media (min-width: 1025px) {
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
  @media (min-width: 1025px) {
    max-width: 70%;
  }
`

const Tag = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  display: inline-block;
  font-size: 16px;
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

  @media (min-width: 1025px) {
    display: flex;
  }
`

const CaseHeader: React.SFC<CaseHeaderProps> = ({
  bgColor,
  caseImage,
  logo,
  tags,
}) => {
  return (
    <Wrap bgColor={bgColor} data-test="header-case">
      <Content>
        <Navigation />
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
