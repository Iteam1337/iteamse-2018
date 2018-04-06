// @flow

import * as React from 'react'
import styled, { injectGlobal } from 'styled-components'
import logo from './img/iteam.png'
import { NavLink, Link } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import { HomePageQuery } from '../../pages/Home'
import { AboutPageQuery } from '../../pages/About'
import { HowWeWorkPageQuery } from '../../pages/HowWeWork'
import { TeamPageQuery } from '../../pages/Team'
import { OperationsPageQuery } from '../../pages/Ops'
import { WorkPageQuery } from '../../pages/Work'

type State = {
  client: {
    query: Function,
  },
  indicatorLocation: number,
  indicatorWidth: number,
}

const Wrap = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 150px 1fr;
  padding: 20px;

  @media (min-width: 481px) {
    padding: 0;
  }
`

const LogoLink = styled(Link)`
  &:focus {
    outline: none;
  }
`

const Logo = styled.img`
  max-width: 100%;
`

const NavigationItems = styled.div`
  display: none;
  justify-self: flex-end;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;

  @media (min-width: 481px) {
    display: block;
  }
`

const Indicator = styled.div`
  background-color: #fff;
  top: 0;
  height: 5px;
  left: 0;
  position: absolute;
  transform: ${({ indicatorLocation }) => `translateX(${indicatorLocation}px)`};
  transition: transform 300ms ease-in-out, width 300ms ease-in-out;
  width: ${({ indicatorWidth }) => `${indicatorWidth}px`};
`

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 0px 1px 14px rgba(0, 0, 0, 0.5);

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:focus {
    outline: none;
  }
`

injectGlobal`
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

class Navigation extends React.Component<*, State> {
  state = {
    indicatorLocation: 0,
    indicatorWidth: 0,
  }

  componentDidMount () {
    const active = document.querySelector('.active-nav')

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
        query = HomePageQuery
        break
      case 'about':
        query = AboutPageQuery
        break
      case 'how-we-work':
        query = HowWeWorkPageQuery
        break
      case 'team':
        query = TeamPageQuery
        break
      case 'ops':
        query = OperationsPageQuery
        break
      case 'work':
        query = WorkPageQuery
        break
    }

    if (query) {
      this.props.client.query({
        query,
      })
    }
  }

  render () {
    const { indicatorLocation, indicatorWidth } = this.state

    return (
      <Wrap>
        <LogoLink onMouseEnter={this.prefetchPage('home')} to="/">
          <Logo src={logo} />
        </LogoLink>

        <NavigationItems>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('about')}
            to="/om-oss"
          >
            Om oss
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('how-we-work')}
            to="/hur-vi-jobbar"
          >
            Hur vi jobbar
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('team')}
            to="/teamet"
          >
            Teamet
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
            onMouseEnter={this.prefetchPage('work')}
            to="/jobba-hos-oss"
          >
            Jobba hos oss
          </StyledLink>
          <StyledLink
            activeClassName="active-nav"
            onMouseEnter={this.prefetchPage('ops')}
            to="/ops"
          >
            Drift & Support
          </StyledLink>
          <Indicator
            indicatorLocation={indicatorLocation}
            indicatorWidth={indicatorWidth}
          />
        </NavigationItems>
      </Wrap>
    )
  }
}

export default withApollo(Navigation)
