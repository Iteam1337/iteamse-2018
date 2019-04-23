import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface ScrollToTopProps {
  children: React.ReactNode
}

type MergedProps = ScrollToTopProps & RouteComponentProps<{}>

class ScrollToTop extends React.Component<MergedProps> {
  componentDidUpdate(prevProps: MergedProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
