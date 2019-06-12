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
import NotFound from './pages/NotFound'
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

const withRoot = (Component: any) => () => (
  <>
    <Component />
    <MobileMenu />
    <Footer />
  </>
)

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={withRoot(Home)} />
      <Route path="/om-oss" component={withRoot(About)} />
      <Route path="/hur-vi-jobbar" component={withRoot(HowWeWork)} />
      <Route exact path="/medarbetare" component={withRoot(Team)} />
      <Route path="/medarbetare/:shortName" component={withRoot(TeamMember)} />
      <Route exact path="/case" component={withRoot(Cases)} />
      <Route path="/case/:slug" component={withRoot(Case)} />
      <Route exact path="/jobba-hos-oss" component={withRoot(Work)} />
      <Route path="/jobba-hos-oss/:id" component={withRoot(OpenPosition)} />
      <Route path="/ops" component={withRoot(Ops)} />
      <Route path="/erbjudanden" component={withRoot(Offers)} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
