import { FC } from 'react'

import { ExternalLink } from '@/atoms/buttons/ExternalLink'
import products from '~/master/products.json'

type Props = {
  productKey: string
}

type Product = {
  title: string
  shortTitle: string
  amazonUrl?: string
  kindleUrl?: string
  rakutenUrl?: string
  thumbnail?: string
  article?: string
  width: string
  height: string
}

const Amazon: FC<Props> = ({ productKey }) => {
  const product: Product = products[productKey]

  return (
    <>
      <div className="card">
        <amp-img
          alt={product.title}
          src={product.thumbnail}
          width={product.width}
          height={product.height}
        />
        <div className="body">
          <p>{product.title}</p>
          <div>
            {product.amazonUrl && <ExternalLink href={product.amazonUrl}>Amazon</ExternalLink>}
            {product.kindleUrl && <ExternalLink href={product.kindleUrl}>Kindle</ExternalLink>}
            {product.rakutenUrl && <ExternalLink href={product.rakutenUrl}>楽天市場</ExternalLink>}
            {product.article && (
              <ExternalLink href={`/articles/${product.article}`}>読書感想文</ExternalLink>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          margin-top: 2rem;
          margin-bottom: 2rem;
          padding: 1rem;
          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
          transition: 0.3s ease;
          flex-wrap: wrap;
        }
        p {
          font-weight: bold;
        }
        .card:hover {
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .body {
          margin-left: 1rem;
        }
      `}</style>
    </>
  )
}

export default Amazon
