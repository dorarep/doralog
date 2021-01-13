import Prism from 'prismjs'
import * as loadLanguages from 'prismjs/components/index'
import React, { FC } from 'react'

loadLanguages(['ruby'])

type Props = {
  lang: string
  code: string
}

const CodeBlock: FC<Props> = ({ lang, code }) => (
  <pre>
    <code
      dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages[lang], lang) }}
    />
  </pre>
)

export default CodeBlock
