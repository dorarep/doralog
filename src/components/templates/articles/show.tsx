import { FC } from 'react'

import { Main } from '@/atoms/layouts/Main'
import { SingleColumn } from '@/atoms/layouts/SingleColumn'
import { Article } from '@/organisms/article/Article'
import { Footer } from '@/organisms/common/Footer'
import { Header } from '@/organisms/common/Header'

type Props = {
  frontmatter: {
    description?: string
    title: string
    created: number
    tags?: string[]
    thumbnail?: string
  }
  html: string
}

export const ArticlesShowTemplate: FC<Props> = (props) => (
  <SingleColumn>
    <Header />
    <Main>
      <Article
        title={props.frontmatter.title}
        thumbnail={props.frontmatter.thumbnail}
        created={props.frontmatter.created}
        tags={props.frontmatter.tags || []}
      >
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </Article>
    </Main>
    <Footer />
  </SingleColumn>
)
