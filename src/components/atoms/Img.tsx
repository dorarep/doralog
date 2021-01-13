import { FC } from 'react'

type Props = {
  src: string
  width: number
  height: number
  layout?: string
  alt: string
  widthSet?: number[]
}

const Img: FC<Props> = ({ src, widthSet, layout = 'responsive', ...props }) => {
  const srcSet = (subParam: string) =>
    widthSet ? widthSet.map((w) => `${src}?w=${w}${subParam} ${w}w`).join(', ') : undefined

  return (
    <>
      <amp-img
        src={`${src}?format=webp`}
        srcset={srcSet('&format=webp')}
        layout={layout}
        {...props}
      >
        <div {...{ fallback: 'fallback' }}>
          <amp-img src={src} srcset={srcSet('')} layout={layout} {...props} />
        </div>
      </amp-img>
    </>
  )
}

export default Img
