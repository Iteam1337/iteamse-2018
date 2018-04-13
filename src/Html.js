// @flow

import * as React from 'react'
import Safe from 'react-safe'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

type Props = {
  apolloState: string,
  content: string,
  styleTags: React.Node,
}

function Html ({ apolloState, content, styleTags }: Props) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang="sv">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Vi digitaliserar företag och organisationer genom strategi, kod och kultur"
        />

        <title>{'Iteam - There\'s a better way'}</title>
        <link rel="icon" href="/favicon.png?v=2" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />

        {assets.client.css ? (
          <link rel="stylesheet" href={assets.client.css} />
        ) : null}

        {isProduction ? (
          <script src={assets.client.js} defer />
        ) : (
          <script src={assets.client.js} defer crossOrigin="true" />
        )}

        {styleTags}
      </head>
      <body>
        <Safe.div id="root">{content}</Safe.div>

        <Safe.script>{`window.__APOLLO_STATE__ = ${apolloState}`}</Safe.script>
      </body>
    </html>
  )
}

export default Html
