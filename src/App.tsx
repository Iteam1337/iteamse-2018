import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from './theme'

import Footer from './components/Footer/Footer'
import MobileMenu from './components/MobileMenu/MobileMenu'
import About from './pages/About'
import Case from './pages/Case'
import Cases from './pages/Cases'
import Home from './pages/Home'
import HowWeWork from './pages/HowWeWork'
import Offers from './pages/Offers'
import OpenPosition from './pages/OpenPosition'
import Ops from './pages/Ops'
import Team from './pages/Team'
import TeamMember from './pages/TeamMember'
import Work from './pages/Work'

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/om-oss" component={About} />
      <Route path="/hur-vi-jobbar" component={HowWeWork} />
      <Route exact path="/medarbetare" component={Team} />
      <Route path="/medarbetare/:shortName" component={TeamMember} />
      <Route exact path="/case" component={Cases} />
      <Route path="/case/:slug" component={Case} />
      <Route exact path="/jobba-hos-oss" component={Work} />
      <Route path="/jobba-hos-oss/:id" component={OpenPosition} />
      <Route path="/ops" component={Ops} />
      <Route path="/erbjudanden" component={Offers} />
    </Switch>
    <MobileMenu />
    <Footer />
  </>
)

export default App
