import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import 'what-input'

import Footer from './components/Footer/Footer'
import MobileMenu from './components/MobileMenu/MobileMenu'
import About from './pages/About'
import Ai from './pages/Ai'
import Case from './pages/Case'
import Cases from './pages/Cases'
import Home from './pages/Home'
import HowWeWork from './pages/HowWeWork'
import NotFound from './pages/NotFound'
import OpenPosition from './pages/OpenPosition'
import Ops from './pages/Ops'
import Team from './pages/Team'
import TeamMember from './pages/TeamMember'
import Work from './pages/Work'

injectGlobal`
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
`

const withRoot = (Component: any) => class WithRoot extends React.Component {
  render() {
    return (
      <>
        <Component />
        <Footer />
        <MobileMenu />
      </>
    )
  }
}

const App = () => (
  <React.Fragment>
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
      <Route path="/erbjudanden/ai" component={withRoot(Ai)} />
      <Route path="/404" component={NotFound} />
      <Route render={props => (<NotFound children={props} status={404} />)} />
    </Switch>
  </React.Fragment>
)

export default App
