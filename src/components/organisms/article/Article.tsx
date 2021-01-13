import { FC } from 'react'
import { Time } from '../../atoms/typographies/Time'
import { Tag } from '../../atoms/Tag'
import Img from '../../atoms/Img'

type Props = {
  title: string
  thumbnail: string | undefined
  created: number
  tags: string[]
}

export const Article: FC<Props> = ({ children, title, thumbnail, created, tags }) => (
  <>
    <>
      <Time timestamp={created} />
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <h1>{title}</h1>
      {thumbnail && (
        <Img src={thumbnail} width={1120} height={630} layout="intrinsic" alt="thumbnail" />
      )}
      {children}
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <hr />
      <div className="me">
        <Img
          src="https://untraten.sirv.com/logo.png"
          layout="fixed"
          width={80}
          height={80}
          alt="logo"
        />
        <div>
          <a href="/me">@dorarep</a>
          <div>
            小学生の頃からフリーゲーム作ってました。今はフリーランスでフルスタックエンジニアしてます。
          </div>
        </div>
      </div>
    </>
    <style jsx>{`
      article {
        width: 100%;
        max-width: 900px;
        background-color: white;
        padding: 1rem;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
      }
      .me {
        display: flex;
        flex-wrap: wrap;
      }
      .me a {
        text-decoration: none;
        color: var(--dark-main-color);
      }
      h1 {
        font-size: 1.5rem;
        line-height: 2.3rem;
        margin-bottom: 1rem;
      }
    `}</style>
    <style jsx global>{`
      .markdown-body:first-child {
        visibility: hidden;
      }
      h2 {
        font-size: 1.65rem;
        line-height: 2.2rem;
        padding: 15px;
        padding-bottom: 16px;
        margin-top: 3rem;
        margin-bottom: 2rem;
        background-color: var(--light-gray);
        border-left: 5px solid var(--dark-main-color);
        border-radius: 2px;
        font-weight: 400;
        letter-spacing: 0;
      }
      h3 {
        font-size: 1.5rem;
        line-height: 2rem;
        padding-top: 0;
        margin-top: 3rem;
        margin-bottom: 2rem;
        border-bottom: 3px solid var(--dark-main-color);
        font-weight: 400;
        letter-spacing: 0;
      }
      h4 {
        font-size: 1.3rem;
        line-height: 1.8rem;
        padding: 2px 12px;
        margin-top: 3rem;
        margin-bottom: 2rem;
        border-left: 2px solid var(--dark-main-color);
      }
      blockquote {
        margin-left: 0;
        margin-right: 0;
        padding: 1rem;
        box-sizing: border-box;
        font-style: italic;
        background: var(--light-gray);
        color: var(--dark-gray);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
        overflow-x: scroll;
      }
      blockquote p {
        padding: 0;
        margin: 7px 0;
        line-height: 1.7;
      }
      blockquote cite {
        display: block;
        text-align: right;
        color: var(--dark-gray);
        font-size: 0.9em;
      }
      em {
        font-weight: bold;
        font-style: normal;
        background: linear-gradient(transparent 60%, var(--highlight-color) 60%);
      }
      strong {
        background: linear-gradient(transparent 60%, var(--highlight-color) 60%);
      }
      ul,
      ol {
        border: dashed 2px var(--dark-highlight-color);
        background: var(--light-highlight-color);
        padding: 0.5em 0.5em 0.5em 2em;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      ul li,
      ol li {
        line-height: 1.5;
        padding: 0.5em 0;
      }
      .highlight-box {
        border-radius: 5px;
        border: solid 2px var(--dark-highlight-color);
        background-color: var(--light-highlight-color);
        font-weight: bold;
        padding: 1rem;
      }
      table {
        border-collapse: collapse;
        margin: 0 auto;
        padding: 0;
        width: 100%;
        table-layout: fixed;
        display: block;
        overflow-x: scroll;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
      table tr {
        background-color: var(--background-color);
        padding: 0.35em;
        border-bottom: 2px solid #fff;
      }
      table th,
      table td {
        padding: 1em 10px 1em 1em;
        border-right: 2px solid #fff;
      }
      table th {
        font-size: 0.85em;
      }
      table thead tr {
        background-color: var(--dark-main-color);
        color: #fff;
      }
      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: #d4d0ab;
      }
      .token.punctuation {
        color: #fefefe;
      }
      .token.property,
      .token.tag,
      .token.constant,
      .token.symbol,
      .token.deleted {
        color: #ffa07a;
      }
      .token.boolean,
      .token.number {
        color: #00e0e0;
      }
      .token.selector,
      .token.attr-name,
      .token.string,
      .token.char,
      .token.builtin,
      .token.inserted {
        color: #abe338;
      }
      .token.operator,
      .token.entity,
      .token.url,
      .language-css .token.string,
      .style .token.string,
      .token.variable {
        color: #00e0e0;
      }
      .token.atrule,
      .token.attr-value,
      .token.function {
        color: #ffd700;
      }
      .token.keyword {
        color: #00e0e0;
      }
      .token.regex,
      .token.important {
        color: #ffd700;
      }
      .token.important,
      .token.bold {
        font-weight: bold;
      }
      .token.italic {
        font-style: italic;
      }
      .token.entity {
        cursor: help;
      }
      code {
        border-radius: 0.3em;
        background-color: #eee;
        padding: 0.1em 0.4em;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      }
      pre code {
        background: #333;
        color: #f8f8f2;
        padding: 0;
      }
    `}</style>
  </>
)
