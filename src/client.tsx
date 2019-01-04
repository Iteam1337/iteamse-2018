import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'what-input'
import { client } from './apollo'
import App from './App'
import ScrollToTop from './ScrollToTop'
import { theme, ThemeProvider } from './theme'

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
