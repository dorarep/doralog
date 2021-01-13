import { FC } from 'react'

export const Body: FC = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        width: 100vw;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 62px 1fr 32px;
        gap: 2rem;
      }
    `}</style>
    <style jsx global>{`
      pre {
        background: #333;
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
        border-radius: 0.3em;
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
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        tab-size: 4;
      }
      pre code {
        background: #333;
        color: #f8f8f2;
      }
      html,
      div,
      span,
      applet,
      object,
      iframe,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      del,
      dfn,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }
      body {
        font-family: sans-serif;
        line-height: 2;
        font-size: 17px;
        color: var(--font-color);
        background-color: var(--background-color);
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      p {
        margin-block-start: 1.2rem;
        margin-block-end: 1.2rem;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      :root {
        --dark-main-color: #051e34;
        --main-color: #407979;
        --light-main-color: #e4f1ef;
        --font-color: #414042;
        --background-color: #f7f6f5;
        --shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        --dark-highlight-color: #ffa07a;
        --highlight-color: #fff7de;
        --light-highlight-color: #fffdf7;
        --dark-gray: #515151;
        --gray: #c4c4c4;
        --light-gray: #f5f5f5;
        --light-secondary-color: #fff8f3;
        --secondary-color: #ffc08d;
      }
    `}</style>
  </>
)
