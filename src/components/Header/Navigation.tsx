import * as React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import { Link, NavLink } from 'react-router-dom'
import SVG from 'react-svg'
import { ABOUT_PAGE_QUERY } from '../../pages/About'
import { CASES_PAGE_QUERY } from '../../pages/Cases'
import { HOME_PAGE_QUERY } from '../../pages/Home'
import { HOW_WE_WORK_PAGE_QUERY } from '../../pages/HowWeWork'
import { OFFERS_PAGE_QUERY } from '../../pages/Offers'
import { TEAM_PAGE_QUERY } from '../../pages/Team'
import { WORK_PAGE_QUERY } from '../../pages/Work'
import styled, { createGlobalStyle, keyframes } from '../../theme'
import NativeLink from '../Link/NativeLink'
import logo from './img/iteam.svg'
import logoBlack from './img/iteam_black.svg'

interface NavigationProps {
  isInverted?: boolean
  noShadow?: boolean
}
interface NavigationState {
  indicatorLocation: number
  indicatorWidth: number
}

const Wrap = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 1;
  grid-template-columns: 150px 1fr;

  @media (min-width: 481px) {
    padding: 0;
  }

  ${({ theme }) =>
    theme.browsers.ie10Or11(`
    display: flex;
    justify-content: space-between;
  `)};
`

const LogoLink = styled(Link)`
  &:focus {
    outline: none;
  }
`

const Logo = styled(SVG)`
  > * svg {
    max-width: 75%;
  }

  @media (min-width: 1025px) {
    > * svg {
      max-width: 100%;
    }
  }
`

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

interface IndicatorProps {
  indicatorLocation: number
  indicatorWidth: number
}

const Indicator =
  styled.div <
  IndicatorProps >
  `
  animation: ${slideDown} 300ms ease-in-out 1;
  background-color: #fff;
  top: 0;
  height: 5px;
  left: ${({ indicatorLocation }) => `${indicatorLocation}px`};
  position: absolute;
  width: ${({ indicatorWidth }) => `${indicatorWidth}px`};
`

const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:focus {
    outline: none;
  }
`

const ExternalLink = styled(NativeLink)`
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:focus {
    outline: none;
  }
`

const NavigationItems =
  styled.div <
  NavigationProps >
  `
  display: none;
  justify-self: flex-end;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;

  @media (min-width: 1025px) {
    display: block;
  }

  ${StyledLink}, ${ExternalLink} {
    color: ${({ isInverted }) => (isInverted ? '#000' : '#fff')};
    text-shadow: ${({ noShadow }) =>
      noShadow ? 'none' : `0px 1px 14px rgba(0, 0, 0, 0.5)`};

    &:hover {
      color: ${({ isInverted }) => (isInverted ? '#444' : '#ccc')};
    }
  }
`

const GlobalStyle = createGlobalStyle`
  html[data-whatinput="keyboard"] {
    ${LogoLink} {
      &:focus {
        outline: 3px solid #54FBAC;
        outline-offset: 3px;
      }
    }

    ${StyledLink} {
      &:focus {
        border-bottom: 3px solid #54FBAC;
        color: #54FBAC;
      }
    }
  }
`

export class Navigation extends React.Component<
  WithApolloClient<NavigationProps>,
  NavigationState
> {
  state = {
    indicatorLocation: 0,
    indicatorWidth: 0,
  }

  componentDidMount() {
    const active = document.querySelector('.active-nav') as HTMLAnchorElement

    if (active) {
      this.setState({
        indicatorLocation: active.offsetLeft,
        indicatorWidth: active.offsetWidth,
      })
    }
  }

  prefetchPage = (page: string) => () => {
    let query

    switch (page) {
      case 'home':
        query = HOME_PAGE_QUERY
        break
      case 'about':
        query = ABOUT_PAGE_QUERY
        break
      case 'case':
        query = CASES_PAGE_QUERY
        break
      case 'how-we-work':
        query = HOW_WE_WORK_PAGE_QUERY
        break
      case 'team':
        query = TEAM_PAGE_QUERY
        break
      case 'work':
        query = WORK_PAGE_QUERY
        break
      case 'erbjudanden':
        query = OFFERS_PAGE_QUERY
        break
      default:
        break
    }

    if (query) {
      this.props.client.query({
        query,
      })
    }
  }

  render() {
    const { isInverted = false, noShadow = false } = this.props
    const { indicatorLocation, indicatorWidth } = this.state

    return (
      <Wrap>
        <GlobalStyle />
        <LogoLink onMouseEnter={this.prefetchPage('home')} to="/">
          <Logo data-testid="logo" path={isInverted ? logoBlack : logo} />
        </LogoLink>
        <NavigationItems isInverted={isInverted} noShadow={noShadow}>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('erbjudanden')}
            to="/erbjudanden"
          >
            Erbjudanden
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('case')}
            to="/case"
          >
            Våra case
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('how-we-work')}
            to="/hur-vi-jobbar"
          >
            Metod
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('team')}
            to="/medarbetare"
          >
            Medarbetare
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('work')}
            to="/karriar"
          >
            Karriär
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('about')}
            to="/om-oss"
          >
            Om
          </StyledLink>
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            activeClassName="active-nav"
            href="https://blog.iteam.life/"
          >
            Labs
          </ExternalLink>
          <Indicator
            indicatorLocation={indicatorLocation}
            indicatorWidth={indicatorWidth}
          />
        </NavigationItems>
      </Wrap>
    )
  }
}

export default withApollo<NavigationProps>(Navigation)
