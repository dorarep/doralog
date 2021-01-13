import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import ssgConfig from '../../amdxg.config'

export default class extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title={ssgConfig.siteName}
            href="/feed.xml"
          />
          <meta name="theme-color" content="#f7f6f5" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <amp-analytics type="gtag" data-credentials="include">
            <script
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  vars: {
                    gtag_id: ssgConfig.gtag,
                    config: {
                      [ssgConfig.gtag]: { groups: 'default' },
                    },
                  },
                }),
              }}
            />
          </amp-analytics>
        </body>
      </Html>
    )
  }
}
