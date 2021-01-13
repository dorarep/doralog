import { FC } from 'react'
import Img from '../../atoms/Img'
import Link from 'next/link'

type Props = {
  pages: {
    title: string
    slug: string
    thumbnail?: string
  }[]
}

export const Articles: FC<Props> = ({ pages }) => (
  <>
    <div className="wrapper">
      {pages.map((page) => (
        <Link href={`/articles/${page.slug}`} key={page.slug}>
          <a>
            <article className="article">
              {page.thumbnail && (
                <Img
                  alt={page.title}
                  layout="responsive"
                  width={560}
                  height={315}
                  src={page.thumbnail}
                  widthSet={[320, 560]}
                />
              )}
            </article>
            <div className="article-title">{page.title}</div>
          </a>
        </Link>
      ))}
    </div>
    <style jsx>{`
      .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }
      .article-title {
        font-weight: bold;
        color: var(--font-color);
        padding: 0 0.5rem;
        height: 68px;
        overflow: hidden;
      }
      a {
        text-decoration: none;
      }
      .article {
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
        transition: 0.3s ease;
      }
      .article:hover {
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
      }
    `}</style>
  </>
)
