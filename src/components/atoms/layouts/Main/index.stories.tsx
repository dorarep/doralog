import { Main } from './index'
import { ComponentProps } from 'react'

export default {
  title: 'layouts/Main',
  component: Main,
}

export const Default = (props: ComponentProps<typeof Main>) => <Main {...props}>Contents</Main>
