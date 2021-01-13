import { FC } from 'react'

import { Main } from '@/atoms/layouts/Main'
import { SingleColumn } from '@/atoms/layouts/SingleColumn'
import { Footer } from '@/organisms/common/Footer'
import { Header } from '@/organisms/common/Header'
import { Articles } from '@/organisms/home/Articles'
import { TagName } from '@/organisms/tags/TagName'

type Pages = {
  title: string
  slug: string
  tags: string[]
  thumbnail?: string
}[]

type Props = {
  tag: string
  similarTags: string[]
  pages: Pages
}

export const TagsShowTemplate: FC<Props> = ({ tag, similarTags, pages }) => (
  <SingleColumn>
    <Header />
    <Main>
      <TagName tag={tag} similarTags={similarTags} />
      <Articles pages={pages} />
    </Main>
    <Footer />
  </SingleColumn>
)
