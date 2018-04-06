// @flow

import 'what-input'
import * as React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { injectGlobal } from 'styled-components'

import Home from './pages/Home'
import About from './pages/About'
import HowWeWork from './pages/HowWeWork'
import Team from './pages/Team'
import Cases from './pages/Cases'
import Case from './pages/Case'
import Work from './pages/Work'
import OpenPosition from './pages/OpenPosition'
import Ops from './pages/Ops'
import Footer from './components/Footer/Footer'
import MobileMenu from './components/MobileMenu/MobileMenu'

injectGlobal`
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/om-oss" component={About} />
      <Route path="/hur-vi-jobbar" component={HowWeWork} />
      <Route path="/teamet" component={Team} />
      <Route exact path="/case" component={Cases} />
      <Route path="/case/:slug" component={Case} />
      <Route exact path="/jobba-hos-oss" component={Work} />
      <Route path="/jobba-hos-oss/:id" component={OpenPosition} />
      <Route path="/ops" component={Ops} />
    </Switch>
    <MobileMenu />
    <Footer />
  </React.Fragment>
)

export default App
