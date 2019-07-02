import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import compression from 'compression'
import express from 'express'
import fetch from 'node-fetch'
import React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { renderToString } from 'react-dom/server'
import { FilledContext, HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { ServerStyleSheet, theme, ThemeProvider } from './theme'
import { redirectHelper } from './utils/serverHelpers'
import { apolloUri } from './utils/serverUtils'

interface StaticContext {
  statusCode?: number
}

let assets: any

function syncAssets() {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
}

syncAssets()

const isProduction = process.env.NODE_ENV === 'production'

const server = express()
const { RAZZLE_HOST = '/api/graphql', RAZZLE_PUBLIC_DIR } = process.env

server.use(compression())

server
  .disable('x-powered-by')
  .use(express.static(RAZZLE_PUBLIC_DIR!))
  .get(
    '/*',
    redirectHelper,
    async (req: express.Request, res: express.Response) => {
      try {
        const client = new ApolloClient({
          cache: new InMemoryCache(),
          link: createHttpLink({
            fetch,
            uri: apolloUri(RAZZLE_HOST, req),
          }),
          ssrMode: true,
        })

        const sheet = new ServerStyleSheet()
        const context: StaticContext = {}
        const helmetContext: FilledContext = {
          helmet: {},
        }

        const Root = () => (
          <HelmetProvider context={helmetContext}>
            <ApolloProvider client={client}>
              <ThemeProvider theme={theme}>
                <StaticRouter context={context} location={req.url}>
                  <App />
                </StaticRouter>
              </ThemeProvider>
            </ApolloProvider>
          </HelmetProvider>
        )

        // Get Apollo State
        try {
          await getDataFromTree(<Root />)
        } catch (e) {
          console.log(e)
        }

        const apolloState = client.extract()

        // Render tree and collect CSS data
        const content = renderToString(sheet.collectStyles(<Root />))
        const styleTags = sheet.getStyleTags()

        // Get react-helmet properties
        const { helmet } = helmetContext
        const { meta, title } = helmet

        res.send(`
          <!doctype html>
<html lang="sv">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Vi digitaliserar företag och organisationer genom strategi, kod och kultur"
        />

        ${meta.toString()}
        ${title.toString()}
        <link rel="icon" href="/favicon.png?v=2" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />

        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}" />`
            : ''
        }

        ${
          isProduction
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${
                assets.client.js
              }" defer crossOrigin="true"></script>`
        }

        ${
          isProduction
            ? `
        <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MP7MZVC');</script>
        <!-- End Google Tag Manager --> 
              `
            : ''
        }

        ${styleTags}
      </head>
      <body>
        ${
          isProduction
            ? `
        <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MP7MZVC"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
            `
            : ''
        }

        <div id="root">${content}</div>

        <script>window.__APOLLO_STATE__ = ${JSON.stringify(apolloState).replace(
          /</g,
          '\\u003c'
        )}</script>
        </body>
    </html>
          `)
      } catch (error) {
        console.error(error)

        res.status(500)
        res.end(
          `An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${
            error.stack
          }`
        )
      }
    }
  )

export default server
