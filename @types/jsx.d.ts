declare namespace JSX {
  import { ReactNode } from 'react'

  interface AmpImg {
    alt?: string
    src?: string
    width?: string | number
    height?: string | number
    layout?: string
    srcset?: string
    className?: string
    children?: ReactNode
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
