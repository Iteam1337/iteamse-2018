// @flow

import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import H1 from '../Typography/H1'
import LazyLoad from 'react-lazyload'
import { handleColors } from '../../utils/handleColors'
import { GridColumnClean } from '../Grid/GridColumn'
import PaddedRow from '../Grid/PaddedRow'
import { media } from '../../theme'

type Props = {
  backgroundImage?: string | null,
  messageBgColor: ?string,
  messageOne: ?string,
  messageTwo: ?string,
}

const Wrap = GridColumnClean.extend`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  height: 430px;

  @media (min-width: 481px) {
    height: 800px;
  }
`

const Content = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0) 100px
  );
  display: grid;
  grid-column: -1 / 1;
  grid-template-columns: 1fr 1024px 1fr;
  grid-template-rows: auto 1fr;
`

const MessageRow = PaddedRow.extend`
  align-self: flex-end;
  grid-column: 2;
  grid-row: 2;
  padding-bottom: 30px;

  @media (min-width: 481px) {
    padding-bottom: 80px;
  }
`

const Message = H1.extend`
  box-sizing: border-box;
  line-height: 1.4;
  margin: 0;

  span {
    background-color: ${({ bgColor, theme }) =>
      bgColor || theme.colors.radicalRed};
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: ${({ bgColor, theme }) => theme.contrast(bgColor)};
    padding: 0.2rem 0.6rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  ${media.desktop`
    width: auto;
  `};
`

const Header = ({
  backgroundImage,
  messageBgColor,
  messageOne,
  messageTwo,
}: Props) => {
  const backgroundColor = handleColors(messageBgColor)

  return (
    <LazyLoad height={700} once>
      <Wrap image={backgroundImage}>
        <Content>
          <Navigation />
          <MessageRow>
            {messageOne && (
              <Message bgColor={backgroundColor}>
                <span>{messageOne}</span>
              </Message>
            )}
            {messageTwo && (
              <Message bgColor={backgroundColor}>
                <span>{messageTwo}</span>
              </Message>
            )}
          </MessageRow>
        </Content>
      </Wrap>
    </LazyLoad>
  )
}

export default Header
