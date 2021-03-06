import { GetStaticPaths, GetStaticProps, NextPage, PageConfig } from 'next'
import Head from 'next/head'
import ReactDOMServer from 'react-dom/server'

import { ArticlesShowTemplate } from '@/templates/articles/show'
import ssgConfig from '~/amdxg.config'
import pages from '~/gen/pages.json'

type Toc = {
  depth: number
  id: string
  title: string
}

type History = {
  date: string
  hash: string
  author: string
  message: string
}

type Props = {
  slug: string
  toc: Toc[]
  history: History[]
  frontmatter: {
    description?: string
    title: string
    created: number
    tags?: string[]
    thumbnail?: string
  }
  html: string
}

export const config: PageConfig = {
  amp: true,
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: pages.map((page) => encodeURI(`/articles/${page.slug}`)),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (props): Promise<{ props: Props }> => {
  const slug = props.params?.slug as string
  const { default: Doc, toc, frontmatter } = await import(`../../../docs/${slug}.mdx`)
  const { default: history } = await import(`../../../gen/${slug}.history.json`)

  return {
    props: {
      slug,
      toc,
      history,
      frontmatter: frontmatter || { title: slug, created: 0, tags: [] },
      html: ReactDOMServer.renderToStaticMarkup(<Doc amp />),
    },
  }
}

const makeStructuredData = (props: Props) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://google.com/article',
  },
  headline: props.frontmatter.title,
  image: [props.frontmatter.thumbnail],
  datePublished: new Date(props.frontmatter.created),
  dateModified: new Date(props.history[0]?.date),
  author: {
    '@type': 'Person',
    name: 'dorarep',
  },
  publisher: {
    '@type': 'Organization',
    logo: {
      '@type': 'ImageObject',
      url: 'https://storage.cloud.google.com/mognies/logo.png',
    },
    name: 'モグニーズ',
  },
})

const ArticlePage: NextPage<Props> = (props) => (
  <>
    <Head>
      <title>
        {props.frontmatter.title} - {ssgConfig.siteName}
      </title>
      <meta property="og:title" content={props.frontmatter.title} />
      <meta name="description" content={props.frontmatter.description ?? ''} />
      <meta name="twitter:site" content="@dorarep" />
      <meta property="og:description" content={props.frontmatter.description ?? ''} />
      <meta property="og:url" content={ssgConfig.host + '/' + props.slug} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={props.frontmatter.thumbnail || ssgConfig.host + '/ogp/' + props.slug + '.png'}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeStructuredData(props)) }}
      />
    </Head>
    <ArticlesShowTemplate frontmatter={props.frontmatter} html={props.html} />
  </>
)

export default ArticlePage
