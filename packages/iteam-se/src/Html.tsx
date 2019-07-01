import * as React from 'react'
import Safe from 'react-safe'

let assets: any

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!)
}

syncLoadAssets()

interface HtmlProps {
  apolloState: string
  content: string
  styleTags: React.ReactNode
}

const Html: React.SFC<HtmlProps> = ({ apolloState, content, styleTags }) => {
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

        {/* <!-- Google Tag Manager --> */}
        {isProduction && (
          <Safe.script
          >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MP7MZVC');`}</Safe.script>
        )}
        {/* <!-- End Google Tag Manager --> */}

        {styleTags}
      </head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {isProduction && (
          <Safe.noscript
          >{`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MP7MZVC"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}</Safe.noscript>
        )}
        {/* // <!-- End Google Tag Manager (noscript) --> */}

        <Safe.div id="root">{content}</Safe.div>

        <Safe.script>{`window.__APOLLO_STATE__ = ${apolloState}`}</Safe.script>
      </body>
    </html>
  )
}

export default Html
