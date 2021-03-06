import { GetStaticPaths, GetStaticProps, NextPage, PageConfig } from 'next'
import Head from 'next/head'

import { TagsShowTemplate } from '@/templates/tags/show'
import ssgConfig from '~/amdxg.config'
import tagmap from '~/gen/tagmap.json'

type Pages = {
  title: string
  slug: string
  tags: string[]
  thumbnail?: string
}[]

type TagMap = {
  [tag: string]: Pages
}

type Props = {
  tag: string
  similarTags: string[]
  pages: Pages
}

export const config: PageConfig = {
  amp: true,
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(tagmap as TagMap).map((tag) => encodeURI(`/tags/${tag}`)),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (props) => {
  const tag = props.params?.tag as string
  const pages = (tagmap as TagMap)[tag]
  const tagCounts = pages
    .flatMap((page) => page.tags)
    .reduce((current, comparingTag) => {
      if (comparingTag !== tag) {
        current[comparingTag] = (current[comparingTag] || 0) + 1
      }
      return current
    }, {})
  const similarTags = Object.keys(tagCounts)
    .sort((a, b) => tagCounts[b] - tagCounts[a])
    .slice(0, 5)

  return {
    props: {
      tag,
      similarTags,
      pages: (tagmap as TagMap)[tag],
    } as Props,
  }
}

const TagPage: NextPage<Props> = ({ tag, similarTags, pages }) => (
  <>
    <Head>
      <title>
        {tag} - {ssgConfig.siteName}
      </title>
    </Head>
    <TagsShowTemplate tag={tag} similarTags={similarTags} pages={pages} />
  </>
)

export default TagPage
