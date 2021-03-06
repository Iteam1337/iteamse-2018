import React from 'react'
import styled from '../../theme'
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

const Wrap =
  styled(GridColumnClean) <
  WrapProps >
  `
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  height: 480px;

  @media (min-width: 1025px) {
    display: grid;
    height: 500px;
    padding: 0px;
  }

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    display: flex;
    justify-content: center;
  `)}
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: auto 1fr 1fr;
  grid-column: -1 / 1;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
    grid-template-rows: auto 1fr;
  }

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    max-width: 1024px;
  `)};
`

const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column: 2;
  grid-row: 2;

  @media (min-width: 1025px) {
    grid-column-gap: 60px;
    grid-template-columns: 320px 1fr;
  }

  /* IE 11 */
  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    display: flex;
  `)};
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
    margin-bottom: -125px;
  }
`

const Logo = styled.img`
  margin-bottom: 20px;
  max-width: 100%;
  vertical-align: top;
  max-height: 100px;

  @media (min-width: 1025px) {
    margin-bottom: 40px;
    max-width: none;
    max-height: none;
  }
`

const Tags = styled.div``

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

const CaseImage = styled.div`
  display: none;

  @media (min-width: 1025px) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

const CaseImageMobile = styled.div`
  margin-top: -180px;
  max-width: 420px;

  @media (min-width: 1025px) {
    display: none;
  }
`

const CaseHeader: React.SFC<CaseHeaderProps> = ({
  caseBackgroundImage,
  caseImage,
  logo,
  tags,
}) => {
  return (
    <>
      <Wrap data-test="header-case" image={caseBackgroundImage}>
        <Content>
          <Navigation />
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
      <CaseImageMobile>
        {caseImage && <ProjectImage alt="" src={caseImage} />}
      </CaseImageMobile>
    </>
  )
}

export default CaseHeader
