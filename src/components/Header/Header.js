// @flow

import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import H1 from '../Typography/H1'
import LazyLoad from 'react-lazyload'

type Props = {
  backgroundImage?: string | null,
  messageBgColor: ?string,
  messageOne: ?string,
  messageTwo: ?string,
}

const Wrap = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  display: grid;
  height: 430px;

  @media (min-width: 481px) {
    height: 700px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const Content = styled.div`
  display: grid;
  grid-column: 2;
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
  return (
    <LazyLoad height={700} once>
      <Wrap image={backgroundImage}>
        <Content>
          <Navigation />
          <MessageRow>
            {messageOne && (
              <Message bgColor={messageBgColor}>
                <span>{messageOne}</span>
              </Message>
            )}
            {messageTwo && (
              <Message bgColor={messageBgColor}>
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
