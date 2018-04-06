// @flow

import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import H1 from '../Typography/H1'
import LazyLoad from 'react-lazyload'
import GridRow from '../Grid/GridRow'
import GridContent from '../Grid/GridContent'
import { handleColors } from '../../utils/handleColors'

type Props = {
  backgroundImage?: string | null,
  messageBgColor: ?string,
  messageOne: ?string,
  messageTwo: ?string,
}

const Wrap = GridRow.extend`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  height: 430px;

  @media (min-width: 481px) {
    height: 700px;
  }
`

const Content = GridContent.extend`
  grid-template-rows: auto 1fr;
`

const MessageRow = styled.div`
  align-self: flex-end;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 481px) {
    padding-bottom: 80px;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
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

  @media (min-width: 1024px) {
    width: auto;
  }
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
