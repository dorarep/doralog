import { ComponentProps } from 'react'

import { Main } from './index'

export default {
  title: 'layouts/Main',
  component: Main,
}

export const Default = (props: ComponentProps<typeof Main>) => <Main {...props}>Contents</Main>
