import { Body } from './index'
import { ComponentProps } from 'react'

export default {
  title: 'layouts/Body',
  component: Body,
}

export const Default = (props: ComponentProps<typeof Body>) => <Body {...props}>Contents</Body>
