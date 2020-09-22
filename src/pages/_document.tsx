import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import ssgConfig from "../../amdxg.config";

export default class extends Document {
  render () {
    return (
      <Html lang="ja">
        <Head>
          <script data-ad-client="ca-pub-3842323225563416" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />
          <script async custom-element="amp-analytics" key="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
          <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="alternate" type="application/rss+xml" title={ssgConfig.siteName} href="/feed.xml" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <amp-analytics type="gtag" data-credentials="include">
            <script type="application/json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                vars: {
                  gtag_id: ssgConfig.gtag,
                  config: {
                    [ssgConfig.gtag]: { groups: "default" }
                  }
                }
              })
            }}>
            </script>
          </amp-analytics>
        </body>
      </Html>
    )
  }
}
