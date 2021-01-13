import { GetStaticProps, NextPage, PageConfig } from 'next'
import Head from 'next/head'

import { Main } from '@/atoms/layouts/Main'
import { SingleColumn } from '@/atoms/layouts/SingleColumn'
import { Footer } from '@/organisms/common/Footer'
import { Header } from '@/organisms/common/Header'
import { Articles } from '@/organisms/home/Articles'
import ssgConfig from '~/amdxg.config'
import tagmap from '~/gen/tagmap.json'

type Props = {
  pages: {
    title: string
    created: number
    tags: string[]
    slug: string
  }[]
  tags: string[]
}

export const config: PageConfig = {
  amp: true,
}

export const getStaticProps: GetStaticProps = async () => {
  const { default: pages } = await import('../../gen/pages.json')
  const tags: string[] = Object.keys(tagmap)

  return {
    props: {
      pages,
      tags,
    },
  }
}

const IndexPage: NextPage<Props> = ({ pages }) => (
  <SingleColumn>
    <Head>
      <title>{ssgConfig.siteName}</title>
    </Head>
    <Header />
    <Main>
      <Articles pages={pages} />
    </Main>
    <Footer />
  </SingleColumn>
)

export default IndexPage
