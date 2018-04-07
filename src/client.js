import App from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './ApolloSetup'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import ScrollToTop from './ScrollToTop'

hydrate(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
