import React from 'react'
import LazyLoad from 'react-lazyload'
import styled, { withProps } from '../../theme'
import { handleColors } from '../../utils/handleColors'
import { GridColumnClean } from '../Grid/GridColumn'
import H1 from '../Typography/H1'
import Navigation from './Navigation'

interface HeaderProps {
  backgroundImage?: string | null
  messageBgColor: string | null
  messageOne: string | null
  messageTwo: string | null
}

interface WrapProps {
  image?: string | null
}

const Wrap = withProps<WrapProps>()(GridColumnClean.extend)`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
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
  grid-template-rows: auto 1fr;
  grid-template-columns: 30px 1fr 30px;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`

const MessageRow = styled.div`
  align-self: flex-end;
  grid-column: 2;
  grid-row: 2;
  padding-bottom: 30px;

  @media (min-width: 481px) {
    padding-bottom: 80px;
  }
`

interface MessageProps {
  bgColor: string | null
}

const Message = withProps<MessageProps>()(H1.extend)`
  box-sizing: border-box;

  span {
    background-color: ${({ bgColor, theme }) =>
      bgColor || theme.colors.radicalRed};
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: ${({ bgColor, theme }) => bgColor && theme.contrast(bgColor)};
    padding: 0 0.6rem;
  }


  @media (min-width: 1025px) {
    width: auto;
  }
`

const Header: React.SFC<HeaderProps> = ({
  backgroundImage,
  messageBgColor = 'red',
  messageOne,
  messageTwo,
}) => {
  const backgroundColor = messageBgColor && handleColors(messageBgColor)

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
