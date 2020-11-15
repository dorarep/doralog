declare namespace JSX {
  import { ReactNode } from 'react'

  interface AmpImg {
    alt?: string
    src?: string
    width?: string
    height?: string
    layout?: string
    srcset?: string
    className?: string
  }
  interface AmpAnalytics {
    children?: ReactNode
    type?: string
    'data-credentials'?: string
  }
  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-analytics': AmpAnalytics
  }
}
