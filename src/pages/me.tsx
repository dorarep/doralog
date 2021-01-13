import Head from 'next/head'
import { Body } from '../components/atoms/layouts/Body'
import { NextPage, PageConfig } from 'next'
import ssgConfig from '../../amdxg.config'
import { Header } from '../components/organisms/common/Header'
import { Main } from '../components/atoms/layouts/Main'
import { Footer } from '../components/organisms/common/Footer'
import { Tag } from '../components/atoms/Tag'

export const config: PageConfig = {
  amp: true,
}

const IndexPage: NextPage = () => (
  <>
    <Body>
      <Head>
        <title>About me - {ssgConfig.siteName}</title>
      </Head>
      <Header />
      <Main>
        <div className="hero">
          <amp-img
            className="avatar"
            width="160"
            height="160"
            src="https://untraten.sirv.com/logo.png"
          />
          <div>
            <h1 className="name">dorarep</h1>
            <p className="description">Full-stack web developer</p>
            <Tag>TypeScript</Tag>
            <Tag>Ruby</Tag>
            <Tag>インフラ</Tag>
            <Tag>組織</Tag>
          </div>
        </div>

        <div className="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AWS Certified Solution Architect Associate</li>
          </ul>
        </div>
      </Main>
      <Footer />
    </Body>
    <style jsx>{`
      .hero {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
      }
      .name {
        font-size: 1.2rem;
        margin: 0;
      }
      .description {
        margin: 0;
      }
      .certifications {
        background-color: white;
        padding: 2rem;
        margin-top: 2rem;
      }
    `}</style>
  </>
)

export default IndexPage
