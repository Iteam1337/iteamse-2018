import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { hydrate } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { client } from './apollo'
import App from './App'
import ScrollToTop from './ScrollToTop'
import { theme } from './theme'

const helmetContext = {}

hydrate(
  <HelmetProvider context={helmetContext}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </HelmetProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
